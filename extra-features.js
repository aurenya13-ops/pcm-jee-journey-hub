// ==================== EXTRA FEATURES ====================

// 1. DARK MODE TOGGLE (in addition to themes)
let isDarkMode = true;

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('light-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// 2. KEYBOARD SHORTCUTS
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K for search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('global-search').focus();
  }
  
  // Ctrl/Cmd + T for theme change
  if ((e.ctrlKey || e.metaKey) && e.key === 't') {
    e.preventDefault();
    nextTheme();
  }
  
  // Ctrl/Cmd + M for music player
  if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
    e.preventDefault();
    toggleMusicPlayer();
  }
  
  // Ctrl/Cmd + P for Pomodoro
  if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    e.preventDefault();
    startPomodoro();
  }
  
  // Escape to close modals/players
  if (e.key === 'Escape') {
    const playerBody = document.getElementById('player-body');
    if (!playerBody.classList.contains('collapsed')) {
      toggleMusicPlayer();
    }
  }
});

// 3. PROGRESS PERSISTENCE
function saveProgress() {
  const progress = {
    xp: userXP,
    level: userLevel,
    streak: userStreak,
    lastVisit: new Date().toISOString()
  };
  localStorage.setItem('userProgress', JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem('userProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    userXP = progress.xp || 0;
    userLevel = progress.level || 1;
    userStreak = progress.streak || 0;
    
    // Check if streak should continue
    const lastVisit = new Date(progress.lastVisit);
    const today = new Date();
    const daysDiff = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 1) {
      userStreak++;
    } else if (daysDiff > 1) {
      userStreak = 1;
    }
    
    updateUI();
  }
}

// 4. NOTIFICATION SYSTEM
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// 5. DAILY GOALS TRACKER
let dailyGoals = {
  studyTime: 0,
  problemsSolved: 0,
  videosWatched: 0,
  target: {
    studyTime: 120, // minutes
    problemsSolved: 10,
    videosWatched: 3
  }
};

function updateDailyGoal(type, increment = 1) {
  dailyGoals[type] += increment;
  localStorage.setItem('dailyGoals', JSON.stringify(dailyGoals));
  
  // Check if goal completed
  if (dailyGoals[type] >= dailyGoals.target[type]) {
    showNotification(`🎉 Daily ${type} goal completed!`, 'success');
    addXP(50);
  }
}

// 6. QUICK NOTES
let quickNotes = [];

function addQuickNote(note) {
  quickNotes.push({
    id: Date.now(),
    text: note,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('quickNotes', JSON.stringify(quickNotes));
  showNotification('Note saved!', 'success');
}

function getQuickNotes() {
  const saved = localStorage.getItem('quickNotes');
  if (saved) {
    quickNotes = JSON.parse(saved);
  }
  return quickNotes;
}

// 7. STUDY SESSION TIMER
let studySessionStart = null;
let totalStudyTime = parseInt(localStorage.getItem('totalStudyTime')) || 0;

function startStudySession() {
  studySessionStart = Date.now();
  showNotification('Study session started! 📚', 'info');
}

function endStudySession() {
  if (studySessionStart) {
    const duration = Math.floor((Date.now() - studySessionStart) / 60000); // minutes
    totalStudyTime += duration;
    localStorage.setItem('totalStudyTime', totalStudyTime);
    updateDailyGoal('studyTime', duration);
    addXP(duration * 2);
    showNotification(`Session ended! You studied for ${duration} minutes. +${duration * 2} XP`, 'success');
    studySessionStart = null;
  }
}

// Auto-start study session on page load
window.addEventListener('load', () => {
  loadProgress();
  startStudySession();
});

// Auto-end study session on page unload
window.addEventListener('beforeunload', () => {
  endStudySession();
  saveProgress();
});

// 8. FULLSCREEN MODE
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    showNotification('Fullscreen mode activated', 'info');
  } else {
    document.exitFullscreen();
    showNotification('Fullscreen mode deactivated', 'info');
  }
}

// 9. EXPORT PROGRESS
function exportProgress() {
  const data = {
    progress: {
      xp: userXP,
      level: userLevel,
      streak: userStreak,
      totalStudyTime: totalStudyTime
    },
    goals: dailyGoals,
    notes: quickNotes,
    theme: currentThemeIndex
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pcm-hub-progress-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  
  showNotification('Progress exported!', 'success');
}

// 10. IMPORT PROGRESS
function importProgress(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      
      if (data.progress) {
        userXP = data.progress.xp;
        userLevel = data.progress.level;
        userStreak = data.progress.streak;
        totalStudyTime = data.progress.totalStudyTime;
        updateUI();
      }
      
      if (data.goals) dailyGoals = data.goals;
      if (data.notes) quickNotes = data.notes;
      if (data.theme !== undefined) applyTheme(data.theme);
      
      saveProgress();
      showNotification('Progress imported successfully!', 'success');
    } catch (err) {
      showNotification('Failed to import progress', 'error');
    }
  };
  reader.readAsText(file);
}

// Make functions globally accessible
window.toggleDarkMode = toggleDarkMode;
window.showNotification = showNotification;
window.updateDailyGoal = updateDailyGoal;
window.addQuickNote = addQuickNote;
window.getQuickNotes = getQuickNotes;
window.startStudySession = startStudySession;
window.endStudySession = endStudySession;
window.toggleFullscreen = toggleFullscreen;
window.exportProgress = exportProgress;
window.importProgress = importProgress;

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    top: 80px;
    right: 20px;
    background: var(--bg-secondary);
    border: 2px solid var(--primary);
    border-radius: 12px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 10000;
    max-width: 350px;
  }
  
  .notification.show {
    transform: translateX(0);
  }
  
  .notification i {
    font-size: 20px;
  }
  
  .notification-success {
    border-color: var(--success);
  }
  
  .notification-success i {
    color: var(--success);
  }
  
  .notification-error {
    border-color: var(--danger);
  }
  
  .notification-error i {
    color: var(--danger);
  }
  
  .notification-info {
    border-color: var(--primary);
  }
  
  .notification-info i {
    color: var(--primary);
  }
`;
document.head.appendChild(notificationStyles);

console.log('🚀 Extra features loaded!');
console.log('Keyboard shortcuts:');
console.log('  Ctrl/Cmd + K: Focus search');
console.log('  Ctrl/Cmd + T: Change theme');
console.log('  Ctrl/Cmd + M: Toggle music player');
console.log('  Ctrl/Cmd + P: Start Pomodoro');
console.log('  Esc: Close player');
