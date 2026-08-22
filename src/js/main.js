document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.getElementById('header');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (header) header.style.boxShadow = window.scrollY > 8 ? '0 1px 0 rgba(255,255,255,.06)' : 'none';
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
        history.pushState(null, '', href);
      }
    });
  });

  const sections = document.querySelectorAll('.section');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  sections.forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(12px)';
    s.style.transition = 'opacity .6s ease, transform .6s ease';
    io.observe(s);
  });
  const hero = document.querySelector('.hero');
  if (hero) { hero.style.opacity = '1'; hero.style.transform = 'none'; }

  // time-cl eliminado por solicitud

  const navItems = document.querySelectorAll('.nav-links a');
  const sectionIds = [...document.querySelectorAll('section[id]')].map(s => s.id);
  window.addEventListener('scroll', () => {
    let current = '';
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (window.scrollY >= el.offsetTop - 120) current = id;
    });
    navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  }, { passive: true });

  // Scramble para enumerados 01 — Sobre mí etc. (heinsoe) - loop mientras visible
  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789—';
  function scrambleText(el, toText){
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = toText; return; }
    if (el._scrambling) return;
    el._scrambling = true;
    const len = toText.length;
    let frame = 0;
    const totalFrames = 18;
    const interval = setInterval(() => {
      let out = '';
      for (let i=0;i<len;i++){
        if (frame > (i * 1.1)) out += toText[i];
        else if (i < toText.length) out += scrambleChars[Math.floor(Math.random()*scrambleChars.length)];
      }
      el.textContent = out;
      frame++;
      if (frame > totalFrames) { el.textContent = toText; clearInterval(interval); el._scrambling = false; }
    }, 28);
  }
  const scrambleTimers = new Map();
  const scrambleObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const el = entry.target;
      const target = el.getAttribute('data-text') || el.textContent;
      if (entry.isIntersecting) {
        scrambleText(el, target);
        if (!scrambleTimers.has(el)) {
          const id = setInterval(()=> scrambleText(el, target), 2800);
          scrambleTimers.set(el, id);
        }
      } else {
        const id = scrambleTimers.get(el);
        if (id) { clearInterval(id); scrambleTimers.delete(el); }
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.scramble-label').forEach(el=> scrambleObserver.observe(el));

  // Copiar email ofuscado (privacidad A)
  function setupCopy(btnId, hintId){
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', async () => {
      const user = btn.getAttribute('data-user');
      const domain = btn.getAttribute('data-domain');
      if (!user || !domain) return;
      const email = `${user}@${domain}`;
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(email);
        btn.textContent = '¡Copiado! ✓';
        const hint = hintId ? document.getElementById(hintId) : null;
        if (hint) hint.textContent = email;
        setTimeout(() => { btn.textContent = original; }, 2500);
      } catch {
        btn.textContent = email;
        const hint = hintId ? document.getElementById(hintId) : null;
        if (hint) hint.textContent = 'Copialo manualmente';
      }
    });
  }
  setupCopy('copyEmailBtn');
  setupCopy('copyEmailBtn2', 'copyHint');

  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');
  if (form && submitBtn && formStatus) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const gotcha = form.querySelector('input[name="_gotcha"]');
      if (gotcha && gotcha.value) return;
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        formStatus.textContent = 'Revisa el email ingresado.';
        formStatus.className = 'form-status error';
        email.focus(); return;
      }
      if (message && message.value.trim().length < 10) {
        formStatus.textContent = 'Mensaje muy corto (mín. 10 caracteres).';
        formStatus.className = 'form-status error';
        message.focus(); return;
      }
      const original = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';
      formStatus.textContent = '';
      formStatus.className = 'form-status';
      try {
        const res = await fetch('https://formspree.io/f/mredlloa', {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          formStatus.textContent = '¡Mensaje enviado! Te respondo en < 24h.';
          formStatus.className = 'form-status success';
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          formStatus.textContent = data.errors ? data.errors.map(e=>e.message).join(', ') : 'Error al enviar. Intenta por LinkedIn.';
          formStatus.className = 'form-status error';
        }
      } catch {
        formStatus.textContent = 'Error de conexión. Usa LinkedIn DM.';
        formStatus.className = 'form-status error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      }
    });
  }
});
