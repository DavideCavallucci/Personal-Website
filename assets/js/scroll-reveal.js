document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        // Soglia a 0: scatta appena il primo pixel entra nello schermo
        threshold: 0,
        // Margin positivo in basso (es. 50px o 10%): 
        // l'elemento inizia a caricarsi "prima" di entrare nel mirino dell'utente
        rootMargin: '0px 0px -30px 0px' 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // IMPORTANTE: Smettiamo di osservare l'elemento una volta rivelato
                // Questo libera risorse per il browser
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});