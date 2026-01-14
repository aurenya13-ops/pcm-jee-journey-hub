// ==================== FIRE THEMES (UPGRADED) ====================
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
let themeChangeTime = parseInt(localStorage.getItem('themeChangeTime') || (Date.now() + 48*60*60*1000));

function applyTheme(theme) {
  document.documentElement.style.setProperty('--primary', theme.primary);
  document.documentElement.style.setProperty('--secondary', theme.secondary);
  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--bg-primary', theme.bg1);
  document.documentElement.style.setProperty('--bg-secondary', theme.bg2);
  document.documentElement.style.setProperty('--bg-tertiary', theme.bg3);
  document.documentElement.style.setProperty('--glow', theme.glow);
  document.getElementById('theme-name').textContent = theme.name;
}

function updateThemeCountdown() {
  const remaining = themeChangeTime - Date.now();
  if (remaining <= 0) {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex]);
    themeChangeTime = Date.now() + 48*60*60*1000;
    localStorage.setItem('themeIndex', currentThemeIndex);
    localStorage.setItem('themeChangeTime', themeChangeTime);
  }
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  document.getElementById('theme-countdown').textContent = 
    `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

applyTheme(themes[currentThemeIndex]);
setInterval(updateThemeCountdown, 1000);

// ==================== NAVIGATION ====================
const mainContent = document.getElementById('main-content');
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadPage(page);
  });
});

function loadPage(page) {
  mainContent.style.opacity = '0';
  setTimeout(() => {
    switch(page) {
      case 'home': renderHome(); break;
      case 'dashboard': renderDashboard(); break;
      case 'music': renderMusic(); break;
      case 'physics': renderPhysics(); break;
      case 'chemistry': renderChemistry(); break;
      case 'maths': renderMaths(); break;
      case 'tech': renderTech(); break;
      case 'integration': renderIntegration(); break;
    }
    mainContent.style.opacity = '1';
  }, 200);
}

// ==================== RENDER FUNCTIONS ====================

function renderHome() {
  mainContent.innerHTML = `
    <div class="hero-section">
      <h1 class="hero-title">🚀 Welcome to PCM × Tech Journey Hub</h1>
      <p class="hero-subtitle">Where Physics, Chemistry, Maths meet Real Technology</p>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">100+</div>
          <div class="stat-label">Coding Challenges</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">50+</div>
          <div class="stat-label">Real Projects</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">200+</div>
          <div class="stat-label">Practice Problems</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">220+</div>
          <div class="stat-label">Music Tracks</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">30+</div>
          <div class="stat-label">Tech×PCM Modules</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">700+</div>
          <div class="stat-label">Learning Hours</div>
        </div>
      </div>

      <div class="features-grid">
        <div class="feature-card" onclick="loadPage('integration')">
          <div class="feature-icon">🔥</div>
          <h3>PCM × Tech Integration</h3>
          <p>30+ modules combining Physics, Chemistry, Maths with real technology</p>
        </div>
        
        <div class="feature-card" onclick="loadPage('music')">
          <div class="feature-icon">🎵</div>
          <h3>Music Sanctuary</h3>
          <p>220+ tracks across 16 categories for perfect study ambience</p>
        </div>
        
        <div class="feature-card" onclick="loadPage('tech')">
          <div class="feature-icon">💻</div>
          <h3>Technology Hub</h3>
          <p>Master Data Structures, Algorithms, Web Dev, AI/ML, and more</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🧠</div>
          <h3>Leadership & Psychology</h3>
          <p>Learn to think like CEOs: Elon Musk, Jeff Bezos, Steve Jobs</p>
        </div>
      </div>
    </div>
  `;
}

function renderDashboard() {
  mainContent.innerHTML = `
    <div class="dashboard">
      <h2>📊 Your Learning Dashboard</h2>
      <div class="progress-section">
        <h3>Progress Overview</h3>
        <div class="progress-cards">
          <div class="progress-card">
            <h4>Physics</h4>
            <div class="progress-bar"><div class="progress-fill" style="width: 35%"></div></div>
            <p>12/40 modules completed</p>
          </div>
          <div class="progress-card">
            <h4>Chemistry</h4>
            <div class="progress-bar"><div class="progress-fill" style="width: 28%"></div></div>
            <p>8/30 modules completed</p>
          </div>
          <div class="progress-card">
            <h4>Mathematics</h4>
            <div class="progress-bar"><div class="progress-fill" style="width: 42%"></div></div>
            <p>15/30 modules completed</p>
          </div>
          <div class="progress-card">
            <h4>Technology</h4>
            <div class="progress-bar"><div class="progress-fill" style="width: 20%"></div></div>
            <p>6/30 modules completed</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMusic() {
  mainContent.innerHTML = `
    <div class="music-section">
      <h2>🎵 Music Sanctuary - 220+ Tracks</h2>
      <p class="section-subtitle">Perfect ambience for studying, coding, and deep focus</p>
      
      <div class="music-categories">
        <button class="category-btn active" data-category="all">All (220+)</button>
        <button class="category-btn" data-category="lofi">Lofi (50+)</button>
        <button class="category-btn" data-category="motivation">Motivation (20)</button>
        <button class="category-btn" data-category="hindi">Hindi Motivation (14)</button>
        <button class="category-btn" data-category="bollywood">Bollywood (20)</button>
        <button class="category-btn" data-category="life-lessons">Life Lessons (20)</button>
        <button class="category-btn" data-category="classical">Classical (15)</button>
        <button class="category-btn" data-category="electronic">Electronic (18)</button>
        <button class="category-btn" data-category="phonk">Phonk/Funk (18)</button>
        <button class="category-btn" data-category="viral">Viral Hits (25)</button>
      </div>

      <div class="music-player">
        <div class="vinyl-animation">
          <div class="vinyl-disc"></div>
        </div>
        <div class="player-controls">
          <h3 id="now-playing">Select a track to play</h3>
          <div class="controls">
            <button class="control-btn">⏮️ Previous</button>
            <button class="control-btn">▶️ Play</button>
            <button class="control-btn">⏭️ Next</button>
          </div>
        </div>
      </div>

      <div class="track-list">
        <p>🎧 220+ high-quality tracks embedded with YouTube player</p>
        <p>🎵 16 categories including NEW Life Lessons & Dialogues</p>
        <p>🔥 Complete 3 Idiots album + 50+ Lofi tracks</p>
        <p>✨ Auto-play, next/previous controls, vinyl animation</p>
      </div>
    </div>
  `;
}

function renderPhysics() {
  mainContent.innerHTML = `
    <div class="subject-section">
      <h2>⚛️ Physics × Programming</h2>
      <p class="section-subtitle">40+ Coding Challenges | Real-world Applications</p>
      
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-icon">🎯</div>
          <h3>Kinematics × Algorithms</h3>
          <p>10 challenges: Projectile motion, Collision detection, Relative motion</p>
          <div class="module-tags">
            <span class="tag">Motion Simulator</span>
            <span class="tag">Canvas API</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🌊</div>
          <h3>Waves × Signal Processing</h3>
          <p>10 challenges: FFT, Standing waves, Doppler effect, Noise cancellation</p>
          <div class="module-tags">
            <span class="tag">Audio API</span>
            <span class="tag">Fourier Transform</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🔌</div>
          <h3>Electromagnetism × Electronics</h3>
          <p>10 challenges: Electric fields, RC circuits, Antenna patterns</p>
          <div class="module-tags">
            <span class="tag">Circuit Simulation</span>
            <span class="tag">Vector Fields</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🔥</div>
          <h3>Thermodynamics × Energy</h3>
          <p>10 challenges: Heat engines, Gas laws, Entropy, Phase transitions</p>
          <div class="module-tags">
            <span class="tag">Molecular Dynamics</span>
            <span class="tag">Statistical Mechanics</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderChemistry() {
  mainContent.innerHTML = `
    <div class="subject-section">
      <h2>🧪 Chemistry × Programming</h2>
      <p class="section-subtitle">30+ Coding Challenges | Molecular Simulations</p>
      
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-icon">⚛️</div>
          <h3>Atomic Structure × Quantum</h3>
          <p>10 challenges: Electron config, Orbital visualizer, Emission spectra</p>
          <div class="module-tags">
            <span class="tag">Quantum Mechanics</span>
            <span class="tag">3D Graphics</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🔗</div>
          <h3>Chemical Bonding × Modeling</h3>
          <p>10 challenges: Lewis structures, VSEPR, Molecular orbitals</p>
          <div class="module-tags">
            <span class="tag">Graph Theory</span>
            <span class="tag">3D Visualization</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">⚗️</div>
          <h3>Chemical Kinetics × Simulation</h3>
          <p>10 challenges: Reaction rates, Arrhenius equation, Enzyme kinetics</p>
          <div class="module-tags">
            <span class="tag">Differential Equations</span>
            <span class="tag">Curve Fitting</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMaths() {
  mainContent.innerHTML = `
    <div class="subject-section">
      <h2>📐 Mathematics × Algorithms</h2>
      <p class="section-subtitle">30+ Coding Challenges | Machine Learning Applications</p>
      
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-icon">📈</div>
          <h3>Calculus × Machine Learning</h3>
          <p>10 challenges: Gradient descent, Numerical integration, Backpropagation</p>
          <div class="module-tags">
            <span class="tag">Neural Networks</span>
            <span class="tag">Optimization</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🔢</div>
          <h3>Linear Algebra × Graphics</h3>
          <p>10 challenges: Matrix operations, Eigenvalues, 3D transformations</p>
          <div class="module-tags">
            <span class="tag">Computer Graphics</span>
            <span class="tag">WebGL</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🎲</div>
          <h3>Probability × Data Science</h3>
          <p>10 challenges: Monte Carlo, Bayesian inference, Time series</p>
          <div class="module-tags">
            <span class="tag">Statistics</span>
            <span class="tag">Forecasting</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTech() {
  mainContent.innerHTML = `
    <div class="subject-section">
      <h2>💻 Technology Hub</h2>
      <p class="section-subtitle">30+ Modules | Industry-Ready Skills</p>
      
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-icon">🗂️</div>
          <h3>Data Structures & Algorithms</h3>
          <p>Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, Dynamic Programming</p>
          <div class="module-tags">
            <span class="tag">LeetCode</span>
            <span class="tag">Interview Prep</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🌐</div>
          <h3>Full-Stack Web Development</h3>
          <p>HTML/CSS/JS, React, Node.js, Express, MongoDB, REST APIs, Authentication</p>
          <div class="module-tags">
            <span class="tag">MERN Stack</span>
            <span class="tag">Projects</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🤖</div>
          <h3>Artificial Intelligence & ML</h3>
          <p>Neural Networks, Deep Learning, NLP, Computer Vision, TensorFlow, PyTorch</p>
          <div class="module-tags">
            <span class="tag">AI/ML</span>
            <span class="tag">Python</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🔐</div>
          <h3>Blockchain & Cryptography</h3>
          <p>Bitcoin, Ethereum, Smart Contracts, Solidity, Web3, DeFi, NFTs</p>
          <div class="module-tags">
            <span class="tag">Web3</span>
            <span class="tag">Solidity</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">☁️</div>
          <h3>Cloud Computing & DevOps</h3>
          <p>AWS, Docker, Kubernetes, CI/CD, Microservices, Serverless</p>
          <div class="module-tags">
            <span class="tag">AWS</span>
            <span class="tag">Docker</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">📱</div>
          <h3>Mobile App Development</h3>
          <p>React Native, Flutter, iOS (Swift), Android (Kotlin), Cross-platform</p>
          <div class="module-tags">
            <span class="tag">React Native</span>
            <span class="tag">Flutter</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🎮</div>
          <h3>Game Development</h3>
          <p>Unity, Unreal Engine, Game Physics, Graphics Programming, Shaders</p>
          <div class="module-tags">
            <span class="tag">Unity</span>
            <span class="tag">C#</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🔬</div>
          <h3>Quantum Computing</h3>
          <p>Qubits, Quantum Gates, Quantum Algorithms, Qiskit, Quantum Circuits</p>
          <div class="module-tags">
            <span class="tag">Qiskit</span>
            <span class="tag">IBM Quantum</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🤖</div>
          <h3>Robotics & IoT</h3>
          <p>Arduino, Raspberry Pi, Sensors, Actuators, ROS, Autonomous Systems</p>
          <div class="module-tags">
            <span class="tag">Arduino</span>
            <span class="tag">Python</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🎨</div>
          <h3>Computer Graphics & Vision</h3>
          <p>OpenGL, WebGL, Ray Tracing, Image Processing, OpenCV, 3D Rendering</p>
          <div class="module-tags">
            <span class="tag">OpenGL</span>
            <span class="tag">OpenCV</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🔊</div>
          <h3>Audio & Signal Processing</h3>
          <p>FFT, Audio Synthesis, Music Generation, Speech Recognition, DSP</p>
          <div class="module-tags">
            <span class="tag">Web Audio API</span>
            <span class="tag">DSP</span>
          </div>
        </div>

        <div class="module-card">
          <div class="module-icon">🌐</div>
          <h3>Networking & Distributed Systems</h3>
          <p>TCP/IP, HTTP, WebSockets, P2P, Distributed Databases, Consensus</p>
          <div class="module-tags">
            <span class="tag">Networking</span>
            <span class="tag">Distributed</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderIntegration() {
  mainContent.innerHTML = `
    <div class="integration-section">
      <h2>🔥 PCM × Tech Integration</h2>
      <p class="section-subtitle">30+ Modules | 100+ Challenges | 50+ Projects</p>
      
      <div class="integration-categories">
        <div class="category-section">
          <h3>⚛️ Quantum & Physics (5 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Quantum Computing × Chemistry</h4>
              <p>Simulate molecular behavior, drug discovery, VQE algorithm</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Quantum Mechanics Visualizer</h4>
              <p>Wave functions, Schrödinger equation, particle in a box</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Quantum Algorithms</h4>
              <p>Deutsch, Grover, Shor's algorithm, quantum gates</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>Particle Physics Simulator</h4>
              <p>Collisions, decay, conservation laws, Feynman diagrams</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Quantum Cryptography</h4>
              <p>BB84 protocol, quantum key distribution, security</p>
              <span class="difficulty hard">Expert</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🎨 Vision & Graphics (5 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Ray Tracing Engine</h4>
              <p>Light physics, reflection, refraction, realistic rendering</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>Computer Vision × Optics</h4>
              <p>Image processing, edge detection, feature extraction</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>3D Graphics Pipeline</h4>
              <p>Transformations, projection, shaders, WebGL</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Photorealistic Rendering</h4>
              <p>Path tracing, global illumination, materials</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>AR/VR Physics</h4>
              <p>Spatial computing, 3D tracking, immersive experiences</p>
              <span class="difficulty medium">Advanced</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🤖 Robotics & Automation (4 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Robot Kinematics</h4>
              <p>Forward/inverse kinematics, path planning, motion control</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Autonomous Navigation</h4>
              <p>SLAM, sensor fusion, obstacle avoidance, mapping</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>Control Systems</h4>
              <p>PID control, state space, feedback loops, stability</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Swarm Intelligence</h4>
              <p>Multi-agent systems, collective behavior, optimization</p>
              <span class="difficulty hard">Expert</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🌐 Networks & Distributed (4 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Network Protocols</h4>
              <p>TCP/IP, routing algorithms, packet switching</p>
              <span class="difficulty medium">Intermediate</span>
            </div>
            <div class="module-card">
              <h4>Distributed Consensus</h4>
              <p>Paxos, Raft, Byzantine fault tolerance</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>P2P Networks</h4>
              <p>DHT, BitTorrent, decentralized systems</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Load Balancing</h4>
              <p>Algorithms, distributed systems, scalability</p>
              <span class="difficulty medium">Advanced</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🧠 AI & Machine Learning (3 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Neural Networks from Scratch</h4>
              <p>Backpropagation, gradient descent, activation functions</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>Deep Learning × Calculus</h4>
              <p>Optimization, automatic differentiation, computational graphs</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>Reinforcement Learning</h4>
              <p>Q-learning, policy gradients, game AI</p>
              <span class="difficulty hard">Expert</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🔐 Blockchain & Security (2 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Cryptography × Number Theory</h4>
              <p>RSA, elliptic curves, hash functions, digital signatures</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>Blockchain from Scratch</h4>
              <p>Proof of work, consensus, smart contracts</p>
              <span class="difficulty medium">Advanced</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>⚡ Energy & Materials (3 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Battery Optimization</h4>
              <p>Electrochemistry, energy density, charging algorithms</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Solar Cell Simulation</h4>
              <p>Photovoltaics, quantum efficiency, material properties</p>
              <span class="difficulty medium">Advanced</span>
            </div>
            <div class="module-card">
              <h4>Material Science × ML</h4>
              <p>Property prediction, molecular dynamics, DFT</p>
              <span class="difficulty hard">Expert</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🔬 Simulation & Modeling (3 modules)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Computational Fluid Dynamics</h4>
              <p>Navier-Stokes, lattice Boltzmann, turbulence</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>Molecular Dynamics</h4>
              <p>Force fields, integration, thermostats</p>
              <span class="difficulty hard">Expert</span>
            </div>
            <div class="module-card">
              <h4>N-Body Gravity Simulator</h4>
              <p>Gravitational physics, Barnes-Hut, orbital mechanics</p>
              <span class="difficulty medium">Advanced</span>
            </div>
          </div>
        </div>

        <div class="category-section">
          <h3>🌐 Full-Stack Web Dev (1 module)</h3>
          <div class="modules-grid">
            <div class="module-card">
              <h4>Complete MERN Stack</h4>
              <p>MongoDB, Express, React, Node.js, REST APIs, Auth</p>
              <span class="difficulty medium">Intermediate</span>
            </div>
          </div>
        </div>
      </div>

      <div class="stats-banner">
        <div class="stat-item">
          <div class="stat-number">30+</div>
          <div class="stat-label">Modules</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100+</div>
          <div class="stat-label">Challenges</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Hours</div>
        </div>
      </div>
    </div>
  `;
}

// Initialize
loadPage('home');