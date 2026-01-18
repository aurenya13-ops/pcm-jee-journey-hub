// ==================== THEME MANAGER - AUTO-ROTATE EVERY 48 HOURS ====================

const THEMES = [
  'ocean-blue',
  'sunset-orange',
  'forest-green',
  'purple-galaxy',
  'midnight-dark',
  'cherry-blossom',
  'arctic-ice',
  'autumn-gold',
  'neon-cyberpunk',
  'minimal-white',
  'retro-synthwave',
  'desert-sand',
  'northern-lights',
  'tropical-paradise',
  'monochrome'
];

const THEME_NAMES = {
  'ocean-blue': '🌊 Ocean Blue',
  'sunset-orange': '🌅 Sunset Orange',
  'forest-green': '🌲 Forest Green',
  'purple-galaxy': '🌌 Purple Galaxy',
  'midnight-dark': '🌃 Midnight Dark',
  'cherry-blossom': '🌸 Cherry Blossom',
  'arctic-ice': '❄️ Arctic Ice',
  'autumn-gold': '🍂 Autumn Gold',
  'neon-cyberpunk': '🎮 Neon Cyberpunk',
  'minimal-white': '⚪ Minimal White',
  'retro-synthwave': '🎵 Retro Synthwave',
  'desert-sand': '🏜️ Desert Sand',
  'northern-lights': '🌈 Northern Lights',
  'tropical-paradise': '🏝️ Tropical Paradise',
  'monochrome': '⚫ Monochrome'
};

const HOURS_48 = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

class ThemeManager {
  constructor() {
    this.currentTheme = null;
    this.lastChangeTime = null;
    this.init();
  }

  init() {
    // Load saved theme data from localStorage
    const savedTheme = localStorage.getItem('currentTheme');
    const savedTime = localStorage.getItem('themeChangeTime');

    if (savedTheme && savedTime) {
      this.currentTheme = savedTheme;
      this.lastChangeTime = parseInt(savedTime);
      
      // Check if 48 hours have passed
      if (this.shouldChangeTheme()) {
        this.rotateToNextTheme();
      } else {
        this.applyTheme(this.currentTheme);
      }
    } else {
      // First time - set random theme
      this.setRandomTheme();
    }

    // Check every hour if theme needs to change
    setInterval(() => {
      if (this.shouldChangeTheme()) {
        this.rotateToNextTheme();
      }
    }, 60 * 60 * 1000); // Check every hour

    console.log(`🎨 Theme Manager Initialized`);
    console.log(`Current Theme: ${THEME_NAMES[this.currentTheme]}`);
    console.log(`Next Change: ${this.getTimeUntilNextChange()}`);
  }

  shouldChangeTheme() {
    const now = Date.now();
    const timeSinceLastChange = now - this.lastChangeTime;
    return timeSinceLastChange >= HOURS_48;
  }

  getTimeUntilNextChange() {
    const now = Date.now();
    const timeSinceLastChange = now - this.lastChangeTime;
    const timeRemaining = HOURS_48 - timeSinceLastChange;
    
    const hours = Math.floor(timeRemaining / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    
    return `${hours}h ${minutes}m`;
  }

  rotateToNextTheme() {
    const currentIndex = THEMES.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];
    
    this.setTheme(nextTheme);
    
    console.log(`🔄 Theme Auto-Rotated: ${THEME_NAMES[nextTheme]}`);
    this.showThemeChangeNotification(nextTheme);
  }

  setRandomTheme() {
    const randomIndex = Math.floor(Math.random() * THEMES.length);
    const randomTheme = THEMES[randomIndex];
    this.setTheme(randomTheme);
  }

  setTheme(themeName) {
    if (!THEMES.includes(themeName)) {
      console.error(`Theme "${themeName}" not found!`);
      return;
    }

    this.currentTheme = themeName;
    this.lastChangeTime = Date.now();
    
    // Save to localStorage
    localStorage.setItem('currentTheme', themeName);
    localStorage.setItem('themeChangeTime', this.lastChangeTime.toString());
    
    // Apply theme
    this.applyTheme(themeName);
  }

  applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    
    // Update theme selector if it exists
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
      if (btn.dataset.theme === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  showThemeChangeNotification(themeName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `
      <div class="theme-notification-content">
        <i class="fas fa-palette"></i>
        <div>
          <strong>Theme Changed!</strong>
          <p>Now using: ${THEME_NAMES[themeName]}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide after 5 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  }

  // Manual theme change (for theme selector)
  changeTheme(themeName) {
    this.setTheme(themeName);
    console.log(`🎨 Theme Manually Changed: ${THEME_NAMES[themeName]}`);
  }

  // Get all themes for theme selector
  getAllThemes() {
    return THEMES.map(theme => ({
      id: theme,
      name: THEME_NAMES[theme],
      active: theme === this.currentTheme
    }));
  }

  // Render theme selector
  renderThemeSelector() {
    const themes = this.getAllThemes();
    
    return `
      <div class="theme-selector">
        <h3><i class="fas fa-palette"></i> Choose Theme</h3>
        <p class="theme-info">
          Current: ${THEME_NAMES[this.currentTheme]} 
          <span class="theme-timer">
            <i class="fas fa-clock"></i> Next auto-change in ${this.getTimeUntilNextChange()}
          </span>
        </p>
        <div class="theme-grid">
          ${themes.map(theme => `
            <button 
              class="theme-btn ${theme.active ? 'active' : ''}" 
              data-theme="${theme.id}"
              onclick="themeManager.changeTheme('${theme.id}')"
            >
              ${theme.name}
            </button>
          `).join('')}
        </div>
        <p class="theme-note">
          <i class="fas fa-info-circle"></i> 
          Themes auto-rotate every 48 hours for a fresh experience!
        </p>
      </div>
    `;
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Add CSS for theme notification
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .theme-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-card);
    border: 2px solid var(--primary);
    border-radius: 12px;
    padding: 20px;
    box-shadow: var(--card-shadow);
    z-index: 10000;
    opacity: 0;
    transform: translateX(400px);
    transition: all 0.5s ease;
  }

  .theme-notification.show {
    opacity: 1;
    transform: translateX(0);
  }

  .theme-notification-content {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .theme-notification-content i {
    font-size: 32px;
    color: var(--primary);
  }

  .theme-notification-content strong {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    color: var(--text-primary);
  }

  .theme-notification-content p {
    margin: 0;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .theme-selector {
    padding: 30px;
    background: var(--bg-card);
    border-radius: 15px;
    border: 2px solid var(--border);
  }

  .theme-selector h3 {
    font-size: 24px;
    margin-bottom: 15px;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .theme-info {
    margin-bottom: 20px;
    color: var(--text-secondary);
    font-size: 14px;
  }

  .theme-timer {
    margin-left: 15px;
    color: var(--accent);
  }

  .theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .theme-btn {
    padding: 15px 20px;
    background: var(--bg-dark);
    border: 2px solid var(--border);
    border-radius: 10px;
    color: var(--text-primary);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
  }

  .theme-btn:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: var(--card-shadow);
  }

  .theme-btn.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
  }

  .theme-note {
    margin: 0;
    padding: 15px;
    background: var(--bg-dark);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .theme-note i {
    color: var(--accent);
  }
`;
document.head.appendChild(notificationStyles);

console.log('✅ Theme Manager Loaded - Auto-rotation every 48 hours!');
