<?php

/**
 * Plugin Name: Gallery by Supsystic
 * Description: Easy to use Gallery with professional gallery templates. Show off your best design, photography and creative work
 * Version: 1.2.9
 * Author: supsistic.com
 * Author URI: http://supsystic.com
 * Text Domain: grid-gallery
 **/

require_once dirname(__FILE__) . '/app/SupsysticGallery.php';

$supsysticGallery = new SupsysticGallery();
$supsysticGallery->run();
