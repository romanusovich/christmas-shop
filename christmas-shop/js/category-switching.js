const switchButtons = document.querySelectorAll('.gifts-tabs button');

switchButtons.forEach(button => {
    button.addEventListener('click', () => {
        const giftItems = document.querySelectorAll('.gift-item');
        const category = button.getAttribute('data-tab');
        switchButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        giftItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});