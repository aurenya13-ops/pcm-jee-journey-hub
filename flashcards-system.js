// ==================== FLASHCARDS SYSTEM ====================

let flashcardsState = {
  currentDeck: null,
  currentCardIndex: 0,
  isFlipped: false,
  masteredCards: [],
  difficultCards: [],
  sessionStats: {
    total: 0,
    correct: 0,
    incorrect: 0
  }
};

// Generate flashcards from chapter
function generateFlashcards(chapterId) {
  let chapter = null;
  
  // Find chapter from physics content
  if (typeof physicsContent !== 'undefined') {
    chapter = physicsContent.mechanics.chapters.find(ch => ch.id === chapterId);
  }
  
  if (!chapter) {
    showNotification('Chapter not found', 'error');
    return [];
  }
  
  const cards = [];
  
  // Add formula cards
  if (chapter.formulas) {
    chapter.formulas.forEach((formula, idx) => {
      cards.push({
        id: `${chapterId}-formula-${idx}`,
        front: `What is the formula for ${chapter.topics[idx % chapter.topics.length]}?`,
        back: formula,
        type: 'formula'
      });
    });
  }
  
  // Add concept cards from topics
  chapter.topics.forEach((topic, idx) => {
    cards.push({
      id: `${chapterId}-topic-${idx}`,
      front: `Explain: ${topic}`,
      back: `Key concept from ${chapter.name}. Review chapter for detailed explanation.`,
      type: 'concept'
    });
  });
  
  // Add problem cards
  if (chapter.problems) {
    chapter.problems.slice(0, 5).forEach((problem, idx) => {
      cards.push({
        id: `${chapterId}-problem-${idx}`,
        front: problem.q,
        back: `Answer: ${problem.a}\n\nSolution: ${problem.solution || 'See chapter for detailed solution'}`,
        type: 'problem'
      });
    });
  }
  
  // Add pre-made flashcards if available
  if (chapter.flashcards) {
    chapter.flashcards.forEach((card, idx) => {
      cards.push({
        id: `${chapterId}-flashcard-${idx}`,
        front: card.front,
        back: card.back,
        type: 'flashcard'
      });
    });
  }
  
  return cards;
}

// Open flashcards for chapter
function openFlashcards(chapterId) {
  const cards = generateFlashcards(chapterId);
  
  if (cards.length === 0) {
    showNotification('No flashcards available for this chapter', 'error');
    return;
  }
  
  flashcardsState.currentDeck = cards;
  flashcardsState.currentCardIndex = 0;
  flashcardsState.isFlipped = false;
  flashcardsState.sessionStats = { total: cards.length, correct: 0, incorrect: 0 };
  
  renderFlashcardsModal();
}

// Render flashcards modal
function renderFlashcardsModal() {
  const modal = document.createElement('div');
  modal.className = 'flashcards-modal';
  modal.id = 'flashcards-modal';
  
  modal.innerHTML = `
    <div class="flashcards-overlay" onclick="closeFlashcards()"></div>
    <div class="flashcards-container">
      <div class="flashcards-header">
        <h2><i class="fas fa-layer-group"></i> Flashcards</h2>
        <button class="btn-close" onclick="closeFlashcards()">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="flashcards-progress">
        <div class="progress-text">
          Card ${flashcardsState.currentCardIndex + 1} of ${flashcardsState.currentDeck.length}
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${((flashcardsState.currentCardIndex + 1) / flashcardsState.currentDeck.length) * 100}%"></div>
        </div>
      </div>

      <div class="flashcard-display">
        <div class="flashcard ${flashcardsState.isFlipped ? 'flipped' : ''}" onclick="flipCard()">
          <div class="flashcard-front">
            <div class="card-type-badge">${flashcardsState.currentDeck[flashcardsState.currentCardIndex].type}</div>
            <div class="card-content">
              ${flashcardsState.currentDeck[flashcardsState.currentCardIndex].front}
            </div>
            <div class="flip-hint">
              <i class="fas fa-sync-alt"></i> Click to flip
            </div>
          </div>
          <div class="flashcard-back">
            <div class="card-content">
              ${flashcardsState.currentDeck[flashcardsState.currentCardIndex].back}
            </div>
          </div>
        </div>
      </div>

      <div class="flashcards-controls">
        <button class="control-btn" onclick="previousCard()" ${flashcardsState.currentCardIndex === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left"></i> Previous
        </button>
        
        <div class="rating-buttons">
          <button class="rating-btn difficult" onclick="rateCard('difficult')">
            <i class="fas fa-times"></i> Difficult
          </button>
          <button class="rating-btn okay" onclick="rateCard('okay')">
            <i class="fas fa-minus"></i> Okay
          </button>
          <button class="rating-btn easy" onclick="rateCard('easy')">
            <i class="fas fa-check"></i> Easy
          </button>
        </div>

        <button class="control-btn" onclick="nextCard()" ${flashcardsState.currentCardIndex === flashcardsState.currentDeck.length - 1 ? 'disabled' : ''}>
          Next <i class="fas fa-arrow-right"></i>
        </button>
      </div>

      <div class="flashcards-stats">
        <div class="stat-item">
          <span class="stat-label">Mastered</span>
          <span class="stat-value">${flashcardsState.masteredCards.length}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Difficult</span>
          <span class="stat-value">${flashcardsState.difficultCards.length}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Remaining</span>
          <span class="stat-value">${flashcardsState.currentDeck.length - flashcardsState.currentCardIndex - 1}</span>
        </div>
      </div>

      <div class="flashcards-actions">
        <button class="btn-small" onclick="shuffleDeck()">
          <i class="fas fa-random"></i> Shuffle
        </button>
        <button class="btn-small" onclick="restartDeck()">
          <i class="fas fa-redo"></i> Restart
        </button>
        <button class="btn-small" onclick="reviewDifficult()">
          <i class="fas fa-exclamation-triangle"></i> Review Difficult
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('show'), 10);
}

// Flip card
function flipCard() {
  flashcardsState.isFlipped = !flashcardsState.isFlipped;
  const card = document.querySelector('.flashcard');
  if (card) {
    card.classList.toggle('flipped');
  }
}

// Next card
function nextCard() {
  if (flashcardsState.currentCardIndex < flashcardsState.currentDeck.length - 1) {
    flashcardsState.currentCardIndex++;
    flashcardsState.isFlipped = false;
    updateFlashcardDisplay();
  } else {
    showSessionComplete();
  }
}

// Previous card
function previousCard() {
  if (flashcardsState.currentCardIndex > 0) {
    flashcardsState.currentCardIndex--;
    flashcardsState.isFlipped = false;
    updateFlashcardDisplay();
  }
}

// Rate card
function rateCard(rating) {
  const currentCard = flashcardsState.currentDeck[flashcardsState.currentCardIndex];
  
  if (rating === 'easy') {
    if (!flashcardsState.masteredCards.includes(currentCard.id)) {
      flashcardsState.masteredCards.push(currentCard.id);
    }
    flashcardsState.sessionStats.correct++;
    addXP(10);
  } else if (rating === 'difficult') {
    if (!flashcardsState.difficultCards.includes(currentCard.id)) {
      flashcardsState.difficultCards.push(currentCard.id);
    }
    flashcardsState.sessionStats.incorrect++;
  } else {
    // okay - no special action
  }
  
  nextCard();
}

// Update flashcard display
function updateFlashcardDisplay() {
  const modal = document.getElementById('flashcards-modal');
  if (modal) {
    modal.remove();
    renderFlashcardsModal();
  }
}

// Close flashcards
function closeFlashcards() {
  const modal = document.getElementById('flashcards-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.remove(), 300);
  }
}

// Shuffle deck
function shuffleDeck() {
  flashcardsState.currentDeck = flashcardsState.currentDeck.sort(() => Math.random() - 0.5);
  flashcardsState.currentCardIndex = 0;
  flashcardsState.isFlipped = false;
  updateFlashcardDisplay();
  showNotification('🔀 Deck shuffled!', 'success');
}

// Restart deck
function restartDeck() {
  flashcardsState.currentCardIndex = 0;
  flashcardsState.isFlipped = false;
  flashcardsState.masteredCards = [];
  flashcardsState.difficultCards = [];
  updateFlashcardDisplay();
  showNotification('🔄 Deck restarted!', 'info');
}

// Review difficult cards
function reviewDifficult() {
  if (flashcardsState.difficultCards.length === 0) {
    showNotification('No difficult cards to review!', 'info');
    return;
  }
  
  flashcardsState.currentDeck = flashcardsState.currentDeck.filter(card => 
    flashcardsState.difficultCards.includes(card.id)
  );
  flashcardsState.currentCardIndex = 0;
  flashcardsState.isFlipped = false;
  updateFlashcardDisplay();
  showNotification(`Reviewing ${flashcardsState.difficultCards.length} difficult cards`, 'info');
}

// Show session complete
function showSessionComplete() {
  const accuracy = Math.round((flashcardsState.sessionStats.correct / flashcardsState.sessionStats.total) * 100);
  
  showNotification(`🎉 Session complete! Accuracy: ${accuracy}%`, 'success');
  addXP(50);
  
  setTimeout(() => {
    closeFlashcards();
  }, 2000);
}

// Render flashcards page
function renderFlashcards() {
  return `
    <div class="flashcards-page">
      <div class="page-header">
        <h1><i class="fas fa-layer-group"></i> Flashcards</h1>
        <p>Master concepts with spaced repetition</p>
      </div>

      <div class="flashcards-subjects">
        <h2>📚 Select Subject</h2>
        <div class="subjects-grid">
          <div class="subject-card" onclick="showSection('physics')">
            <i class="fas fa-atom"></i>
            <h3>Physics</h3>
            <p>52 chapters available</p>
          </div>
          <div class="subject-card" onclick="showSection('chemistry')">
            <i class="fas fa-flask"></i>
            <h3>Chemistry</h3>
            <p>47 chapters available</p>
          </div>
          <div class="subject-card" onclick="showSection('maths')">
            <i class="fas fa-square-root-alt"></i>
            <h3>Mathematics</h3>
            <p>62 chapters available</p>
          </div>
        </div>
      </div>

      <div class="flashcards-stats-overview">
        <h2>📊 Your Progress</h2>
        <div class="stats-grid">
          <div class="stat-box">
            <div class="stat-number">${flashcardsState.masteredCards.length}</div>
            <div class="stat-label">Cards Mastered</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${flashcardsState.difficultCards.length}</div>
            <div class="stat-label">Need Review</div>
          </div>
        </div>
      </div>

      <div class="flashcards-tips">
        <h2>💡 Study Tips</h2>
        <ul>
          <li>🎯 Study in short sessions (15-20 minutes)</li>
          <li>🔄 Review difficult cards multiple times</li>
          <li>📅 Use spaced repetition for better retention</li>
          <li>✍️ Try to recall before flipping the card</li>
          <li>🎨 Visualize concepts for better memory</li>
        </ul>
      </div>
    </div>
  `;
}

console.log('✅ Flashcards system loaded');
