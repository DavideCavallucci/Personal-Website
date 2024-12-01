function gestisciInvioForm(e) {
    e.preventDefault();  // Impedisce il comportamento di default del form (invio)
    
    const submitBtn = document.getElementById('submit-btn');  // Assicurati che il button abbia l'id "submit-btn"
    
    submitBtn.value = 'Invio in corso...';  // Cambia il testo del bottone
    submitBtn.disabled = true;  // Disabilita il bottone per evitare clic multipli

    // Simula invio form
    setTimeout(() => {
        submitBtn.value = 'Invia';  // Ripristina il testo del bottone
        submitBtn.disabled = false;  // Riabilita il bottone
        alert('Form inviato con successo!');  // Mostra un messaggio di successo
    }, 1500);  // Simula un invio di 1,5 secondi
}

// Aggiungi l'evento al form
const form = document.getElementById('contact-form');
form.addEventListener('submit', gestisciInvioForm);

(function() {
    emailjs.init("uzNGTNQOBGAaXYlEy");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene il comportamento di default del form (reindirizzamento)
       
        const templateParams = { // Creazione dei parametri per l'email: nome, email e messaggio
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_la5q1zp', 'template_zn4yjuu', templateParams) // Template personalizzato di EmailJS
            .then(function(response) { // Handler del messaggio di successo o errore
                console.log('SUCCESS!', response.status, response.text);
                gestisciInvioForm(response);
            }, function(error) {
                console.log('FAILED...', error);
                alert('Errore nell\'invio del messaggio. Riprova.');
            });
    });
}; 
