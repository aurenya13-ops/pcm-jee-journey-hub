// ==================== THEME MANAGEMENT ====================
const themes = [
  { name: 'Cosmic Blue', primary: '#667eea', secondary: '#764ba2', accent: '#f093fb', bg1: '#0f0c29', bg2: '#302b63', bg3: '#24243e' },
  { name: 'Sunset Vibes', primary: '#f857a6', secondary: '#ff5858', accent: '#ffd89b', bg1: '#1a0a2e', bg2: '#3d2c5e', bg3: '#5a3d7a' },
  { name: 'Ocean Dreams', primary: '#00d2ff', secondary: '#3a7bd5', accent: '#00f2fe', bg1: '#0a192f', bg2: '#172a45', bg3: '#1e3a5f' },
  { name: 'Forest Calm', primary: '#56ab2f', secondary: '#a8e063', accent: '#7bed9f', bg1: '#0d1b0e', bg2: '#1a2f1b', bg3: '#274428' },
  { name: 'Purple Haze', primary: '#a044ff', secondary: '#6a3093', accent: '#e94057', bg1: '#1a0033', bg2: '#2d0052', bg3: '#400070' },
  { name: 'Golden Hour', primary: '#f7971e', secondary: '#ffd200', accent: '#ffed4e', bg1: '#1f1300', bg2: '#3d2600', bg3: '#5c3900' }
];

let currentThemeIndex = parseInt(localStorage.getItem('themeIndex') || '0');
let themeChangeTime = parseInt(localStorage.getItem('themeChangeTime') || (Date.now() + 48*60*60*1000));

function applyTheme(theme) {
  document.documentElement.style.setProperty('--primary', theme.primary);
  document.documentElement.style.setProperty('--secondary', theme.secondary);
  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--bg-primary', theme.bg1);
  document.documentElement.style.setProperty('--bg-secondary', theme.bg2);
  document.documentElement.style.setProperty('--bg-tertiary', theme.bg3);
  document.getElementById('theme-name').textContent = theme.name;
}

function updateThemeCountdown() {
  const remaining = themeChangeTime - Date.now();
  if (remaining <= 0) {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex]);
    themeChangeTime = Date.now() + 48*60*60*1000;
    localStorage.setItem('themeIndex', currentThemeIndex);
    localStorage.setItem('themeChangeTime', themeChangeTime);
  }
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  document.getElementById('theme-countdown').textContent = 
    `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

applyTheme(themes[currentThemeIndex]);
setInterval(updateThemeCountdown, 1000);

// ==================== NAVIGATION ====================
const mainContent = document.getElementById('main-content');
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadPage(page);
  });
});

function loadPage(page) {
  mainContent.style.opacity = '0';
  setTimeout(() => {
    switch(page) {
      case 'home': renderHome(); break;
      case 'dashboard': renderDashboard(); break;
      case 'music': renderMusic(); break;
      case 'physics': renderPhysics(); break;
      case 'chemistry': renderChemistry(); break;
      case 'maths': renderMaths(); break;
      case 'tech': renderTech(); break;
    }
    mainContent.style.opacity = '1';
  }, 200);
}

// ==================== MASSIVE MUSIC LIBRARY ====================
const musicData = [
  // LOFI & STUDY BEATS (Deep Focus)
  { id: 1, title: 'Lofi Hip Hop Radio - Beats to Study/Relax', artist: 'Lofi Girl', videoId: 'jfKfPfyJRdk', category: 'lofi', duration: 'LIVE' },
  { id: 2, title: 'Chillhop Radio - Jazzy & Lofi Hip Hop Beats', artist: 'Chillhop Music', videoId: '5yx6BWlEVcY', category: 'lofi', duration: 'LIVE' },
  { id: 3, title: 'Deep Focus - Ambient Study Music', artist: 'Spotify', videoId: '5qap5aO4i9A', category: 'lofi', duration: '2:00:00' },
  { id: 4, title: 'Peaceful Piano - Relaxing Study Music', artist: 'Spotify', videoId: 'z2yNxFH_nEw', category: 'lofi', duration: '1:30:00' },
  { id: 5, title: 'Jazz Vibes - Smooth Jazz for Studying', artist: 'Steezyasfuck', videoId: 'Dx5qFachd3A', category: 'lofi', duration: '3:00:00' },
  { id: 6, title: 'Synthwave Radio - Beats to Chill/Game', artist: 'Lofi Girl', videoId: '4xDzrJKXOOY', category: 'lofi', duration: 'LIVE' },
  { id: 7, title: 'Coffee Shop Ambience with Jazz Music', artist: 'Relaxing Jazz Piano', videoId: 'gaGltwHXRK0', category: 'lofi', duration: '10:00:00' },
  { id: 8, title: 'Anime Lofi Hip Hop Mix', artist: 'Lofi Fruits Music', videoId: 'WDXPJWIgX_0', category: 'lofi', duration: '1:00:00' },
  { id: 9, title: 'Rainy Day Jazz - Cozy Coffee Shop', artist: 'Jazz and Rain', videoId: 'VGQBoyo9hYw', category: 'lofi', duration: '3:00:00' },
  { id: 10, title: 'Cyberpunk 2077 Radio - Dark Synthwave', artist: 'Neon Nights', videoId: 'eWRxBQgFxz4', category: 'lofi', duration: '1:00:00' },
  
  // MOTIVATION & ENERGY (Workout/Grind)
  { id: 11, title: 'Believer', artist: 'Imagine Dragons', videoId: '7wtfhZwyrcc', category: 'motivation', duration: '3:24' },
  { id: 12, title: 'Unstoppable', artist: 'Sia', videoId: 'cxorfhKPRJI', category: 'motivation', duration: '3:37' },
  { id: 13, title: 'Eye of the Tiger', artist: 'Survivor', videoId: 'btPJPFnesV4', category: 'motivation', duration: '4:04' },
  { id: 14, title: 'Lose Yourself', artist: 'Eminem', videoId: '_Yhyp-_hX2s', category: 'motivation', duration: '5:26' },
  { id: 15, title: 'Till I Collapse', artist: 'Eminem ft. Nate Dogg', videoId: 'ytQ5CYE1VZw', category: 'motivation', duration: '4:57' },
  { id: 16, title: 'Stronger', artist: 'Kanye West', videoId: 'PsO6ZnUZI0g', category: 'motivation', duration: '5:12' },
  { id: 17, title: 'Hall of Fame', artist: 'The Script ft. will.i.am', videoId: 'mk48xRzuNvA', category: 'motivation', duration: '3:23' },
  { id: 18, title: 'Remember the Name', artist: 'Fort Minor', videoId: 'VDvr08sCPOc', category: 'motivation', duration: '3:50' },
  { id: 19, title: 'Centuries', artist: 'Fall Out Boy', videoId: 'LBr7kECsjcQ', category: 'motivation', duration: '3:48' },
  { id: 20, title: 'Warriors', artist: 'Imagine Dragons', videoId: 'fmI_Ndrxy14', category: 'motivation', duration: '2:51' },
  { id: 21, title: 'The Greatest', artist: 'Sia ft. Kendrick Lamar', videoId: 'GKSRyLdjsPA', category: 'motivation', duration: '3:30' },
  { id: 22, title: 'Radioactive', artist: 'Imagine Dragons', videoId: 'ktvTqknDobU', category: 'motivation', duration: '3:07' },
  
  // HINDI MOTIVATION (Desi Vibes)
  { id: 23, title: 'Zinda', artist: 'Siddharth Mahadevan (Bhaag Milkha Bhaag)', videoId: 'VtzON7FdCPU', category: 'hindi', duration: '5:03' },
  { id: 24, title: 'Chak De India Title Track', artist: 'Sukhwinder Singh', videoId: 'gPWVd_EvIjY', category: 'hindi', duration: '4:36' },
  { id: 25, title: 'Lakshya Title Track', artist: 'Shankar Mahadevan', videoId: 'xWFi21W91O8', category: 'hindi', duration: '5:18' },
  { id: 26, title: 'Dangal Title Track', artist: 'Daler Mehndi', videoId: 'x_y_-9yo71A', category: 'hindi', duration: '4:17' },
  { id: 27, title: 'Sultan Title Track', artist: 'Sukhwinder Singh', videoId: 'FN0eWNi_f4I', category: 'hindi', duration: '3:17' },
  { id: 28, title: 'Apna Time Aayega', artist: 'Ranveer Singh (Gully Boy)', videoId: 'jFktOCoHHcw', category: 'hindi', duration: '3:04' },
  { id: 29, title: 'Kar Har Maidaan Fateh', artist: 'Sukhwinder Singh (Sanju)', videoId: 'gShRBsahzXg', category: 'hindi', duration: '3:56' },
  { id: 30, title: 'Badal Pe Paon Hain', artist: 'Armaan Malik (Chak De India)', videoId: 'Tz6A6t55qXk', category: 'hindi', duration: '4:52' },
  
  // CLASSICAL & INSTRUMENTAL (Deep Thinking)
  { id: 31, title: 'Moonlight Sonata', artist: 'Beethoven', videoId: '4Tr0otuiQuU', category: 'classical', duration: '15:50' },
  { id: 32, title: 'Clair de Lune', artist: 'Debussy', videoId: 'CvFH_6DNRCY', category: 'classical', duration: '5:20' },
  { id: 33, title: 'Für Elise', artist: 'Beethoven', videoId: '_mVW8tgGY_w', category: 'classical', duration: '3:15' },
  { id: 34, title: 'Canon in D', artist: 'Pachelbel', videoId: 'NlprozGcs80', category: 'classical', duration: '5:37' },
  { id: 35, title: 'The Four Seasons - Spring', artist: 'Vivaldi', videoId: 'GRxofEmo3HA', category: 'classical', duration: '10:27' },
  { id: 36, title: 'Interstellar Main Theme', artist: 'Hans Zimmer', videoId: 'UDVtMYqUAyw', category: 'classical', duration: '4:30' },
  { id: 37, title: 'Time - Inception', artist: 'Hans Zimmer', videoId: 'RxabLA7UQ9k', category: 'classical', duration: '4:35' },
  { id: 38, title: 'Experience', artist: 'Ludovico Einaudi', videoId: 'hN_q-_nGv4U', category: 'classical', duration: '5:15' },
  
  // ELECTRONIC & FOCUS (Coding Sessions)
  { id: 39, title: 'Strobe', artist: 'Deadmau5', videoId: 'tKi9Z-f6qX4', category: 'electronic', duration: '10:37' },
  { id: 40, title: 'Faded', artist: 'Alan Walker', videoId: '60ItHLz5WEA', category: 'electronic', duration: '3:32' },
  { id: 41, title: 'Levels', artist: 'Avicii', videoId: '_ovdm2yX4MA', category: 'electronic', duration: '3:18' },
  { id: 42, title: 'Clarity', artist: 'Zedd ft. Foxes', videoId: 'IxxstCcJlsc', category: 'electronic', duration: '4:32' },
  { id: 43, title: 'Titanium', artist: 'David Guetta ft. Sia', videoId: 'JRfuAukYTKg', category: 'electronic', duration: '4:05' },
  { id: 44, title: 'Wake Me Up', artist: 'Avicii', videoId: 'IcrbM1l_BoI', category: 'electronic', duration: '4:09' },
  { id: 45, title: 'Animals', artist: 'Martin Garrix', videoId: 'gCYcHz2k5x0', category: 'electronic', duration: '5:02' },
  
  // AMBIENT & NATURE (Meditation/Break)
  { id: 46, title: 'Weightless', artist: 'Marconi Union', videoId: 'UfcAVejslrU', category: 'ambient', duration: '8:09' },
  { id: 47, title: 'Rain Sounds for Sleeping', artist: 'Nature Sounds', videoId: 'mPZkdNFkNps', category: 'ambient', duration: '10:00:00' },
  { id: 48, title: 'Ocean Waves - Relaxing Sounds', artist: 'Nature Therapy', videoId: 'WHPEKLQID4U', category: 'ambient', duration: '3:00:00' },
  { id: 49, title: 'Forest Sounds - Birds Chirping', artist: 'Relaxing Sounds', videoId: 'xNN7iTA57jM', category: 'ambient', duration: '2:00:00' },
  { id: 50, title: 'Tibetan Singing Bowls', artist: 'Meditation Relax Music', videoId: 'BqVjbT8DFrI', category: 'ambient', duration: '1:00:00' },
  
  // ROCK & ALTERNATIVE (Energy Boost)
  { id: 51, title: 'Numb', artist: 'Linkin Park', videoId: 'kXYiU_JCYtU', category: 'rock', duration: '3:07' },
  { id: 52, title: 'In the End', artist: 'Linkin Park', videoId: 'eVTXPUF4Oz4', category: 'rock', duration: '3:36' },
  { id: 53, title: 'Smells Like Teen Spirit', artist: 'Nirvana', videoId: 'hTWKbfoikeg', category: 'rock', duration: '5:01' },
  { id: 54, title: 'Bohemian Rhapsody', artist: 'Queen', videoId: 'fJ9rUzIMcZQ', category: 'rock', duration: '5:55' },
  { id: 55, title: 'Sweet Child O Mine', artist: 'Guns N Roses', videoId: '1w7OgIMMRc4', category: 'rock', duration: '5:56' }
];

// ==================== EXPANDED LEARNING DATA ====================
const learningData = {
  physics: [
    {
      id: 'phy-kinematics',
      title: 'Kinematics × Algorithms',
      subtitle: 'Motion meets Code',
      description: 'Master motion physics by building motion simulators and trajectory calculators',
      icon: '🚀',
      difficulty: 'beginner',
      estimatedTime: '4-6 hours',
      prerequisites: [],
      subLevels: [
        {
          id: 'phy-kin-1',
          title: 'Theory: Equations of Motion',
          type: 'theory',
          videoId: 'ZM8ECpBuQYE',
          content: {
            concepts: [
              'Displacement (s): Vector quantity, shortest distance from initial to final position',
              'Velocity (v): Rate of change of displacement, v = ds/dt (vector)',
              'Acceleration (a): Rate of change of velocity, a = dv/dt (vector)',
              'First equation: v = u + at (velocity-time relation)',
              'Second equation: s = ut + ½at² (displacement-time relation)',
              'Third equation: v² = u² + 2as (velocity-displacement relation)',
              'Graphical interpretation: Slope of s-t graph = velocity, Area under v-t graph = displacement'
            ],
            derivations: [
              {
                title: 'Derive v = u + at from first principles',
                steps: [
                  'Definition of acceleration: a = (change in velocity) / (time taken)',
                  'a = (v - u) / t',
                  'Multiply both sides by t: at = v - u',
                  'Rearrange: v = u + at ✓',
                  'This is valid for constant acceleration only'
                ]
              },
              {
                title: 'Derive s = ut + ½at² using average velocity',
                steps: [
                  'For constant acceleration, average velocity = (initial + final) / 2',
                  'v_avg = (u + v) / 2',
                  'Distance = average velocity × time',
                  's = [(u + v) / 2] × t',
                  'From first equation: v = u + at',
                  'Substitute: s = [(u + u + at) / 2] × t',
                  's = [(2u + at) / 2] × t',
                  's = ut + ½at² ✓'
                ]
              },
              {
                title: 'Derive v² = u² + 2as (eliminate time)',
                steps: [
                  'From v = u + at, we get: t = (v - u) / a',
                  'From s = ut + ½at², substitute t:',
                  's = u[(v - u) / a] + ½a[(v - u) / a]²',
                  's = u(v - u)/a + (v - u)²/(2a)',
                  'Multiply throughout by 2a: 2as = 2u(v - u) + (v - u)²',
                  '2as = 2uv - 2u² + v² - 2uv + u²',
                  '2as = v² - u²',
                  'Therefore: v² = u² + 2as ✓'
                ]
              }
            ],
            realWorldApplications: [
              'Car braking distance calculations (safety)',
              'Rocket trajectory planning (space missions)',
              'Sports analytics (ball trajectory in cricket/football)',
              'Elevator motion control systems'
            ]
          },
          challenge: {
            type: 'derivation',
            question: 'A car moving at 20 m/s applies brakes and comes to rest in 4 seconds. Derive the braking distance using all three equations and verify they give the same answer.',
            hint: 'First find acceleration using v = u + at, then use both s = ut + ½at² and v² = u² + 2as',
            solution: [
              'Given: u = 20 m/s, v = 0 m/s, t = 4 s',
              'Step 1: Find acceleration using v = u + at',
              '0 = 20 + a(4)',
              'a = -5 m/s² (negative because deceleration)',
              '',
              'Step 2: Find distance using s = ut + ½at²',
              's = 20(4) + ½(-5)(16)',
              's = 80 - 40 = 40 m',
              '',
              'Step 3: Verify using v² = u² + 2as',
              '0² = 20² + 2(-5)s',
              '0 = 400 - 10s',
              's = 40 m ✓',
              '',
              'Both methods give the same answer: 40 meters'
            ]
          }
        },
        {
          id: 'phy-kin-2',
          title: 'Code Challenge: Motion Simulator',
          type: 'coding',
          description: 'Build a complete JavaScript motion calculator with validation and edge cases',
          starterCode: `// Advanced Motion Simulator
class MotionSimulator {
  constructor(u, a) {
    this.initialVelocity = u;  // m/s
    this.acceleration = a;      // m/s²
  }
  
  // TODO: Calculate velocity at time t
  velocityAt(t) {
    // Formula: v = u + at
    // Handle negative time (should return null or throw error)
    return 0;
  }
  
  // TODO: Calculate displacement at time t
  displacementAt(t) {
    // Formula: s = ut + 0.5*a*t²
    // Handle negative time
    return 0;
  }
  
  // TODO: Calculate time to reach velocity v
  timeToReachVelocity(v) {
    // Formula: t = (v - u) / a
    // Handle division by zero (a = 0)
    // Handle impossible cases (e.g., accelerating forward but asking for backward velocity)
    return 0;
  }
  
  // TODO: Calculate velocity at displacement s
  velocityAtDisplacement(s) {
    // Formula: v² = u² + 2as, so v = ±√(u² + 2as)
    // Handle negative value under square root
    // Return appropriate sign based on direction
    return 0;
  }
  
  // TODO: Calculate time to reach displacement s
  timeToReachDisplacement(s) {
    // Use quadratic formula: s = ut + 0.5at²
    // 0.5at² + ut - s = 0
    // t = [-u ± √(u² + 2as)] / a
    // Return positive root
    return 0;
  }
  
  // TODO: Get motion summary at time t
  getMotionSummary(t) {
    // Return object with: time, displacement, velocity, acceleration
    return {};
  }
}

// Test cases
const motion1 = new MotionSimulator(10, 2);
console.log('Test 1 - Velocity at t=5s:', motion1.velocityAt(5)); // Expected: 20 m/s
console.log('Test 2 - Displacement at t=5s:', motion1.displacementAt(5)); // Expected: 75 m

const motion2 = new MotionSimulator(0, 10);
console.log('Test 3 - Time to reach 50 m/s:', motion2.timeToReachVelocity(50)); // Expected: 5 s

const motion3 = new MotionSimulator(20, -5);
console.log('Test 4 - Velocity at s=30m:', motion3.velocityAtDisplacement(30)); // Expected: 10 m/s`,
          testCases: [
            { 
              input: { u: 0, a: 10, t: 5 }, 
              expected: { v: 50, s: 125 },
              description: 'Starting from rest with constant acceleration'
            },
            { 
              input: { u: 20, a: -5, t: 4 }, 
              expected: { v: 0, s: 40 },
              description: 'Deceleration to rest'
            },
            { 
              input: { u: 10, a: 2, s: 100 }, 
              expected: { v: 30 },
              description: 'Velocity at given displacement'
            },
            {
              input: { u: 0, a: 0, t: 10 },
              expected: { v: 0, s: 0 },
              description: 'No acceleration (uniform motion at rest)'
            }
          ],
          solution: `class MotionSimulator {
  constructor(u, a) {
    this.initialVelocity = u;
    this.acceleration = a;
  }
  
  velocityAt(t) {
    if (t < 0) throw new Error('Time cannot be negative');
    return this.initialVelocity + this.acceleration * t;
  }
  
  displacementAt(t) {
    if (t < 0) throw new Error('Time cannot be negative');
    return this.initialVelocity * t + 0.5 * this.acceleration * t * t;
  }
  
  timeToReachVelocity(v) {
    if (this.acceleration === 0) {
      if (v === this.initialVelocity) return 0;
      throw new Error('Cannot reach different velocity with zero acceleration');
    }
    const t = (v - this.initialVelocity) / this.acceleration;
    if (t < 0) throw new Error('Cannot reach this velocity (would require negative time)');
    return t;
  }
  
  velocityAtDisplacement(s) {
    const vSquared = this.initialVelocity ** 2 + 2 * this.acceleration * s;
    if (vSquared < 0) throw new Error('Displacement not reachable (negative velocity squared)');
    
    // Return velocity with appropriate sign
    const v = Math.sqrt(vSquared);
    // If decelerating and displacement is positive, velocity decreases
    if (this.acceleration < 0 && s > 0) return v;
    // If accelerating forward, velocity is positive
    return this.acceleration >= 0 ? v : -v;
  }
  
  timeToReachDisplacement(s) {
    // Solve: 0.5at² + ut - s = 0
    const a = 0.5 * this.acceleration;
    const b = this.initialVelocity;
    const c = -s;
    
    if (a === 0) {
      // Linear equation: ut = s
      if (b === 0) throw new Error('Cannot reach displacement with zero velocity and acceleration');
      return s / b;
    }
    
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) throw new Error('Displacement not reachable');
    
    const t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const t2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    
    // Return positive root
    if (t1 >= 0 && t2 >= 0) return Math.min(t1, t2);
    if (t1 >= 0) return t1;
    if (t2 >= 0) return t2;
    throw new Error('No positive time solution');
  }
  
  getMotionSummary(t) {
    return {
      time: t,
      displacement: this.displacementAt(t),
      velocity: this.velocityAt(t),
      acceleration: this.acceleration,
      initialVelocity: this.initialVelocity
    };
  }
}`
        },
        {
          id: 'phy-kin-3',
          title: 'Project: 2D Projectile Motion Visualizer',
          type: 'project',
          description: 'Build an interactive projectile motion simulator with real-time visualization',
          requirements: [
            'HTML5 Canvas for visualization (800x600px recommended)',
            'Input controls: Initial velocity (0-100 m/s), Launch angle (0-90°), Gravity (default 9.8 m/s²)',
            'Calculate and display: Range, Maximum Height, Time of Flight, Impact velocity',
            'Real-time animation showing projectile path',
            'Display current position (x, y) and velocity components (vx, vy) during flight',
            'Trajectory trace (show path taken)',
            'Controls: Launch, Pause, Reset, Speed control (1x, 2x, 5x)',
            'Show theoretical vs actual values',
            'Bonus: Add air resistance option'
          ],
          concepts: [
            'Horizontal motion (constant velocity): x = u cos(θ) × t',
            'Vertical motion (constant acceleration): y = u sin(θ) × t - ½gt²',
            'Horizontal velocity: vx = u cos(θ) (constant)',
            'Vertical velocity: vy = u sin(θ) - gt',
            'Time of flight: T = 2u sin(θ) / g',
            'Maximum height: H = u² sin²(θ) / (2g)',
            'Range: R = u² sin(2θ) / g',
            'Angle for maximum range: 45°'
          ],
          hints: [
            'Use requestAnimationFrame() for smooth 60fps animation',
            'Convert angle from degrees to radians: radians = degrees × π/180',
            'Update position every frame: dt = 1/60 seconds',
            'Stop animation when y < 0 (projectile hits ground)',
            'Use canvas.beginPath() and canvas.arc() for projectile',
            'Use canvas.lineTo() to draw trajectory trace',
            'Store previous positions in array for trajectory',
            'Scale coordinates: 1 meter = 5 pixels (adjust as needed)'
          ],
          starterHTML: `<!DOCTYPE html>
<html>
<head>
  <title>Projectile Motion Simulator</title>
  <style>
    body { font-family: Arial; padding: 20px; background: #1a1a2e; color: white; }
    canvas { border: 2px solid #0f3460; background: #16213e; display: block; margin: 20px auto; }
    .controls { text-align: center; margin: 20px; }
    input[type="range"] { width: 200px; }
    button { padding: 10px 20px; margin: 5px; cursor: pointer; }
  </style>
</head>
<body>
  <h1 style="text-align: center;">🚀 Projectile Motion Simulator</h1>
  
  <div class="controls">
    <label>Velocity: <input type="range" id="velocity" min="10" max="100" value="50"> <span id="vel-val">50</span> m/s</label><br>
    <label>Angle: <input type="range" id="angle" min="0" max="90" value="45"> <span id="ang-val">45</span>°</label><br>
    <label>Gravity: <input type="range" id="gravity" min="1" max="20" value="10"> <span id="grav-val">10</span> m/s²</label><br>
    <button onclick="launch()">🚀 Launch</button>
    <button onclick="reset()">🔄 Reset</button>
  </div>
  
  <canvas id="canvas" width="800" height="600"></canvas>
  
  <div id="stats" style="text-align: center; font-family: monospace;"></div>
  
  <script>
    // TODO: Implement projectile motion simulation
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    let animationId;
    let projectile = null;
    
    class Projectile {
      constructor(u, angle, g) {
        // TODO: Initialize projectile with velocity, angle, gravity
        // Calculate initial vx, vy
        // Set starting position
      }
      
      update(dt) {
        // TODO: Update position and velocity
        // x += vx * dt
        // y += vy * dt
        // vy -= g * dt
      }
      
      draw() {
        // TODO: Draw projectile on canvas
      }
      
      isActive() {
        // TODO: Check if projectile is still in air
        return this.y >= 0;
      }
    }
    
    function launch() {
      // TODO: Create new projectile and start animation
    }
    
    function reset() {
      // TODO: Stop animation and clear canvas
    }
    
    function animate() {
      // TODO: Animation loop
      // Clear canvas
      // Update projectile
      // Draw projectile
      // Update stats
      // Continue if active
    }
  </script>
</body>
</html>`
        },
        {
          id: 'phy-kin-4',
          title: 'Problem Solving: Real World Scenarios',
          type: 'problems',
          problems: [
            {
              question: 'A car accelerates uniformly from rest to 72 km/h in 10 seconds. Calculate: (a) acceleration in m/s², (b) distance covered during acceleration, (c) velocity after 5 seconds',
              difficulty: 'easy',
              hints: [
                'Convert 72 km/h to m/s: multiply by 5/18',
                'Use v = u + at for acceleration',
                'Use s = ut + ½at² for distance',
                'Use v = u + at again for velocity at 5s'
              ],
              solution: {
                steps: [
                  'Given: u = 0 (starts from rest), v = 72 km/h, t = 10 s',
                  'Convert velocity: 72 km/h = 72 × (5/18) = 20 m/s',
                  '',
                  '(a) Find acceleration using v = u + at:',
                  '20 = 0 + a(10)',
                  'a = 2 m/s²',
                  '',
                  '(b) Find distance using s = ut + ½at²:',
                  's = 0(10) + ½(2)(10²)',
                  's = 0 + ½(2)(100)',
                  's = 100 m',
                  '',
                  '(c) Find velocity at t = 5s using v = u + at:',
                  'v = 0 + 2(5)',
                  'v = 10 m/s = 36 km/h'
                ],
                answer: '(a) 2 m/s², (b) 100 m, (c) 10 m/s or 36 km/h'
              }
            },
            {
              question: 'A ball is thrown vertically upward with a velocity of 30 m/s from the top of a building 50 m high. Find: (a) maximum height above ground, (b) time to reach maximum height, (c) total time to hit the ground, (d) velocity when it hits the ground (g = 10 m/s²)',
              difficulty: 'hard',
              hints: [
                'At maximum height, final velocity = 0',
                'Use v² = u² - 2gh for max height (negative because against gravity)',
                'Use v = u - gt for time to max height',
                'For downward journey, use s = ut + ½gt² from max height',
                'Or use s = ut + ½at² for entire journey (a = -10 m/s²)'
              ],
              solution: {
                steps: [
                  'Given: u = 30 m/s (upward), h₀ = 50 m, g = 10 m/s²',
                  '',
                  '(a) Maximum height above launch point:',
                  'At max height, v = 0',
                  'Using v² = u² - 2gh:',
                  '0 = 30² - 2(10)h',
                  '0 = 900 - 20h',
                  'h = 45 m above launch point',
                  'Total height above ground = 50 + 45 = 95 m',
                  '',
                  '(b) Time to reach maximum height:',
                  'Using v = u - gt:',
                  '0 = 30 - 10t',
                  't = 3 seconds',
                  '',
                  '(c) Total time to hit ground:',
                  'Taking downward as positive, from max height (95 m):',
                  'Using s = ut + ½gt²: (u = 0 at max height)',
                  '95 = 0 + ½(10)t²',
                  '95 = 5t²',
                  't² = 19',
                  't = 4.36 s (time to fall from max height)',
                  'Total time = 3 + 4.36 = 7.36 seconds',
                  '',
                  '(d) Velocity when hitting ground:',
                  'Using v² = u² + 2gs from max height:',
                  'v² = 0 + 2(10)(95)',
                  'v² = 1900',
                  'v = 43.6 m/s (downward)'
                ],
                answer: '(a) 95 m, (b) 3 s, (c) 7.36 s, (d) 43.6 m/s downward'
              }
            },
            {
              question: 'Two trains are moving towards each other on parallel tracks with speeds 60 km/h and 40 km/h. When they are 200 m apart, both drivers apply brakes giving decelerations of 0.5 m/s² and 0.3 m/s² respectively. Will they collide? If not, what will be the distance between them when both stop?',
              difficulty: 'hard',
              hints: [
                'Convert speeds to m/s',
                'Find stopping distance for each train using v² = u² + 2as',
                'Compare sum of stopping distances with initial separation',
                'If sum < 200 m, they won\'t collide'
              ],
              solution: {
                steps: [
                  'Train 1: u₁ = 60 km/h = 60 × (5/18) = 16.67 m/s, a₁ = -0.5 m/s²',
                  'Train 2: u₂ = 40 km/h = 40 × (5/18) = 11.11 m/s, a₂ = -0.3 m/s²',
                  'Initial separation = 200 m',
                  '',
                  'Stopping distance for Train 1:',
                  'Using v² = u² + 2as (v = 0 when stopped):',
                  '0 = (16.67)² + 2(-0.5)s₁',
                  '0 = 277.89 - s₁',
                  's₁ = 277.89 m',
                  '',
                  'Stopping distance for Train 2:',
                  '0 = (11.11)² + 2(-0.3)s₂',
                  '0 = 123.43 - 0.6s₂',
                  's₂ = 205.72 m',
                  '',
                  'Total distance covered = 277.89 + 205.72 = 483.61 m',
                  'Initial separation = 200 m',
                  '',
                  'Since 483.61 > 200, the trains WILL COLLIDE!',
                  '',
                  'To find when they collide:',
                  'Let them meet after time t at distance x from train 1',
                  'For train 1: x = 16.67t - 0.25t²',
                  'For train 2: (200-x) = 11.11t - 0.15t²',
                  'Solving: 200 = 27.78t - 0.4t²',
                  '0.4t² - 27.78t + 200 = 0',
                  't = 8.26 seconds (collision time)'
                ],
                answer: 'YES, they will collide after 8.26 seconds'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'phy-newton',
      title: 'Newton\'s Laws × Game Physics',
      subtitle: 'Forces meet Game Engines',
      description: 'Build physics engines by implementing Newton\'s laws of motion',
      icon: '⚖️',
      difficulty: 'intermediate',
      estimatedTime: '5-7 hours',
      prerequisites: ['phy-kinematics'],
      subLevels: [
        {
          id: 'phy-newt-1',
          title: 'Theory: Three Laws of Motion',
          type: 'theory',
          videoId: 'kKKM8Y-u7ds',
          content: {
            concepts: [
              'First Law (Inertia): Object at rest stays at rest, object in motion stays in motion unless acted upon by external force',
              'Second Law (F = ma): Force equals mass times acceleration. Acceleration is directly proportional to force and inversely proportional to mass',
              'Third Law (Action-Reaction): For every action, there is an equal and opposite reaction',
              'Free Body Diagram: Visual representation of all forces acting on an object',
              'Net Force: Vector sum of all forces, F_net = ΣF',
              'Equilibrium: When net force = 0, object is in equilibrium (static or dynamic)'
            ],
            applications: [
              'Rocket propulsion (Third Law)',
              'Car safety (First Law - seatbelts)',
              'Elevator physics (Second Law)',
              'Walking (Third Law - push ground backward, ground pushes you forward)'
            ]
          }
        },
        {
          id: 'phy-newt-2',
          title: 'Code: Physics Engine Basics',
          type: 'coding',
          description: 'Build a simple 2D physics engine with forces and collisions',
          starterCode: `class PhysicsObject {
  constructor(x, y, mass) {
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.mass = mass;
    this.forces = [];
  }
  
  // TODO: Apply force to object
  applyForce(fx, fy) {
    // Add force to forces array
    this.forces.push({ x: fx, y: fy });
  }
  
  // TODO: Update physics (called every frame)
  update(dt) {
    // Calculate net force: sum of all forces
    // Calculate acceleration: F = ma, so a = F/m
    // Update velocity: v = v + a*dt
    // Update position: x = x + v*dt
    // Clear forces for next frame
  }
  
  // TODO: Apply gravity
  applyGravity(g = 9.8) {
    // Gravity force = mass * g (downward)
  }
  
  // TODO: Apply friction
  applyFriction(coefficient) {
    // Friction opposes motion
    // F_friction = -coefficient * velocity
  }
}

// Test
const ball = new PhysicsObject(0, 100, 5);
ball.applyGravity();
ball.update(0.016); // 60 FPS
console.log('Position after 1 frame:', ball.position);`,
          solution: `class PhysicsObject {
  constructor(x, y, mass) {
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.mass = mass;
    this.forces = [];
  }
  
  applyForce(fx, fy) {
    this.forces.push({ x: fx, y: fy });
  }
  
  update(dt) {
    // Calculate net force
    let netForce = { x: 0, y: 0 };
    for (let force of this.forces) {
      netForce.x += force.x;
      netForce.y += force.y;
    }
    
    // F = ma, so a = F/m
    this.acceleration.x = netForce.x / this.mass;
    this.acceleration.y = netForce.y / this.mass;
    
    // Update velocity
    this.velocity.x += this.acceleration.x * dt;
    this.velocity.y += this.acceleration.y * dt;
    
    // Update position
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
    
    // Clear forces
    this.forces = [];
  }
  
  applyGravity(g = 9.8) {
    this.applyForce(0, this.mass * g);
  }
  
  applyFriction(coefficient) {
    const frictionX = -coefficient * this.velocity.x;
    const frictionY = -coefficient * this.velocity.y;
    this.applyForce(frictionX, frictionY);
  }
}`
        },
        {
          id: 'phy-newt-3',
          title: 'Project: Angry Birds Clone',
          type: 'project',
          description: 'Build a simple Angry Birds-style game using physics',
          requirements: [
            'Canvas-based game (800x600px)',
            'Draggable slingshot to launch bird',
            'Projectile motion with gravity',
            'Collision detection with obstacles',
            'Score system based on destruction',
            'Multiple levels with increasing difficulty'
          ]
        }
      ]
    },
    {
      id: 'phy-energy',
      title: 'Energy & Work × Optimization',
      subtitle: 'Conservation meets Algorithms',
      description: 'Understand energy conservation through optimization problems',
      icon: '⚡',
      difficulty: 'intermediate',
      estimatedTime: '4-5 hours',
      prerequisites: ['phy-kinematics', 'phy-newton'],
      subLevels: [
        {
          id: 'phy-energy-1',
          title: 'Theory: Work, Energy, Power',
          type: 'theory',
          videoId: 'w4QFJb9a8vo',
          content: {
            concepts: [
              'Work: W = F·s = Fs cos(θ) (energy transferred by force)',
              'Kinetic Energy: KE = ½mv² (energy due to motion)',
              'Potential Energy: PE = mgh (energy due to position)',
              'Work-Energy Theorem: W_net = ΔKE',
              'Conservation of Energy: Total energy remains constant in isolated system',
              'Power: P = W/t = F·v (rate of doing work)'
            ]
          }
        }
      ]
    },
    {
      id: 'phy-waves',
      title: 'Waves × Signal Processing',
      subtitle: 'Oscillations meet DSP',
      description: 'Master wave physics through audio programming and Fourier analysis',
      icon: '🌊',
      difficulty: 'advanced',
      estimatedTime: '6-8 hours',
      prerequisites: ['phy-kinematics'],
      subLevels: [
        {
          id: 'phy-wave-1',
          title: 'Theory: Wave Motion & Equations',
          type: 'theory',
          videoId: 'qV4lR9EWGlY',
          content: {
            concepts: [
              'Wave: Disturbance that transfers energy without transferring matter',
              'Wave equation: y(x,t) = A sin(kx - ωt + φ)',
              'Amplitude (A): Maximum displacement from equilibrium',
              'Wavelength (λ): Distance between consecutive crests',
              'Frequency (f): Number of oscillations per second (Hz)',
              'Period (T): Time for one complete oscillation, T = 1/f',
              'Wave number (k): k = 2π/λ (spatial frequency)',
              'Angular frequency (ω): ω = 2πf (temporal frequency)',
              'Phase (φ): Initial phase angle',
              'Wave speed: v = fλ = ω/k',
              'Superposition: When two waves meet, resultant displacement = sum of individual displacements'
            ]
          }
        },
        {
          id: 'phy-wave-2',
          title: 'Code: Audio Tone Generator',
          type: 'coding',
          description: 'Generate musical notes and understand frequency',
          starterCode: `class AudioGenerator {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  // TODO: Play a pure tone
  playTone(frequency, duration, volume = 0.3) {
    // Create oscillator
    // Set frequency
    // Set volume
    // Play for duration
  }
  
  // TODO: Play musical note (A4 = 440 Hz)
  playNote(note, octave, duration) {
    // Convert note name to frequency
    // A4 = 440, A5 = 880, etc.
    // Each semitone = multiply by 2^(1/12)
  }
}`,
          solution: `class AudioGenerator {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.noteFrequencies = {
      'C': -9, 'C#': -8, 'D': -7, 'D#': -6,
      'E': -5, 'F': -4, 'F#': -3, 'G': -2,
      'G#': -1, 'A': 0, 'A#': 1, 'B': 2
    };
  }
  
  playTone(frequency, duration, volume = 0.3) {
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    gainNode.gain.value = volume;
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + duration);
  }
  
  playNote(note, octave, duration) {
    const A4 = 440;
    const semitones = this.noteFrequencies[note] + (octave - 4) * 12;
    const frequency = A4 * Math.pow(2, semitones / 12);
    this.playTone(frequency, duration);
  }
}`
        }
      ]
    },
    {
      id: 'phy-electro',
      title: 'Electromagnetism × Circuit Design',
      subtitle: 'Charges meet Electronics',
      description: 'Build circuit simulators and understand electromagnetic principles',
      icon: '🔌',
      difficulty: 'advanced',
      estimatedTime: '7-9 hours',
      prerequisites: ['phy-newton'],
      subLevels: [
        {
          id: 'phy-elec-1',
          title: 'Theory: Electric Charge & Field',
          type: 'theory',
          videoId: 'x1-SibwIPM4',
          content: {
            concepts: [
              'Electric Charge: Property of matter (positive/negative)',
              'Coulomb\'s Law: F = kq₁q₂/r² (force between charges)',
              'Electric Field: E = F/q (force per unit charge)',
              'Electric Potential: V = W/q (work per unit charge)',
              'Ohm\'s Law: V = IR (voltage = current × resistance)',
              'Power: P = VI = I²R = V²/R'
            ]
          }
        }
      ]
    }
  ],
  
  chemistry: [
    {
      id: 'chem-atomic',
      title: 'Atomic Structure × Quantum Computing',
      subtitle: 'Quantum mechanics meets Qubits',
      description: 'Understand quantum numbers through quantum algorithms',
      icon: '⚛️',
      difficulty: 'intermediate',
      estimatedTime: '5-6 hours',
      prerequisites: [],
      subLevels: [
        {
          id: 'chem-atom-1',
          title: 'Theory: Quantum Numbers & Orbitals',
          type: 'theory',
          videoId: 'Aoi4j8es4gQ',
          content: {
            concepts: [
              'Principal Quantum Number (n): Energy level, n = 1, 2, 3, ... (shell)',
              'Azimuthal Quantum Number (l): Orbital shape, l = 0 to n-1 (subshell)',
              'Magnetic Quantum Number (m): Orbital orientation, m = -l to +l',
              'Spin Quantum Number (s): Electron spin, s = +½ or -½',
              'Pauli Exclusion Principle: No two electrons can have same 4 quantum numbers',
              'Aufbau Principle: Electrons fill lowest energy orbitals first',
              'Hund\'s Rule: Electrons occupy orbitals singly before pairing'
            ],
            orbitals: {
              's': { l: 0, shape: 'spherical', maxElectrons: 2, orbitals: 1 },
              'p': { l: 1, shape: 'dumbbell', maxElectrons: 6, orbitals: 3 },
              'd': { l: 2, shape: 'cloverleaf', maxElectrons: 10, orbitals: 5 },
              'f': { l: 3, shape: 'complex', maxElectrons: 14, orbitals: 7 }
            }
          }
        },
        {
          id: 'chem-atom-2',
          title: 'Code: Electron Configuration Generator',
          type: 'coding',
          description: 'Build automatic electron configuration calculator with validation',
          starterCode: `class ElectronConfig {
  constructor() {
    // Aufbau principle order
    this.orbitals = [
      '1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', 
      '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'
    ];
    this.maxElectrons = { 's': 2, 'p': 6, 'd': 10, 'f': 14 };
  }
  
  // TODO: Generate electron configuration
  getConfig(atomicNumber) {
    // Fill orbitals according to Aufbau principle
    // Return string like "1s² 2s² 2p⁶"
    return '';
  }
  
  // TODO: Get noble gas notation
  getNobleGasConfig(atomicNumber) {
    // Use nearest noble gas as core
    // Example: Fe (26) = [Ar] 4s² 3d⁶
    return '';
  }
  
  // TODO: Get orbital diagram
  getOrbitalDiagram(atomicNumber) {
    // Show electron distribution with arrows
    // Example: 1s: ↑↓  2s: ↑↓  2p: ↑↓ ↑↓ ↑↓
    return '';
  }
  
  // TODO: Validate configuration
  isValidConfig(config) {
    // Check Pauli exclusion
    // Check Hund's rule
    return false;
  }
}

// Test
const ec = new ElectronConfig();
console.log('Carbon (6):', ec.getConfig(6));
console.log('Iron (26):', ec.getConfig(26));
console.log('Noble gas:', ec.getNobleGasConfig(26));`,
          solution: `class ElectronConfig {
  constructor() {
    this.orbitals = [
      '1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', 
      '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'
    ];
    this.maxElectrons = { 's': 2, 'p': 6, 'd': 10, 'f': 14 };
    this.nobleGases = {
      2: 'He', 10: 'Ne', 18: 'Ar', 36: 'Kr', 54: 'Xe', 86: 'Rn'
    };
  }
  
  getConfig(atomicNumber) {
    let remaining = atomicNumber;
    let config = [];
    
    for (let orbital of this.orbitals) {
      if (remaining === 0) break;
      
      const orbitalType = orbital.slice(-1);
      const max = this.maxElectrons[orbitalType];
      const filled = Math.min(remaining, max);
      
      config.push(\`\${orbital}\${this.toSuperscript(filled)}\`);
      remaining -= filled;
    }
    
    return config.join(' ');
  }
  
  getNobleGasConfig(atomicNumber) {
    let coreElectrons = 0;
    let coreSymbol = '';
    
    for (let [electrons, symbol] of Object.entries(this.nobleGases)) {
      if (parseInt(electrons) < atomicNumber) {
        coreElectrons = parseInt(electrons);
        coreSymbol = symbol;
      }
    }
    
    if (coreElectrons === 0) return this.getConfig(atomicNumber);
    
    const remaining = atomicNumber - coreElectrons;
    const valenceConfig = this.getConfig(remaining);
    
    return \`[\${coreSymbol}] \${valenceConfig}\`;
  }
  
  toSuperscript(num) {
    const superscripts = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹'];
    return num.toString().split('').map(d => superscripts[d]).join('');
  }
}`
        }
      ]
    },
    {
      id: 'chem-periodic',
      title: 'Periodic Table × Data Structures',
      subtitle: 'Elements meet Databases',
      description: 'Build periodic table API and understand trends',
      icon: '🧪',
      difficulty: 'beginner',
      estimatedTime: '3-4 hours',
      prerequisites: [],
      subLevels: [
        {
          id: 'chem-per-1',
          title: 'Theory: Periodic Trends',
          type: 'theory',
          videoId: 'WCPf-VqEYdw',
          content: {
            concepts: [
              'Atomic Radius: Decreases across period, increases down group',
              'Ionization Energy: Increases across period, decreases down group',
              'Electronegativity: Increases across period, decreases down group',
              'Metallic Character: Decreases across period, increases down group'
            ]
          }
        }
      ]
    },
    {
      id: 'chem-bonding',
      title: 'Chemical Bonding × Graph Theory',
      subtitle: 'Molecules meet Networks',
      description: 'Visualize molecular structures using graph algorithms',
      icon: '🔗',
      difficulty: 'intermediate',
      estimatedTime: '5-6 hours',
      prerequisites: ['chem-atomic'],
      subLevels: [
        {
          id: 'chem-bond-1',
          title: 'Theory: Types of Bonds',
          type: 'theory',
          videoId: 'CGA8sRwqIFg',
          content: {
            concepts: [
              'Ionic Bond: Transfer of electrons (metal + non-metal)',
              'Covalent Bond: Sharing of electrons (non-metal + non-metal)',
              'Metallic Bond: Sea of electrons (metal + metal)',
              'Lewis Structures: Dot diagrams showing valence electrons',
              'VSEPR Theory: Predicting molecular geometry'
            ]
          }
        }
      ]
    }
  ],
  
  maths: [
    {
      id: 'math-calculus',
      title: 'Calculus × Machine Learning',
      subtitle: 'Derivatives meet Gradient Descent',
      description: 'Master calculus through neural network optimization',
      icon: '∫',
      difficulty: 'advanced',
      estimatedTime: '8-10 hours',
      prerequisites: [],
      subLevels: [
        {
          id: 'math-calc-1',
          title: 'Theory: Limits & Derivatives',
          type: 'theory',
          videoId: 'WUvTyaaNkzM',
          content: {
            concepts: [
              'Limit: Value function approaches as input approaches a point',
              'Derivative: Instantaneous rate of change, dy/dx = lim(h→0) [f(x+h)-f(x)]/h',
              'Power Rule: d/dx(xⁿ) = nxⁿ⁻¹',
              'Product Rule: d/dx(uv) = u(dv/dx) + v(du/dx)',
              'Quotient Rule: d/dx(u/v) = [v(du/dx) - u(dv/dx)] / v²',
              'Chain Rule: d/dx[f(g(x))] = f\'(g(x)) × g\'(x)',
              'Partial Derivatives: ∂f/∂x (treat other variables as constants)'
            ],
            applications: [
              'Finding maxima/minima: Set f\'(x) = 0',
              'Optimization in ML: Minimize loss function',
              'Gradient descent: θ = θ - α∇J(θ)',
              'Backpropagation in neural networks'
            ]
          }
        },
        {
          id: 'math-calc-2',
          title: 'Code: Gradient Descent Implementation',
          type: 'coding',
          description: 'Implement gradient descent from scratch with visualization',
          starterCode: `class GradientDescent {
  // TODO: Implement gradient descent optimizer
  minimize(f, df, x0, options = {}) {
    // f: function to minimize
    // df: derivative of f
    // x0: starting point
    // options: { learningRate, iterations, tolerance }
    
    const lr = options.learningRate || 0.01;
    const maxIter = options.iterations || 1000;
    const tol = options.tolerance || 1e-6;
    
    let x = x0;
    const history = [{ x, fx: f(x), gradient: df(x) }];
    
    for (let i = 0; i < maxIter; i++) {
      // TODO: Calculate gradient
      // TODO: Update x using gradient descent rule
      // TODO: Check convergence
      // TODO: Store history
    }
    
    return { x, history };
  }
  
  // TODO: Implement with momentum
  minimizeWithMomentum(f, df, x0, options = {}) {
    // Momentum helps escape local minima
    // v = β*v + (1-β)*gradient
    // x = x - lr*v
  }
}

// Test: Find minimum of f(x) = x² - 4x + 4
const gd = new GradientDescent();
const f = x => x**2 - 4*x + 4;
const df = x => 2*x - 4;
const result = gd.minimize(f, df, 0);
console.log('Minimum at x =', result.x); // Should be 2`,
          solution: `class GradientDescent {
  minimize(f, df, x0, options = {}) {
    const lr = options.learningRate || 0.01;
    const maxIter = options.iterations || 1000;
    const tol = options.tolerance || 1e-6;
    
    let x = x0;
    const history = [{ iteration: 0, x, fx: f(x), gradient: df(x) }];
    
    for (let i = 1; i <= maxIter; i++) {
      const gradient = df(x);
      x = x - lr * gradient;
      
      history.push({ iteration: i, x, fx: f(x), gradient });
      
      if (Math.abs(gradient) < tol) {
        console.log(\`Converged after \${i} iterations\`);
        break;
      }
    }
    
    return { x, finalValue: f(x), history };
  }
  
  minimizeWithMomentum(f, df, x0, options = {}) {
    const lr = options.learningRate || 0.01;
    const beta = options.momentum || 0.9;
    const maxIter = options.iterations || 1000;
    const tol = options.tolerance || 1e-6;
    
    let x = x0;
    let v = 0;
    const history = [{ iteration: 0, x, fx: f(x), velocity: v }];
    
    for (let i = 1; i <= maxIter; i++) {
      const gradient = df(x);
      v = beta * v + (1 - beta) * gradient;
      x = x - lr * v;
      
      history.push({ iteration: i, x, fx: f(x), velocity: v });
      
      if (Math.abs(gradient) < tol) break;
    }
    
    return { x, finalValue: f(x), history };
  }
}`
        },
        {
          id: 'math-calc-3',
          title: 'Project: Neural Network from Scratch',
          type: 'project',
          description: 'Build and train a neural network using calculus',
          requirements: [
            'Create 2-layer network (input → hidden → output)',
            'Implement forward propagation',
            'Implement backpropagation (chain rule)',
            'Train on XOR problem',
            'Visualize loss curve',
            'Achieve >95% accuracy'
          ],
          concepts: [
            'Forward pass: z = Wx + b, a = σ(z)',
            'Activation: sigmoid σ(x) = 1/(1+e⁻ˣ)',
            'Loss: MSE = (1/n)Σ(y - ŷ)²',
            'Backprop: ∂L/∂W = ∂L/∂a × ∂a/∂z × ∂z/∂W',
            'Weight update: W = W - α(∂L/∂W)'
          ]
        }
      ]
    },
    {
      id: 'math-linear',
      title: 'Linear Algebra × Computer Graphics',
      subtitle: 'Matrices meet 3D Rendering',
      description: 'Build 3D transformations using matrix operations',
      icon: '📐',
      difficulty: 'intermediate',
      estimatedTime: '6-7 hours',
      prerequisites: [],
      subLevels: [
        {
          id: 'math-lin-1',
          title: 'Theory: Matrices & Transformations',
          type: 'theory',
          videoId: 'kYB8IZa5AuE',
          content: {
            concepts: [
              'Matrix: Rectangular array of numbers',
              'Matrix Multiplication: (AB)ij = Σ Aik × Bkj',
              'Identity Matrix: I × A = A',
              'Inverse Matrix: A × A⁻¹ = I',
              'Determinant: Scalar value, det(A)',
              'Transformations: Translation, Rotation, Scaling'
            ]
          }
        }
      ]
    },
    {
      id: 'math-probability',
      title: 'Probability × Data Science',
      subtitle: 'Randomness meets Statistics',
      description: 'Master probability through Monte Carlo simulations',
      icon: '🎲',
      difficulty: 'intermediate',
      estimatedTime: '5-6 hours',
      prerequisites: [],
      subLevels: [
        {
          id: 'math-prob-1',
          title: 'Theory: Probability Basics',
          type: 'theory',
          videoId: 'uzkc-qNVoOk',
          content: {
            concepts: [
              'Probability: P(A) = favorable outcomes / total outcomes',
              'Addition Rule: P(A∪B) = P(A) + P(B) - P(A∩B)',
              'Multiplication Rule: P(A∩B) = P(A) × P(B|A)',
              'Conditional Probability: P(A|B) = P(A∩B) / P(B)',
              'Bayes Theorem: P(A|B) = P(B|A)P(A) / P(B)'
            ]
          }
        }
      ]
    }
  ],
  
  tech: [
    {
      id: 'tech-algorithms',
      title: 'Data Structures & Algorithms',
      subtitle: 'Core CS Fundamentals',
      description: 'Master DSA through competitive programming',
      icon: '💻',
      difficulty: 'intermediate',
      estimatedTime: '10-12 hours',
      prerequisites: [],
      subLevels: [
        {
          id: 'tech-algo-1',
          title: 'Theory: Big O Notation',
          type: 'theory',
          videoId: 'D6xkbGLQesk',
          content: {
            concepts: [
              'Time Complexity: How runtime grows with input size',
              'Space Complexity: How memory usage grows',
              'O(1): Constant time',
              'O(log n): Logarithmic (binary search)',
              'O(n): Linear (single loop)',
              'O(n log n): Linearithmic (merge sort)',
              'O(n²): Quadratic (nested loops)',
              'O(2ⁿ): Exponential (recursive fibonacci)'
            ]
          }
        }
      ]
    }
  ]
};

// ==================== PROGRESS MANAGEMENT ====================
function getProgress() {
  return JSON.parse(localStorage.getItem('progress') || '{}');
}

function saveProgress(progress) {
  localStorage.setItem('progress', JSON.stringify(progress));
}

function isLevelUnlocked(levelId, prerequisites) {
  if (!prerequisites || prerequisites.length === 0) return true;
  const progress = getProgress();
  return prerequisites.every(prereq => progress[prereq]?.completed);
}

function markSubLevelComplete(levelId, subLevelId) {
  const progress = getProgress();
  if (!progress[levelId]) {
    progress[levelId] = { subLevels: {}, completed: false };
  }
  progress[levelId].subLevels[subLevelId] = true;
  
  const level = findLevel(levelId);
  if (level) {
    const allComplete = level.subLevels.every(sl => progress[levelId].subLevels[sl.id]);
    if (allComplete) {
      progress[levelId].completed = true;
    }
  }
  
  saveProgress(progress);
}

function findLevel(levelId) {
  for (let subject of Object.values(learningData)) {
    const level = subject.find(l => l.id === levelId);
    if (level) return level;
  }
  return null;
}

// ==================== RENDER FUNCTIONS ====================
function renderHome() {
  const progress = getProgress();
  const totalLevels = Object.values(learningData).flat().length;
  const completedLevels = Object.values(progress).filter(p => p.completed).length;
  const totalSubLevels = Object.values(learningData).flat().reduce((sum, l) => sum + l.subLevels.length, 0);
  const completedSubLevels = Object.values(progress).reduce((sum, p) => sum + Object.keys(p.subLevels || {}).length, 0);
  
  mainContent.innerHTML = `
    <div style="text-align: center; padding: 3rem 0;">
      <h1 style="font-size: 3.5rem; background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem;">
        🧠 PCM-JEE Journey Hub
      </h1>
      <p style="font-size: 1.3rem; color: var(--text-secondary); margin-bottom: 3rem;">
        Where Physics × Chemistry × Maths × Technology Converge Into Deep Learning
      </p>
      
      <div class="grid-4" style="max-width: 1200px; margin: 0 auto 3rem;">
        <div class="stat-card">
          <div class="stat-number">${completedLevels}/${totalLevels}</div>
          <div class="stat-label">Modules Mastered</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${completedSubLevels}/${totalSubLevels}</div>
          <div class="stat-label">Challenges Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${musicData.length}</div>
          <div class="stat-label">Study Tracks</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${Math.round((completedLevels/totalLevels)*100)}%</div>
          <div class="stat-label">Overall Progress</div>
        </div>
      </div>
      
      <div class="card" style="max-width: 900px; margin: 0 auto 2rem; text-align: left;">
        <h3 style="color: var(--accent); margin-bottom: 1.5rem;">🎯 Deep Learning Philosophy</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
          <div>
            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">📚 Theory Deep Dive</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Not just formulas - understand derivations, proofs, and WHY things work</p>
          </div>
          <div>
            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">💻 Code Implementation</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Build simulators, calculators, and visualizers from scratch</p>
          </div>
          <div>
            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🔬 Real Projects</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Create games, physics engines, and practical applications</p>
          </div>
          <div>
            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🧩 Problem Solving</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Tackle complex real-world scenarios that require deep thinking</p>
          </div>
        </div>
      </div>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
        <button class="btn btn-primary" onclick="loadPage('physics')" style="font-size: 1.1rem; padding: 1rem 2rem;">
          ⚛️ Start Physics Journey
        </button>
        <button class="btn btn-primary" onclick="loadPage('chemistry')" style="font-size: 1.1rem; padding: 1rem 2rem;">
          🧪 Explore Chemistry
        </button>
        <button class="btn btn-primary" onclick="loadPage('maths')" style="font-size: 1.1rem; padding: 1rem 2rem;">
          📐 Master Mathematics
        </button>
        <button class="btn btn-secondary" onclick="loadPage('music')" style="font-size: 1.1rem; padding: 1rem 2rem;">
          🎵 Study Music (${musicData.length} tracks)
        </button>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const progress = getProgress();
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">📊 Learning Dashboard</h2>
    
    <div class="grid-2">
      ${Object.entries(learningData).map(([subject, levels]) => {
        const completed = levels.filter(l => progress[l.id]?.completed).length;
        const total = levels.length;
        const percentage = total > 0 ? (completed / total) * 100 : 0;
        
        const subjectIcons = {
          physics: '⚛️ Physics',
          chemistry: '🧪 Chemistry',
          maths: '📐 Mathematics',
          tech: '💻 Technology'
        };
        
        return `
          <div class="card">
            <h3 style="color: var(--accent); margin-bottom: 1rem;">
              ${subjectIcons[subject]}
            </h3>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <p style="margin-top: 0.5rem; color: var(--text-secondary);">
              ${completed}/${total} Modules Completed (${Math.round(percentage)}%)
            </p>
            
            <div style="margin-top: 1.5rem;">
              ${levels.map(level => {
                const levelProgress = progress[level.id];
                const subCompleted = levelProgress ? Object.keys(levelProgress.subLevels || {}).length : 0;
                const subTotal = level.subLevels.length;
                const unlocked = isLevelUnlocked(level.id, level.prerequisites);
                
                return `
                  <div style="margin-bottom: 1rem; padding: 1rem; background: rgba(102, 126, 234, 0.1); border-radius: 10px; opacity: ${unlocked ? 1 : 0.5};">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <span>${level.icon} ${level.title} ${unlocked ? '' : '🔒'}</span>
                      <span style="color: var(--accent);">${subCompleted}/${subTotal}</span>
                    </div>
                    <div class="progress-bar" style="margin-top: 0.5rem; height: 4px;">
                      <div class="progress-fill" style="width: ${(subCompleted/subTotal)*100}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderPhysics() {
  renderSubject('physics', '⚛️ Physics × Technology');
}

function renderChemistry() {
  renderSubject('chemistry', '🧪 Chemistry × Computing');
}

function renderMaths() {
  renderSubject('maths', '📐 Mathematics × AI');
}

function renderTech() {
  renderSubject('tech', '💻 Pure Technology');
}

function renderSubject(subject, title) {
  const levels = learningData[subject] || [];
  const progress = getProgress();
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">${title}</h2>
    
    <div class="grid-2">
      ${levels.map(level => {
        const unlocked = isLevelUnlocked(level.id, level.prerequisites);
        const levelProgress = progress[level.id];
        const subCompleted = levelProgress ? Object.keys(levelProgress.subLevels || {}).length : 0;
        const subTotal = level.subLevels.length;
        const completed = levelProgress?.completed || false;
        
        return `
          <div class="level-card ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}" 
               onclick="${unlocked ? `openModule('${level.id}')` : ''}">
            <div class="level-header">
              <div style="font-size: 3rem;">${level.icon}</div>
              <div class="level-status">${completed ? '✅' : unlocked ? '🎯' : '🔒'}</div>
            </div>
            <h3 style="margin: 1rem 0 0.5rem;">${level.title}</h3>
            <p style="color: var(--accent); font-size: 0.9rem; margin-bottom: 0.5rem;">${level.subtitle}</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">${level.description}</p>
            
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
              <span class="concept-tag">${level.difficulty}</span>
              <span class="concept-tag">⏱️ ${level.estimatedTime}</span>
              <span class="concept-tag">${subCompleted}/${subTotal} tasks</span>
            </div>
            
            ${level.prerequisites.length > 0 ? `
              <div style="font-size: 0.85rem; color: var(--text-secondary);">
                Prerequisites: ${level.prerequisites.map(p => findLevel(p)?.title || p).join(', ')}
              </div>
            ` : ''}
            
            <div class="progress-bar" style="margin-top: 1rem;">
              <div class="progress-fill" style="width: ${(subCompleted/subTotal)*100}%"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function openModule(levelId) {
  const level = findLevel(levelId);
  if (!level) return;
  
  const progress = getProgress();
  const levelProgress = progress[levelId] || { subLevels: {}, completed: false };
  
  mainContent.innerHTML = `
    <button class="back-btn" onclick="loadPage('${Object.keys(learningData).find(k => learningData[k].includes(level))}')">
      ← Back
    </button>
    
    <div class="card">
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="font-size: 5rem; margin-bottom: 1rem;">${level.icon}</div>
        <h1 style="color: var(--accent);">${level.title}</h1>
        <p style="font-size: 1.2rem; color: var(--text-secondary);">${level.subtitle}</p>
        <p style="margin-top: 1rem;">${level.description}</p>
      </div>
      
      <div class="grid-3" style="margin-top: 2rem;">
        ${level.subLevels.map((subLevel, index) => {
          const completed = levelProgress.subLevels[subLevel.id] || false;
          const typeIcons = {
            theory: '📚',
            coding: '💻',
            project: '🔬',
            problems: '🧩'
          };
          
          return `
            <div class="level-card ${completed ? 'completed' : ''}" 
                 onclick="openSubLevel('${levelId}', '${subLevel.id}')">
              <div class="level-header">
                <div class="level-number">${index + 1}</div>
                <div class="level-status">${completed ? '✅' : typeIcons[subLevel.type]}</div>
              </div>
              <h4 style="margin-bottom: 0.5rem;">${subLevel.title}</h4>
              <span class="concept-tag">${subLevel.type}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function openSubLevel(levelId, subLevelId) {
  const level = findLevel(levelId);
  const subLevel = level.subLevels.find(sl => sl.id === subLevelId);
  
  if (subLevel.type === 'theory') {
    renderTheoryPage(levelId, subLevel);
  } else if (subLevel.type === 'coding') {
    renderCodingChallenge(levelId, subLevel);
  } else if (subLevel.type === 'project') {
    renderProject(levelId, subLevel);
  } else if (subLevel.type === 'problems') {
    renderProblems(levelId, subLevel);
  }
}

function renderTheoryPage(levelId, subLevel) {
  mainContent.innerHTML = `
    <button class="back-btn" onclick="openModule('${levelId}')">← Back to Module</button>
    
    <div class="card">
      <h1 style="color: var(--accent); margin-bottom: 1.5rem;">${subLevel.title}</h1>
      
      ${subLevel.videoId ? `
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/${subLevel.videoId}" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
        </div>
      ` : ''}
      
      <div class="notes-section">
        <h3>📝 Key Concepts</h3>
        <ul>
          ${subLevel.content.concepts.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
      
      ${subLevel.content.derivations ? `
        <div class="notes-section">
          <h3>🔬 Derivations</h3>
          ${subLevel.content.derivations.map(d => `
            <div style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(102, 126, 234, 0.1); border-radius: 10px;">
              <h4 style="color: var(--accent); margin-bottom: 1rem;">${d.title}</h4>
              <ol style="line-height: 2;">
                ${d.steps.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${subLevel.challenge ? `
        <div class="card" style="background: rgba(240, 147, 251, 0.1); border-color: var(--accent); margin-top: 2rem;">
          <h3 style="color: var(--accent); margin-bottom: 1rem;">🎯 Challenge</h3>
          <p style="font-size: 1.1rem; margin-bottom: 1rem;">${subLevel.challenge.question}</p>
          
          <div id="challenge-area">
            <button class="btn btn-secondary" onclick="document.getElementById('hint-area').style.display='block'">
              💡 Show Hint
            </button>
            <div id="hint-area" style="display: none; margin-top: 1rem; padding: 1rem; background: rgba(102, 126, 234, 0.2); border-radius: 10px;">
              ${subLevel.challenge.hint}
            </div>
            
            <textarea id="answer-input" 
                      placeholder="Write your derivation here..." 
                      style="width: 100%; min-height: 200px; margin-top: 1rem; padding: 1rem; background: rgba(15, 12, 41, 0.5); border: 2px solid var(--primary); border-radius: 10px; color: white; font-family: monospace; font-size: 1rem;"></textarea>
            
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
              <button class="btn btn-primary" onclick="checkDerivation('${levelId}', '${subLevel.id}')">
                ✓ Submit Answer
              </button>
              <button class="btn btn-secondary" onclick="showSolution('${subLevel.id}')">
                👁️ Show Solution
              </button>
            </div>
            
            <div id="solution-${subLevel.id}" style="display: none; margin-top: 1rem; padding: 1.5rem; background: rgba(74, 222, 128, 0.1); border: 2px solid var(--success); border-radius: 10px;">
              <h4 style="color: var(--success); margin-bottom: 1rem;">✓ Solution</h4>
              <ol style="line-height: 2;">
                ${subLevel.challenge.solution.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </div>
        </div>
      ` : ''}
      
      <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;" 
              onclick="markSubLevelComplete('${levelId}', '${subLevel.id}'); openModule('${levelId}')">
        Mark as Complete & Continue
      </button>
    </div>
  `;
}

function renderCodingChallenge(levelId, subLevel) {
  mainContent.innerHTML = `
    <button class="back-btn" onclick="openModule('${levelId}')">← Back to Module</button>
    
    <div class="card">
      <h1 style="color: var(--accent); margin-bottom: 1rem;">💻 ${subLevel.title}</h1>
      <p style="color: var(--text-secondary); margin-bottom: 2rem;">${subLevel.description}</p>
      
      <div class="grid-2" style="gap: 1rem;">
        <div>
          <h3 style="margin-bottom: 1rem;">📝 Your Code</h3>
          <textarea id="code-editor" 
                    style="width: 100%; min-height: 500px; padding: 1rem; background: #1e1e1e; border: 2px solid var(--primary); border-radius: 10px; color: #d4d4d4; font-family: 'Courier New', monospace; font-size: 0.9rem;">${subLevel.starterCode}</textarea>
          
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <button class="btn btn-primary" onclick="runCode('${levelId}', '${subLevel.id}')">
              ▶️ Run Code
            </button>
            <button class="btn btn-secondary" onclick="showCodeSolution('${subLevel.id}')">
              👁️ Show Solution
            </button>
          </div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 1rem;">📊 Output</h3>
          <div id="code-output" 
               style="width: 100%; min-height: 200px; padding: 1rem; background: #1e1e1e; border: 2px solid var(--primary); border-radius: 10px; color: #4ade80; font-family: 'Courier New', monospace; font-size: 0.9rem; overflow-y: auto;">
            Click "Run Code" to see output...
          </div>
          
          ${subLevel.testCases ? `
            <div style="margin-top: 1rem;">
              <h3 style="margin-bottom: 1rem;">✓ Test Cases</h3>
              <div id="test-results"></div>
            </div>
          ` : ''}
          
          <div id="solution-code-${subLevel.id}" style="display: none; margin-top: 1rem;">
            <h3 style="color: var(--success); margin-bottom: 1rem;">✓ Solution Code</h3>
            <pre style="background: #1e1e1e; padding: 1rem; border-radius: 10px; overflow-x: auto; color: #d4d4d4; font-size: 0.85rem;"><code>${subLevel.solution}</code></pre>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProject(levelId, subLevel) {
  mainContent.innerHTML = `
    <button class="back-btn" onclick="openModule('${levelId}')">← Back to Module</button>
    
    <div class="card">
      <h1 style="color: var(--accent); margin-bottom: 1rem;">🔬 ${subLevel.title}</h1>
      <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem;">${subLevel.description}</p>
      
      <div class="notes-section">
        <h3>📋 Requirements</h3>
        <ul>
          ${subLevel.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
      </div>
      
      ${subLevel.concepts ? `
        <div class="notes-section">
          <h3>🧠 Key Concepts to Use</h3>
          <ul>
            ${subLevel.concepts.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${subLevel.hints ? `
        <div class="notes-section">
          <h3>💡 Hints</h3>
          <ul>
            ${subLevel.hints.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${subLevel.starterHTML ? `
        <div class="notes-section">
          <h3>🚀 Starter Code</h3>
          <pre style="background: #1e1e1e; padding: 1rem; border-radius: 10px; overflow-x: auto; color: #d4d4d4; font-size: 0.85rem;"><code>${subLevel.starterHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      ` : ''}
      
      <div style="margin-top: 2rem; padding: 2rem; background: rgba(102, 126, 234, 0.1); border-radius: 15px; text-align: center;">
        <h3 style="color: var(--accent); margin-bottom: 1rem;">🚀 Build Your Project</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
          Use your favorite code editor or online IDE to build this project.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="https://codepen.io/pen/" target="_blank" class="btn btn-primary">Open CodePen</a>
          <a href="https://jsfiddle.net/" target="_blank" class="btn btn-primary">Open JSFiddle</a>
          <a href="https://stackblitz.com/" target="_blank" class="btn btn-primary">Open StackBlitz</a>
        </div>
      </div>
      
      <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;" 
              onclick="if(confirm('Have you completed this project?')) { markSubLevelComplete('${levelId}', '${subLevel.id}'); openModule('${levelId}'); }">
        ✓ Mark Project as Complete
      </button>
    </div>
  `;
}

function renderProblems(levelId, subLevel) {
  mainContent.innerHTML = `
    <button class="back-btn" onclick="openModule('${levelId}')">← Back to Module</button>
    
    <div class="card">
      <h1 style="color: var(--accent); margin-bottom: 2rem;">🧩 ${subLevel.title}</h1>
      
      ${subLevel.problems.map((problem, index) => `
        <div class="question" style="margin-bottom: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3>Problem ${index + 1}</h3>
            <span class="concept-tag">${problem.difficulty}</span>
          </div>
          
          <p style="font-size: 1.1rem; margin-bottom: 1.5rem; line-height: 1.8;">${problem.question}</p>
          
          <textarea id="problem-${index}" 
                    placeholder="Write your solution here..." 
                    style="width: 100%; min-height: 150px; padding: 1rem; background: rgba(15, 12, 41, 0.5); border: 2px solid var(--primary); border-radius: 10px; color: white; font-family: monospace; margin-bottom: 1rem;"></textarea>
          
          <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
            <button class="btn btn-secondary" onclick="document.getElementById('hint-${index}').style.display='block'">
              💡 Show Hints
            </button>
            <button class="btn btn-secondary" onclick="document.getElementById('solution-${index}').style.display='block'">
              👁️ Show Solution
            </button>
          </div>
          
          <div id="hint-${index}" style="display: none; margin-bottom: 1rem; padding: 1rem; background: rgba(102, 126, 234, 0.2); border-radius: 10px;">
            <strong>Hints:</strong>
            <ul>
              ${problem.hints.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
          
          <div id="solution-${index}" style="display: none; padding: 1.5rem; background: rgba(74, 222, 128, 0.1); border: 2px solid var(--success); border-radius: 10px;">
            <h4 style="color: var(--success); margin-bottom: 1rem;">✓ Solution</h4>
            <div style="margin-bottom: 1rem;">
              <strong>Steps:</strong>
              <ol style="line-height: 2; margin-top: 0.5rem;">
                ${problem.solution.steps.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
            <div style="padding: 1rem; background: rgba(74, 222, 128, 0.2); border-radius: 8px;">
              <strong>Answer:</strong> ${problem.solution.answer}
            </div>
          </div>
        </div>
      `).join('')}
      
      <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;" 
              onclick="markSubLevelComplete('${levelId}', '${subLevel.id}'); openModule('${levelId}')">
        ✓ Complete Problem Set
      </button>
    </div>
  `;
}

// ==================== HELPER FUNCTIONS ====================
function showSolution(subLevelId) {
  document.getElementById(`solution-${subLevelId}`).style.display = 'block';
}

function showCodeSolution(subLevelId) {
  document.getElementById(`solution-code-${subLevelId}`).style.display = 'block';
}

function checkDerivation(levelId, subLevelId) {
  const answer = document.getElementById('answer-input').value.trim();
  if (answer.length < 50) {
    alert('⚠️ Your derivation seems too short. Please provide detailed steps!');
    return;
  }
  alert('✓ Great effort! Review the solution to verify your approach.');
  markSubLevelComplete(levelId, subLevelId);
}

function runCode(levelId, subLevelId) {
  const code = document.getElementById('code-editor').value;
  const output = document.getElementById('code-output');
  
  const logs = [];
  const originalLog = console.log;
  console.log = (...args) => {
    logs.push(args.join(' '));
    originalLog(...args);
  };
  
  try {
    eval(code);
    output.innerHTML = logs.length > 0 ? logs.join('\n') : '✓ Code executed successfully (no output)';
    output.style.color = '#4ade80';
    
    const level = findLevel(levelId);
    const subLevel = level.subLevels.find(sl => sl.id === subLevelId);
    if (subLevel.testCases) {
      runTestCases(subLevel.testCases, code);
    }
  } catch (error) {
    output.innerHTML = `❌ Error: ${error.message}`;
    output.style.color = '#f87171';
  }
  
  console.log = originalLog;
}

function runTestCases(testCases, code) {
  const results = document.getElementById('test-results');
  let passed = 0;
  
  const html = testCases.map((test, i) => {
    try {
      eval(code);
      passed++;
      return `
        <div style="padding: 0.8rem; margin-bottom: 0.5rem; background: rgba(74, 222, 128, 0.2); border-left: 4px solid var(--success); border-radius: 8px;">
          ✓ Test ${i + 1} passed
        </div>
      `;
    } catch (e) {
      return `
        <div style="padding: 0.8rem; margin-bottom: 0.5rem; background: rgba(248, 113, 113, 0.2); border-left: 4px solid var(--danger); border-radius: 8px;">
          ✗ Test ${i + 1} failed: ${e.message}
        </div>
      `;
    }
  }).join('');
  
  results.innerHTML = `
    <div style="margin-bottom: 1rem; font-weight: bold; color: ${passed === testCases.length ? 'var(--success)' : 'var(--warning)'};">
      ${passed}/${testCases.length} tests passed
    </div>
    ${html}
  `;
}

// ==================== MUSIC PLAYER ====================
let currentSongIndex = 0;
let currentCategory = 'all';

function renderMusic() {
  const categories = ['all', 'lofi', 'motivation', 'hindi', 'classical', 'electronic', 'ambient', 'rock'];
  const categoryNames = {
    all: '🎵 All Tracks',
    lofi: '☕ Lofi & Study',
    motivation: '🔥 Motivation',
    hindi: '🇮🇳 Hindi Tracks',
    classical: '🎹 Classical',
    electronic: '⚡ Electronic',
    ambient: '🌙 Ambient',
    rock: '🎸 Rock'
  };
  
  mainContent.innerHTML = `
    <h2 style="margin-bottom: 2rem;">🎵 Study Music Sanctuary (${musicData.length} Tracks)</h2>
    
    <div class="music-player">
      <div class="player-main">
        <div class="album-art">
          <div class="vinyl-record" id="vinyl"></div>
          <div class="album-cover" id="album-cover">🎵</div>
        </div>
        <div style="text-align: center; width: 100%;">
          <h3 id="current-song">Select a track</h3>
          <p id="current-artist" style="color: var(--text-secondary);">Artist</p>
        </div>
        <div class="player-controls">
          <button class="control-btn" id="prev-btn">⏮️</button>
          <button class="control-btn play-btn" id="play-btn">▶️</button>
          <button class="control-btn" id="next-btn">⏭️</button>
        </div>
      </div>
      
      <div id="video-player" style="margin-top: 2rem;"></div>
    </div>
    
    <div class="card">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        ${categories.map(cat => `
          <button class="btn ${currentCategory === cat ? 'btn-primary' : 'btn-secondary'}" 
                  onclick="filterMusic('${cat}')" 
                  style="padding: 0.5rem 1rem;">
            ${categoryNames[cat]}
          </button>
        `).join('')}
      </div>
      
      <h3 style="margin-bottom: 1.5rem;">📻 Playlist</h3>
      <div class="playlist" id="playlist">
        ${renderPlaylist()}
      </div>
    </div>
  `;
  
  initMusicPlayer();
}

function renderPlaylist() {
  const filtered = currentCategory === 'all' 
    ? musicData 
    : musicData.filter(s => s.category === currentCategory);
  
  return filtered.map((song, i) => `
    <div class="song-item" onclick="playSong(${musicData.indexOf(song)})">
      <div>
        <h4>${song.title}</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">${song.artist} • ${song.duration}</p>
      </div>
      <div style="color: var(--accent);">▶️</div>
    </div>
  `).join('');
}

function filterMusic(category) {
  currentCategory = category;
  renderMusic();
}

function initMusicPlayer() {
  document.getElementById('play-btn').addEventListener('click', togglePlay);
  document.getElementById('next-btn').addEventListener('click', nextSong);
  document.getElementById('prev-btn').addEventListener('click', prevSong);
}

function playSong(index) {
  currentSongIndex = index;
  const song = musicData[index];
  
  document.getElementById('current-song').textContent = song.title;
  document.getElementById('current-artist').textContent = song.artist;
  document.getElementById('vinyl').classList.add('playing');
  
  document.getElementById('video-player').innerHTML = `
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/${song.videoId}?autoplay=1" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
    </div>
  `;
}

function togglePlay() {
  document.getElementById('vinyl').classList.toggle('playing');
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % musicData.length;
  playSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + musicData.length) % musicData.length;
  playSong(currentSongIndex);
}

// ==================== INITIALIZE ====================
loadPage('home');
console.log('🧠 PCM-JEE Journey Hub loaded successfully!');