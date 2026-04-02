// ==========================================
// PREMIUM FEATURES (Transitions, Cursor, Progress, Easter Egg)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initPageTransitions();
  initCustomCursor();
  initEasterEgg();
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

// 3. EASTER EGG (Il trucco segreto)
function initEasterEgg() {
  console.log("%c Ciao! Sei curioso, eh? 🕵️‍♂️", "color: #6A42C2; font-size: 24px; font-weight: bold;");
  console.log("%c Prova a digitare D E S I G N sulla tastiera senza cliccare nulla...", "color: #888; font-size: 14px;");

  let typed = '';
  const secretCode = 'design'; 

  window.addEventListener('keydown', (e) => {
    typed += e.key.toLowerCase();
    if (typed.length > secretCode.length) typed = typed.slice(-secretCode.length);

    if (typed === secretCode) {
      fireConfetti();
      typed = ''; 
    }
  });
}

function fireConfetti() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  script.onload = () => {
    const duration = 4 * 1000; 
    const animationEnd = Date.now() + duration;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10500 }, { 
        particleCount, origin: { x: Math.random() * (0.3 - 0.1) + 0.1, y: Math.random() - 0.2 } 
      }));
      confetti(Object.assign({}, { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10500 }, { 
        particleCount, origin: { x: Math.random() * (0.9 - 0.7) + 0.7, y: Math.random() - 0.2 } 
      }));
    }, 250);
  };
  document.body.appendChild(script);
}