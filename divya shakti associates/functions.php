<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

function divyashakti_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menus( array( 'primary' => __( 'Primary Menu', 'divyashakti-associates' ) ) );
}
add_action( 'after_setup_theme', 'divyashakti_setup' );

function divyashakti_assets() {
    wp_enqueue_style( 'divyashakti-fonts', 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap', array(), null );
    wp_enqueue_style( 'divyashakti-style', get_stylesheet_uri(), array(), '1.0.0' );
    wp_enqueue_script( 'divyashakti-script', get_template_directory_uri() . '/assets/js/theme.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'divyashakti_assets' );

function divyashakti_form_submission() {
    if ( ! isset( $_POST['divyashakti_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['divyashakti_nonce'] ) ), 'divyashakti_enquiry' ) ) {
        wp_die( esc_html__( 'Security check failed.', 'divyashakti-associates' ) );
    }
    $name = sanitize_text_field( wp_unslash( $_POST['name'] ?? '' ) );
    $phone = sanitize_text_field( wp_unslash( $_POST['phone'] ?? '' ) );
    $email = sanitize_email( wp_unslash( $_POST['email'] ?? '' ) );
    $service = sanitize_text_field( wp_unslash( $_POST['service'] ?? '' ) );
    $message = sanitize_textarea_field( wp_unslash( $_POST['message'] ?? '' ) );
    if ( empty( $name ) || empty( $phone ) || ! is_email( $email ) || empty( $service ) || empty( $message ) ) {
        wp_safe_redirect( add_query_arg( 'enquiry', 'error', wp_get_referer() ?: home_url( '/' ) ) );
        exit;
    }
    $subject = 'New Divyashakti Website Enquiry - ' . ( $service ?: 'General' );
    $body = "Name: {$name}\nPhone: {$phone}\nEmail: {$email}\nQuery: {$service}\n\nMessage:\n{$message}";
    $sent = wp_mail( 'swagblower1@gmial.com', $subject, $body, array( 'Reply-To: ' . $email ) );
    $status = $sent ? 'success' : 'error';
    wp_safe_redirect( add_query_arg( 'enquiry', $status, wp_get_referer() ?: home_url( '/' ) ) );
    exit;
}
add_action( 'admin_post_nopriv_divyashakti_enquiry', 'divyashakti_form_submission' );
add_action( 'admin_post_divyashakti_enquiry', 'divyashakti_form_submission' );

function divyashakti_nav_fallback() {
    echo '<a class="active" href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#credentials">Credentials</a><a href="#contact">Contact</a>';
}
