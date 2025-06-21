let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    const time = elapsedTime + (isRunning ? Date.now() - startTime : 0);
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    display.textContent =
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener("click", () => {
    if (!isRunning) {
        startTime = Date.now();
        timerInterval = setInterval(updateDisplay, 1000);
        isRunning = true;
    }
});

stopBtn.addEventListener("click", () => {
    if (isRunning) {
        elapsedTime += Date.now() - startTime;
        clearInterval(timerInterval);
        isRunning = false;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    updateDisplay();
});

updateDisplay();
