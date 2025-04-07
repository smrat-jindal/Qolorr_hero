// Simple fade-in animation for hero content on page load

window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        // Add the 'visible' class after a short delay to trigger the CSS transition
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 100); // 100ms delay - adjust as needed
    }
});

// Optional: Smooth scrolling for the CTA button if it links within the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Enable smooth scrolling
            });
        }
    });
});