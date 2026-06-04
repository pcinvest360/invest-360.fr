<?php get_header(); ?>

  <!-- HERO -->
  <section class="hero" data-screen-label="01 Hero accueil">
    <div class="container hero__grid">
      <div class="hero__copy" data-reveal>
        <span class="eyebrow">Conseil en gestion de patrimoine</span>
        <h1 class="h-display">Bâtissez un patrimoine à la hauteur de vos ambitions.</h1>
        <p class="lede">Une approche à 360°, indépendante et sur-mesure pour structurer, développer et transmettre votre patrimoine — en toute sérénité.</p>
        <div class="hero__ctas">
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-gold btn-arrow">Prendre rendez-vous</a>
          <a href="<?php echo esc_url(home_url('/offres/')); ?>" class="btn btn-outline btn-arrow">Découvrir nos offres</a>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-item"><span class="num">360°</span><span class="lbl">Approche globale</span></div>
          <div class="hero__meta-item"><span class="num">CIF</span><span class="lbl">Conseiller indépendant</span></div>
          <div class="hero__meta-item"><span class="num">1er&nbsp;RDV</span><span class="lbl">Offert et sans engagement</span></div>
        </div>
      </div>
      <div class="hero__visual" data-reveal>
        <div class="frame-deco" aria-hidden="true"></div>
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Conseil patrimonial" onerror="this.parentElement.querySelector('.placeholder').style.display='flex';this.style.display='none';" />
        <div class="placeholder" style="display:none;position:absolute;inset:0;">Photo à insérer ici</div>
        <div class="hero__badge">
          <div class="hero__badge-dot"></div>
          <span><strong>Premier rendez-vous offert</strong><br/>Échange de 45 min sans engagement</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST STRIP -->
  <div class="trust-strip">
    <div class="container trust-strip__inner">
      <div class="trust-item"><span class="label">Immatriculation</span><span class="value">ORIAS 23007720</span></div>
      <div class="trust-item"><span class="label">Statut</span><span class="value">CIF · COA · IOBSP</span></div>
      <div class="trust-item"><span class="label">AGENT IMMOBILIER</span><span class="value">Transaction immobilière</span></div>
      <div class="trust-item"><span class="label">Localisation</span><span class="value">Salon-de-Provence</span></div>
    </div>
  </div>

  <!-- APPROCHE -->
  <section class="approach" data-screen-label="02 Approche 360">
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="eyebrow">Notre méthode</span>
        <h2 class="h-1">Une approche à 360°, en quatre temps.</h2>
        <p>De la première rencontre au suivi annuel, nous structurons votre patrimoine avec rigueur et pédagogie.</p>
      </div>
      <div class="steps">
        <div class="step" data-reveal><h3>Écoute</h3><p>Nous prenons le temps de comprendre votre situation, vos projets et vos préoccupations.</p></div>
        <div class="step" data-reveal><h3>Audit</h3><p>Analyse complète de vos actifs, fiscalité, protection sociale et transmission.</p></div>
        <div class="step" data-reveal><h3>Stratégie</h3><p>Préconisations écrites, chiffrées et personnalisées, validées ensemble.</p></div>
        <div class="step" data-reveal><h3>Suivi</h3><p>Mise en œuvre et accompagnement dans la durée, avec suivi annuel pour adapter la stratégie.</p></div>
      </div>
    </div>
  </section>

  <!-- SOLUTIONS (4 piliers) -->
  <section data-screen-label="03 Piliers solutions">
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="eyebrow">Nos solutions</span>
        <h2 class="h-1">Quatre piliers pour un patrimoine équilibré.</h2>
        <p>Notre indépendance nous permet de sélectionner pour vous les meilleurs partenaires du marché.</p>
      </div>
      <div class="pillars">
        <a href="<?php echo esc_url(home_url('/solutions/')); ?>#epargne" class="pillar" data-reveal>
          <div class="pillar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h3>Épargne &amp; Placements</h3>
          <p>Assurance-vie, comptes-titres, SCPI, allocations pilotées… Une stratégie d'épargne diversifiée et optimisée.</p>
          <span class="pillar__link">En savoir plus</span>
        </a>
        <a href="<?php echo esc_url(home_url('/solutions/')); ?>#retraite" class="pillar" data-reveal>
          <div class="pillar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <h3>Retraite &amp; Prévoyance</h3>
          <p>Préparer une retraite confortable et protéger ses proches avec des solutions sur-mesure (PER, prévoyance…).</p>
          <span class="pillar__link">En savoir plus</span>
        </a>
        <a href="<?php echo esc_url(home_url('/solutions/')); ?>#immobilier" class="pillar" data-reveal>
          <div class="pillar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2z"/></svg></div>
          <h3>Immobilier</h3>
          <p>Investissement locatif, LMNP, SCPI, défiscalisation, transaction : nous gérons la chaîne complète.</p>
          <span class="pillar__link">En savoir plus</span>
        </a>
        <a href="<?php echo esc_url(home_url('/solutions/')); ?>#fiscalite" class="pillar" data-reveal>
          <div class="pillar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg></div>
          <h3>Fiscalité &amp; Transmission</h3>
          <p>Réduction d'impôt, optimisation de la rémunération du dirigeant, donation, transmission familiale.</p>
          <span class="pillar__link">En savoir plus</span>
        </a>
      </div>
    </div>
  </section>

  <!-- CITATION -->
  <section class="quote" data-screen-label="04 Quote">
    <div class="container-narrow">
      <blockquote data-reveal>Notre métier n'est pas de vendre un produit, mais de bâtir avec vous une stratégie cohérente, claire et durable.</blockquote>
    </div>
  </section>

  <!-- CTA -->
  <section data-screen-label="05 CTA">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <div>
          <h2 class="h-1">Échangeons sur votre projet.</h2>
          <p>Premier rendez-vous offert, en visio ou à votre domicile (autour de Salon-de-Provence). 45 minutes pour faire le point et déterminer ensemble les prochaines étapes.</p>
        </div>
        <div class="cta-banner__actions">
          <a href="https://cal.com/pcherriere/tel" target="_blank" rel="noopener" class="btn btn-on-dark btn-arrow">Réserver un créneau</a>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-ghost" style="border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.85);">Nous écrire</a>
        </div>
      </div>
    </div>
  </section>

<?php get_footer(); ?>
