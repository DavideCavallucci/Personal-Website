// ==========================================
// 1. LOGICA TEMA ISTANTANEA (No Flash Bianco)
// ==========================================
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

// ==========================================
// 2. INTERAZIONI (Dopo che la pagina è caricata)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- GESTIONE SALUTO DINAMICO ---
    // Usiamo l'ID specifico 'titolo' che hai aggiunto solo in Homepage
    const greetingEl = document.getElementById('titolo');

    if (greetingEl) {
        const hour = new Date().getHours();
        let welcome;
        
        if (hour >= 5 && hour < 12) welcome = "Buongiorno";
        else if (hour >= 12 && hour < 18) welcome = "Buon pomeriggio";
        else welcome = "Buonasera";
        
        greetingEl.innerHTML = `${welcome}, sono Davide`;
    }

    // --- LOGICA BOTTONE TOGGLE ---
    const toggleBtn = document.querySelector('#theme-toggle');
    // Se il bottone non c'è in questa pagina, usciamo per evitare errori
    if (!toggleBtn) return; 

    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateIcon(currentTheme);

    toggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }
});