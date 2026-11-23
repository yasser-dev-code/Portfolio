# Yasser Oussahel — Developer Portfolio

[Lire en français](README.fr.md)

A modern, bilingual developer portfolio created for **Yasser Oussahel**, a Full-Stack Developer based in Morocco. It presents verified projects, technical skills, education, contact links, and downloadable CV files in a fast static website.

**Live website:** <https://yasser-dev-code.github.io/Portfolio/>

## Features

- French-first interface with complete English translation
- Dark theme by default with a polished light alternative
- Language and theme preferences saved in `localStorage`
- Responsive navigation with active-section highlighting and a mobile menu
- Five verified public GitHub projects with local fallback data
- Four real project screenshots sourced from their repositories
- Download links for the original PDF and Word CV files
- Professional profile photograph with an optimized display copy
- Accessible semantic structure, keyboard focus states, and reduced-motion support
- SEO, Open Graph, favicon, and bilingual metadata updates
- Pure static hosting compatible with GitHub Pages and the `/Portfolio/` base path

## Verified projects

1. [AgencyFlow](https://github.com/yasser-dev-code/AgencyFlow) — React, Node.js, Express, PostgreSQL, Prisma
2. [Maison Gourmet CMS](https://github.com/yasser-dev-code/small-business-website-cms) — React, Express, MongoDB, Mongoose
3. [RankPilot](https://github.com/yasser-dev-code/rankpilot-seo-auditor) — Python, Django, SQLite
4. [ClientFlow](https://github.com/yasser-dev-code/ClientFlow) — PHP, Laravel, MySQL, Blade
5. [Banque-En-Ligne](https://github.com/yasser-dev-code/Banque-En-Ligne) — Java, Swing, MVC, OOP

Project information is stored in [`js/projects.js`](js/projects.js), so the cards remain available without GitHub API access or visitor authentication.

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

There are no frameworks, npm packages, build tools, backend services, databases, or runtime dependencies.

## Run locally

You can open `index.html` directly in a browser. For behavior closest to GitHub Pages, serve the folder with any static server.

Using Python:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000/>.

No installation or build command is required.

## CV downloads

The hero section links directly to the original documents:

- `CV/CV.pdf`
- `CV/CV.docx`

Both use standard HTML `download` links and relative paths that work locally and on GitHub Pages.

## Project structure

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
│   ├── CV.pdf
│   └── CV.docx
├── profile.jpg.png
├── README.md
├── README.fr.md
├── .gitignore
└── .nojekyll
```

The original profile photograph remains untouched at the repository root. The optimized JPEG is used by the website.

## GitHub Pages deployment

This repository is designed for direct branch deployment without a build step:

1. Open the repository **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)` folder.
5. Save the configuration.

The expected URL is <https://yasser-dev-code.github.io/Portfolio/>.

## Quality checks

The project is checked for JavaScript syntax, UTF-8 encoding, translation coverage, unique HTML IDs, valid internal anchors, file references, CSS brace balance, project count, CV file signatures, and static HTTP responses. Browser-generated screenshots are intentionally omitted because browser automation was unavailable; no fake preview image is included.

## Author

**Yasser Oussahel** — Full-Stack Developer

- [GitHub](https://github.com/yasser-dev-code)
- [LinkedIn](https://www.linkedin.com/in/yasser-oussahel-b31127447/)
