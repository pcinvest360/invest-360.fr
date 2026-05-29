# CLAUDE.md — Site PC Invest 360

Contexte projet pour Claude Code. Site vitrine statique du cabinet de conseil en gestion de patrimoine **PC Invest 360** (invest-360.fr), basé à Salon-de-Provence.

## Nature du projet

Site **statique pur** : HTML + CSS + JS vanilla, **aucun build, aucune dépendance npm, aucun framework**. On ouvre les `.html` directement dans le navigateur. Hébergement final : **OVH en FTP** (dossier `www/`).

- Langue du site et de tout le contenu : **français**.
- Pas de Node, pas de bundler, pas de transpilation. Ne pas introduire de toolchain (Webpack/Vite/React…) sauf demande explicite.

## Structure des fichiers

```
/
├── index.html              ← Accueil
├── solutions.html          ← Nos solutions (4 piliers)
├── offres.html             ← Offres (rendu depuis data/offers.json)
├── about.html              ← Qui sommes-nous
├── contact.html            ← Formulaire de contact
├── mentions-legales.html   ← Mentions légales
│
├── assets/
│   ├── styles.css          ← TOUT le CSS du site (variables :root en haut)
│   ├── main.js             ← Nav, reveal au scroll, rendu offres, formulaire
│   ├── logo.png            ← Logo principal
│   └── logo-blanc.png      ← Logo blanc (footer / fonds sombres)
│
├── data/
│   └── offers.json         ← Source des 3 formules de la page Offres
│
├── README.md               ← Guide client (mise en ligne, édition offres, Stripe, Formspree)
│
├── PC Invest 360 - Accueil.html  ← Export standalone (généré, NE PAS éditer à la main)
├── index-print.html              ← Variante print/PDF de l'accueil (généré)
└── uploads/                      ← Sources fournies (charte PDF, logos) — référence
```

`assets/tweaks-panel.jsx` n'est pas utilisé par le site ; l'ignorer.

## Conventions de design (charte graphique)

Variables CSS dans `:root` en haut de `assets/styles.css` — **toujours** utiliser ces variables, ne jamais coder une couleur en dur.

| Token | Valeur | Usage |
|---|---|---|
| `--c-navy` | `#021F59` | Bleu marine principal |
| `--c-gold` | `#D99036` | Ocre / or (accents, CTA) |
| `--c-ink` | `#101926` | Bleu nuit (footer, citations) |
| `--c-bg` | `#FBF8F3` | Crème de fond |
| `--c-bg-2` | `#F2EBE0` | Crème marquée (sections alternées) |
| `--c-text` | `#1A2233` | Texte principal |
| `--c-line` | `#E6DECF` | Lignes / séparateurs |

- **Titres** : `--f-serif` = "Cormorant Garamond" (chargé via Google Fonts).
- **Texte courant** : `--f-sans` = "Outfit".
- Rayons : `--radius` (4px), `--radius-lg` (10px). Ombres : `--shadow-sm/-shadow/-shadow-lg`. Transitions : `--t`, `--t-fast`.
- Pas d'emoji dans l'UI. Style sobre, premium, institutionnel.

## Patterns à respecter

- **Navigation / structure** : header + footer sont **dupliqués dans chaque page HTML** (pas d'includes). Toute modif de menu ou de footer doit être répercutée sur **toutes** les pages.
- **Reveal au scroll** : les éléments avec `data-reveal` sont masqués puis révélés via IntersectionObserver dans `main.js` (classe `.is-visible`). Garder l'attribut sur les nouveaux blocs pour l'animation.
- **Labels d'écran** : `data-screen-label` sur les sections — conserver / ajouter sur les nouvelles sections.
- **Icônes** : SVG inline (stroke `currentColor`, `stroke-width` ~1.6). Bibliothèque `ICONS` dans `main.js`. Pas de librairie d'icônes externe.
- **Liens internes** : relatifs (`solutions.html`, `contact.html?sujet=premium`).

## Contenu piloté par les données

La page **offres.html** ne contient pas les offres en dur : elle a un `<div id="offers-root">` rempli par `initOffers()` (`main.js`) à partir de `data/offers.json`. Pour modifier prix/formules → éditer **`data/offers.json`**, pas le HTML.

- Types de CTA gérés : `contact` (lien interne), `stripe` (paiement unique), `stripe-dual` (mensuel/annuel).
- Les URLs `REPLACE_WITH_...` sont des placeholders ; tant qu'elles ne sont pas remplacées par de vrais liens Stripe, les boutons retombent sur `fallbackUrl` (formulaire de contact).
- ⚠️ `fetch()` sur `offers.json` échoue en `file://` (ouverture directe). Tester la page Offres avec un mini serveur local (`python3 -m http.server`) ou en ligne.

## Intégrations à configurer (voir README §4–5)

- **Stripe Payment Links** : coller les vraies URLs dans `data/offers.json`.
- **Formspree** : remplacer `action="#FORMSPREE_ID"` dans `contact.html` par l'endpoint réel. Le formulaire est en mode démo sinon.

## Fichiers générés — ne pas éditer à la main

- `PC Invest 360 - Accueil.html` : export **standalone** (tous les assets inlinés, ~815 Ko). Régénéré à partir de `index.html`. Inclut un correctif : un script de secours en fin de `<body>` qui exécute `boot` même si `DOMContentLoaded` a déjà eu lieu (sinon le contenu reste masqué après dépaquetage du bundle).
- `index-print.html` : variante mise en page pour impression PDF.

Pour ces deux fichiers, **modifier la source (`index.html` / `assets/`) puis régénérer** — ne pas patcher le fichier compilé.

## Démarrage rapide

```bash
# Servir localement (nécessaire pour que la page Offres charge offers.json)
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

## Déploiement

FTP vers OVH, dossier `www/` (ou `public_html/`). Conserver la structure exacte : `assets/` et `data/` doivent rester à côté des `.html`. Détails dans `README.md` §2.
