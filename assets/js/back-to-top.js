document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');

  // Controllo di sicurezza
  if (!backToTopButton) return;

  // Variabile di controllo per evitare esecuzioni inutili del DOM
  let isVisible = false;

  window.addEventListener('scroll', () => {
    const scrollStep = window.scrollY > 400; // Aumentato a 400 per non coprire subito il contenuto

    // Eseguiamo la modifica delle classi SOLO se lo stato cambia
    if (scrollStep && !isVisible) {
      backToTopButton.classList.add('show');
      isVisible = true;
    } else if (!scrollStep && isVisible) {
      backToTopButton.classList.remove('show');
      isVisible = false;
    }
  }, { passive: true }); // 'passive: true' migliora drasticamente le performance dello scroll su mobile

  // Scroll verso l'alto fluido
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita comportamenti strani del browser
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});