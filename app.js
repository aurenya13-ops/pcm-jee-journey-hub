// ==================== THEME MANAGEMENT ====================
const themes = [
  { name: 'Cosmic Blue', primary: '#667eea', secondary: '#764ba2', accent: '#f093fb', bg1: '#0f0c29', bg2: '#302b63', bg3: '#24243e' },
  { name: 'Sunset Vibes', primary: '#f857a6', secondary: '#ff5858', accent: '#ffd89b', bg1: '#1a0a2e', bg2: '#3d2c5e', bg3: '#5a3d7a' },
  { name: 'Ocean Dreams', primary: '#00d2ff', secondary: '#3a7bd5', accent: '#00f2fe', bg1: '#0a192f', bg2: '#172a45', bg3: '#1e3a5f' },
  { name: 'Forest Calm', primary: '#56ab2f', secondary: '#a8e063', accent: '#7bed9f', bg1: '#0d1b0e', bg2: '#1a2f1b', bg3: '#274428' },
  { name: 'Purple Haze', primary: '#a044ff', secondary: '#6a3093', accent: '#e94057', bg1: '#1a0033', bg2: '#2d0052', bg3: '#400070' },
  { name: 'Golden Hour', primary: '#f7971e', secondary: '#ffd200', accent: '#ffed4e', bg1: '#1f1300', bg2: '#3d2600', bg3: '#5c3900' }
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
    }
    mainContent.style.opacity = '1';
  }, 200);
}

// ==================== DATA ====================
const musicData = [
  { id: 1, title: 'Pal Pal', artist: 'Talwinder, Afusic', videoId: 'Uj3_xjoTfLQ', category: 'hindi' },
  { id: 2, title: 'Paaro', artist: 'Shubh', videoId: 'Uj3_xjoTfLQ', category: 'hindi' },
  { id: 3, title: 'See You Again', artist: 'Wiz Khalifa ft. Charlie Puth', videoId: 'RgKAFK5djSk', category: 'english' },
  { id: 4, title: 'Night Changes', artist: 'One Direction', videoId: 'syFZfO_wfMQ', category: 'english' },
  { id: 5, title: 'Believer', artist: 'Imagine Dragons', videoId: '7wtfhZwyrcc', category: 'motivation' },
  { id: 6, title: 'Unstoppable', artist: 'Sia', videoId: 'cxorfhKPRJI', category: 'motivation' },
  { id: 7, title: 'Kesariya', artist: 'Arijit Singh', videoId: 'Uj3_xjoTfLQ', category: 'hindi' },
  { id: 8, title: 'Perfect', artist: 'Ed Sheeran', videoId: '2Vv-BfVoq4g', category: 'english' },
  { id: 9, title: 'Apna Time Aayega', artist: 'Ranveer Singh', videoId: 'jFGKtPODZ6k', category: 'motivation' },
  { id: 10, title: 'Channa Mereya', artist: 'Arijit Singh', videoId: 'bzSTpdcs-EI', category: 'hindi' }
];

const physicsData = [
  {
    id: 1,
    title: 'Units & Measurements',
    class: 11,
    description: 'Master SI units, dimensional analysis, and measurement techniques',
    videoId: 'Uj3_xjoTfLQ',
    notes: [
      'SI Units: 7 fundamental units (m, kg, s, A, K, mol, cd)',
      'Dimensional Formula: [M^a L^b T^c]',
      'Significant Figures: Rules for counting and calculations',
      'Error Analysis: Absolute, relative, and percentage errors'
    ],
    quiz: [
      {
        question: 'What is the dimensional formula of Force?',
        options: ['[MLT⁻²]', '[ML²T⁻²]', '[MLT⁻¹]', '[ML²T⁻¹]'],
        correct: 0,
        explanation: 'Force = mass × acceleration = M × LT⁻² = [MLT⁻²]'
      },
      {
        question: 'Which of these is a fundamental unit?',
        options: ['Newton', 'Joule', 'Kilogram', 'Watt'],
        correct: 2,
        explanation: 'Kilogram is a fundamental unit of mass in SI system'
      },
      {
        question: 'If length = 5.00 cm and breadth = 2.0 cm, what is the area with correct significant figures?',
        options: ['10 cm²', '10.0 cm²', '10.00 cm²', '1.0 × 10¹ cm²'],
        correct: 3,
        explanation: 'Result should have 2 significant figures (least in given data): 5.00 × 2.0 = 10 = 1.0 × 10¹ cm²'
      },
      {
        question: 'What is the SI unit of luminous intensity?',
        options: ['Lumen', 'Candela', 'Lux', 'Watt'],
        correct: 1,
        explanation: 'Candela (cd) is the SI unit of luminous intensity'
      },
      {
        question: 'Dimensional formula of energy is:',
        options: ['[ML²T⁻²]', '[MLT⁻²]', '[ML²T⁻¹]', '[MLT⁻¹]'],
        correct: 0,
        explanation: 'Energy = Force × Distance = [MLT⁻²][L] = [ML²T⁻²]'
      }
    ]
  },
  {
    id: 2,
    title: 'Motion in a Straight Line',
    class: 11,
    description: 'Understand kinematics, velocity, acceleration, and equations of motion',
    videoId: 'Uj3_xjoTfLQ',
    notes: [
      'Displacement: Shortest distance between initial and final position',
      'Velocity: Rate of change of displacement (vector)',
      'Acceleration: Rate of change of velocity',
      'Equations: v = u + at, s = ut + ½at², v² = u² + 2as'
    ],
    quiz: [
      {
        question: 'A car accelerates from rest at 2 m/s². What is its velocity after 5 seconds?',
        options: ['5 m/s', '10 m/s', '15 m/s', '20 m/s'],
        correct: 1,
        explanation: 'v = u + at = 0 + 2×5 = 10 m/s'
      },
      {
        question: 'Which equation relates velocity, acceleration, and displacement?',
        options: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 's = (u+v)t/2'],
        correct: 2,
        explanation: 'v² = u² + 2as is the equation that relates velocity, acceleration, and displacement'
      },
      {
        question: 'A ball is thrown upward with velocity 20 m/s. What is the maximum height? (g = 10 m/s²)',
        options: ['10 m', '20 m', '30 m', '40 m'],
        correct: 1,
        explanation: 'At max height, v = 0. Using v² = u² - 2gh: 0 = 400 - 20h, h = 20 m'
      },
      {
        question: 'What is the nature of displacement-time graph for uniform motion?',
        options: ['Straight line', 'Parabola', 'Hyperbola', 'Circle'],
        correct: 0,
        explanation: 'For uniform motion, displacement-time graph is a straight line'
      },
      {
        question: 'If a body starts from rest and moves with constant acceleration, distance covered in nth second is:',
        options: ['u + a(2n-1)/2', 'u + an', 'a(2n-1)/2', 'an²/2'],
        correct: 2,
        explanation: 'Distance in nth second = u + a(2n-1)/2. For u=0, it becomes a(2n-1)/2'
      }
    ]
  },
  {
    id: 3,
    title: 'Electric Charges and Fields',
    class: 12,
    description: 'Understand electrostatics, Coulomb\'s law, and electric fields',
    videoId: 'Uj3_xjoTfLQ',
    notes: [
      'Coulomb\'s Law: F = kq₁q₂/r²',
      'Electric Field: E = F/q (N/C or V/m)',
      'Gauss\'s Law: Φ = q/ε₀',
      'Electric Potential: V = kq/r'
    ],
    quiz: [
      {
        question: 'What is the SI unit of electric field?',
        options: ['N/C', 'C/N', 'V/m', 'Both A and C'],
        correct: 3,
        explanation: 'Electric field can be expressed as N/C or V/m, both are equivalent'
      },
      {
        question: 'Two charges +q and -q separated by distance d form a:',
        options: ['Monopole', 'Dipole', 'Quadrupole', 'Octupole'],
        correct: 1,
        explanation: 'Two equal and opposite charges form an electric dipole'
      },
      {
        question: 'Electric field inside a conductor is:',
        options: ['Maximum', 'Minimum', 'Zero', 'Infinite'],
        correct: 2,
        explanation: 'In electrostatic equilibrium, electric field inside a conductor is zero'
      },
      {
        question: 'Value of permittivity of free space (ε₀) is approximately:',
        options: ['8.85 × 10⁻¹² C²/Nm²', '9 × 10⁹ Nm²/C²', '1.6 × 10⁻¹⁹ C', '6.67 × 10⁻¹¹ Nm²/kg²'],
        correct: 0,
        explanation: 'ε₀ = 8.85 × 10⁻¹² C²/Nm² is the permittivity of free space'
      },
      {
        question: 'Electric field lines never:',
        options: ['Start from positive charge', 'End at negative charge', 'Intersect each other', 'Form closed loops'],
        correct: 2,
        explanation: 'Electric field lines never intersect because field has unique direction at each point'
      }
    ]
  }
];

const chemistryData = [
  {
    id: 1,
    title: 'Atomic Structure',
    class: 11,
    description: 'Explore atoms, quantum numbers, and electronic configuration',
    videoId: 'Uj3_xjoTfLQ',
    notes: [
      'Bohr Model: Electrons in fixed orbits, E = -13.6/n² eV',
      'Quantum Numbers: n (principal), l (azimuthal), m (magnetic), s (spin)',
      'Orbitals: s (2e⁻), p (6e⁻), d (10e⁻), f (14e⁻)',
      'Aufbau Principle: Fill lower energy orbitals first'
    ],
    quiz: [
      {
        question: 'What is the maximum number of electrons in d orbital?',
        options: ['2', '6', '10', '14'],
        correct: 2,
        explanation: 'd orbital has 5 sub-orbitals, each can hold 2 electrons: 5×2 = 10'
      },
      {
        question: 'Which quantum number determines the shape of orbital?',
        options: ['n', 'l', 'm', 's'],
        correct: 1,
        explanation: 'Azimuthal quantum number (l) determines the shape of orbital'
      },
      {
        question: 'Electronic configuration of Cr (Z=24) is:',
        options: ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁶ 4s⁰', '[Ar] 3d³ 4s³'],
        correct: 1,
        explanation: 'Cr has exceptional configuration [Ar] 3d⁵ 4s¹ for half-filled stability'
      },
      {
        question: 'Energy of electron in nth orbit of hydrogen atom is:',
        options: ['-13.6/n eV', '-13.6/n² eV', '-13.6n eV', '-13.6n² eV'],
        correct: 1,
        explanation: 'Energy in nth orbit: E = -13.6/n² eV'
      },
      {
        question: 'Which orbital has dumbbell shape?',
        options: ['s', 'p', 'd', 'f'],
        correct: 1,
        explanation: 'p orbital has dumbbell shape'
      }
    ]
  }
];

const mathsData = [
  {
    id: 1,
    title: 'Sets and Relations',
    class: 11,
    description: 'Master set theory, operations, and relations',
    videoId: 'Uj3_xjoTfLQ',
    notes: [
      'Set Operations: Union (∪), Intersection (∩), Difference (-)',
      'Venn Diagrams: Visual representation of sets',
      'Relations: Reflexive, Symmetric, Transitive',
      'Functions: One-one, Onto, Bijective'
    ],
    quiz: [
      {
        question: 'If A = {1,2,3} and B = {2,3,4}, what is A ∩ B?',
        options: ['{1,2,3,4}', '{2,3}', '{1,4}', '{}'],
        correct: 1,
        explanation: 'Intersection contains common elements: {2,3}'
      },
      {
        question: 'Which is a reflexive relation on set A?',
        options: ['(a,a) for all a∈A', '(a,b) implies (b,a)', '(a,b) and (b,c) implies (a,c)', 'None'],
        correct: 0,
        explanation: 'Reflexive relation: every element is related to itself'
      },
      {
        question: 'If n(A) = 5 and n(B) = 3, maximum value of n(A∪B) is:',
        options: ['5', '8', '15', '3'],
        correct: 1,
        explanation: 'Maximum when A and B are disjoint: n(A∪B) = 5 + 3 = 8'
      },
      {
        question: 'Empty set is denoted by:',
        options: ['{0}', '{}', 'φ', 'Both B and C'],
        correct: 3,
        explanation: 'Empty set is denoted by {} or φ'
      },
      {
        question: 'If A ⊆ B, then A ∩ B equals:',
        options: ['A', 'B', 'A ∪ B', 'φ'],
        correct: 0,
        explanation: 'If A is subset of B, then A ∩ B = A'
      }
    ]
  }
];

const techData = [
  {
    id: 1,
    title: 'Introduction to Programming',
    level: 'basics',
    description: 'Learn basic programming concepts and logic',
    videoId: 'Uj3_xjoTfLQ',
    notes: [
      'Variables: Store data values',
      'Data Types: int, float, string, boolean',
      'Operators: Arithmetic, Logical, Relational',
      'Control Flow: if-else, loops (for, while)'
    ],
    quiz: [
      {
        question: 'Which data type stores decimal numbers?',
        options: ['int', 'float', 'char', 'boolean'],
        correct: 1,
        explanation: 'float (floating-point) stores decimal numbers'
      },
      {
        question: 'What does "if-else" statement do?',
        options: ['Loop', 'Decision making', 'Function call', 'Variable declaration'],
        correct: 1,
        explanation: 'if-else is used for conditional decision making'
      },
      {
        question: 'Which loop runs at least once?',
        options: ['for', 'while', 'do-while', 'foreach'],
        correct: 2,
        explanation: 'do-while loop executes at least once before checking condition'
      },
      {
        question: 'What is the output of: 5 % 2?',
        options: ['2', '2.5', '1', '0'],
        correct: 2,
        explanation: '% is modulus operator, 5 % 2 gives remainder 1'
      },
      {
        question: 'Which is a valid variable name?',
        options: ['2variable', 'variable-name', 'variable_name', 'variable name'],
        correct: 2,
        explanation: 'variable_name is valid. Cannot start with number or contain spaces/hyphens'
      }
    ]
  }
];

// ==================== RENDER FUNCTIONS ====================
function renderHome() {
  const progress = getProgress();
  const totalCompleted = Object.values(progress).filter(v => v).length;
  
  mainContent.innerHTML = `
    <div style="text-align: center; padding: 3rem 0;">
      <h1 style="font-size: 3.5rem; background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem;">
        Welcome to Your Journey
      </h1>
      <p style="font-size: 1.3rem; color: var(--text-secondary); margin-bottom: 3rem;">
        Master PCM & Technology - One Level at a Time
      </p>
      
      <div class="grid-4" style="max-width: 1000px; margin: 0 auto 3rem;">
        <div class="stat-card">
          <div class="stat-number">${totalCompleted}</div>
          <div class="stat-label">Levels Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${musicData.length}</div>
          <div class="stat-label">Songs</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${physicsData.length + chemistryData.length + mathsData.length + techData.length}</div>
          <div class="stat-label">Total Levels</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">∞</div>
          <div class="stat-label">Possibilities</div>
        </div>
      </div>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="loadPage('physics')">📚 Start Learning</button>
        <button class="btn btn-secondary" onclick="loadPage('music')">🎵 Music</button>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const progress = getProgress();
  const physicsCompleted = physicsData.filter(l => progress[`physics-${l.id}`]).length;
  const chemistryCompleted = chemistryData.filter(l => progress[`chemistry-${l.id}`]).length;
  const mathsCompleted = mathsData.filter(l => progress[`maths-${l.id}`]).length;
  const techCompleted = techData.filter(l => progress[`tech-${l.id}`]).length;
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">📊 Your Progress Dashboard</h2>
    
    <div class="grid-2">
      <div class="card">
        <h3 style="color: var(--accent); margin-bottom: 1rem;">⚛️ Physics</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(physicsCompleted/physicsData.length)*100}%"></div>
        </div>
        <p style="margin-top: 0.5rem; color: var(--text-secondary);">${physicsCompleted}/${physicsData.length} Levels Completed</p>
      </div>
      
      <div class="card">
        <h3 style="color: var(--accent); margin-bottom: 1rem;">🧪 Chemistry</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(chemistryCompleted/chemistryData.length)*100}%"></div>
        </div>
        <p style="margin-top: 0.5rem; color: var(--text-secondary);">${chemistryCompleted}/${chemistryData.length} Levels Completed</p>
      </div>
      
      <div class="card">
        <h3 style="color: var(--accent); margin-bottom: 1rem;">📐 Mathematics</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(mathsCompleted/mathsData.length)*100}%"></div>
        </div>
        <p style="margin-top: 0.5rem; color: var(--text-secondary);">${mathsCompleted}/${mathsData.length} Levels Completed</p>
      </div>
      
      <div class="card">
        <h3 style="color: var(--accent); margin-bottom: 1rem;">💻 Technology</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(techCompleted/techData.length)*100}%"></div>
        </div>
        <p style="margin-top: 0.5rem; color: var(--text-secondary);">${techCompleted}/${techData.length} Levels Completed</p>
      </div>
    </div>
  `;
}

function renderMusic() {
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">🎵 Music Sanctuary</h2>
    
    <div class="music-player">
      <div class="player-main">
        <div class="album-art">
          <div class="vinyl-record" id="vinyl"></div>
          <div class="album-cover" id="album-cover">🎵</div>
        </div>
        <div style="text-align: center; width: 100%;">
          <h3 id="current-song" style="margin-bottom: 0.5rem;">Select a song</h3>
          <p id="current-artist" style="color: var(--text-secondary);">Artist</p>
        </div>
        <div class="player-controls">
          <button class="control-btn" id="prev-btn">⏮️</button>
          <button class="control-btn play-btn" id="play-btn">▶️</button>
          <button class="control-btn" id="next-btn">⏭️</button>
        </div>
      </div>
      
      <div id="video-player" style="margin-top: 2rem;"></div>
    </div>
    
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <h3>📻 Playlist</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="filterMusic('all')">All</button>
          <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="filterMusic('hindi')">Hindi</button>
          <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="filterMusic('english')">English</button>
          <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="filterMusic('motivation')">Motivation</button>
        </div>
      </div>
      <div class="playlist" id="playlist"></div>
    </div>
  `;
  
  renderPlaylist('all');
  initMusicPlayer();
}

let currentSongIndex = 0;
let currentFilter = 'all';
let player = null;

function renderPlaylist(filter) {
  currentFilter = filter;
  const filtered = filter === 'all' ? musicData : musicData.filter(s => s.category === filter);
  
  document.getElementById('playlist').innerHTML = filtered.map((song, index) => `
    <div class="song-item" onclick="playSong(${musicData.indexOf(song)})">
      <div>
        <h4>${song.title}</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">${song.artist}</p>
      </div>
      <div style="color: var(--accent);">▶️</div>
    </div>
  `).join('');
}

function filterMusic(category) {
  renderPlaylist(category);
}

function initMusicPlayer() {
  document.getElementById('play-btn').addEventListener('click', togglePlay);
  document.getElementById('next-btn').addEventListener('click', nextSong);
  document.getElementById('prev-btn').addEventListener('click', prevSong);
}

function playSong(index) {
  currentSongIndex = index;
  const song = musicData[index];
  
  document.getElementById('current-song').textContent = song.title;
  document.getElementById('current-artist').textContent = song.artist;
  document.getElementById('vinyl').classList.add('playing');
  
  document.getElementById('video-player').innerHTML = `
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/${song.videoId}?autoplay=1" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
    </div>
  `;
  
  document.querySelectorAll('.song-item').forEach((item, i) => {
    item.classList.remove('active');
  });
  document.querySelectorAll('.song-item')[index]?.classList.add('active');
}

function togglePlay() {
  const vinyl = document.getElementById('vinyl');
  if (vinyl.classList.contains('playing')) {
    vinyl.classList.remove('playing');
  } else {
    vinyl.classList.add('playing');
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % musicData.length;
  playSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + musicData.length) % musicData.length;
  playSong(currentSongIndex);
}

function renderPhysics() {
  const progress = getProgress();
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">⚛️ Physics Journey</h2>
    
    <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
      <button class="btn btn-primary" onclick="filterPhysics(11)">Class 11</button>
      <button class="btn btn-secondary" onclick="filterPhysics(12)">Class 12</button>
    </div>
    
    <div class="grid-3" id="physics-levels"></div>
  `;
  
  renderPhysicsLevels(11);
}

function filterPhysics(classNum) {
  renderPhysicsLevels(classNum);
}

function renderPhysicsLevels(classNum) {
  const progress = getProgress();
  const filtered = physicsData.filter(l => l.class === classNum);
  
  document.getElementById('physics-levels').innerHTML = filtered.map(level => `
    <div class="level-card ${progress[`physics-${level.id}`] ? 'completed' : ''}" onclick="openLevel('physics', ${level.id})">
      <div class="level-header">
        <div class="level-number">Level ${level.id}</div>
        <div class="level-status">${progress[`physics-${level.id}`] ? '✅' : '🎯'}</div>
      </div>
      <h3 style="margin-bottom: 0.5rem;">${level.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">${level.description}</p>
    </div>
  `).join('');
}

function renderChemistry() {
  const progress = getProgress();
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">🧪 Chemistry Journey</h2>
    <div class="grid-3" id="chemistry-levels"></div>
  `;
  
  document.getElementById('chemistry-levels').innerHTML = chemistryData.map(level => `
    <div class="level-card ${progress[`chemistry-${level.id}`] ? 'completed' : ''}" onclick="openLevel('chemistry', ${level.id})">
      <div class="level-header">
        <div class="level-number">Level ${level.id}</div>
        <div class="level-status">${progress[`chemistry-${level.id}`] ? '✅' : '🎯'}</div>
      </div>
      <h3 style="margin-bottom: 0.5rem;">${level.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">${level.description}</p>
    </div>
  `).join('');
}

function renderMaths() {
  const progress = getProgress();
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">📐 Mathematics Journey</h2>
    <div class="grid-3" id="maths-levels"></div>
  `;
  
  document.getElementById('maths-levels').innerHTML = mathsData.map(level => `
    <div class="level-card ${progress[`maths-${level.id}`] ? 'completed' : ''}" onclick="openLevel('maths', ${level.id})">
      <div class="level-header">
        <div class="level-number">Level ${level.id}</div>
        <div class="level-status">${progress[`maths-${level.id}`] ? '✅' : '🎯'}</div>
      </div>
      <h3 style="margin-bottom: 0.5rem;">${level.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">${level.description}</p>
    </div>
  `).join('');
}

function renderTech() {
  const progress = getProgress();
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">💻 Technology Journey</h2>
    <div class="grid-3" id="tech-levels"></div>
  `;
  
  document.getElementById('tech-levels').innerHTML = techData.map(level => `
    <div class="level-card ${progress[`tech-${level.id}`] ? 'completed' : ''}" onclick="openLevel('tech', ${level.id})">
      <div class="level-header">
        <div class="level-number">Level ${level.id}</div>
        <div class="level-status">${progress[`tech-${level.id}`] ? '✅' : '🎯'}</div>
      </div>
      <h3 style="margin-bottom: 0.5rem;">${level.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">${level.description}</p>
    </div>
  `).join('');
}

// ==================== LEVEL DETAIL PAGE ====================
function openLevel(subject, levelId) {
  let level;
  if (subject === 'physics') level = physicsData.find(l => l.id === levelId);
  else if (subject === 'chemistry') level = chemistryData.find(l => l.id === levelId);
  else if (subject === 'maths') level = mathsData.find(l => l.id === levelId);
  else if (subject === 'tech') level = techData.find(l => l.id === levelId);
  
  if (!level) return;
  
  mainContent.innerHTML = `
    <button class="back-btn" onclick="loadPage('${subject}')">← Back to ${subject.charAt(0).toUpperCase() + subject.slice(1)}</button>
    
    <div class="card">
      <h1 style="margin-bottom: 1rem; color: var(--accent);">${level.title}</h1>
      <p style="color: var(--text-secondary); margin-bottom: 2rem;">${level.description}</p>
      
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/${level.videoId}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
      </div>
      
      <div class="notes-section">
        <h3>📝 Key Notes</h3>
        <ul>
          ${level.notes.map(note => `<li>${note}</li>`).join('')}
        </ul>
      </div>
      
      <div class="quiz-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3>🎯 Quiz Time</h3>
          <div class="timer" id="timer">⏱️ <span id="time-left">10:00</span></div>
        </div>
        
        ${level.quiz.map((q, i) => `
          <div class="question" data-question="${i}">
            <h4>Q${i + 1}. ${q.question}</h4>
            <div class="options">
              ${q.options.map((opt, j) => `
                <div class="option" onclick="selectOption(this, ${i}, ${j})">${opt}</div>
              `).join('')}
            </div>
            <div class="explanation" style="display: none; margin-top: 1rem; padding: 1rem; background: rgba(102, 126, 234, 0.1); border-radius: 10px; color: var(--text-secondary);">
              <strong>Explanation:</strong> ${q.explanation}
            </div>
          </div>
        `).join('')}
        
        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="submitQuiz('${subject}', ${levelId})">Submit Quiz</button>
      </div>
    </div>
  `;
  
  startTimer(600); // 10 minutes
}

let timerInterval;

function startTimer(seconds) {
  let timeLeft = seconds;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('time-left').textContent = 
      `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('⏰ Time\'s up! Submitting quiz...');
      // Auto-submit logic here
    }
  }, 1000);
}

function selectOption(element, questionIndex, optionIndex) {
  const question = element.closest('.question');
  question.querySelectorAll('.option').forEach(opt => {
    opt.classList.remove('selected');
  });
  element.classList.add('selected');
  element.dataset.selected = optionIndex;
}

function submitQuiz(subject, levelId) {
  clearInterval(timerInterval);
  
  let level;
  if (subject === 'physics') level = physicsData.find(l => l.id === levelId);
  else if (subject === 'chemistry') level = chemistryData.find(l => l.id === levelId);
  else if (subject === 'maths') level = mathsData.find(l => l.id === levelId);
  else if (subject === 'tech') level = techData.find(l => l.id === levelId);
  
  let correct = 0;
  
  document.querySelectorAll('.question').forEach((q, i) => {
    const selected = q.querySelector('.option.selected');
    const correctIndex = level.quiz[i].correct;
    const explanation = q.querySelector('.explanation');
    
    if (selected) {
      const selectedIndex = parseInt(selected.dataset.selected);
      
      if (selectedIndex === correctIndex) {
        selected.classList.add('correct');
        correct++;
      } else {
        selected.classList.add('wrong');
        q.querySelectorAll('.option')[correctIndex].classList.add('correct');
      }
    } else {
      q.querySelectorAll('.option')[correctIndex].classList.add('correct');
    }
    
    explanation.style.display = 'block';
  });
  
  const percentage = (correct / level.quiz.length) * 100;
  
  if (percentage >= 70) {
    const progress = getProgress();
    progress[`${subject}-${levelId}`] = true;
    saveProgress(progress);
    
    setTimeout(() => {
      alert(`🎉 Congratulations! You scored ${percentage.toFixed(0)}% (${correct}/${level.quiz.length}) and completed this level!`);
      loadPage(subject);
    }, 1000);
  } else {
    alert(`📊 You scored ${percentage.toFixed(0)}% (${correct}/${level.quiz.length}). You need 70% to pass. Review the explanations and try again!`);
  }
}

// ==================== PROGRESS MANAGEMENT ====================
function getProgress() {
  return JSON.parse(localStorage.getItem('progress') || '{}');
}

function saveProgress(progress) {
  localStorage.setItem('progress', JSON.stringify(progress));
}

// ==================== INITIALIZE ====================
loadPage('home');
console.log('🚀 PCM-JEE Journey Hub loaded successfully!');