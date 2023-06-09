let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let interval;

const stopwatch = document.getElementById("stopwatch");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  stopwatch.textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

startBtn.addEventListener("click", function () {
  interval = setInterval(stopWatch, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopwatch.textContent = "00:00:00";
});