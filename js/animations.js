/* =========================================
   BHISE'Z FERNITURE – ANIMATIONS JS
   Scroll reveal + counter animations
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ─── SCROLL REVEAL ───
  const revealElements = document.querySelectorAll('.scroll-reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only reveal once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ─── STAT NUMBER COUNTER ANIMATION ───
  const statNums = document.querySelectorAll('.stat-num');

  if (statNums.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNums.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    const text  = el.textContent.trim();
    const match = text.match(/(\d+)/);
    if (!match) return;

    const target   = parseInt(match[1]);
    const suffix   = text.replace(/\d+/, '');
    const duration = 1500;
    const steps    = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(function () {
      step++;
      current = Math.round(increment * step);
      if (step >= steps) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, duration / steps);
  }

  // ─── HERO PARALLAX (subtle) ───
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        const heroContent = document.getElementById('heroContent');
        if (heroContent) {
          heroContent.style.transform = 'translateY(' + scrollY * 0.2 + 'px)';
          heroContent.style.opacity = 1 - scrollY / 600;
        }
      }
    }, { passive: true });
  }

});