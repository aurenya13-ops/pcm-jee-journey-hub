// ==================== FIRE THEMES WITH LIVE SWITCHING ====================
const themes = [
  { 
    name: '🔥 Neon Cyberpunk', 
    primary: '#ff006e', 
    secondary: '#8338ec', 
    accent: '#00f5ff', 
    bg1: '#0a0e27', 
    bg2: '#1a1f3a', 
    bg3: '#2a2f4a',
    glow: '#ff006e'
  },
  { 
    name: '🌅 Sunset Paradise', 
    primary: '#ff6b35', 
    secondary: '#f7931e', 
    accent: '#ffd23f', 
    bg1: '#1a0a2e', 
    bg2: '#2d1b3d', 
    bg3: '#3d2c5e',
    glow: '#ff6b35'
  },
  { 
    name: '🌊 Ocean Depths', 
    primary: '#00d9ff', 
    secondary: '#0099ff', 
    accent: '#00ffcc', 
    bg1: '#001a33', 
    bg2: '#002b4d', 
    bg3: '#003d66',
    glow: '#00d9ff'
  },
  { 
    name: '🌲 Matrix Green', 
    primary: '#00ff41', 
    secondary: '#00cc33', 
    accent: '#39ff14', 
    bg1: '#0d1b0e', 
    bg2: '#1a2f1b', 
    bg3: '#274428',
    glow: '#00ff41'
  },
  { 
    name: '💜 Purple Reign', 
    primary: '#b537f2', 
    secondary: '#9d4edd', 
    accent: '#e0aaff', 
    bg1: '#1a0033', 
    bg2: '#2d0052', 
    bg3: '#400070',
    glow: '#b537f2'
  },
  { 
    name: '⚡ Electric Gold', 
    primary: '#ffd60a', 
    secondary: '#ffc300', 
    accent: '#ffea00', 
    bg1: '#1f1300', 
    bg2: '#3d2600', 
    bg3: '#5c3900',
    glow: '#ffd60a'
  },
  {
    name: '🎮 Retro Arcade',
    primary: '#ff00ff',
    secondary: '#00ffff',
    accent: '#ffff00',
    bg1: '#0a0014',
    bg2: '#1a0028',
    bg3: '#2a003c',
    glow: '#ff00ff'
  },
  {
    name: '🌌 Deep Space',
    primary: '#7b2cbf',
    secondary: '#5a189a',
    accent: '#c77dff',
    bg1: '#000000',
    bg2: '#0d0221',
    bg3: '#1a0442',
    glow: '#7b2cbf'
  }
];

let currentThemeIndex = parseInt(localStorage.getItem('themeIndex') || '0');

function applyTheme(index) {
  const theme = themes[index];
  document.documentElement.style.setProperty('--primary', theme.primary);
  document.documentElement.style.setProperty('--secondary', theme.secondary);
  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--bg-primary', theme.bg1);
  document.documentElement.style.setProperty('--bg-secondary', theme.bg2);
  document.documentElement.style.setProperty('--bg-tertiary', theme.bg3);
  document.documentElement.style.setProperty('--glow', theme.glow);
  
  const themeNameEl = document.getElementById('theme-name');
  if (themeNameEl) {
    themeNameEl.textContent = theme.name;
  }
  
  localStorage.setItem('themeIndex', index);
  currentThemeIndex = index;
  
  console.log('Theme applied:', theme.name); // Debug log
}

function nextTheme() {
  console.log('Next theme clicked'); // Debug log
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(currentThemeIndex);
}

function prevTheme() {
  console.log('Previous theme clicked'); // Debug log
  currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
  applyTheme(currentThemeIndex);
}

// Make functions globally accessible
window.nextTheme = nextTheme;
window.prevTheme = prevTheme;
window.applyTheme = applyTheme;

// ==================== MUSIC PLAYER (REAL WORKING) ====================
const musicData = {
  lofi: [
    { title: 'Lofi Study Beats', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk' },
    { title: 'Chill Lofi Mix', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A' },
    { title: 'Peaceful Piano', url: 'https://www.youtube.com/watch?v=lTRiuFIWV54' }
  ],
  focus: [
    { title: 'Deep Focus', url: 'https://www.youtube.com/watch?v=DWcJFNfaw9c' },
    { title: 'Concentration Music', url: 'https://www.youtube.com/watch?v=WPni755-Krg' },
    { title: 'Study Music', url: 'https://www.youtube.com/watch?v=5yx6BWlEVcY' }
  ],
  classical: [
    { title: 'Mozart for Studying', url: 'https://www.youtube.com/watch?v=Rb0UmrCXxVA' },
    { title: 'Bach Masterpieces', url: 'https://www.youtube.com/watch?v=6JQm5aSjX6g' },
    { title: 'Beethoven Symphony', url: 'https://www.youtube.com/watch?v=t3217H8JppI' }
  ],
  ambient: [
    { title: 'Space Ambient', url: 'https://www.youtube.com/watch?v=1-RW82JF1lY' },
    { title: 'Nature Sounds', url: 'https://www.youtube.com/watch?v=eKFTSSKCzWA' },
    { title: 'Rain Sounds', url: 'https://www.youtube.com/watch?v=q76bMs-NwRk' }
  ]
};

let currentCategory = 'lofi';
let currentTrackIndex = 0;
let isPlaying = false;

function playMusic() {
  const track = musicData[currentCategory][currentTrackIndex];
  window.open(track.url, '_blank');
  isPlaying = true;
  updateMusicDisplay();
}

function pauseMusic() {
  isPlaying = false;
  updateMusicDisplay();
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % musicData[currentCategory].length;
  updateMusicDisplay();
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + musicData[currentCategory].length) % musicData[currentCategory].length;
  updateMusicDisplay();
}

function selectCategory(category) {
  currentCategory = category;
  currentTrackIndex = 0;
  updateMusicDisplay();
  
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function updateMusicDisplay() {
  const track = musicData[currentCategory][currentTrackIndex];
  const playerHTML = document.querySelector('.player-controls h3');
  if (playerHTML) {
    playerHTML.textContent = `Now Playing: ${track.title}`;
  }
}

// Make music functions globally accessible
window.playMusic = playMusic;
window.pauseMusic = pauseMusic;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.selectCategory = selectCategory;

// ==================== NAVIGATION ====================
function showSection(section) {
  console.log('Showing section:', section); // Debug log
  const content = document.getElementById('main-content');
  
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  event?.target?.classList?.add('active');
  
  switch(section) {
    case 'home':
      content.innerHTML = getHomeContent();
      break;
    case 'dashboard':
      content.innerHTML = getDashboardContent();
      break;
    case 'music':
      content.innerHTML = getMusicContent();
      break;
    case 'physics':
      content.innerHTML = getPhysicsContent();
      break;
    case 'chemistry':
      content.innerHTML = getChemistryContent();
      break;
    case 'maths':
      content.innerHTML = getMathsContent();
      break;
    case 'tech':
      content.innerHTML = getTechContent();
      break;
    case 'integration':
      content.innerHTML = getIntegrationContent();
      break;
  }
}

// Make showSection globally accessible
window.showSection = showSection;

// ==================== CONTENT GENERATORS ====================
function getHomeContent() {
  return `
    <div class="hero-section">
      <h1 class="hero-title">Welcome to Your Learning Journey! 🚀</h1>
      <p class="hero-subtitle">Master Physics, Chemistry, Maths & Technology - All in One Place</p>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">4</div>
          <div class="stat-label">Core Subjects</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">30+</div>
          <div class="stat-label">Modules</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100+</div>
          <div class="stat-label">Topics</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">∞</div>
          <div class="stat-label">Possibilities</div>
        </div>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚛️</div>
          <h3>Physics Mastery</h3>
          <p>From classical mechanics to quantum physics - understand the universe!</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🧪</div>
          <h3>Chemistry Excellence</h3>
          <p>Explore reactions, bonding, and the molecular world!</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📐</div>
          <h3>Mathematical Thinking</h3>
          <p>Build problem-solving skills with calculus, algebra & more!</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💻</div>
          <h3>Tech Integration</h3>
          <p>Apply concepts through coding, simulations & real projects!</p>
        </div>
      </div>
    </div>
  `;
}

function getDashboardContent() {
  return `
    <div class="dashboard">
      <h2>Your Learning Dashboard 📊</h2>
      
      <div class="progress-section">
        <h3>Subject Progress</h3>
        <div class="progress-cards">
          <div class="progress-card">
            <h4>⚛️ Physics</h4>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
            <p>75% Complete - Keep going!</p>
          </div>
          <div class="progress-card">
            <h4>🧪 Chemistry</h4>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 60%"></div>
            </div>
            <p>60% Complete - Great progress!</p>
          </div>
          <div class="progress-card">
            <h4>📐 Maths</h4>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 80%"></div>
            </div>
            <p>80% Complete - Almost there!</p>
          </div>
          <div class="progress-card">
            <h4>💻 Technology</h4>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 65%"></div>
            </div>
            <p>65% Complete - Doing great!</p>
          </div>
        </div>
      </div>

      <div class="stats-banner">
        <div class="stat-item">
          <div class="stat-number">700+</div>
          <div class="stat-label">Hours Studied</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">250+</div>
          <div class="stat-label">Problems Solved</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">85%</div>
          <div class="stat-label">Average Score</div>
        </div>
      </div>
    </div>
  `;
}

function getMusicContent() {
  return `
    <div class="music-section">
      <h2>🎵 Study Music Player</h2>
      <p class="section-subtitle">Boost your focus with curated playlists</p>

      <div class="music-categories">
        <button class="category-btn active" onclick="selectCategory('lofi')">Lofi Beats</button>
        <button class="category-btn" onclick="selectCategory('focus')">Deep Focus</button>
        <button class="category-btn" onclick="selectCategory('classical')">Classical</button>
        <button class="category-btn" onclick="selectCategory('ambient')">Ambient</button>
      </div>

      <div class="music-player">
        <div class="vinyl-animation">
          <div class="vinyl-disc"></div>
        </div>
        <div class="player-controls">
          <h3>Now Playing: ${musicData[currentCategory][currentTrackIndex].title}</h3>
          <div class="controls">
            <button class="control-btn" onclick="prevTrack()">⏮️ Previous</button>
            <button class="control-btn" onclick="playMusic()">▶️ Play</button>
            <button class="control-btn" onclick="pauseMusic()">⏸️ Pause</button>
            <button class="control-btn" onclick="nextTrack()">⏭️ Next</button>
          </div>
        </div>
      </div>

      <div class="track-list">
        <h3>Track List:</h3>
        ${musicData[currentCategory].map((track, i) => 
          `<p>${i + 1}. ${track.title}</p>`
        ).join('')}
      </div>
    </div>
  `;
}

function getPhysicsContent() {
  return `
    <div class="subject-section">
      <h2>⚛️ Physics Modules</h2>
      <p class="section-subtitle">Understand the fundamental laws of nature</p>
      
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-icon">🎯</div>
          <h3>Classical Mechanics</h3>
          <p>Newton's laws, motion, forces, energy, and momentum</p>
          <div class="module-tags">
            <span class="tag">Kinematics</span>
            <span class="tag">Dynamics</span>
            <span class="tag">Energy</span>
          </div>
          <span class="difficulty medium">Medium</span>
        </div>
        
        <div class="module-card">
          <div class="module-icon">⚡</div>
          <h3>Electromagnetism</h3>
          <p>Electric fields, magnetic fields, circuits, and waves</p>
          <div class="module-tags">
            <span class="tag">Electricity</span>
            <span class="tag">Magnetism</span>
            <span class="tag">Waves</span>
          </div>
          <span class="difficulty hard">Hard</span>
        </div>
        
        <div class="module-card">
          <div class="module-icon">🌡️</div>
          <h3>Thermodynamics</h3>
          <p>Heat, temperature, entropy, and energy transfer</p>
          <div class="module-tags">
            <span class="tag">Heat</span>
            <span class="tag">Laws</span>
            <span class="tag">Engines</span>
          </div>
          <span class="difficulty medium">Medium</span>
        </div>
        
        <div class="module-card">
          <div class="module-icon">🌊</div>
          <h3>Waves & Optics</h3>
          <p>Wave motion, sound, light, and optical phenomena</p>
          <div class="module-tags">
            <span class="tag">Waves</span>
            <span class="tag">Light</span>
            <span class="tag">Optics</span>
          </div>
          <span class="difficulty medium">Medium</span>
        </div>
      </div>
    </div>
  `;
}

function getChemistryContent() {
  return `
    <div class="subject-section">
      <h2>🧪 Chemistry Modules</h2>
      <p class="section-subtitle">Explore the molecular world</p>
      
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-icon">🔬</div>
          <h3>Organic Chemistry</h3>
          <p>Carbon compounds, reactions, and mechanisms</p>
          <div class="module-tags">
            <span class="tag">Hydrocarbons</span>
            <span class="tag">Reactions</span>
            <span class="tag">Mechanisms</span>
          </div>
          <span class="difficulty hard">Hard</span>
        </div>
        
        <div class="module-card">
          <div class="module-icon">⚗️</div>
          <h3>Inorganic Chemistry</h3>
          <p>Elements, compounds, and coordination chemistry</p>
          <div class="module-tags">
            <span class="tag">Periodic Table</span>
            <span class="tag">Bonding</span>
            <span class="tag">Complexes</span>
          </div>
          <span class="difficulty medium">Medium</span>
        </div>
        
        <div class="module-card">
          <div class="module-icon">📊</div>
          <h3>Physical Chemistry</h3>
          <p>Thermodynamics, kinetics, and equilibrium</p>
          <div class="module-tags">
            <span class="tag">Thermodynamics</span>
            <span class="tag">Kinetics</span>
            <span class="tag">Equilibrium</span>
          </div>
          <span class="difficulty hard">Hard</span>
        </div>
      </div>
    </div>
  `;
}

function getMathsContent() {
  return `
    <div class="subject-section">
      <h2>📐 Mathematics Modules</h2>
      <p class="section-subtitle">Build your mathematical foundation</p>
      
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-icon">∫</div>
          <h3>Calculus</h3>
          <p>Differentiation, integration, and applications</p>
          <div class="module-tags">
            <span class="tag">Limits</span>
            <span class="tag">Derivatives</span>
            <span class="tag">Integrals</span>
          </div>
          <span class="difficulty hard">Hard</span>
        </div>
        
        <div class="module-card">
          <div class="module-icon">📈</div>
          <h3>Algebra</h3>
          <p>Equations, functions, and complex numbers</p>
          <div class="module-tags">
            <span class="tag">Equations</span>
            <span class="tag">Functions</span>
            <span class="tag">Complex</span>
          </div>
          <span class="difficulty medium">Medium</span>
        </div>
        
        <div class="module-card">
          <div class="module-icon">📐</div>
          <h3>Geometry</h3>
          <p>Shapes, vectors, and coordinate geometry</p>
          <div class="module-tags">
            <span class="tag">2D Shapes</span>
            <span class="tag">3D Shapes</span>
            <span class="tag">Vectors</span>
          </div>
          <span class="difficulty medium">Medium</span>
        </div>
      </div>
    </div>
  `;
}

function getTechContent() {
  return `
    <div class="subject-section">
      <h2>💻 Technology Modules</h2>
      <p class="section-subtitle">Apply your knowledge through code</p>
      
      <div class="modules-grid">
        <div class="module-card" onclick="window.open('https://visualgo.net/en', '_blank')">
          <div class="module-icon">🌳</div>
          <h3>Data Structures Visualizer</h3>
          <p>Interactive visualization of trees, graphs, sorting algorithms</p>
          <div class="module-tags">
            <span class="tag">Trees</span>
            <span class="tag">Graphs</span>
            <span class="tag">Sorting</span>
          </div>
        </div>
        
        <div class="module-card" onclick="window.open('https://codesandbox.io/s/new', '_blank')">
          <div class="module-icon">🌐</div>
          <h3>Full-Stack Web Playground</h3>
          <p>Build React, Vue, Angular apps instantly in browser</p>
          <div class="module-tags">
            <span class="tag">React</span>
            <span class="tag">Vue</span>
            <span class="tag">Angular</span>
          </div>
        </div>
        
        <div class="module-card" onclick="window.open('https://colab.research.google.com/', '_blank')">
          <div class="module-icon">🤖</div>
          <h3>Machine Learning Lab</h3>
          <p>Train ML models with FREE GPUs on Google Colab</p>
          <div class="module-tags">
            <span class="tag">Python</span>
            <span class="tag">TensorFlow</span>
            <span class="tag">PyTorch</span>
          </div>
        </div>
        
        <div class="module-card" onclick="window.open('https://remix.ethereum.org/', '_blank')">
          <div class="module-icon">⛓️</div>
          <h3>Blockchain Builder</h3>
          <p>Write and deploy Ethereum smart contracts</p>
          <div class="module-tags">
            <span class="tag">Solidity</span>
            <span class="tag">Web3</span>
            <span class="tag">DApps</span>
          </div>
        </div>
        
        <div class="module-card" onclick="window.open('https://editor.gdevelop.io/', '_blank')">
          <div class="module-icon">🎮</div>
          <h3>Game Dev Studio</h3>
          <p>Create 2D/3D games without coding using GDevelop</p>
          <div class="module-tags">
            <span class="tag">No-Code</span>
            <span class="tag">2D/3D</span>
            <span class="tag">Physics</span>
          </div>
        </div>
        
        <div class="module-card" onclick="window.open('https://snack.expo.dev/', '_blank')">
          <div class="module-icon">📱</div>
          <h3>Mobile App Builder</h3>
          <p>Build React Native apps and test on your phone</p>
          <div class="module-tags">
            <span class="tag">React Native</span>
            <span class="tag">iOS</span>
            <span class="tag">Android</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getIntegrationContent() {
  return `
    <div class="integration-section">
      <h2>🔥 PCM × Technology Integration</h2>
      <p class="section-subtitle">Where Science Meets Code - Real Interactive Tools!</p>
      
      <div class="integration-categories">
        <div class="category-section">
          <h3>⚛️ Physics × Tech</h3>
          <div class="modules-grid">
            <div class="module-card" onclick="window.open('https://quantum-computing.ibm.com/composer', '_blank')">
              <div class="module-icon">💫</div>
              <h4>Quantum Computing × Chemistry</h4>
              <p>Build quantum circuits on IBM Quantum Composer</p>
              <div class="module-tags">
                <span class="tag">Quantum</span>
                <span class="tag">IBM</span>
                <span class="tag">Circuits</span>
              </div>
            </div>
            
            <div class="module-card" onclick="window.open('https://www.shadertoy.com/new', '_blank')">
              <div class="module-icon">🎨</div>
              <h4>Ray Tracing Engine</h4>
              <p>Create stunning graphics with ShaderToy</p>
              <div class="module-tags">
                <span class="tag">GLSL</span>
                <span class="tag">Graphics</span>
                <span class="tag">Physics</span>
              </div>
            </div>
            
            <div class="module-card" onclick="window.open('https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_en.html', '_blank')">
              <div class="module-icon">💥</div>
              <h4>Particle Physics Simulator</h4>
              <p>Simulate particle collisions with PhET</p>
              <div class="module-tags">
                <span class="tag">Collisions</span>
                <span class="tag">Momentum</span>
                <span class="tag">Energy</span>
              </div>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🧪 Chemistry × Tech</h3>
          <div class="modules-grid">
            <div class="module-card" onclick="window.open('https://playground.tensorflow.org/', '_blank')">
              <div class="module-icon">🧠</div>
              <h4>Neural Network Builder</h4>
              <p>Build & train neural networks visually</p>
              <div class="module-tags">
                <span class="tag">ML</span>
                <span class="tag">Neural Nets</span>
                <span class="tag">Visual</span>
              </div>
            </div>
            
            <div class="module-card" onclick="window.open('https://cryptii.com/', '_blank')">
              <div class="module-icon">🔐</div>
              <h4>Cryptography Lab</h4>
              <p>Experiment with encryption algorithms</p>
              <div class="module-tags">
                <span class="tag">Encryption</span>
                <span class="tag">Ciphers</span>
                <span class="tag">Security</span>
              </div>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>📐 Maths × Tech</h3>
          <div class="modules-grid">
            <div class="module-card" onclick="window.open('https://paveldogreat.github.io/WebGL-Fluid-Simulation/', '_blank')">
              <div class="module-icon">🌊</div>
              <h4>Fluid Dynamics Simulator</h4>
              <p>Play with real fluid physics in browser</p>
              <div class="module-tags">
                <span class="tag">WebGL</span>
                <span class="tag">Physics</span>
                <span class="tag">Simulation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...'); // Debug log
  applyTheme(currentThemeIndex);
  showSection('home');
});
