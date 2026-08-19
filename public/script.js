window.ZeitonaNews = {
    localizeField(field, locale) {
        if (!field || typeof field !== 'object') return '';
        const value = field[locale] || field['en-us'] || '';
        return typeof value === 'string' ? value : '';
    },
    sortItems(items) {
        return (items || []).slice().sort((a, b) => {
            const da = Date.parse(a && a.date) || 0;
            const db = Date.parse(b && b.date) || 0;
            return db - da;
        });
    },
    formatDate(isoDate, locale) {
        const ms = Date.parse(isoDate);
        if (!Number.isFinite(ms)) return isoDate || '';
        try {
            return new Intl.DateTimeFormat(locale || 'en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }).format(new Date(ms));
        } catch (_) {
            return isoDate;
        }
    },
    escapeHtml(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },
    renderNewsList(container, items, locale, t) {
        if (!container) return;
        const sorted = this.sortItems(items);
        if (!sorted.length) {
            container.innerHTML = `
                <div class="news-empty">
                    <h3 class="news-empty-title">${this.escapeHtml(t('news.emptyTitle'))}</h3>
                    <p class="news-empty-body">${this.escapeHtml(t('news.emptyBody'))}</p>
                </div>`;
            return;
        }
        container.innerHTML = sorted.map((item) => {
            const title = this.escapeHtml(this.localizeField(item.title, locale));
            const summaryRaw = this.localizeField(item.summary, locale);
            const summary = summaryRaw
                ? `<p class="news-item-summary">${this.escapeHtml(summaryRaw)}</p>`
                : '';
            const dateLabel = this.escapeHtml(this.formatDate(item.date, locale));
            const url = typeof item.url === 'string' && item.url.trim() ? item.url.trim() : null;
            const readMore = url
                ? `<a class="card-link news-item-more" href="${this.escapeHtml(url)}">${this.escapeHtml(t('news.readMore'))}</a>`
                : '';
            const titleHtml = url
                ? `<a class="news-item-title" href="${this.escapeHtml(url)}">${title}</a>`
                : `<span class="news-item-title">${title}</span>`;
            return `<article class="news-item" data-news-id="${this.escapeHtml(item.id || '')}">
                <time class="news-item-date" datetime="${this.escapeHtml(item.date || '')}">${dateLabel}</time>
                ${titleHtml}
                ${summary}
                ${readMore}
            </article>`;
        }).join('');
    }
};

function initNews() {
    const list = document.getElementById('news-list');
    if (!list) return;

    let cachedItems = null;
    let loadFailed = false;
    const t = (key) => (window.i18n ? window.i18n.t(key) : key);
    const locale = () => (window.i18n ? window.i18n.getCurrentLocale() : 'en-us');

    const showLoadError = () => {
        list.innerHTML = `
            <div class="news-empty">
                <h3 class="news-empty-title">${window.ZeitonaNews.escapeHtml(t('news.unavailableTitle'))}</h3>
                <p class="news-empty-body">${window.ZeitonaNews.escapeHtml(t('news.unavailableBody'))}</p>
            </div>`;
    };

    const paint = () => {
        if (cachedItems === null && !loadFailed) return;
        if (loadFailed) {
            showLoadError();
            return;
        }
        window.ZeitonaNews.renderNewsList(list, cachedItems, locale(), t);
    };

    fetch('news.json', { cache: 'no-store' })
        .then((res) => {
            if (!res.ok) throw new Error('news fetch failed');
            return res.json();
        })
        .then((data) => {
            loadFailed = false;
            cachedItems = Array.isArray(data && data.items) ? data.items : [];
            paint();
        })
        .catch(() => {
            loadFailed = true;
            paint();
        });

    document.addEventListener('zeitona:locale-changed', paint);
}

function init() {
    // Inject Unified Header
    const headerHTML = `
    <nav class="header" id="navbar" aria-label="Primary navigation" data-i18n-aria-label="controls.primaryNav">
        <div class="navbar">
            <a href="index.html" aria-label="Zeitona home" data-i18n-aria-label="controls.homeLabel"><img src="assets/azeitona4.png" alt="Zeitona Logo" class="navbar-logo" /></a>

            <button class="menu-toggle" id="mobile-menu" type="button" aria-controls="nav-links" aria-expanded="false" aria-label="Menu" data-i18n-aria-label="controls.menu">
                <span class="bar" aria-hidden="true"></span>
                <span class="bar" aria-hidden="true"></span>
                <span class="bar" aria-hidden="true"></span>
            </button>

            <div class="navbar-links" id="nav-links">
                <a href="company.html" data-i18n="navigation.company">Company</a>
                <a href="collaboration.html" data-i18n="navigation.collaboration">Collaboration</a>
                <a href="innovation.html" data-i18n="navigation.innovation">Innovation</a>
                <a href="news.html" data-i18n="navigation.news">News</a>
                <a href="contact.html" data-i18n="navigation.contact">Contact</a>
                <div class="global-controls">
                    <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Use dark theme" aria-pressed="false" title="Use dark theme">
                        <svg class="theme-icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.42"/></svg>
                        <svg class="theme-icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.4 8.4 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/></svg>
                    </button>
                    <div class="lang-switcher" id="lang-switcher">
                        <button class="lang-btn" id="lang-btn" type="button" aria-label="Select language: English (US)" aria-haspopup="listbox" aria-expanded="false">
                            <img id="lang-current-flag" class="flag-icon" src="assets/flags/us.svg" alt="" aria-hidden="true" />
                            <span id="lang-current-label" class="sr-only">English (US)</span>
                            <svg class="lang-chevron" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                        <div class="lang-dropdown" id="lang-dropdown" role="listbox" aria-label="Select language">
                            <button class="lang-option" type="button" data-locale="en-us" data-language="English (US)" data-flag="assets/flags/us.svg" role="option" aria-selected="false" title="English (US)"><img class="flag-icon" src="assets/flags/us.svg" alt="" aria-hidden="true" /><span>English (US)</span><span class="lang-check" aria-hidden="true">✓</span></button>
                            <button class="lang-option" type="button" data-locale="en-gb" data-language="English (UK)" data-flag="assets/flags/gb.svg" role="option" aria-selected="false" title="English (UK)"><img class="flag-icon" src="assets/flags/gb.svg" alt="" aria-hidden="true" /><span>English (UK)</span><span class="lang-check" aria-hidden="true">✓</span></button>
                            <button class="lang-option" type="button" data-locale="pt-pt" data-language="Português (Portugal)" data-flag="assets/flags/pt.svg" role="option" aria-selected="false" title="Português (Portugal)"><img class="flag-icon" src="assets/flags/pt.svg" alt="" aria-hidden="true" /><span>Português (Portugal)</span><span class="lang-check" aria-hidden="true">✓</span></button>
                            <button class="lang-option" type="button" data-locale="pt-br" data-language="Português (Brasil)" data-flag="assets/flags/br.svg" role="option" aria-selected="false" title="Português (Brasil)"><img class="flag-icon" src="assets/flags/br.svg" alt="" aria-hidden="true" /><span>Português (Brasil)</span><span class="lang-check" aria-hidden="true">✓</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;

    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.outerHTML = headerHTML;
    }

    // Inject Shared Footer
    const currentYear = new Date().getFullYear();
    const footerHTML = `
    <footer class="footer">
        <div class="container footer-inner">
            <div class="footer-brand">
                <p class="footer-tagline text-muted" data-i18n="footer.tagline">Technology shaped around real needs.</p>
            </div>
            <div class="footer-bottom">
                <p class="footer-copy">&copy; ${currentYear} Zeitona. <span data-i18n="footer.rights">All rights reserved.</span></p>
            </div>
        </div>
    </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }

    // Theme preference is explicit-only: a missing or invalid value always resolves to Light.
    const themeToggle = document.getElementById('theme-toggle');
    const updateThemeControl = () => {
        if (!themeToggle) return;
        const isDark = document.documentElement.dataset.theme === 'dark';
        const labelKey = isDark ? 'controls.useLightTheme' : 'controls.useDarkTheme';
        const fallback = isDark ? 'Use light theme' : 'Use dark theme';
        const label = window.i18n ? window.i18n.t(labelKey) : fallback;
        themeToggle.setAttribute('aria-label', label);
        themeToggle.setAttribute('title', label);
        themeToggle.setAttribute('aria-pressed', String(isDark));
    };

    if (themeToggle) {
        updateThemeControl();
        themeToggle.addEventListener('click', () => {
            const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = nextTheme;
            try { localStorage.setItem('zeitona-theme', nextTheme); } catch (_error) { /* Theme still applies for this visit. */ }
            updateThemeControl();
        });
        document.addEventListener('zeitona:locale-changed', updateThemeControl);
    }

    // Mobile Menu Toggle Logic
    const menu = document.getElementById('mobile-menu');
    const menuLinks = document.getElementById('nav-links');
    if (menu && menuLinks) {
        menu.addEventListener('click', function () {
            const isOpen = menuLinks.classList.toggle('active');
            menu.classList.toggle('is-active', isOpen);
            menu.setAttribute('aria-expanded', String(isOpen));
            menu.setAttribute('aria-label', window.i18n ? window.i18n.t('controls.menu') : 'Menu');
        });

        menu.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && menuLinks.classList.contains('active')) {
                menuLinks.classList.remove('active');
                menu.classList.remove('is-active');
                menu.setAttribute('aria-expanded', 'false');
                menu.setAttribute('aria-label', window.i18n ? window.i18n.t('controls.menu') : 'Menu');
            }
        });
    }

    // Language Switcher Logic
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langSwitcher = document.getElementById('lang-switcher');

    if (langBtn && langDropdown) {
        const options = Array.from(langDropdown.querySelectorAll('.lang-option'));

        const closeLanguageMenu = (returnFocus = false) => {
            langDropdown.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
            if (returnFocus) langBtn.focus();
        };

        const openLanguageMenu = (focusSelected = false) => {
            langDropdown.classList.add('open');
            langBtn.setAttribute('aria-expanded', 'true');
            if (focusSelected) {
                const selected = options.find(option => option.getAttribute('aria-selected') === 'true');
                (selected || options[0])?.focus();
            }
        };

        options.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                if (window.i18n) window.i18n.setLocale(btn.dataset.locale);
                closeLanguageMenu(true);
            });

            btn.addEventListener('keydown', (event) => {
                let nextIndex = null;
                if (event.key === 'ArrowDown') nextIndex = (index + 1) % options.length;
                if (event.key === 'ArrowUp') nextIndex = (index - 1 + options.length) % options.length;
                if (event.key === 'Home') nextIndex = 0;
                if (event.key === 'End') nextIndex = options.length - 1;
                if (event.key === 'Escape') {
                    event.preventDefault();
                    closeLanguageMenu(true);
                    return;
                }
                if (nextIndex !== null) {
                    event.preventDefault();
                    options[nextIndex].focus();
                }
            });
        });

        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (langDropdown.classList.contains('open')) {
                closeLanguageMenu();
            } else {
                openLanguageMenu();
            }
        });

        langBtn.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                openLanguageMenu(true);
            }
        });

        document.addEventListener('click', (e) => {
            if (langSwitcher && !langSwitcher.contains(e.target)) {
                closeLanguageMenu();
            }
        });
    }

    // Header shadow and blur on scroll
    const header = document.getElementById('navbar');
    if (header) {
        const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 50);
        window.addEventListener('scroll', updateHeader, { passive: true });
        updateHeader();
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
}

initNews();
init();