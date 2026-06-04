<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" data-screen-label="header">
  <div class="container site-header__inner">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="brand" aria-label="Accueil PC Invest 360">
      <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/logo.png" alt="PC Invest 360" />
    </a>
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
    </button>
    <nav class="nav" aria-label="Navigation principale">
      <a href="<?php echo esc_url(home_url('/')); ?>">Accueil</a>
      <a href="<?php echo esc_url(home_url('/solutions/')); ?>">Nos solutions</a>
      <a href="<?php echo esc_url(home_url('/offres/')); ?>">Nos offres</a>
      <a href="<?php echo esc_url(home_url('/qui-sommes-nous/')); ?>">Qui sommes-nous</a>
      <a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a>
      <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-gold nav-cta">Prendre RDV</a>
    </nav>
  </div>
</header>
