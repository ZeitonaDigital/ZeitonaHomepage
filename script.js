document.addEventListener('DOMContentLoaded', () => {
    // Header shadow and blur on scroll
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
            header.style.boxShadow = 'none';
        }
    });

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
                // Optional: Stop observing once animated to keep it visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // Modal Form Logic
    const contactModal = document.getElementById('contact-modal');
    const contactForm = document.getElementById('contact-form');
    
    // Close modal if background explicitly clicked
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

        // Clear validation errors on input change
        [emailInput, subjectInput].forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('input-error');
                const errorEl = input.id === 'contact-email' ? emailError : subjectError;
                errorEl.classList.remove('show');
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            // Validate Email
            const emailVal = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailVal || !emailRegex.test(emailVal)) {
                emailInput.classList.add('input-error');
                emailError.classList.add('show');
                isValid = false;
            }

            // Validate Subject
            const subjectVal = subjectInput.value.trim();
            if (!subjectVal) {
                subjectInput.classList.add('input-error');
                subjectError.classList.add('show');
                isValid = false;
            }

            if (!isValid) return;

            // Build mailto
            const phoneVal = phoneInput.value.trim();
            const descVal = descriptionInput.value.trim();

            let bodyText = `Contact request from: ${emailVal}\n`;
            if (phoneVal) bodyText += `Phone: ${phoneVal}\n`;
            bodyText += `\n`;
            if (descVal) bodyText += `${descVal}`;

            const mailtoLink = `mailto:contact@zeitona.pt?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(bodyText)}`;

            // Trigger mailto
            window.location.href = mailtoLink;

            // Show success state in modal
            const modalBody =  document.querySelector('.modal-content');
            const originalContent = modalBody.innerHTML;

            modalBody.innerHTML = `
                <div class="contact-success">
                    <div class="contact-success-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <h3 class="modal-title">Ready!</h3>
                    <p class="modal-desc" style="margin-bottom: 0;">Your email client should open shortly.</p>
                </div>
            `;

            // Close automatically and reset later
            setTimeout(() => {
                closeContactModal();
                setTimeout(() => {
                    modalBody.innerHTML = originalContent; // reset
                }, 300); // after fade out
            }, 3000);
        });
    }
});

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
