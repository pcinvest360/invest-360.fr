/* ==========================================================================
   PC INVEST 360 — Scripts
   ========================================================================== */

/* --- Icons (SVG library) -------------------------------------------------- */
const ICONS = {
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="7" x2="9" y2="7"/><line x1="15" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="9" y2="11"/><line x1="15" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="9" y2="15"/><line x1="15" y1="15" x2="15" y2="15"/><path d="M10 21v-4h4v4"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.5 12.5 9-9"/><path d="m17 5 3 3"/><path d="m14 8 3 3"/></svg>',
  calculator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="8" y2="11"/><line x1="12" y1="11" x2="12" y2="11"/><line x1="16" y1="11" x2="16" y2="11"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="17" x2="8" y2="17"/><line x1="12" y1="17" x2="12" y2="17"/><line x1="16" y1="17" x2="16" y2="17"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 0-1.42 0L3 11.5"/><path d="m21 3-5 5"/><path d="m3 21 5-5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2z"/></svg>',
  umbrella: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12a10 10 0 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v2"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
};

function icon(name) {
  return ICONS[name] || ICONS.compass;
}

/* --- Nav (mobile toggle + active link) ----------------------------------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const open = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
  }
}

/* --- Scroll reveal -------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(i => io.observe(i));
}

/* --- Offer renderer ------------------------------------------------------- */
async function loadOffers() {
  // Resolve data path relative to current page (works at root or in subfolder)
  const url = new URL('data/offers.json', document.baseURI).href;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (e) {
    console.error('Impossible de charger les offres :', e);
    return null;
  }
}

function isValidUrl(u) {
  if (!u) return false;
  if (u.startsWith('REPLACE_')) return false;
  return true;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function nl2br(s) {
  return escapeHtml(s).replace(/\n/g, '<br />');
}

function renderTierCta(cta) {
  if (!cta) return '';
  if (cta.type === 'contact') {
    return `<a class="tier-card__cta tier-card__cta--primary" href="${cta.url}">${cta.label} <span aria-hidden="true">→</span></a>`;
  }
  if (cta.type === 'stripe') {
    const url = isValidUrl(cta.stripeUrl) ? cta.stripeUrl : cta.fallbackUrl;
    const target = isValidUrl(cta.stripeUrl) ? 'target="_blank" rel="noopener"' : '';
    return `
      <a class="tier-card__cta tier-card__cta--primary" href="${url}" ${target}>${cta.label} <span aria-hidden="true">→</span></a>
      ${cta.fallbackUrl ? `<a class="tier-card__cta-alt" href="${cta.fallbackUrl}">Échanger avant de souscrire</a>` : ''}
    `;
  }
  if (cta.type === 'stripe-dual') {
    const monthly = isValidUrl(cta.stripeUrlMonthly) ? cta.stripeUrlMonthly : cta.fallbackUrl;
    const yearly  = isValidUrl(cta.stripeUrlYearly)  ? cta.stripeUrlYearly  : cta.fallbackUrl;
    const targetM = isValidUrl(cta.stripeUrlMonthly) ? 'target="_blank" rel="noopener"' : '';
    const targetY = isValidUrl(cta.stripeUrlYearly)  ? 'target="_blank" rel="noopener"' : '';
    const mLabel  = nl2br(cta.monthlyLabel || '9 € / mois');
    const yLabel  = nl2br(cta.yearlyLabel  || '90 € / an');
    return `
      <div class="tier-card__dual">
        <a class="tier-card__cta tier-card__cta--primary" href="${monthly}" ${targetM}>${mLabel}</a>
        <a class="tier-card__cta tier-card__cta--ghost" href="${yearly}" ${targetY}>${yLabel}</a>
      </div>
      ${cta.fallbackUrl ? `<a class="tier-card__cta-alt" href="${cta.fallbackUrl}">Une question avant de souscrire&nbsp;?</a>` : ''}
    `;
  }
  return '';
}

function renderTiers(data, container) {
  const tiers = data.tiers || [];
  container.className = 'tiers-grid';
  container.innerHTML = tiers.map(t => `
    <article class="tier-card${t.highlight ? ' tier-card--featured' : ''}" data-reveal>
      ${t.badge ? `<span class="tier-card__badge">${t.badge}</span>` : ''}
      <header class="tier-card__head">
        <h3 class="tier-card__name">${t.name}</h3>
        <p class="tier-card__tagline">${t.tagline || ''}</p>
        <div class="tier-card__price">
          <span class="tier-card__price-main">${t.price}</span>
          ${t.priceUnit ? `<span class="tier-card__price-unit">${t.priceUnit}</span>` : ''}
        </div>
        ${t.priceAlt ? `<p class="tier-card__price-alt">${t.priceAlt}</p>` : ''}
        ${t.priceNote ? `<p class="tier-card__price-note">${nl2br(t.priceNote)}</p>` : ''}
      </header>
      <ul class="tier-card__features">
        ${t.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="tier-card__actions">
        ${renderTierCta(t.cta)}
      </div>
    </article>
  `).join('');
}

async function initOffers() {
  const root = document.getElementById('offers-root');
  if (!root) return;

  const data = await loadOffers();
  if (!data) {
    root.innerHTML = '<p style="color:var(--c-muted); padding:24px 0;">Les offres ne peuvent pas être chargées hors-ligne. Une fois le site déployé sur OVH, elles s\'afficheront automatiquement.</p>';
    return;
  }
  if (!data.tiers) {
    root.innerHTML = '<p style="color:var(--c-muted);">Format de données invalide.</p>';
    return;
  }
  renderTiers(data, root);
  initReveal();
}

/* --- Pre-fill contact form from URL param -------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  const sujet = params.get('sujet');
  if (sujet) {
    const subjectSelect = form.querySelector('[name="sujet"]');
    if (subjectSelect) {
      const match = Array.from(subjectSelect.options).find(o => o.value === sujet);
      if (match) {
        subjectSelect.value = sujet;
      } else {
        // Add a temporary option
        const opt = document.createElement('option');
        opt.value = sujet; opt.textContent = sujet.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        opt.selected = true;
        subjectSelect.appendChild(opt);
      }
    }
    const msg = form.querySelector('[name="message"]');
    if (msg && !msg.value) {
      const pretty = sujet.replace(/-/g, ' ');
      msg.value = `Bonjour,\n\nJe souhaiterais en savoir plus sur l'offre "${pretty}".\n\nMerci.`;
    }
  }

  // AJAX submit (Formspree-compatible — replace action attribute with your endpoint)
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const feedback = form.querySelector('.form-feedback');
    const submit = form.querySelector('button[type="submit"]');
    feedback.className = 'form-feedback';
    feedback.textContent = '';

    const data = new FormData(form);
    if (!form.action || form.action.includes('FORMSPREE_ID') || form.action.endsWith('#')) {
      // Demo / not yet configured
      feedback.className = 'form-feedback success';
      feedback.textContent = "Merci ! (Démo) Votre message serait envoyé une fois le formulaire connecté à Formspree. Voir le README.";
      form.reset();
      return;
    }
    submit.disabled = true;
    submit.textContent = 'Envoi…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        feedback.className = 'form-feedback success';
        feedback.textContent = "Merci, votre message a bien été envoyé. Nous revenons vers vous sous 24h ouvrées.";
        form.reset();
      } else {
        throw new Error('Erreur d’envoi');
      }
    } catch (err) {
      feedback.className = 'form-feedback error';
      feedback.textContent = "Une erreur est survenue. Merci de réessayer ou de nous contacter directement par email.";
    } finally {
      submit.disabled = false;
      submit.textContent = 'Envoyer ma demande';
    }
  });
}

/* --- Set active nav link based on filename -------------------------------- */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });
}

/* --- Year in footer ------------------------------------------------------- */
function initYear() {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

/* --- Boot ----------------------------------------------------------------- */
function bootPCI() {
  initNav();
  initActiveNav();
  initReveal();
  initYear();
  initOffers();
  initContactForm();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootPCI);
} else {
  bootPCI();
}
