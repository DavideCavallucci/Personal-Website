document.addEventListener("DOMContentLoaded", function () {
  const btnDesigner = document.getElementById("btn-designer");
  const btnSport = document.getElementById("btn-sport");
  const profileImg = document.getElementById("profile-img");
  const contentDesigner = document.getElementById("content-designer");
  const contentSport = document.getElementById("content-sport");
  const curriculum = document.getElementById("cv");

  btnDesigner.addEventListener("click", () => {
    profileImg.src = "../assets/images/Profile-Photo.webp"; // Cambia alla foto da designer
    curriculum.textContent = "Curriculum Design";
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
    contentSport.classList.remove("d-none");
    contentDesigner.classList.add("d-none");
    btnSport.classList.add("type-1");
    btnSport.classList.remove("type-2");
    btnDesigner.classList.remove("type-1");
    btnDesigner.classList.add("type-2");
  });
});


