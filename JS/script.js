// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-menu-btn') && !event.target.closest('nav ul')) {
        if (navMenu && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    }
});

// Smooth scroll for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop - 80,
//                 behavior: 'smooth'
//             });
            
//             // Close mobile menu after clicking a link
//             if (navMenu && navMenu.classList.contains('show')) {
//                 navMenu.classList.remove('show');
//             }
//         }
//     });
// });
