// ==========================================
// PREMIUM FEATURES (Transitions, Progress, Tilt, Scramble, Dynamic Title)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initPageTransitions();
  initTiltEffect();
  initTextScramble();
  initDynamicTitle();
});

// 1. SCROLL PROGRESS BAR (Fluida a 60fps)
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.appendChild(progressBar);

  let ticking = false; 

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = scrollTop / scrollHeight;
        
        progressBar.style.transform = `scaleX(${scrolled})`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// 2. PAGE TRANSITIONS (Sfuma al click sui link)
function initPageTransitions() {
  const overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  overlay.classList.add('active'); 
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.remove('active'), 150);

  const links = document.querySelectorAll('a[href^="./"], a[href^="../"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.target === '_blank' || link.hasAttribute('download') || link.getAttribute('href').includes('#')) return;

      e.preventDefault();
      const targetUrl = link.href;
      overlay.classList.add('active'); 

      setTimeout(() => { window.location.href = targetUrl; }, 400); 
    });
  });
}

// 3. 3D TILT EFFECT SULLE CARDS (Vanilla JS)
function initTiltEffect() {
  // Selezioniamo tutte le card che vogliamo rendere interattive in 3D
  const cards = document.querySelectorAll('.job-grid, .category-card, .premium-card');
  
  // Se siamo su mobile, evitiamo l'effetto per risparmiare risorse
  if (window.matchMedia("(max-width: 991px)").matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Posizione X del mouse dentro la card
      const y = e.clientY - rect.top;  // Posizione Y del mouse dentro la card
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calcola i gradi di inclinazione (max 4 gradi per un effetto elegante e non esagerato)
      const rotateX = ((y - centerY) / centerY) * -2; 
      const rotateY = ((x - centerX) / centerX) * 2;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = 'none'; // Rimuove il ritardo mentre si muove il mouse
    });

    card.addEventListener('mouseleave', () => {
      // Resetta tutto quando il mouse esce
      card.style.transform = ''; 
      card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    });
  });
}