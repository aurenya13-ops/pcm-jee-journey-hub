// ==================== DEEP LEARNING SYSTEM ====================
// Advanced learning techniques for deep understanding

const DEEP_LEARNING_SYSTEM = {
  techniques: {
    feynman: {
      name: "Feynman Technique",
      icon: "fas fa-chalkboard-teacher",
      description: "Explain concepts in simple terms to truly understand them",
      steps: [
        "Choose a concept you want to learn",
        "Explain it in simple language (as if teaching a child)",
        "Identify gaps in your understanding",
        "Review and simplify further"
      ],
      color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    
    spaced_repetition: {
      name: "Spaced Repetition",
      icon: "fas fa-calendar-alt",
      description: "Review material at increasing intervals for long-term retention",
      intervals: [
        { day: 1, label: "1 day later" },
        { day: 3, label: "3 days later" },
        { day: 7, label: "1 week later" },
        { day: 14, label: "2 weeks later" },
        { day: 30, label: "1 month later" }
      ],
      color: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    
    active_recall: {
      name: "Active Recall",
      icon: "fas fa-brain",
      description: "Test yourself actively instead of passive reading",
      methods: [
        "Close the book and write what you remember",
        "Create questions before reading",
        "Use flashcards",
        "Teach someone else",
        "Practice problems without looking at solutions"
      ],
      color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    
    mind_mapping: {
      name: "Mind Mapping",
      icon: "fas fa-project-diagram",
      description: "Visualize connections between concepts",
      benefits: [
        "See the big picture",
        "Connect related concepts",
        "Identify knowledge gaps",
        "Better memory retention"
      ],
      color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    
    interleaving: {
      name: "Interleaving",
      icon: "fas fa-random",
      description: "Mix different topics instead of blocking",
      example: "Instead of: Physics → Physics → Physics\nDo: Physics → Chemistry → Maths → Physics",
      color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    
    elaboration: {
      name: "Elaboration",
      icon: "fas fa-comments",
      description: "Connect new information to what you already know",
      questions: [
        "How does this relate to what I already know?",
        "Why does this work?",
        "What are real-world examples?",
        "How can I apply this?"
      ],
      color: "linear-gradient(135deg, #30cfd0, #330867)"
    }
  }
};

function renderDeepLearningSystem() {
  return `
    <div class="deep-learning-page">
      <!-- Header -->
      <div class="learning-header">
        <h1><i class="fas fa-graduation-cap"></i> Deep Learning System</h1>
        <p>Master concepts with proven learning techniques</p>
      </div>

      <!-- Techniques Grid -->
      <div class="techniques-grid">
        ${Object.entries(DEEP_LEARNING_SYSTEM.techniques).map(([key, technique]) => `
          <div class="technique-card" onclick="openTechnique('${key}')">
            <div class="technique-icon" style="background: ${technique.color};">
              <i class="${technique.icon}"></i>
            </div>
            <h3>${technique.name}</h3>
            <p>${technique.description}</p>
            <button class="learn-btn">Learn More <i class="fas fa-arrow-right"></i></button>
          </div>
        `).join('')}
      </div>

      <!-- Active Learning Section -->
      <div class="section-card">
        <h2><i class="fas fa-fire"></i> Your Active Learning</h2>
        <div class="active-learning-stats">
          <div class="learning-stat">
            <div class="stat-icon" style="background: linear-gradient(135deg, #667eea, #764ba2);">
              <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <div class="stat-info">
              <h3>12</h3>
              <p>Concepts Explained (Feynman)</p>
            </div>
          </div>
          
          <div class="learning-stat">
            <div class="stat-icon" style="background: linear-gradient(135deg, #f093fb, #f5576c);">
              <i class="fas fa-calendar-check"></i>
            </div>
            <div class="stat-info">
              <h3>45</h3>
              <p>Cards Due for Review</p>
            </div>
          </div>
          
          <div class="learning-stat">
            <div class="stat-icon" style="background: linear-gradient(135deg, #4facfe, #00f2fe);">
              <i class="fas fa-brain"></i>
            </div>
            <div class="stat-info">
              <h3>89%</h3>
              <p>Active Recall Success Rate</p>
            </div>
          </div>
          
          <div class="learning-stat">
            <div class="stat-icon" style="background: linear-gradient(135deg, #43e97b, #38f9d7);">
              <i class="fas fa-project-diagram"></i>
            </div>
            <div class="stat-info">
              <h3>8</h3>
              <p>Mind Maps Created</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Study Session Planner -->
      <div class="section-card">
        <h2><i class="fas fa-calendar-week"></i> Smart Study Planner</h2>
        <div class="study-planner">
          <div class="planner-card">
            <h3>Today's Deep Learning</h3>
            <div class="planner-tasks">
              <div class="planner-task">
                <i class="fas fa-chalkboard-teacher"></i>
                <div>
                  <h4>Feynman: Newton's Laws</h4>
                  <p>Explain in simple terms</p>
                </div>
                <span class="task-time">30 min</span>
              </div>
              <div class="planner-task">
                <i class="fas fa-brain"></i>
                <div>
                  <h4>Active Recall: Organic Chemistry</h4>
                  <p>Test yourself on reactions</p>
                </div>
                <span class="task-time">20 min</span>
              </div>
              <div class="planner-task">
                <i class="fas fa-project-diagram"></i>
                <div>
                  <h4>Mind Map: Calculus Concepts</h4>
                  <p>Connect integration techniques</p>
                </div>
                <span class="task-time">25 min</span>
              </div>
            </div>
          </div>
          
          <div class="planner-card">
            <h3>Spaced Repetition Queue</h3>
            <div class="review-queue">
              <div class="review-item urgent">
                <span class="review-badge">Due Now</span>
                <h4>Kinematics Formulas</h4>
                <p>Last reviewed: 7 days ago</p>
              </div>
              <div class="review-item soon">
                <span class="review-badge">Due Tomorrow</span>
                <h4>Organic Reactions</h4>
                <p>Last reviewed: 2 days ago</p>
              </div>
              <div class="review-item upcoming">
                <span class="review-badge">Due in 3 days</span>
                <h4>Integration Techniques</h4>
                <p>Last reviewed: 4 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Concept Connections -->
      <div class="section-card">
        <h2><i class="fas fa-link"></i> Concept Connections</h2>
        <p class="section-description">See how different concepts relate to each other</p>
        <div class="concept-network">
          <div class="concept-node physics">
            <h4>Newton's Laws</h4>
            <div class="connections">
              <span class="connection-line"></span>
              <span class="connection-label">applies to</span>
            </div>
          </div>
          <div class="concept-node maths">
            <h4>Calculus</h4>
            <div class="connections">
              <span class="connection-line"></span>
              <span class="connection-label">used in</span>
            </div>
          </div>
          <div class="concept-node tech">
            <h4>Physics Simulations</h4>
          </div>
        </div>
        <button class="explore-btn" onclick="openConceptMap()">
          <i class="fas fa-expand"></i> Explore Full Concept Map
        </button>
      </div>

      <!-- Learning Analytics -->
      <div class="section-card">
        <h2><i class="fas fa-chart-line"></i> Learning Analytics</h2>
        <div class="analytics-grid">
          <div class="analytics-card">
            <h3>Understanding Depth</h3>
            <div class="depth-meter">
              <div class="depth-bar" style="width: 75%; background: linear-gradient(90deg, #667eea, #764ba2);"></div>
            </div>
            <p>75% - Good understanding, keep practicing</p>
          </div>
          
          <div class="analytics-card">
            <h3>Retention Rate</h3>
            <div class="retention-chart">
              <div class="chart-bar" style="height: 60%;">Day 1</div>
              <div class="chart-bar" style="height: 75%;">Day 3</div>
              <div class="chart-bar" style="height: 85%;">Day 7</div>
              <div class="chart-bar" style="height: 90%;">Day 14</div>
            </div>
          </div>
          
          <div class="analytics-card">
            <h3>Weak Areas</h3>
            <ul class="weak-areas">
              <li><i class="fas fa-exclamation-triangle"></i> Organic Mechanisms (45%)</li>
              <li><i class="fas fa-exclamation-triangle"></i> Complex Integration (52%)</li>
              <li><i class="fas fa-exclamation-triangle"></i> Electromagnetic Induction (58%)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions-bar">
        <button class="action-btn" onclick="startFeynmanSession()">
          <i class="fas fa-chalkboard-teacher"></i> Start Feynman Session
        </button>
        <button class="action-btn" onclick="reviewCards()">
          <i class="fas fa-layer-group"></i> Review Flashcards
        </button>
        <button class="action-btn" onclick="createMindMap()">
          <i class="fas fa-project-diagram"></i> Create Mind Map
        </button>
        <button class="action-btn" onclick="takeActiveRecallTest()">
          <i class="fas fa-brain"></i> Active Recall Test
        </button>
      </div>
    </div>
  `;
}

// Technique Detail Modal
function openTechnique(techniqueKey) {
  const technique = DEEP_LEARNING_SYSTEM.techniques[techniqueKey];
  
  const modal = document.createElement('div');
  modal.className = 'technique-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="modal-header" style="background: ${technique.color};">
        <i class="${technique.icon}"></i>
        <h2>${technique.name}</h2>
      </div>
      
      <div class="modal-body">
        <p class="technique-description">${technique.description}</p>
        
        ${technique.steps ? `
          <h3>How to Use:</h3>
          <ol class="technique-steps">
            ${technique.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        ` : ''}
        
        ${technique.methods ? `
          <h3>Methods:</h3>
          <ul class="technique-methods">
            ${technique.methods.map(method => `<li>${method}</li>`).join('')}
          </ul>
        ` : ''}
        
        ${technique.intervals ? `
          <h3>Review Schedule:</h3>
          <div class="interval-timeline">
            ${technique.intervals.map(interval => `
              <div class="interval-item">
                <div class="interval-dot"></div>
                <span>${interval.label}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
        
        ${technique.benefits ? `
          <h3>Benefits:</h3>
          <ul class="technique-benefits">
            ${technique.benefits.map(benefit => `<li><i class="fas fa-check"></i> ${benefit}</li>`).join('')}
          </ul>
        ` : ''}
        
        ${technique.questions ? `
          <h3>Key Questions:</h3>
          <ul class="technique-questions">
            ${technique.questions.map(q => `<li><i class="fas fa-question-circle"></i> ${q}</li>`).join('')}
          </ul>
        ` : ''}
        
        <button class="start-technique-btn" style="background: ${technique.color};">
          <i class="fas fa-play"></i> Start ${technique.name} Session
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('show'), 10);
}

// Helper Functions
function startFeynmanSession() {
  alert('Feynman Session starting! Choose a concept to explain in simple terms.');
}

function reviewCards() {
  showSection('flashcards');
}

function createMindMap() {
  alert('Mind Map creator opening! Visualize concept connections.');
}

function takeActiveRecallTest() {
  alert('Active Recall Test starting! Test your knowledge without looking at notes.');
}

function openConceptMap() {
  alert('Full Concept Map opening! Explore all connections between topics.');
}

console.log('✅ Deep Learning System Loaded!');
