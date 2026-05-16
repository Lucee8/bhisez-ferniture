/* =========================================
   BHISE'Z FERNITURE – MAIN JS
   Navbar, mobile menu, forms, WhatsApp
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ─── NAVBAR SCROLL ───
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ─── MOBILE MENU ───
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Create overlay dynamically
  const overlay = document.createElement('div');
  overlay.classList.add('nav-overlay');
  document.body.appendChild(overlay);

  function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
  overlay.addEventListener('click', closeMenu);
  // Close on nav link click
  navLinks && navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // ─── INQUIRY FORM → WHATSAPP ───
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = this.name ? this.name.value : this.querySelector('[name="name"]').value;
      const phone   = this.querySelector('[name="phone"]').value;
      const product = this.querySelector('[name="product"]') ? this.querySelector('[name="product"]').value : '';
      const message = this.querySelector('[name="message"]') ? this.querySelector('[name="message"]').value : '';

      const text = `Hi, I am ${name} (${phone}). I am interested in: ${product || 'furniture'}. ${message}`;
      const waURL = 'https://wa.me/919999999999?text=' + encodeURIComponent(text);
      window.open(waURL, '_blank');
    });
  }

  // ─── CONTACT FORM → WHATSAPP ───
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = this.querySelector('[name="name"]').value;
      const phone   = this.querySelector('[name="phone"]').value;
      const city    = this.querySelector('[name="city"]') ? this.querySelector('[name="city"]').value : '';
      const subject = this.querySelector('[name="subject"]') ? this.querySelector('[name="subject"]').value : '';
      const message = this.querySelector('[name="message"]').value;

      const text = `Hi, I am ${name} from ${city} (${phone}). Subject: ${subject}. ${message}`;
      const waURL = 'https://wa.me/919999999999?text=' + encodeURIComponent(text);
      window.open(waURL, '_blank');
    });
  }

  // ─── SMOOTH SCROLL for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── ACTIVE NAV LINK (highlight current page) ───
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href').split('?')[0];
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

});