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
            container.innerHTML = `<p class="news-empty">${this.escapeHtml(t('news.empty'))}</p>`;
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
            const titleHtml = url
                ? `<a class="news-item-title" href="${this.escapeHtml(url)}">${title}</a>`
                : `<span class="news-item-title">${title}</span>`;
            return `<article class="news-item" data-news-id="${this.escapeHtml(item.id || '')}">
                <time class="news-item-date" datetime="${this.escapeHtml(item.date || '')}">${dateLabel}</time>
                ${titleHtml}
                ${summary}
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
        list.innerHTML = `<p class="news-empty">${window.ZeitonaNews.escapeHtml(t('news.loadError'))}</p>`;
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
    <nav class="header" id="navbar">
        <div class="navbar">
            <a href="index.html"><img src="assets/azeitona4.png" alt="Zeitona Logo" class="navbar-logo" /></a>

            <button class="menu-toggle" id="mobile-menu" type="button" aria-controls="nav-links" aria-expanded="false" aria-label="Open navigation" data-i18n-aria-label="nav.openMenu">
                <span class="bar" aria-hidden="true"></span>
                <span class="bar" aria-hidden="true"></span>
                <span class="bar" aria-hidden="true"></span>
            </button>

            <div class="navbar-links" id="nav-links">
                <a href="index.html#news" data-i18n="nav.news">News</a>
                <a href="about.html" data-i18n="nav.about">About</a>
                <button type="button" class="btn btn-primary btn-sm navbar-action" onclick="openContactModal()" data-i18n="nav.getInTouch">
                    Get in Touch
                </button>
                <div class="global-controls">
                <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false" title="Switch to dark mode">
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
                        <button class="lang-option" type="button" data-locale="es" data-language="Español" data-flag="assets/flags/es.svg" role="option" aria-selected="false" title="Español"><img class="flag-icon" src="assets/flags/es.svg" alt="" aria-hidden="true" /><span>Español</span><span class="lang-check" aria-hidden="true">✓</span></button>
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

    // Inject Shared Contact Modal
    const modalHTML = `
    <div id="contact-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description">
        <div class="modal-content">
            <button class="modal-close" type="button" onclick="closeContactModal()" aria-label="Close contact form" data-i18n-aria-label="modal.close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <h3 class="modal-title" id="contact-modal-title" data-i18n="modal.title">Request to be Contacted</h3>
            <p class="modal-desc" id="contact-modal-description" data-i18n="modal.desc">Please provide your details below and we will reach out to you.</p>
            
            <form id="contact-form" class="modal-form" novalidate>
                <div class="form-row">
                    <div class="form-group">
                        <label for="contact-email" class="form-label"><span data-i18n="modal.email">Email</span> <span class="form-required">*</span></label>
                        <input type="email" id="contact-email" name="email" class="form-input" placeholder="your@email.com" data-i18n-placeholder="modal.emailPlaceholder" required />
                        <span class="form-error" id="email-error" data-i18n="modal.emailError">Please enter a valid email address</span>
                    </div>
                    <div class="form-group">
                        <label for="contact-phone" class="form-label"><span data-i18n="modal.phone">Phone</span> <span class="form-optional" data-i18n="modal.optional">(optional)</span></label>
                        <input type="tel" id="contact-phone" name="phone" class="form-input" placeholder="+351 912 345 678" data-i18n-placeholder="modal.phonePlaceholder" />
                    </div>
                </div>

                <div class="form-group">
                    <label for="contact-subject" class="form-label"><span data-i18n="modal.subject">Subject</span> <span class="form-required">*</span></label>
                    <input type="text" id="contact-subject" name="subject" class="form-input" placeholder="How can we help you?" data-i18n-placeholder="modal.subjectPlaceholder" required />
                    <span class="form-error" id="subject-error" data-i18n="modal.subjectError">Please enter a subject</span>
                </div>

                <div class="form-group">
                    <label for="contact-description" class="form-label"><span data-i18n="modal.description">Description</span> <span class="form-optional" data-i18n="modal.optional">(optional)</span></label>
                    <textarea id="contact-description" name="description" class="form-input form-textarea" placeholder="Tell us more about your project or inquiry..." data-i18n-placeholder="modal.descriptionPlaceholder" rows="4"></textarea>
                </div>

                <button type="submit" class="btn btn-secondary btn-lg flex items-center justify-center gap-2" style="width: 100%; margin-top: 0.5rem;">
                    <span data-i18n="modal.sendRequest">Send Request</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
            </form>
        </div>
    </div>
    `;

    if (!document.getElementById('contact-modal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Inject Shared Footer
    const currentYear = new Date().getFullYear();
    const footerHTML = `
    <footer class="footer">
        <div class="footer-inner container">
            <a href="index.html">
                <img src="assets/azeitona4.png" alt="Zeitona Logo" class="footer-logo" />
            </a>
            <p class="text-muted" style="font-size: 0.85rem; font-weight:300;">
                &copy; ${currentYear} Zeitona. <span data-i18n="footer.tagline">Technology shaped around real needs.</span>
            </p>
            <div class="flex gap-6">
                <a href="https://www.linkedin.com/company/zeitona/" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
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
        const labelKey = isDark ? 'theme.switchToLight' : 'theme.switchToDark';
        const fallback = isDark ? 'Switch to light mode' : 'Switch to dark mode';
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
            const labelKey = isOpen ? 'nav.closeMenu' : 'nav.openMenu';
            menu.setAttribute('aria-label', window.i18n ? window.i18n.t(labelKey) : (isOpen ? 'Close navigation' : 'Open navigation'));
        });

        menu.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && menuLinks.classList.contains('active')) {
                menuLinks.classList.remove('active');
                menu.classList.remove('is-active');
                menu.setAttribute('aria-expanded', 'false');
                menu.setAttribute('aria-label', window.i18n ? window.i18n.t('nav.openMenu') : 'Open navigation');
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

    // Modal Form Logic
    const contactModal = document.getElementById('contact-modal');
    const contactForm = document.getElementById('contact-form');

    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
    }

    if (contactForm) {
        const emailInput = document.getElementById('contact-email');
        const subjectInput = document.getElementById('contact-subject');
        const phoneInput = document.getElementById('contact-phone');
        const descriptionInput = document.getElementById('contact-description');
        const emailError = document.getElementById('email-error');
        const subjectError = document.getElementById('subject-error');

        [emailInput, subjectInput].forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    input.classList.remove('input-error');
                    const errorEl = input.id === 'contact-email' ? emailError : subjectError;
                    if (errorEl) errorEl.classList.remove('show');
                });
            }
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const emailVal = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailVal || !emailRegex.test(emailVal)) {
                emailInput.classList.add('input-error');
                if (emailError) emailError.classList.add('show');
                isValid = false;
            }

            const subjectVal = subjectInput.value.trim();
            if (!subjectVal) {
                subjectInput.classList.add('input-error');
                if (subjectError) subjectError.classList.add('show');
                isValid = false;
            }

            if (!isValid) return;

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            const sendingText = window.i18n ? window.i18n.t('modal.sending') : 'Sending';
            submitBtn.innerHTML = sendingText + ' <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>';
            submitBtn.disabled = true;

            fetch("https://formsubmit.co/ajax/contact@zeitona.pt", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: emailVal,
                    _subject: subjectVal,
                    phone: phoneInput.value.trim() || (window.i18n ? window.i18n.t('modal.notProvided') : 'Not provided'),
                    message: descriptionInput.value.trim() || (window.i18n ? window.i18n.t('modal.noDescription') : 'No description provided')
                })
            })
                .then(response => response.json())
                .then(_data => {
                    const modalBody = document.querySelector('.modal-content');

                    // Hide existing children
                    Array.from(modalBody.children).forEach(child => {
                        if (!child.classList.contains('modal-close')) {
                            child.style.display = 'none';
                        }
                    });

                    // Create success message
                    const successTitle = window.i18n ? window.i18n.t('modal.successTitle') : 'Message Sent!';
                    const successDesc  = window.i18n ? window.i18n.t('modal.successDesc')  : 'Thank you for reaching out. We will get back to you soon.';
                    const successDiv = document.createElement('div');
                    successDiv.className = 'contact-success';
                    successDiv.id = 'contact-success-message';
                    successDiv.innerHTML = `
                        <div class="contact-success-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        </div>
                        <h3 class="modal-title">${successTitle}</h3>
                        <p class="modal-desc" style="margin-bottom: 0;">${successDesc}</p>
                    `;
                    modalBody.appendChild(successDiv);

                    setTimeout(() => {
                        closeContactModal();
                        setTimeout(() => {
                            // Remove success message and restore visibility
                            const msg = document.getElementById('contact-success-message');
                            if (msg) msg.remove();
                            Array.from(modalBody.children).forEach(child => {
                                child.style.display = '';
                            });
                        }, 300);
                    }, 4000);
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    alert(window.i18n ? window.i18n.t('modal.errorAlert') : 'There was an error sending your message.');
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    initNews();

    // Apply i18n translations to all injected and static content
    if (window.i18n) {
        window.i18n.applyTranslations();
    }
}


// Run init based on readyState
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Global functions for modal UI
window.openContactModal = () => {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.add('open');
};

window.closeContactModal = () => {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        modal.classList.remove('open');
        const form = document.getElementById('contact-form');
        if (form) form.reset();

        // Remove error states if present
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
    }
};
