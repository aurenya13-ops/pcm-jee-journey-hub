// ==================== ENHANCED ROUTER ====================
// This file extends the main app.js router to include new pages

// Override the loadPage function to include new routes
const originalLoadPage = window.loadPage || function() {};

window.loadPage = function(page) {
  mainContent.style.opacity = '0';
  setTimeout(() => {
    switch(page) {
      case 'home': 
        if (typeof renderHome === 'function') renderHome(); 
        break;
      case 'dashboard': 
        if (typeof renderDashboard === 'function') renderDashboard(); 
        break;
      case 'music': 
        if (typeof renderMusicLibrary === 'function') {
          renderMusicLibrary();
        } else if (typeof renderMusic === 'function') {
          renderMusic();
        }
        break;
      case 'physics': 
        if (typeof renderPhysics === 'function') renderPhysics(); 
        break;
      case 'chemistry': 
        if (typeof renderChemistry === 'function') renderChemistry(); 
        break;
      case 'maths': 
        if (typeof renderMaths === 'function') renderMaths(); 
        break;
      case 'tech': 
        if (typeof renderTech === 'function') renderTech(); 
        break;
      case 'integration':
        if (typeof renderTechPCMIntegration === 'function') {
          renderTechPCMIntegration();
        } else {
          renderPlaceholder('PCM×Tech Integration');
        }
        break;
      default:
        renderPlaceholder(page);
    }
    mainContent.style.opacity = '1';
  }, 200);
};

function renderPlaceholder(pageName) {
  mainContent.innerHTML = `
    <div style="text-align: center; padding: 100px 20px;">
      <h1 style="font-size: 3rem; margin-bottom: 20px;">🚧 ${pageName}</h1>
      <p style="font-size: 1.5rem; color: #aaa;">Coming soon...</p>
    </div>
  `;
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load home page by default
  if (typeof loadPage === 'function') {
    loadPage('home');
  }
});