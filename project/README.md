# Site PC Invest 360 — invest-360.fr

Site vitrine statique pour le cabinet de conseil en gestion de patrimoine **PC Invest 360**.

---

## 1. Contenu du dossier

```
/
├── index.html               ← Page d'accueil
├── solutions.html           ← Nos solutions (4 piliers)
├── offres.html              ← Liste de toutes les offres
├── about.html               ← Qui sommes-nous
├── contact.html             ← Formulaire de contact
├── mentions-legales.html    ← Mentions légales
│
├── assets/
│   ├── styles.css           ← Toutes les styles (à ne pas modifier sauf design)
│   ├── main.js              ← Scripts (nav, formulaire, rendu des offres)
│   ├── logo.png             ← Logo principal
│   └── logo-blanc.png       ← Logo blanc pour fond sombre (footer)
│
├── data/
│   └── offers.json          ← ★ FICHIER DES OFFRES (modifiable facilement)
│
└── README.md                ← Ce fichier
```

---

## 2. Mettre le site en ligne sur OVH

### Étape 1 — Se connecter à l'espace OVH
1. Allez sur [www.ovh.com](https://www.ovh.com) → **Espace client**.
2. Rubrique **Hébergements** → cliquez sur votre hébergement lié à `invest-360.fr`.

### Étape 2 — Récupérer les accès FTP
Dans l'onglet **FTP-SSH** :
- **Serveur FTP** : `ftp.cluster0XX.hosting.ovh.net` (varie selon votre hébergement)
- **Identifiant** : ex. `investpcz`
- **Mot de passe** : celui défini lors de la création de l'hébergement (réinitialisable)

### Étape 3 — Téléverser les fichiers
Avec un logiciel FTP gratuit comme **FileZilla** ([filezilla-project.org](https://filezilla-project.org)) :
1. Ouvrez FileZilla → entrez vos identifiants FTP.
2. À droite (serveur), placez-vous dans le dossier `www/` (parfois `public_html/`).
3. À gauche (votre ordinateur), sélectionnez **tout le contenu** de ce dossier (les fichiers .html, les dossiers `assets/` et `data/`).
4. Glissez-déposez vers le dossier `www/` du serveur.
5. **Important** : conservez la structure exacte des dossiers — `assets/` et `data/` doivent rester à côté des fichiers HTML.

### Étape 4 — Vérification
Ouvrez [https://invest-360.fr](https://invest-360.fr) dans votre navigateur. Le site doit s'afficher immédiatement.

---

## 3. ✏️ Modifier les offres (sans toucher au code)

Le fichier **`data/offers.json`** contient les **3 formules** affichées sur la page **Nos offres**.

### Structure du fichier
Chaque formule est un objet entre `{` et `}` dans la liste `tiers`. Vous pouvez modifier :
- `name` : nom de la formule
- `tagline` : sous-titre court
- `price` : prix affiché (ex. `"480 €"`, `"Offert"`, `"9 €"`)
- `priceUnit` : unité après le prix (ex. `"/ mois"`) — laisser vide sinon
- `priceAlt` : prix alternatif sous le prix (ex. `"ou 90 € / an"`)
- `priceNote` : petite mention (ex. `"Sans engagement"`)
- `highlight` : `true` pour mettre cette formule en avant (fond bleu marine), `false` sinon. Une seule formule à la fois.
- `badge` : étiquette dorée au-dessus de la carte (optionnel)
- `features` : liste des avantages — un par ligne, entre guillemets, séparés par des virgules

### Pour modifier une formule
1. Ouvrez `data/offers.json` avec un éditeur de texte (VSCode recommandé, ou Bloc-notes).
2. Modifiez les textes entre les guillemets `" ... "`.
3. Sauvegardez et re-téléversez le fichier sur OVH via FTP.

### ⚠️ Attention à la syntaxe JSON
- Les `,` (virgules) entre les éléments — pas de virgule après le **dernier** élément
- Les `"` (guillemets droits)
- En cas de doute, validez sur [jsonlint.com](https://jsonlint.com)

---

## 4. 💳 Activer les paiements en ligne (Stripe Payment Links)

Les formules **Premium** (480 €) et **Abonnement** (9 €/mois ou 90 €/an) peuvent être souscrites directement en ligne via **Stripe Payment Links** — la solution la plus simple, sans aucun code à écrire.

### Étape 1 — Créer un compte Stripe
1. Allez sur [stripe.com](https://stripe.com) et créez un compte (gratuit, vérification d'identité requise).
2. Validez votre compte avec votre RIB et vos informations professionnelles.

### Étape 2 — Créer les 3 liens de paiement

#### Lien 1 : Premium (paiement unique 480 €)
1. Dans Stripe → **Produits** → **+ Créer un produit**.
2. Nom : `PC Invest 360 — Formule Premium`. Prix : `480 €`. Modèle de prix : **Paiement unique**.
3. Cliquez sur **Créer**, puis sur l'onglet **Liens de paiement** → **+ Créer un lien de paiement**.
4. Sélectionnez le produit Premium → **Créer le lien**.
5. Copiez l'URL du type `https://buy.stripe.com/xxxxx`.

#### Lien 2 : Abonnement mensuel (9 €/mois)
1. **Produits** → **+ Créer un produit** : `PC Invest 360 — Abonnement mensuel`. Prix : `9 €`. Modèle : **Récurrent**, période **Mensuelle**.
2. Créez un lien de paiement comme à l'étape précédente. Copiez l'URL.

#### Lien 3 : Abonnement annuel (90 €/an)
1. **Produits** → **+ Créer un produit** : `PC Invest 360 — Abonnement annuel`. Prix : `90 €`. Modèle : **Récurrent**, période **Annuelle**.
2. Créez un lien de paiement. Copiez l'URL.

### Étape 3 — Coller les 3 liens dans le site

Ouvrez `data/offers.json` et remplacez les 3 textes `REPLACE_WITH_...` par vos URLs Stripe :

```json
"cta": {
  "type": "stripe",
  "stripeUrl": "https://buy.stripe.com/xxxxx",   ← lien Premium ici
  ...
}
```

```json
"cta": {
  "type": "stripe-dual",
  "stripeUrlMonthly": "https://buy.stripe.com/yyyyy",  ← lien mensuel ici
  "stripeUrlYearly":  "https://buy.stripe.com/zzzzz",  ← lien annuel ici
  ...
}
```

Sauvegardez et re-téléversez `data/offers.json` via FTP.

### Étape 4 — Tester
Cliquez sur les boutons depuis votre site. Vous devez être redirigé vers la page de paiement Stripe. ✅

**Bon à savoir** :
- Stripe prélève une commission ~1.4% + 0.25 € par transaction (paiement unique européen).
- Vous recevez un email à chaque paiement, et l'argent arrive sur votre compte bancaire sous 7 jours.
- Tant que les liens ne sont pas configurés, les boutons redirigent automatiquement vers le formulaire de contact (fallback intelligent).

---

## 5. 📬 Activer le formulaire de contact

Le formulaire est actuellement en mode **démo** (affiche un message de succès sans envoyer d'email).

Pour l'activer en moins de 2 minutes avec **Formspree** (gratuit, 50 messages/mois) :

1. Créez un compte sur [formspree.io](https://formspree.io) (gratuit).
2. Cliquez sur **+ New Form** → entrez votre email `pc@invest-360.fr` → validez.
3. Formspree vous donne une URL du type : `https://formspree.io/f/xqkrabcd`.
4. Ouvrez `contact.html` dans un éditeur de texte.
5. Trouvez la ligne :
   ```html
   <form id="contact-form" class="form" action="#FORMSPREE_ID" method="POST" novalidate>
   ```
6. Remplacez `#FORMSPREE_ID` par votre URL Formspree :
   ```html
   <form id="contact-form" class="form" action="https://formspree.io/f/xqkrabcd" method="POST" novalidate>
   ```
7. Sauvegardez et re-téléversez `contact.html` via FTP.
8. ✅ Les messages arrivent directement sur votre email.

**Alternative** : si vous préférez utiliser le PHP natif d'OVH (sans service tiers), demandez-nous — c'est un petit fichier `send.php` à ajouter.

---

## 6. ✏️ Modifier le contenu textuel des pages

Tous les textes des pages sont directement dans les fichiers `.html`. Ouvrez-les avec un éditeur de texte simple et modifiez le texte entre les balises HTML.

**Exemple** dans `index.html` :
```html
<h1>Bâtissez un patrimoine à la hauteur de vos ambitions.</h1>
```

Modifiez uniquement le texte **entre** `<h1>` et `</h1>` — ne touchez pas aux balises.

---

## 7. 🖼️ Remplacer les photos

Le site contient un emplacement pour une photo lifestyle sur l'accueil et un portrait sur "Qui sommes-nous". Pour les remplacer :

1. Préparez votre photo en JPG ou PNG (format conseillé : 1200×1500 px minimum, sous 500 Ko).
2. Téléversez-la dans le dossier `assets/` via FTP, en la nommant par exemple `hero.jpg` et `portrait.jpg`.
3. Dans `index.html`, trouvez la ligne `<img src="https://images.unsplash.com/...` et remplacez l'URL par `assets/hero.jpg`.
4. Dans `about.html`, remplacez le bloc `<div class="placeholder">...</div>` par `<img src="assets/portrait.jpg" alt="Pierre Jérôme CHERRIERE" style="width:100%;height:100%;object-fit:cover;" />`.

---

## 8. 🎨 Modifier les couleurs

Les couleurs de la charte sont définies en haut du fichier `assets/styles.css`, entre les lignes 5 et 15 :

```css
:root {
  --c-ink:    #101926;   /* Bleu nuit */
  --c-navy:   #021F59;   /* Bleu marine principal */
  --c-gold:   #D99036;   /* Ocre / or */
  ...
}
```

Pour changer une couleur partout sur le site, modifiez la valeur ici — toutes les pages se mettent à jour automatiquement.

---

## 9. Besoin d'aide ?

- **Pour modifier le site** : ouvrez les fichiers HTML dans un éditeur (VSCode recommandé, gratuit : [code.visualstudio.com](https://code.visualstudio.com))
- **Pour téléverser** : FileZilla
- **Pour valider votre JSON** : [jsonlint.com](https://jsonlint.com)
- **Pour tester votre site avant mise en ligne** : il suffit de double-cliquer sur `index.html` — il s'ouvre dans le navigateur (⚠️ la page Offres ne fonctionne en local qu'avec un mini-serveur, mais elle fonctionnera parfaitement en ligne).

---

© PC Invest 360 · invest-360.fr
