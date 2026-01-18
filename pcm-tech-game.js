// ==================== PCM × TECH GAME - KNOWLEDGE + ADVENTURE ====================

const PCM_TECH_GAME = {
  class11: {
    name: "Class 11 - Foundation Builder",
    description: "Where PCM meets real-world technology",
    totalLevels: 52,
    levels: [
      // Physics Levels
      {
        id: "11-phy-1",
        chapter: "Units & Measurements",
        title: "The GPS Revolution",
        description: "How does your phone know exactly where you are? Learn how precision measurement powers GPS satellites!",
        techApplications: [
          "GPS & Navigation Systems",
          "Smartphone Location Services",
          "Precision Engineering",
          "Scientific Instruments"
        ],
        prerequisites: [],
        concepts: ["Units", "Dimensions", "Significant Figures", "Error Analysis"],
        realWorldExample: "GPS satellites need to measure time with nanosecond precision. A 1 nanosecond error = 30cm position error!",
        quiz: [
          {
            q: "Why does GPS need atomic clocks?",
            options: ["For style", "Nanosecond precision needed", "To save battery", "Random choice"],
            correct: 1,
            explanation: "GPS calculates position using time signals. Even 1 microsecond error = 300m position error!"
          },
          {
            q: "What happens if measurement units are wrong?",
            options: ["Nothing", "Mars orbiter crashes", "Phone works fine", "GPS improves"],
            correct: 1,
            explanation: "NASA's Mars Climate Orbiter crashed in 1999 because one team used metric, another used imperial units!"
          }
        ],
        xpReward: 100,
        difficulty: "easy"
      },
      
      {
        id: "11-phy-2",
        chapter: "Motion in a Straight Line",
        title: "Self-Driving Cars",
        description: "How do Tesla's autopilot and self-driving cars calculate motion? Master kinematics!",
        techApplications: [
          "Autonomous Vehicles",
          "Cruise Control Systems",
          "Collision Detection",
          "Traffic Management AI"
        ],
        prerequisites: ["11-phy-1"],
        concepts: ["Velocity", "Acceleration", "Equations of Motion", "Graphs"],
        realWorldExample: "Tesla's autopilot calculates acceleration/deceleration 100 times per second to avoid collisions!",
        quiz: [
          {
            q: "A car detects obstacle 50m ahead at 20m/s. Min deceleration to stop?",
            options: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
            correct: 1,
            explanation: "Using v² = u² + 2as: 0 = 400 + 2a(50), a = -4 m/s²"
          },
          {
            q: "Why do self-driving cars need constant acceleration monitoring?",
            options: ["For fun", "Predict future position", "Save fuel", "Look cool"],
            correct: 1,
            explanation: "By knowing current velocity and acceleration, AI predicts where car will be in next few seconds!"
          }
        ],
        xpReward: 150,
        difficulty: "medium"
      },
      
      {
        id: "11-phy-3",
        chapter: "Motion in a Plane",
        title: "Drone Delivery Systems",
        description: "Amazon drones, military UAVs - all use 2D motion physics. Learn projectile motion!",
        techApplications: [
          "Drone Navigation",
          "Missile Guidance Systems",
          "Sports Analytics (cricket, football)",
          "Video Game Physics"
        ],
        prerequisites: ["11-phy-2"],
        concepts: ["Projectile Motion", "Relative Velocity", "Circular Motion"],
        realWorldExample: "Amazon Prime Air drones calculate optimal trajectory to deliver packages while avoiding obstacles!",
        quiz: [
          {
            q: "Drone at 100m height drops package. Horizontal velocity 10m/s. Range?",
            options: ["20m", "45m", "63m", "100m"],
            correct: 1,
            explanation: "Time to fall: t = √(2h/g) = 4.5s. Range = vt = 10×4.5 = 45m"
          }
        ],
        xpReward: 150,
        difficulty: "medium"
      },
      
      {
        id: "11-phy-4",
        chapter: "Laws of Motion",
        title: "Rocket Science Basics",
        description: "How does SpaceX launch rockets? Newton's laws power space exploration!",
        techApplications: [
          "Rocket Propulsion",
          "Satellite Launches",
          "Aircraft Design",
          "Crash Safety Systems"
        ],
        prerequisites: ["11-phy-3"],
        concepts: ["Newton's Laws", "Momentum", "Impulse", "Friction"],
        realWorldExample: "SpaceX Falcon 9 uses Newton's 3rd law - exhaust gases push down, rocket pushes up!",
        quiz: [
          {
            q: "Why do rockets work in space (no air to push against)?",
            options: ["Magic", "Newton's 3rd law", "Aliens help", "They don't"],
            correct: 1,
            explanation: "Rocket pushes exhaust backward, exhaust pushes rocket forward. No air needed!"
          }
        ],
        xpReward: 200,
        difficulty: "hard"
      },
      
      // Chemistry Levels
      {
        id: "11-chem-1",
        chapter: "Structure of Atom",
        title: "Quantum Computing Revolution",
        description: "How do quantum computers use electron behavior? Atomic structure meets cutting-edge tech!",
        techApplications: [
          "Quantum Computers",
          "Electron Microscopes",
          "LED Technology",
          "Solar Panels"
        ],
        prerequisites: [],
        concepts: ["Atomic Models", "Quantum Numbers", "Electronic Configuration"],
        realWorldExample: "Google's quantum computer uses superposition of electron states to solve problems classical computers can't!",
        quiz: [
          {
            q: "What makes quantum computers powerful?",
            options: ["Bigger size", "Electron superposition", "More RAM", "Faster clock"],
            correct: 1,
            explanation: "Electrons can be in multiple states simultaneously (superposition), enabling parallel computation!"
          }
        ],
        xpReward: 150,
        difficulty: "medium"
      },
      
      {
        id: "11-chem-2",
        chapter: "Chemical Bonding",
        title: "Semiconductor Revolution",
        description: "How do computer chips work? Silicon bonding creates the digital world!",
        techApplications: [
          "Computer Processors",
          "Smartphone Chips",
          "Memory Storage",
          "Transistors"
        ],
        prerequisites: ["11-chem-1"],
        concepts: ["Covalent Bonding", "Molecular Orbitals", "Hybridization"],
        realWorldExample: "Silicon's 4 valence electrons allow perfect bonding for semiconductors - basis of all electronics!",
        quiz: [
          {
            q: "Why is silicon used in computer chips?",
            options: ["It's cheap", "Perfect semiconductor properties", "Looks cool", "Random choice"],
            correct: 1,
            explanation: "Silicon's electronic structure allows controlled conductivity - essential for transistors!"
          }
        ],
        xpReward: 150,
        difficulty: "medium"
      },
      
      // Maths Levels
      {
        id: "11-math-1",
        chapter: "Sets & Functions",
        title: "Database Systems",
        description: "How does Google search billions of pages instantly? Set theory powers databases!",
        techApplications: [
          "Database Management",
          "Search Engines",
          "Recommendation Systems",
          "Data Analytics"
        ],
        prerequisites: [],
        concepts: ["Sets", "Relations", "Functions", "Mapping"],
        realWorldExample: "Google uses set operations to filter billions of web pages in milliseconds!",
        quiz: [
          {
            q: "How does 'AND' search work in Google?",
            options: ["Magic", "Set intersection", "Random", "AI guesses"],
            correct: 1,
            explanation: "Searching 'python programming' finds intersection of pages containing both words!"
          }
        ],
        xpReward: 100,
        difficulty: "easy"
      },
      
      {
        id: "11-math-2",
        chapter: "Trigonometry",
        title: "GPS & Navigation",
        description: "How does Google Maps calculate distances? Trigonometry maps the world!",
        techApplications: [
          "GPS Navigation",
          "Satellite Communication",
          "Computer Graphics",
          "Signal Processing"
        ],
        prerequisites: ["11-math-1"],
        concepts: ["Trigonometric Ratios", "Identities", "Equations"],
        realWorldExample: "GPS uses triangulation with satellites - pure trigonometry to find your exact location!",
        quiz: [
          {
            q: "Why does GPS need at least 3 satellites?",
            options: ["Backup", "Triangulation needs 3 points", "Government rule", "Battery saving"],
            correct: 1,
            explanation: "3 satellites create 3 circles. Your position is where all 3 intersect - trigonometry!"
          }
        ],
        xpReward: 150,
        difficulty: "medium"
      }
    ]
  },
  
  class12: {
    name: "Class 12 - Advanced Applications",
    description: "Deep dive into modern technology",
    totalLevels: 47,
    levels: [
      {
        id: "12-phy-1",
        chapter: "Electric Charges & Fields",
        title: "Touchscreen Technology",
        description: "How does your phone screen detect touch? Electrostatics in action!",
        techApplications: [
          "Capacitive Touchscreens",
          "Fingerprint Sensors",
          "Stylus Technology",
          "Gesture Recognition"
        ],
        prerequisites: ["11-phy-4"],
        concepts: ["Electric Field", "Gauss's Law", "Capacitance"],
        realWorldExample: "Your finger changes capacitance on screen - phone detects this change to register touch!",
        quiz: [
          {
            q: "Why don't touchscreens work with gloves?",
            options: ["Too cold", "No capacitance change", "Screen scared", "Battery issue"],
            correct: 1,
            explanation: "Gloves insulate your finger - no capacitance change, no touch detection!"
          }
        ],
        xpReward: 200,
        difficulty: "hard"
      },
      
      {
        id: "12-chem-1",
        chapter: "Electrochemistry",
        title: "Electric Vehicle Batteries",
        description: "How do Tesla batteries work? Electrochemistry powers the EV revolution!",
        techApplications: [
          "Lithium-ion Batteries",
          "Electric Vehicles",
          "Power Banks",
          "Grid Storage"
        ],
        prerequisites: ["11-chem-2"],
        concepts: ["Electrochemical Cells", "Nernst Equation", "Batteries"],
        realWorldExample: "Tesla Model 3 battery pack contains 4416 lithium-ion cells - all using electrochemistry!",
        quiz: [
          {
            q: "Why lithium for EV batteries?",
            options: ["Cheap", "Lightest metal + high voltage", "Looks good", "Random"],
            correct: 1,
            explanation: "Lithium is lightest metal with highest electrochemical potential - maximum energy/weight!"
          }
        ],
        xpReward: 250,
        difficulty: "hard"
      },
      
      {
        id: "12-math-1",
        chapter: "Calculus",
        title: "AI & Machine Learning",
        description: "How does ChatGPT learn? Calculus optimizes neural networks!",
        techApplications: [
          "Machine Learning",
          "Neural Networks",
          "Image Recognition",
          "Self-Driving Cars"
        ],
        prerequisites: ["11-math-2"],
        concepts: ["Derivatives", "Integration", "Optimization"],
        realWorldExample: "AI uses gradient descent (calculus) to minimize error and learn from data!",
        quiz: [
          {
            q: "What does 'gradient descent' do in AI?",
            options: ["Goes downhill", "Finds minimum error", "Deletes data", "Crashes system"],
            correct: 1,
            explanation: "Uses derivatives to find direction of steepest descent - minimizes prediction error!"
          }
        ],
        xpReward: 300,
        difficulty: "hard"
      }
    ]
  },
  
  masterLevels: {
    class11Master: {
      name: "Class 11 Master Challenge",
      description: "Combine all Class 11 concepts in one epic challenge!",
      challenge: "Design a complete drone delivery system using all physics, chemistry, and maths concepts",
      xpReward: 1000,
      difficulty: "expert"
    },
    
    class12Master: {
      name: "Class 12 Master Challenge",
      description: "Combine all Class 12 concepts in one epic challenge!",
      challenge: "Design an electric self-driving car with AI navigation",
      xpReward: 1500,
      difficulty: "expert"
    }
  },
  
  grandFinale: {
    level1: {
      name: "Grand Level 1: Smart City",
      description: "Design a complete smart city using ALL PCM concepts",
      challenge: "Integrate GPS, EVs, renewable energy, AI traffic management, and more!",
      xpReward: 2000,
      difficulty: "legendary"
    },
    
    level2: {
      name: "Grand Level 2: Space Mission",
      description: "Plan a Mars mission using complete PCM knowledge",
      challenge: "Rocket propulsion, orbital mechanics, life support systems, communication!",
      xpReward: 2500,
      difficulty: "legendary"
    },
    
    level3: {
      name: "Grand Level 3: Future Tech",
      description: "Invent the next breakthrough technology!",
      challenge: "Use all PCM concepts to propose a revolutionary technology that doesn't exist yet!",
      xpReward: 5000,
      difficulty: "legendary"
    }
  }
};

// Game state
let gameProgress = {
  completedLevels: [],
  currentLevel: null,
  totalXP: 0,
  unlockedMasters: [],
  unlockedGrand: []
};

// Load game progress
function loadGameProgress() {
  const saved = localStorage.getItem('pcm_tech_game_progress');
  if (saved) {
    gameProgress = JSON.parse(saved);
  }
}

// Save game progress
function saveGameProgress() {
  localStorage.setItem('pcm_tech_game_progress', JSON.stringify(gameProgress));
}

// Check if level is unlocked
function isLevelUnlocked(levelId) {
  const level = findLevel(levelId);
  if (!level) return false;
  
  // Check prerequisites
  if (level.prerequisites.length === 0) return true;
  
  return level.prerequisites.every(prereq => 
    gameProgress.completedLevels.includes(prereq)
  );
}

// Find level by ID
function findLevel(levelId) {
  // Search in class 11
  let level = PCM_TECH_GAME.class11.levels.find(l => l.id === levelId);
  if (level) return level;
  
  // Search in class 12
  level = PCM_TECH_GAME.class12.levels.find(l => l.id === levelId);
  return level;
}

// Complete level
function completeLevel(levelId, quizScore) {
  if (!gameProgress.completedLevels.includes(levelId)) {
    gameProgress.completedLevels.push(levelId);
    
    const level = findLevel(levelId);
    if (level) {
      const xp = Math.floor(level.xpReward * (quizScore / 100));
      gameProgress.totalXP += xp;
      
      if (typeof addXPWithAnimation !== 'undefined') {
        addXPWithAnimation(xp, 'level_complete');
      } else {
        addXP(xp);
      }
      
      saveGameProgress();
      checkMasterUnlock();
    }
  }
}

// Check if master levels unlocked
function checkMasterUnlock() {
  const class11Levels = PCM_TECH_GAME.class11.levels.length;
  const class11Completed = gameProgress.completedLevels.filter(id => id.startsWith('11-')).length;
  
  if (class11Completed === class11Levels && !gameProgress.unlockedMasters.includes('class11')) {
    gameProgress.unlockedMasters.push('class11');
    showNotification('🎉 Class 11 Master Level Unlocked!', 'success');
  }
  
  const class12Levels = PCM_TECH_GAME.class12.levels.length;
  const class12Completed = gameProgress.completedLevels.filter(id => id.startsWith('12-')).length;
  
  if (class12Completed === class12Levels && !gameProgress.unlockedMasters.includes('class12')) {
    gameProgress.unlockedMasters.push('class12');
    showNotification('🎉 Class 12 Master Level Unlocked!', 'success');
  }
  
  // Check grand finale unlock
  if (gameProgress.unlockedMasters.length === 2 && gameProgress.unlockedGrand.length === 0) {
    gameProgress.unlockedGrand.push('level1');
    showNotification('🚀 GRAND FINALE UNLOCKED!', 'success');
  }
  
  saveGameProgress();
}

console.log('✅ PCM × Tech Game loaded - Adventure awaits!');
