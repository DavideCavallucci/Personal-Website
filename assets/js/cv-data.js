// assets/js/cv-data.js

const cvData = {
  designer: {
    timeline: [
      {
        title: "Specializzazione UX/UI Design",
        subtitle: "Master c/o Start2Impact (2023 - 2025)",
        bullets: [
          "Progettazione di interfacce scalabili e accessibili (WCAG)",
          "Realizzazione di flussi utente, wireframe e prototipi interattivi ad alta fedeltà",
          "Analisi dei requisiti e gestione dell'intero Design Process (Double Diamond)"
        ]
      },
      {
        title: "Informatica L-31",
        subtitle: "Percorso Accademico (2020 - 2026)",
        bullets: [
          "Sviluppo di algoritmi e padronanza della programmazione OOP",
          "Architettura dei dati, Database relazionali e Ingegneria del Software",
          "Problem solving applicato a scenari reali di sviluppo"
        ]
      }
    ],
    skills: [
      {
        icon: "fa-solid fa-pen-nib",
        title: "UX/UI Design",
        items: ["Figma", "Miro", "Wireframing", "Prototyping", "User Testing", "Visual Design"],
        colClass: "col-lg-4 col-md-6" // Gestisce la larghezza della colonna Bootstrap
      },
      {
        icon: "fa-solid fa-code",
        title: "Sviluppo Front-end",
        items: ["HTML5 / CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS", "Bootstrap"],
        colClass: "col-lg-4 col-md-6"
      },
      {
        icon: "fa-solid fa-server",
        title: "Back-end & Tools",
        items: ["Python", "Java", "FastAPI", "Git / GitHub"],
        colClass: "col-lg-4 col-md-12"
      }
    ]
  },
  sport: {
    timeline: [
      {
        title: "Head Coach Pallanuoto",
        subtitle: "Dal 2021 a oggi",
        bullets: [
          "Pianificazione strategica e analisi delle performance stagionali",
          "Gestione della preparazione fisica, tattica e mentale del team",
          "Leadership e sviluppo del potenziale tecnico dei giovani atleti"
        ]
      },
      {
        title: "Istruttore Specialistico",
        subtitle: "2022 - 2026",
        bullets: [
          "Metodologia didattica per l'apprendimento tecnico del nuoto",
          "Adattamento del metodo formativo alle esigenze individuali",
          "Comunicazione empatica e gestione di gruppi eterogenei"
        ]
      }
    ],
    skills: [
      {
        icon: "fa-solid fa-water",
        title: "Federazione Italiana Nuoto",
        items: ["Direttore Sportivo", "Allenatore Pallanuoto", "Allenatore Nuoto", "Aiuto Allenatore Unico", "Istruttore Spec. 6-16 anni", "Istruttore"],
        colClass: "col-lg-6 col-md-12"
      },
      {
        icon: "fa-solid fa-heart-pulse",
        title: "Fitness & Sicurezza",
        items: ["Personal Trainer INVICTUS", "Preparatore Atletico CSEN", "Assistente Bagnanti (P)", "Esecutore BLSD"],
        colClass: "col-lg-6 col-md-12"
      }
    ]
  }
};

// Logica per generare HTML
document.addEventListener("DOMContentLoaded", () => {
  // Funzione helper per generare la Timeline
  const generateTimeline = (data) => data.map(item => `
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3 class="mb-1">${item.title}</h3>
            <span class="job-type mb-3">${item.subtitle}</span>
            <ul class="custom-line-list">
                ${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
        </div>
    </div>
  `).join('');

  // Funzione helper per generare le Cards delle Skills
  const generateSkills = (data) => data.map(category => `
    <div class="${category.colClass}">
        <div class="category-card">
            <h4><i class="${category.icon}"></i> ${category.title}</h4>
            <div class="d-flex flex-wrap gap-2">
                ${category.items.map(skill => `<span class="skill-level">${skill}</span>`).join('')}
            </div>
        </div>
    </div>
  `).join('');

  // Inietta i dati (se i container esistono)
  if(document.getElementById('timeline-designer')) {
      document.getElementById('timeline-designer').innerHTML = generateTimeline(cvData.designer.timeline);
      document.getElementById('skills-designer').innerHTML = generateSkills(cvData.designer.skills);
      
      document.getElementById('timeline-sport').innerHTML = generateTimeline(cvData.sport.timeline);
      document.getElementById('skills-sport').innerHTML = generateSkills(cvData.sport.skills);
  }
});