# ND Builtshine — Site web (React / Vite)

Projet React du site institutionnel de ND Builtshine, basé sur le cahier de conception validé.

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est alors accessible sur `http://localhost:5173`.

## Construire pour la production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`, prêt à être déployé sur n'importe quel hébergeur
statique (Netlify, Vercel, OVH, o2switch, cPanel, etc.).

## Structure du projet

```
src/
├── components/       # Header, Footer (communs à toutes les pages)
├── pages/            # Une page = un fichier .jsx + son .css
├── data/
│   └── company.js    # ⚠️ TOUTES les infos "métier" (coordonnées, équipe,
│                      #    projets, expertises) — à modifier ici en priorité
├── styles/
│   ├── tokens.css     # Couleurs, polices (design system)
│   └── global.css     # Styles partagés (header, footer, boutons, cartes)
├── App.jsx            # Déclaration des routes
└── main.jsx           # Point d'entrée
```

## Ce qu'il reste à faire avant la mise en ligne

Voir le fichier `src/data/company.js` : tous les champs marqués ⚠️ doivent être
confirmés ou complétés (téléphone, e-mail, réseaux sociaux, nouveaux projets, équipe).

1. **Contenu** : compléter `src/data/company.js` avec les informations validées.
2. **Visuels** : remplacer les zones "visuel à ajouter" par de vraies photos
   (dans `src/assets/`, puis les importer dans les pages concernées).
3. **Formulaire de contact** (`src/pages/Contact.jsx`) : actuellement une démonstration
   qui n'envoie rien. Le connecter à un service réel (EmailJS, Formspree, ou une API backend).
4. **Nom de domaine + hébergement** : réserver le domaine, déployer le dossier `dist/` après build.
5. **SEO** : adapter les balises `<title>` et `<meta description>` par page si besoin
   (actuellement définies globalement dans `index.html`).

## Stack technique

- [React 18](https://react.dev/)
- [React Router 6](https://reactrouter.com/) pour la navigation entre pages
- [Vite](https://vitejs.dev/) comme outil de build
- CSS classique (variables CSS + fichiers par page), sans framework CSS —
  cohérent avec le design system défini dans le cahier de conception.
