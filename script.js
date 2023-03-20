const secondsHand = document.querySelector(".second-hand");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const submitButton = document.querySelector(".timer-input input[type=submit]");
const timerInput = document.querySelector(".timer-input input[type=number]");



let time = 10;
let paused = false;
let interval;


startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", stopTimer);
submitButton.addEventListener("click", timerInputFunc);


function rotate() {
    secondsHand.style.rotate = 6 * time - 90 + "deg";
    time--;
    if (time < 0)
        clearInterval(interval);
}

function startTimer() {
    if (!paused) {
        time = 60;
        clearInterval(interval);
        rotate();
    }
    
    pauseButton.innerHTML = "Pause"; 
    interval = setInterval(rotate, 1000);
    paused = false;
}

function stopTimer() {
    clearInterval(interval);

    if (!paused)
        pauseButton.innerHTML = "Resume";
    else {
        clearInterval(interval);
        pauseButton.innerHTML = "Pause";
        interval = setInterval(rotate, 1000);
    }

    paused = !paused;
}

function timerInputFunc() {
    // clearInterval(interval);
    let t = timerInput.value;

    if (t >= 0 && t <= 60) {
        time = t;
        clearInterval(interval);
        rotate();
        paused = true;
    }
    else {
        alert("Enter a time between 0 to 60");
    }
}