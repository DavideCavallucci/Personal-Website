document.addEventListener("DOMContentLoaded", function () {
  const btnDesigner = document.getElementById("btn-designer");
  const btnSport = document.getElementById("btn-sport");
  const profileImg = document.getElementById("profile-img");
  const contentDesigner = document.getElementById("content-designer");
  const contentSport = document.getElementById("content-sport");
  const curriculum = document.getElementById("cv");
  const testoCurriculum = document.getElementById("text");

  btnDesigner.addEventListener("click", () => {
    profileImg.src = "../assets/images/Profile-Photo.webp"; // Cambia alla foto da designer
    curriculum.textContent = "Curriculum Design";
    testoCurriculum.textContent = "Fin da piccolo ho sempre avuto un debole per tutto ciò che è tecnologico e creativo. Ho trasformato questa passione in una strada professionale, dedicandomi al design e all'informatica. Mi piace creare interfacce e progetti che siano utili e piacevoli per le persone, cercando di imparare qualcosa di nuovo ogni giorno e di migliorare in ogni dettaglio.";
    contentDesigner.classList.remove("d-none");
    contentSport.classList.add("d-none");
    btnDesigner.classList.add("type-1");
    btnDesigner.classList.remove("type-2");
    btnSport.classList.remove("type-1");
    btnSport.classList.add("type-2");
  });

  btnSport.addEventListener("click", () => {
    profileImg.src = "../assets/images/Profile-Photo-Sport.webp"; // Cambia alla foto sportiva
    curriculum.textContent = "Curriculum Sport";
    testoCurriculum.textContent ="Lo sport è una parte fondamentale della mia vita. Oltre ad aver praticato nuoto e pallanuoto per tanti anni, ora sono un allenatore e mi piace trasmettere ciò che ho imparato ai giovani. Per me, non è solo questione di tecnica o prestazioni: è aiutare gli atleti a crescere e a scoprire di cosa sono capaci, dentro e fuori dall'acqua";
    contentSport.classList.remove("d-none");
    contentDesigner.classList.add("d-none");
    btnSport.classList.add("type-1");
    btnSport.classList.remove("type-2");
    btnDesigner.classList.remove("type-1");
    btnDesigner.classList.add("type-2");
  });
});


