function init() {
    // Inject Unified Header
    const headerHTML = `
    <nav class="header" id="navbar">
        <div class="navbar">
            <a href="index.html"><img src="assets/azeitona4.png" alt="Zeitona Logo" class="navbar-logo" /></a>
            <div class="navbar-links">
                <a href="index.html#services">Services</a>
                <a href="about.html">About</a>
                <a href="index.html#contact">Contact</a>
            </div>
            <button type="button" class="btn btn-primary btn-sm navbar-action" onclick="openContactModal()">
                Get in Touch
            </button>
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
            <h3 class="modal-title">Request to be Contacted</h3>
            <p class="modal-desc">Please provide your details below and we will reach out to you.</p>
            
            <form id="contact-form" class="modal-form" novalidate>
                <div class="form-row">
                    <div class="form-group">
                        <label for="contact-email" class="form-label">Email <span class="form-required">*</span></label>
                        <input type="email" id="contact-email" name="email" class="form-input" placeholder="your@email.com" required />
                        <span class="form-error" id="email-error">Please enter a valid email address</span>
                    </div>
                    <div class="form-group">
                        <label for="contact-phone" class="form-label">Phone <span class="form-optional">(optional)</span></label>
                        <input type="tel" id="contact-phone" name="phone" class="form-input" placeholder="+351 912 345 678" />
                    </div>
                </div>

                <div class="form-group">
                    <label for="contact-subject" class="form-label">Subject <span class="form-required">*</span></label>
                    <input type="text" id="contact-subject" name="subject" class="form-input" placeholder="How can we help you?" required />
                    <span class="form-error" id="subject-error">Please enter a subject</span>
                </div>

                <div class="form-group">
                    <label for="contact-description" class="form-label">Description <span class="form-optional">(optional)</span></label>
                    <textarea id="contact-description" name="description" class="form-input form-textarea" placeholder="Tell us more about your project or inquiry..." rows="4"></textarea>
                </div>

                <button type="submit" class="btn btn-secondary btn-lg flex items-center justify-center gap-2" style="width: 100%; margin-top: 0.5rem;">
                    Send Request
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
                &copy; ${currentYear} Zeitona. Building the future of construction.
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
            submitBtn.innerHTML = 'Sending <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>';
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
                    phone: phoneInput.value.trim() || "Not provided",
                    message: descriptionInput.value.trim() || "No description provided"
                })
            })
            .then(response => response.json())
            .then(data => {
                const modalBody = document.querySelector('.modal-content');
                const originalContent = modalBody.innerHTML;
                modalBody.innerHTML = `
                    <div class="contact-success">
                        <div class="contact-success-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        </div>
                        <h3 class="modal-title">Message Sent!</h3>
                        <p class="modal-desc" style="margin-bottom: 0;">Thank you for reaching out. We will get back to you soon.</p>
                    </div>
                `;
                setTimeout(() => {
                    closeContactModal();
                    setTimeout(() => { modalBody.innerHTML = originalContent; }, 300);
                }, 4000);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert("There was an error sending your message.");
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
        });
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
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
    }
};

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
