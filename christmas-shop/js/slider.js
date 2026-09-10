const sliderButtonNext = document.querySelector('.slider-button.next');
const sliderButtonPrev = document.querySelector('.slider-button.prev');
const sliderItems = document.querySelectorAll('.slider-item');
let numberOfClicks = 3;
let clickCount = 0;

function calculateCLickCount() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        numberOfClicks = 6;
    } else {
        numberOfClicks = 3;
    }
}

window.addEventListener('load', calculateCLickCount);
window.addEventListener('resize', () => {
    clickCount = 0;
    const sliderItemsContainer = document.querySelector('.slider-items');
    sliderItemsContainer.style.transform = 'translateX(0)';
    sliderButtonNext.classList.remove('inactive');
    sliderButtonNext.disabled = false;
    sliderButtonPrev.classList.add('inactive');
    sliderButtonPrev.disabled = true;
    setTimeout(() => {
        calculateCLickCount();
    }, 100);
});

sliderButtonNext.addEventListener('click', () => {
    clickCount++;
    const sliderItemsContainer = document.querySelector('.slider-items');
    const sliderTotalWidth = sliderItemsContainer.scrollWidth;
    const sliderVisibleWidth = sliderItemsContainer.offsetWidth;
    const translateXValue = ((sliderTotalWidth - sliderVisibleWidth) / numberOfClicks);
    const currentTranslateX  = parseInt(sliderItemsContainer.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const newTranslateX = currentTranslateX - translateXValue;
    sliderItemsContainer.style.transform = `translateX(${newTranslateX}px)`;
    if (clickCount >= numberOfClicks) {
        sliderButtonNext.classList.add('inactive');
        sliderButtonNext.disabled = true;
    }
    if (clickCount > 0) {
        sliderButtonPrev.classList.remove('inactive');
        sliderButtonPrev.disabled = false;
    }
});

sliderButtonPrev.addEventListener('click', () => {
    clickCount--;
    const sliderItemsContainer = document.querySelector('.slider-items');
    const sliderTotalWidth = sliderItemsContainer.scrollWidth;
    const sliderVisibleWidth = sliderItemsContainer.offsetWidth;
    const translateXValue = ((sliderTotalWidth - sliderVisibleWidth) / numberOfClicks);
    const currentTranslateX  = parseInt(sliderItemsContainer.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const newTranslateX = currentTranslateX + translateXValue;
    sliderItemsContainer.style.transform = `translateX(${newTranslateX}px)`;
    if (clickCount <= 0) {
        sliderButtonPrev.classList.add('inactive');
        sliderButtonPrev.disabled = true;
        sliderItemsContainer.style.transform = 'translateX(0)';
    }
    if (clickCount < numberOfClicks) {
        sliderButtonNext.classList.remove('inactive');
        sliderButtonNext.disabled = false;
    }
});