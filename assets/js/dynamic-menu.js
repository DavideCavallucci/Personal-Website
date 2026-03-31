document.addEventListener('DOMContentLoaded', () => {
  const iconBars = document.getElementById('icon-bars');
  const iconTimes = document.getElementById('icon-times');
  const menuToggle = document.getElementById('navbarNavDropdown');

  // Controllo di sicurezza: se non trova l'header (es. pagina di errore), si ferma qui
  if (!iconBars || !iconTimes || !menuToggle) return;

  // 1. Feedback istantaneo al tap (usa 'show' invece di 'shown')
  menuToggle.addEventListener('show.bs.collapse', () => {
    iconBars.style.display = 'none'; // Nasconde l'hamburger
    iconTimes.style.display = 'inline-block'; // Mostra la X
  });

  menuToggle.addEventListener('hide.bs.collapse', () => {
    iconTimes.style.display = 'none'; // Nasconde la X
    iconBars.style.display = 'inline-block'; // Mostra l'hamburger
  });

  // 2. UX Boost: Chiudi il menu automaticamente quando l'utente clicca un link
  const navLinks = menuToggle.querySelectorAll('.nav-mobile .nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Verifica se il menu è effettivamente aperto
      if (menuToggle.classList.contains('show')) {
        // Usa le API native di Bootstrap per chiuderlo fluidamente
        const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});