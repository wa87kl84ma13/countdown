const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const targetDate = new Date(`June 16 ${currentYear} 00:00:00`);

function updateCountDown() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;

    const calculateDate = Math.floor(diff / 1000 / 60 / 60 / 24);
    const calculateHours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const calculateMinutes = Math.floor(diff / 1000 / 60) % 60;
    const calculateSeconds = Math.floor(diff / 1000) % 60;

    days.innerHTML = calculateDate;
    if(calculateHours < 10) {  
        hours.innerHTML = '0' + calculateHours;
    } else {  
        hours.innerHTML = calculateHours;
    }

    if(calculateMinutes < 10) {  
        minutes.innerHTML = '0' + calculateMinutes;
    } else {  
        minutes.innerHTML = calculateMinutes;
    };

    if(calculateSeconds < 10) {  
        seconds.innerHTML = '0' + calculateSeconds;
    } else {  
        seconds.innerHTML = calculateSeconds;
    };
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

setInterval(updateCountDown, 1000);