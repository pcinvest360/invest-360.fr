<?php get_header(); ?>
<main class="container" style="padding: 80px 0; min-height: 50vh;">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <h1><?php the_title(); ?></h1>
    <?php the_content(); ?>
  <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
