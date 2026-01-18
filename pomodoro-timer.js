// ==================== POMODORO TIMER - REAL WORKING TIMER ====================

class PomodoroTimer {
  constructor() {
    this.workTime = 25 * 60; // 25 minutes in seconds
    this.shortBreak = 5 * 60; // 5 minutes
    this.longBreak = 15 * 60; // 15 minutes
    this.currentTime = this.workTime;
    this.isRunning = false;
    this.isWorkSession = true;
    this.sessionsCompleted = 0;
    this.interval = null;
    this.tasks = this.loadTasks();
  }

  loadTasks() {
    const saved = localStorage.getItem('pomodoro_tasks');
    return saved ? JSON.parse(saved) : [
      { id: 1, text: 'Study Physics - Newton\'s Laws', completed: false, pomodoros: 2 },
      { id: 2, text: 'Chemistry - Organic Reactions', completed: false, pomodoros: 3 },
      { id: 3, text: 'Maths - Calculus Practice', completed: false, pomodoros: 2 }
    ];
  }

  saveTasks() {
    localStorage.setItem('pomodoro_tasks', JSON.stringify(this.tasks));
  }

  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.currentTime--;
      this.updateDisplay();
      
      if (this.currentTime <= 0) {
        this.complete();
      }
    }, 1000);
    
    this.updateButtons();
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.updateButtons();
  }

  reset() {
    this.pause();
    this.currentTime = this.isWorkSession ? this.workTime : this.shortBreak;
    this.updateDisplay();
  }

  complete() {
    this.pause();
    
    if (this.isWorkSession) {
      this.sessionsCompleted++;
      
      // Play completion sound (optional)
      this.playSound();
      
      // Switch to break
      if (this.sessionsCompleted % 4 === 0) {
        this.currentTime = this.longBreak;
        alert('🎉 Great work! Take a long 15-minute break!');
      } else {
        this.currentTime = this.shortBreak;
        alert('✅ Session complete! Take a 5-minute break!');
      }
      this.isWorkSession = false;
    } else {
      // Switch back to work
      this.currentTime = this.workTime;
      this.isWorkSession = true;
      alert('💪 Break over! Ready for another session?');
    }
    
    this.updateDisplay();
    this.updateStats();
  }

  playSound() {
    // Simple beep sound
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
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  updateDisplay() {
    const display = document.getElementById('pomodoro-display');
    if (display) {
      display.textContent = this.formatTime(this.currentTime);
    }
    
    const status = document.getElementById('pomodoro-status');
    if (status) {
      status.textContent = this.isWorkSession ? '🎯 Work Session' : '☕ Break Time';
    }
    
    // Update progress circle
    const circle = document.getElementById('progress-circle');
    if (circle) {
      const total = this.isWorkSession ? this.workTime : (this.sessionsCompleted % 4 === 0 ? this.longBreak : this.shortBreak);
      const percentage = ((total - this.currentTime) / total) * 100;
      const circumference = 2 * Math.PI * 120;
      const offset = circumference - (percentage / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  }

  updateButtons() {
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    
    if (startBtn && pauseBtn) {
      if (this.isRunning) {
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
      } else {
        startBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
      }
    }
  }

  updateStats() {
    const stats = document.getElementById('sessions-completed');
    if (stats) {
      stats.textContent = this.sessionsCompleted;
    }
  }

  addTask(text) {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
      pomodoros: 1
    };
    this.tasks.unshift(task);
    this.saveTasks();
    this.renderTasks();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.renderTasks();
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.renderTasks();
  }

  renderTasks() {
    const container = document.getElementById('task-list');
    if (!container) return;

    container.innerHTML = this.tasks.map(task => `
      <div class="task-item ${task.completed ? 'completed' : ''}">
        <input type="checkbox" 
               ${task.completed ? 'checked' : ''} 
               onchange="pomodoroTimer.toggleTask(${task.id})">
        <span class="task-text">${task.text}</span>
        <span class="task-pomodoros">${task.pomodoros} 🍅</span>
        <button onclick="pomodoroTimer.deleteTask(${task.id})" class="delete-task-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `).join('');
  }

  render() {
    return `
      <div class="pomodoro-container">
        <h1 class="pomodoro-title">🍅 Pomodoro Timer</h1>
        <p class="pomodoro-subtitle">25 min work • 5 min break • Stay focused!</p>

        <!-- Timer Display -->
        <div class="timer-display">
          <svg class="progress-ring" width="300" height="300">
            <circle class="progress-ring-bg" cx="150" cy="150" r="120" />
            <circle id="progress-circle" class="progress-ring-circle" cx="150" cy="150" r="120" />
          </svg>
          <div class="timer-content">
            <div id="pomodoro-status" class="timer-status">🎯 Work Session</div>
            <div id="pomodoro-display" class="timer-time">${this.formatTime(this.currentTime)}</div>
          </div>
        </div>

        <!-- Controls -->
        <div class="timer-controls">
          <button id="start-btn" onclick="pomodoroTimer.start()" class="timer-btn start-btn">
            <i class="fas fa-play"></i> Start
          </button>
          <button id="pause-btn" onclick="pomodoroTimer.pause()" class="timer-btn pause-btn" style="display: none;">
            <i class="fas fa-pause"></i> Pause
          </button>
          <button onclick="pomodoroTimer.reset()" class="timer-btn reset-btn">
            <i class="fas fa-redo"></i> Reset
          </button>
        </div>

        <!-- Stats -->
        <div class="pomodoro-stats">
          <div class="stat-box">
            <h3 id="sessions-completed">${this.sessionsCompleted}</h3>
            <p>Sessions Today</p>
          </div>
          <div class="stat-box">
            <h3>${Math.floor(this.sessionsCompleted * 25 / 60)}h ${(this.sessionsCompleted * 25) % 60}m</h3>
            <p>Focus Time</p>
          </div>
          <div class="stat-box">
            <h3>${this.tasks.filter(t => t.completed).length}/${this.tasks.length}</h3>
            <p>Tasks Done</p>
          </div>
        </div>

        <!-- Tasks -->
        <div class="tasks-section">
          <h3>📝 Today's Tasks</h3>
          <div class="add-task">
            <input type="text" id="new-task-input" placeholder="Add a new task..." 
                   onkeypress="if(event.key==='Enter') pomodoroTimer.addTask(this.value); this.value='';">
            <button onclick="const input = document.getElementById('new-task-input'); pomodoroTimer.addTask(input.value); input.value='';">
              <i class="fas fa-plus"></i> Add
            </button>
          </div>
          <div id="task-list" class="task-list"></div>
        </div>

        <!-- Tips -->
        <div class="pomodoro-tips">
          <h3>💡 Pomodoro Tips</h3>
          <ul>
            <li>Work for 25 minutes without distractions</li>
            <li>Take a 5-minute break after each session</li>
            <li>After 4 sessions, take a longer 15-minute break</li>
            <li>Use breaks to stretch, hydrate, or relax</li>
            <li>Track your tasks and celebrate progress!</li>
          </ul>
        </div>
      </div>

      <style>
        .pomodoro-container {
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .pomodoro-title {
          font-size: 48px;
          text-align: center;
          background: linear-gradient(135deg, #ff006e, #8338ec);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .pomodoro-subtitle {
          text-align: center;
          color: #888;
          margin-bottom: 40px;
        }

        .timer-display {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto 40px;
        }

        .progress-ring {
          transform: rotate(-90deg);
        }

        .progress-ring-bg {
          fill: none;
          stroke: #333;
          stroke-width: 8;
        }

        .progress-ring-circle {
          fill: none;
          stroke: url(#gradient);
          stroke-width: 8;
          stroke-linecap: round;
          stroke-dasharray: 754;
          stroke-dashoffset: 754;
          transition: stroke-dashoffset 1s linear;
        }

        .timer-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .timer-status {
          font-size: 20px;
          margin-bottom: 10px;
          color: #888;
        }

        .timer-time {
          font-size: 64px;
          font-weight: bold;
          font-family: 'Courier New', monospace;
        }

        .timer-controls {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 40px;
        }

        .timer-btn {
          padding: 15px 40px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }

        .start-btn {
          background: linear-gradient(135deg, #06ffa5, #00d4ff);
        }

        .pause-btn {
          background: linear-gradient(135deg, #ff006e, #8338ec);
        }

        .reset-btn {
          background: #333;
        }

        .timer-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .pomodoro-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-box {
          background: rgba(26, 26, 26, 0.9);
          border: 2px solid #333;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
        }

        .stat-box h3 {
          font-size: 36px;
          color: #06ffa5;
          margin-bottom: 10px;
        }

        .tasks-section {
          background: rgba(26, 26, 26, 0.9);
          border: 2px solid #333;
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
        }

        .tasks-section h3 {
          margin-bottom: 20px;
        }

        .add-task {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .add-task input {
          flex: 1;
          padding: 12px;
          background: #1a1a1a;
          border: 2px solid #333;
          border-radius: 8px;
          color: white;
        }

        .add-task button {
          padding: 12px 25px;
          background: linear-gradient(135deg, #06ffa5, #00d4ff);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
        }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .task-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #1a1a1a;
          border: 2px solid #333;
          border-radius: 10px;
        }

        .task-item.completed {
          opacity: 0.6;
        }

        .task-item.completed .task-text {
          text-decoration: line-through;
        }

        .task-text {
          flex: 1;
        }

        .task-pomodoros {
          color: #888;
        }

        .delete-task-btn {
          background: #ff006e;
          border: none;
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
        }

        .pomodoro-tips {
          background: rgba(26, 26, 26, 0.9);
          border: 2px solid #333;
          border-radius: 15px;
          padding: 30px;
        }

        .pomodoro-tips ul {
          list-style: none;
          padding: 0;
        }

        .pomodoro-tips li {
          padding: 10px 0;
          padding-left: 30px;
          position: relative;
        }

        .pomodoro-tips li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #06ffa5;
          font-weight: bold;
        }
      </style>
    `;
  }
}

// Initialize
const pomodoroTimer = new PomodoroTimer();

console.log('🍅 Pomodoro Timer Loaded!');
