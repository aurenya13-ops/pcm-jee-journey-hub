// ==================== DOPAMINE ENGINE - ADDICTION SYSTEM ====================

// Dopamine State
let dopamineState = {
  dailyRewards: {
    lastClaim: null,
    streak: 0,
    available: true
  },
  achievements: [],
  recentRewards: [],
  combo: 0,
  lastAction: null
};

// Load dopamine state
function loadDopamineState() {
  const saved = localStorage.getItem('dopamine_state');
  if (saved) {
    dopamineState = JSON.parse(saved);
  }
  checkDailyReward();
}

// Save dopamine state
function saveDopamineState() {
  localStorage.setItem('dopamine_state', JSON.stringify(dopamineState));
}

// ==================== XP ANIMATIONS ====================

function showXPGain(amount, x, y) {
  const xpElement = document.createElement('div');
  xpElement.className = 'xp-popup';
  xpElement.innerHTML = `+${amount} XP`;
  xpElement.style.left = x + 'px';
  xpElement.style.top = y + 'px';
  
  document.body.appendChild(xpElement);
  
  setTimeout(() => {
    xpElement.classList.add('animate');
  }, 10);
  
  setTimeout(() => {
    xpElement.remove();
  }, 2000);
}

// Enhanced addXP with animations
function addXPWithAnimation(amount, source = 'action') {
  const oldXP = userData.xp;
  const oldLevel = userData.level;
  
  userData.xp += amount;
  
  // Check combo
  const now = Date.now();
  if (dopamineState.lastAction && (now - dopamineState.lastAction) < 5000) {
    dopamineState.combo++;
    if (dopamineState.combo >= 3) {
      const bonus = Math.floor(amount * 0.5);
      userData.xp += bonus;
      showComboBonus(dopamineState.combo, bonus);
    }
  } else {
    dopamineState.combo = 1;
  }
  dopamineState.lastAction = now;
  
  // Level up check
  const xpForNextLevel = userData.level * 1000;
  if (userData.xp >= xpForNextLevel) {
    userData.level++;
    showLevelUpExplosion();
    playSound('levelup');
  }
  
  // Animate XP counter
  animateNumber('xp', oldXP, userData.xp, 1000);
  
  // Show floating XP
  const rect = document.getElementById('xp').getBoundingClientRect();
  showXPGain(amount, rect.left, rect.top);
  
  // Add to recent rewards
  dopamineState.recentRewards.unshift({
    amount,
    source,
    time: Date.now()
  });
  if (dopamineState.recentRewards.length > 10) {
    dopamineState.recentRewards.pop();
  }
  
  updateStatsDisplay();
  saveUserData();
  saveDopamineState();
}

// ==================== COMBO SYSTEM ====================

function showComboBonus(combo, bonus) {
  const comboElement = document.createElement('div');
  comboElement.className = 'combo-popup';
  comboElement.innerHTML = `
    <div class="combo-text">🔥 ${combo}x COMBO!</div>
    <div class="combo-bonus">+${bonus} BONUS XP</div>
  `;
  
  document.body.appendChild(comboElement);
  
  setTimeout(() => {
    comboElement.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    comboElement.classList.remove('show');
    setTimeout(() => comboElement.remove(), 500);
  }, 3000);
  
  playSound('combo');
}

// ==================== LEVEL UP EXPLOSION ====================

function showLevelUpExplosion() {
  const explosion = document.createElement('div');
  explosion.className = 'level-up-explosion';
  explosion.innerHTML = `
    <div class="explosion-content">
      <div class="explosion-icon">🎉</div>
      <div class="explosion-text">LEVEL UP!</div>
      <div class="explosion-level">Level ${userData.level}</div>
      <div class="explosion-subtitle">You're getting stronger!</div>
    </div>
  `;
  
  document.body.appendChild(explosion);
  
  // Create confetti
  for (let i = 0; i < 50; i++) {
    createConfetti(explosion);
  }
  
  setTimeout(() => {
    explosion.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    explosion.classList.remove('show');
    setTimeout(() => explosion.remove(), 500);
  }, 4000);
}

function createConfetti(container) {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * 100 + '%';
  confetti.style.animationDelay = Math.random() * 3 + 's';
  confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)];
  container.appendChild(confetti);
}

// ==================== DAILY REWARDS ====================

function checkDailyReward() {
  const today = new Date().toDateString();
  const lastClaim = dopamineState.dailyRewards.lastClaim;
  
  if (lastClaim !== today) {
    dopamineState.dailyRewards.available = true;
    
    // Check streak
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastClaim === yesterday.toDateString()) {
      dopamineState.dailyRewards.streak++;
    } else if (lastClaim) {
      dopamineState.dailyRewards.streak = 1;
    } else {
      dopamineState.dailyRewards.streak = 1;
    }
    
    saveDopamineState();
    showDailyRewardNotification();
  }
}

function showDailyRewardNotification() {
  if (!dopamineState.dailyRewards.available) return;
  
  setTimeout(() => {
    const notification = document.createElement('div');
    notification.className = 'daily-reward-notification';
    notification.innerHTML = `
      <div class="daily-reward-content">
        <div class="daily-reward-icon">🎁</div>
        <div class="daily-reward-text">Daily Reward Available!</div>
        <button class="daily-reward-btn" onclick="claimDailyReward()">
          Claim Now
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
  }, 2000);
}

function claimDailyReward() {
  if (!dopamineState.dailyRewards.available) {
    showNotification('⚠️ Already claimed today!', 'warning');
    return;
  }
  
  const baseReward = 100;
  const streakBonus = dopamineState.dailyRewards.streak * 50;
  const totalReward = baseReward + streakBonus;
  
  // Show reward animation
  const rewardPopup = document.createElement('div');
  rewardPopup.className = 'reward-popup';
  rewardPopup.innerHTML = `
    <div class="reward-popup-content">
      <div class="reward-icon">🎁</div>
      <div class="reward-title">Daily Reward!</div>
      <div class="reward-amount">+${totalReward} XP</div>
      <div class="reward-streak">🔥 ${dopamineState.dailyRewards.streak} Day Streak</div>
      ${streakBonus > 0 ? `<div class="reward-bonus">+${streakBonus} Streak Bonus!</div>` : ''}
      <button class="reward-claim-btn" onclick="this.parentElement.parentElement.remove()">
        Awesome!
      </button>
    </div>
  `;
  
  document.body.appendChild(rewardPopup);
  
  setTimeout(() => {
    rewardPopup.classList.add('show');
  }, 10);
  
  // Give reward
  addXPWithAnimation(totalReward, 'daily_reward');
  
  dopamineState.dailyRewards.available = false;
  dopamineState.dailyRewards.lastClaim = new Date().toDateString();
  saveDopamineState();
  
  // Remove notification
  const notification = document.querySelector('.daily-reward-notification');
  if (notification) {
    notification.remove();
  }
  
  playSound('reward');
}

// ==================== ACHIEVEMENTS ====================

const ACHIEVEMENTS = {
  first_chapter: {
    id: 'first_chapter',
    name: 'First Steps',
    description: 'Complete your first chapter',
    icon: '🎯',
    xp: 50
  },
  streak_7: {
    id: 'streak_7',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    xp: 200
  },
  streak_30: {
    id: 'streak_30',
    name: 'Month Master',
    description: 'Maintain a 30-day streak',
    icon: '💪',
    xp: 1000
  },
  level_10: {
    id: 'level_10',
    name: 'Rising Star',
    description: 'Reach Level 10',
    icon: '⭐',
    xp: 500
  },
  chapters_10: {
    id: 'chapters_10',
    name: 'Knowledge Seeker',
    description: 'Complete 10 chapters',
    icon: '📚',
    xp: 300
  },
  chapters_50: {
    id: 'chapters_50',
    name: 'Scholar',
    description: 'Complete 50 chapters',
    icon: '🎓',
    xp: 1500
  },
  problems_100: {
    id: 'problems_100',
    name: 'Problem Solver',
    description: 'Solve 100 problems',
    icon: '🧩',
    xp: 500
  },
  perfect_quiz: {
    id: 'perfect_quiz',
    name: 'Perfect Score',
    description: 'Get 100% on a quiz',
    icon: '💯',
    xp: 250
  }
};

function checkAchievements() {
  const toUnlock = [];
  
  // Check each achievement
  if (userData.completedChapters.length >= 1 && !hasAchievement('first_chapter')) {
    toUnlock.push('first_chapter');
  }
  if (userData.streak >= 7 && !hasAchievement('streak_7')) {
    toUnlock.push('streak_7');
  }
  if (userData.streak >= 30 && !hasAchievement('streak_30')) {
    toUnlock.push('streak_30');
  }
  if (userData.level >= 10 && !hasAchievement('level_10')) {
    toUnlock.push('level_10');
  }
  if (userData.completedChapters.length >= 10 && !hasAchievement('chapters_10')) {
    toUnlock.push('chapters_10');
  }
  if (userData.completedChapters.length >= 50 && !hasAchievement('chapters_50')) {
    toUnlock.push('chapters_50');
  }
  if (userData.completedProblems.length >= 100 && !hasAchievement('problems_100')) {
    toUnlock.push('problems_100');
  }
  
  // Unlock achievements
  toUnlock.forEach(id => unlockAchievement(id));
}

function hasAchievement(id) {
  return dopamineState.achievements.includes(id);
}

function unlockAchievement(id) {
  const achievement = ACHIEVEMENTS[id];
  if (!achievement) return;
  
  dopamineState.achievements.push(id);
  saveDopamineState();
  
  // Show achievement popup
  const popup = document.createElement('div');
  popup.className = 'achievement-popup';
  popup.innerHTML = `
    <div class="achievement-popup-content">
      <div class="achievement-badge">
        <div class="achievement-icon">${achievement.icon}</div>
      </div>
      <div class="achievement-info">
        <div class="achievement-unlocked">Achievement Unlocked!</div>
        <div class="achievement-name">${achievement.name}</div>
        <div class="achievement-desc">${achievement.description}</div>
        <div class="achievement-xp">+${achievement.xp} XP</div>
      </div>
    </div>
  `;
  
  document.body.appendChild(popup);
  
  setTimeout(() => {
    popup.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.remove(), 500);
  }, 5000);
  
  addXPWithAnimation(achievement.xp, 'achievement');
  playSound('achievement');
}

// ==================== NUMBER ANIMATION ====================

function animateNumber(elementId, start, end, duration) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// ==================== SOUND EFFECTS ====================

const SOUNDS = {
  levelup: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0pBSh+zPDhkj4KFV+16+qnVRQLRp/g8r5sIQUrgs/y2Ik2CBhkuezooVARDEyl4fG5ZRwFNo3V7859KQUofsz',
  combo: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0pBSh+zPDhkj4KFV+16+qnVRQLRp/g8r5sIQUrgs/y2Ik2CBhkuezooVARDEyl4fG5ZRwFNo3V7859KQUofsz',
  reward: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0pBSh+zPDhkj4KFV+16+qnVRQLRp/g8r5sIQUrgs/y2Ik2CBhkuezooVARDEyl4fG5ZRwFNo3V7859KQUofsz',
  achievement: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0pBSh+zPDhkj4KFV+16+qnVRQLRp/g8r5sIQUrgs/y2Ik2CBhkuezooVARDEyl4fG5ZRwFNo3V7859KQUofsz'
};

function playSound(type) {
  try {
    const audio = new Audio(SOUNDS[type]);
    audio.volume = 0.3;
    audio.play().catch(() => {}); // Ignore errors
  } catch (e) {
    // Silently fail
  }
}

// ==================== INITIALIZE ====================

window.addEventListener('DOMContentLoaded', () => {
  loadDopamineState();
  checkAchievements();
});

// Override original addXP
if (typeof window !== 'undefined') {
  window.addXP = addXPWithAnimation;
}

console.log('✅ Dopamine Engine loaded - Addiction mode activated!');
