// ==================== COMPLETE WORKING DASHBOARD ====================

function renderDashboardComplete() {
  // Get user stats from localStorage
  const stats = getUserStats();
  const recentActivity = getRecentActivity();
  const recommendations = getSmartRecommendations();
  const todayGoals = getTodayGoals();
  
  return `
    <div class="dashboard-page">
      <!-- Welcome Header -->
      <div class="dashboard-header">
        <div class="welcome-section">
          <h1>Welcome back, Aurenya! 🌊</h1>
          <p>Let's make today count. You're on a ${stats.streak} day streak!</p>
        </div>
        <div class="quick-actions">
          <button class="quick-btn" onclick="showSection('music')">
            <i class="fas fa-music"></i> Play Music
          </button>
          <button class="quick-btn" onclick="startPomodoro()">
            <i class="fas fa-clock"></i> Start Pomodoro
          </button>
          <button class="quick-btn" onclick="showSection('problems')">
            <i class="fas fa-question-circle"></i> Practice
          </button>
        </div>
      </div>

      <!-- Stats Overview -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #ff006e, #8338ec);">
            <i class="fas fa-star"></i>
          </div>
          <div class="stat-info">
            <h3>${stats.xp.toLocaleString()}</h3>
            <p>Total XP</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: ${stats.xpProgress}%"></div>
            </div>
            <span class="stat-detail">${stats.xpToNextLevel} XP to Level ${stats.level + 1}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #3a86ff, #00d9ff);">
            <i class="fas fa-fire"></i>
          </div>
          <div class="stat-info">
            <h3>${stats.streak} Days</h3>
            <p>Current Streak</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: ${(stats.streak / 30) * 100}%"></div>
            </div>
            <span class="stat-detail">Best: ${stats.bestStreak} days</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #06ffa5, #00d9ff);">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="stat-info">
            <h3>${stats.problemsSolved}</h3>
            <p>Problems Solved</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: ${(stats.problemsSolved / 3000) * 100}%"></div>
            </div>
            <span class="stat-detail">${3000 - stats.problemsSolved} remaining</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #ffbe0b, #ff006e);">
            <i class="fas fa-clock"></i>
          </div>
          <div class="stat-info">
            <h3>${stats.studyHours}h</h3>
            <p>Study Time</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: ${(stats.studyHours / 1000) * 100}%"></div>
            </div>
            <span class="stat-detail">This week: ${stats.weeklyHours}h</span>
          </div>
        </div>
      </div>

      <!-- Today's Goals -->
      <div class="section-card">
        <h2><i class="fas fa-bullseye"></i> Today's Goals</h2>
        <div class="goals-list">
          ${todayGoals.map(goal => `
            <div class="goal-item ${goal.completed ? 'completed' : ''}">
              <input type="checkbox" ${goal.completed ? 'checked' : ''} 
                     onchange="toggleGoal('${goal.id}')">
              <div class="goal-content">
                <h4>${goal.title}</h4>
                <p>${goal.description}</p>
              </div>
              <div class="goal-reward">
                <i class="fas fa-star"></i> ${goal.xp} XP
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Subject Progress -->
      <div class="section-card">
        <h2><i class="fas fa-chart-line"></i> Subject Progress</h2>
        <div class="subject-progress-grid">
          ${renderSubjectProgress('Physics', stats.physics, '#ff006e')}
          ${renderSubjectProgress('Chemistry', stats.chemistry, '#8338ec')}
          ${renderSubjectProgress('Maths', stats.maths, '#3a86ff')}
          ${renderSubjectProgress('Tech', stats.tech, '#06ffa5')}
        </div>
      </div>

      <!-- Smart Recommendations -->
      <div class="section-card">
        <h2><i class="fas fa-lightbulb"></i> Recommended for You</h2>
        <div class="recommendations-grid">
          ${recommendations.map(rec => `
            <div class="recommendation-card" onclick="showSection('${rec.section}')">
              <div class="rec-icon" style="background: ${rec.color};">
                <i class="${rec.icon}"></i>
              </div>
              <h3>${rec.title}</h3>
              <p>${rec.description}</p>
              <div class="rec-meta">
                <span><i class="fas fa-clock"></i> ${rec.duration}</span>
                <span><i class="fas fa-star"></i> ${rec.xp} XP</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="section-card">
        <h2><i class="fas fa-history"></i> Recent Activity</h2>
        <div class="activity-timeline">
          ${recentActivity.map(activity => `
            <div class="activity-item">
              <div class="activity-icon" style="background: ${activity.color};">
                <i class="${activity.icon}"></i>
              </div>
              <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
                <span class="activity-time">${activity.time}</span>
              </div>
              ${activity.xp ? `<div class="activity-xp">+${activity.xp} XP</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Weekly Calendar -->
      <div class="section-card">
        <h2><i class="fas fa-calendar-week"></i> This Week</h2>
        <div class="weekly-calendar">
          ${renderWeeklyCalendar(stats.weeklyActivity)}
        </div>
      </div>
    </div>
  `;
}

function renderSubjectProgress(name, data, color) {
  return `
    <div class="subject-progress-card">
      <div class="subject-header">
        <h3>${name}</h3>
        <span class="progress-percent">${data.progress}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${data.progress}%; background: ${color};"></div>
      </div>
      <div class="subject-stats">
        <span><i class="fas fa-book"></i> ${data.chaptersCompleted}/${data.totalChapters}</span>
        <span><i class="fas fa-check"></i> ${data.problemsSolved} solved</span>
      </div>
    </div>
  `;
}

function renderWeeklyCalendar(weeklyData) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return `
    <div class="calendar-grid">
      ${days.map((day, index) => {
        const dayData = weeklyData[index];
        const intensity = Math.min(dayData.hours / 5, 1); // Max 5 hours
        return `
          <div class="calendar-day">
            <div class="day-label">${day}</div>
            <div class="day-activity" style="opacity: ${intensity}; background: var(--primary);">
              ${dayData.hours > 0 ? `${dayData.hours}h` : ''}
            </div>
            <div class="day-stats">
              ${dayData.problems > 0 ? `<i class="fas fa-check"></i> ${dayData.problems}` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Helper Functions
function getUserStats() {
  // Get from localStorage or use defaults
  const saved = localStorage.getItem('userStats');
  if (saved) return JSON.parse(saved);
  
  return {
    xp: 1250,
    level: 5,
    xpProgress: 65,
    xpToNextLevel: 350,
    streak: 7,
    bestStreak: 15,
    problemsSolved: 234,
    studyHours: 45,
    weeklyHours: 12,
    physics: { progress: 35, chaptersCompleted: 18, totalChapters: 52, problemsSolved: 89 },
    chemistry: { progress: 28, chaptersCompleted: 13, totalChapters: 47, problemsSolved: 67 },
    maths: { progress: 42, chaptersCompleted: 26, totalChapters: 62, problemsSolved: 78 },
    tech: { progress: 15, chaptersCompleted: 15, totalChapters: 100, problemsSolved: 0 },
    weeklyActivity: [
      { hours: 2, problems: 15 },
      { hours: 3, problems: 22 },
      { hours: 1.5, problems: 10 },
      { hours: 2.5, problems: 18 },
      { hours: 3, problems: 25 },
      { hours: 0, problems: 0 },
      { hours: 0, problems: 0 }
    ]
  };
}

function getTodayGoals() {
  return [
    {
      id: 'goal1',
      title: 'Complete 10 Physics Problems',
      description: 'Focus on Mechanics - Kinematics',
      xp: 50,
      completed: false
    },
    {
      id: 'goal2',
      title: 'Study for 2 Hours',
      description: 'Use Pomodoro technique',
      xp: 100,
      completed: false
    },
    {
      id: 'goal3',
      title: 'Review Flashcards',
      description: 'Chemistry - Organic reactions',
      xp: 30,
      completed: false
    },
    {
      id: 'goal4',
      title: 'Watch 1 Concept Video',
      description: 'Calculus - Integration',
      xp: 40,
      completed: false
    }
  ];
}

function getSmartRecommendations() {
  return [
    {
      section: 'physics',
      title: 'Kinematics Practice',
      description: 'You struggled with this last time. Let\'s master it!',
      icon: 'fas fa-atom',
      color: 'linear-gradient(135deg, #ff006e, #8338ec)',
      duration: '30 min',
      xp: 75
    },
    {
      section: 'chemistry',
      title: 'Organic Reactions',
      description: 'Complete the reaction mechanisms chapter',
      icon: 'fas fa-flask',
      color: 'linear-gradient(135deg, #8338ec, #3a86ff)',
      duration: '45 min',
      xp: 100
    },
    {
      section: 'maths',
      title: 'Integration Techniques',
      description: 'Practice advanced integration methods',
      icon: 'fas fa-square-root-alt',
      color: 'linear-gradient(135deg, #3a86ff, #00d9ff)',
      duration: '40 min',
      xp: 90
    },
    {
      section: 'mock-tests',
      title: 'Weekly Mock Test',
      description: 'Test your knowledge across all subjects',
      icon: 'fas fa-clipboard-check',
      color: 'linear-gradient(135deg, #06ffa5, #00d9ff)',
      duration: '3 hours',
      xp: 500
    }
  ];
}

function getRecentActivity() {
  return [
    {
      title: 'Completed Chapter',
      description: 'Physics - Laws of Motion',
      icon: 'fas fa-check-circle',
      color: 'linear-gradient(135deg, #06ffa5, #00d9ff)',
      time: '2 hours ago',
      xp: 100
    },
    {
      title: 'Solved Problems',
      description: '15 problems in Calculus',
      icon: 'fas fa-brain',
      color: 'linear-gradient(135deg, #3a86ff, #00d9ff)',
      time: '5 hours ago',
      xp: 75
    },
    {
      title: 'Study Session',
      description: '2 hours of focused study',
      icon: 'fas fa-clock',
      color: 'linear-gradient(135deg, #ffbe0b, #ff006e)',
      time: 'Yesterday',
      xp: 100
    },
    {
      title: 'Flashcard Review',
      description: 'Reviewed 50 chemistry flashcards',
      icon: 'fas fa-layer-group',
      color: 'linear-gradient(135deg, #8338ec, #3a86ff)',
      time: '2 days ago',
      xp: 50
    },
    {
      title: 'Mock Test',
      description: 'Scored 85% in Physics mock test',
      icon: 'fas fa-trophy',
      color: 'linear-gradient(135deg, #ff006e, #8338ec)',
      time: '3 days ago',
      xp: 250
    }
  ];
}

function toggleGoal(goalId) {
  // Toggle goal completion
  const goals = getTodayGoals();
  const goal = goals.find(g => g.id === goalId);
  if (goal) {
    goal.completed = !goal.completed;
    if (goal.completed) {
      // Add XP
      addXP(goal.xp);
      showNotification(`+${goal.xp} XP! Goal completed! 🎉`);
    }
  }
}

function addXP(amount) {
  const stats = getUserStats();
  stats.xp += amount;
  localStorage.setItem('userStats', JSON.stringify(stats));
  updateStatsDisplay();
}

function updateStatsDisplay() {
  const stats = getUserStats();
  document.getElementById('xp').textContent = stats.xp;
  document.getElementById('level').textContent = stats.level;
  document.getElementById('streak').textContent = stats.streak;
}

function showNotification(message) {
  // Create notification
  const notification = document.createElement('div');
  notification.className = 'achievement-notification';
  notification.innerHTML = `
    <i class="fas fa-star"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

console.log('✅ Complete Dashboard Loaded!');
