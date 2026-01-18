// ==================== PCM × TECH CONTENT ====================
// Real content for Physics, Chemistry, Maths with Tech integration

const PCM_CONTENT = {
  physics: {
    name: "Physics",
    icon: "⚛️",
    chapters: [
      {
        id: 1,
        title: "Kinematics",
        topics: ["Motion in 1D", "Motion in 2D", "Projectile Motion", "Relative Velocity"],
        formulas: [
          { name: "Velocity", formula: "v = u + at", vars: "v=final, u=initial, a=acceleration, t=time" },
          { name: "Displacement", formula: "s = ut + ½at²", vars: "s=displacement" },
          { name: "Velocity-Displacement", formula: "v² = u² + 2as", vars: "" }
        ],
        techProject: {
          title: "🚀 Projectile Motion Simulator",
          description: "Build a JavaScript canvas animation showing projectile trajectory",
          code: `// Projectile Motion Simulator
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let angle = 45; // degrees
let velocity = 50; // m/s
const g = 9.8; // gravity

function drawProjectile() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const radians = angle * Math.PI / 180;
  const vx = velocity * Math.cos(radians);
  const vy = velocity * Math.sin(radians);
  
  const timeOfFlight = (2 * vy) / g;
  const range = vx * timeOfFlight;
  
  // Draw trajectory
  ctx.beginPath();
  for(let t = 0; t <= timeOfFlight; t += 0.1) {
    const x = vx * t;
    const y = vy * t - 0.5 * g * t * t;
    ctx.lineTo(x * 5, canvas.height - y * 5);
  }
  ctx.stroke();
}

drawProjectile();`
        },
        problems: [
          {
            q: "A car accelerates from 0 to 60 m/s in 10 seconds. Find acceleration.",
            solution: "a = (v-u)/t = (60-0)/10 = 6 m/s²",
            answer: "6 m/s²"
          },
          {
            q: "A ball is thrown upward with 20 m/s. Find max height. (g=10 m/s²)",
            solution: "v² = u² - 2gh, 0 = 400 - 20h, h = 20m",
            answer: "20 meters"
          }
        ]
      },
      {
        id: 2,
        title: "Newton's Laws",
        topics: ["First Law", "Second Law (F=ma)", "Third Law", "Friction"],
        formulas: [
          { name: "Force", formula: "F = ma", vars: "F=force, m=mass, a=acceleration" },
          { name: "Friction", formula: "f = μN", vars: "μ=coefficient, N=normal force" },
          { name: "Weight", formula: "W = mg", vars: "W=weight, g=gravity" }
        ],
        techProject: {
          title: "🎮 Force Calculator App",
          description: "Interactive calculator for Newton's laws",
          code: `function calculateForce(mass, acceleration) {
  return mass * acceleration;
}

function calculateFriction(mu, normalForce) {
  return mu * normalForce;
}

// Example usage
const force = calculateForce(10, 5); // 50 N
const friction = calculateFriction(0.3, 100); // 30 N

console.log('Force:', force, 'N');
console.log('Friction:', friction, 'N');`
        },
        problems: [
          {
            q: "A 5kg object accelerates at 2 m/s². Find the force.",
            solution: "F = ma = 5 × 2 = 10 N",
            answer: "10 N"
          }
        ]
      },
      {
        id: 3,
        title: "Work, Energy & Power",
        topics: ["Work", "Kinetic Energy", "Potential Energy", "Conservation"],
        formulas: [
          { name: "Work", formula: "W = F·d·cosθ", vars: "W=work, F=force, d=distance, θ=angle" },
          { name: "Kinetic Energy", formula: "KE = ½mv²", vars: "m=mass, v=velocity" },
          { name: "Potential Energy", formula: "PE = mgh", vars: "h=height, g=gravity" },
          { name: "Power", formula: "P = W/t", vars: "P=power, t=time" }
        ],
        techProject: {
          title: "⚡ Energy Conservation Visualizer",
          description: "Animate pendulum showing KE ↔ PE conversion",
          code: `class Pendulum {
  constructor(length, mass) {
    this.length = length;
    this.mass = mass;
    this.angle = Math.PI / 4; // 45 degrees
    this.velocity = 0;
    this.g = 9.8;
  }
  
  update(dt) {
    const acceleration = -(this.g / this.length) * Math.sin(this.angle);
    this.velocity += acceleration * dt;
    this.angle += this.velocity * dt;
  }
  
  getKE() {
    const v = this.velocity * this.length;
    return 0.5 * this.mass * v * v;
  }
  
  getPE() {
    const h = this.length * (1 - Math.cos(this.angle));
    return this.mass * this.g * h;
  }
  
  getTotalEnergy() {
    return this.getKE() + this.getPE();
  }
}

const pendulum = new Pendulum(1, 1);
console.log('Total Energy:', pendulum.getTotalEnergy());`
        }
      }
    ]
  },

  chemistry: {
    name: "Chemistry",
    icon: "🧪",
    chapters: [
      {
        id: 1,
        title: "Atomic Structure",
        topics: ["Bohr Model", "Quantum Numbers", "Electronic Configuration", "Orbitals"],
        formulas: [
          { name: "Energy of electron", formula: "E = -13.6/n²", vars: "n=principal quantum number" },
          { name: "Wavelength", formula: "λ = h/mv", vars: "h=Planck's constant, m=mass, v=velocity" }
        ],
        techProject: {
          title: "🔬 Periodic Table Interactive",
          description: "Build interactive periodic table with element data",
          code: `const elements = {
  H: { name: 'Hydrogen', atomicNumber: 1, mass: 1.008, config: '1s¹' },
  He: { name: 'Helium', atomicNumber: 2, mass: 4.003, config: '1s²' },
  Li: { name: 'Lithium', atomicNumber: 3, mass: 6.941, config: '[He] 2s¹' },
  // ... more elements
};

function getElementInfo(symbol) {
  return elements[symbol];
}

function getElectronicConfig(atomicNumber) {
  // Algorithm to generate electronic configuration
  const shells = [2, 8, 18, 32];
  let config = [];
  let remaining = atomicNumber;
  
  for(let i = 0; i < shells.length && remaining > 0; i++) {
    const electrons = Math.min(remaining, shells[i]);
    config.push(\`Shell \${i+1}: \${electrons}e⁻\`);
    remaining -= electrons;
  }
  
  return config.join(', ');
}

console.log(getElementInfo('H'));
console.log(getElectronicConfig(11)); // Sodium`
        },
        problems: [
          {
            q: "Find energy of electron in n=2 orbit of hydrogen.",
            solution: "E = -13.6/n² = -13.6/4 = -3.4 eV",
            answer: "-3.4 eV"
          }
        ]
      },
      {
        id: 2,
        title: "Chemical Bonding",
        topics: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"],
        formulas: [
          { name: "Lattice Energy", formula: "U = k(Q₁Q₂)/r", vars: "Q=charges, r=distance" }
        ],
        techProject: {
          title: "🔗 Molecule Builder",
          description: "Visualize molecular structures with Canvas/SVG",
          code: `class Molecule {
  constructor() {
    this.atoms = [];
    this.bonds = [];
  }
  
  addAtom(element, x, y) {
    this.atoms.push({ element, x, y });
  }
  
  addBond(atom1, atom2, type) {
    this.bonds.push({ atom1, atom2, type }); // single, double, triple
  }
  
  draw(ctx) {
    // Draw bonds
    this.bonds.forEach(bond => {
      const a1 = this.atoms[bond.atom1];
      const a2 = this.atoms[bond.atom2];
      ctx.beginPath();
      ctx.moveTo(a1.x, a1.y);
      ctx.lineTo(a2.x, a2.y);
      ctx.stroke();
    });
    
    // Draw atoms
    this.atoms.forEach(atom => {
      ctx.beginPath();
      ctx.arc(atom.x, atom.y, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillText(atom.element, atom.x-5, atom.y+5);
    });
  }
}

// Create H2O molecule
const water = new Molecule();
water.addAtom('O', 100, 100);
water.addAtom('H', 70, 130);
water.addAtom('H', 130, 130);
water.addBond(0, 1, 'single');
water.addBond(0, 2, 'single');`
        }
      },
      {
        id: 3,
        title: "Organic Chemistry",
        topics: ["Hydrocarbons", "Functional Groups", "Reactions", "Nomenclature"],
        reactions: [
          { name: "Combustion", equation: "CH₄ + 2O₂ → CO₂ + 2H₂O" },
          { name: "Substitution", equation: "CH₄ + Cl₂ → CH₃Cl + HCl" },
          { name: "Addition", equation: "C₂H₄ + H₂ → C₂H₆" }
        ],
        techProject: {
          title: "🧬 Organic Reaction Predictor",
          description: "Predict products of organic reactions",
          code: `class OrganicReaction {
  static combustion(hydrocarbon) {
    // CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O
    const match = hydrocarbon.match(/C(\\d+)H(\\d+)/);
    const c = parseInt(match[1]);
    const h = parseInt(match[2]);
    
    const o2 = c + h/4;
    const co2 = c;
    const h2o = h/2;
    
    return \`\${hydrocarbon} + \${o2}O₂ → \${co2}CO₂ + \${h2o}H₂O\`;
  }
  
  static substitution(alkane, halogen) {
    // Replace H with halogen
    return \`\${alkane} + \${halogen}₂ → Product + H\${halogen}\`;
  }
}

console.log(OrganicReaction.combustion('C3H8'));
// C3H8 + 5O₂ → 3CO₂ + 4H₂O`
        }
      }
    ]
  },

  maths: {
    name: "Mathematics",
    icon: "📐",
    chapters: [
      {
        id: 1,
        title: "Calculus - Differentiation",
        topics: ["Limits", "Derivatives", "Chain Rule", "Applications"],
        formulas: [
          { name: "Power Rule", formula: "d/dx(xⁿ) = nxⁿ⁻¹", vars: "" },
          { name: "Product Rule", formula: "d/dx(uv) = u'v + uv'", vars: "" },
          { name: "Chain Rule", formula: "d/dx(f(g(x))) = f'(g(x))·g'(x)", vars: "" }
        ],
        techProject: {
          title: "📊 Derivative Calculator",
          description: "Symbolic differentiation using JavaScript",
          code: `class Derivative {
  static power(coefficient, exponent) {
    return {
      coefficient: coefficient * exponent,
      exponent: exponent - 1
    };
  }
  
  static polynomial(terms) {
    // terms = [{coef: 3, exp: 2}, {coef: 5, exp: 1}, {coef: 2, exp: 0}]
    return terms.map(term => {
      if(term.exp === 0) return null;
      return this.power(term.coef, term.exp);
    }).filter(t => t !== null);
  }
  
  static evaluate(derivative, x) {
    return derivative.reduce((sum, term) => {
      return sum + term.coefficient * Math.pow(x, term.exponent);
    }, 0);
  }
}

// f(x) = 3x² + 5x + 2
const f = [{coef: 3, exp: 2}, {coef: 5, exp: 1}, {coef: 2, exp: 0}];
const fPrime = Derivative.polynomial(f);
// f'(x) = 6x + 5

console.log('f\\'(2) =', Derivative.evaluate(fPrime, 2)); // 17`
        },
        problems: [
          {
            q: "Find derivative of f(x) = 3x² + 5x + 2",
            solution: "f'(x) = 6x + 5",
            answer: "6x + 5"
          },
          {
            q: "Find derivative of sin(x²)",
            solution: "Using chain rule: 2x·cos(x²)",
            answer: "2x·cos(x²)"
          }
        ]
      },
      {
        id: 2,
        title: "Calculus - Integration",
        topics: ["Indefinite Integrals", "Definite Integrals", "Area Under Curve"],
        formulas: [
          { name: "Power Rule", formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C", vars: "n≠-1" },
          { name: "Definite Integral", formula: "∫ₐᵇ f(x)dx = F(b) - F(a)", vars: "F is antiderivative" }
        ],
        techProject: {
          title: "📈 Numerical Integration",
          description: "Implement Trapezoidal Rule and Simpson's Rule",
          code: `class Integration {
  static trapezoidal(f, a, b, n) {
    const h = (b - a) / n;
    let sum = (f(a) + f(b)) / 2;
    
    for(let i = 1; i < n; i++) {
      sum += f(a + i * h);
    }
    
    return h * sum;
  }
  
  static simpsons(f, a, b, n) {
    if(n % 2 !== 0) n++; // Must be even
    const h = (b - a) / n;
    let sum = f(a) + f(b);
    
    for(let i = 1; i < n; i++) {
      const x = a + i * h;
      sum += f(x) * (i % 2 === 0 ? 2 : 4);
    }
    
    return (h / 3) * sum;
  }
}

// Integrate x² from 0 to 1
const f = x => x * x;
console.log('Trapezoidal:', Integration.trapezoidal(f, 0, 1, 100));
console.log('Simpsons:', Integration.simpsons(f, 0, 1, 100));
// Exact answer: 1/3 = 0.333...`
        }
      },
      {
        id: 3,
        title: "Coordinate Geometry",
        topics: ["Straight Lines", "Circles", "Parabola", "Ellipse", "Hyperbola"],
        formulas: [
          { name: "Distance", formula: "d = √[(x₂-x₁)² + (y₂-y₁)²]", vars: "" },
          { name: "Slope", formula: "m = (y₂-y₁)/(x₂-x₁)", vars: "" },
          { name: "Circle", formula: "(x-h)² + (y-k)² = r²", vars: "center (h,k), radius r" }
        ],
        techProject: {
          title: "🎯 Geometry Visualizer",
          description: "Plot geometric shapes on canvas",
          code: `class GeometryPlotter {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
  }
  
  plotLine(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }
  
  plotCircle(h, k, r) {
    this.ctx.beginPath();
    this.ctx.arc(h, k, r, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
  
  plotParabola(a, h, k) {
    // y = a(x-h)² + k
    this.ctx.beginPath();
    for(let x = 0; x < this.width; x++) {
      const y = a * Math.pow(x - h, 2) + k;
      if(x === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();
  }
}

const plotter = new GeometryPlotter(canvas);
plotter.plotCircle(200, 200, 50);
plotter.plotParabola(0.01, 200, 100);`
        }
      }
    ]
  }
};

console.log('📚 PCM Content Loaded!');
console.log('⚛️ Physics:', PCM_CONTENT.physics.chapters.length, 'chapters');
console.log('🧪 Chemistry:', PCM_CONTENT.chemistry.chapters.length, 'chapters');
console.log('📐 Maths:', PCM_CONTENT.maths.chapters.length, 'chapters');
