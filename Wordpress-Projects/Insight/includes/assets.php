<?php

function insight_assets() {
    // Enqueue CSS
    wp_enqueue_style('insight-style', get_template_directory_uri() . '/css/main.css', array(), microtime());
}
add_action('wp_enqueue_scripts', 'insight_assets');
