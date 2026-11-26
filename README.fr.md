# Yasser Oussahel — Portfolio Développeur

[Read in English](README.md)

Un portfolio développeur moderne et bilingue créé pour **Yasser Oussahel**, Développeur Full-Stack basé au Maroc. Ce site statique rapide présente ses projets vérifiés, ses compétences techniques, sa formation, ses liens de contact et son CV téléchargeable.

**Site en ligne :** <https://yasser-dev-code.github.io/Portfolio/>

## Fonctionnalités

- Interface française par défaut avec traduction anglaise complète
- Thème sombre par défaut avec une alternative claire soignée
- Préférences de langue et de thème enregistrées dans `localStorage`
- Navigation responsive, section active et menu mobile
- Cinq projets GitHub publics vérifiés avec données locales fiables
- Quatre captures réelles provenant des dépôts des projets
- Téléchargement du CV PDF final optimisé pour les ATS
- Photographie professionnelle avec copie optimisée pour l’affichage
- Structure sémantique accessible, navigation clavier et réduction des animations
- Métadonnées SEO et Open Graph, favicon et mise à jour bilingue des métadonnées
- Hébergement statique compatible avec GitHub Pages et le chemin `/Portfolio/`

## Projets vérifiés

1. [AgencyFlow](https://github.com/yasser-dev-code/AgencyFlow) — React, Node.js, Express, PostgreSQL, Prisma
2. [Maison Gourmet CMS](https://github.com/yasser-dev-code/small-business-website-cms) — React, Express, MongoDB, Mongoose
3. [RankPilot](https://github.com/yasser-dev-code/rankpilot-seo-auditor) — Python, Django, SQLite
4. [ClientFlow](https://github.com/yasser-dev-code/ClientFlow) — PHP, Laravel, MySQL, Blade
5. [Banque-En-Ligne](https://github.com/yasser-dev-code/Banque-En-Ligne) — Java, Swing, MVC, POO

Les informations des projets sont conservées dans [`js/projects.js`](js/projects.js). Les cartes restent donc disponibles sans API GitHub ni authentification des visiteurs.

## Technologies

- HTML5
- CSS3
- JavaScript vanilla (ES6+)

Aucun framework, paquet npm, outil de compilation, backend, base de données ou dépendance d’exécution n’est utilisé.

## Exécution locale

Vous pouvez ouvrir directement `index.html` dans un navigateur. Pour reproduire au mieux le fonctionnement de GitHub Pages, servez le dossier avec n’importe quel serveur statique.

Avec Python :

```bash
python -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000/>.

Aucune installation ni compilation n’est nécessaire.

## Téléchargement du CV

La section d’accueil pointe directement vers le PDF final :

- `CV/CV_Yasser_Oussahel.pdf`

Le lien utilise l’attribut HTML `download` et un chemin relatif compatible avec un usage local et GitHub Pages.

## Structure du projet

```text
Portfolio/
├── index.html
├── style.css
├── script.js
├── js/
│   ├── translations.js
│   └── projects.js
├── assets/
│   ├── icons/favicon.svg
│   └── images/
│       ├── yasser-oussahel.jpg
│       └── projects/
├── CV/
│   └── CV_Yasser_Oussahel.pdf
├── profile.jpg.png
├── README.md
├── README.fr.md
├── .gitignore
└── .nojekyll
```

La photographie originale reste intacte à la racine du dépôt. Le site utilise sa copie JPEG optimisée.

## Déploiement GitHub Pages

Ce dépôt est prévu pour un déploiement direct depuis une branche, sans étape de compilation :

1. Ouvrez les **Settings** du dépôt.
2. Sélectionnez **Pages**.
3. Dans **Build and deployment**, choisissez **Deploy from a branch**.
4. Sélectionnez la branche `main` et le dossier `/(root)`.
5. Enregistrez la configuration.

L’URL attendue est <https://yasser-dev-code.github.io/Portfolio/>.

## Contrôles qualité

Le projet est contrôlé pour la syntaxe JavaScript, l’encodage UTF-8, la couverture des traductions, l’unicité des identifiants HTML, les ancres internes, les références de fichiers, l’équilibre des accolades CSS, le nombre de projets, les signatures des CV et les réponses HTTP statiques. Les captures générées par navigateur sont volontairement absentes car l’automatisation du navigateur était indisponible ; aucune fausse image d’aperçu n’a été ajoutée.

## Auteur

**Yasser Oussahel** — Développeur Full-Stack

- [GitHub](https://github.com/yasser-dev-code)
- [LinkedIn](https://www.linkedin.com/in/yasser-oussahel-b31127447/)
