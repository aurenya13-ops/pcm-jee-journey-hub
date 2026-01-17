// ==================== MOCK TESTS SYSTEM ====================

let mockTestState = {
  currentTest: null,
  answers: {},
  startTime: null,
  timeRemaining: 0,
  timerInterval: null,
  isSubmitted: false
};

// Mock test templates
const mockTestTemplates = {
  jee_main_full: {
    name: "JEE Main Full Test",
    duration: 180, // 3 hours in minutes
    sections: [
      { name: "Physics", questions: 30, marks: 120 },
      { name: "Chemistry", questions: 30, marks: 120 },
      { name: "Mathematics", questions: 30, marks: 120 }
    ],
    totalQuestions: 90,
    totalMarks: 360,
    positiveMarks: 4,
    negativeMarks: -1
  },
  jee_main_physics: {
    name: "JEE Main Physics",
    duration: 60,
    sections: [
      { name: "Physics", questions: 30, marks: 120 }
    ],
    totalQuestions: 30,
    totalMarks: 120,
    positiveMarks: 4,
    negativeMarks: -1
  },
  jee_advanced: {
    name: "JEE Advanced Full Test",
    duration: 180,
    sections: [
      { name: "Physics", questions: 18, marks: 186 },
      { name: "Chemistry", questions: 18, marks: 186 },
      { name: "Mathematics", questions: 18, marks: 186 }
    ],
    totalQuestions: 54,
    totalMarks: 558,
    positiveMarks: 3,
    negativeMarks: -1
  },
  quick_test: {
    name: "Quick Practice Test",
    duration: 30,
    sections: [
      { name: "Mixed", questions: 20, marks: 80 }
    ],
    totalQuestions: 20,
    totalMarks: 80,
    positiveMarks: 4,
    negativeMarks: -1
  }
};

// Generate mock test questions
function generateMockTest(templateKey) {
  const template = mockTestTemplates[templateKey];
  const questions = [];
  
  // Generate questions from available content
  let questionId = 1;
  
  template.sections.forEach(section => {
    for (let i = 0; i < section.questions; i++) {
      // Get random problem from content
      const problem = getRandomProblem(section.name);
      
      questions.push({
        id: questionId++,
        section: section.name,
        question: problem.question,
        options: problem.options,
        correctAnswer: problem.correctAnswer,
        solution: problem.solution,
        difficulty: problem.difficulty
      });
    }
  });
  
  return {
    ...template,
    questions: questions,
    templateKey: templateKey
  };
}

// Get random problem from content
function getRandomProblem(subject) {
  // Simplified - in real app, pull from actual content
  const difficulties = ['easy', 'medium', 'hard'];
  const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
  
  return {
    question: `Sample ${subject} question - ${difficulty} level`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: Math.floor(Math.random() * 4),
    solution: 'Detailed solution would be here',
    difficulty: difficulty
  };
}

// Start mock test
function startMockTest(templateKey) {
  const test = generateMockTest(templateKey);
  
  mockTestState.currentTest = test;
  mockTestState.answers = {};
  mockTestState.startTime = Date.now();
  mockTestState.timeRemaining = test.duration * 60; // Convert to seconds
  mockTestState.isSubmitted = false;
  
  startTestTimer();
  renderMockTestInterface();
  showNotification(`🎯 ${test.name} started! Good luck!`, 'success');
}

// Start test timer
function startTestTimer() {
  mockTestState.timerInterval = setInterval(() => {
    mockTestState.timeRemaining--;
    
    if (mockTestState.timeRemaining <= 0) {
      autoSubmitTest();
    } else {
      updateTimerDisplay();
      
      // Warning at 5 minutes
      if (mockTestState.timeRemaining === 300) {
        showNotification('⚠️ 5 minutes remaining!', 'warning');
      }
    }
  }, 1000);
}

// Update timer display
function updateTimerDisplay() {
  const hours = Math.floor(mockTestState.timeRemaining / 3600);
  const minutes = Math.floor((mockTestState.timeRemaining % 3600) / 60);
  const seconds = mockTestState.timeRemaining % 60;
  
  const timerElement = document.getElementById('test-timer');
  if (timerElement) {
    timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Change color when time is low
    if (mockTestState.timeRemaining < 300) {
      timerElement.style.color = 'var(--danger)';
    }
  }
}

// Save answer
function saveAnswer(questionId, optionIndex) {
  mockTestState.answers[questionId] = optionIndex;
  
  // Update UI
  const questionBtn = document.querySelector(`[data-question="${questionId}"]`);
  if (questionBtn) {
    questionBtn.classList.add('answered');
  }
}

// Navigate to question
function goToQuestion(questionId) {
  const questionElement = document.getElementById(`question-${questionId}`);
  if (questionElement) {
    questionElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Submit test
function submitTest() {
  if (!confirm('Are you sure you want to submit the test?')) return;
  
  clearInterval(mockTestState.timerInterval);
  mockTestState.isSubmitted = true;
  
  const results = calculateResults();
  renderTestResults(results);
  
  // Award XP based on performance
  const xpEarned = Math.round(results.percentage * 5);
  addXP(xpEarned);
  
  showNotification(`✅ Test submitted! You scored ${results.percentage}%`, 'success');
}

// Auto submit test
function autoSubmitTest() {
  clearInterval(mockTestState.timerInterval);
  mockTestState.isSubmitted = true;
  
  showNotification('⏰ Time up! Test auto-submitted', 'warning');
  
  const results = calculateResults();
  renderTestResults(results);
}

// Calculate results
function calculateResults() {
  const test = mockTestState.currentTest;
  let correct = 0;
  let incorrect = 0;
  let unattempted = 0;
  let totalMarks = 0;
  
  test.questions.forEach(question => {
    const userAnswer = mockTestState.answers[question.id];
    
    if (userAnswer === undefined) {
      unattempted++;
    } else if (userAnswer === question.correctAnswer) {
      correct++;
      totalMarks += test.positiveMarks;
    } else {
      incorrect++;
      totalMarks += test.negativeMarks;
    }
  });
  
  const percentage = Math.round((correct / test.totalQuestions) * 100);
  const accuracy = correct > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
  
  return {
    correct,
    incorrect,
    unattempted,
    totalMarks,
    maxMarks: test.totalMarks,
    percentage,
    accuracy,
    timeTaken: test.duration - Math.floor(mockTestState.timeRemaining / 60)
  };
}

// Render mock test interface
function renderMockTestInterface() {
  const test = mockTestState.currentTest;
  
  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="mock-test-interface">
      <!-- Test Header -->
      <div class="test-header">
        <div class="test-info">
          <h2>${test.name}</h2>
          <span>${test.totalQuestions} Questions | ${test.totalMarks} Marks</span>
        </div>
        <div class="test-timer" id="test-timer">
          ${Math.floor(test.duration / 60)}:00:00
        </div>
        <button class="btn-danger" onclick="submitTest()">
          <i class="fas fa-check"></i> Submit Test
        </button>
      </div>

      <div class="test-container">
        <!-- Questions Panel -->
        <div class="questions-panel">
          ${test.questions.map((q, idx) => `
            <div class="question-block" id="question-${q.id}">
              <div class="question-header">
                <span class="question-number">Question ${idx + 1}</span>
                <span class="question-marks">+${test.positiveMarks} / ${test.negativeMarks}</span>
              </div>
              
              <div class="question-text">${q.question}</div>
              
              <div class="options-list">
                ${q.options.map((option, optIdx) => `
                  <label class="option-item">
                    <input type="radio" name="question-${q.id}" value="${optIdx}" 
                           onchange="saveAnswer(${q.id}, ${optIdx})">
                    <span class="option-label">${String.fromCharCode(65 + optIdx)})</span>
                    <span class="option-text">${option}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Navigation Panel -->
        <div class="navigation-panel">
          <h3>Question Palette</h3>
          
          <div class="palette-legend">
            <div class="legend-item">
              <span class="palette-btn answered"></span>
              <span>Answered</span>
            </div>
            <div class="legend-item">
              <span class="palette-btn"></span>
              <span>Not Answered</span>
            </div>
          </div>

          <div class="question-palette">
            ${test.questions.map(q => `
              <button class="palette-btn" data-question="${q.id}" 
                      onclick="goToQuestion(${q.id})">
                ${q.id}
              </button>
            `).join('')}
          </div>

          <div class="test-stats">
            <div class="stat-item">
              <span class="stat-label">Answered</span>
              <span class="stat-value" id="answered-count">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Not Answered</span>
              <span class="stat-value" id="unanswered-count">${test.totalQuestions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render test results
function renderTestResults(results) {
  const test = mockTestState.currentTest;
  
  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="test-results">
      <div class="results-header">
        <h1>🎯 Test Results</h1>
        <h2>${test.name}</h2>
      </div>

      <div class="results-summary">
        <div class="result-card score-card">
          <div class="result-number">${results.totalMarks}</div>
          <div class="result-label">Total Score</div>
          <div class="result-sublabel">out of ${results.maxMarks}</div>
        </div>

        <div class="result-card">
          <div class="result-number">${results.percentage}%</div>
          <div class="result-label">Percentage</div>
        </div>

        <div class="result-card">
          <div class="result-number">${results.accuracy}%</div>
          <div class="result-label">Accuracy</div>
        </div>

        <div class="result-card">
          <div class="result-number">${results.timeTaken}</div>
          <div class="result-label">Minutes Taken</div>
        </div>
      </div>

      <div class="results-breakdown">
        <h3>📊 Detailed Analysis</h3>
        <div class="breakdown-grid">
          <div class="breakdown-item correct">
            <i class="fas fa-check-circle"></i>
            <span class="breakdown-number">${results.correct}</span>
            <span class="breakdown-label">Correct</span>
          </div>
          <div class="breakdown-item incorrect">
            <i class="fas fa-times-circle"></i>
            <span class="breakdown-number">${results.incorrect}</span>
            <span class="breakdown-label">Incorrect</span>
          </div>
          <div class="breakdown-item unattempted">
            <i class="fas fa-minus-circle"></i>
            <span class="breakdown-number">${results.unattempted}</span>
            <span class="breakdown-label">Unattempted</span>
          </div>
        </div>
      </div>

      <div class="results-actions">
        <button class="btn-primary" onclick="reviewAnswers()">
          <i class="fas fa-eye"></i> Review Answers
        </button>
        <button class="btn-primary" onclick="showSection('mock-tests')">
          <i class="fas fa-redo"></i> Take Another Test
        </button>
        <button class="btn-primary" onclick="showSection('dashboard')">
          <i class="fas fa-home"></i> Back to Dashboard
        </button>
      </div>
    </div>
  `;
}

// Render mock tests page
function renderMockTests() {
  return `
    <div class="mock-tests-page">
      <div class="page-header">
        <h1><i class="fas fa-clipboard-check"></i> Mock Tests</h1>
        <p>Practice with full-length JEE-style tests</p>
      </div>

      <div class="tests-grid">
        ${Object.keys(mockTestTemplates).map(key => {
          const template = mockTestTemplates[key];
          return `
            <div class="test-card">
              <div class="test-icon">
                <i class="fas fa-file-alt"></i>
              </div>
              <h3>${template.name}</h3>
              <div class="test-details">
                <span><i class="fas fa-clock"></i> ${template.duration} minutes</span>
                <span><i class="fas fa-question"></i> ${template.totalQuestions} questions</span>
                <span><i class="fas fa-star"></i> ${template.totalMarks} marks</span>
              </div>
              <div class="test-sections">
                ${template.sections.map(s => `<span class="section-badge">${s.name}</span>`).join('')}
              </div>
              <button class="btn-primary btn-large" onclick="startMockTest('${key}')">
                <i class="fas fa-play"></i> Start Test
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <div class="test-tips">
        <h2>📝 Test Taking Tips</h2>
        <ul>
          <li>🎯 Read questions carefully before answering</li>
          <li>⏰ Manage your time wisely - don't spend too long on one question</li>
          <li>✅ Answer easy questions first</li>
          <li>🤔 Use elimination method for difficult questions</li>
          <li>📊 Review your answers before submitting</li>
          <li>💪 Stay calm and focused throughout the test</li>
        </ul>
      </div>
    </div>
  `;
}

console.log('✅ Mock tests system loaded');
