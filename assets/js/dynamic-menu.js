const iconBars = document.getElementById('icon-bars'); // Seleziona l'icona hamburger
const iconTimes = document.getElementById('icon-times'); // Seleziona l'icona "X"
const menuToggle = document.getElementById('navbarNavDropdown'); // Seleziona il menu

menuToggle.addEventListener('shown.bs.collapse', () => {
  iconBars.classList.remove('active'); // Rimuove l'icona hamburger
  iconTimes.classList.add('active'); // Aggiunge l'icona "X"
});

menuToggle.addEventListener('hidden.bs.collapse', () => {
  iconTimes.classList.remove('active'); // Rimuove l'icona "X"
  iconBars.classList.add('active'); // Aggiunge l'icona hamburger
});

