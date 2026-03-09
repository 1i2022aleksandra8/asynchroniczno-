let time = 0;
let intervalID = null;

const wynikUI = document.getElementById('wynikUI');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', () => {
    if (intervalID !== null) return;

    intervalID = setInterval(() => {
        time++;
        wynikUI.innerText = `Czas: ${time}`;
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    if (intervalID !== null) {
        clearInterval(intervalID);
        intervalID = null;
        wynikUI.innerText = `Zatrzymano na: ${time}`;
    }
});