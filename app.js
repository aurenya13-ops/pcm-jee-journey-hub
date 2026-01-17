// ==================== MAIN APP LOGIC - OCEAN LEVEL ====================

// Global State
let currentSection = 'dashboard';
let userData = {
  xp: 0,
  level: 1,
  streak: 0,
  completedChapters: [],
  completedProblems: [],
  notes: [],
  progress: {
    physics: 0,
    chemistry: 0,
    maths: 0,
    tech: 0
  }
};

// Load user data from localStorage
function loadUserData() {
  const saved = localStorage.getItem('pcm_user_data');
  if (saved) {
    userData = JSON.parse(saved);
    updateStatsDisplay();
  }
}

// Save user data
function saveUserData() {
  localStorage.setItem('pcm_user_data', JSON.stringify(userData));
}

// Update stats display
function updateStatsDisplay() {
  document.getElementById('xp').textContent = userData.xp;
  document.getElementById('level').textContent = userData.level;
  document.getElementById('streak').textContent = userData.streak;
}

// Add XP
function addXP(amount) {
  userData.xp += amount;
  
  // Level up logic
  const xpForNextLevel = userData.level * 1000;
  if (userData.xp >= xpForNextLevel) {
    userData.level++;
    showNotification(`🎉 Level Up! You're now Level ${userData.level}!`, 'success');
  }
  
  updateStatsDisplay();
  saveUserData();
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ==================== NAVIGATION ====================

function showSection(section) {
  currentSection = section;
  
  // Update active button
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (event && event.target) {
    event.target.classList.add('active');
  }
  
  // Render section
  const content = document.getElementById('main-content');
  
  switch(section) {
    case 'dashboard':
      content.innerHTML = renderDashboard();
      break;
    case 'physics':
      content.innerHTML = renderPhysics();
      break;
    case 'chemistry':
      content.innerHTML = renderChemistry();
      break;
    case 'maths':
      content.innerHTML = renderMaths();
      break;
    case 'tech':
      content.innerHTML = renderTech();
      break;
    case 'problems':
      content.innerHTML = renderProblems();
      break;
    case 'mock-tests':
      content.innerHTML = renderMockTests();
      break;
    case 'flashcards':
      content.innerHTML = renderFlashcards();
      break;
    case 'music':
      content.innerHTML = '<div class="coming-soon"><i class="fas fa-music"></i><h2>Music Player</h2><p>Use the floating player on the right!</p></div>';
      break;
    case 'notes':
      content.innerHTML = renderNotes();
      break;
    case 'pomodoro':
      content.innerHTML = renderPomodoroPage();
      break;
    default:
      content.innerHTML = renderDashboard();
  }
  
  // Scroll to top
  content.scrollTop = 0;
}

// ==================== DASHBOARD ====================

function renderDashboard() {
  const totalChapters = 161; // 52 + 47 + 62
  const completedChapters = userData.completedChapters.length;
  const progressPercent = Math.round((completedChapters / totalChapters) * 100);
  
  return `
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>🎯 Your Learning Dashboard</h1>
        <p>Track your progress across Physics, Chemistry, Mathematics & Tech</p>
      </div>

      <!-- Overall Progress -->
      <div class="progress-card">
        <h2>📊 Overall Progress</h2>
        <div class="progress-stats">
          <div class="stat-box">
            <div class="stat-number">${completedChapters}</div>
            <div class="stat-label">Chapters Completed</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${userData.completedProblems.length}</div>
            <div class="stat-label">Problems Solved</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${userData.xp}</div>
            <div class="stat-label">Total XP</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${userData.streak}</div>
            <div class="stat-label">Day Streak</div>
          </div>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${progressPercent}%"></div>
        </div>
        <p class="progress-text">${progressPercent}% Complete</p>
      </div>

      <!-- Subject-wise Progress -->
      <div class="subjects-grid">
        <div class="subject-card" onclick="showSection('physics')">
          <div class="subject-icon"><i class="fas fa-atom"></i></div>
          <h3>Physics</h3>
          <div class="subject-stats">
            <span>52 Chapters</span>
            <span>1000+ Problems</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${userData.progress.physics}%"></div>
          </div>
          <p>${userData.progress.physics}% Complete</p>
        </div>

        <div class="subject-card" onclick="showSection('chemistry')">
          <div class="subject-icon"><i class="fas fa-flask"></i></div>
          <h3>Chemistry</h3>
          <div class="subject-stats">
            <span>47 Chapters</span>
            <span>900+ Problems</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${userData.progress.chemistry}%"></div>
          </div>
          <p>${userData.progress.chemistry}% Complete</p>
        </div>

        <div class="subject-card" onclick="showSection('maths')">
          <div class="subject-icon"><i class="fas fa-square-root-alt"></i></div>
          <h3>Mathematics</h3>
          <div class="subject-stats">
            <span>62 Chapters</span>
            <span>1200+ Problems</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${userData.progress.maths}%"></div>
          </div>
          <p>${userData.progress.maths}% Complete</p>
        </div>

        <div class="subject-card" onclick="showSection('tech')">
          <div class="subject-icon"><i class="fas fa-laptop-code"></i></div>
          <h3>Technology</h3>
          <div class="subject-stats">
            <span>100+ Projects</span>
            <span>500+ DSA Problems</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${userData.progress.tech}%"></div>
          </div>
          <p>${userData.progress.tech}% Complete</p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <h2>⚡ Quick Actions</h2>
        <div class="actions-grid">
          <button class="action-btn" onclick="showSection('problems')">
            <i class="fas fa-pen"></i>
            <span>Practice Problems</span>
          </button>
          <button class="action-btn" onclick="showSection('mock-tests')">
            <i class="fas fa-clipboard-check"></i>
            <span>Take Mock Test</span>
          </button>
          <button class="action-btn" onclick="showSection('flashcards')">
            <i class="fas fa-layer-group"></i>
            <span>Study Flashcards</span>
          </button>
          <button class="action-btn" onclick="showSection('notes')">
            <i class="fas fa-sticky-note"></i>
            <span>My Notes</span>
          </button>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="recent-activity">
        <h2>📝 Recent Activity</h2>
        <div class="activity-list">
          ${userData.completedChapters.slice(-5).reverse().map(chapter => `
            <div class="activity-item">
              <i class="fas fa-check-circle"></i>
              <span>Completed: ${chapter}</span>
              <span class="activity-time">Today</span>
            </div>
          `).join('') || '<p class="empty-state">No recent activity. Start learning!</p>'}
        </div>
      </div>
    </div>
  `;
}

// ==================== PHYSICS SECTION ====================

function renderPhysics() {
  if (typeof physicsContent === 'undefined') {
    return '<div class="loading">Loading Physics content...</div>';
  }

  const mechanics = physicsContent.mechanics;
  
  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-atom"></i> Physics - Complete JEE Syllabus</h1>
        <div class="subject-meta">
          <span class="badge"><i class="fas fa-book"></i> ${physicsContent.metadata.totalChapters} Chapters</span>
          <span class="badge"><i class="fas fa-list"></i> ${physicsContent.metadata.totalTopics} Topics</span>
          <span class="badge"><i class="fas fa-question"></i> ${physicsContent.metadata.totalProblems} Problems</span>
        </div>
      </div>

      <!-- Mechanics Section -->
      <div class="unit-section">
        <h2><i class="fas fa-cog"></i> ${mechanics.name}</h2>
        <div class="chapters-grid">
          ${mechanics.chapters.map(chapter => `
            <div class="chapter-card" onclick="showChapter('physics', '${chapter.id}')">
              <div class="chapter-header">
                <h3>${chapter.name}</h3>
                <span class="difficulty-badge ${chapter.difficulty}">${chapter.difficulty}</span>
              </div>
              <div class="chapter-meta">
                <span><i class="fas fa-list"></i> ${chapter.topics.length} topics</span>
                <span><i class="fas fa-question"></i> ${chapter.problems.length} problems</span>
              </div>
              <div class="chapter-footer">
                <button class="btn-small" onclick="event.stopPropagation(); startPractice('${chapter.id}')">
                  <i class="fas fa-pen"></i> Practice
                </button>
                <button class="btn-small" onclick="event.stopPropagation(); openFlashcards('${chapter.id}')">
                  <i class="fas fa-layer-group"></i> Flashcards
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Show Chapter Details
function showChapter(subject, chapterId) {
  let chapter = null;
  
  if (subject === 'physics' && typeof physicsContent !== 'undefined') {
    chapter = physicsContent.mechanics.chapters.find(ch => ch.id === chapterId);
  }
  
  if (!chapter) {
    showNotification('Chapter not found', 'error');
    return;
  }
  
  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="chapter-detail">
      <div class="chapter-header">
        <button class="btn-back" onclick="showSection('${subject}')">
          <i class="fas fa-arrow-left"></i> Back
        </button>
        <h1>${chapter.name}</h1>
        <span class="difficulty-badge ${chapter.difficulty}">${chapter.difficulty}</span>
      </div>

      <!-- Topics -->
      <div class="content-section">
        <h2><i class="fas fa-list"></i> Topics Covered</h2>
        <div class="topics-grid">
          ${chapter.topics.map(topic => `
            <div class="topic-card">
              <i class="fas fa-check-circle"></i>
              <span>${topic}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Formulas -->
      ${chapter.formulas ? `
        <div class="content-section">
          <h2><i class="fas fa-calculator"></i> Important Formulas</h2>
          <div class="formulas-list">
            ${chapter.formulas.map(formula => `
              <div class="formula-card">
                <code>${formula}</code>
                <button class="btn-icon" onclick="copyToClipboard('${formula.replace(/'/g, "\\'")}')">
                  <i class="fas fa-copy"></i>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Practice Problems -->
      <div class="content-section">
        <h2><i class="fas fa-pen"></i> Practice Problems</h2>
        <div class="problems-list">
          ${chapter.problems.map((problem, idx) => `
            <div class="problem-card">
              <div class="problem-header">
                <span class="problem-number">Problem ${idx + 1}</span>
                <span class="difficulty-badge ${problem.difficulty}">${problem.difficulty}</span>
              </div>
              <div class="problem-question">${problem.q}</div>
              <div class="problem-answer" id="answer-${idx}" style="display: none;">
                <strong>Answer:</strong> ${problem.a}
                ${problem.solution ? `<br><strong>Solution:</strong> ${problem.solution}` : ''}
              </div>
              <button class="btn-small" onclick="toggleAnswer(${idx})">
                <i class="fas fa-eye"></i> Show Answer
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Videos -->
      ${chapter.videos ? `
        <div class="content-section">
          <h2><i class="fas fa-video"></i> Video Lectures</h2>
          <div class="videos-grid">
            ${chapter.videos.map(video => `
              <div class="video-card" onclick="window.open('${video.url}', '_blank')">
                <i class="fab fa-youtube"></i>
                <h3>${video.title}</h3>
                <span class="video-duration">${video.duration}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Flashcards -->
      <div class="content-section">
        <h2><i class="fas fa-layer-group"></i> Flashcards</h2>
        <button class="btn-primary" onclick="openFlashcards('${chapterId}')">
          <i class="fas fa-cards-blank"></i> Study Flashcards
        </button>
      </div>

      <!-- Mark as Complete -->
      <div class="content-section">
        <button class="btn-success btn-large" onclick="markChapterComplete('${chapterId}', '${chapter.name}')">
          <i class="fas fa-check"></i> Mark Chapter as Complete
        </button>
      </div>
    </div>
  `;
}

// Toggle answer visibility
function toggleAnswer(index) {
  const answerDiv = document.getElementById(`answer-${index}`);
  const button = event.target;
  
  if (answerDiv.style.display === 'none') {
    answerDiv.style.display = 'block';
    button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
  } else {
    answerDiv.style.display = 'none';
    button.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
  }
}

// Mark chapter complete
function markChapterComplete(chapterId, chapterName) {
  if (!userData.completedChapters.includes(chapterId)) {
    userData.completedChapters.push(chapterId);
    addXP(100);
    showNotification(`✅ Chapter "${chapterName}" completed! +100 XP`, 'success');
    saveUserData();
  } else {
    showNotification('Chapter already completed!', 'info');
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showNotification('Copied to clipboard!', 'success');
}

// ==================== OTHER SECTIONS ====================

function renderChemistry() {
  return `<div class="coming-soon"><i class="fas fa-flask"></i><h2>Chemistry - 47 Chapters</h2><p>Complete content coming soon!</p></div>`;
}

function renderMaths() {
  return `<div class="coming-soon"><i class="fas fa-square-root-alt"></i><h2>Mathematics - 62 Chapters</h2><p>Complete content coming soon!</p></div>`;
}

function renderTech() {
  return `<div class="coming-soon"><i class="fas fa-laptop-code"></i><h2>Technology - 100+ Projects</h2><p>Complete content coming soon!</p></div>`;
}

function renderProblems() {
  return `<div class="coming-soon"><i class="fas fa-question-circle"></i><h2>Practice Problems - 3000+</h2><p>Complete content coming soon!</p></div>`;
}

// ==================== INITIALIZE APP ====================

window.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  showSection('dashboard');
  console.log('✅ PCM × Tech Ocean App Loaded!');
});

// Global search
function handleSearch(event) {
  if (event.key === 'Enter') {
    const query = event.target.value.toLowerCase();
    showNotification(`Searching for: ${query}`, 'info');
  }
}

console.log('✅ App.js loaded successfully!');
