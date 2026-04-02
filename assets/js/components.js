// ==========================================
// WEB COMPONENTS: Header e Footer dinamici
// ==========================================

class AppHeader extends HTMLElement {
  connectedCallback() {
    // Calcola in automatico se siamo nella root o in una sottocartella
    const basePath = window.location.pathname.includes('/pagine/') ? '../' : './';

    this.innerHTML = `
      <header>
        <nav class="navbar fixed-top navbar-expand-xl shadow-sm" role="navigation" aria-label="Navigazione principale">
          <div class="container header-container">
            
            <a class="navbar-brand logo" href="${basePath}index.html">
              <img src="${basePath}assets/images/Logo.webp" class="my-logo" alt="Torna alla Home">
            </a>
            
            <div class="header-mobile d-xl-none">
              <button class="navbar-toggler border-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Menu di navigazione">
                <i id="icon-bars" class="fas fa-bars"></i>
                <i id="icon-times" class="fas fa-times"></i>
              </button>            
            </div>
            
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav align-items-xl-center gap-3 gap-xl-4">
                <li class="nav-item">
                  <a class="my-btn type-2 w-100 d-flex align-items-center justify-content-center gap-2" href="${basePath}pagine/cv.html">
                    <i class="fa-solid fa-briefcase"></i> Esperienze
                  </a>
                </li>
                <li class="nav-item">
                  <a class="my-btn type-1 w-100 d-flex align-items-center justify-content-center gap-2" href="${basePath}pagine/contatti.html">
                    <i class="fa-solid fa-paper-plane"></i> Contattami
                  </a>
                </li>
                <li class="nav-item d-xl-none my-1">
                  <hr class="text-secondary opacity-25 m-0">
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center">
                  <button id="theme-toggle" class="my-btn type-2 theme-toggle-btn w-100 d-flex align-items-center justify-content-center gap-2" aria-label="Cambia tema chiaro/scuro">
                    <i class="fa-solid fa-moon"></i> 
                    <span class="theme-text">Cambia Tema</span>
                  </button>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
      </header>
    `;
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    const basePath = window.location.pathname.includes('/pagine/') ? '../' : './';

    this.innerHTML = `
      <footer class="modern-footer">
        <div class="footer-container" role="contentinfo">
          <div class="footer-brand">
            <img src="${basePath}assets/images/Logo.webp" alt="Logo Davide" class="footer-logo">
            <p class="footer-tagline">Progettare con metodo, sviluppare con passione.</p>
          </div>
          
          <div class="footer-icon-container">
            <a class="footer-icon" href="https://github.com/DavideCavallucci" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
            <a class="footer-icon" href="https://www.linkedin.com/in/davide-cavallucci" target="_blank" rel="noopener" aria-label="Linkedin"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="text">© 2026 Davide Cavallucci | Digital Experiences c/o Lucca, IT.</p>
        </div>
      </footer>
    `;
  }
}

// Registra i tag custom
customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);