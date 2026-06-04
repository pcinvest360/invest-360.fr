<?php get_header(); ?>

  <section class="page-hero" data-screen-label="Offres - page hero">
    <div class="container">
      <div class="crumb"><a href="<?php echo esc_url(home_url('/')); ?>">Accueil</a><span class="crumb-sep">/</span><span>Nos offres</span></div>
      <span class="eyebrow">Nos offres</span>
      <h1 class="h-display">Trois formules, un seul objectif&nbsp;: votre patrimoine.</h1>
      <p class="lede">Du premier diagnostic offert à l'accompagnement annuel illimité, choisissez la formule qui correspond à votre situation.</p>
    </div>
  </section>

  <section data-screen-label="Offres - tarifs" style="padding-top:clamp(56px,7vw,96px);">
    <div class="container">
      <div id="offers-root" class="tiers-grid">
        <!-- Cartes générées par main.js depuis data/offers.json -->
      </div>
      <div class="tiers-note" data-reveal>
        <strong>Vous hésitez ?</strong> Le premier rendez-vous de la formule <em>L'essentiel</em> est offert et sans engagement. C'est le meilleur moyen de déterminer ensemble la formule la plus adaptée à votre situation.
      </div>
    </div>
  </section>

  <section style="background:var(--c-bg-2);" data-screen-label="Offres - infos pratiques">
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="eyebrow">Bon à savoir</span>
        <h2 class="h-1">Comment se passe la souscription ?</h2>
      </div>
      <div class="steps">
        <div class="step" data-reveal><h3>Vous choisissez</h3><p>Sélectionnez la formule qui vous correspond. Pour Premium et l'Abonnement, le paiement s'effectue en ligne en toute sécurité.</p></div>
        <div class="step" data-reveal><h3>Nous prenons contact</h3><p>Sous 24h ouvrées, vous recevez un email de confirmation et un lien pour réserver votre premier rendez-vous.</p></div>
        <div class="step" data-reveal><h3>Premier RDV</h3><p>En visio ou à votre domicile. Nous analysons votre situation et identifions les priorités.</p></div>
        <div class="step" data-reveal><h3>Mise en œuvre</h3><p>Nous structurons votre patrimoine, mettons en place les contrats et assurons le suivi dans la durée.</p></div>
      </div>
    </div>
  </section>

  <section data-screen-label="Offres - CTA final">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <div>
          <h2 class="h-1">Pas encore décidé ?</h2>
          <p>Échangeons 45 minutes pour comprendre votre situation et déterminer ensemble la formule la plus adaptée — sans engagement.</p>
        </div>
        <div class="cta-banner__actions">
          <a href="https://cal.com/pcherriere/tel" target="_blank" rel="noopener" class="btn btn-on-dark btn-arrow">Réserver un créneau</a>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-ghost" style="border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.85);">Poser une question</a>
        </div>
      </div>
    </div>
  </section>

<?php get_footer(); ?>
