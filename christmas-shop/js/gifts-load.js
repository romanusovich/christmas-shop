async function loadGiftsJSON() {
    return fetch('js/gifts.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Error loading gifts.json:', error);
            return [];
        });
}

const giftsImages = {
    'For Work': 'images/gift-for-work.png',
    'For Health': 'images/gift-for-health.png',
    'For Harmony': 'images/gift-for-harmony.png', 
}

function displayGifts(gifts) {
    const giftsItems = document.querySelector('.gifts-items');
    giftsItems.innerHTML = '';

    gifts.forEach(gift => {
        const giftItem = document.createElement('div');
        giftItem.classList.add('gift-item');
        giftItem.setAttribute('data-category', gift.category.toLowerCase().split(' ').join('-'));
        
        const img = document.createElement('img');
        img.src = giftsImages[gift.category];
        img.alt = gift.name;
        
        const giftText = document.createElement('div');
        giftText.classList.add('gift-text');
        
        const h4 = document.createElement('p');
        h4.classList.add('h4');
        h4.classList.add(gift.category.toLowerCase().replace(' ', '-'));
        h4.textContent = gift.category;
        
        const h3 = document.createElement('p');
        h3.classList.add('h3');
        h3.textContent = gift.name;
        
        giftText.appendChild(h4);
        giftText.appendChild(h3);
        giftItem.appendChild(img);
        giftItem.appendChild(giftText);
        giftsItems.appendChild(giftItem);
    });
}

loadGiftsJSON().then(gifts => displayGifts(gifts));