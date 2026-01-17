// Pomodoro Timer
let pomodoroMinutes = 25;
let pomodoroSeconds = 0;
let pomodoroInterval = null;
let isPomodoroRunning = false;

function startPomodoro() {
  if (!isPomodoroRunning) {
    isPomodoroRunning = true;
    pomodoroInterval = setInterval(updatePomodoro, 1000);
  }
}

function pausePomodoro() {
  isPomodoroRunning = false;
  clearInterval(pomodoroInterval);
}

function resetPomodoro() {
  isPomodoroRunning = false;
  clearInterval(pomodoroInterval);
  pomodoroMinutes = 25;
  pomodoroSeconds = 0;
  updatePomodoroDisplay();
}

function updatePomodoro() {
  if (pomodoroSeconds === 0) {
    if (pomodoroMinutes === 0) {
      pausePomodoro();
      alert('Pomodoro session complete! Take a break.');
      resetPomodoro();
      return;
    }
    pomodoroMinutes--;
    pomodoroSeconds = 59;
  } else {
    pomodoroSeconds--;
  }
  updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
  const display = document.getElementById('pomodoro-time');
  if (display) {
    const mins = String(pomodoroMinutes).padStart(2, '0');
    const secs = String(pomodoroSeconds).padStart(2, '0');
    display.textContent = mins + ':' + secs;
  }
}

window.startPomodoro = startPomodoro;
window.pausePomodoro = pausePomodoro;
window.resetPomodoro = resetPomodoro;
