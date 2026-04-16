function init() {
    // Inject Unified Header
    const headerHTML = `
    <nav class="header" id="navbar">
        <div class="navbar">
            <a href="index.html"><img src="assets/azeitona4.png" alt="Zeitona Logo" class="navbar-logo" /></a>

            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <div class="navbar-links" id="nav-links">
                <a href="index.html#services" data-i18n="nav.services">Services</a>
                <a href="about.html" data-i18n="nav.about">About</a>
                <a href="index.html#contact" data-i18n="nav.contact">Contact</a>
                <button type="button" class="btn btn-primary btn-sm navbar-action" onclick="openContactModal()" data-i18n="nav.getInTouch">
                    Get in Touch
                </button>
                <div class="lang-switcher" id="lang-switcher">
                    <button class="lang-btn" id="lang-btn" aria-label="Select language">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                        <span id="lang-current">EN-US</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div class="lang-dropdown" id="lang-dropdown" role="listbox">
                        <button class="lang-option" data-locale="en-us" role="option">English (US)</button>
                        <button class="lang-option" data-locale="en-gb" role="option">English (GB)</button>
                        <button class="lang-option" data-locale="es"    role="option">Español</button>
                        <button class="lang-option" data-locale="pt-pt" role="option">Português (PT)</button>
                        <button class="lang-option" data-locale="pt-br" role="option">Português (BR)</button>
                        <button class="lang-option" data-locale="de"    role="option">Deutsch</button>
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
    <div id="contact-modal" class="modal-overlay">
        <div class="modal-content">
            <button class="modal-close" onclick="closeContactModal()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <h3 class="modal-title" data-i18n="modal.title">Request to be Contacted</h3>
            <p class="modal-desc" data-i18n="modal.desc">Please provide your details below and we will reach out to you.</p>
            
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
                &copy; ${currentYear} Zeitona. <span data-i18n="footer.tagline">Building the future of construction.</span>
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

    // Mobile Menu Toggle Logic
    const menu = document.getElementById('mobile-menu');
    const menuLinks = document.getElementById('nav-links');
    if (menu && menuLinks) {
        menu.addEventListener('click', function () {
            menuLinks.classList.toggle('active');
            menu.classList.toggle('is-active');
        });
    }

    // Language Switcher Logic
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langCurrent = document.getElementById('lang-current');

    if (langBtn && langDropdown) {
        const locale = window.i18n ? window.i18n.getCurrentLocale() : 'en-us';
        if (langCurrent) langCurrent.textContent = locale.toUpperCase();

        langDropdown.querySelectorAll('.lang-option').forEach(btn => {
            if (btn.dataset.locale === locale) btn.classList.add('active');
            btn.addEventListener('click', () => {
                langDropdown.classList.remove('open');
                if (window.i18n) window.i18n.setLocale(btn.dataset.locale);
            });
        });

        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target)) {
                langDropdown.classList.remove('open');
            }
        });
    }

    // Header shadow and blur on scroll
    const header = document.getElementById('navbar');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                header.style.boxShadow = 'none';
            }
        });
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
