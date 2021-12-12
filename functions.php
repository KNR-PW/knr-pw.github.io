<?php

function script_enqueue() {
   wp_enqueue_style('style', get_template_directory_uri() . '/css/header.css', array(), '1.0.0', 'all');
   wp_enqueue_style('font', 'https://fonts.googleapis.com/css?family=Cambay:400,400i,700,700i&amp;subset=latin-ext', array(), '1.0.0', 'all');
   wp_enqueue_style('logo', 'http://knr.meil.pw.edu.pl/wp-content/uploads/2015/12/cropped-Logo-KNR-poziom-1-32x32.jpg', array(), '1.0.0', 'all');
   wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', array(), '1.0.0', 'all');
   wp_enqueue_style('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', array(), '1.0.0', 'all');

   wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.js', array(), null, true);
   wp_enqueue_script('fb', 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.2', array('jquery'), '1.0.0', true);
   wp_enqueue_script('ajax', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', array('jquery'), '1.0.0', true);
   wp_enqueue_script('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', array('jquery'), '1.0.0', true);
   wp_enqueue_script('js', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_style', 'style_enqueue');
add_action('wp_enqueue_scripts', 'script_enqueue'); 

