(function() {
    // Inizializzazione immediata di EmailJS
    emailjs.init("uzNGTNQOBGAaXYlEy");
})();

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form-element'); // ID aggiornato dal nuovo HTML
    const submitBtn = document.getElementById('submit-btn');

    if (!contactForm || !submitBtn) return;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. Stato "Invio in corso"
        // Salviamo l'HTML originale per ripristinarlo dopo (icona compresa)
        const originalBtnContent = submitBtn.innerHTML;
        submitBtn.innerHTML = `Inviando... <i class="fa-solid fa-spinner fa-spin ms-2"></i>`;
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        // 2. Preparazione parametri
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // 3. Invio Reale tramite EmailJS
        emailjs.send('service_la5q1zp', 'template_zn4yjuu', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // 4. Feedback di Successo Premium
                submitBtn.innerHTML = `Inviato con successo! <i class="fa-solid fa-check ms-2"></i>`;
                submitBtn.style.backgroundColor = "#28a745"; // Diventa verde
                submitBtn.style.borderColor = "#28a745";

                // Reset del form
                contactForm.reset();

                // Ripristino del bottone dopo 4 secondi
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                    submitBtn.style.backgroundColor = ""; // Torna al viola del CSS
                    submitBtn.style.borderColor = "";
                }, 4000);

            }, function(error) {
                console.log('FAILED...', error);
                
                // 5. Gestione Errore
                alert('Ops! Qualcosa è andato storto. Riprova più tardi.');
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
            });
    });
});