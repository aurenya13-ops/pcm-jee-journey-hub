// ==================== POMODORO TIMER ====================

let pomodoroState = {
  minutes: 25,
  seconds: 0,
  isRunning: false,
  isBreak: false,
  interval: null,
  workDuration: 25,
  breakDuration: 5,
  completedPomodoros: 0
};

// Start timer
function startTimer() {
  if (pomodoroState.isRunning) return;
  
  pomodoroState.isRunning = true;
  pomodoroState.interval = setInterval(updateTimer, 1000);
  
  showNotification('⏱️ Pomodoro started! Focus time!', 'success');
}

// Pause timer
function pauseTimer() {
  if (!pomodoroState.isRunning) return;
  
  pomodoroState.isRunning = false;
  clearInterval(pomodoroState.interval);
  
  showNotification('⏸️ Pomodoro paused', 'info');
}

// Reset timer
function resetTimer() {
  pomodoroState.isRunning = false;
  clearInterval(pomodoroState.interval);
  
  pomodoroState.minutes = pomodoroState.isBreak ? pomodoroState.breakDuration : pomodoroState.workDuration;
  pomodoroState.seconds = 0;
  
  updateTimerDisplay();
  showNotification('🔄 Timer reset', 'info');
}

// Update timer
function updateTimer() {
  if (pomodoroState.seconds === 0) {
    if (pomodoroState.minutes === 0) {
      // Timer complete
      timerComplete();
      return;
    }
    pomodoroState.minutes--;
    pomodoroState.seconds = 59;
  } else {
    pomodoroState.seconds--;
  }
  
  updateTimerDisplay();
}

// Timer complete
function timerComplete() {
  clearInterval(pomodoroState.interval);
  pomodoroState.isRunning = false;
  
  if (pomodoroState.isBreak) {
    // Break complete, start work
    pomodoroState.isBreak = false;
    pomodoroState.minutes = pomodoroState.workDuration;
    pomodoroState.seconds = 0;
    showNotification('✅ Break complete! Time to focus!', 'success');
    addXP(25);
  } else {
    // Work complete, start break
    pomodoroState.completedPomodoros++;
    pomodoroState.isBreak = true;
    pomodoroState.minutes = pomodoroState.breakDuration;
    pomodoroState.seconds = 0;
    showNotification('🎉 Pomodoro complete! Take a break!', 'success');
    addXP(50);
  }
  
  updateTimerDisplay();
  
  // Play notification sound (optional)
  playNotificationSound();
}

// Update timer display
function updateTimerDisplay() {
  const display = document.getElementById('timer');
  if (display) {
    const mins = String(pomodoroState.minutes).padStart(2, '0');
    const secs = String(pomodoroState.seconds).padStart(2, '0');
    display.textContent = `${mins}:${secs}`;
  }
}

// Play notification sound
function playNotificationSound() {
  // Simple beep using Web Audio API
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (e) {
    console.log('Audio not supported');
  }
}

// Render pomodoro page
function renderPomodoroPage() {
  return `
    <div class="pomodoro-page">
      <div class="page-header">
        <h1><i class="fas fa-clock"></i> Pomodoro Timer</h1>
        <p>Stay focused with the Pomodoro Technique - 25 min work, 5 min break</p>
      </div>

      <div class="pomodoro-container">
        <div class="pomodoro-display-large">
          <div class="timer-circle">
            <span id="timer-large">${String(pomodoroState.minutes).padStart(2, '0')}:${String(pomodoroState.seconds).padStart(2, '0')}</span>
            <p class="timer-label">${pomodoroState.isBreak ? 'Break Time' : 'Focus Time'}</p>
          </div>
        </div>

        <div class="pomodoro-controls-large">
          <button class="control-btn-large" onclick="startTimer()">
            <i class="fas fa-play"></i>
            <span>Start</span>
          </button>
          <button class="control-btn-large" onclick="pauseTimer()">
            <i class="fas fa-pause"></i>
            <span>Pause</span>
          </button>
          <button class="control-btn-large" onclick="resetTimer()">
            <i class="fas fa-redo"></i>
            <span>Reset</span>
          </button>
        </div>

        <div class="pomodoro-stats">
          <div class="stat-box">
            <div class="stat-number">${pomodoroState.completedPomodoros}</div>
            <div class="stat-label">Completed Today</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${pomodoroState.completedPomodoros * 25}</div>
            <div class="stat-label">Minutes Focused</div>
          </div>
        </div>

        <div class="pomodoro-settings">
          <h3>⚙️ Settings</h3>
          <div class="settings-grid">
            <div class="setting-item">
              <label>Work Duration (minutes)</label>
              <input type="number" value="${pomodoroState.workDuration}" min="1" max="60" 
                onchange="pomodoroState.workDuration = parseInt(this.value); resetTimer();">
            </div>
            <div class="setting-item">
              <label>Break Duration (minutes)</label>
              <input type="number" value="${pomodoroState.breakDuration}" min="1" max="30" 
                onchange="pomodoroState.breakDuration = parseInt(this.value); resetTimer();">
            </div>
          </div>
        </div>

        <div class="pomodoro-tips">
          <h3>💡 Pomodoro Tips</h3>
          <ul>
            <li>🎯 Focus on ONE task during each pomodoro</li>
            <li>📵 Eliminate all distractions</li>
            <li>☕ Use breaks to rest, not work</li>
            <li>🔄 After 4 pomodoros, take a longer break (15-30 min)</li>
            <li>📝 Track what you accomplish each session</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Initialize
console.log('✅ Pomodoro timer loaded');
