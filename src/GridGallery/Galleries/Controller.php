<?php

/**
 * Class GridGallery_Galleries_Controller
 * The controller of the Galleries module.
 *
 * @package GridGallery\Galleries
 * @author  Artur Kovalevsky
 */
class GridGallery_Galleries_Controller extends GridGallery_Core_BaseController
{

    const STD_VIEW = 'list'; // list or block

    /**
     * {@inheritdoc}
     */
    protected function getModelAliases()
    {
        return array(
            'galleries' => 'GridGallery_Galleries_Model_Galleries',
            'resources' => 'GridGallery_Galleries_Model_Resources',
            'settings' => 'GridGallery_Galleries_Model_Settings',
            'preset' => 'GridGallery_Galleries_Model_Preset',
            'photos' => 'GridGallery_Photos_Model_Photos',
            'folders' => 'GridGallery_Photos_Model_Folders',
            'position' => 'GridGallery_Photos_Model_Position',
        );
    }

    /**
     * Index Action
     * Shows the list of the galleries
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function indexAction(Rsc_Http_Request $request)
    {
        $stats = $this->getEnvironment()->getModule('stats');
        $stats->save('Galleries.tab');

        /*if ('grid-gallery-new' === $request->query->get('page')) {
            $redirectUrl = $this->generateUrl('galleries') . '#add';

            return $this->redirect($redirectUrl);
        }*/

        $galleries = $this->getModel('galleries')->getAll();
        $settings = $this->getModel('settings');

        $twig = $this->getEnvironment()->getTwig();
        $twig->addFunction(
            new Twig_SimpleFunction(
                'get_image_src',
                'wp_get_attachment_image_src'
            )
        );

        $settings->PostThumb($galleries);

        return $this->response(
            '@galleries/index.twig',
            array(
                'galleries' => $galleries,
                'attachment_size' => 'gg_gallery_thumbnail',
            )
        );
    }

    /**
     * Preview Action
     */
    public function previewAction(Rsc_Http_Request $request)
    {
        $this->saveEvent('galleries.preview');

        $galleryId = $request->query->get('gallery_id');
        $shortcode = $this->getEnvironment()
            ->getConfig()
            ->get('shortcode_name', 'grid-gallery');

        try {
            $preview = new GridGallery_Galleries_Model_Preview();
            $postId = $preview->setPostContent(
                sprintf('[%s id="%s"]', $shortcode, $galleryId)
            );
        } catch (Exception $e) {
            return $this->response('error.twig', array(
                'message' => $e->getMessage(),
            ));
        }

        return $this->response('@galleries/preview.twig', array(
            'base_url' => get_bloginfo('wpurl'),
            'post_id' => $postId,
            'gallery_id' => $galleryId,
        ));
    }

    /**
     * View Action
     * Renders single gallery page
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function viewAction(Rsc_Http_Request $request)
    {
        if (!$galleryId = $request->query->get('gallery_id')) {
            $this->redirect($this->generateUrl('galleries', 'index'));
        }

        if (!$gallery = $this->getModel('galleries')->getById(
            (int)$galleryId
        )
        ) {
            $this->redirect($this->generateUrl('galleries', 'index'));
        }

        $position = $this->getModel('position');

        if (is_object($gallery) && (property_exists($gallery, 'photos') && is_array($gallery->photos))) {
            foreach ($gallery->photos as $index => $row) {
                $gallery->photos[$index] = $position->setPosition(
                    $row,
                    'gallery',
                    $gallery->id
                );
            }

            $gallery->photos = $position->sort($gallery->photos);
        }

        return $this->response(
            '@galleries/view.twig',
            array(
                'gallery' => $gallery,
                'viewType' => $request->query->get('view', self::STD_VIEW),
                'ajaxUrl' => admin_url('admin-ajax.php'),
            )
        );
    }

    /**
     * List Action
     * Returns the AJAX response with galleries list
     *
     * @return Rsc_Http_Response
     */
    public function listAction()
    {
        return $this->response(
            'ajax',
            array(
                'galleries' => $this->getModel('galleries')->getList(),
            )
        );
    }

    /**
     * Create Action
     * Creates the new gallery from the POST request
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function createAction(Rsc_Http_Request $request)
    {
        $galleries = $this->getModel('galleries');
        $language = $this->getEnvironment()->getLang();
        $logger = $this->getEnvironment()->getLogger();
        $config = $this->getEnvironment()->getConfig();

        $stats = $this->getEnvironment()->getModule('stats');
        $stats->save('galleries.create');

        try {
            $galleries->createFromRequest($request, $language, $config);
        } catch (Exception $e) {
            if ($logger) {
                $logger->error(
                    'Create a new gallery failed: {exception}',
                    array('exception' => $e)
                );
            }

            return $this->response(
                'ajax',
                $this->getErrorResponseData($e->getMessage())
            );
        }

        return $this->response(
            'ajax',
            $this->getSuccessResponseData(
                $this->translate('New gallery successfully created'),
                array(
                    'id' => $galleries->getInsertId(),
                    'url' => $this->generateUrl('galleries', 'settings', array(
                        'gallery_id' => $galleries->getInsertId(),
                    ))
                )
            )
        );
    }

    /**
     * Attach Action
     * Attaches resources to the specified gallery
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function attachAction(Rsc_Http_Request $request)
    {
        $logger = $this->getEnvironment()->getLogger();
        $lang = $this->getEnvironment()->getLang();

        try {

            $gid = $this->getModel('resources')->attachFromRequest($request, $lang);

        } catch (GridGallery_Galleries_Exception_AttachException $e) {

            if ($logger) {
                $logger->error(
                    'Failed to attach resources to gallery: {exception}',
                    array(
                        'exception' => $e,
                    )
                );
            }

            return $this->response(
                'ajax',
                $this->getErrorResponseData(
                    $e->getMessage()
                )
            );
        }

        $galleries = new GridGallery_Galleries_Model_Galleries();
        $gallery = $galleries->getById($gid);

        return $this->response(
            'ajax',
            $this->getSuccessResponseData(
                sprintf(
                    $lang->translate(
                        'The resources are successfully attached to the <a href="%s">%s</a>'
                    ),
                    $this->generateUrl(
                        'galleries',
                        'view',
                        array('gallery_id' => $gid)
                    ),
                    $gallery->title
                )
            )
        );

    }

    public function chooseAction(Rsc_Http_Request $request)
    {
        $resourceId = $request->post->get('resources');
        $galleryId = $request->post->get('gallery_id');

        $settings = $this->getModel('settings')->get($galleryId);
        if($resourceId[0]['id']) {
            $photo = $this->getModel('photos')->getById($resourceId[0]['id']);
        }

        $settings->data['previewImage'] = $photo->attachment_id;

        $this->getModel('settings')->save($galleryId, $settings->data);

        update_option('previewImageId', $photo->attachment_id);

        return $this->response(Rsc_Http_Response::AJAX,
            array('url' => $this->generateUrl('galleries', 'settings', array('gallery_id' => $galleryId)),
                'message' => 'Preview image successfully changed'
            )
        );
    }

    //Uncomment to allow getting tooltips url
    /*public function getTooltipsUrlAction(Rsc_Http_Request $request) {
        $url = $this->getEnvironment()->getConfig()->get('plugin_url');

        return $this->response(Rsc_Http_Response::AJAX,
            array('url' => $url,
                'message' => 'Preview image successfully changed'
            )
        );
    }*/

    public function showPresetsAction(Rsc_Http_Request $request) {
        return $this->response('@galleries/gallery_preset.twig',
            array('url' => $this->generateUrl('galleries'))
        );
    }

    /**
     * Rename Action
     * Renames the specified gallery
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function renameAction(Rsc_Http_Request $request)
    {
        $lang = $this->getEnvironment()->getLang();
        $logger = $this->getEnvironment()->getLogger();

        $stats = $this->getEnvironment()->getModule('stats');
        $stats->save('galleries.rename');

        try {

            $this->getModel('galleries')->renameFromRequest($request, $lang);

        } catch (Exception $e) {

            if ($logger) {
                $logger->error(
                    'Invalid argument specified: {exception}',
                    array(
                        'exception' => $e,
                    )
                );
            }

            return $this->response(
                'ajax',
                $this->getErrorResponseData(
                    $e->getMessage()
                )
            );

        }

        return $this->response(
            'ajax',
            $this->getSuccessResponseData(
                $lang->translate('Title successfully updated')
            )
        );
    }

    /**
     * Delete Action
     * Deletes the gallery
     *
     * @param Rsc_Http_Request $request An instance of the HTTP request
     * @return Rsc_Http_Response
     */
    public function deleteAction(Rsc_Http_Request $request)
    {
        $env = $this->getEnvironment();
        $lang = $env->getLang();
        $logger = $env->getLogger();
        $prefix = $env->getConfig()->get('hooks_prefix');

        $stats = $this->getEnvironment()->getModule('stats');
        $stats->save('galleries.delete');

        try {

            $this->getModel('galleries')->deleteFromRequest(
                $request,
                $lang,
                $prefix
            );

        } catch (Exception $e) {

            if ($logger) {
                $logger->error(
                    'Failed to delete the gallery: {exception}',
                    array(
                        'exception' => $e,
                    )
                );
            }

            return $this->response(
                'ajax',
                $this->getErrorResponseData($e->getMessage())
            );
        }

        return $this->redirect($this->generateUrl('galleries'));
    }

    /**
     * Deletes the resources from the specified gallery.
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function deleteResourceAction(Rsc_Http_Request $request)
    {
        $resources = $this->getModel('resources');

        try {
            $resources->deleteFromRequest($request);
        } catch (Exception $e) {
            return $this->response(
                'ajax',
                $this->getErrorResponseData($e->getMessage())
            );
        }

        return $this->response('ajax', $this->getSuccessResponseData('Deleted successfully.'));

    }

    /**
     * Shows the page with photos to attach them to the gallery.
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function addImagesAction(Rsc_Http_Request $request)
    {
        if (null === $galleryId = $request->query->get('gallery_id')) {
            // 404 - gallery not found
        }

        /** @var GridGallery_Galleries_Model_Galleries $galleries */
        $galleries = $this->getModel('galleries');
        $gallery = $galleries->getById($galleryId);


        return $this->response(
            '@galleries/add_images.twig',
            array(
                'gallery' => $gallery,
                'photos' => $this->getModel('photos')->getAllWithoutFolders(),
                'folders' => $this->getModel('folders')->getAll(),
                'viewType' => $request->query->get('view', 'block'),
            )
        );
    }

    public function choosePreviewImageAction(Rsc_Http_Request $request)
    {
        if (null === $galleryId = $request->query->get('gallery_id')) {
            // 404 - gallery not found
        }

        /** @var GridGallery_Galleries_Model_Galleries $galleries */
        $galleries = $this->getModel('galleries');
        $gallery = $galleries->getById($galleryId);


        return $this->response(
            '@galleries/choose_image.twig',
            array(
                'gallery' => $gallery,
                'photos' => $this->getModel('photos')->getAllWithoutFolders(),
                'folders' => $this->getModel('folders')->getAll(),
                'viewType' => $request->query->get('view', 'list'),
            )
        );
    }

    /**
     * Settings Action.
     * Manage gallery settings
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function settingsAction(Rsc_Http_Request $request)
    {
        $galleryId = $request->query->get('gallery_id');

        $this->getEnvironment()->getConfig()->load('@galleries/tooltips.php');

        $tooltips = $this->getEnvironment()->getConfig()->get('tooltips');
        $icon = $this->getEnvironment()->getConfig()->get('tooltips_icon');

        $tooltips = array_map(array($this, 'rewrite'), $tooltips);

        $this->getEnvironment()->getTwig()->addGlobal('tooltips', $tooltips);
        $this->getEnvironment()->getTwig()->addGlobal('tooltips_icon', $icon);

        $twig = $this->getEnvironment()->getTwig();
        $twig->addFunction(
            new Twig_SimpleFunction(
                'get_image_src',
                'wp_get_attachment_image_src'
            )
        );

        $settings = $this->getModel('settings')->get($galleryId);
//        $preset   = $this->getModel('preset')->getBySettingsId($settings->id);

        if (!is_object($settings) || null === $settings->data) {
            $config = $this->getEnvironment()->getConfig();
            $config->load('@galleries/settings.php');

            $settings = new stdClass;

            $settings->id = null;
            $settings->data = unserialize($config->get('gallery_settings'));
        }

        return $this->response(
            '@galleries/settings.twig',
            array(
                'gallery' => $this->getModel('galleries')->getById($galleryId),
                'settings' => $settings->data,
                'id' => $settings->id,
                // deprecated
                'preset' => null,
            )
        );
    }

    /**
     * Save Settings Action
     * Saves the specified gallery's settings
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function saveSettingsAction(Rsc_Http_Request $request)
    {
        /** @var GridGallery_Galleries_Model_Settings $settings */
        $settings = $this->getModel('settings');
        $stats = $this->getEnvironment()->getModule('stats');
        $config = $this->getEnvironment()->getConfig();
        $previewImage = get_option('previewImageId');

        $settings->settingsDiff($stats, $request->query->get('gallery_id'), $request->post->all());
        $data = $settings->getCatsFromPreset($request->post->all(), $config);
        $data = $settings->getPagesFromPreset($data, $config);
        if($previewImage) {
            $data['previewImage'] = $previewImage;
        }
        $settings->save(
            $request->query->get('gallery_id'),
            $data
        );

        return $this->redirect(
            $this->generateUrl(
                'galleries',
                'settings',
                array(
                    'gallery_id' => $request->query->get('gallery_id'),
                )
            )
        );
    }

    /**
     * Save custom categories preset
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function saveCatsPresetAction(Rsc_Http_Request $request) {
        $data = $request->post->all();

        if(get_option('customCatsPresets')) {
            $presets = get_option('customCatsPresets');
        } else {
            $presets = array();
        }

        array_push($presets, $data);

        update_option('customCatsPresets', $presets);

        return $this->redirect(
            $this->generateUrl(
                'galleries',
                'settings',
                array(
                    'gallery_id' => $request->query->get('gallery_id'),
                )
            )
        );
    }

    /**
     *
     * Get categories custom presets
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function getCustomCatsPresetsAction(Rsc_Http_Request $request) {
        $presets = get_option('customCatsPresets');
        $names = array();

        if($presets) {
            foreach($presets as $preset) {
                array_push($names, $preset['preset']['name']);
            }
        }

        return $this->response(
            Rsc_Http_Response::AJAX,
            array(
                'names' => $names
            )
        );
    }

    /**
     * Save pages custom preset
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function savePagesPresetAction(Rsc_Http_Request $request) {
        $data = $request->post->all();

        if(get_option('customPagesPresets')) {
            $presets = get_option('customPagesPresets');
        } else {
            $presets = array();
        }

        array_push($presets, $data);

        update_option('customPagesPresets', $presets);

        return $this->redirect(
            $this->generateUrl(
                'galleries',
                'settings',
                array(
                    'gallery_id' => $request->query->get('gallery_id'),
                )
            )
        );
    }

    /**
     *
     * Get pages custom presets
     *
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function getCustomPagesPresetsAction(Rsc_Http_Request $request) {
        $presets = get_option('customPagesPresets');
        $names = array();

        if($presets) {
            foreach($presets as $preset) {
                array_push($names, $preset['preset']['name']);
            }
        }

        return $this->response(
            Rsc_Http_Response::AJAX,
            array(
                'names' => $names
            )
        );
    }

    /**
     * Save Preset Action
     * Saves the settings preset to the database.
     * @param Rsc_Http_Request $request HTTP request.
     * @return Rsc_Http_Response
     */
    public function savePresetAction(Rsc_Http_Request $request)
    {
        $preset = $this->getModel('preset');
        $settingsId = $request->post->get('settings_id');
        $presetTitle = $request->post->get('title');

        $lang = $this->getEnvironment()->getLang();

        if (empty($settingsId) || empty($presetTitle)) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    $lang->translate('Not enough data.')
                )
            );
        }

        if ($preset->set($settingsId, $presetTitle)) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getSuccessResponseData(
                    $lang->translate('Preset successfully saved.')
                )
            );
        }

        return $this->response(
            Rsc_Http_Response::AJAX,
            $this->getErrorResponseData(
                $lang->translate(
                    sprintf(
                        'Failed to save the preset: %s',
                        $preset->getLastError()
                    )
                )
            )
        );
    }

    /**
     * Remove Preset Action
     * Removes the settings preset by the preset id.
     * @param Rsc_Http_Request $request
     * @return Rsc_Http_Response
     */
    public function removePresetAction(Rsc_Http_Request $request)
    {
        $preset = $this->getModel('preset');
        $presetId = $request->post->get('preset_id');

        $lang = $this->getEnvironment()->getLang();

        if (null === $presetId || empty($presetId)) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    $lang->translate('The preset ID is not specified.')
                )
            );
        }

        if ($preset->remove($presetId)) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getSuccessResponseData(
                    $lang->translate('Preset successfully removed.')
                )
            );
        }

        return $this->response(
            Rsc_Http_Response::AJAX,
            $this->getErrorResponseData(
                $lang->translate(
                    sprintf(
                        'Failed to remove the preset: %s.',
                        $preset->getLastError()
                    )
                )
            )
        );
    }

    public function getPresetListAction()
    {
        return $this->response(
            Rsc_Http_Response::AJAX,
            array(
                'error' => false,
                'presets' => $this->getModel('preset')->getAll(),
            )
        );
    }

    public function applyPresetAction(Rsc_Http_Request $request)
    {
        $galleryId = $request->post->get('gallery_id');
        $presetId = $request->post->get('preset_id');

        $presets = $this->getModel('preset');
        $settings = $this->getModel('settings');

        $lang = $this->getEnvironment()->getLang();

        $preset = $presets->getById($presetId);

        if (!$preset) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    $lang->translate('Failed to find the preset.')
                )
            );
        }

        $settings->save($galleryId, $preset->settings->data);

        return $this->response(
            Rsc_Http_Response::AJAX,
            $this->getSuccessResponseData(
                $lang->translate('Preset successfully applied to the gallery.')
            )
        );
    }

    /**
     * Rewrites @url annotation to the full url.
     *
     * @param string $element
     * @return string
     */
    public function rewrite($element)
    {
        $url = $this->getEnvironment()->getConfig()->get('plugin_url');

        return str_replace('@url', $url . '/app/assets/img', $element);
    }

    public function ajaxGetImagesAction(Rsc_Http_Request $request)
    {
        if (null === $galleryId = $request->post->get('gallery_id')) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    'Gallery identifier is not specified.'
                )
            );
        }

        /** @var GridGallery_Galleries_Model_Galleries $galleries */
        $galleries = $this->getModel('galleries');

        if (null === $gallery = $galleries->getById((int)$galleryId)) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData('The gallery does not exists.')
            );
        }

        $gallery->settings = $this->getModel('settings')->get($galleryId)->data;

        return $this->response(
            Rsc_Http_Response::AJAX,
            $this->getSuccessResponseData(
                null,
                array(
                    'photos' => $gallery->photos,
                    'area' => $gallery->settings['area']
                )
            )
        );
    }

    public function ajaxResizeImageAction(Rsc_Http_Request $request)
    {
        if (!function_exists('wp_get_image_editor')) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    'Current WordPress revision has not Image Editor.'
                )
            );
        }

        $attachmentId = $request->post->get('attachment_id');
        $width = $request->post->get('width');
        $height = $request->post->get('height');

        if (!$attachmentId) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    'The attachment id is not specified.'
                )
            );
        }

        $meta = wp_get_attachment_metadata($attachmentId);
        $upload = wp_upload_dir();

        if (!is_file($file = $upload['basedir'] . '/' . $meta['file'])) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    sprintf('File not found: %s', $file)
                )
            );
        }

        if (!$width || !$height) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData('Width or Height is not specified.')
            );
        }

        $editor = wp_get_image_editor($file);

        if (is_wp_error($editor)) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    sprintf('Unable to load the image: %s', $file)
                )
            );
        }

        if (is_wp_error($error = $editor->resize((int)$width, (int)$height, true))) {
            return $this->response(
                Rsc_Http_Response::AJAX,
                $this->getErrorResponseData(
                    sprintf(
                        'Unable to resize the image: %s.',
                        $file
                    ),
                    array(
                        'reason' => $error->get_error_message(),
                    )
                )
            );
        }

        $image = $editor->save();

        return $this->response(
            Rsc_Http_Response::AJAX,
            $this->getSuccessResponseData(
                sprintf('Attachment %s resized successfully.', $attachmentId),
                array(
                    'image' => $image
                )
            )
        );
    }
}
