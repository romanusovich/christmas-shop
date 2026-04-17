const scrollToTopButton = document.getElementById('scrollToTop');

function toggleScrollToTopButton() {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

window.addEventListener('scroll', toggleScrollToTopButton);
window.addEventListener('load', toggleScrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});