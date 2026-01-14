// Theme Management
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

// Navigation
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  event.target.classList.add('active');
}

// Music Player
const songs = [
  { title: 'Pal Pal', artist: 'Talwinder, Afusic', duration: '3:45', category: 'hindi' },
  { title: 'Paaro', artist: 'Shubh', duration: '3:20', category: 'hindi' },
  { title: 'See You Again', artist: 'Wiz Khalifa ft. Charlie Puth', duration: '3:49', category: 'english' },
  { title: 'Night Changes', artist: 'One Direction', duration: '3:46', category: 'english' },
  { title: 'What Makes You Beautiful', artist: 'One Direction', duration: '3:19', category: 'english' },
  { title: 'Tum Hi Ho', artist: 'Arijit Singh', duration: '4:22', category: 'hindi' },
  { title: 'Kesariya', artist: 'Arijit Singh', duration: '4:28', category: 'hindi' },
  { title: 'Perfect', artist: 'Ed Sheeran', duration: '4:23', category: 'english' },
  { title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53', category: 'english' },
  { title: 'Believer', artist: 'Imagine Dragons', duration: '3:24', category: 'motivation' },
  { title: 'Unstoppable', artist: 'Sia', duration: '3:37', category: 'motivation' },
  { title: 'Hall of Fame', artist: 'The Script ft. will.i.am', duration: '3:23', category: 'motivation' },
  { title: 'Apna Time Aayega', artist: 'Ranveer Singh', duration: '3:01', category: 'motivation' },
  { title: 'Zinda', artist: 'Siddharth Mahadevan', duration: '5:07', category: 'motivation' },
  { title: 'Channa Mereya', artist: 'Arijit Singh', duration: '4:49', category: 'hindi' },
  { title: 'Raabta', artist: 'Arijit Singh', duration: '4:03', category: 'hindi' },
  { title: 'Someone Like You', artist: 'Adele', duration: '4:45', category: 'english' },
  { title: 'Let Her Go', artist: 'Passenger', duration: '4:12', category: 'english' },
  { title: 'Counting Stars', artist: 'OneRepublic', duration: '4:17', category: 'english' },
  { title: 'Photograph', artist: 'Ed Sheeran', duration: '4:18', category: 'english' },
  { title: 'Dil Diyan Gallan', artist: 'Atif Aslam', duration: '3:56', category: 'hindi' },
  { title: 'Tera Ban Jaunga', artist: 'Akhil Sachdeva', duration: '3:56', category: 'hindi' },
  { title: 'Memories', artist: 'Maroon 5', duration: '3:09', category: 'english' },
  { title: 'Faded', artist: 'Alan Walker', duration: '3:32', category: 'english' },
  { title: 'Closer', artist: 'The Chainsmokers', duration: '4:04', category: 'english' },
  { title: 'Senorita', artist: 'Shawn Mendes', duration: '3:11', category: 'english' },
  { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', category: 'english' },
  { title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', category: 'english' },
  { title: 'Peaches', artist: 'Justin Bieber', duration: '3:18', category: 'english' },
  { title: 'Stay', artist: 'The Kid LAROI', duration: '2:21', category: 'english' },
  { title: 'Kahani Suno', artist: 'Kaifi Khalil', duration: '4:35', category: 'hindi' },
  { title: 'Excuses', artist: 'AP Dhillon', duration: '2:54', category: 'hindi' },
  { title: 'Brown Munde', artist: 'AP Dhillon', duration: '3:08', category: 'hindi' },
  { title: 'Baller', artist: 'Shubh', duration: '2:47', category: 'hindi' },
  { title: 'No Love', artist: 'Shubh', duration: '2:39', category: 'hindi' },
  { title: 'Levels', artist: 'Sidhu Moose Wala', duration: '3:17', category: 'hindi' },
  { title: 'Goat', artist: 'Sidhu Moose Wala', duration: '3:09', category: 'hindi' },
  { title: 'Titanium', artist: 'David Guetta ft. Sia', duration: '4:05', category: 'motivation' },
  { title: 'Stronger', artist: 'Kanye West', duration: '5:12', category: 'motivation' },
  { title: 'Eye of the Tiger', artist: 'Survivor', duration: '4:04', category: 'motivation' },
  { title: 'Lose Yourself', artist: 'Eminem', duration: '5:26', category: 'motivation' },
  { title: "Can't Hold Us", artist: 'Macklemore', duration: '4:18', category: 'motivation' },
  { title: 'Thunder', artist: 'Imagine Dragons', duration: '3:07', category: 'motivation' },
  { title: 'Radioactive', artist: 'Imagine Dragons', duration: '3:06', category: 'motivation' },
  { title: 'Warriors', artist: 'Imagine Dragons', duration: '2:50', category: 'motivation' },
  { title: 'The Nights', artist: 'Avicii', duration: '2:56', category: 'motivation' },
  { title: 'Wake Me Up', artist: 'Avicii', duration: '4:09', category: 'motivation' },
  { title: 'Jai Ho', artist: 'A.R. Rahman', duration: '5:25', category: 'motivation' },
  { title: 'Chak De India', artist: 'Sukhwinder Singh', duration: '4:15', category: 'motivation' }
];

let currentSongIndex = 0;
let isPlaying = false;
let currentFilter = 'all';
let progressInterval;

function renderPlaylist(filter = 'all') {
  const playlistEl = document.getElementById('playlist');
  const filteredSongs = filter === 'all' ? songs : songs.filter(s => s.category === filter);
  
  playlistEl.innerHTML = filteredSongs.map((song, index) => `
    <div class="song-item" onclick="playSong(${songs.indexOf(song)})">
      <div class="song-info">
        <h4>${song.title}</h4>
        <p>${song.artist}</p>
      </div>
      <div class="song-duration">${song.duration}</div>
    </div>
  `).join('');
}

function playSong(index) {
  currentSongIndex = index;
  const song = songs[index];
  
  document.getElementById('current-song').textContent = song.title;
  document.getElementById('current-artist').textContent = song.artist;
  document.getElementById('total-time').textContent = song.duration;
  document.getElementById('play-btn').textContent = '⏸️';
  document.getElementById('vinyl').classList.add('playing');
  
  isPlaying = true;
  
  document.querySelectorAll('.song-item').forEach((item, i) => {
    item.classList.remove('active');
  });
  document.querySelectorAll('.song-item')[index]?.classList.add('active');
  
  simulateProgress();
}

function simulateProgress() {
  if (progressInterval) clearInterval(progressInterval);
  
  const song = songs[currentSongIndex];
  const [mins, secs] = song.duration.split(':').map(Number);
  const totalSeconds = mins * 60 + secs;
  let currentSeconds = 0;
  
  progressInterval = setInterval(() => {
    if (!isPlaying) {
      clearInterval(progressInterval);
      return;
    }
    
    currentSeconds += 0.5;
    const progress = (currentSeconds / totalSeconds) * 100;
    
    if (progress >= 100) {
      clearInterval(progressInterval);
      nextSong();
      return;
    }
    
    document.getElementById('progress-fill').style.width = progress + '%';
    
    const currentMins = Math.floor(currentSeconds / 60);
    const currentSecs = Math.floor(currentSeconds % 60);
    document.getElementById('current-time').textContent = 
      `${currentMins}:${currentSecs.toString().padStart(2, '0')}`;
  }, 500);
}

function togglePlay() {
  isPlaying = !isPlaying;
  document.getElementById('play-btn').textContent = isPlaying ? '⏸️' : '▶️';
  
  if (isPlaying) {
    document.getElementById('vinyl').classList.add('playing');
    simulateProgress();
  } else {
    document.getElementById('vinyl').classList.remove('playing');
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
}

function filterPlaylist(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderPlaylist(filter);
}

document.getElementById('play-btn').addEventListener('click', togglePlay);
document.getElementById('next-btn').addEventListener('click', nextSong);
document.getElementById('prev-btn').addEventListener('click', prevSong);

renderPlaylist();

// Physics Levels
const physicsLevels = {
  '11': [
    {
      id: 1,
      title: 'Units & Measurements',
      description: 'Master SI units, dimensional analysis, and measurement techniques',
      concepts: ['SI Units', 'Dimensional Formula', 'Significant Figures', 'Error Analysis'],
      questions: [
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
        }
      ]
    },
    {
      id: 2,
      title: 'Motion in a Straight Line',
      description: 'Understand kinematics, velocity, acceleration, and equations of motion',
      concepts: ['Displacement', 'Velocity', 'Acceleration', 'Equations of Motion'],
      questions: [
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
        }
      ]
    },
    {
      id: 3,
      title: 'Motion in a Plane',
      description: 'Learn about vectors, projectile motion, and circular motion',
      concepts: ['Vectors', 'Projectile Motion', 'Relative Velocity', 'Circular Motion'],
      questions: [
        {
          question: 'If A = 3i + 4j, what is the magnitude of A?',
          options: ['3', '4', '5', '7'],
          correct: 2,
          explanation: '|A| = √(3² + 4²) = √(9 + 16) = √25 = 5'
        },
        {
          question: 'At what angle should a projectile be launched for maximum range?',
          options: ['30°', '45°', '60°', '90°'],
          correct: 1,
          explanation: 'Maximum range occurs at 45° angle of projection'
        },
        {
          question: 'What is the direction of centripetal acceleration?',
          options: ['Tangent to circle', 'Away from center', 'Towards center', 'Perpendicular to plane'],
          correct: 2,
          explanation: 'Centripetal acceleration always points towards the center of circular path'
        }
      ]
    }
  ],
  '12': [
    {
      id: 1,
      title: 'Electric Charges and Fields',
      description: 'Understand electrostatics, Coulomb\'s law, and electric fields',
      concepts: ['Coulomb\'s Law', 'Electric Field', 'Gauss\'s Law', 'Electric Potential'],
      questions: [
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
        }
      ]
    }
  ]
};

const chemistryLevels = {
  '11': [
    {
      id: 1,
      title: 'Atomic Structure',
      description: 'Explore atoms, quantum numbers, and electronic configuration',
      concepts: ['Bohr Model', 'Quantum Numbers', 'Orbitals', 'Electronic Configuration'],
      questions: [
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
        }
      ]
    },
    {
      id: 2,
      title: 'Chemical Bonding',
      description: 'Understand ionic, covalent, and metallic bonding',
      concepts: ['Ionic Bond', 'Covalent Bond', 'Lewis Structure', 'VSEPR Theory'],
      questions: [
        {
          question: 'Which molecule has linear shape?',
          options: ['H₂O', 'CO₂', 'NH₃', 'CH₄'],
          correct: 1,
          explanation: 'CO₂ has linear shape with bond angle 180°'
        },
        {
          question: 'What is the hybridization of carbon in CH₄?',
          options: ['sp', 'sp²', 'sp³', 'sp³d'],
          correct: 2,
          explanation: 'Carbon in CH₄ is sp³ hybridized with tetrahedral geometry'
        },
        {
          question: 'Which has the highest ionic character?',
          options: ['NaCl', 'MgO', 'AlN', 'SiC'],
          correct: 1,
          explanation: 'MgO has highest ionic character due to large electronegativity difference'
        }
      ]
    }
  ],
  '12': [
    {
      id: 1,
      title: 'Electrochemistry',
      description: 'Study redox reactions, electrochemical cells, and batteries',
      concepts: ['Redox Reactions', 'Galvanic Cell', 'Nernst Equation', 'Electrolysis'],
      questions: [
        {
          question: 'In a galvanic cell, oxidation occurs at:',
          options: ['Anode', 'Cathode', 'Salt bridge', 'Both electrodes'],
          correct: 0,
          explanation: 'Oxidation always occurs at anode in electrochemical cells'
        },
        {
          question: 'Standard hydrogen electrode has potential:',
          options: ['-1 V', '0 V', '+1 V', '+2 V'],
          correct: 1,
          explanation: 'SHE is assigned 0 V as reference electrode'
        },
        {
          question: 'Which metal is used in dry cell as anode?',
          options: ['Copper', 'Zinc', 'Iron', 'Silver'],
          correct: 1,
          explanation: 'Zinc is used as anode in dry cell (Leclanche cell)'
        }
      ]
    }
  ]
};

const mathsLevels = {
  '11': [
    {
      id: 1,
      title: 'Sets and Relations',
      description: 'Master set theory, operations, and relations',
      concepts: ['Set Operations', 'Venn Diagrams', 'Relations', 'Functions'],
      questions: [
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
        }
      ]
    },
    {
      id: 2,
      title: 'Trigonometry',
      description: 'Learn trigonometric ratios, identities, and equations',
      concepts: ['Trigonometric Ratios', 'Identities', 'Equations', 'Inverse Functions'],
      questions: [
        {
          question: 'What is the value of sin²θ + cos²θ?',
          options: ['0', '1', '2', 'tan²θ'],
          correct: 1,
          explanation: 'Fundamental trigonometric identity: sin²θ + cos²θ = 1'
        },
        {
          question: 'If sinθ = 3/5, what is cosθ? (θ in first quadrant)',
          options: ['3/5', '4/5', '5/3', '5/4'],
          correct: 1,
          explanation: 'Using sin²θ + cos²θ = 1: cos²θ = 1 - 9/25 = 16/25, cosθ = 4/5'
        },
        {
          question: 'Period of sin(2x) is:',
          options: ['2π', 'π', 'π/2', '4π'],
          correct: 1,
          explanation: 'Period of sin(nx) is 2π/n, so period of sin(2x) is π'
        }
      ]
    }
  ],
  '12': [
    {
      id: 1,
      title: 'Calculus - Differentiation',
      description: 'Master derivatives, limits, and applications',
      concepts: ['Limits', 'Derivatives', 'Chain Rule', 'Applications'],
      questions: [
        {
          question: 'What is d/dx(x²)?',
          options: ['x', '2x', 'x²', '2'],
          correct: 1,
          explanation: 'Derivative of x² is 2x using power rule'
        },
        {
          question: 'If y = sin(x), what is dy/dx?',
          options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
          correct: 0,
          explanation: 'Derivative of sin(x) is cos(x)'
        },
        {
          question: 'What does derivative represent geometrically?',
          options: ['Area', 'Volume', 'Slope of tangent', 'Distance'],
          correct: 2,
          explanation: 'Derivative represents slope of tangent to curve at a point'
        }
      ]
    }
  ]
};

const techLevels = {
  'basics': [
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'Learn basic programming concepts and logic',
      concepts: ['Variables', 'Data Types', 'Operators', 'Control Flow'],
      questions: [
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
        }
      ]
    },
    {
      id: 2,
      title: 'Arrays and Data Structures',
      description: 'Understand arrays, lists, and basic data structures',
      concepts: ['Arrays', 'Lists', 'Stacks', 'Queues'],
      questions: [
        {
          question: 'Array index starts from:',
          options: ['-1', '0', '1', 'Depends on language'],
          correct: 1,
          explanation: 'In most programming languages, array indexing starts from 0'
        },
        {
          question: 'Which follows LIFO principle?',
          options: ['Queue', 'Stack', 'Array', 'Tree'],
          correct: 1,
          explanation: 'Stack follows Last In First Out (LIFO) principle'
        },
        {
          question: 'Time complexity of accessing array element by index:',
          options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          correct: 0,
          explanation: 'Array access by index is O(1) - constant time'
        }
      ]
    }
  ],
  'intermediate': [
    {
      id: 1,
      title: 'Object-Oriented Programming',
      description: 'Master OOP concepts: classes, objects, inheritance',
      concepts: ['Classes', 'Objects', 'Inheritance', 'Polymorphism'],
      questions: [
        {
          question: 'What is encapsulation?',
          options: ['Hiding data', 'Code reuse', 'Multiple forms', 'Creating objects'],
          correct: 0,
          explanation: 'Encapsulation is bundling data and methods, hiding internal details'
        },
        {
          question: 'Which allows code reuse through parent-child relationship?',
          options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'],
          correct: 1,
          explanation: 'Inheritance allows child class to reuse parent class code'
        },
        {
          question: 'What is method overloading?',
          options: ['Same name, different parameters', 'Different name, same parameters', 'Hiding methods', 'Virtual methods'],
          correct: 0,
          explanation: 'Method overloading: same method name with different parameters'
        }
      ]
    }
  ],
  'advanced': [
    {
      id: 1,
      title: 'Algorithms and Complexity',
      description: 'Analyze algorithms, time complexity, and optimization',
      concepts: ['Big O Notation', 'Sorting', 'Searching', 'Dynamic Programming'],
      questions: [
        {
          question: 'Time complexity of binary search:',
          options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
          correct: 1,
          explanation: 'Binary search has O(log n) time complexity'
        },
        {
          question: 'Which sorting algorithm is most efficient on average?',
          options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
          correct: 1,
          explanation: 'Quick Sort has average time complexity O(n log n)'
        },
        {
          question: 'What is dynamic programming?',
          options: ['Runtime coding', 'Storing subproblem results', 'Parallel processing', 'Memory allocation'],
          correct: 1,
          explanation: 'Dynamic programming stores results of subproblems to avoid recomputation'
        }
      ]
    }
  ]
};

let currentPhysicsClass = '11';
let currentChemistryClass = '11';
let currentMathsClass = '11';
let currentTechLevel = 'basics';

function showPhysicsClass(classNum) {
  currentPhysicsClass = classNum;
  document.querySelectorAll('#physics .subject-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderLevels('physics', physicsLevels[classNum], 'physics-levels');
}

function showChemistryClass(classNum) {
  currentChemistryClass = classNum;
  document.querySelectorAll('#chemistry .subject-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderLevels('chemistry', chemistryLevels[classNum], 'chemistry-levels');
}

function showMathsClass(classNum) {
  currentMathsClass = classNum;
  document.querySelectorAll('#maths .subject-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderLevels('maths', mathsLevels[classNum], 'maths-levels');
}

function showTechLevel(level) {
  currentTechLevel = level;
  document.querySelectorAll('#tech .subject-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderLevels('tech', techLevels[level], 'tech-levels');
}

function renderLevels(subject, levels, containerId) {
  const container = document.getElementById(containerId);
  const progress = JSON.parse(localStorage.getItem('progress') || '{}');
  
  container.innerHTML = levels.map(level => {
    const key = `${subject}-${level.id}`;
    const completed = progress[key] || false;
    
    return `
      <div class="level-card ${completed ? 'completed' : ''}" onclick="openLevel('${subject}', ${level.id})">
        <div class="level-header">
          <div class="level-number">Level ${level.id}</div>
          <div class="level-status">${completed ? '✅' : '🎯'}</div>
        </div>
        <h3 class="level-title">${level.title}</h3>
        <p class="level-description">${level.description}</p>
        <div class="level-concepts">
          ${level.concepts.map(c => `<span class="concept-tag">${c}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function openLevel(subject, levelId) {
  let levels;
  if (subject === 'physics') levels = physicsLevels[currentPhysicsClass];
  else if (subject === 'chemistry') levels = chemistryLevels[currentChemistryClass];
  else if (subject === 'maths') levels = mathsLevels[currentMathsClass];
  else if (subject === 'tech') levels = techLevels[currentTechLevel];
  
  const level = levels.find(l => l.id === levelId);
  if (!level) return;
  
  const modal = document.getElementById('level-modal');
  const content = document.getElementById('level-content');
  
  content.innerHTML = `
    <h2>${level.title}</h2>
    <p>${level.description}</p>
    <div class="level-concepts">
      <h3>Concepts:</h3>
      ${level.concepts.map(c => `<span class="concept-tag">${c}</span>`).join('')}
    </div>
    <div class="quiz-container">
      <h3>🎯 Quiz</h3>
      ${level.questions.map((q, i) => `
        <div class="question" data-question="${i}">
          <h4>Q${i + 1}. ${q.question}</h4>
          <div class="options">
            ${q.options.map((opt, j) => `
              <div class="option" onclick="selectOption(this, ${i}, ${j})">${opt}</div>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <button class="submit-quiz" onclick="submitQuiz('${subject}', ${levelId})">Submit Quiz</button>
    </div>
  `;
  
  modal.classList.add('active');
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
  let levels;
  if (subject === 'physics') levels = physicsLevels[currentPhysicsClass];
  else if (subject === 'chemistry') levels = chemistryLevels[currentChemistryClass];
  else if (subject === 'maths') levels = mathsLevels[currentMathsClass];
  else if (subject === 'tech') levels = techLevels[currentTechLevel];
  
  const level = levels.find(l => l.id === levelId);
  let correct = 0;
  
  document.querySelectorAll('.question').forEach((q, i) => {
    const selected = q.querySelector('.option.selected');
    if (!selected) return;
    
    const selectedIndex = parseInt(selected.dataset.selected);
    const correctIndex = level.questions[i].correct;
    
    if (selectedIndex === correctIndex) {
      selected.classList.add('correct');
      correct++;
    } else {
      selected.classList.add('wrong');
      q.querySelectorAll('.option')[correctIndex].classList.add('correct');
    }
  });
  
  const percentage = (correct / level.questions.length) * 100;
  
  if (percentage >= 70) {
    const progress = JSON.parse(localStorage.getItem('progress') || '{}');
    progress[`${subject}-${levelId}`] = true;
    localStorage.setItem('progress', JSON.stringify(progress));
    
    alert(`🎉 Congratulations! You scored ${percentage.toFixed(0)}% and completed this level!`);
    
    setTimeout(() => {
      closeModal();
      if (subject === 'physics') showPhysicsClass(currentPhysicsClass);
      else if (subject === 'chemistry') showChemistryClass(currentChemistryClass);
      else if (subject === 'maths') showMathsClass(currentMathsClass);
      else if (subject === 'tech') showTechLevel(currentTechLevel);
      
      updateStats();
    }, 2000);
  } else {
    alert(`You scored ${percentage.toFixed(0)}%. You need 70% to pass. Review and try again!`);
  }
}

function closeModal() {
  document.getElementById('level-modal').classList.remove('active');
}

function updateStats() {
  const progress = JSON.parse(localStorage.getItem('progress') || '{}');
  const completed = Object.keys(progress).filter(k => progress[k]).length;
  document.getElementById('total-completed').textContent = completed;
}

// Initialize
renderLevels('physics', physicsLevels['11'], 'physics-levels');
renderLevels('chemistry', chemistryLevels['11'], 'chemistry-levels');
renderLevels('maths', mathsLevels['11'], 'maths-levels');
renderLevels('tech', techLevels['basics'], 'tech-levels');
updateStats();

console.log('🚀 PCM-JEE Journey Hub loaded successfully!');