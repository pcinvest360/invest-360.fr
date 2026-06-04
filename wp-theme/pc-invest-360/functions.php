<?php
defined('ABSPATH') || exit;

function pci_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['gallery', 'caption', 'style', 'script']);
}
add_action('after_setup_theme', 'pci_setup');

function pci_scripts() {
    wp_enqueue_style('pci-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap',
        [], null);
    wp_enqueue_style('pci-styles',
        get_template_directory_uri() . '/assets/styles.css',
        ['pci-fonts'], '1.0');
    wp_enqueue_script('pci-main',
        get_template_directory_uri() . '/assets/main.js',
        [], '1.0', true);

    if (is_page('offres')) {
        wp_localize_script('pci-main', 'PCI', [
            'offersUrl' => get_template_directory_uri() . '/data/offers.json',
        ]);
    }
}
add_action('wp_enqueue_scripts', 'pci_scripts');

function pci_preconnect() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com" />' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />' . "\n";
    echo '<link rel="icon" href="' . esc_url(get_template_directory_uri()) . '/assets/logo.png" type="image/png" />' . "\n";
}
add_action('wp_head', 'pci_preconnect', 1);
