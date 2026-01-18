// ==================== PCM × TECH GAME UI ====================

// Render game main page
function renderPCMTechGame() {
  loadGameProgress();
  
  const class11Progress = (gameProgress.completedLevels.filter(id => id.startsWith('11-')).length / PCM_TECH_GAME.class11.totalLevels) * 100;
  const class12Progress = (gameProgress.completedLevels.filter(id => id.startsWith('12-')).length / PCM_TECH_GAME.class12.totalLevels) * 100;
  
  return `
    <div class="game-page">
      <div class="game-header">
        <h1><i class="fas fa-gamepad"></i> PCM × Tech - Knowledge Adventure</h1>
        <p>Learn how Physics, Chemistry & Maths power real-world technology!</p>
        <div class="game-stats">
          <span class="game-stat"><i class="fas fa-star"></i> ${gameProgress.totalXP} Game XP</span>
          <span class="game-stat"><i class="fas fa-trophy"></i> ${gameProgress.completedLevels.length} Levels Completed</span>
        </div>
      </div>

      <!-- Class 11 Section -->
      <div class="game-section">
        <div class="section-header">
          <h2><i class="fas fa-rocket"></i> ${PCM_TECH_GAME.class11.name}</h2>
          <p>${PCM_TECH_GAME.class11.description}</p>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${class11Progress}%"></div>
          </div>
          <p class="progress-text">${Math.round(class11Progress)}% Complete (${gameProgress.completedLevels.filter(id => id.startsWith('11-')).length}/${PCM_TECH_GAME.class11.totalLevels})</p>
        </div>

        <div class="levels-grid">
          ${PCM_TECH_GAME.class11.levels.map(level => renderLevelCard(level)).join('')}
        </div>
      </div>

      <!-- Class 11 Master -->
      ${gameProgress.unlockedMasters.includes('class11') ? `
        <div class="master-level-card">
          <div class="master-icon">👑</div>
          <h3>${PCM_TECH_GAME.masterLevels.class11Master.name}</h3>
          <p>${PCM_TECH_GAME.masterLevels.class11Master.description}</p>
          <p class="master-challenge"><strong>Challenge:</strong> ${PCM_TECH_GAME.masterLevels.class11Master.challenge}</p>
          <button class="btn-master" onclick="startMasterLevel('class11')">
            <i class="fas fa-crown"></i> Start Master Challenge (+${PCM_TECH_GAME.masterLevels.class11Master.xpReward} XP)
          </button>
        </div>
      ` : `
        <div class="locked-master">
          <i class="fas fa-lock"></i>
          <p>Complete all Class 11 levels to unlock Master Challenge!</p>
        </div>
      `}

      <!-- Class 12 Section -->
      <div class="game-section">
        <div class="section-header">
          <h2><i class="fas fa-satellite"></i> ${PCM_TECH_GAME.class12.name}</h2>
          <p>${PCM_TECH_GAME.class12.description}</p>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${class12Progress}%"></div>
          </div>
          <p class="progress-text">${Math.round(class12Progress)}% Complete (${gameProgress.completedLevels.filter(id => id.startsWith('12-')).length}/${PCM_TECH_GAME.class12.totalLevels})</p>
        </div>

        <div class="levels-grid">
          ${PCM_TECH_GAME.class12.levels.map(level => renderLevelCard(level)).join('')}
        </div>
      </div>

      <!-- Class 12 Master -->
      ${gameProgress.unlockedMasters.includes('class12') ? `
        <div class="master-level-card">
          <div class="master-icon">👑</div>
          <h3>${PCM_TECH_GAME.masterLevels.class12Master.name}</h3>
          <p>${PCM_TECH_GAME.masterLevels.class12Master.description}</p>
          <p class="master-challenge"><strong>Challenge:</strong> ${PCM_TECH_GAME.masterLevels.class12Master.challenge}</p>
          <button class="btn-master" onclick="startMasterLevel('class12')">
            <i class="fas fa-crown"></i> Start Master Challenge (+${PCM_TECH_GAME.masterLevels.class12Master.xpReward} XP)
          </button>
        </div>
      ` : `
        <div class="locked-master">
          <i class="fas fa-lock"></i>
          <p>Complete all Class 12 levels to unlock Master Challenge!</p>
        </div>
      `}

      <!-- Grand Finale -->
      ${gameProgress.unlockedGrand.length > 0 ? `
        <div class="grand-finale-section">
          <h2><i class="fas fa-star"></i> GRAND FINALE - Ultimate Challenges</h2>
          <div class="grand-levels">
            ${renderGrandLevel('level1')}
            ${gameProgress.unlockedGrand.includes('level2') ? renderGrandLevel('level2') : '<div class="locked-grand"><i class="fas fa-lock"></i><p>Complete Grand Level 1</p></div>'}
            ${gameProgress.unlockedGrand.includes('level3') ? renderGrandLevel('level3') : '<div class="locked-grand"><i class="fas fa-lock"></i><p>Complete Grand Level 2</p></div>'}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// Render individual level card
function renderLevelCard(level) {
  const isCompleted = gameProgress.completedLevels.includes(level.id);
  const isUnlocked = isLevelUnlocked(level.id);
  
  return `
    <div class="level-card ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}" 
         onclick="${isUnlocked ? `openLevel('${level.id}')` : ''}">
      <div class="level-header">
        <span class="level-badge ${level.difficulty}">${level.difficulty}</span>
        ${isCompleted ? '<i class="fas fa-check-circle completed-icon"></i>' : ''}
        ${!isUnlocked ? '<i class="fas fa-lock lock-icon"></i>' : ''}
      </div>
      <h3>${level.title}</h3>
      <p class="level-chapter">${level.chapter}</p>
      <p class="level-description">${level.description}</p>
      <div class="level-tech">
        <strong>Tech:</strong> ${level.techApplications[0]}
      </div>
      <div class="level-footer">
        <span class="level-xp"><i class="fas fa-star"></i> +${level.xpReward} XP</span>
        ${isUnlocked && !isCompleted ? '<button class="btn-small">Start Level</button>' : ''}
      </div>
    </div>
  `;
}

// Render grand level
function renderGrandLevel(levelKey) {
  const level = PCM_TECH_GAME.grandFinale[levelKey];
  const isCompleted = gameProgress.unlockedGrand.includes(levelKey + '-completed');
  
  return `
    <div class="grand-level-card ${isCompleted ? 'completed' : ''}">
      <div class="grand-icon">🌟</div>
      <h3>${level.name}</h3>
      <p>${level.description}</p>
      <p class="grand-challenge"><strong>Challenge:</strong> ${level.challenge}</p>
      <button class="btn-grand" onclick="startGrandLevel('${levelKey}')">
        <i class="fas fa-rocket"></i> Start Challenge (+${level.xpReward} XP)
      </button>
    </div>
  `;
}

// Open level details
function openLevel(levelId) {
  const level = findLevel(levelId);
  if (!level) return;
  
  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="level-detail-page">
      <button class="btn-back" onclick="showSection('game')">
        <i class="fas fa-arrow-left"></i> Back to Game
      </button>

      <div class="level-detail-header">
        <h1>${level.title}</h1>
        <span class="difficulty-badge ${level.difficulty}">${level.difficulty}</span>
      </div>

      <div class="level-story">
        <h2><i class="fas fa-book-open"></i> The Story</h2>
        <p>${level.description}</p>
      </div>

      <div class="level-concepts">
        <h2><i class="fas fa-lightbulb"></i> Concepts You'll Learn</h2>
        <div class="concepts-grid">
          ${level.concepts.map(concept => `
            <div class="concept-tag">${concept}</div>
          `).join('')}
        </div>
      </div>

      <div class="level-tech-apps">
        <h2><i class="fas fa-rocket"></i> Real-World Tech Applications</h2>
        <div class="tech-apps-grid">
          ${level.techApplications.map(app => `
            <div class="tech-app-card">
              <i class="fas fa-check-circle"></i>
              <span>${app}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="level-example">
        <h2><i class="fas fa-star"></i> Real-World Example</h2>
        <div class="example-box">
          ${level.realWorldExample}
        </div>
      </div>

      <div class="level-quiz">
        <h2><i class="fas fa-question-circle"></i> Knowledge Quiz</h2>
        <p>Test your understanding to complete this level!</p>
        <button class="btn-primary btn-large" onclick="startQuiz('${levelId}')">
          <i class="fas fa-play"></i> Start Quiz
        </button>
      </div>
    </div>
  `;
}

// Start quiz
function startQuiz(levelId) {
  const level = findLevel(levelId);
  if (!level) return;
  
  let currentQuestion = 0;
  let score = 0;
  let answers = [];
  
  function renderQuiz() {
    const content = document.getElementById('main-content');
    const question = level.quiz[currentQuestion];
    
    content.innerHTML = `
      <div class="quiz-page">
        <div class="quiz-header">
          <h2>${level.title} - Quiz</h2>
          <div class="quiz-progress">
            Question ${currentQuestion + 1} of ${level.quiz.length}
          </div>
        </div>

        <div class="quiz-question">
          <h3>${question.q}</h3>
          <div class="quiz-options">
            ${question.options.map((option, idx) => `
              <button class="quiz-option" onclick="selectAnswer(${idx})">
                ${option}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  window.selectAnswer = function(answerIdx) {
    const question = level.quiz[currentQuestion];
    const isCorrect = answerIdx === question.correct;
    
    if (isCorrect) {
      score++;
      showNotification('✅ Correct! ' + question.explanation, 'success');
    } else {
      showNotification('❌ Wrong! ' + question.explanation, 'error');
    }
    
    answers.push({ question: currentQuestion, answer: answerIdx, correct: isCorrect });
    
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < level.quiz.length) {
        renderQuiz();
      } else {
        showQuizResults();
      }
    }, 2000);
  };
  
  function showQuizResults() {
    const percentage = (score / level.quiz.length) * 100;
    const passed = percentage >= 60;
    
    const content = document.getElementById('main-content');
    content.innerHTML = `
      <div class="quiz-results">
        <div class="results-icon ${passed ? 'success' : 'fail'}">
          ${passed ? '🎉' : '😔'}
        </div>
        <h2>${passed ? 'Level Complete!' : 'Try Again!'}</h2>
        <div class="results-score">
          <div class="score-circle">
            <span class="score-number">${Math.round(percentage)}%</span>
          </div>
          <p>${score} out of ${level.quiz.length} correct</p>
        </div>
        
        ${passed ? `
          <div class="results-rewards">
            <h3>Rewards Earned:</h3>
            <div class="reward-item">
              <i class="fas fa-star"></i>
              <span>+${Math.floor(level.xpReward * (percentage / 100))} XP</span>
            </div>
          </div>
          <button class="btn-success btn-large" onclick="finishLevel('${levelId}', ${percentage})">
            <i class="fas fa-check"></i> Claim Rewards
          </button>
        ` : `
          <p>You need 60% to pass. Review the concepts and try again!</p>
          <button class="btn-primary" onclick="openLevel('${levelId}')">
            <i class="fas fa-redo"></i> Review & Retry
          </button>
        `}
        
        <button class="btn-secondary" onclick="showSection('game')">
          <i class="fas fa-arrow-left"></i> Back to Game
        </button>
      </div>
    `;
    
    if (passed) {
      completeLevel(levelId, percentage);
    }
  }
  
  renderQuiz();
}

// Finish level
window.finishLevel = function(levelId, score) {
  showNotification('🎉 Level completed! Keep going!', 'success');
  showSection('game');
};

// Start master level
window.startMasterLevel = function(classLevel) {
  showNotification('🏆 Master challenges coming soon!', 'info');
};

// Start grand level
window.startGrandLevel = function(levelKey) {
  showNotification('🌟 Grand challenges coming soon!', 'info');
};

console.log('✅ PCM × Tech Game UI loaded!');
