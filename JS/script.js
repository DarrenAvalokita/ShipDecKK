const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-menu-btn') && !event.target.closest('nav ul')) {
        if (navMenu && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    }
});