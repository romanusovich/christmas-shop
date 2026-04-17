const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function calculateTimeDifference() {
    const now = new Date();
    const currentYear = now.getUTCFullYear();
    let nextYear = new Date(Date.UTC(currentYear, 0, 1, 0, 0, 0));
    if (now > nextYear) {
        nextYear = new Date(Date.UTC(currentYear + 1, 0, 1, 0, 0, 0));
    }
    const timeDifference = nextYear - now;
    return timeDifference;
}

function updateTimer() {
    const timeDifference = calculateTimeDifference();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}


setInterval(() => {
    updateTimer();
}, 1000);
