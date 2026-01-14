// ==================== MUSIC LIBRARY INTEGRATION ====================

function renderMusicLibrary() {
  const categories = Object.keys(musicLibrary.categories);
  
  let html = `
    <div class="music-page">
      <h1>🎵 Music Library - 100+ Curated Tracks</h1>
      <p class="subtitle">From Phonk to Bollywood, Lofi to Motivation - Everything you need!</p>
      
      <div class="music-filters">
        <button class="filter-btn active" data-category="all">All (100+)</button>
        ${categories.map(cat => {
          const data = musicLibrary.categories[cat];
          return `<button class="filter-btn" data-category="${cat}">
            ${data.icon} ${data.name} (${data.tracks.length})
          </button>`;
        }).join('')}
      </div>
      
      <div class="music-player-container">
        <div id="current-player" class="current-player">
          <div class="vinyl-animation">
            <div class="vinyl"></div>
          </div>
          <div class="player-info">
            <h2 id="now-playing-title">Select a track to play</h2>
            <p id="now-playing-artist"></p>
          </div>
          <div class="player-controls">
            <button onclick="previousTrack()">⏮️ Previous</button>
            <button onclick="nextTrack()">⏭️ Next</button>
          </div>
        </div>
        
        <div id="youtube-player"></div>
      </div>
      
      <div id="music-grid" class="music-grid"></div>
    </div>
  `;
  
  mainContent.innerHTML = html;
  renderMusicTracks('all');
  setupMusicFilters();
}

let currentTrackIndex = 0;
let currentCategory = 'all';
let allTracks = [];

function renderMusicTracks(category) {
  currentCategory = category;
  allTracks = [];
  
  if (category === 'all') {
    Object.values(musicLibrary.categories).forEach(cat => {
      allTracks.push(...cat.tracks);
    });
  } else {
    allTracks = musicLibrary.categories[category].tracks;
  }
  
  const grid = document.getElementById('music-grid');
  grid.innerHTML = allTracks.map((track, index) => `
    <div class="music-card" onclick="playTrack(${index})">
      <div class="music-thumbnail">
        <img src="https://img.youtube.com/vi/${track.url.split('v=')[1]}/mqdefault.jpg" 
             alt="${track.title}">
        <div class="play-overlay">▶️</div>
      </div>
      <div class="music-info">
        <h3>${track.title}</h3>
        <p>${track.artist}</p>
        <span class="duration">${track.duration}</span>
      </div>
    </div>
  `).join('');
}

function setupMusicFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMusicTracks(btn.dataset.category);
    });
  });
}

let player;
function playTrack(index) {
  currentTrackIndex = index;
  const track = allTracks[index];
  
  document.getElementById('now-playing-title').textContent = track.title;
  document.getElementById('now-playing-artist').textContent = track.artist;
  
  const videoId = track.url.split('v=')[1];
  
  if (!player) {
    player = new YT.Player('youtube-player', {
      height: '0',
      width: '0',
      videoId: videoId,
      events: {
        'onReady': (event) => event.target.playVideo(),
        'onStateChange': onPlayerStateChange
      }
    });
  } else {
    player.loadVideoById(videoId);
  }
  
  // Animate vinyl
  document.querySelector('.vinyl').classList.add('spinning');
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % allTracks.length;
  playTrack(currentTrackIndex);
}

function previousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + allTracks.length) % allTracks.length;
  playTrack(currentTrackIndex);
}

// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// ==================== TECHNOLOGY × PCM INTEGRATION ====================

function renderTechPCMIntegration() {
  const modules = Object.values(techPCMModules);
  
  let html = `
    <div class="integration-page">
      <h1>🔥 Technology × PCM Integration</h1>
      <p class="hero-text">Where Physics, Chemistry, and Maths meet Real-World Technology</p>
      
      <div class="integration-stats">
        <div class="stat-card">
          <h2>10+</h2>
          <p>Deep Modules</p>
        </div>
        <div class="stat-card">
          <h2>40+</h2>
          <p>Sub-Levels</p>
        </div>
        <div class="stat-card">
          <h2>100+</h2>
          <p>Hours Content</p>
        </div>
        <div class="stat-card">
          <h2>Real</h2>
          <p>Industry Skills</p>
        </div>
      </div>
      
      <div class="modules-grid">
        ${modules.map(module => `
          <div class="integration-module-card" onclick="openIntegrationModule('${module.id}')">
            <div class="module-header">
              <span class="module-icon">${module.icon}</span>
              <span class="difficulty ${module.difficulty.toLowerCase()}">${module.difficulty}</span>
            </div>
            <h2>${module.title}</h2>
            <p>${module.description}</p>
            <div class="module-meta">
              <span>📚 ${Object.keys(module.subLevels).length} Sub-Levels</span>
              ${module.prerequisites ? `<span>🔒 Prerequisites: ${module.prerequisites.length}</span>` : ''}
            </div>
            <button class="start-btn">Start Learning →</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  mainContent.innerHTML = html;
}

function openIntegrationModule(moduleId) {
  const module = techPCMModules[moduleId];
  
  let html = `
    <div class="module-detail-page">
      <button class="back-btn" onclick="renderTechPCMIntegration()">← Back to Modules</button>
      
      <div class="module-hero">
        <span class="hero-icon">${module.icon}</span>
        <h1>${module.title}</h1>
        <p>${module.description}</p>
        <div class="difficulty-badge ${module.difficulty.toLowerCase()}">${module.difficulty}</div>
      </div>
      
      ${module.prerequisites ? `
        <div class="prerequisites">
          <h3>📋 Prerequisites</h3>
          <div class="prereq-tags">
            ${module.prerequisites.map(p => `<span class="tag">${p}</span>`).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="sub-levels">
        ${Object.entries(module.subLevels).map(([key, level]) => `
          <div class="sub-level-card" onclick="openSubLevel('${moduleId}', '${key}')">
            <h2>${level.title}</h2>
            ${level.content ? `
              <div class="level-preview">
                ${level.content.physicsCore ? `<p>⚛️ Physics: ${level.content.physicsCore.length} concepts</p>` : ''}
                ${level.content.chemistryCore ? `<p>🧪 Chemistry: ${level.content.chemistryCore.length} concepts</p>` : ''}
                ${level.content.mathsCore ? `<p>📐 Maths: ${level.content.mathsCore.length} concepts</p>` : ''}
                ${level.content.aiCore ? `<p>🤖 AI: ${level.content.aiCore.length} concepts</p>` : ''}
              </div>
            ` : ''}
            ${level.starterCode ? '<p>💻 Includes Coding Challenge</p>' : ''}
            ${level.requirements ? `<p>🎯 ${level.requirements.length} Project Requirements</p>` : ''}
            <button class="explore-btn">Explore →</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  mainContent.innerHTML = html;
}

function openSubLevel(moduleId, levelKey) {
  const module = techPCMModules[moduleId];
  const level = module.subLevels[levelKey];
  
  let html = `
    <div class="sub-level-detail">
      <button class="back-btn" onclick="openIntegrationModule('${moduleId}')">← Back to ${module.title}</button>
      
      <h1>${level.title}</h1>
  `;
  
  // THEORY SECTION
  if (level.content) {
    html += `
      <div class="theory-section">
        ${level.content.physicsCore ? `
          <div class="concept-block physics">
            <h2>⚛️ Physics Concepts</h2>
            <ul>
              ${level.content.physicsCore.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.content.chemistryCore ? `
          <div class="concept-block chemistry">
            <h2>🧪 Chemistry Concepts</h2>
            <ul>
              ${level.content.chemistryCore.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.content.mathsCore ? `
          <div class="concept-block maths">
            <h2>📐 Mathematics Concepts</h2>
            <ul>
              ${level.content.mathsCore.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.content.aiCore ? `
          <div class="concept-block ai">
            <h2>🤖 AI/ML Concepts</h2>
            <ul>
              ${level.content.aiCore.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.content.realWorldApplications ? `
          <div class="applications">
            <h2>🌍 Real-World Applications</h2>
            <ul>
              ${level.content.realWorldApplications.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.content.videos ? `
          <div class="video-resources">
            <h2>📺 Video Lectures</h2>
            ${level.content.videos.map(v => `
              <div class="video-card">
                <a href="${v.url}" target="_blank">
                  <img src="https://img.youtube.com/vi/${v.url.split('v=')[1]}/mqdefault.jpg" alt="${v.title}">
                  <p>${v.title}</p>
                </a>
              </div>
            `).join('')}
          </div>
        ` : ''}
        
        ${level.content.derivations ? `
          <div class="derivations">
            <h2>📝 Mathematical Derivations</h2>
            ${level.content.derivations.map(d => `
              <div class="derivation-card">
                <h3>${d.title}</h3>
                <ol>
                  ${d.steps.map(s => `<li>${s}</li>`).join('')}
                </ol>
                <div class="solution">
                  <strong>Result:</strong> <code>${d.solution}</code>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }
  
  // CODING CHALLENGE SECTION
  if (level.starterCode) {
    html += `
      <div class="coding-section">
        <h2>💻 Coding Challenge</h2>
        <p>${level.description || ''}</p>
        
        <div class="code-editor">
          <div class="editor-header">
            <span>Python</span>
            <button onclick="runCode('${moduleId}', '${levelKey}')">▶️ Run Code</button>
          </div>
          <textarea id="code-editor-${levelKey}" class="code-textarea">${level.starterCode}</textarea>
        </div>
        
        ${level.testCases ? `
          <div class="test-cases">
            <h3>✅ Test Cases</h3>
            <ul>
              ${level.testCases.map(tc => `<li>${tc}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.hints ? `
          <div class="hints">
            <h3>💡 Hints</h3>
            <details>
              <summary>Click to reveal hints</summary>
              <ul>
                ${level.hints.map(h => `<li>${h}</li>`).join('')}
              </ul>
            </details>
          </div>
        ` : ''}
        
        <div id="code-output" class="code-output"></div>
      </div>
    `;
  }
  
  // PROJECT SECTION
  if (level.requirements) {
    html += `
      <div class="project-section">
        <h2>🎯 Project: ${level.title}</h2>
        <p>${level.description}</p>
        
        <div class="requirements">
          <h3>Requirements</h3>
          <ul>
            ${level.requirements.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
        
        ${level.keyConcepts ? `
          <div class="key-concepts">
            <h3>Key Concepts</h3>
            <ul>
              ${level.keyConcepts.map(k => `<li>${k}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.implementationHints ? `
          <div class="implementation-hints">
            <h3>Implementation Hints</h3>
            <ul>
              ${level.implementationHints.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${level.starterHTML ? `
          <div class="starter-code">
            <h3>Starter Code</h3>
            <details>
              <summary>View HTML Template</summary>
              <pre><code>${escapeHtml(level.starterHTML)}</code></pre>
            </details>
          </div>
        ` : ''}
        
        ${level.links ? `
          <div class="project-links">
            <h3>Resources</h3>
            ${level.links.map(l => `
              <a href="${l.url}" target="_blank" class="resource-link">${l.title} →</a>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }
  
  // PROBLEMS SECTION
  if (level.problems) {
    html += `
      <div class="problems-section">
        <h2>🧩 Challenge Problems</h2>
        ${level.problems.map((p, i) => `
          <div class="problem-card ${p.difficulty.toLowerCase()}">
            <div class="problem-header">
              <h3>Problem ${i+1}: ${p.title}</h3>
              <span class="difficulty-badge">${p.difficulty}</span>
            </div>
            <p class="question">${p.question}</p>
            
            ${p.hints ? `
              <details class="hints">
                <summary>💡 Hints</summary>
                <ul>
                  ${p.hints.map(h => `<li>${h}</li>`).join('')}
                </ul>
              </details>
            ` : ''}
            
            ${p.solution ? `
              <details class="solution">
                <summary>✅ Solution</summary>
                ${p.solution.steps ? `
                  <h4>Steps:</h4>
                  <ol>
                    ${p.solution.steps.map(s => `<li>${s}</li>`).join('')}
                  </ol>
                ` : ''}
                ${p.solution.code ? `
                  <h4>Code:</h4>
                  <pre><code>${escapeHtml(p.solution.code)}</code></pre>
                ` : ''}
                ${p.solution.answer ? `
                  <h4>Answer:</h4>
                  <p>${p.solution.answer}</p>
                ` : ''}
              </details>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }
  
  html += `</div>`;
  mainContent.innerHTML = html;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function runCode(moduleId, levelKey) {
  const code = document.getElementById(`code-editor-${levelKey}`).value;
  const output = document.getElementById('code-output');
  
  output.innerHTML = `
    <div class="output-message info">
      <p>⚠️ Code execution requires a backend server.</p>
      <p>To run this code:</p>
      <ol>
        <li>Copy the code above</li>
        <li>Open <a href="https://repl.it" target="_blank">Repl.it</a> or <a href="https://colab.research.google.com" target="_blank">Google Colab</a></li>
        <li>Paste and run!</li>
      </ol>
    </div>
  `;
}

// ==================== EXPORT FUNCTIONS ====================
window.renderMusicLibrary = renderMusicLibrary;
window.renderTechPCMIntegration = renderTechPCMIntegration;
window.playTrack = playTrack;
window.nextTrack = nextTrack;
window.previousTrack = previousTrack;
window.openIntegrationModule = openIntegrationModule;
window.openSubLevel = openSubLevel;
window.runCode = runCode;