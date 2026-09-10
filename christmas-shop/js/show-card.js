const giftsImages = {
    'For Work': 'images/gift-for-work.png',
    'For Health': 'images/gift-for-health.png',
    'For Harmony': 'images/gift-for-harmony.png', 
}

function openModal() {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    
    body.classList.add('active');
    const giftItemModal = document.querySelector('.gift-item-modal');
    giftItemModal.classList.add('active');
    
    document.documentElement.style.paddingRight = `${scrollWidth}px`;
}

function closeModal() {
    const giftItemModal = document.querySelector('.gift-item-modal');
    giftItemModal.classList.remove('active');
    body.classList.remove('active');
    
    document.documentElement.style.paddingRight = '';
}

function showGiftDetails(gift, giftsData) {
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

    openModal();
}

const modalCloseBtn = document.querySelector('.modal-close');
modalCloseBtn.addEventListener('click', () => {
    closeModal();
});

const giftItemModal = document.querySelector('.gift-item-modal');
giftItemModal.addEventListener('click', (e) => {
    if (e.target === giftItemModal) {
        closeModal();
    }
});

export { showGiftDetails };