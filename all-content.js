// ==================== COMPLETE CONTENT SYSTEM - INSTAGRAM LEVEL ====================

// ==================== PHYSICS CONTENT ====================
const physicsContent = {
  mechanics: {
    title: "Mechanics",
    chapters: [
      {
        name: "Kinematics",
        topics: ["Motion in 1D", "Motion in 2D", "Projectile Motion", "Relative Motion"],
        formulas: [
          "v = u + at",
          "s = ut + ½at²",
          "v² = u² + 2as",
          "Range = (u²sin2θ)/g"
        ],
        videos: [
          { title: "Kinematics Complete", url: "https://www.youtube.com/watch?v=ZM8ECpBuQYE", channel: "Physics Wallah" },
          { title: "Projectile Motion", url: "https://www.youtube.com/watch?v=6hwoRJGqXXs", channel: "Khan Academy" }
        ],
        problems: [
          { q: "A car accelerates from 10 m/s to 30 m/s in 5s. Find acceleration.", a: "4 m/s²", difficulty: "easy" },
          { q: "A ball is thrown at 20 m/s at 30°. Find max height.", a: "5.1 m", difficulty: "medium" }
        ]
      },
      {
        name: "Laws of Motion",
        topics: ["Newton's Laws", "Friction", "Circular Motion", "Work-Energy"],
        formulas: [
          "F = ma",
          "f = μN",
          "F_c = mv²/r",
          "W = F·s·cosθ"
        ],
        videos: [
          { title: "Newton's Laws", url: "https://www.youtube.com/watch?v=kKKM8Y-u7ds", channel: "Physics Wallah" },
          { title: "Friction Explained", url: "https://www.youtube.com/watch?v=fo_pmp5rtzo", channel: "Khan Academy" }
        ],
        problems: [
          { q: "A 5kg block on μ=0.3 surface. Find friction force.", a: "14.7 N", difficulty: "easy" },
          { q: "A car takes turn of radius 50m at 20 m/s. Find centripetal force if mass is 1000kg.", a: "8000 N", difficulty: "medium" }
        ]
      },
      {
        name: "Gravitation",
        topics: ["Universal Gravitation", "Kepler's Laws", "Satellites", "Escape Velocity"],
        formulas: [
          "F = GMm/r²",
          "g = GM/R²",
          "v_escape = √(2GM/R)",
          "T² ∝ r³"
        ],
        videos: [
          { title: "Gravitation Complete", url: "https://www.youtube.com/watch?v=7gf6YpdvtE0", channel: "Physics Wallah" }
        ],
        problems: [
          { q: "Find escape velocity from Earth (g=10m/s², R=6400km)", a: "11.3 km/s", difficulty: "medium" }
        ]
      }
    ]
  },
  thermodynamics: {
    title: "Thermodynamics",
    chapters: [
      {
        name: "Heat & Temperature",
        topics: ["Thermal Expansion", "Calorimetry", "Heat Transfer"],
        formulas: [
          "ΔL = αL₀ΔT",
          "Q = mcΔT",
          "Q/t = kA(T₁-T₂)/L"
        ],
        videos: [
          { title: "Thermodynamics Basics", url: "https://www.youtube.com/watch?v=NyOYW07-L5g", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Kinetic Theory",
        topics: ["Gas Laws", "Kinetic Energy", "Mean Free Path"],
        formulas: [
          "PV = nRT",
          "KE_avg = (3/2)kT",
          "v_rms = √(3RT/M)"
        ],
        videos: [
          { title: "Kinetic Theory", url: "https://www.youtube.com/watch?v=gNqGQ87oRLk", channel: "Khan Academy" }
        ]
      }
    ]
  },
  electromagnetism: {
    title: "Electromagnetism",
    chapters: [
      {
        name: "Electrostatics",
        topics: ["Coulomb's Law", "Electric Field", "Gauss Law", "Capacitance"],
        formulas: [
          "F = kq₁q₂/r²",
          "E = F/q",
          "C = Q/V",
          "U = ½CV²"
        ],
        videos: [
          { title: "Electrostatics Complete", url: "https://www.youtube.com/watch?v=x1-SibwIPM4", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Current Electricity",
        topics: ["Ohm's Law", "Kirchhoff's Laws", "RC Circuits"],
        formulas: [
          "V = IR",
          "P = VI = I²R",
          "R_s = R₁ + R₂",
          "1/R_p = 1/R₁ + 1/R₂"
        ],
        videos: [
          { title: "Current Electricity", url: "https://www.youtube.com/watch?v=VnnHRTJwJJk", channel: "Physics Wallah" }
        ]
      }
    ]
  },
  optics: {
    title: "Optics & Modern Physics",
    chapters: [
      {
        name: "Ray Optics",
        topics: ["Reflection", "Refraction", "Lenses", "Mirrors"],
        formulas: [
          "1/f = 1/v - 1/u",
          "n₁sinθ₁ = n₂sinθ₂",
          "m = v/u"
        ],
        videos: [
          { title: "Ray Optics", url: "https://www.youtube.com/watch?v=OH7Rrq2xwaE", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Modern Physics",
        topics: ["Photoelectric Effect", "Bohr Model", "Radioactivity"],
        formulas: [
          "E = hf",
          "λ = h/p",
          "E_n = -13.6/n² eV"
        ],
        videos: [
          { title: "Modern Physics", url: "https://www.youtube.com/watch?v=7KB1ua7TV9s", channel: "Physics Wallah" }
        ]
      }
    ]
  }
};

// ==================== CHEMISTRY CONTENT ====================
const chemistryContent = {
  physical: {
    title: "Physical Chemistry",
    chapters: [
      {
        name: "Atomic Structure",
        topics: ["Quantum Numbers", "Orbitals", "Electronic Configuration"],
        formulas: [
          "E = -13.6/n² eV",
          "λ = h/mv",
          "ΔE = hf"
        ],
        videos: [
          { title: "Atomic Structure", url: "https://www.youtube.com/watch?v=FmQoSenbtnU", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Chemical Bonding",
        topics: ["Ionic Bond", "Covalent Bond", "VSEPR Theory", "Hybridization"],
        formulas: [
          "Bond Order = (Nb - Na)/2",
          "Dipole Moment = q × d"
        ],
        videos: [
          { title: "Chemical Bonding", url: "https://www.youtube.com/watch?v=QqjcCvzWwgw", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Thermodynamics",
        topics: ["Enthalpy", "Entropy", "Gibbs Energy", "Hess Law"],
        formulas: [
          "ΔH = ΔU + PΔV",
          "ΔG = ΔH - TΔS",
          "ΔG° = -RTlnK"
        ],
        videos: [
          { title: "Thermodynamics", url: "https://www.youtube.com/watch?v=BhXNd7JqW-w", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Chemical Kinetics",
        topics: ["Rate Law", "Order of Reaction", "Arrhenius Equation"],
        formulas: [
          "Rate = k[A]^m[B]^n",
          "k = Ae^(-Ea/RT)",
          "t_1/2 = 0.693/k (1st order)"
        ],
        videos: [
          { title: "Chemical Kinetics", url: "https://www.youtube.com/watch?v=wYqQCojggyM", channel: "Physics Wallah" }
        ]
      }
    ]
  },
  organic: {
    title: "Organic Chemistry",
    chapters: [
      {
        name: "Basic Concepts",
        topics: ["IUPAC Nomenclature", "Isomerism", "GOC", "Reaction Mechanisms"],
        videos: [
          { title: "Organic Chemistry Basics", url: "https://www.youtube.com/watch?v=od-f3VGAsRs", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Hydrocarbons",
        topics: ["Alkanes", "Alkenes", "Alkynes", "Aromatic Compounds"],
        videos: [
          { title: "Hydrocarbons", url: "https://www.youtube.com/watch?v=kfg-BEBd4zI", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Functional Groups",
        topics: ["Alcohols", "Aldehydes", "Ketones", "Carboxylic Acids", "Amines"],
        videos: [
          { title: "Alcohols & Ethers", url: "https://www.youtube.com/watch?v=Hs5kXDz8qKE", channel: "Physics Wallah" }
        ]
      }
    ]
  },
  inorganic: {
    title: "Inorganic Chemistry",
    chapters: [
      {
        name: "Periodic Table",
        topics: ["Periodic Trends", "s-block", "p-block", "d-block", "f-block"],
        videos: [
          { title: "Periodic Table", url: "https://www.youtube.com/watch?v=0RRVV4Diomg", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Coordination Compounds",
        topics: ["Nomenclature", "Isomerism", "Bonding Theories", "Crystal Field Theory"],
        videos: [
          { title: "Coordination Chemistry", url: "https://www.youtube.com/watch?v=IFc5WQMFHQ8", channel: "Physics Wallah" }
        ]
      }
    ]
  }
};

// ==================== MATHEMATICS CONTENT ====================
const mathsContent = {
  algebra: {
    title: "Algebra",
    chapters: [
      {
        name: "Complex Numbers",
        topics: ["Basics", "Argand Plane", "De Moivre's Theorem", "Roots of Unity"],
        formulas: [
          "i² = -1",
          "z = r(cosθ + isinθ)",
          "|z| = √(x² + y²)",
          "arg(z) = tan⁻¹(y/x)"
        ],
        videos: [
          { title: "Complex Numbers", url: "https://www.youtube.com/watch?v=T647CGsuOVU", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Quadratic Equations",
        topics: ["Roots", "Nature of Roots", "Symmetric Functions", "Graphs"],
        formulas: [
          "x = (-b ± √(b²-4ac))/2a",
          "Sum of roots = -b/a",
          "Product of roots = c/a",
          "D = b² - 4ac"
        ],
        videos: [
          { title: "Quadratic Equations", url: "https://www.youtube.com/watch?v=i7idZfS8t8w", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Sequences & Series",
        topics: ["AP", "GP", "HP", "AGP", "Summation"],
        formulas: [
          "AP: a_n = a + (n-1)d",
          "GP: a_n = ar^(n-1)",
          "Sum of AP: S_n = n/2[2a + (n-1)d]",
          "Sum of GP: S_n = a(r^n - 1)/(r-1)"
        ],
        videos: [
          { title: "Sequences & Series", url: "https://www.youtube.com/watch?v=Tj89FA-d0f8", channel: "Physics Wallah" }
        ]
      }
    ]
  },
  calculus: {
    title: "Calculus",
    chapters: [
      {
        name: "Limits",
        topics: ["Definition", "L'Hospital Rule", "Sandwich Theorem", "Standard Limits"],
        formulas: [
          "lim(x→0) sinx/x = 1",
          "lim(x→0) (1+x)^(1/x) = e",
          "lim(x→∞) (1+1/x)^x = e"
        ],
        videos: [
          { title: "Limits", url: "https://www.youtube.com/watch?v=riXcZT2ICjA", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Differentiation",
        topics: ["First Principles", "Chain Rule", "Product Rule", "Implicit Differentiation"],
        formulas: [
          "d/dx(x^n) = nx^(n-1)",
          "d/dx(sinx) = cosx",
          "d/dx(e^x) = e^x",
          "d/dx(lnx) = 1/x"
        ],
        videos: [
          { title: "Differentiation", url: "https://www.youtube.com/watch?v=rAof9Ld5sOg", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Integration",
        topics: ["Indefinite", "Definite", "Substitution", "By Parts", "Partial Fractions"],
        formulas: [
          "∫x^n dx = x^(n+1)/(n+1) + C",
          "∫e^x dx = e^x + C",
          "∫1/x dx = ln|x| + C",
          "∫sinx dx = -cosx + C"
        ],
        videos: [
          { title: "Integration", url: "https://www.youtube.com/watch?v=rfG8ce4nNh0", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Differential Equations",
        topics: ["Variable Separable", "Homogeneous", "Linear DE", "Applications"],
        formulas: [
          "dy/dx + Py = Q",
          "IF = e^(∫P dx)"
        ],
        videos: [
          { title: "Differential Equations", url: "https://www.youtube.com/watch?v=6o7b9yyhH7k", channel: "Physics Wallah" }
        ]
      }
    ]
  },
  coordinate: {
    title: "Coordinate Geometry",
    chapters: [
      {
        name: "Straight Lines",
        topics: ["Slope", "Equations", "Distance", "Angle Between Lines"],
        formulas: [
          "Slope = (y₂-y₁)/(x₂-x₁)",
          "y - y₁ = m(x - x₁)",
          "Distance = √[(x₂-x₁)² + (y₂-y₁)²]"
        ],
        videos: [
          { title: "Straight Lines", url: "https://www.youtube.com/watch?v=qqqqqSKG-js", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Circles",
        topics: ["Standard Form", "General Form", "Tangent", "Normal"],
        formulas: [
          "(x-h)² + (y-k)² = r²",
          "x² + y² + 2gx + 2fy + c = 0"
        ],
        videos: [
          { title: "Circles", url: "https://www.youtube.com/watch?v=5V1UwJeRqGQ", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Conic Sections",
        topics: ["Parabola", "Ellipse", "Hyperbola"],
        formulas: [
          "Parabola: y² = 4ax",
          "Ellipse: x²/a² + y²/b² = 1",
          "Hyperbola: x²/a² - y²/b² = 1"
        ],
        videos: [
          { title: "Conic Sections", url: "https://www.youtube.com/watch?v=pzSyOTkAsY8", channel: "Physics Wallah" }
        ]
      }
    ]
  },
  trigonometry: {
    title: "Trigonometry",
    chapters: [
      {
        name: "Basics & Identities",
        topics: ["Ratios", "Identities", "Compound Angles", "Multiple Angles"],
        formulas: [
          "sin²θ + cos²θ = 1",
          "sin(A+B) = sinAcosB + cosAsinB",
          "cos2θ = cos²θ - sin²θ",
          "sin2θ = 2sinθcosθ"
        ],
        videos: [
          { title: "Trigonometry", url: "https://www.youtube.com/watch?v=PUB0TaZ7bhA", channel: "Physics Wallah" }
        ]
      },
      {
        name: "Inverse Trigonometry",
        topics: ["Domain & Range", "Properties", "Equations"],
        formulas: [
          "sin⁻¹x + cos⁻¹x = π/2",
          "tan⁻¹x + cot⁻¹x = π/2"
        ],
        videos: [
          { title: "Inverse Trigonometry", url: "https://www.youtube.com/watch?v=q5sSFYPnmPg", channel: "Physics Wallah" }
        ]
      }
    ]
  },
  vectors: {
    title: "Vectors & 3D Geometry",
    chapters: [
      {
        name: "Vectors",
        topics: ["Dot Product", "Cross Product", "Scalar Triple Product"],
        formulas: [
          "a·b = |a||b|cosθ",
          "a×b = |a||b|sinθ n̂",
          "[a b c] = a·(b×c)"
        ],
        videos: [
          { title: "Vectors", url: "https://www.youtube.com/watch?v=8QihetGj3pg", channel: "Physics Wallah" }
        ]
      },
      {
        name: "3D Geometry",
        topics: ["Direction Cosines", "Line", "Plane", "Shortest Distance"],
        formulas: [
          "l² + m² + n² = 1",
          "(x-x₁)/a = (y-y₁)/b = (z-z₁)/c"
        ],
        videos: [
          { title: "3D Geometry", url: "https://www.youtube.com/watch?v=tIpbYyR0kTA", channel: "Physics Wallah" }
        ]
      }
    ]
  }
};

// ==================== RENDER FUNCTIONS ====================

function renderSubjectContent(subject) {
  const content = subject === 'physics' ? physicsContent : 
                  subject === 'chemistry' ? chemistryContent : mathsContent;
  
  let html = `
    <div class="subject-container">
      <div class="subject-header">
        <h1>${subject.charAt(0).toUpperCase() + subject.slice(1)}</h1>
        <p>Complete ${subject} syllabus for JEE preparation</p>
      </div>
  `;
  
  for (const [key, section] of Object.entries(content)) {
    html += `
      <div class="section-card">
        <h2><i class="fas fa-book"></i> ${section.title}</h2>
        <div class="chapters-grid">
    `;
    
    section.chapters.forEach((chapter, idx) => {
      html += `
        <div class="chapter-card" onclick="openChapter('${subject}', '${key}', ${idx})">
          <h3>${chapter.name}</h3>
          <div class="chapter-stats">
            <span><i class="fas fa-list"></i> ${chapter.topics.length} Topics</span>
            ${chapter.formulas ? `<span><i class="fas fa-calculator"></i> ${chapter.formulas.length} Formulas</span>` : ''}
            ${chapter.videos ? `<span><i class="fas fa-video"></i> ${chapter.videos.length} Videos</span>` : ''}
            ${chapter.problems ? `<span><i class="fas fa-question-circle"></i> ${chapter.problems.length} Problems</span>` : ''}
          </div>
          <button class="btn-primary">Start Learning <i class="fas fa-arrow-right"></i></button>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  }
  
  html += `</div>`;
  return html;
}

function openChapter(subject, section, chapterIdx) {
  const content = subject === 'physics' ? physicsContent : 
                  subject === 'chemistry' ? chemistryContent : mathsContent;
  const chapter = content[section].chapters[chapterIdx];
  
  let html = `
    <div class="chapter-detail">
      <div class="chapter-header">
        <button class="btn-back" onclick="showSection('${subject}')">
          <i class="fas fa-arrow-left"></i> Back
        </button>
        <h1>${chapter.name}</h1>
      </div>
      
      <div class="chapter-content">
        <!-- Topics -->
        <div class="content-section">
          <h2><i class="fas fa-list"></i> Topics Covered</h2>
          <div class="topics-grid">
            ${chapter.topics.map(topic => `
              <div class="topic-chip">${topic}</div>
            `).join('')}
          </div>
        </div>
        
        ${chapter.formulas ? `
        <!-- Formulas -->
        <div class="content-section">
          <h2><i class="fas fa-calculator"></i> Important Formulas</h2>
          <div class="formulas-list">
            ${chapter.formulas.map(formula => `
              <div class="formula-card">
                <code>${formula}</code>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
        
        ${chapter.videos ? `
        <!-- Videos -->
        <div class="content-section">
          <h2><i class="fas fa-video"></i> Video Lectures</h2>
          <div class="videos-grid">
            ${chapter.videos.map(video => `
              <div class="video-card" onclick="window.open('${video.url}', '_blank')">
                <div class="video-thumbnail">
                  <i class="fas fa-play-circle"></i>
                </div>
                <h3>${video.title}</h3>
                <p>${video.channel}</p>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
        
        ${chapter.problems ? `
        <!-- Practice Problems -->
        <div class="content-section">
          <h2><i class="fas fa-pen"></i> Practice Problems</h2>
          <div class="problems-list">
            ${chapter.problems.map((prob, idx) => `
              <div class="problem-card">
                <div class="problem-header">
                  <span class="problem-number">Q${idx + 1}</span>
                  <span class="difficulty ${prob.difficulty}">${prob.difficulty}</span>
                </div>
                <p class="problem-question">${prob.q}</p>
                <button class="btn-secondary" onclick="toggleAnswer(${idx})">
                  Show Answer <i class="fas fa-eye"></i>
                </button>
                <div class="problem-answer" id="answer-${idx}" style="display: none;">
                  <strong>Answer:</strong> ${prob.a}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = html;
  
  // Award XP for opening chapter
  if (typeof awardXP === 'function') {
    awardXP(10, `Opened ${chapter.name}`);
  }
}

function toggleAnswer(idx) {
  const answerEl = document.getElementById(`answer-${idx}`);
  if (answerEl.style.display === 'none') {
    answerEl.style.display = 'block';
    if (typeof awardXP === 'function') {
      awardXP(5, 'Checked answer');
    }
  } else {
    answerEl.style.display = 'none';
  }
}

// Make functions global
window.renderSubjectContent = renderSubjectContent;
window.openChapter = openChapter;
window.toggleAnswer = toggleAnswer;

console.log('✅ Complete content system loaded with real Physics, Chemistry, Maths content!');
