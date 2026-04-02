// ==========================================
// DATABASE PROGETTI
// ==========================================
const projectsData = [
  {
    image: "assets/images/Job/MedCloud.webp",
    type: "Case Study Universitario",
    title: "MedCloud",
    description: "Sviluppo di una piattaforma web per l'ottimizzazione dei flussi sanitari. Il progetto analizza la digitalizzazione dei dati clinici, integrando robustezza backend e usabilità UI.",
    btnText: "Analisi Progetto",
    link: "https://github.com/DavideCavallucci/Project-Work-L-31"
  },
  {
    image: "assets/images/Job/Imdb.webp",
    type: "UX/UI Professional Project",
    title: "IMDb Redesign",
    description: "Restyling completo basato sull'analisi del comportamento utente. Dalla ricerca qualitativa ai test di usabilità, per semplificare la navigazione in database complessi.",
    btnText: "Case Study",
    link: "https://www.figma.com/design/Q1ep53KjO4RdgH9cTlfNlG/Progetto-Finale-UX-UI-Design?node-id=1-3"
  },
  {
    image: "assets/images/Job/Logo-CNL.webp",
    type: "Strategia Digitale & Design",
    title: "Circolo Nuoto Lucca",
    description: "Consulenza tecnica e creativa per l'identità digitale dell'associazione. Gestione del restyling web e ottimizzazione dell'esperienza di iscrizione e consultazione.",
    btnText: "Esplora Sito",
    link: "https://circolonuotolucca.com"
  },
  {
    image: "assets/images/Job/Java.webp",
    type: "Software Engineering",
    title: "Progetto Programmazione II",
    description: "Progettazione di un'architettura software complessa in Java per un prototipo di social network. Focus su programmazione orientata agli oggetti e pattern strutturali.",
    btnText: "Repo GitHub",
    link: "https://github.com/DavideCavallucci/Progetto-PR2"
  },
  {
    image: "assets/images/Job/PN.webp",
    type: "Sport Tech Solution",
    title: "Lavagna Tattica Pallanuoto",
    description: "Applicativo web custom nato per supportare gli staff tecnici nella pallanuoto. Uno strumento che traduce le necessità strategiche in un'interfaccia visiva immediata.",
    btnText: "Esplora Tool",
    link: "https://github.com/DavideCavallucci/Lavagna-Tattica-PN"
  },
  {
    image: "assets/images/Job/swimetabolic.webp",
    type: "Data Analysis for Sport",
    title: "SwiMetabolic",
    description: "Software di calcolo per l'analisi dei metabolismi energetici nel nuoto. Progettato per trasformare dati fisiologici complessi in insight pratici per gli allenatori.",
    btnText: "Esplora Tool",
    link: "https://github.com/DavideCavallucci/SwiMetabolic"
  },
  {
    image: "assets/images/Job/css.webp",
    type: "Front-end Essentials",
    title: "Micro-interazioni JS",
    description: "Sperimentazione su logiche JavaScript per la gestione dello stato e del DOM, focalizzata sulla reattività dell'interfaccia utente in tempo reale.",
    btnText: "Vedi Codice",
    link: "https://github.com/DavideCavallucci/Contatore-JavaScript"
  },
  {
    image: "assets/images/Job/javascript.webp",
    type: "API Integration",
    title: "Hacker News Reader",
    description: "Implementazione di un aggregatore news tech tramite consumo di API asincrone. Ottimizzazione del caricamento dati e gestione efficiente dei flussi di informazione.",
    btnText: "Vedi Codice",
    link: "https://github.com/DavideCavallucci/Hacker-News"
  },
  {
    image: "assets/images/Job/typescript.webp",
    type: "TypeScript Development",
    title: "Moove Organization",
    description: "Modellazione di un sistema di micromobilità urbana tramite TypeScript. Focus sulla tipizzazione forte per garantire scalabilità e manutenibilità del software.",
    btnText: "Repo GitHub",
    link: "https://github.com/DavideCavallucci/Moove"
  },
  {
    image: "assets/images/Job/Grafica.webp",
    type: "Visual Identity",
    title: "Brand & Graphic Design",
    description: "Definizione di sistemi visivi coerenti. Creazione di asset grafici che integrano brand storytelling e usabilità digitale.",
    btnText: "Case Study",
    link: "https://www.figma.com/design/jP03TDMbMmJv5qzc1icCc2/Progetto-Grafica-UX%2FUI"
  },
  {
    image: "assets/images/Job/Copywriting.webp",
    type: "Content Strategy",
    title: "UX Writing & Storytelling",
    description: "Analisi della comunicazione persuasiva. Sviluppo di micro-copy e contenuti testuali volti a guidare l'utente verso l'azione con chiarezza e trasparenza.",
    btnText: "Vedi Progetto",
    link: "https://www.figma.com/design/kwnhIJ5yJBIBAhtlvYRhKH/Progetto-Copywriting"
  },
  {
    image: "assets/images/Job/Discovery.webp",
    type: "User Research Phase",
    title: "UX Discovery Process",
    description: "Fase di ricerca esplorativa finalizzata alla comprensione dei bisogni reali degli stakeholder. Utilizzo di survey e interviste per validare le ipotesi di design.",
    btnText: "Analisi Research",
    link: "https://www.figma.com/design/QLlGOGLhGz13pZIkbFnquO/Progetto-Discovery"
  },
  {
    image: "assets/images/Job/Accessibilita.webp",
    type: "Inclusive Design (A11y)",
    title: "Progettazione Accessibile",
    description: "Audit e ottimizzazione di interfacce digitali secondo gli standard WCAG. Garantire che il web sia uno spazio navigabile da chiunque, senza barriere.",
    btnText: "Case Study",
    link: "https://www.figma.com/design/H8mdjmvLcyZDES4n9RlfUo/Progetto-Accessibilità"
  },
  {
    image: "assets/images/Job/Wireframing.webp",
    type: "Information Architecture",
    title: "Wireframing & Flow",
    description: "Traduzione dei requisiti in strutture schematiche (Low-Fidelity). Definizione dell'ossatura del progetto prima di passare alla componente estetica.",
    btnText: "Analisi Struttura",
    link: "https://www.figma.com/design/EbZoLSoC6awYef6UrZkz9E/Progetto-Wireframing"
  },
  {
    image: "assets/images/Job/User-Interface.webp",
    type: "Visual Interface Design",
    title: "User Interface Design",
    description: "Creazione di interfacce interattive ad alta fedeltà. Focus sulla gerarchia visiva, tipografia e sistemi di icone per un'esperienza esteticamente premium.",
    btnText: "Prototipo HD",
    link: "https://www.figma.com/design/M51fs57IFEJ3chfwXlmBq6/Progetto-User-Interface"
  },
  {
    image: "assets/images/Job/User-Test.webp",
    type: "Usability Testing",
    title: "Testing & Validazione",
    description: "Analisi post-prototipazione con utenti reali. Raccolta di feedback quantitativi e qualitativi per cicli di miglioramento continuo del prodotto.",
    btnText: "Analisi Feedback",
    link: "https://www.figma.com/design/O90U7xJiizSdFSSXL0Dq9I/Progetto-User-Test"
  }
];

// ==========================================
// LOGICA DI RENDER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  
  if (!container) return;

  const basePath = window.location.pathname.includes('/pagine/') ? '../' : './';

  container.innerHTML = projectsData.map(project => `
    <div class="job-grid">
      <div class="job-grid-image">
        <img src="${basePath}${project.image}" class="job-img" alt="${project.title}">
      </div>
      <div class="job-grid-description">
        <span class="job-type">${project.type}</span>
        <h3>${project.title}</h3>
        <p class="text job-description">${project.description}</p>
        <a class="my-btn type-2 job-button" href="${project.link}" target="_blank" rel="noopener">${project.btnText} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </div>
  `).join('');
});