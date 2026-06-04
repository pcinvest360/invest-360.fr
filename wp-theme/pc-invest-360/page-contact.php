<?php get_header(); ?>

  <section class="page-hero" data-screen-label="Contact hero">
    <div class="container">
      <div class="crumb"><a href="<?php echo esc_url(home_url('/')); ?>">Accueil</a><span class="crumb-sep">/</span><span>Contact</span></div>
      <span class="eyebrow">Contact</span>
      <h1 class="h-display">Parlons de votre projet.</h1>
      <p class="lede">Réservez directement un créneau en ligne, ou envoyez-nous un message — nous revenons vers vous sous 24h ouvrées.</p>
    </div>
  </section>

  <section data-screen-label="Contact formulaire">
    <div class="container">
      <div class="contact-grid">

        <div data-reveal>
          <h2 class="h-2" style="margin-bottom:8px;">Nous écrire</h2>
          <p style="color:var(--c-muted);margin-bottom:32px;">Tous les champs marqués d'un astérisque sont requis. Vos données restent confidentielles et ne servent qu'à traiter votre demande.</p>

          <form id="contact-form" class="form" action="#FORMSPREE_ID" method="POST" novalidate>
            <div class="form-row">
              <div class="field"><label for="prenom">Prénom *</label><input id="prenom" name="prenom" type="text" required autocomplete="given-name" /></div>
              <div class="field"><label for="nom">Nom *</label><input id="nom" name="nom" type="text" required autocomplete="family-name" /></div>
            </div>
            <div class="form-row">
              <div class="field"><label for="email">Email *</label><input id="email" name="email" type="email" required autocomplete="email" /></div>
              <div class="field"><label for="telephone">Téléphone</label><input id="telephone" name="telephone" type="tel" autocomplete="tel" /></div>
            </div>
            <div class="field">
              <label for="sujet">Sujet *</label>
              <select id="sujet" name="sujet" required>
                <option value="">— Choisir un sujet —</option>
                <option value="essentiel">Formule L'essentiel (offerte)</option>
                <option value="premium">Formule Premium (480 €)</option>
                <option value="abonnement">Formule Abonnement</option>
                <option value="bilan-patrimonial">Bilan patrimonial</option>
                <option value="immobilier">Investissement immobilier</option>
                <option value="retraite">Retraite &amp; prévoyance</option>
                <option value="fiscalite">Fiscalité &amp; transmission</option>
                <option value="autre">Autre / Information générale</option>
              </select>
            </div>
            <div class="field">
              <label for="message">Votre message *</label>
              <textarea id="message" name="message" required placeholder="Décrivez-nous brièvement votre situation et vos attentes."></textarea>
            </div>
            <div class="checkbox-field">
              <input id="rgpd" name="rgpd" type="checkbox" required />
              <label for="rgpd">J'accepte que mes données soient utilisées pour traiter ma demande, conformément aux <a href="<?php echo esc_url(home_url('/mentions-legales/')); ?>" style="color:var(--c-navy);text-decoration:underline;">mentions légales</a>. *</label>
            </div>
            <div class="form-feedback" role="status" aria-live="polite"></div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <button type="submit" class="btn btn-gold btn-arrow">Envoyer ma demande</button>
              <a href="https://cal.com/pcherriere/tel" target="_blank" rel="noopener" class="btn btn-outline">Ou réserver directement un créneau</a>
            </div>
          </form>
        </div>

        <aside data-reveal>
          <div class="contact-info">
            <h3 class="h-3">Nos coordonnées</h3>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div><span class="meta-label">Cabinet</span>Salon-de-Provence (13300)<br/><em style="font-size:0.85rem;color:var(--c-muted);">Adresse précise communiquée à la prise de RDV</em></div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div><span class="meta-label">Email</span><a href="mailto:pc@invest-360.fr">pc@invest-360.fr</a></div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div><span class="meta-label">Téléphone</span><em style="color:var(--c-muted);font-size:0.9rem;">Sur RDV — réservation en ligne</em></div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div><span class="meta-label">Horaires</span>Lundi — Vendredi · 9h — 19h<br/>Samedi sur RDV</div>
              </li>
            </ul>
            <a href="https://cal.com/pcherriere/tel" target="_blank" rel="noopener" class="cal-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Réserver un créneau
            </a>
          </div>
        </aside>

      </div>
    </div>
  </section>

<?php get_footer(); ?>
