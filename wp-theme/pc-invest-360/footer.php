  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/logo-blanc.png" alt="PC Invest 360" />
          <p>Cabinet indépendant de conseil en gestion de patrimoine. Une approche à 360° pour structurer, développer et transmettre votre patrimoine.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul class="footer-list">
            <li><a href="<?php echo esc_url(home_url('/')); ?>">Accueil</a></li>
            <li><a href="<?php echo esc_url(home_url('/solutions/')); ?>">Nos solutions</a></li>
            <li><a href="<?php echo esc_url(home_url('/offres/')); ?>">Nos offres</a></li>
            <li><a href="<?php echo esc_url(home_url('/qui-sommes-nous/')); ?>">Qui sommes-nous</a></li>
            <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Solutions</h4>
          <ul class="footer-list">
            <li><a href="<?php echo esc_url(home_url('/solutions/')); ?>#epargne">Épargne &amp; Placements</a></li>
            <li><a href="<?php echo esc_url(home_url('/solutions/')); ?>#retraite">Retraite &amp; Prévoyance</a></li>
            <li><a href="<?php echo esc_url(home_url('/solutions/')); ?>#immobilier">Immobilier</a></li>
            <li><a href="<?php echo esc_url(home_url('/solutions/')); ?>#fiscalite">Fiscalité &amp; Transmission</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-list">
            <li>Salon-de-Provence</li>
            <li><a href="mailto:pc@invest-360.fr">pc@invest-360.fr</a></li>
            <li><a href="https://cal.com/pcherriere/tel" target="_blank" rel="noopener">Prendre rendez-vous</a></li>
            <li><a href="<?php echo esc_url(home_url('/mentions-legales/')); ?>">Mentions légales</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bar">
        <span>© <?php echo date('Y'); ?> PC Invest 360 · SIREN 980 133 490 · ORIAS 23007720</span>
        <span><a href="<?php echo esc_url(home_url('/mentions-legales/')); ?>">Mentions légales</a></span>
      </div>
    </div>
  </footer>

<?php wp_footer(); ?>
</body>
</html>
