const burgerButton = document.querySelector('.burger-menu');
const burgerSection = document.querySelector('.burger-section');
const body = document.body;
const burgerLinks = document.querySelectorAll('.burger-section nav a');

function toggleBurgerMenu() {
    burgerButton.classList.toggle('active');
    burgerSection.classList.toggle('active');
    body.classList.toggle('active');
}

burgerButton.addEventListener('click', toggleBurgerMenu);

burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerButton.classList.remove('active');
        burgerSection.classList.remove('active');
        body.classList.remove('active');
    });
});