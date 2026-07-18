const navbar = document.getElementById('navbar');
const logoText = document.getElementById('logo-text');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTop = document.getElementById('scroll-top');

// Sticky navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll to top button
    if (window.scrollY > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveNav();
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Update active nav link
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}
