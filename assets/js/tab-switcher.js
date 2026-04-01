document.addEventListener("DOMContentLoaded", function () {
  const btnDesigner = document.getElementById("btn-designer");
  const btnSport = document.getElementById("btn-sport");
  const profileImg = document.getElementById("profile-img");
  const contentDesigner = document.getElementById("content-designer");
  const contentSport = document.getElementById("content-sport");
  const curriculum = document.getElementById("cv");
  const testoCurriculum = document.getElementById("text");
  const pdfCurriculum = document.getElementById("pdf");


  btnDesigner.addEventListener("click", () => {
    profileImg.src = "../assets/images/Profile-Photo.webp"; // Cambia alla foto da designer
    pdfCurriculum.href = "../assets/docs/CV-Designer-Davide-Cavallucci.pdf";
    pdfCurriculum.innerHTML = "Scarica il CV professionale (PDF)";
    curriculum.innerHTML = "Percorso Professionale";
    profileImg.classList.remove("sport-mode"); // Disattiva l'aura beige nel CSS
    testoCurriculum.innerHTML = "Unisco la <strong>logica informatica</strong> alla <strong>sensibilità estetica</strong> per dare vita a soluzioni digitali intuitive. " + 
                  "Il mio percorso è un equilibrio tra la razionalità dello sviluppo e la creatività del design, " +
                  "alimentato dalla disciplina che solo anni di sport agonistico e coaching sanno insegnare. " +
                  "Ogni pixel e ogni riga di codice sono per me un'opportunità per migliorare l'esperienza dell'utente finale.";
    contentDesigner.classList.remove("d-none");
    contentSport.classList.add("d-none");
    btnDesigner.classList.add("type-1");
    btnDesigner.classList.remove("type-2");
    btnSport.classList.remove("type-1");
    btnSport.classList.add("type-2");
  });

  btnSport.addEventListener("click", () => {
    profileImg.src = "../assets/images/Profile-Photo-Sport.webp"; // Cambia alla foto sportiva
    pdfCurriculum.href = "../assets/docs/CV-Sport-Davide-Cavallucci.pdf";
    curriculum.innerHTML = "Percorso Sportivo";
    profileImg.classList.add("sport-mode"); // Attiva l'aura beige nel CSS
    pdfCurriculum.innerHTML = "Scarica il CV Sportivo (PDF)";
    testoCurriculum.innerHTML ="L'acqua è il mio elemento, la performance il mio obiettivo. Come <strong>coach e formatore</strong>, " + 
        "trasformo la disciplina dell'agonismo in leadership per i miei atleti. Non insegno solo tecnica: " +
        "costruisco la resilienza necessaria per superare ogni sfida, dentro e fuori dal campo di gara.";
    contentSport.classList.remove("d-none");
    contentDesigner.classList.add("d-none");
    btnSport.classList.add("type-1");
    btnSport.classList.remove("type-2");
    btnDesigner.classList.remove("type-1");
    btnDesigner.classList.add("type-2");
    
  });
});


