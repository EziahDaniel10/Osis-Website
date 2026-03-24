/* ===== NAVBAR SCROLL ===== */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ===== HAMBURGER MENU ===== */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

/* ===== ACTIVE NAV LINK ===== */
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = (link.getAttribute('href') || '').split('/').pop();
  const isHome = (currentFile === '' || currentFile === 'index.html') && (href === 'index.html' || href === '');
  if (href === currentFile || isHome) link.classList.add('active');
});

/* ===== FADE-UP INTERSECTION OBSERVER ===== */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length && 'IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => obs.observe(el));
}

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ===== CONTACT FORM ===== */
const form = document.getElementById('contact-form');
const formFields = document.getElementById('form-fields');
const formSuccess = document.getElementById('form-success');
const resetBtn = document.getElementById('form-reset');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => {
      el.style.borderColor = '';
    });

    // Validate required fields
    form.querySelectorAll('[required]').forEach(field => {
      const errEl = form.querySelector(`[data-error="${field.name}"]`);
      if (!field.value.trim()) {
        valid = false;
        if (errEl) errEl.textContent = 'This field is required.';
        field.style.borderColor = '#f87171';
      }
    });

    // Basic email check
    const emailField = form.querySelector('[name="email"]');
    if (emailField && emailField.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      valid = false;
      const errEl = form.querySelector('[data-error="email"]');
      if (errEl) errEl.textContent = 'Please enter a valid email address.';
      emailField.style.borderColor = '#f87171';
    }

    if (!valid) return;

    // Disable button while sending
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

    const data = new FormData(form);
    fetch('contact.php', { method: 'POST', body: data })
      .then(r => r.json())
      .then(res => {
        if (res.ok) {
          if (formFields) formFields.style.display = 'none';
          if (formSuccess) formSuccess.classList.add('show');
        } else {
          alert('Sorry, something went wrong. Please email us directly at osis@onespiritintegratedservices.com');
        }
      })
      .catch(() => {
        alert('Sorry, something went wrong. Please email us directly at osis@onespiritintegratedservices.com');
      })
      .finally(() => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
      });
  });
}

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (formFields) formFields.style.display = 'block';
    if (formSuccess) formSuccess.classList.remove('show');
    if (form) form.reset();
  });
}

/* ===== SMOOTH ANCHOR SCROLL (for Products/Services links from other pages) ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
