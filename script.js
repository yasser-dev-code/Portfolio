'use strict';

(() => {
  const translations = window.PORTFOLIO_TRANSLATIONS;
  const projects = window.PORTFOLIO_PROJECTS;
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const navPanel = document.querySelector('.nav-panel');
  const themeButton = document.querySelector('.theme-toggle');
  const backToTop = document.querySelector('.back-to-top');
  const projectGrid = document.querySelector('#projects-grid');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentLanguage = localStorage.getItem('portfolio-language') || 'fr';
  let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function translatePage(language) {
    const dictionary = translations[language] || translations.fr;
    currentLanguage = language;
    root.lang = language;
    localStorage.setItem('portfolio-language', language);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value === undefined) return;
      if (value.includes('<br>')) element.innerHTML = value;
      else element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = dictionary[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = dictionary[element.dataset.i18nAlt];
      if (value !== undefined) element.setAttribute('alt', value);
    });

    document.title = dictionary.pageTitle;
    document.querySelector('meta[name="description"]').content = dictionary.metaDescription;
    document.querySelector('meta[property="og:title"]').content = dictionary.pageTitle;
    document.querySelector('meta[property="og:description"]').content = dictionary.ogDescription;

    document.querySelectorAll('.lang-btn').forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    updateControlLabels();
    renderProjects();
  }

  function updateControlLabels() {
    const isFrench = currentLanguage === 'fr';
    const isLight = currentTheme === 'light';
    const menuOpen = menuButton.classList.contains('open');
    themeButton.setAttribute('aria-label', isLight
      ? (isFrench ? 'Activer le thème sombre' : 'Switch to dark theme')
      : (isFrench ? 'Activer le thème clair' : 'Switch to light theme'));
    menuButton.setAttribute('aria-label', menuOpen
      ? (isFrench ? 'Fermer le menu' : 'Close menu')
      : (isFrench ? 'Ouvrir le menu' : 'Open menu'));
  }

  function applyTheme(theme) {
    currentTheme = theme;
    root.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#080d19' : '#f6f8fc';
    updateControlLabels();
  }

  function renderProjects() {
    const dictionary = translations[currentLanguage] || translations.fr;
    projectGrid.replaceChildren();

    projects.forEach((project) => {
      const article = document.createElement('article');
      article.className = `project-card reveal${project.featured ? ' featured' : ''}`;

      const cardLink = document.createElement('a');
      cardLink.className = 'project-card-link';
      cardLink.href = project.repo;
      cardLink.target = '_blank';
      cardLink.rel = 'noopener noreferrer';
      cardLink.setAttribute('aria-label', `${dictionary.githubButton} — ${project.name}`);

      const media = document.createElement('div');
      media.className = project.image ? 'project-media' : 'project-placeholder';
      if (project.image) {
        const image = document.createElement('img');
        image.src = project.image;
        image.alt = `${dictionary.projectImageAlt} — ${project.name}`;
        image.width = 1400;
        image.height = 900;
        image.loading = 'lazy';
        image.decoding = 'async';
        media.append(image);
      } else {
        const symbol = document.createElement('span');
        symbol.textContent = 'J';
        symbol.setAttribute('aria-hidden', 'true');
        media.append(symbol);
      }

      const body = document.createElement('div');
      body.className = 'project-body';

      if (project.featured) {
        const label = document.createElement('p');
        label.className = 'project-label';
        label.textContent = dictionary.featured;
        body.append(label);
      }

      const title = document.createElement('h3');
      title.textContent = project.name;
      const description = document.createElement('p');
      description.textContent = project.description[currentLanguage];
      const tags = document.createElement('div');
      tags.className = 'project-tags';
      project.tags.forEach((tag) => {
        const item = document.createElement('span');
        item.textContent = tag;
        tags.append(item);
      });

      const link = document.createElement('a');
      link.className = 'project-link';
      link.href = project.repo;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `<span>${dictionary.githubButton}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82c.85 0 1.69.11 2.48.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`;
      link.setAttribute('aria-label', `${dictionary.githubButton} — ${project.name}`);

      body.append(title, description, tags, link);
      article.append(cardLink, media, body);
      projectGrid.append(article);
    });

    observeReveals();
  }

  function toggleMenu(forceOpen) {
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !navPanel.classList.contains('open');
    navPanel.classList.toggle('open', shouldOpen);
    menuButton.classList.toggle('open', shouldOpen);
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
    document.body.classList.toggle('menu-open', shouldOpen);
    updateControlLabels();
  }

  let revealObserver;
  function observeReveals() {
    const pending = document.querySelectorAll('.reveal:not(.visible)');
    if (reducedMotion || !('IntersectionObserver' in window)) {
      pending.forEach((element) => element.classList.add('visible'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    }
    pending.forEach((element) => revealObserver.observe(element));
  }

  function updateScrollState() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 20);
    backToTop.classList.toggle('visible', y > 650);
  }

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => translatePage(button.dataset.lang));
  });
  themeButton.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  menuButton.addEventListener('click', () => toggleMenu());
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      toggleMenu(false);

      requestAnimationFrame(() => {
        const headerOffset = header.getBoundingClientRect().height + 18;
        const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
        window.scrollTo({
          top: targetY,
          behavior: reducedMotion ? 'auto' : 'smooth'
        });
        window.history.replaceState(null, '', hash);
      });
    });
  });
  document.addEventListener('click', (event) => {
    if (!navPanel.classList.contains('open')) return;
    if (!navPanel.contains(event.target) && !menuButton.contains(event.target)) toggleMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleMenu(false);
  });

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) toggleMenu(false);
  });

  document.querySelector('#current-year').textContent = String(new Date().getFullYear());
  applyTheme(currentTheme);
  translatePage(currentLanguage);
  updateScrollState();
  observeReveals();
})();
