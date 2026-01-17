// ==================== WORKING QUIZ ENGINE ====================

class QuizEngine {
  constructor() {
    this.currentQuiz = null;
    this.currentQuestion = 0;
    this.score = 0;
    this.answers = [];
    this.timeLeft = 0;
    this.timer = null;
    this.quizStartTime = null;
  }

  // Start a quiz
  startQuiz(quizData) {
    this.currentQuiz = quizData;
    this.currentQuestion = 0;
    this.score = 0;
    this.answers = new Array(quizData.questions.length).fill(null);
    this.timeLeft = quizData.duration * 60; // Convert minutes to seconds
    this.quizStartTime = Date.now();
    
    this.renderQuiz();
    this.startTimer();
  }

  // Render quiz UI
  renderQuiz() {
    const container = document.getElementById('main-content');
    
    container.innerHTML = `
      <div class="quiz-container">
        <!-- Quiz Header -->
        <div class="quiz-header">
          <div class="quiz-info">
            <h1>${this.currentQuiz.title}</h1>
            <p>${this.currentQuiz.description}</p>
          </div>
          <div class="quiz-stats">
            <div class="stat-item">
              <i class="fas fa-question-circle"></i>
              <span>${this.currentQuestion + 1}/${this.currentQuiz.questions.length}</span>
            </div>
            <div class="stat-item">
              <i class="fas fa-clock"></i>
              <span id="quiz-timer">${this.formatTime(this.timeLeft)}</span>
            </div>
            <div class="stat-item">
              <i class="fas fa-star"></i>
              <span>${this.score}/${this.currentQuiz.questions.length}</span>
            </div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="quiz-progress">
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${(this.currentQuestion / this.currentQuiz.questions.length) * 100}%"></div>
          </div>
          <div class="question-indicators">
            ${this.currentQuiz.questions.map((_, idx) => `
              <div class="question-indicator ${idx === this.currentQuestion ? 'active' : ''} ${this.answers[idx] !== null ? 'answered' : ''}" 
                   onclick="quizEngine.goToQuestion(${idx})">
                ${idx + 1}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Question -->
        <div class="quiz-question">
          ${this.renderQuestion()}
        </div>

        <!-- Navigation -->
        <div class="quiz-navigation">
          <button class="btn-secondary" onclick="quizEngine.previousQuestion()" ${this.currentQuestion === 0 ? 'disabled' : ''}>
            <i class="fas fa-arrow-left"></i> Previous
          </button>
          
          <button class="btn-warning" onclick="quizEngine.submitQuiz()">
            <i class="fas fa-check"></i> Submit Quiz
          </button>
          
          ${this.currentQuestion < this.currentQuiz.questions.length - 1 
            ? `<button class="btn-primary" onclick="quizEngine.nextQuestion()">
                Next <i class="fas fa-arrow-right"></i>
              </button>`
            : `<button class="btn-success" onclick="quizEngine.submitQuiz()">
                Finish <i class="fas fa-flag-checkered"></i>
              </button>`
          }
        </div>
      </div>
    `;
  }

  // Render current question
  renderQuestion() {
    const question = this.currentQuiz.questions[this.currentQuestion];
    
    return `
      <div class="question-card">
        <div class="question-header">
          <span class="question-number">Question ${this.currentQuestion + 1}</span>
          <span class="difficulty-badge ${question.difficulty}">${question.difficulty}</span>
        </div>
        
        <div class="question-text">
          ${question.question}
        </div>
        
        ${question.image ? `<img src="${question.image}" alt="Question image" class="question-image">` : ''}
        
        <div class="options-container">
          ${question.options.map((option, idx) => `
            <div class="option ${this.answers[this.currentQuestion] === idx ? 'selected' : ''}" 
                 onclick="quizEngine.selectOption(${idx})">
              <div class="option-radio">
                <div class="radio-circle ${this.answers[this.currentQuestion] === idx ? 'checked' : ''}"></div>
              </div>
              <div class="option-text">
                <span class="option-label">${String.fromCharCode(65 + idx)}.</span>
                ${option}
              </div>
            </div>
          `).join('')}
        </div>
        
        ${question.hint ? `
          <div class="question-hint">
            <button class="btn-hint" onclick="this.nextElementSibling.classList.toggle('show')">
              <i class="fas fa-lightbulb"></i> Show Hint
            </button>
            <div class="hint-content">
              ${question.hint}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Select an option
  selectOption(optionIndex) {
    this.answers[this.currentQuestion] = optionIndex;
    this.renderQuiz();
  }

  // Navigation
  nextQuestion() {
    if (this.currentQuestion < this.currentQuiz.questions.length - 1) {
      this.currentQuestion++;
      this.renderQuiz();
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.renderQuiz();
    }
  }

  goToQuestion(index) {
    this.currentQuestion = index;
    this.renderQuiz();
  }

  // Timer
  startTimer() {
    this.timer = setInterval(() => {
      this.timeLeft--;
      
      const timerElement = document.getElementById('quiz-timer');
      if (timerElement) {
        timerElement.textContent = this.formatTime(this.timeLeft);
        
        // Warning when 5 minutes left
        if (this.timeLeft === 300) {
          this.showNotification('⏰ 5 minutes remaining!', 'warning');
        }
        
        // Warning when 1 minute left
        if (this.timeLeft === 60) {
          this.showNotification('⚠️ 1 minute remaining!', 'danger');
        }
      }
      
      if (this.timeLeft <= 0) {
        this.submitQuiz(true); // Auto-submit when time's up
      }
    }, 1000);
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Submit quiz
  submitQuiz(autoSubmit = false) {
    clearInterval(this.timer);
    
    // Calculate score
    this.score = 0;
    const results = this.currentQuiz.questions.map((question, idx) => {
      const isCorrect = this.answers[idx] === question.correctAnswer;
      if (isCorrect) this.score++;
      
      return {
        question: question.question,
        userAnswer: this.answers[idx],
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation
      };
    });
    
    const timeTaken = Math.floor((Date.now() - this.quizStartTime) / 1000);
    const percentage = Math.round((this.score / this.currentQuiz.questions.length) * 100);
    
    // Save to history
    this.saveQuizResult({
      quizTitle: this.currentQuiz.title,
      score: this.score,
      total: this.currentQuiz.questions.length,
      percentage,
      timeTaken,
      date: new Date().toISOString(),
      results
    });
    
    // Show results
    this.showResults(results, percentage, timeTaken, autoSubmit);
    
    // Award XP
    const xpEarned = this.score * 10;
    if (typeof addXP === 'function') {
      addXP(xpEarned);
    }
  }

  // Show results
  showResults(results, percentage, timeTaken, autoSubmit) {
    const container = document.getElementById('main-content');
    
    const grade = percentage >= 90 ? 'A+' : 
                  percentage >= 80 ? 'A' :
                  percentage >= 70 ? 'B' :
                  percentage >= 60 ? 'C' :
                  percentage >= 50 ? 'D' : 'F';
    
    const emoji = percentage >= 90 ? '🏆' :
                  percentage >= 70 ? '🎉' :
                  percentage >= 50 ? '👍' : '📚';
    
    container.innerHTML = `
      <div class="quiz-results">
        <div class="results-header">
          <div class="results-emoji">${emoji}</div>
          <h1>${autoSubmit ? 'Time\'s Up!' : 'Quiz Completed!'}</h1>
          <p class="results-subtitle">${this.currentQuiz.title}</p>
        </div>

        <div class="results-stats">
          <div class="result-stat">
            <div class="stat-value">${this.score}/${this.currentQuiz.questions.length}</div>
            <div class="stat-label">Score</div>
          </div>
          <div class="result-stat">
            <div class="stat-value">${percentage}%</div>
            <div class="stat-label">Percentage</div>
          </div>
          <div class="result-stat">
            <div class="stat-value">${grade}</div>
            <div class="stat-label">Grade</div>
          </div>
          <div class="result-stat">
            <div class="stat-value">${this.formatTime(timeTaken)}</div>
            <div class="stat-label">Time Taken</div>
          </div>
        </div>

        <div class="results-message">
          ${percentage >= 90 ? '🌟 Outstanding! You\'re a genius!' :
            percentage >= 70 ? '✨ Great job! Keep it up!' :
            percentage >= 50 ? '💪 Good effort! Practice more!' :
            '📖 Don\'t give up! Review and try again!'}
        </div>

        <div class="results-breakdown">
          <h2>Answer Breakdown</h2>
          ${results.map((result, idx) => `
            <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
              <div class="result-header">
                <span class="result-number">Q${idx + 1}</span>
                <span class="result-status">
                  ${result.isCorrect 
                    ? '<i class="fas fa-check-circle"></i> Correct' 
                    : '<i class="fas fa-times-circle"></i> Incorrect'}
                </span>
              </div>
              <div class="result-question">${result.question}</div>
              <div class="result-answers">
                <div class="answer-row">
                  <strong>Your Answer:</strong> 
                  ${result.userAnswer !== null 
                    ? `${String.fromCharCode(65 + result.userAnswer)}. ${this.currentQuiz.questions[idx].options[result.userAnswer]}`
                    : 'Not answered'}
                </div>
                ${!result.isCorrect ? `
                  <div class="answer-row correct-answer">
                    <strong>Correct Answer:</strong> 
                    ${String.fromCharCode(65 + result.correctAnswer)}. ${this.currentQuiz.questions[idx].options[result.correctAnswer]}
                  </div>
                ` : ''}
              </div>
              ${result.explanation ? `
                <div class="result-explanation">
                  <strong>Explanation:</strong> ${result.explanation}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <div class="results-actions">
          <button class="btn-primary" onclick="quizEngine.retakeQuiz()">
            <i class="fas fa-redo"></i> Retake Quiz
          </button>
          <button class="btn-secondary" onclick="showSection('practice')">
            <i class="fas fa-arrow-left"></i> Back to Practice
          </button>
          <button class="btn-success" onclick="quizEngine.shareResults()">
            <i class="fas fa-share"></i> Share Results
          </button>
        </div>
      </div>
    `;
  }

  // Retake quiz
  retakeQuiz() {
    this.startQuiz(this.currentQuiz);
  }

  // Save quiz result
  saveQuizResult(result) {
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.unshift(result);
    
    // Keep only last 50 results
    if (history.length > 50) {
      history = history.slice(0, 50);
    }
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
  }

  // Share results
  shareResults() {
    const text = `I scored ${this.score}/${this.currentQuiz.questions.length} (${Math.round((this.score / this.currentQuiz.questions.length) * 100)}%) on "${this.currentQuiz.title}"! 🎉`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Quiz Results',
        text: text
      });
    } else {
      navigator.clipboard.writeText(text);
      this.showNotification('✅ Results copied to clipboard!', 'success');
    }
  }

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Create global instance
const quizEngine = new QuizEngine();

// Make it globally accessible
window.quizEngine = quizEngine;

console.log('✅ Quiz engine loaded');
