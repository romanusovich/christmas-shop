function toggleBurgerMenu() {
    const burgerButton = document.querySelector('.burger-menu');
    burgerButton.classList.toggle('active');

    const burgerSection = document.querySelector('.burger-section');
    burgerSection.classList.toggle('active');
}

const burgerButton = document.querySelector('.burger-menu');
burgerButton.addEventListener('click', toggleBurgerMenu);