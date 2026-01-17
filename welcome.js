// ==================== WELCOME SCREEN ====================

function showWelcomeScreen() {
  const hasVisited = localStorage.getItem('has_visited');
  
  if (!hasVisited) {
    const welcomeHTML = `
      <div class="welcome-overlay" id="welcome-overlay">
        <div class="welcome-container">
          <div class="welcome-logo">
            <img src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/dd268986-2ece-4de2-81bb-7cb0174757e8/2026-01-17T03-32-51-180Z-109ae6b5-nano-banana-pro_1768620770948.jpg" alt="Logo">
          </div>
          
          <h1 class="welcome-title">Welcome to PCM × Tech Ocean! 🌊</h1>
          
          <p class="welcome-subtitle">Your Complete Learning Ecosystem</p>
          
          <div class="welcome-features">
            <div class="welcome-feature">
              <i class="fas fa-book"></i>
              <h3>161 Chapters</h3>
              <p>Complete JEE syllabus</p>
            </div>
            
            <div class="welcome-feature">
              <i class="fas fa-question-circle"></i>
              <h3>3000+ Problems</h3>
              <p>With detailed solutions</p>
            </div>
            
            <div class="welcome-feature">
              <i class="fas fa-clipboard-check"></i>
              <h3>Mock Tests</h3>
              <p>Full JEE simulation</p>
            </div>
            
            <div class="welcome-feature">
              <i class="fas fa-layer-group"></i>
              <h3>Flashcards</h3>
              <p>Quick revision</p>
            </div>
            
            <div class="welcome-feature">
              <i class="fas fa-music"></i>
              <h3>Study Music</h3>
              <p>Focus playlists</p>
            </div>
            
            <div class="welcome-feature">
              <i class="fas fa-trophy"></i>
              <h3>Gamification</h3>
              <p>XP, levels, streaks</p>
            </div>
          </div>
          
          <div class="welcome-tips">
            <h3>💡 Quick Tips:</h3>
            <ul>
              <li>✅ Complete chapters to earn XP and level up</li>
              <li>✅ Use flashcards for quick revision before exams</li>
              <li>✅ Take mock tests to simulate real JEE experience</li>
              <li>✅ Study with focus music using the floating player</li>
              <li>✅ Use Pomodoro timer for productive study sessions</li>
              <li>✅ Make notes to personalize your learning</li>
            </ul>
          </div>
          
          <button class="btn-primary btn-large" onclick="closeWelcome()">
            <i class="fas fa-rocket"></i> Let's Start Learning!
          </button>
          
          <p class="welcome-footer">Made with ❤️ for learners everywhere</p>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', welcomeHTML);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .welcome-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(10, 14, 39, 0.98);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.5s ease;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .welcome-container {
        max-width: 900px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        background: var(--bg-card);
        border: 2px solid var(--border);
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        animation: slideUp 0.5s ease;
      }
      
      @keyframes slideUp {
        from {
          transform: translateY(50px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      .welcome-logo img {
        width: 120px;
        height: 120px;
        border-radius: 20px;
        border: 3px solid var(--primary);
        margin-bottom: 20px;
        animation: bounce 1s ease infinite;
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      .welcome-title {
        font-size: 42px;
        margin-bottom: 10px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .welcome-subtitle {
        font-size: 20px;
        color: var(--text-secondary);
        margin-bottom: 40px;
      }
      
      .welcome-features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
        margin-bottom: 40px;
      }
      
      .welcome-feature {
        background: var(--bg-dark);
        border: 2px solid var(--border);
        border-radius: 15px;
        padding: 20px;
        transition: all 0.3s;
      }
      
      .welcome-feature:hover {
        border-color: var(--primary);
        transform: translateY(-5px);
      }
      
      .welcome-feature i {
        font-size: 36px;
        color: var(--primary);
        margin-bottom: 10px;
      }
      
      .welcome-feature h3 {
        font-size: 18px;
        margin-bottom: 5px;
      }
      
      .welcome-feature p {
        font-size: 14px;
        color: var(--text-secondary);
      }
      
      .welcome-tips {
        background: var(--bg-dark);
        border: 2px solid var(--border);
        border-radius: 15px;
        padding: 25px;
        margin-bottom: 30px;
        text-align: left;
      }
      
      .welcome-tips h3 {
        font-size: 20px;
        margin-bottom: 15px;
        text-align: center;
      }
      
      .welcome-tips ul {
        list-style: none;
        padding: 0;
      }
      
      .welcome-tips li {
        padding: 10px 0;
        font-size: 16px;
        color: var(--text-secondary);
        border-bottom: 1px solid var(--border);
      }
      
      .welcome-tips li:last-child {
        border-bottom: none;
      }
      
      .welcome-footer {
        margin-top: 20px;
        font-size: 14px;
        color: var(--text-secondary);
      }
      
      @media (max-width: 768px) {
        .welcome-container {
          padding: 30px 20px;
        }
        
        .welcome-title {
          font-size: 32px;
        }
        
        .welcome-features {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

function closeWelcome() {
  const overlay = document.getElementById('welcome-overlay');
  overlay.style.animation = 'fadeOut 0.3s ease';
  
  setTimeout(() => {
    overlay.remove();
    localStorage.setItem('has_visited', 'true');
    showNotification('🎉 Welcome to PCM × Tech Ocean! Start your learning journey!', 'success');
  }, 300);
}

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(fadeOutStyle);

// Show welcome on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(showWelcomeScreen, 500);
});

console.log('✅ Welcome screen loaded!');
