const filterButtons = document.querySelectorAll('.filter-btn');
const shipCards = document.querySelectorAll('.ship-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        shipCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});