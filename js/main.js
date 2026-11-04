/* ============================================================
   SRM卝SAMIヅ — Portfolio | main.js
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- Navbar shadow on scroll + progress bar + to-top ---------- */
  const navbar   = document.querySelector('.navbar');
  const progress = document.getElementById('progress-bar');
  const toTop    = document.getElementById('to-top');

  function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);

    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%';

    if (toTop) toTop.classList.toggle('visible', scrollTop > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      counterObs.unobserve(el);
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const dur = 1800;
      const start = performance.now();

      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  /* ---------- Skill bars ---------- */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.width = entry.target.dataset.width + '%';
      skillObs.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  skillFills.forEach(s => skillObs.observe(s));

  /* ---------- Portfolio filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards  = document.querySelectorAll('.proj-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projCards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.remove('proj-show');
        if (match) {
          card.classList.remove('proj-hide');
          // force reflow so animation restarts
          void card.offsetWidth;
          card.classList.add('proj-show');
        } else {
          card.classList.add('proj-hide');
        }
      });
    });
  });

  /* ---------- Testimonial slider ---------- */
  const slides = document.querySelectorAll('.testi-slide');
  const dots   = document.querySelectorAll('.testi-dot');
  let current  = 0;
  let autoTimer = null;

  function showSlide(i) {
    if (!slides.length) return;
    current = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
  }

  function nextSlide() { showSlide(current + 1); }
  function prevSlide() { showSlide(current - 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(nextSlide, 5000);
  }
  function stopAuto() { if (autoTimer) clearInterval(autoTimer); }

  dots.forEach((dot, idx) => dot.addEventListener('click', () => { showSlide(idx); startAuto(); }));

  const nextBtn = document.querySelector('.testi-next');
  const prevBtn = document.querySelector('.testi-prev');
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAuto(); });

  const testiWrap = document.querySelector('.testi-wrap');
  if (testiWrap) {
    showSlide(0);
    startAuto();
    testiWrap.addEventListener('mouseenter', stopAuto);
    testiWrap.addEventListener('mouseleave', startAuto);
  }

  /* ---------- Contact form (mailto fallback) ---------- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
      const status  = document.getElementById('form-status');

      if (!name || !email || !message) {
        status.textContent = '⚠️ Please fill in your name, email and message.';
        status.style.color = '#f87171';
        return;
      }

      const body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message;

      const mailto =
        'mailto:srmsamimiah@gmail.com' +
        '?subject=' + encodeURIComponent(subject || ('New inquiry from ' + name)) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;

      status.style.color = '';
      status.textContent = '✅ Opening your email app… If nothing happens, email me directly at srmsamimiah@gmail.com';
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
