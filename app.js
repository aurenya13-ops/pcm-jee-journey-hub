// ==================== THEMES ====================
const themes = [
  { name: '🔥 Neon Cyberpunk', primary: '#ff006e', secondary: '#8338ec', accent: '#00f5ff', bg1: '#0a0e27', bg2: '#1a1f3a', bg3: '#2a2f4a', glow: '#ff006e' },
  { name: '🌅 Sunset Paradise', primary: '#ff6b35', secondary: '#f7931e', accent: '#ffd23f', bg1: '#1a0a2e', bg2: '#2d1b3d', bg3: '#3d2c5e', glow: '#ff6b35' },
  { name: '🌊 Ocean Depths', primary: '#00d9ff', secondary: '#0099ff', accent: '#00ffcc', bg1: '#001a33', bg2: '#002b4d', bg3: '#003d66', glow: '#00d9ff' },
  { name: '🌲 Matrix Green', primary: '#00ff41', secondary: '#00cc33', accent: '#39ff14', bg1: '#0d1b0e', bg2: '#1a2f1b', bg3: '#274428', glow: '#00ff41' },
  { name: '💜 Purple Reign', primary: '#b537f2', secondary: '#9d4edd', accent: '#e0aaff', bg1: '#1a0033', bg2: '#2d0052', bg3: '#400070', glow: '#b537f2' },
  { name: '⚡ Electric Gold', primary: '#ffd60a', secondary: '#ffc300', accent: '#ffea00', bg1: '#1f1300', bg2: '#3d2600', bg3: '#5c3900', glow: '#ffd60a' },
  { name: '🎮 Retro Arcade', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00', bg1: '#0a0014', bg2: '#1a0028', bg3: '#2a003c', glow: '#ff00ff' },
  { name: '🌌 Deep Space', primary: '#7b2cbf', secondary: '#5a189a', accent: '#c77dff', bg1: '#000000', bg2: '#0d0221', bg3: '#1a0442', glow: '#7b2cbf' }
];

let currentThemeIndex = parseInt(localStorage.getItem('themeIndex')) || 0;

function applyTheme(index) {
  const theme = themes[index];
  document.documentElement.style.setProperty('--primary', theme.primary);
  document.documentElement.style.setProperty('--secondary', theme.secondary);
  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--bg-primary', theme.bg1);
  document.documentElement.style.setProperty('--bg-secondary', theme.bg2);
  document.documentElement.style.setProperty('--bg-tertiary', theme.bg3);
  document.documentElement.style.setProperty('--glow', theme.glow);
  
  const nameEl = document.getElementById('theme-name');
  if (nameEl) nameEl.textContent = theme.name;
  
  localStorage.setItem('themeIndex', index);
  currentThemeIndex = index;
}

function nextTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(currentThemeIndex);
}

function prevTheme() {
  currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
  applyTheme(currentThemeIndex);
}

window.nextTheme = nextTheme;
window.prevTheme = prevTheme;

// ==================== NAVIGATION ====================
function showSection(section) {
  const content = document.getElementById('main-content');
  document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
  event?.target?.classList?.add('active');
  
  content.innerHTML = getSectionContent(section);
  content.classList.add('fade-in');
  
  if (typeof addXP === 'function') addXP(5);
}

window.showSection = showSection;

function getSectionContent(section) {
  switch(section) {
    case 'dashboard': return getDashboardContent();
    case 'physics': return getPhysicsContent();
    case 'chemistry': return getChemistryContent();
    case 'maths': return getMathsContent();
    case 'coding': return getCodingContent();
    case 'video-lectures': return getVideoLecturesContent();
    case 'practice': return getPracticeContent();
    case 'mock-tests': return getMockTestsContent();
    case 'simulators': return getSimulatorsContent();
    case 'calculators': return getCalculatorsContent();
    case 'notes': return getNotesContent();
    case 'flashcards': return getFlashcardsContent();
    case 'study-planner': return getStudyPlannerContent();
    case 'achievements': return getAchievementsContent();
    case 'portfolio': return getPortfolioContent();
    case 'blog': return getBlogContent();
    case 'resume': return getResumeContent();
    case 'contact': return getContactContent();
    case 'projects': return getProjectsContent();
    case 'tech-tools': return getTechToolsContent();
    case 'visualizers': return getVisualizersContent();
    case 'resources': return getResourcesContent();
    case 'music': return getMusicContent();
    case 'pomodoro': return getPomodoroContent();
    default: return getDashboardContent();
  }
}

// ==================== DASHBOARD ====================
function getDashboardContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-chart-line"></i> Your Learning Dashboard</h1>
      <p class="text-secondary">Track your progress and stay motivated!</p>
      
      <div class="stats-grid mt-2">
        <div class="stat-card">
          <div class="stat-number">${userXP}</div>
          <div class="stat-label">Total XP</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${userLevel}</div>
          <div class="stat-label">Current Level</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${userStreak}</div>
          <div class="stat-label">Day Streak</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">85%</div>
          <div class="stat-label">Avg Score</div>
        </div>
      </div>

      <h2 class="mt-2"><i class="fas fa-book"></i> Subject Progress</h2>
      <div class="content-grid">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-atom card-icon"></i>
            <h3 class="card-title">Physics</h3>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
          <p class="text-secondary mt-1">75% Complete - 15/20 modules done</p>
          <button class="btn mt-1" onclick="showSection('physics')">Continue Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-flask card-icon"></i>
            <h3 class="card-title">Chemistry</h3>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 60%"></div>
          </div>
          <p class="text-secondary mt-1">60% Complete - 12/20 modules done</p>
          <button class="btn mt-1" onclick="showSection('chemistry')">Continue Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-square-root-alt card-icon"></i>
            <h3 class="card-title">Mathematics</h3>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 80%"></div>
          </div>
          <p class="text-secondary mt-1">80% Complete - 16/20 modules done</p>
          <button class="btn mt-1" onclick="showSection('maths')">Continue Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-code card-icon"></i>
            <h3 class="card-title">Coding</h3>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 65%"></div>
          </div>
          <p class="text-secondary mt-1">65% Complete - 13/20 modules done</p>
          <button class="btn mt-1" onclick="showSection('coding')">Continue Learning</button>
        </div>
      </div>

      <h2 class="mt-2"><i class="fas fa-fire"></i> Quick Actions</h2>
      <div class="content-grid">
        <div class="card" onclick="showSection('practice')">
          <div class="card-header">
            <i class="fas fa-pen card-icon"></i>
            <h3 class="card-title">Practice Problems</h3>
          </div>
          <p class="text-secondary">Solve 500+ curated problems</p>
        </div>

        <div class="card" onclick="showSection('mock-tests')">
          <div class="card-header">
            <i class="fas fa-clipboard-check card-icon"></i>
            <h3 class="card-title">Mock Tests</h3>
          </div>
          <p class="text-secondary">Take JEE-style mock tests</p>
        </div>

        <div class="card" onclick="showSection('video-lectures')">
          <div class="card-header">
            <i class="fas fa-video card-icon"></i>
            <h3 class="card-title">Video Lectures</h3>
          </div>
          <p class="text-secondary">Watch expert explanations</p>
        </div>

        <div class="card" onclick="showSection('simulators')">
          <div class="card-header">
            <i class="fas fa-vial card-icon"></i>
            <h3 class="card-title">Simulators</h3>
          </div>
          <p class="text-secondary">Interactive experiments</p>
        </div>
      </div>
    </div>
  `;
}

// ==================== PHYSICS ====================
function getPhysicsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-atom"></i> Physics Modules</h1>
      <p class="text-secondary">Master the fundamental laws of nature</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-running card-icon"></i>
            <h3 class="card-title">Mechanics</h3>
          </div>
          <div class="card-body">
            <p>Kinematics, dynamics, work, energy, and momentum</p>
          </div>
          <div class="card-footer">
            <span class="tag">Newton's Laws</span>
            <span class="tag">Energy</span>
            <span class="tag">Momentum</span>
          </div>
          <button class="btn mt-1" onclick="alert('Opening Mechanics module...')">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-bolt card-icon"></i>
            <h3 class="card-title">Electromagnetism</h3>
          </div>
          <div class="card-body">
            <p>Electric fields, magnetic fields, circuits, and EM waves</p>
          </div>
          <div class="card-footer">
            <span class="tag">Electricity</span>
            <span class="tag">Magnetism</span>
            <span class="tag">Waves</span>
          </div>
          <button class="btn mt-1" onclick="alert('Opening Electromagnetism module...')">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-thermometer-half card-icon"></i>
            <h3 class="card-title">Thermodynamics</h3>
          </div>
          <div class="card-body">
            <p>Heat, temperature, entropy, and laws of thermodynamics</p>
          </div>
          <div class="card-footer">
            <span class="tag">Heat</span>
            <span class="tag">Laws</span>
            <span class="tag">Engines</span>
          </div>
          <button class="btn mt-1" onclick="alert('Opening Thermodynamics module...')">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-wave-square card-icon"></i>
            <h3 class="card-title">Waves & Optics</h3>
          </div>
          <div class="card-body">
            <p>Wave motion, sound, light, and optical phenomena</p>
          </div>
          <div class="card-footer">
            <span class="tag">Waves</span>
            <span class="tag">Light</span>
            <span class="tag">Optics</span>
          </div>
          <button class="btn mt-1" onclick="alert('Opening Waves module...')">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-atom card-icon"></i>
            <h3 class="card-title">Modern Physics</h3>
          </div>
          <div class="card-body">
            <p>Quantum mechanics, relativity, and atomic physics</p>
          </div>
          <div class="card-footer">
            <span class="tag">Quantum</span>
            <span class="tag">Relativity</span>
            <span class="tag">Nuclear</span>
          </div>
          <button class="btn mt-1" onclick="alert('Opening Modern Physics module...')">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-vial card-icon"></i>
            <h3 class="card-title">Physics Simulator</h3>
          </div>
          <div class="card-body">
            <p>Interactive simulations for all physics concepts</p>
          </div>
          <button class="btn mt-1" onclick="showSection('simulators')">Open Simulator</button>
        </div>
      </div>
    </div>
  `;
}

// ==================== CHEMISTRY ====================
function getChemistryContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-flask"></i> Chemistry Modules</h1>
      <p class="text-secondary">Explore the molecular world</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-leaf card-icon"></i>
            <h3 class="card-title">Organic Chemistry</h3>
          </div>
          <div class="card-body">
            <p>Carbon compounds, reactions, and mechanisms</p>
          </div>
          <div class="card-footer">
            <span class="tag">Hydrocarbons</span>
            <span class="tag">Reactions</span>
            <span class="tag">Mechanisms</span>
          </div>
          <button class="btn mt-1">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-atom card-icon"></i>
            <h3 class="card-title">Inorganic Chemistry</h3>
          </div>
          <div class="card-body">
            <p>Elements, compounds, and coordination chemistry</p>
          </div>
          <div class="card-footer">
            <span class="tag">Periodic Table</span>
            <span class="tag">Bonding</span>
            <span class="tag">Complexes</span>
          </div>
          <button class="btn mt-1">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-chart-line card-icon"></i>
            <h3 class="card-title">Physical Chemistry</h3>
          </div>
          <div class="card-body">
            <p>Thermodynamics, kinetics, and equilibrium</p>
          </div>
          <div class="card-footer">
            <span class="tag">Thermodynamics</span>
            <span class="tag">Kinetics</span>
            <span class="tag">Equilibrium</span>
          </div>
          <button class="btn mt-1">Start Learning</button>
        </div>
      </div>
    </div>
  `;
}

// ==================== MATHEMATICS ====================
function getMathsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-square-root-alt"></i> Mathematics Modules</h1>
      <p class="text-secondary">Build your mathematical foundation</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-infinity card-icon"></i>
            <h3 class="card-title">Calculus</h3>
          </div>
          <div class="card-body">
            <p>Limits, derivatives, integrals, and applications</p>
          </div>
          <div class="card-footer">
            <span class="tag">Limits</span>
            <span class="tag">Derivatives</span>
            <span class="tag">Integrals</span>
          </div>
          <button class="btn mt-1">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-calculator card-icon"></i>
            <h3 class="card-title">Algebra</h3>
          </div>
          <div class="card-body">
            <p>Equations, functions, and complex numbers</p>
          </div>
          <div class="card-footer">
            <span class="tag">Equations</span>
            <span class="tag">Functions</span>
            <span class="tag">Complex</span>
          </div>
          <button class="btn mt-1">Start Learning</button>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-shapes card-icon"></i>
            <h3 class="card-title">Geometry</h3>
          </div>
          <div class="card-body">
            <p>Shapes, vectors, and coordinate geometry</p>
          </div>
          <div class="card-footer">
            <span class="tag">2D Shapes</span>
            <span class="tag">3D Shapes</span>
            <span class="tag">Vectors</span>
          </div>
          <button class="btn mt-1">Start Learning</button>
        </div>
      </div>
    </div>
  `;
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentThemeIndex);
  showSection('dashboard');
});
