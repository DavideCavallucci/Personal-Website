
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
                alert('Il messaggio è stato inviato con successo!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Errore nell\'invio del messaggio. Riprova.');
            });
    });
}; 