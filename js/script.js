/* ============================================================
   GEOTECH CARAÏBES — script.js
   Navbar · Mobile menu · Reveal · Counters · WhatsApp · Ticker
   ============================================================ */

(function () {
  'use strict';

  /* ── Helpers ─────────────────────────────────────────────── */
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
  function throttle(fn, ms) {
    var t = 0;
    return function () {
      var now = Date.now();
      if (now - t >= ms) { t = now; fn.apply(this, arguments); }
    };
  }

  /* ── Navbar scroll ───────────────────────────────────────── */
  var navbar = qs('#navbar');
  if (navbar) {
    function handleNavScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }
    window.addEventListener('scroll', throttle(handleNavScroll, 80), { passive: true });
    handleNavScroll();
  }

  /* ── Mobile menu ─────────────────────────────────────────── */
  var burger     = qs('#burgerBtn');
  var mobileMenu = qs('#mobileMenu');
  var closeBtn   = qs('#mobileClose');
  var overlay    = qs('#navOverlay');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.classList.add('show');
    if (burger) { burger.classList.add('open'); burger.setAttribute('aria-expanded', 'true'); }
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    if (overlay) overlay.classList.remove('show');
    if (burger) { burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  }

  if (burger)    burger.addEventListener('click', openMenu);
  if (closeBtn)  closeBtn.addEventListener('click', closeMenu);
  if (overlay)   overlay.addEventListener('click', closeMenu);

  /* Close mobile menu on any internal link click */
  qsa('.navbar__mobile a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ── Hero animations (staggered on load) ────────────────── */
  window.addEventListener('load', function () {
    qsa('.reveal-hero').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('visible'); }, 150 + i * 120);
    });
  });

  /* ── Scroll-reveal (IntersectionObserver) ───────────────── */
  var revealEls = qsa('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    /* Fallback: show all */
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Animated counters ───────────────────────────────────── */
  function animateCounter(el) {
    var target  = parseInt(el.getAttribute('data-counter'), 10);
    var suffix  = el.getAttribute('data-suffix') || '';
    if (!target) return;
    var duration = 1800;
    var start    = performance.now();
    (function step(ts) {
      var progress = Math.min((ts - start) / duration, 1);
      var ease     = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
      el.textContent = Math.round(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    })(start);
  }

  var counterEls = qsa('[data-counter]');
  if ('IntersectionObserver' in window && counterEls.length) {
    var cIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCounter(e.target); cIO.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(function (el) { cIO.observe(el); });
  }

  /* ── Back to top ─────────────────────────────────────────── */
  var btt = qs('#backToTop');
  if (btt) {
    window.addEventListener('scroll', throttle(function () {
      btt.classList.toggle('visible', window.scrollY > 500);
    }, 100), { passive: true });
    btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ── Smooth scroll for anchor links ─────────────────────── */
  qsa('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = qs(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = 80; /* navbar height */
      var top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── FAQ accordion (native <details>) ───────────────────── */
  qsa('details.faq-item').forEach(function (details) {
    details.addEventListener('toggle', function () {
      if (details.open) {
        qsa('details.faq-item').forEach(function (other) {
          if (other !== details) other.removeAttribute('open');
        });
      }
    });
  });

  /* ── Active nav link based on URL ───────────────────────── */
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  qsa('.nav-link').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    var normalised = href.replace(/\/$/, '') || '/';
    if (normalised === path || (path.endsWith(normalised) && normalised !== '/')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  /* ── Ticker clone for seamless loop ─────────────────────── */
  var tickerTrack = qs('.ticker__track');
  if (tickerTrack) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
  }

  /* ── Gallery filter ─────────────────────────────────────── */
  var filterBtns = qsa('.filter-btn');
  var galleryCards = qsa('.gallery-card');
  if (filterBtns.length && galleryCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('filter-btn--active'); });
        btn.classList.add('filter-btn--active');
        var filter = btn.getAttribute('data-filter');
        galleryCards.forEach(function (card) {
          if (filter === 'all') {
            card.classList.remove('hidden');
          } else {
            var cats = (card.getAttribute('data-category') || '').split(' ');
            if (cats.indexOf(filter) !== -1) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          }
        });
      });
    });
  }

  /* ── Lazy loading fallback for older browsers ────────────── */
  if ('loading' in HTMLImageElement.prototype === false) {
    qsa('img[loading="lazy"]').forEach(function (img) {
      img.src = img.getAttribute('src');
    });
  }

})();
