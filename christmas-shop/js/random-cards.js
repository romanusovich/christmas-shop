import { showGiftDetails } from "./show-card.js";

async function loadGiftsJSON() {
    return fetch('js/gifts.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Error loading gifts.json:', error);
            return [];
        });
}

function getRandomGifts(gifts, count) {
    const shuffled = [...gifts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const giftsImages = {
    'For Work': 'images/gift-for-work.png',
    'For Health': 'images/gift-for-health.png',
    'For Harmony': 'images/gift-for-harmony.png', 
}

function displayRandomGifts(randomGifts) {
    const bestGiftItems = document.querySelectorAll('.gift-item');
    bestGiftItems.forEach((item, index) => {
        if (randomGifts[index]) {
            const gift = randomGifts[index];
            item.querySelector('img').src = giftsImages[gift.category];
            item.querySelector('.h4').textContent = gift.category;
            item.querySelector('.h4').classList.add(gift.category.toLowerCase().replace(' ', '-'));
            item.querySelector('.h3').textContent = gift.name;
        } else {
            item.style.display = 'none';
        }  
  });
}

loadGiftsJSON().then(gifts => {
    if (gifts.length > 0) {
        const randomGifts = getRandomGifts(gifts, 4);
        displayRandomGifts(randomGifts);

        const bestGifts = document.querySelectorAll('.gift-item');
        bestGifts.forEach(gift => {
            gift.addEventListener('click', () => showGiftDetails(gift, gifts));
        });
    }
});