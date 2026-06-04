/* ==========================================================================
   PC INVEST 360 — Scripts (WordPress version)
   ========================================================================== */

const ICONS = {
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
};

function icon(name) { return ICONS[name] || ICONS.compass; }

/* --- Nav mobile ---------------------------------------------------------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('is-open') ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

/* --- Active nav link ----------------------------------------------------- */
function initActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav a').forEach(a => {
    try {
      const linkPath = new URL(a.href, window.location.href).pathname.replace(/\/$/, '') || '/';
      if (path === linkPath || (path === '' && linkPath === '/')) {
        a.classList.add('is-active');
      }
    } catch(e) {}
  });
}

/* --- Scroll reveal ------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(i => io.observe(i));
}

/* --- Offer renderer ------------------------------------------------------ */
async function loadOffers() {
  const url = (typeof PCI !== 'undefined' && PCI.offersUrl)
    ? PCI.offersUrl
    : new URL('data/offers.json', document.baseURI).href;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch(e) {
    console.error('Impossible de charger les offres :', e);
    return null;
  }
}

function isValidUrl(u) { return u && !u.startsWith('REPLACE_'); }
function escapeHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function nl2br(s) { return escapeHtml(s).replace(/\n/g,'<br />'); }

function renderTierCta(cta) {
  if (!cta) return '';
  if (cta.type === 'contact') {
    return `<a class="tier-card__cta tier-card__cta--primary" href="${cta.url}">${cta.label} <span aria-hidden="true">→</span></a>`;
  }
  if (cta.type === 'stripe') {
    const url = isValidUrl(cta.stripeUrl) ? cta.stripeUrl : cta.fallbackUrl;
    const target = isValidUrl(cta.stripeUrl) ? 'target="_blank" rel="noopener"' : '';
    return `<a class="tier-card__cta tier-card__cta--primary" href="${url}" ${target}>${cta.label} <span aria-hidden="true">→</span></a>
      ${cta.fallbackUrl ? `<a class="tier-card__cta-alt" href="${cta.fallbackUrl}">Échanger avant de souscrire</a>` : ''}`;
  }
  if (cta.type === 'stripe-dual') {
    const monthly = isValidUrl(cta.stripeUrlMonthly) ? cta.stripeUrlMonthly : cta.fallbackUrl;
    const yearly  = isValidUrl(cta.stripeUrlYearly)  ? cta.stripeUrlYearly  : cta.fallbackUrl;
    const tM = isValidUrl(cta.stripeUrlMonthly) ? 'target="_blank" rel="noopener"' : '';
    const tY = isValidUrl(cta.stripeUrlYearly)  ? 'target="_blank" rel="noopener"' : '';
    return `<div class="tier-card__dual">
        <a class="tier-card__cta tier-card__cta--primary" href="${monthly}" ${tM}>${nl2br(cta.monthlyLabel||'9 € / mois')}</a>
        <a class="tier-card__cta tier-card__cta--ghost"   href="${yearly}"  ${tY}>${nl2br(cta.yearlyLabel||'90 € / an')}</a>
      </div>
      ${cta.fallbackUrl ? `<a class="tier-card__cta-alt" href="${cta.fallbackUrl}">Une question avant de souscrire&nbsp;?</a>` : ''}`;
  }
  return '';
}

function renderTiers(data, container) {
  container.className = 'tiers-grid';
  container.innerHTML = (data.tiers || []).map(t => `
    <article class="tier-card${t.highlight ? ' tier-card--featured' : ''}" data-reveal>
      ${t.badge ? `<span class="tier-card__badge">${t.badge}</span>` : ''}
      <header class="tier-card__head">
        <h3 class="tier-card__name">${t.name}</h3>
        <p class="tier-card__tagline">${t.tagline || ''}</p>
        <div class="tier-card__price">
          <span class="tier-card__price-main">${t.price}</span>
          ${t.priceUnit ? `<span class="tier-card__price-unit">${t.priceUnit}</span>` : ''}
        </div>
        ${t.priceAlt  ? `<p class="tier-card__price-alt">${t.priceAlt}</p>` : ''}
        ${t.priceNote ? `<p class="tier-card__price-note">${nl2br(t.priceNote)}</p>` : ''}
      </header>
      <ul class="tier-card__features">${t.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <div class="tier-card__actions">${renderTierCta(t.cta)}</div>
    </article>`).join('');
}

async function initOffers() {
  const root = document.getElementById('offers-root');
  if (!root) return;
  const data = await loadOffers();
  if (!data || !data.tiers) {
    root.innerHTML = '<p style="color:var(--c-muted);padding:24px 0;">Les offres ne peuvent pas être chargées. Vérifiez que le site est bien déployé.</p>';
    return;
  }
  renderTiers(data, root);
  initReveal();
}

/* --- Formulaire de contact ---------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  const sujet = params.get('sujet');
  if (sujet) {
    const sel = form.querySelector('[name="sujet"]');
    if (sel) {
      const match = Array.from(sel.options).find(o => o.value === sujet);
      if (match) { sel.value = sujet; }
      else { const o = document.createElement('option'); o.value = o.textContent = sujet; o.selected = true; sel.appendChild(o); }
    }
    const msg = form.querySelector('[name="message"]');
    if (msg && !msg.value) msg.value = `Bonjour,\n\nJe souhaiterais en savoir plus sur l'offre "${sujet.replace(/-/g,' ')}".\n\nMerci.`;
  }
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const feedback = form.querySelector('.form-feedback');
    const submit   = form.querySelector('button[type="submit"]');
    feedback.className = 'form-feedback';
    if (!form.action || form.action.includes('FORMSPREE_ID') || form.action.endsWith('#')) {
      feedback.className = 'form-feedback success';
      feedback.textContent = 'Merci ! (Démo) Votre message serait envoyé une fois le formulaire connecté à Formspree.';
      form.reset(); return;
    }
    submit.disabled = true; submit.textContent = 'Envoi…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
      if (res.ok) { feedback.className = 'form-feedback success'; feedback.textContent = 'Merci, votre message a bien été envoyé. Nous revenons vers vous sous 24h ouvrées.'; form.reset(); }
      else throw new Error();
    } catch { feedback.className = 'form-feedback error'; feedback.textContent = 'Une erreur est survenue. Merci de réessayer ou de nous contacter directement par email.'; }
    finally { submit.disabled = false; submit.textContent = 'Envoyer ma demande'; }
  });
}

/* --- Boot ---------------------------------------------------------------- */
function bootPCI() {
  initNav();
  initActiveNav();
  initReveal();
  initOffers();
  initContactForm();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootPCI);
} else {
  bootPCI();
}
