<?php

/**
 * Class GridGallery_Developer_Module
 * Developer Module
 *
 * @package GridGallery\Developer
 * @author Artur Kovalevsky
 */
class GridGallery_Developer_Module extends Rsc_Mvc_Module
{

    /**
     * {@inheritdoc}
     */
    public function onInit()
    {
        parent::onInit();

        $isDebugRequest = false;

        if ($this->getRequest()->query->has('debug')) {
            $isDebugRequest = $this->getRequest()->query->get('debug');
        }

        /* We add additional menu item in the development environment */
        if ($this->getEnvironment()->isDev() || (bool)$isDebugRequest) {
            $menu = $this->getEnvironment()->getMenu();
            $submenu = $menu->createSubmenuItem();
            $submenu->setCapability('manage_options')
                ->setMenuSlug('grid-gallery-developer')
                ->setMenuTitle('Developer Mode')
                ->setPageTitle('Developer Mode')
                ->setModuleName('developer');

            $menu->addSubmenuItem('developer', $submenu)->register();

            if (version_compare(phpversion(), '5.3.0', '>=')
                && 'cli-server' === php_sapi_name()
            ) {
                @class_alias('GridGallery_Developer_Console', 'C');
            }
        }
    }

}
