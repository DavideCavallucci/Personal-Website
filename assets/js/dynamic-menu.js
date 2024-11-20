
const navLinks = document.querySelectorAll('.nav-mobile')
const menuToggle = document.getElementById('navbarNavDropdown')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
l.addEventListener('click', () => { bsCollapse.toggle() })
})
