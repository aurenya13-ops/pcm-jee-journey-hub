// ==================== MAIN APP CONTROLLER - INSTAGRAM LEVEL ====================

// Current section tracker
let currentSection = 'dashboard';

// Initialize app
function initApp() {
  console.log('🚀 Initializing PCM Hub...');
  
  // Load dashboard by default
  showSection('dashboard');
  
  // Load user progress
  loadUserProgress();
  
  // Initialize theme
  const savedTheme = localStorage.getItem('theme') || 'neon';
  applyTheme(savedTheme);
  
  console.log('✅ App initialized successfully!');
}

// ==================== SECTION NAVIGATION ====================

function showSection(section) {
  currentSection = section;
  
  // Update sidebar active state
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event?.target?.classList.add('active');
  
  const mainContent = document.getElementById('main-content');
  
  // Route to appropriate content
  switch(section) {
    case 'dashboard':
      mainContent.innerHTML = renderDashboard();
      break;
    case 'physics':
      mainContent.innerHTML = renderSubjectContent('physics');
      break;
    case 'chemistry':
      mainContent.innerHTML = renderSubjectContent('chemistry');
      break;
    case 'maths':
      mainContent.innerHTML = renderSubjectContent('maths');
      break;
    case 'video-lectures':
      mainContent.innerHTML = renderVideoLectures();
      break;
    case 'practice':
      mainContent.innerHTML = renderPracticeProblems();
      break;
    case 'mock-tests':
      mainContent.innerHTML = renderMockTests();
      break;
    case 'coding':
      mainContent.innerHTML = renderCodePlayground();
      break;
    case 'simulators':
      mainContent.innerHTML = renderSimulators();
      break;
    case 'calculators':
      mainContent.innerHTML = renderCalculators();
      break;
    case 'study-planner':
      mainContent.innerHTML = renderStudyPlanner();
      break;
    case 'achievements':
      mainContent.innerHTML = renderAchievements();
      break;
    case 'notes':
      mainContent.innerHTML = renderNotes();
      break;
    case 'flashcards':
      mainContent.innerHTML = renderFlashcards();
      break;
    case 'resources':
      mainContent.innerHTML = renderResources();
      break;
    case 'portfolio':
      mainContent.innerHTML = renderPortfolio();
      break;
    case 'blog':
      mainContent.innerHTML = renderBlog();
      break;
    case 'resume':
      mainContent.innerHTML = renderResume();
      break;
    case 'contact':
      mainContent.innerHTML = renderContact();
      break;
    default:
      mainContent.innerHTML = renderDashboard();
  }
  
  // Scroll to top
  mainContent.scrollTop = 0;
}

// ==================== DASHBOARD ====================

function renderDashboard() {
  const stats = getUserStats();
  
  return `
    <div class="dashboard">
      <div class="welcome-section">
        <h1>Welcome back, Champ! 🚀</h1>
        <p>Ready to crush some JEE problems today?</p>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-fire"></i></div>
          <div class="stat-info">
            <h3>${stats.streak}</h3>
            <p>Day Streak</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-star"></i></div>
          <div class="stat-info">
            <h3>${stats.xp}</h3>
            <p>Total XP</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-trophy"></i></div>
          <div class="stat-info">
            <h3>Level ${stats.level}</h3>
            <p>Current Level</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-clock"></i></div>
          <div class="stat-info">
            <h3>${Math.floor(stats.studyTime / 60)}h</h3>
            <p>Study Time</p>
          </div>
        </div>
      </div>
      
      <div class="quick-actions">
        <h2>Quick Start</h2>
        <div class="actions-grid">
          <div class="action-card" onclick="showSection('physics')">
            <i class="fas fa-atom"></i>
            <h3>Physics</h3>
            <p>Continue learning</p>
          </div>
          <div class="action-card" onclick="showSection('chemistry')">
            <i class="fas fa-flask"></i>
            <h3>Chemistry</h3>
            <p>Continue learning</p>
          </div>
          <div class="action-card" onclick="showSection('maths')">
            <i class="fas fa-square-root-alt"></i>
            <h3>Mathematics</h3>
            <p>Continue learning</p>
          </div>
          <div class="action-card" onclick="showSection('practice')">
            <i class="fas fa-pen"></i>
            <h3>Practice</h3>
            <p>Solve problems</p>
          </div>
          <div class="action-card" onclick="showSection('mock-tests')">
            <i class="fas fa-clipboard-check"></i>
            <h3>Mock Tests</h3>
            <p>Test yourself</p>
          </div>
          <div class="action-card" onclick="showSection('video-lectures')">
            <i class="fas fa-video"></i>
            <h3>Videos</h3>
            <p>Watch lectures</p>
          </div>
        </div>
      </div>
      
      <div class="daily-goals">
        <h2>Today's Goals</h2>
        <div class="goals-list">
          <div class="goal-item">
            <div class="goal-info">
              <i class="fas fa-clock"></i>
              <span>Study for 2 hours</span>
            </div>
            <div class="goal-progress">
              <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${(stats.studyTime / 120) * 100}%"></div>
              </div>
              <span>${Math.floor(stats.studyTime / 60)}/2 hrs</span>
            </div>
          </div>
          <div class="goal-item">
            <div class="goal-info">
              <i class="fas fa-pen"></i>
              <span>Solve 10 problems</span>
            </div>
            <div class="goal-progress">
              <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${(stats.problemsSolved / 10) * 100}%"></div>
              </div>
              <span>${stats.problemsSolved}/10</span>
            </div>
          </div>
          <div class="goal-item">
            <div class="goal-info">
              <i class="fas fa-video"></i>
              <span>Watch 3 videos</span>
            </div>
            <div class="goal-progress">
              <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${(stats.videosWatched / 3) * 100}%"></div>
              </div>
              <span>${stats.videosWatched}/3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================== VIDEO LECTURES ====================

function renderVideoLectures() {
  return `
    <div class="video-lectures-page">
      <h1><i class="fas fa-video"></i> Video Lectures</h1>
      <p>Curated playlists from top educators</p>
      
      <div class="playlists-grid">
        <div class="playlist-card">
          <h3>Physics Wallah - JEE Physics</h3>
          <p>Complete Physics for JEE Mains & Advanced</p>
          <button class="btn-primary" onclick="window.open('https://www.youtube.com/playlist?list=PLbu_fGT0MPsuaB-c-w8Fw7BUW_FJBVr6Y', '_blank')">
            Watch Playlist <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="playlist-card">
          <h3>Physics Wallah - JEE Chemistry</h3>
          <p>Complete Chemistry for JEE Mains & Advanced</p>
          <button class="btn-primary" onclick="window.open('https://www.youtube.com/playlist?list=PLbu_fGT0MPst0PM8sA_1VN-FZy_vJAd-r', '_blank')">
            Watch Playlist <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="playlist-card">
          <h3>Physics Wallah - JEE Maths</h3>
          <p>Complete Mathematics for JEE Mains & Advanced</p>
          <button class="btn-primary" onclick="window.open('https://www.youtube.com/playlist?list=PLbu_fGT0MPssZcQT1uzihyqjgDRgEWlJZ', '_blank')">
            Watch Playlist <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="playlist-card">
          <h3>Khan Academy - Physics</h3>
          <p>Conceptual understanding with animations</p>
          <button class="btn-primary" onclick="window.open('https://www.youtube.com/playlist?list=PL0o_zxa4K1BU6wPPLGK0OKvv_fGG3Hn_A', '_blank')">
            Watch Playlist <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="playlist-card">
          <h3>Unacademy JEE - Crash Course</h3>
          <p>Quick revision for JEE preparation</p>
          <button class="btn-primary" onclick="window.open('https://www.youtube.com/c/UnacademyJEE', '_blank')">
            Watch Channel <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="playlist-card">
          <h3>Vedantu JEE - Live Classes</h3>
          <p>Interactive live sessions</p>
          <button class="btn-primary" onclick="window.open('https://www.youtube.com/c/VedantuJEE', '_blank')">
            Watch Channel <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==================== PRACTICE PROBLEMS ====================

function renderPracticeProblems() {
  return `
    <div class="practice-page">
      <h1><i class="fas fa-pen"></i> Practice Problems</h1>
      <p>Solve JEE-level problems to master concepts</p>
      
      <div class="practice-filters">
        <button class="filter-btn active" onclick="filterProblems('all')">All</button>
        <button class="filter-btn" onclick="filterProblems('physics')">Physics</button>
        <button class="filter-btn" onclick="filterProblems('chemistry')">Chemistry</button>
        <button class="filter-btn" onclick="filterProblems('maths')">Maths</button>
      </div>
      
      <div class="practice-grid">
        <div class="practice-set-card">
          <h3>Physics - Mechanics</h3>
          <p>50 problems on Kinematics, Laws of Motion, Work-Energy</p>
          <div class="difficulty-badges">
            <span class="badge easy">20 Easy</span>
            <span class="badge medium">20 Medium</span>
            <span class="badge hard">10 Hard</span>
          </div>
          <button class="btn-primary" onclick="showSection('physics')">Start Practice</button>
        </div>
        
        <div class="practice-set-card">
          <h3>Chemistry - Physical</h3>
          <p>40 problems on Thermodynamics, Kinetics, Equilibrium</p>
          <div class="difficulty-badges">
            <span class="badge easy">15 Easy</span>
            <span class="badge medium">15 Medium</span>
            <span class="badge hard">10 Hard</span>
          </div>
          <button class="btn-primary" onclick="showSection('chemistry')">Start Practice</button>
        </div>
        
        <div class="practice-set-card">
          <h3>Maths - Calculus</h3>
          <p>60 problems on Limits, Differentiation, Integration</p>
          <div class="difficulty-badges">
            <span class="badge easy">25 Easy</span>
            <span class="badge medium">25 Medium</span>
            <span class="badge hard">10 Hard</span>
          </div>
          <button class="btn-primary" onclick="showSection('maths')">Start Practice</button>
        </div>
      </div>
    </div>
  `;
}

// ==================== MOCK TESTS ====================

function renderMockTests() {
  return `
    <div class="mock-tests-page">
      <h1><i class="fas fa-clipboard-check"></i> Mock Tests</h1>
      <p>Full-length JEE mock tests to assess your preparation</p>
      
      <div class="tests-grid">
        <div class="test-card">
          <div class="test-header">
            <h3>JEE Mains Mock Test 1</h3>
            <span class="test-badge">Full Syllabus</span>
          </div>
          <div class="test-info">
            <p><i class="fas fa-question-circle"></i> 90 Questions</p>
            <p><i class="fas fa-clock"></i> 3 Hours</p>
            <p><i class="fas fa-star"></i> 300 Marks</p>
          </div>
          <button class="btn-primary" onclick="alert('Mock test feature coming soon! For now, practice from individual subjects.')">
            Start Test
          </button>
        </div>
        
        <div class="test-card">
          <div class="test-header">
            <h3>JEE Advanced Mock Test 1</h3>
            <span class="test-badge advanced">Advanced Level</span>
          </div>
          <div class="test-info">
            <p><i class="fas fa-question-circle"></i> 54 Questions</p>
            <p><i class="fas fa-clock"></i> 3 Hours</p>
            <p><i class="fas fa-star"></i> 180 Marks</p>
          </div>
          <button class="btn-primary" onclick="alert('Mock test feature coming soon! For now, practice from individual subjects.')">
            Start Test
          </button>
        </div>
        
        <div class="test-card">
          <div class="test-header">
            <h3>Physics Only Test</h3>
            <span class="test-badge">Subject Test</span>
          </div>
          <div class="test-info">
            <p><i class="fas fa-question-circle"></i> 30 Questions</p>
            <p><i class="fas fa-clock"></i> 1 Hour</p>
            <p><i class="fas fa-star"></i> 100 Marks</p>
          </div>
          <button class="btn-primary" onclick="showSection('physics')">
            Start Test
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==================== CODE PLAYGROUND ====================

function renderCodePlayground() {
  return `
    <div class="code-playground">
      <h1><i class="fas fa-code"></i> Code Playground</h1>
      <p>Practice coding and computational physics/maths</p>
      
      <div class="playground-container">
        <div class="code-editor">
          <div class="editor-header">
            <select id="language-select" onchange="changeLanguage()">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
            <button class="btn-primary" onclick="runCode()">
              <i class="fas fa-play"></i> Run Code
            </button>
          </div>
          <textarea id="code-input" placeholder="Write your code here...">// Calculate projectile motion
const u = 20; // initial velocity (m/s)
const angle = 45; // angle in degrees
const g = 9.8; // gravity

const angleRad = angle * Math.PI / 180;
const range = (u * u * Math.sin(2 * angleRad)) / g;
const maxHeight = (u * u * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * g);

console.log('Range:', range.toFixed(2), 'm');
console.log('Max Height:', maxHeight.toFixed(2), 'm');</textarea>
        </div>
        <div class="code-output">
          <h3>Output:</h3>
          <pre id="output-display">Click "Run Code" to see output</pre>
        </div>
      </div>
    </div>
  `;
}

function runCode() {
  const code = document.getElementById('code-input').value;
  const output = document.getElementById('output-display');
  
  try {
    // Capture console.log
    let logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(args.join(' '));
      originalLog(...args);
    };
    
    // Run code
    eval(code);
    
    // Restore console.log
    console.log = originalLog;
    
    // Display output
    output.textContent = logs.length > 0 ? logs.join('\n') : 'Code executed successfully (no output)';
    output.style.color = 'var(--success)';
    
    awardXP(15, 'Ran code successfully');
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
    output.style.color = 'var(--danger)';
  }
}

// ==================== SIMULATORS ====================

function renderSimulators() {
  return `
    <div class="simulators-page">
      <h1><i class="fas fa-vial"></i> Interactive Simulators</h1>
      <p>Visualize physics and chemistry concepts</p>
      
      <div class="simulators-grid">
        <div class="simulator-card">
          <h3>PhET Simulations</h3>
          <p>Interactive physics, chemistry, and math simulations</p>
          <button class="btn-primary" onclick="window.open('https://phet.colorado.edu/', '_blank')">
            Open PhET <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="simulator-card">
          <h3>Circuit Simulator</h3>
          <p>Build and test electrical circuits</p>
          <button class="btn-primary" onclick="window.open('https://www.falstad.com/circuit/', '_blank')">
            Open Simulator <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="simulator-card">
          <h3>Molecular Workbench</h3>
          <p>Visualize molecular structures and reactions</p>
          <button class="btn-primary" onclick="window.open('https://molview.org/', '_blank')">
            Open MolView <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="simulator-card">
          <h3>GeoGebra</h3>
          <p>Interactive geometry, algebra, and calculus</p>
          <button class="btn-primary" onclick="window.open('https://www.geogebra.org/calculator', '_blank')">
            Open GeoGebra <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==================== CALCULATORS ====================

function renderCalculators() {
  return `
    <div class="calculators-page">
      <h1><i class="fas fa-calculator"></i> Calculators & Tools</h1>
      <p>Mathematical and scientific calculators</p>
      
      <div class="calculators-grid">
        <div class="calculator-card">
          <h3>Desmos Graphing Calculator</h3>
          <p>Plot functions, create tables, add sliders</p>
          <button class="btn-primary" onclick="window.open('https://www.desmos.com/calculator', '_blank')">
            Open Desmos <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="calculator-card">
          <h3>WolframAlpha</h3>
          <p>Computational knowledge engine</p>
          <button class="btn-primary" onclick="window.open('https://www.wolframalpha.com/', '_blank')">
            Open WolframAlpha <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="calculator-card">
          <h3>Symbolab</h3>
          <p>Step-by-step math solver</p>
          <button class="btn-primary" onclick="window.open('https://www.symbolab.com/', '_blank')">
            Open Symbolab <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
        
        <div class="calculator-card">
          <h3>Periodic Table</h3>
          <p>Interactive periodic table with element data</p>
          <button class="btn-primary" onclick="window.open('https://ptable.com/', '_blank')">
            Open Table <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==================== UTILITY FUNCTIONS ====================

function getUserStats() {
  const saved = localStorage.getItem('userStats');
  return saved ? JSON.parse(saved) : {
    xp: 0,
    level: 1,
    streak: 0,
    studyTime: 0,
    problemsSolved: 0,
    videosWatched: 0
  };
}

function loadUserProgress() {
  const stats = getUserStats();
  document.getElementById('user-xp').textContent = stats.xp;
  document.getElementById('user-level').textContent = stats.level;
  document.getElementById('user-streak').textContent = stats.streak;
}

function filterProblems(subject) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  // Filter logic here
}

// Placeholder functions for other sections
function renderStudyPlanner() { return '<h1>Study Planner - Coming Soon!</h1>'; }
function renderAchievements() { return '<h1>Achievements - Coming Soon!</h1>'; }
function renderNotes() { return '<h1>My Notes - Coming Soon!</h1>'; }
function renderFlashcards() { return '<h1>Flashcards - Coming Soon!</h1>'; }
function renderResources() { return '<h1>Resources - Coming Soon!</h1>'; }
function renderPortfolio() { return '<h1>Portfolio - Coming Soon!</h1>'; }
function renderBlog() { return '<h1>Blog - Coming Soon!</h1>'; }
function renderResume() { return '<h1>Resume Builder - Coming Soon!</h1>'; }
function renderContact() { return '<h1>Contact - Coming Soon!</h1>'; }

// Make functions global
window.showSection = showSection;
window.runCode = runCode;
window.filterProblems = filterProblems;

// Initialize on load
window.addEventListener('load', initApp);

console.log('✅ App controller loaded with proper functioning!');
