const backToTopButton = document.getElementById('back-to-top');

// Mostra o nasconde il pulsante con una transizione
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show'); // Aggiunge la classe per mostrare
  } else {
    backToTopButton.classList.remove('show'); // Rimuove la classe per nascondere
  }
});

// Scrolla verso l'alto al click sul pulsante
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
