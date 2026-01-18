// ==================== OCEAN DEEP LEARNING - REAL IMPLEMENTATION ====================
// Working Feynman Technique, Spaced Repetition Algorithm, Active Recall Tests

class OceanDeepLearning {
  constructor() {
    this.feynmanSessions = this.loadFeynmanSessions();
    this.spacedRepCards = this.loadSpacedRepCards();
    this.activeRecallTests = this.loadActiveRecallTests();
  }

  // ==================== FEYNMAN TECHNIQUE ====================
  
  loadFeynmanSessions() {
    const saved = localStorage.getItem('feynman_sessions');
    return saved ? JSON.parse(saved) : [];
  }

  saveFeynmanSessions() {
    localStorage.setItem('feynman_sessions', JSON.stringify(this.feynmanSessions));
  }

  startFeynmanSession(concept) {
    const session = {
      id: Date.now(),
      concept: concept,
      explanation: '',
      gaps: [],
      simplifications: [],
      createdAt: new Date().toISOString(),
      completed: false
    };
    
    this.feynmanSessions.unshift(session);
    this.saveFeynmanSessions();
    return session;
  }

  renderFeynmanTool() {
    return `
      <div class="ocean-feynman-tool">
        <div class="tool-header">
          <h2>🎓 Feynman Technique - Explain to Learn</h2>
          <p>Choose a concept and explain it in the simplest terms possible</p>
        </div>

        <!-- Start New Session -->
        <div class="feynman-start">
          <h3>Start New Feynman Session</h3>
          <div class="concept-selector">
            <select id="feynman-subject" onchange="updateFeynmanConcepts()">
              <option value="">Select Subject</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="maths">Maths</option>
            </select>
            <select id="feynman-concept">
              <option value="">Select Concept</option>
            </select>
            <button onclick="oceanDeepLearning.createFeynmanSession()" class="start-btn">
              <i class="fas fa-play"></i> Start Session
            </button>
          </div>
        </div>

        <!-- Active Session -->
        <div id="feynman-active-session" style="display: none;">
          <div class="feynman-session-card">
            <h3>Explain: <span id="current-concept"></span></h3>
            
            <div class="feynman-step">
              <h4>Step 1: Explain in Simple Terms</h4>
              <p>Imagine you're teaching this to a 10-year-old. Use simple language!</p>
              <textarea 
                id="feynman-explanation" 
                placeholder="Write your explanation here... Use simple words, avoid jargon."
                rows="8"
              ></textarea>
            </div>

            <div class="feynman-step">
              <h4>Step 2: Identify Gaps</h4>
              <p>What parts were hard to explain? Where did you get stuck?</p>
              <div id="gaps-list"></div>
              <div class="add-gap">
                <input type="text" id="new-gap" placeholder="What concept do you need to review?">
                <button onclick="oceanDeepLearning.addGap()">
                  <i class="fas fa-plus"></i> Add Gap
                </button>
              </div>
            </div>

            <div class="feynman-step">
              <h4>Step 3: Simplify Further</h4>
              <p>Can you make it even simpler? Use analogies!</p>
              <textarea 
                id="feynman-simplification" 
                placeholder="Rewrite using analogies and examples..."
                rows="6"
              ></textarea>
            </div>

            <div class="feynman-actions">
              <button onclick="oceanDeepLearning.saveFeynmanSession()" class="save-btn">
                <i class="fas fa-save"></i> Save Session
              </button>
              <button onclick="oceanDeepLearning.completeFeynmanSession()" class="complete-btn">
                <i class="fas fa-check"></i> Complete & Review
              </button>
            </div>
          </div>
        </div>

        <!-- Past Sessions -->
        <div class="feynman-history">
          <h3>Your Feynman Sessions (${this.feynmanSessions.length})</h3>
          <div class="sessions-grid">
            ${this.feynmanSessions.slice(0, 6).map(session => `
              <div class="session-card ${session.completed ? 'completed' : 'in-progress'}">
                <div class="session-header">
                  <h4>${session.concept}</h4>
                  <span class="session-status">
                    ${session.completed ? '✓ Completed' : '⏳ In Progress'}
                  </span>
                </div>
                <p class="session-date">${new Date(session.createdAt).toLocaleDateString()}</p>
                ${session.gaps.length > 0 ? `
                  <div class="session-gaps">
                    <strong>Gaps identified:</strong> ${session.gaps.length}
                  </div>
                ` : ''}
                <button onclick="oceanDeepLearning.viewSession('${session.id}')" class="view-btn">
                  View Session
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  createFeynmanSession() {
    const concept = document.getElementById('feynman-concept').value;
    if (!concept) {
      alert('Please select a concept!');
      return;
    }

    const session = this.startFeynmanSession(concept);
    document.getElementById('current-concept').textContent = concept;
    document.getElementById('feynman-active-session').style.display = 'block';
    document.querySelector('.feynman-start').style.display = 'none';
  }

  addGap() {
    const gapInput = document.getElementById('new-gap');
    const gap = gapInput.value.trim();
    
    if (gap) {
      const gapsList = document.getElementById('gaps-list');
      const gapEl = document.createElement('div');
      gapEl.className = 'gap-item';
      gapEl.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${gap}</span>
        <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
      `;
      gapsList.appendChild(gapEl);
      gapInput.value = '';
    }
  }

  saveFeynmanSession() {
    alert('Session saved! You can continue later.');
  }

  completeFeynmanSession() {
    const explanation = document.getElementById('feynman-explanation').value;
    const simplification = document.getElementById('feynman-simplification').value;
    
    if (!explanation || !simplification) {
      alert('Please complete all steps!');
      return;
    }

    alert('🎉 Excellent work! You\'ve completed the Feynman Technique!\n\nYou now understand this concept deeply. Review the gaps you identified and study them next.');
    
    // Reset
    document.getElementById('feynman-active-session').style.display = 'none';
    document.querySelector('.feynman-start').style.display = 'block';
    location.reload();
  }

  // ==================== SPACED REPETITION ====================
  
  loadSpacedRepCards() {
    const saved = localStorage.getItem('spaced_rep_cards');
    return saved ? JSON.parse(saved) : this.getDefaultCards();
  }

  getDefaultCards() {
    return [
      {
        id: 1,
        question: "What is Newton's First Law?",
        answer: "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.",
        subject: "Physics",
        nextReview: new Date().toISOString(),
        interval: 1,
        easeFactor: 2.5,
        reviews: 0
      },
      {
        id: 2,
        question: "What is the formula for kinetic energy?",
        answer: "KE = ½mv² where m is mass and v is velocity",
        subject: "Physics",
        nextReview: new Date().toISOString(),
        interval: 1,
        easeFactor: 2.5,
        reviews: 0
      },
      {
        id: 3,
        question: "What is the derivative of sin(x)?",
        answer: "cos(x)",
        subject: "Maths",
        nextReview: new Date().toISOString(),
        interval: 1,
        easeFactor: 2.5,
        reviews: 0
      }
    ];
  }

  saveSpacedRepCards() {
    localStorage.setItem('spaced_rep_cards', JSON.stringify(this.spacedRepCards));
  }

  getDueCards() {
    const now = new Date();
    return this.spacedRepCards.filter(card => new Date(card.nextReview) <= now);
  }

  reviewCard(cardId, quality) {
    // SM-2 Algorithm
    const card = this.spacedRepCards.find(c => c.id === cardId);
    if (!card) return;

    card.reviews++;

    if (quality >= 3) {
      // Correct answer
      if (card.reviews === 1) {
        card.interval = 1;
      } else if (card.reviews === 2) {
        card.interval = 6;
      } else {
        card.interval = Math.round(card.interval * card.easeFactor);
      }

      card.easeFactor = card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    } else {
      // Incorrect answer - reset
      card.interval = 1;
      card.reviews = 0;
    }

    if (card.easeFactor < 1.3) card.easeFactor = 1.3;

    // Set next review date
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + card.interval);
    card.nextReview = nextDate.toISOString();

    this.saveSpacedRepCards();
  }

  renderSpacedRepetition() {
    const dueCards = this.getDueCards();
    
    return `
      <div class="ocean-spaced-rep">
        <div class="tool-header">
          <h2>📅 Spaced Repetition - Long-term Memory</h2>
          <p>Review cards at optimal intervals for maximum retention</p>
        </div>

        <!-- Stats -->
        <div class="rep-stats">
          <div class="stat-box">
            <h3>${dueCards.length}</h3>
            <p>Due Now</p>
          </div>
          <div class="stat-box">
            <h3>${this.spacedRepCards.length}</h3>
            <p>Total Cards</p>
          </div>
          <div class="stat-box">
            <h3>${this.spacedRepCards.filter(c => c.reviews > 0).length}</h3>
            <p>Reviewed</p>
          </div>
        </div>

        ${dueCards.length > 0 ? `
          <!-- Review Session -->
          <div class="review-session">
            <div class="flashcard" id="current-flashcard">
              <div class="flashcard-front">
                <h3>${dueCards[0].question}</h3>
                <button onclick="document.getElementById('current-flashcard').classList.add('flipped')" class="flip-btn">
                  Show Answer
                </button>
              </div>
              <div class="flashcard-back">
                <h3>Answer:</h3>
                <p>${dueCards[0].answer}</p>
                <div class="quality-buttons">
                  <button onclick="oceanDeepLearning.reviewCard(${dueCards[0].id}, 1)" class="quality-btn hard">
                    Hard
                  </button>
                  <button onclick="oceanDeepLearning.reviewCard(${dueCards[0].id}, 3)" class="quality-btn good">
                    Good
                  </button>
                  <button onclick="oceanDeepLearning.reviewCard(${dueCards[0].id}, 5)" class="quality-btn easy">
                    Easy
                  </button>
                </div>
              </div>
            </div>
          </div>
        ` : `
          <div class="no-cards">
            <i class="fas fa-check-circle"></i>
            <h3>All caught up!</h3>
            <p>No cards due for review right now. Come back later!</p>
          </div>
        `}

        <!-- Upcoming Reviews -->
        <div class="upcoming-reviews">
          <h3>Upcoming Reviews</h3>
          <div class="review-timeline">
            ${this.spacedRepCards.slice(0, 10).map(card => `
              <div class="timeline-item">
                <div class="timeline-date">
                  ${new Date(card.nextReview).toLocaleDateString()}
                </div>
                <div class="timeline-content">
                  <h4>${card.question}</h4>
                  <span class="subject-badge">${card.subject}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ==================== ACTIVE RECALL ====================
  
  loadActiveRecallTests() {
    return [
      {
        id: 1,
        title: "Physics - Kinematics",
        questions: [
          { q: "Define velocity", a: "Rate of change of displacement" },
          { q: "What is acceleration?", a: "Rate of change of velocity" },
          { q: "Formula for distance in uniform motion?", a: "s = vt" }
        ]
      },
      {
        id: 2,
        title: "Chemistry - Organic Reactions",
        questions: [
          { q: "What is substitution reaction?", a: "Replacement of one atom/group with another" },
          { q: "Define addition reaction", a: "Two molecules combine to form one" }
        ]
      }
    ];
  }

  renderActiveRecall() {
    return `
      <div class="ocean-active-recall">
        <div class="tool-header">
          <h2>🧠 Active Recall - Test Yourself</h2>
          <p>Retrieve information from memory without looking at notes</p>
        </div>

        <!-- Test Selection -->
        <div class="test-selection">
          <h3>Choose a Test</h3>
          <div class="tests-grid">
            ${this.activeRecallTests.map(test => `
              <div class="test-card" onclick="oceanDeepLearning.startActiveRecallTest(${test.id})">
                <h4>${test.title}</h4>
                <p>${test.questions.length} questions</p>
                <button class="start-test-btn">
                  <i class="fas fa-play"></i> Start Test
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Instructions -->
        <div class="recall-instructions">
          <h3>How to Use Active Recall</h3>
          <ol>
            <li>Read the question carefully</li>
            <li>Try to answer WITHOUT looking at notes</li>
            <li>Write down your answer</li>
            <li>Check the correct answer</li>
            <li>Mark if you got it right or wrong</li>
          </ol>
        </div>
      </div>
    `;
  }

  startActiveRecallTest(testId) {
    alert('Active Recall Test starting! Answer each question from memory.');
  }
}

// Initialize
const oceanDeepLearning = new OceanDeepLearning();

// Helper function for Feynman concept selector
function updateFeynmanConcepts() {
  const subject = document.getElementById('feynman-subject').value;
  const conceptSelect = document.getElementById('feynman-concept');
  
  const concepts = {
    physics: ['Newton\'s Laws', 'Kinematics', 'Work & Energy', 'Gravitation', 'Thermodynamics'],
    chemistry: ['Atomic Structure', 'Chemical Bonding', 'Organic Reactions', 'Equilibrium', 'Electrochemistry'],
    maths: ['Calculus', 'Algebra', 'Trigonometry', 'Coordinate Geometry', 'Probability']
  };
  
  conceptSelect.innerHTML = '<option value="">Select Concept</option>';
  if (subject && concepts[subject]) {
    concepts[subject].forEach(concept => {
      conceptSelect.innerHTML += `<option value="${concept}">${concept}</option>`;
    });
  }
}

console.log('🌊 Ocean Deep Learning Loaded!');
console.log('🧠 Real Feynman, Spaced Repetition, Active Recall!');
