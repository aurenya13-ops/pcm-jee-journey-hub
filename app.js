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
  
  // Update streak - FIXED: No bonus on first visit
  const lastVisit = localStorage.getItem('last_visit');
  const today = new Date().toDateString();
  
  if (lastVisit && lastVisit !== today) {
    // Only check streak if user has visited before
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastVisit === yesterday.toDateString()) {
      // Consecutive day - increase streak and give bonus
      userData.streak++;
      if (typeof addXPWithAnimation !== 'undefined') {
        addXPWithAnimation(50, 'daily_streak');
      } else {
        addXP(50);
      }
      showNotification(`🔥 ${userData.streak} day streak! +50 XP`, 'success');
    } else {
      // Missed days - reset streak
      userData.streak = 1;
      showNotification('Streak reset. Start a new one today!', 'info');
    }
    
    localStorage.setItem('last_visit', today);
    saveUserData();
  } else if (!lastVisit) {
    // First visit ever - just set streak to 1, no bonus
    userData.streak = 1;
    localStorage.setItem('last_visit', today);
    saveUserData();
  }
  // If lastVisit === today, do nothing (already visited today)
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

// Add XP (fallback if dopamine engine not loaded)
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
  const musicPlayerContent = document.getElementById('music-player-content');
  
  // Hide music player content by default
  if (musicPlayerContent) {
    musicPlayerContent.style.display = 'none';
  }
  
  switch(section) {
    case 'dashboard':
      content.innerHTML = renderDashboard();
      content.style.display = 'block';
      break;
    case 'physics':
      content.innerHTML = renderPhysics();
      content.style.display = 'block';
      break;
    case 'chemistry':
      content.innerHTML = renderChemistry();
      content.style.display = 'block';
      break;
    case 'maths':
      content.innerHTML = renderMaths();
      content.style.display = 'block';
      break;
    case 'tech':
      content.innerHTML = renderTech();
      content.style.display = 'block';
      break;
    case 'problems':
      content.innerHTML = renderProblems();
      content.style.display = 'block';
      break;
    case 'mock-tests':
      content.innerHTML = renderMockTests();
      content.style.display = 'block';
      break;
    case 'flashcards':
      content.innerHTML = renderFlashcards();
      content.style.display = 'block';
      break;
    case 'music':
      // Show music player in main content
      content.style.display = 'none';
      if (musicPlayerContent) {
        musicPlayerContent.style.display = 'block';
        if (typeof renderMusicPlayer === 'function') {
          renderMusicPlayer();
        }
      }
      break;
    case 'notes':
      content.innerHTML = renderNotes();
      content.style.display = 'block';
      break;
    case 'pomodoro':
      content.innerHTML = renderPomodoroPage();
      content.style.display = 'block';
      break;
    default:
      content.innerHTML = renderDashboard();
      content.style.display = 'block';
  }
  
  // Scroll to top
  if (content.style.display !== 'none') {
    content.scrollTop = 0;
  }
}

// ==================== DASHBOARD ====================

function renderDashboard() {
  const totalChapters = 161;
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
              <span class="activity-time">Recently</span>
            </div>
          `).join('') || '<p class="empty-state">No recent activity. Start learning!</p>'}
        </div>
      </div>

      <!-- Motivational Quote -->
      <div class="progress-card" style="text-align: center; margin-top: 30px;">
        <h2>💪 Today's Motivation</h2>
        <p style="font-size: 18px; font-style: italic; color: var(--text-secondary); margin-top: 15px;">
          "Success is the sum of small efforts repeated day in and day out."
        </p>
        <p style="margin-top: 10px; color: var(--primary);">Keep going! You're doing great! 🚀</p>
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

// ==================== CHEMISTRY SECTION ====================

function renderChemistry() {
  if (typeof chemistryContent === 'undefined') {
    return '<div class="loading">Loading Chemistry content...</div>';
  }

  const physical = chemistryContent.physical;
  
  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-flask"></i> Chemistry - Complete JEE Syllabus</h1>
        <div class="subject-meta">
          <span class="badge"><i class="fas fa-book"></i> ${chemistryContent.metadata.totalChapters} Chapters</span>
          <span class="badge"><i class="fas fa-list"></i> ${chemistryContent.metadata.totalTopics} Topics</span>
          <span class="badge"><i class="fas fa-question"></i> ${chemistryContent.metadata.totalProblems} Problems</span>
        </div>
      </div>

      <!-- Physical Chemistry -->
      <div class="unit-section">
        <h2><i class="fas fa-atom"></i> ${physical.name}</h2>
        <div class="chapters-grid">
          ${physical.chapters.map(chapter => `
            <div class="chapter-card" onclick="showChapter('chemistry', '${chapter.id}')">
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

// ==================== MATHS SECTION ====================

function renderMaths() {
  if (typeof mathsContent === 'undefined') {
    return '<div class="loading">Loading Mathematics content...</div>';
  }

  const algebra = mathsContent.algebra;
  
  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-square-root-alt"></i> Mathematics - Complete JEE Syllabus</h1>
        <div class="subject-meta">
          <span class="badge"><i class="fas fa-book"></i> ${mathsContent.metadata.totalChapters} Chapters</span>
          <span class="badge"><i class="fas fa-list"></i> ${mathsContent.metadata.totalTopics} Topics</span>
          <span class="badge"><i class="fas fa-question"></i> ${mathsContent.metadata.totalProblems} Problems</span>
        </div>
      </div>

      <!-- Algebra -->
      <div class="unit-section">
        <h2><i class="fas fa-calculator"></i> ${algebra.name}</h2>
        <div class="chapters-grid">
          ${algebra.chapters.map(chapter => `
            <div class="chapter-card" onclick="showChapter('maths', '${chapter.id}')">
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

// ==================== TECH SECTION ====================

function renderTech() {
  if (typeof techContent === 'undefined') {
    return '<div class="loading">Loading Tech content...</div>';
  }

  const webDev = techContent.webDev;
  
  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-laptop-code"></i> Technology - Complete Roadmap</h1>
        <div class="subject-meta">
          <span class="badge"><i class="fas fa-project-diagram"></i> 100+ Projects</span>
          <span class="badge"><i class="fas fa-code"></i> 500+ DSA Problems</span>
          <span class="badge"><i class="fas fa-rocket"></i> 6 Domains</span>
        </div>
      </div>

      <!-- Web Development -->
      <div class="unit-section">
        <h2><i class="fas fa-globe"></i> ${webDev.name}</h2>
        <div class="chapters-grid">
          ${webDev.projects.map(project => `
            <div class="chapter-card">
              <div class="chapter-header">
                <h3>${project.name}</h3>
                <span class="difficulty-badge ${project.difficulty}">${project.difficulty}</span>
              </div>
              <p style="font-size: 14px; color: var(--text-secondary); margin: 10px 0;">${project.description}</p>
              <div class="chapter-meta">
                <span><i class="fas fa-code"></i> ${project.tech.join(', ')}</span>
              </div>
              <div class="chapter-footer">
                <button class="btn-small" onclick="showNotification('Project details coming soon!', 'info')">
                  <i class="fas fa-eye"></i> View
                </button>
                <button class="btn-small" onclick="showNotification('Code repository coming soon!', 'info')">
                  <i class="fab fa-github"></i> Code
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==================== PROBLEMS SECTION ====================

function renderProblems() {
  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-question-circle"></i> Practice Problems</h1>
        <p>3000+ curated problems across Physics, Chemistry & Mathematics</p>
      </div>

      <div class="subjects-grid">
        <div class="subject-card" onclick="showSection('physics')">
          <div class="subject-icon"><i class="fas fa-atom"></i></div>
          <h3>Physics Problems</h3>
          <p style="color: var(--text-secondary); margin: 10px 0;">1000+ problems with detailed solutions</p>
          <button class="btn-primary" style="margin-top: 15px;">
            <i class="fas fa-arrow-right"></i> Start Practicing
          </button>
        </div>

        <div class="subject-card" onclick="showSection('chemistry')">
          <div class="subject-icon"><i class="fas fa-flask"></i></div>
          <h3>Chemistry Problems</h3>
          <p style="color: var(--text-secondary); margin: 10px 0;">900+ problems with detailed solutions</p>
          <button class="btn-primary" style="margin-top: 15px;">
            <i class="fas fa-arrow-right"></i> Start Practicing
          </button>
        </div>

        <div class="subject-card" onclick="showSection('maths')">
          <div class="subject-icon"><i class="fas fa-square-root-alt"></i></div>
          <h3>Maths Problems</h3>
          <p style="color: var(--text-secondary); margin: 10px 0;">1200+ problems with detailed solutions</p>
          <button class="btn-primary" style="margin-top: 15px;">
            <i class="fas fa-arrow-right"></i> Start Practicing
          </button>
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
  } else if (subject === 'chemistry' && typeof chemistryContent !== 'undefined') {
    chapter = chemistryContent.physical.chapters.find(ch => ch.id === chapterId);
  } else if (subject === 'maths' && typeof mathsContent !== 'undefined') {
    chapter = mathsContent.algebra.chapters.find(ch => ch.id === chapterId);
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

      <!-- Mark as Complete -->
      <div class="content-section">
        <button class="btn-success btn-large" onclick="markChapterComplete('${chapterId}', '${chapter.name}')">
          <i class="fas fa-check"></i> Mark Chapter as Complete (+100 XP)
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

// Mark chapter complete - FIXED: Proper validation
function markChapterComplete(chapterId, chapterName) {
  if (!userData.completedChapters.includes(chapterId)) {
    userData.completedChapters.push(chapterId);
    
    // Use dopamine engine if available
    if (typeof addXPWithAnimation !== 'undefined') {
      addXPWithAnimation(100, 'chapter_complete');
    } else {
      addXP(100);
    }
    
    showNotification(`✅ Chapter "${chapterName}" completed! +100 XP`, 'success');
    saveUserData();
    
    // Check achievements
    if (typeof checkAchievements === 'function') {
      checkAchievements();
    }
  } else {
    showNotification('⚠️ Chapter already completed!', 'warning');
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showNotification('📋 Copied to clipboard!', 'success');
}

// Start practice - FIXED: Just shows info, no XP
function startPractice(chapterId) {
  showNotification('🎯 Practice mode coming soon!', 'info');
}

// ==================== INITIALIZE APP ====================

window.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  showSection('dashboard');
  console.log('✅ PCM × Tech Ocean App Loaded!');
  console.log('📚 161 Chapters | 3000+ Problems | 100+ Projects');
  console.log('🚀 Ready to learn!');
});

// Global search
function handleSearch(event) {
  if (event.key === 'Enter') {
    const query = event.target.value.toLowerCase();
    showNotification(`🔍 Searching for: ${query}`, 'info');
  }
}

console.log('✅ App.js loaded successfully!');
