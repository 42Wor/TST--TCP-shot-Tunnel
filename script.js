// script.js

// You can add any JavaScript functionality here if needed.
// For now, this file can be empty or contain minimal scripts.

// Example:  Smooth scrolling for navigation links (optional)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset if needed for fixed header
                behavior: 'smooth'
            });
        }
    });
});