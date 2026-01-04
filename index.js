// Mobile Menu Toggle Script
const menuIcon = document.querySelector('header .bi-list');
const nav = document.querySelector('header nav');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});