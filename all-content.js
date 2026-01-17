// ALL REMAINING CONTENT SECTIONS

function getCodingContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-code"></i> Code Playground</h1>
      <p class="text-secondary">Practice coding with live editors</p>
      
      <div class="content-grid mt-2">
        <div class="card" onclick="window.open('https://codesandbox.io/s/new', '_blank')">
          <div class="card-header">
            <i class="fab fa-js card-icon"></i>
            <h3 class="card-title">JavaScript Playground</h3>
          </div>
          <p class="text-secondary">Build web apps with React, Vue, Angular</p>
          <button class="btn mt-1">Open Editor</button>
        </div>

        <div class="card" onclick="window.open('https://colab.research.google.com/', '_blank')">
          <div class="card-header">
            <i class="fab fa-python card-icon"></i>
            <h3 class="card-title">Python Notebook</h3>
          </div>
          <p class="text-secondary">Google Colab with FREE GPU</p>
          <button class="btn mt-1">Open Colab</button>
        </div>

        <div class="card" onclick="window.open('https://replit.com/', '_blank')">
          <div class="card-header">
            <i class="fas fa-terminal card-icon"></i>
            <h3 class="card-title">Multi-Language IDE</h3>
          </div>
          <p class="text-secondary">Code in 50+ languages online</p>
          <button class="btn mt-1">Open Replit</button>
        </div>
      </div>
    </div>
  `;
}

function getVideoLecturesContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-video"></i> Video Lectures</h1>
      <p class="text-secondary">Learn from the best educators</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-atom card-icon"></i>
            <h3 class="card-title">Physics Lectures</h3>
          </div>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" frameborder="0" allowfullscreen></iframe>
          <p class="text-secondary mt-1">3Blue1Brown - Essence of Calculus</p>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-flask card-icon"></i>
            <h3 class="card-title">Chemistry Lectures</h3>
          </div>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/videoseries?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr" frameborder="0" allowfullscreen></iframe>
          <p class="text-secondary mt-1">Crash Course Chemistry</p>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-square-root-alt card-icon"></i>
            <h3 class="card-title">Math Lectures</h3>
          </div>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" frameborder="0" allowfullscreen></iframe>
          <p class="text-secondary mt-1">3Blue1Brown - Linear Algebra</p>
        </div>
      </div>
    </div>
  `;
}

function getPracticeContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-pen"></i> Practice Problems</h1>
      <p class="text-secondary">Solve problems and earn XP!</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <h3>Physics - Mechanics</h3>
          <p class="text-secondary">50 problems available</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 40%"></div>
          </div>
          <p class="text-secondary">20/50 solved</p>
          <button class="btn mt-1" onclick="alert('Opening practice problems...')">Start Practicing</button>
        </div>

        <div class="card">
          <h3>Chemistry - Organic</h3>
          <p class="text-secondary">75 problems available</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 30%"></div>
          </div>
          <p class="text-secondary">22/75 solved</p>
          <button class="btn mt-1" onclick="alert('Opening practice problems...')">Start Practicing</button>
        </div>

        <div class="card">
          <h3>Maths - Calculus</h3>
          <p class="text-secondary">100 problems available</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 60%"></div>
          </div>
          <p class="text-secondary">60/100 solved</p>
          <button class="btn mt-1" onclick="alert('Opening practice problems...')">Start Practicing</button>
        </div>
      </div>
    </div>
  `;
}

function getMockTestsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-clipboard-check"></i> Mock Tests</h1>
      <p class="text-secondary">JEE-style full-length tests</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <h3>JEE Main Mock Test #1</h3>
          <p class="text-secondary">90 questions | 3 hours | Full syllabus</p>
          <div class="card-footer mt-1">
            <span class="tag">Physics: 30</span>
            <span class="tag">Chemistry: 30</span>
            <span class="tag">Maths: 30</span>
          </div>
          <button class="btn mt-1" onclick="alert('Starting mock test...')">Start Test</button>
        </div>

        <div class="card">
          <h3>JEE Advanced Mock #1</h3>
          <p class="text-secondary">54 questions | 3 hours | Advanced level</p>
          <div class="card-footer mt-1">
            <span class="tag">Physics: 18</span>
            <span class="tag">Chemistry: 18</span>
            <span class="tag">Maths: 18</span>
          </div>
          <button class="btn mt-1" onclick="alert('Starting mock test...')">Start Test</button>
        </div>

        <div class="card">
          <h3>Subject-wise Test: Physics</h3>
          <p class="text-secondary">30 questions | 1 hour | Physics only</p>
          <button class="btn mt-1" onclick="alert('Starting test...')">Start Test</button>
        </div>
      </div>
    </div>
  `;
}

function getSimulatorsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-vial"></i> Interactive Simulators</h1>
      <p class="text-secondary">Experiment with real physics and chemistry</p>
      
      <div class="content-grid mt-2">
        <div class="card" onclick="window.open('https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html', '_blank')">
          <div class="card-header">
            <i class="fas fa-baseball-ball card-icon"></i>
            <h3 class="card-title">Projectile Motion</h3>
          </div>
          <p class="text-secondary">Simulate projectile trajectories</p>
          <button class="btn mt-1">Open Simulator</button>
        </div>

        <div class="card" onclick="window.open('https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html', '_blank')">
          <div class="card-header">
            <i class="fas fa-bolt card-icon"></i>
            <h3 class="card-title">Circuit Builder</h3>
          </div>
          <p class="text-secondary">Build and test electrical circuits</p>
          <button class="btn mt-1">Open Simulator</button>
        </div>

        <div class="card" onclick="window.open('https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html', '_blank')">
          <div class="card-header">
            <i class="fas fa-flask card-icon"></i>
            <h3 class="card-title">pH Scale Simulator</h3>
          </div>
          <p class="text-secondary">Test acids and bases</p>
          <button class="btn mt-1">Open Simulator</button>
        </div>

        <div class="card" onclick="window.open('https://paveldogreat.github.io/WebGL-Fluid-Simulation/', '_blank')">
          <div class="card-header">
            <i class="fas fa-water card-icon"></i>
            <h3 class="card-title">Fluid Dynamics</h3>
          </div>
          <p class="text-secondary">Play with fluid physics</p>
          <button class="btn mt-1">Open Simulator</button>
        </div>
      </div>
    </div>
  `;
}

function getCalculatorsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-calculator"></i> Scientific Calculators</h1>
      <p class="text-secondary">Powerful calculation tools</p>
      
      <div class="content-grid mt-2">
        <div class="card" onclick="window.open('https://www.desmos.com/calculator', '_blank')">
          <div class="card-header">
            <i class="fas fa-chart-line card-icon"></i>
            <h3 class="card-title">Graphing Calculator</h3>
          </div>
          <p class="text-secondary">Plot functions and analyze graphs</p>
          <button class="btn mt-1">Open Calculator</button>
        </div>

        <div class="card" onclick="window.open('https://www.wolframalpha.com/', '_blank')">
          <div class="card-header">
            <i class="fas fa-brain card-icon"></i>
            <h3 class="card-title">WolframAlpha</h3>
          </div>
          <p class="text-secondary">Computational knowledge engine</p>
          <button class="btn mt-1">Open WolframAlpha</button>
        </div>

        <div class="card" onclick="window.open('https://www.symbolab.com/', '_blank')">
          <div class="card-header">
            <i class="fas fa-infinity card-icon"></i>
            <h3 class="card-title">Symbolab</h3>
          </div>
          <p class="text-secondary">Step-by-step math solver</p>
          <button class="btn mt-1">Open Symbolab</button>
        </div>
      </div>
    </div>
  `;
}

function getNotesContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-sticky-note"></i> My Notes</h1>
      <p class="text-secondary">Create and organize your study notes</p>
      
      <div class="mt-2">
        <button class="btn" onclick="alert('Creating new note...')">
          <i class="fas fa-plus"></i> New Note
        </button>
      </div>

      <div class="content-grid mt-2">
        <div class="card">
          <h3>Physics - Newton's Laws</h3>
          <p class="text-secondary">Last edited: 2 days ago</p>
          <div class="card-footer mt-1">
            <span class="tag">Physics</span>
            <span class="tag">Mechanics</span>
          </div>
          <button class="btn-secondary btn mt-1">View Note</button>
        </div>

        <div class="card">
          <h3>Chemistry - Organic Reactions</h3>
          <p class="text-secondary">Last edited: 1 week ago</p>
          <div class="card-footer mt-1">
            <span class="tag">Chemistry</span>
            <span class="tag">Organic</span>
          </div>
          <button class="btn-secondary btn mt-1">View Note</button>
        </div>
      </div>
    </div>
  `;
}

function getFlashcardsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-layer-group"></i> Flashcards</h1>
      <p class="text-secondary">Spaced repetition learning</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <h3>Physics Formulas</h3>
          <p class="text-secondary">50 cards | 30 mastered</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 60%"></div>
          </div>
          <button class="btn mt-1" onclick="alert('Starting flashcard session...')">Study Now</button>
        </div>

        <div class="card">
          <h3>Chemistry Elements</h3>
          <p class="text-secondary">118 cards | 85 mastered</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 72%"></div>
          </div>
          <button class="btn mt-1" onclick="alert('Starting flashcard session...')">Study Now</button>
        </div>
      </div>
    </div>
  `;
}

function getStudyPlannerContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-calendar-alt"></i> Study Planner</h1>
      <p class="text-secondary">Plan your study schedule</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <h3>Today's Schedule</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 8px 0; border-bottom: 1px solid var(--bg-tertiary);">
              <i class="fas fa-atom"></i> Physics - Mechanics (9:00 AM - 11:00 AM)
            </li>
            <li style="padding: 8px 0; border-bottom: 1px solid var(--bg-tertiary);">
              <i class="fas fa-flask"></i> Chemistry - Organic (2:00 PM - 4:00 PM)
            </li>
            <li style="padding: 8px 0;">
              <i class="fas fa-square-root-alt"></i> Maths - Calculus (7:00 PM - 9:00 PM)
            </li>
          </ul>
        </div>

        <div class="card">
          <h3>Weekly Goals</h3>
          <p class="text-secondary">Complete 5 mock tests</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 40%"></div>
          </div>
          <p class="text-secondary">2/5 completed</p>
        </div>
      </div>
    </div>
  `;
}

function getAchievementsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-medal"></i> Achievements</h1>
      <p class="text-secondary">Your learning milestones</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-fire card-icon" style="color: var(--danger);"></i>
            <h3 class="card-title">7-Day Streak</h3>
          </div>
          <p class="text-secondary">Study for 7 consecutive days</p>
          <span class="tag" style="background: var(--success); color: #000;">Unlocked!</span>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-star card-icon" style="color: var(--warning);"></i>
            <h3 class="card-title">100 Problems Solved</h3>
          </div>
          <p class="text-secondary">Solve 100 practice problems</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
          <p class="text-secondary">75/100</p>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-trophy card-icon" style="color: var(--accent);"></i>
            <h3 class="card-title">Level 10 Reached</h3>
          </div>
          <p class="text-secondary">Reach level 10</p>
          <div class="progress-bar mt-1">
            <div class="progress-fill" style="width: 10%"></div>
          </div>
          <p class="text-secondary">Level 1/10</p>
        </div>
      </div>
    </div>
  `;
}

function getPortfolioContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-briefcase"></i> My Portfolio</h1>
      <p class="text-secondary">Showcase your work and achievements</p>
      
      <div class="mt-2">
        <h2>About Me</h2>
        <p class="text-secondary">
          Passionate learner exploring Physics, Chemistry, Mathematics, and Technology.
          Building projects and solving problems to master concepts.
        </p>
      </div>

      <h2 class="mt-2">Featured Projects</h2>
      <div class="content-grid">
        <div class="card">
          <h3>Physics Simulator</h3>
          <p class="text-secondary">Interactive projectile motion simulator built with JavaScript</p>
          <div class="card-footer mt-1">
            <span class="tag">JavaScript</span>
            <span class="tag">Physics</span>
          </div>
          <button class="btn mt-1">View Project</button>
        </div>

        <div class="card">
          <h3>Chemistry Calculator</h3>
          <p class="text-secondary">Molecular mass and stoichiometry calculator</p>
          <div class="card-footer mt-1">
            <span class="tag">Python</span>
            <span class="tag">Chemistry</span>
          </div>
          <button class="btn mt-1">View Project</button>
        </div>
      </div>
    </div>
  `;
}

function getBlogContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-blog"></i> My Blog</h1>
      <p class="text-secondary">Share your learning journey</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <h3>Understanding Quantum Mechanics</h3>
          <p class="text-secondary">Published: Jan 15, 2026</p>
          <p class="mt-1">A beginner's guide to quantum physics concepts...</p>
          <button class="btn mt-1">Read More</button>
        </div>

        <div class="card">
          <h3>My JEE Preparation Strategy</h3>
          <p class="text-secondary">Published: Jan 10, 2026</p>
          <p class="mt-1">How I'm preparing for JEE without coaching...</p>
          <button class="btn mt-1">Read More</button>
        </div>
      </div>
    </div>
  `;
}

function getResumeContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-file-alt"></i> My Resume</h1>
      <p class="text-secondary">Professional profile and achievements</p>
      
      <div class="card mt-2">
        <h2>Education</h2>
        <p class="text-secondary">Class 12 | Science Stream | 2026</p>
        
        <h2 class="mt-2">Skills</h2>
        <div class="card-footer">
          <span class="tag">Physics</span>
          <span class="tag">Chemistry</span>
          <span class="tag">Mathematics</span>
          <span class="tag">Python</span>
          <span class="tag">JavaScript</span>
          <span class="tag">Problem Solving</span>
        </div>

        <h2 class="mt-2">Achievements</h2>
        <ul class="text-secondary">
          <li>7-day study streak maintained</li>
          <li>100+ problems solved</li>
          <li>Level 1 achieved</li>
        </ul>

        <button class="btn mt-2">Download PDF</button>
      </div>
    </div>
  `;
}

function getContactContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-envelope"></i> Contact Me</h1>
      <p class="text-secondary">Get in touch</p>
      
      <div class="card mt-2" style="max-width: 600px;">
        <form onsubmit="event.preventDefault(); alert('Message sent!');">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem;">Name</label>
            <input type="text" placeholder="Your name" required>
          </div>
          
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem;">Email</label>
            <input type="email" placeholder="your@email.com" required>
          </div>
          
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem;">Message</label>
            <textarea rows="5" placeholder="Your message..." required></textarea>
          </div>
          
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </div>
  `;
}

function getProjectsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-project-diagram"></i> My Projects</h1>
      <p class="text-secondary">Build real-world applications</p>
      
      <div class="content-grid mt-2">
        <div class="card" onclick="window.open('https://github.com/', '_blank')">
          <div class="card-header">
            <i class="fab fa-github card-icon"></i>
            <h3 class="card-title">GitHub Projects</h3>
          </div>
          <p class="text-secondary">View all my code repositories</p>
          <button class="btn mt-1">View on GitHub</button>
        </div>
      </div>
    </div>
  `;
}

function getTechToolsContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-tools"></i> Tech Tools</h1>
      <p class="text-secondary">Powerful development tools</p>
      
      <div class="content-grid mt-2">
        <div class="card" onclick="window.open('https://visualgo.net/en', '_blank')">
          <div class="card-header">
            <i class="fas fa-project-diagram card-icon"></i>
            <h3 class="card-title">Algorithm Visualizer</h3>
          </div>
          <p class="text-secondary">Visualize data structures and algorithms</p>
          <button class="btn mt-1">Open Tool</button>
        </div>

        <div class="card" onclick="window.open('https://regex101.com/', '_blank')">
          <div class="card-header">
            <i class="fas fa-code card-icon"></i>
            <h3 class="card-title">Regex Tester</h3>
          </div>
          <p class="text-secondary">Test and debug regular expressions</p>
          <button class="btn mt-1">Open Tool</button>
        </div>
      </div>
    </div>
  `;
}

function getVisualizersContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-eye"></i> Visualizers</h1>
      <p class="text-secondary">See concepts come to life</p>
      
      <div class="content-grid mt-2">
        <div class="card" onclick="window.open('https://www.geogebra.org/3d', '_blank')">
          <div class="card-header">
            <i class="fas fa-cube card-icon"></i>
            <h3 class="card-title">3D Geometry</h3>
          </div>
          <p class="text-secondary">Visualize 3D shapes and transformations</p>
          <button class="btn mt-1">Open Visualizer</button>
        </div>
      </div>
    </div>
  `;
}

function getResourcesContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-book-open"></i> Resources</h1>
      <p class="text-secondary">Curated learning materials</p>
      
      <div class="content-grid mt-2">
        <div class="card">
          <h3>Physics Resources</h3>
          <ul class="text-secondary" style="list-style: none; padding: 0;">
            <li style="padding: 8px 0;"><i class="fas fa-file-pdf"></i> HC Verma Solutions</li>
            <li style="padding: 8px 0;"><i class="fas fa-file-pdf"></i> DC Pandey</li>
            <li style="padding: 8px 0;"><i class="fas fa-link"></i> Khan Academy Physics</li>
          </ul>
        </div>

        <div class="card">
          <h3>Chemistry Resources</h3>
          <ul class="text-secondary" style="list-style: none; padding: 0;">
            <li style="padding: 8px 0;"><i class="fas fa-file-pdf"></i> NCERT Solutions</li>
            <li style="padding: 8px 0;"><i class="fas fa-file-pdf"></i> MS Chouhan</li>
            <li style="padding: 8px 0;"><i class="fas fa-link"></i> Organic Chemistry Portal</li>
          </ul>
        </div>

        <div class="card">
          <h3>Maths Resources</h3>
          <ul class="text-secondary" style="list-style: none; padding: 0;">
            <li style="padding: 8px 0;"><i class="fas fa-file-pdf"></i> RD Sharma</li>
            <li style="padding: 8px 0;"><i class="fas fa-file-pdf"></i> Cengage Maths</li>
            <li style="padding: 8px 0;"><i class="fas fa-link"></i> Brilliant.org</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function getMusicContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-music"></i> Music Player</h1>
      <p class="text-secondary">The music player is always available in the bottom-right corner!</p>
      
      <div class="card mt-2">
        <h3>How to use:</h3>
        <ul class="text-secondary">
          <li>Click the floating player in bottom-right</li>
          <li>Choose your playlist (Lofi, Focus, Classical, etc.)</li>
          <li>Use play/pause, skip, shuffle, and repeat controls</li>
          <li>Music plays in background while you study!</li>
        </ul>
      </div>
    </div>
  `;
}

function getPomodoroContent() {
  return `
    <div class="fade-in">
      <h1><i class="fas fa-clock"></i> Pomodoro Timer</h1>
      <p class="text-secondary">The Pomodoro timer is always available in the bottom-left corner!</p>
      
      <div class="card mt-2">
        <h3>How to use:</h3>
        <ul class="text-secondary">
          <li>Default: 25 minutes of focused study</li>
          <li>Click Play to start the timer</li>
          <li>Click Pause to pause</li>
          <li>Click Reset to restart</li>
          <li>Take a 5-minute break after each session!</li>
        </ul>
      </div>
    </div>
  `;
}

// Make all functions globally accessible
window.getCodingContent = getCodingContent;
window.getVideoLecturesContent = getVideoLecturesContent;
window.getPracticeContent = getPracticeContent;
window.getMockTestsContent = getMockTestsContent;
window.getSimulatorsContent = getSimulatorsContent;
window.getCalculatorsContent = getCalculatorsContent;
window.getNotesContent = getNotesContent;
window.getFlashcardsContent = getFlashcardsContent;
window.getStudyPlannerContent = getStudyPlannerContent;
window.getAchievementsContent = getAchievementsContent;
window.getPortfolioContent = getPortfolioContent;
window.getBlogContent = getBlogContent;
window.getResumeContent = getResumeContent;
window.getContactContent = getContactContent;
window.getProjectsContent = getProjectsContent;
window.getTechToolsContent = getTechToolsContent;
window.getVisualizersContent = getVisualizersContent;
window.getResourcesContent = getResourcesContent;
window.getMusicContent = getMusicContent;
window.getPomodoroContent = getPomodoroContent;
