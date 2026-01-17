// Global Search Function
function globalSearch(event) {
  const query = event.target.value.toLowerCase();
  
  if (query.length < 2) return;
  
  const searchMap = {
    'physics': 'physics',
    'mechanics': 'physics',
    'electromagnetism': 'physics',
    'thermodynamics': 'physics',
    'chemistry': 'chemistry',
    'organic': 'chemistry',
    'inorganic': 'chemistry',
    'maths': 'maths',
    'mathematics': 'maths',
    'calculus': 'maths',
    'algebra': 'maths',
    'code': 'coding',
    'coding': 'coding',
    'programming': 'coding',
    'python': 'coding',
    'javascript': 'coding',
    'video': 'video-lectures',
    'lecture': 'video-lectures',
    'practice': 'practice',
    'problems': 'practice',
    'test': 'mock-tests',
    'mock': 'mock-tests',
    'simulator': 'simulators',
    'experiment': 'simulators',
    'calculator': 'calculators',
    'notes': 'notes',
    'flashcard': 'flashcards',
    'planner': 'study-planner',
    'schedule': 'study-planner',
    'achievement': 'achievements',
    'badge': 'achievements',
    'portfolio': 'portfolio',
    'blog': 'blog',
    'resume': 'resume',
    'cv': 'resume',
    'contact': 'contact',
    'project': 'projects',
    'tool': 'tech-tools',
    'visualizer': 'visualizers',
    'resource': 'resources',
    'music': 'music',
    'pomodoro': 'pomodoro',
    'timer': 'pomodoro'
  };
  
  for (const [keyword, section] of Object.entries(searchMap)) {
    if (query.includes(keyword)) {
      showSection(section);
      event.target.value = '';
      break;
    }
  }
}

window.globalSearch = globalSearch;
