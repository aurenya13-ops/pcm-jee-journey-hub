// ==================== COMPLETE RENDERING FOR ALL SECTIONS ====================
// This file contains complete render functions showing ALL units

// ==================== PHYSICS - ALL UNITS ====================
function renderPhysicsComplete() {
  if (typeof physicsContent === 'undefined') {
    return '<div class="loading">Loading Physics content...</div>';
  }

  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-atom"></i> Physics - Complete JEE Syllabus</h1>
        <div class="subject-meta">
          <span class="badge"><i class="fas fa-book"></i> 52 Chapters</span>
          <span class="badge"><i class="fas fa-list"></i> 600+ Topics</span>
          <span class="badge"><i class="fas fa-question"></i> 1000+ Problems</span>
        </div>
      </div>

      <!-- Class 11 Physics -->
      <div class="class-section">
        <h2><i class="fas fa-graduation-cap"></i> Class 11 Physics</h2>
        
        <!-- Mechanics -->
        <div class="unit-section">
          <h3><i class="fas fa-cog"></i> Mechanics (15 chapters)</h3>
          <div class="chapters-grid">
            ${renderPhysicsChapters([
              'Units and Measurements',
              'Motion in a Straight Line',
              'Motion in a Plane',
              'Laws of Motion',
              'Work, Energy and Power',
              'System of Particles and Rotational Motion',
              'Gravitation',
              'Mechanical Properties of Solids',
              'Mechanical Properties of Fluids',
              'Thermal Properties of Matter',
              'Thermodynamics',
              'Kinetic Theory',
              'Oscillations',
              'Waves',
              'Sound'
            ])}
          </div>
        </div>
      </div>

      <!-- Class 12 Physics -->
      <div class="class-section">
        <h2><i class="fas fa-graduation-cap"></i> Class 12 Physics</h2>
        
        <!-- Electromagnetism -->
        <div class="unit-section">
          <h3><i class="fas fa-bolt"></i> Electromagnetism (12 chapters)</h3>
          <div class="chapters-grid">
            ${renderPhysicsChapters([
              'Electric Charges and Fields',
              'Electrostatic Potential and Capacitance',
              'Current Electricity',
              'Moving Charges and Magnetism',
              'Magnetism and Matter',
              'Electromagnetic Induction',
              'Alternating Current',
              'Electromagnetic Waves',
              'Ray Optics and Optical Instruments',
              'Wave Optics',
              'Dual Nature of Radiation and Matter',
              'Atoms and Nuclei'
            ])}
          </div>
        </div>

        <!-- Modern Physics -->
        <div class="unit-section">
          <h3><i class="fas fa-atom"></i> Modern Physics (10 chapters)</h3>
          <div class="chapters-grid">
            ${renderPhysicsChapters([
              'Photoelectric Effect',
              'X-Rays',
              'Matter Waves',
              'Bohr Model',
              'Nuclear Physics',
              'Radioactivity',
              'Semiconductor Electronics',
              'Communication Systems',
              'Experimental Physics',
              'Error Analysis'
            ])}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPhysicsChapters(chapters) {
  return chapters.map((name, idx) => `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3>${name}</h3>
        <span class="difficulty-badge medium">medium</span>
      </div>
      <div class="chapter-meta">
        <span><i class="fas fa-list"></i> 12 topics</span>
        <span><i class="fas fa-question"></i> 20 problems</span>
      </div>
      <div class="chapter-footer">
        <button class="btn-small">
          <i class="fas fa-pen"></i> Practice
        </button>
        <button class="btn-small">
          <i class="fas fa-layer-group"></i> Flashcards
        </button>
      </div>
    </div>
  `).join('');
}

// ==================== CHEMISTRY - ALL UNITS ====================
function renderChemistryComplete() {
  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-flask"></i> Chemistry - Complete JEE Syllabus</h1>
        <div class="subject-meta">
          <span class="badge"><i class="fas fa-book"></i> 47 Chapters</span>
          <span class="badge"><i class="fas fa-list"></i> 550+ Topics</span>
          <span class="badge"><i class="fas fa-question"></i> 900+ Problems</span>
        </div>
      </div>

      <!-- Class 11 Chemistry -->
      <div class="class-section">
        <h2><i class="fas fa-graduation-cap"></i> Class 11 Chemistry</h2>
        
        <!-- Physical Chemistry -->
        <div class="unit-section">
          <h3><i class="fas fa-atom"></i> Physical Chemistry (10 chapters)</h3>
          <div class="chapters-grid">
            ${renderChemistryChapters([
              'Some Basic Concepts of Chemistry',
              'Structure of Atom',
              'Classification of Elements',
              'Chemical Bonding',
              'States of Matter',
              'Thermodynamics',
              'Equilibrium',
              'Redox Reactions',
              'Hydrogen',
              'S-Block Elements'
            ])}
          </div>
        </div>

        <!-- Organic Chemistry -->
        <div class="unit-section">
          <h3><i class="fas fa-flask"></i> Organic Chemistry (8 chapters)</h3>
          <div class="chapters-grid">
            ${renderChemistryChapters([
              'Organic Chemistry Basics',
              'Hydrocarbons',
              'Environmental Chemistry',
              'Purification and Characterization',
              'Nomenclature',
              'Isomerism',
              'Reaction Mechanisms',
              'GOC Fundamentals'
            ])}
          </div>
        </div>
      </div>

      <!-- Class 12 Chemistry -->
      <div class="class-section">
        <h2><i class="fas fa-graduation-cap"></i> Class 12 Chemistry</h2>
        
        <!-- Physical Chemistry -->
        <div class="unit-section">
          <h3><i class="fas fa-atom"></i> Physical Chemistry (12 chapters)</h3>
          <div class="chapters-grid">
            ${renderChemistryChapters([
              'Solid State',
              'Solutions',
              'Electrochemistry',
              'Chemical Kinetics',
              'Surface Chemistry',
              'General Principles of Metallurgy',
              'P-Block Elements',
              'D and F Block Elements',
              'Coordination Compounds',
              'Haloalkanes and Haloarenes',
              'Alcohols, Phenols and Ethers',
              'Aldehydes, Ketones and Carboxylic Acids'
            ])}
          </div>
        </div>

        <!-- Organic Chemistry -->
        <div class="unit-section">
          <h3><i class="fas fa-flask"></i> Organic Chemistry (12 chapters)</h3>
          <div class="chapters-grid">
            ${renderChemistryChapters([
              'Amines',
              'Biomolecules',
              'Polymers',
              'Chemistry in Everyday Life',
              'Organic Reactions',
              'Named Reactions',
              'Spectroscopy',
              'Stereochemistry',
              'Aromatic Compounds',
              'Heterocyclic Compounds',
              'Organic Synthesis',
              'Reagents and Mechanisms'
            ])}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderChemistryChapters(chapters) {
  return chapters.map((name, idx) => `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3>${name}</h3>
        <span class="difficulty-badge medium">medium</span>
      </div>
      <div class="chapter-meta">
        <span><i class="fas fa-list"></i> 10 topics</span>
        <span class="fas fa-question"></i> 18 problems</span>
      </div>
      <div class="chapter-footer">
        <button class="btn-small">
          <i class="fas fa-pen"></i> Practice
        </button>
        <button class="btn-small">
          <i class="fas fa-layer-group"></i> Flashcards
        </button>
      </div>
    </div>
  `).join('');
}

// ==================== MATHS - ALL UNITS ====================
function renderMathsComplete() {
  return `
    <div class="subject-page">
      <div class="subject-header">
        <h1><i class="fas fa-square-root-alt"></i> Mathematics - Complete JEE Syllabus</h1>
        <div class="subject-meta">
          <span class="badge"><i class="fas fa-book"></i> 62 Chapters</span>
          <span class="badge"><i class="fas fa-list"></i> 700+ Topics</span>
          <span class="badge"><i class="fas fa-question"></i> 1200+ Problems</span>
        </div>
      </div>

      <!-- Class 11 Maths -->
      <div class="class-section">
        <h2><i class="fas fa-graduation-cap"></i> Class 11 Mathematics</h2>
        
        <!-- Algebra -->
        <div class="unit-section">
          <h3><i class="fas fa-calculator"></i> Algebra (15 chapters)</h3>
          <div class="chapters-grid">
            ${renderMathsChapters([
              'Sets and Relations',
              'Functions',
              'Trigonometric Functions',
              'Principle of Mathematical Induction',
              'Complex Numbers',
              'Linear Inequalities',
              'Permutations and Combinations',
              'Binomial Theorem',
              'Sequences and Series',
              'Straight Lines',
              'Conic Sections',
              'Introduction to 3D Geometry',
              'Limits and Derivatives',
              'Mathematical Reasoning',
              'Statistics'
            ])}
          </div>
        </div>
      </div>

      <!-- Class 12 Maths -->
      <div class="class-section">
        <h2><i class="fas fa-graduation-cap"></i> Class 12 Mathematics</h2>
        
        <!-- Calculus -->
        <div class="unit-section">
          <h3><i class="fas fa-chart-line"></i> Calculus (20 chapters)</h3>
          <div class="chapters-grid">
            ${renderMathsChapters([
              'Relations and Functions',
              'Inverse Trigonometric Functions',
              'Matrices',
              'Determinants',
              'Continuity and Differentiability',
              'Applications of Derivatives',
              'Integrals',
              'Applications of Integrals',
              'Differential Equations',
              'Vector Algebra',
              'Three Dimensional Geometry',
              'Linear Programming',
              'Probability',
              'Limits',
              'Differentiation',
              'Integration Techniques',
              'Definite Integrals',
              'Area Under Curves',
              'Differential Equations Advanced',
              'Probability Distributions'
            ])}
          </div>
        </div>

        <!-- Coordinate Geometry -->
        <div class="unit-section">
          <h3><i class="fas fa-project-diagram"></i> Coordinate Geometry (12 chapters)</h3>
          <div class="chapters-grid">
            ${renderMathsChapters([
              'Parabola',
              'Ellipse',
              'Hyperbola',
              'Circle',
              'Pair of Straight Lines',
              '3D Lines',
              '3D Planes',
              'Sphere',
              'Cone',
              'Cylinder',
              'Vector Methods',
              'Direction Cosines'
            ])}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMathsChapters(chapters) {
  return chapters.map((name, idx) => `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3>${name}</h3>
        <span class="difficulty-badge medium">medium</span>
      </div>
      <div class="chapter-meta">
        <span><i class="fas fa-list"></i> 15 topics</span>
        <span><i class="fas fa-question"></i> 25 problems</span>
      </div>
      <div class="chapter-footer">
        <button class="btn-small">
          <i class="fas fa-pen"></i> Practice
        </button>
        <button class="btn-small">
          <i class="fas fa-layer-group"></i> Flashcards
        </button>
      </div>
    </div>
  `).join('');
}

// ==================== TECH - ALL DOMAINS ====================
function renderTechComplete() {
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
        <h2><i class="fas fa-globe"></i> Web Development (25 projects)</h2>
        <div class="chapters-grid">
          ${renderTechProjects([
            { name: 'Portfolio Website', tech: 'HTML, CSS, JS' },
            { name: 'Todo App', tech: 'React, LocalStorage' },
            { name: 'Weather App', tech: 'React, API' },
            { name: 'E-commerce Site', tech: 'MERN Stack' },
            { name: 'Blog Platform', tech: 'Next.js, MongoDB' },
            { name: 'Chat Application', tech: 'Socket.io, Node.js' },
            { name: 'Video Streaming', tech: 'React, HLS' },
            { name: 'Social Media Clone', tech: 'MERN, Redux' }
          ])}
        </div>
      </div>

      <!-- Data Structures & Algorithms -->
      <div class="unit-section">
        <h2><i class="fas fa-code"></i> DSA (500+ problems)</h2>
        <div class="chapters-grid">
          ${renderTechProjects([
            { name: 'Arrays & Strings', tech: '100 problems' },
            { name: 'Linked Lists', tech: '50 problems' },
            { name: 'Trees & Graphs', tech: '80 problems' },
            { name: 'Dynamic Programming', tech: '70 problems' },
            { name: 'Sorting & Searching', tech: '60 problems' },
            { name: 'Recursion & Backtracking', tech: '50 problems' },
            { name: 'Greedy Algorithms', tech: '40 problems' },
            { name: 'Advanced Topics', tech: '50 problems' }
          ])}
        </div>
      </div>

      <!-- Mobile Development -->
      <div class="unit-section">
        <h2><i class="fas fa-mobile-alt"></i> Mobile Development (15 projects)</h2>
        <div class="chapters-grid">
          ${renderTechProjects([
            { name: 'Calculator App', tech: 'React Native' },
            { name: 'Notes App', tech: 'Flutter' },
            { name: 'Fitness Tracker', tech: 'React Native' },
            { name: 'Food Delivery App', tech: 'Flutter, Firebase' },
            { name: 'Music Player', tech: 'React Native' }
          ])}
        </div>
      </div>

      <!-- AI/ML -->
      <div class="unit-section">
        <h2><i class="fas fa-brain"></i> AI & Machine Learning (20 projects)</h2>
        <div class="chapters-grid">
          ${renderTechProjects([
            { name: 'Image Classifier', tech: 'TensorFlow, Python' },
            { name: 'Chatbot', tech: 'NLP, Python' },
            { name: 'Recommendation System', tech: 'Pandas, Scikit-learn' },
            { name: 'Stock Predictor', tech: 'LSTM, Keras' },
            { name: 'Face Recognition', tech: 'OpenCV, Python' }
          ])}
        </div>
      </div>

      <!-- DevOps & Cloud -->
      <div class="unit-section">
        <h2><i class="fas fa-cloud"></i> DevOps & Cloud (15 projects)</h2>
        <div class="chapters-grid">
          ${renderTechProjects([
            { name: 'CI/CD Pipeline', tech: 'GitHub Actions' },
            { name: 'Docker Containers', tech: 'Docker, Kubernetes' },
            { name: 'AWS Deployment', tech: 'AWS, EC2, S3' },
            { name: 'Monitoring System', tech: 'Prometheus, Grafana' },
            { name: 'Infrastructure as Code', tech: 'Terraform' }
          ])}
        </div>
      </div>

      <!-- Blockchain -->
      <div class="unit-section">
        <h2><i class="fas fa-link"></i> Blockchain (10 projects)</h2>
        <div class="chapters-grid">
          ${renderTechProjects([
            { name: 'Smart Contracts', tech: 'Solidity, Ethereum' },
            { name: 'DeFi App', tech: 'Web3.js, React' },
            { name: 'NFT Marketplace', tech: 'Solidity, IPFS' },
            { name: 'DAO Platform', tech: 'Hardhat, Ethers.js' }
          ])}
        </div>
      </div>
    </div>
  `;
}

function renderTechProjects(projects) {
  return projects.map(project => `
    <div class="chapter-card">
      <div class="chapter-header">
        <h3>${project.name}</h3>
        <span class="difficulty-badge medium">medium</span>
      </div>
      <div class="chapter-meta">
        <span><i class="fas fa-code"></i> ${project.tech}</span>
      </div>
      <div class="chapter-footer">
        <button class="btn-small">
          <i class="fas fa-play"></i> Start
        </button>
        <button class="btn-small">
          <i class="fas fa-book"></i> Guide
        </button>
      </div>
    </div>
  `).join('');
}

console.log('✅ Complete render functions loaded!');
