# Mon portfolio

Portfolio personnel moderne et responsive réalisé avec Astro, pensé pour présenter mes compétences, projets, expériences et certifications.

## Présentation

Ce projet est un site vitrine professionnel en français et en anglais, conçu pour mettre en avant :

- mes projets académiques et personnels
- mon parcours professionnel
- mes certifications
- une section à propos
- un moyen de me contacter

Le site offre aussi une navigation fluide, un mode sombre, une personnalisation de couleur et une structure de contenu facilement maintenable.

## Stack technique

- Astro 7
- Tailwind CSS 4
- TypeScript
- Content Collections d'Astro
- GitHub Pages

## Fonctionnalités

- page d'accueil dynamique
- pages projets / expériences / certifications / à propos / contact
- support multilingue FR / EN
- thème clair / sombre
- navigation responsive pour mobile et desktop
- contenu centralisé dans le dossier `src/content`

## Prérequis

- Node.js >= 22.12.0
- npm

## Installation

```bash
npm install
```

## Lancer le projet en local

```bash
npm run dev
```

Le site est accessible sur :

```text
http://localhost:4321
```

## Construction de production

```bash
npm run build
```

Pour prévisualiser le build :

```bash
npm run preview
```

## Déploiement

```bash
npm run deploy
```

## Structure du projet

```text
mon-portfolio/
├── public/                  # Fichiers statiques
├── src/
│   ├── components/         # Composants Astro
│   ├── content/            # Contenu des projets, expériences, certifications
│   ├── i18n/               # Traductions FR/EN
│   ├── layouts/            # Layouts globaux
│   ├── pages/              # Pages du site
│   ├── styles/             # Styles globaux
│   └── content.config.ts   # Collections de contenu
├── astro.config.mjs        # Configuration Astro
├── package.json            # Scripts du projet
├── tsconfig.json           # Configuration TypeScript
├── README.md               # Documentation du projet
└── ...
```

## Auteur

Enzo Jungers
