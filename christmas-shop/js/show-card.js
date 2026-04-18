async function loadGiftsJSON() {
    return fetch('js/gifts.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Error loading gifts.json:', error);
            return [];
        });
}

let giftsData = [];
loadGiftsJSON().then(gifts => {
    giftsData = gifts;
});

// const giftsImages = {
//     'For Work': 'images/gift-for-work.png',
//     'For Health': 'images/gift-for-health.png',
//     'For Harmony': 'images/gift-for-harmony.png', 
// }

const bestGifts = document.querySelectorAll('.gift-item');
const giftItemModal = document.querySelector('.gift-item-modal');
const modalCloseBtn = document.querySelector('.modal-close');

bestGifts.forEach(gift => {
    gift.addEventListener('click', () => {
        giftItemModal.classList.add('active');
        body.classList.add('active');

        const giftName = gift.querySelector('.h3').textContent;
        const giftItem = giftsData.find(item => item.name === giftName);
        if (giftItem) {
            giftItemModal.querySelector('img').src = giftsImages[giftItem.category];

            giftItemModal.querySelector('.modal-text > .h4').textContent = giftItem.category;
            giftItemModal.querySelector('.modal-text > .h4').classList.remove('for-work', 'for-health', 'for-harmony');
            giftItemModal.querySelector('.modal-text > .h4').classList.add(giftItem.category.toLowerCase().replace(' ', '-'));
            
            giftItemModal.querySelector('.modal-text > .h3').textContent = giftItem.name;
            giftItemModal.querySelector('.modal-text > .paragraph').textContent = giftItem.description;
            
            const superpowers = giftItemModal.querySelectorAll('.superpower-item');
            superpowers.forEach((item, index) => {
                const superpowerText = giftItem.superpowers[`${item.querySelector('.superpower').textContent.toLowerCase()}`]
                const superpowerLevel = superpowerText / 100;
                item.querySelector('.superpower-level').textContent = superpowerText;
                const superpowerImg = item.querySelectorAll('.superpower-img > img');
                superpowerImg.forEach((img, i) => {
                    if (i < superpowerLevel) {
                        img.style.opacity = '1';
                    } else {                        
                        img.style.opacity = '0.1';
                    }                 
                });
            });
        }
    });
});

modalCloseBtn.addEventListener('click', () => {
    giftItemModal.classList.remove('active');
    body.classList.remove('active');
});

giftItemModal.addEventListener('click', (e) => {
    if (e.target === giftItemModal) {
        giftItemModal.classList.remove('active');
        body.classList.remove('active');
    }
});
