// Gamification System
let userXP = parseInt(localStorage.getItem('userXP')) || 0;
let userLevel = parseInt(localStorage.getItem('userLevel')) || 1;
let userStreak = parseInt(localStorage.getItem('userStreak')) || 0;

function addXP(amount) {
  userXP += amount;
  checkLevelUp();
  updateUserStats();
  saveUserData();
}

function checkLevelUp() {
  const xpNeeded = userLevel * 100;
  if (userXP >= xpNeeded) {
    userLevel++;
    userXP -= xpNeeded;
    showLevelUpNotification();
  }
}

function showLevelUpNotification() {
  alert('Level Up! You are now Level ' + userLevel);
}

function updateUserStats() {
  const xpEl = document.getElementById('user-xp');
  const levelEl = document.getElementById('user-level');
  const streakEl = document.getElementById('user-streak');
  
  if (xpEl) xpEl.textContent = userXP;
  if (levelEl) levelEl.textContent = userLevel;
  if (streakEl) streakEl.textContent = userStreak;
}

function saveUserData() {
  localStorage.setItem('userXP', userXP);
  localStorage.setItem('userLevel', userLevel);
  localStorage.setItem('userStreak', userStreak);
}

function updateStreak() {
  const lastVisit = localStorage.getItem('lastVisit');
  const today = new Date().toDateString();
  
  if (lastVisit !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastVisit === yesterday.toDateString()) {
      userStreak++;
    } else {
      userStreak = 1;
    }
    
    localStorage.setItem('lastVisit', today);
    saveUserData();
    updateUserStats();
  }
}

window.addXP = addXP;

document.addEventListener('DOMContentLoaded', () => {
  updateUserStats();
  updateStreak();
});
