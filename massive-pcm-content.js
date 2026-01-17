// ==================== MASSIVE PCM CONTENT - JEE COMPLETE SYLLABUS ====================

const massivePCMContent = {
  
  // ==================== PHYSICS (50+ CHAPTERS) ====================
  physics: {
    name: "Physics",
    totalChapters: 52,
    totalTopics: 300,
    totalProblems: 600,
    
    units: {
      // UNIT 1: MECHANICS (15 chapters)
      mechanics: {
        name: "Mechanics",
        chapters: [
          {
            id: "phy-mech-01",
            name: "Units and Measurements",
            topics: ["SI Units", "Dimensional Analysis", "Significant Figures", "Error Analysis", "Vernier Caliper", "Screw Gauge"],
            formulas: [
              "Dimensional formula: [M^a L^b T^c]",
              "Percentage error = (Δx/x) × 100",
              "Least count of vernier = 1 MSD - 1 VSD"
            ],
            problems: 25
          },
          {
            id: "phy-mech-02",
            name: "Motion in a Straight Line",
            topics: ["Displacement", "Velocity", "Acceleration", "Equations of Motion", "Graphs", "Relative Motion"],
            formulas: [
              "v = u + at",
              "s = ut + (1/2)at²",
              "v² = u² + 2as",
              "s_nth = u + (a/2)(2n-1)"
            ],
            problems: 40
          },
          {
            id: "phy-mech-03",
            name: "Motion in a Plane",
            topics: ["Vectors", "Projectile Motion", "Circular Motion", "Relative Velocity"],
            formulas: [
              "Range R = (u²sin2θ)/g",
              "Max height H = (u²sin²θ)/2g",
              "Time of flight T = (2usinθ)/g",
              "Centripetal acceleration a = v²/r = ω²r"
            ],
            problems: 45
          },
          {
            id: "phy-mech-04",
            name: "Laws of Motion",
            topics: ["Newton's Laws", "Friction", "Circular Motion", "Pseudo Forces"],
            formulas: [
              "F = ma",
              "f = μN",
              "F_centripetal = mv²/r",
              "Pseudo force = -ma"
            ],
            problems: 50
          },
          {
            id: "phy-mech-05",
            name: "Work, Energy and Power",
            topics: ["Work", "Kinetic Energy", "Potential Energy", "Conservation of Energy", "Power", "Collisions"],
            formulas: [
              "W = F·s = Fs cosθ",
              "KE = (1/2)mv²",
              "PE = mgh",
              "Power P = W/t = F·v",
              "e = (v₂-v₁)/(u₁-u₂)"
            ],
            problems: 55
          },
          {
            id: "phy-mech-06",
            name: "System of Particles and Rotational Motion",
            topics: ["Center of Mass", "Moment of Inertia", "Torque", "Angular Momentum", "Rolling Motion"],
            formulas: [
              "x_cm = Σm_ix_i/Σm_i",
              "I = Σm_ir_i²",
              "τ = r × F = Iα",
              "L = Iω",
              "KE_rolling = (1/2)mv² + (1/2)Iω²"
            ],
            problems: 50
          },
          {
            id: "phy-mech-07",
            name: "Gravitation",
            topics: ["Universal Law", "Gravitational Field", "Potential Energy", "Escape Velocity", "Satellites", "Kepler's Laws"],
            formulas: [
              "F = GMm/r²",
              "g = GM/R²",
              "PE = -GMm/r",
              "v_escape = √(2GM/R)",
              "v_orbital = √(GM/r)",
              "T² ∝ r³"
            ],
            problems: 45
          },
          {
            id: "phy-mech-08",
            name: "Mechanical Properties of Solids",
            topics: ["Stress", "Strain", "Hooke's Law", "Young's Modulus", "Bulk Modulus", "Shear Modulus", "Poisson's Ratio"],
            formulas: [
              "Stress = F/A",
              "Strain = ΔL/L",
              "Y = (F/A)/(ΔL/L)",
              "B = -P/(ΔV/V)",
              "η = G/ρ",
              "σ = -Δd/d / ΔL/L"
            ],
            problems: 35
          },
          {
            id: "phy-mech-09",
            name: "Mechanical Properties of Fluids",
            topics: ["Pressure", "Pascal's Law", "Archimedes' Principle", "Viscosity", "Surface Tension", "Bernoulli's Theorem"],
            formulas: [
              "P = F/A = ρgh",
              "F_buoyant = ρVg",
              "F = 6πηrv (Stokes' law)",
              "S = F/2l",
              "P + (1/2)ρv² + ρgh = constant"
            ],
            problems: 40
          },
          {
            id: "phy-mech-10",
            name: "Thermal Properties of Matter",
            topics: ["Temperature", "Heat", "Specific Heat", "Latent Heat", "Thermal Expansion", "Calorimetry"],
            formulas: [
              "Q = mcΔT",
              "Q = mL",
              "ΔL = αL₀ΔT",
              "ΔA = 2αA₀ΔT",
              "ΔV = 3αV₀ΔT"
            ],
            problems: 35
          },
          {
            id: "phy-mech-11",
            name: "Thermodynamics",
            topics: ["Zeroth Law", "First Law", "Second Law", "Heat Engines", "Carnot Cycle", "Entropy"],
            formulas: [
              "ΔU = Q - W",
              "W = PΔV",
              "η = 1 - T₂/T₁",
              "PV^γ = constant (adiabatic)",
              "ΔS = Q/T"
            ],
            problems: 45
          },
          {
            id: "phy-mech-12",
            name: "Kinetic Theory of Gases",
            topics: ["Ideal Gas", "Kinetic Energy", "Mean Free Path", "Degrees of Freedom", "Specific Heat"],
            formulas: [
              "PV = nRT",
              "KE_avg = (3/2)kT",
              "v_rms = √(3RT/M)",
              "λ = 1/(√2πnd²)",
              "C_p - C_v = R"
            ],
            problems: 40
          },
          {
            id: "phy-mech-13",
            name: "Oscillations",
            topics: ["SHM", "Spring-Mass System", "Pendulum", "Energy in SHM", "Damped Oscillations", "Forced Oscillations"],
            formulas: [
              "x = A sin(ωt + φ)",
              "v = Aω cos(ωt + φ)",
              "a = -Aω² sin(ωt + φ)",
              "T = 2π√(m/k)",
              "T = 2π√(l/g)",
              "E = (1/2)kA²"
            ],
            problems: 45
          },
          {
            id: "phy-mech-14",
            name: "Waves",
            topics: ["Wave Motion", "Sound Waves", "Doppler Effect", "Beats", "Standing Waves", "Resonance"],
            formulas: [
              "v = fλ",
              "y = A sin(kx - ωt)",
              "f' = f(v±v₀)/(v∓v_s)",
              "f_beat = |f₁ - f₂|",
              "f_n = nv/2L (open pipe)",
              "f_n = (2n-1)v/4L (closed pipe)"
            ],
            problems: 40
          },
          {
            id: "phy-mech-15",
            name: "Fluid Mechanics Advanced",
            topics: ["Equation of Continuity", "Torricelli's Theorem", "Venturi Meter", "Pitot Tube", "Magnus Effect"],
            formulas: [
              "A₁v₁ = A₂v₂",
              "v = √(2gh)",
              "P₁ - P₂ = (1/2)ρ(v₂² - v₁²)"
            ],
            problems: 30
          }
        ]
      },

      // UNIT 2: ELECTRICITY & MAGNETISM (18 chapters)
      electromagnetism: {
        name: "Electricity & Magnetism",
        chapters: [
          {
            id: "phy-em-01",
            name: "Electric Charges and Fields",
            topics: ["Coulomb's Law", "Electric Field", "Electric Flux", "Gauss's Law", "Electric Dipole"],
            formulas: [
              "F = kq₁q₂/r²",
              "E = F/q = kQ/r²",
              "φ = E·A = EA cosθ",
              "φ = q/ε₀ (Gauss)",
              "p = q × 2a",
              "τ = p × E"
            ],
            problems: 50
          },
          {
            id: "phy-em-02",
            name: "Electrostatic Potential and Capacitance",
            topics: ["Potential", "Potential Energy", "Equipotential Surfaces", "Capacitors", "Dielectrics"],
            formulas: [
              "V = kQ/r",
              "W = qV",
              "C = Q/V",
              "C = ε₀A/d (parallel plate)",
              "U = (1/2)CV²",
              "C_series = 1/C₁ + 1/C₂",
              "C_parallel = C₁ + C₂"
            ],
            problems: 55
          },
          {
            id: "phy-em-03",
            name: "Current Electricity",
            topics: ["Ohm's Law", "Resistance", "Kirchhoff's Laws", "Wheatstone Bridge", "Potentiometer", "Cells"],
            formulas: [
              "V = IR",
              "R = ρL/A",
              "P = VI = I²R = V²/R",
              "ΣI = 0 (KCL)",
              "ΣV = 0 (KVL)",
              "R_series = R₁ + R₂",
              "1/R_parallel = 1/R₁ + 1/R₂"
            ],
            problems: 60
          },
          {
            id: "phy-em-04",
            name: "Moving Charges and Magnetism",
            topics: ["Magnetic Force", "Biot-Savart Law", "Ampere's Law", "Solenoid", "Toroid", "Cyclotron"],
            formulas: [
              "F = qvB sinθ",
              "F = BIL sinθ",
              "dB = (μ₀/4π)(I dl sinθ)/r²",
              "B = μ₀nI (solenoid)",
              "r = mv/qB (cyclotron)",
              "f = qB/2πm"
            ],
            problems: 50
          },
          {
            id: "phy-em-05",
            name: "Magnetism and Matter",
            topics: ["Bar Magnet", "Magnetic Field Lines", "Earth's Magnetism", "Magnetic Materials", "Hysteresis"],
            formulas: [
              "M = m × 2l",
              "B = μ₀M/4πr³",
              "τ = M × B",
              "χ = M/H",
              "B = μ₀(H + M)"
            ],
            problems: 35
          },
          {
            id: "phy-em-06",
            name: "Electromagnetic Induction",
            topics: ["Faraday's Law", "Lenz's Law", "Motional EMF", "Self Induction", "Mutual Induction", "AC Generator"],
            formulas: [
              "ε = -dφ/dt",
              "ε = BLv",
              "ε = -L(dI/dt)",
              "ε = -M(dI/dt)",
              "L = μ₀n²Al",
              "M = μ₀n₁n₂Al"
            ],
            problems: 55
          },
          {
            id: "phy-em-07",
            name: "Alternating Current",
            topics: ["AC Voltage", "AC Current", "Phasors", "LCR Circuit", "Resonance", "Power Factor", "Transformer"],
            formulas: [
              "V = V₀ sinωt",
              "I = I₀ sin(ωt + φ)",
              "V_rms = V₀/√2",
              "X_L = ωL",
              "X_C = 1/ωC",
              "Z = √(R² + (X_L - X_C)²)",
              "tanφ = (X_L - X_C)/R",
              "P_avg = V_rms I_rms cosφ",
              "V_s/V_p = N_s/N_p"
            ],
            problems: 50
          },
          {
            id: "phy-em-08",
            name: "Electromagnetic Waves",
            topics: ["Maxwell's Equations", "Displacement Current", "EM Spectrum", "Wave Properties"],
            formulas: [
              "c = 1/√(μ₀ε₀)",
              "c = fλ",
              "I_d = ε₀(dφ_E/dt)",
              "E/B = c"
            ],
            problems: 30
          },
          {
            id: "phy-em-09",
            name: "Electric Circuits Advanced",
            topics: ["RC Circuits", "LR Circuits", "LC Oscillations", "Transients"],
            formulas: [
              "q = q₀(1 - e^(-t/RC))",
              "I = I₀e^(-Rt/L)",
              "ω = 1/√(LC)",
              "τ = RC or L/R"
            ],
            problems: 40
          },
          {
            id: "phy-em-10",
            name: "Magnetic Effects of Current",
            topics: ["Force Between Wires", "Magnetic Dipole", "Torque on Coil", "Moving Coil Galvanometer"],
            formulas: [
              "F/L = μ₀I₁I₂/2πd",
              "τ = NIAB sinθ",
              "I = (C/NAB)θ"
            ],
            problems: 35
          },
          {
            id: "phy-em-11",
            name: "Electromagnetic Induction Advanced",
            topics: ["Eddy Currents", "AC Generator", "DC Motor", "Back EMF"],
            formulas: [
              "ε_back = BLv",
              "P_loss = I²R"
            ],
            problems: 30
          },
          {
            id: "phy-em-12",
            name: "Network Theorems",
            topics: ["Thevenin's Theorem", "Norton's Theorem", "Superposition", "Maximum Power Transfer"],
            formulas: [
              "R_th = V_oc/I_sc",
              "P_max when R_L = R_th"
            ],
            problems: 25
          },
          {
            id: "phy-em-13",
            name: "Semiconductors",
            topics: ["Intrinsic", "Extrinsic", "p-n Junction", "Diode", "Transistor", "Logic Gates"],
            formulas: [
              "I = I₀(e^(eV/kT) - 1)",
              "β = I_C/I_B",
              "α = I_C/I_E"
            ],
            problems: 40
          },
          {
            id: "phy-em-14",
            name: "Communication Systems",
            topics: ["Modulation", "Amplitude Modulation", "Frequency Modulation", "Bandwidth", "Propagation"],
            formulas: [
              "m = (A_max - A_min)/(A_max + A_min)",
              "BW = 2f_m (AM)",
              "BW = 2(Δf + f_m) (FM)"
            ],
            problems: 25
          },
          {
            id: "phy-em-15",
            name: "Electrostatics Advanced",
            topics: ["Method of Images", "Multipole Expansion", "Boundary Conditions"],
            formulas: [
              "V_dipole = (1/4πε₀)(p cosθ/r²)",
              "E_dipole = (1/4πε₀)(2p cosθ/r³)"
            ],
            problems: 20
          },
          {
            id: "phy-em-16",
            name: "Magnetostatics Advanced",
            topics: ["Vector Potential", "Magnetic Monopoles", "Magnetic Circuits"],
            formulas: [
              "B = ∇ × A",
              "∇ · B = 0"
            ],
            problems: 20
          },
          {
            id: "phy-em-17",
            name: "Time-Varying Fields",
            topics: ["Faraday's Law Generalized", "Displacement Current", "Poynting Vector"],
            formulas: [
              "∇ × E = -∂B/∂t",
              "S = (1/μ₀)(E × B)"
            ],
            problems: 20
          },
          {
            id: "phy-em-18",
            name: "Electromagnetic Radiation",
            topics: ["Radiation from Accelerated Charges", "Dipole Radiation", "Antenna Theory"],
            formulas: [
              "P = (q²a²)/(6πε₀c³)",
              "I ∝ sin²θ"
            ],
            problems: 15
          }
        ]
      },

      // UNIT 3: OPTICS (10 chapters)
      optics: {
        name: "Optics",
        chapters: [
          {
            id: "phy-opt-01",
            name: "Ray Optics and Optical Instruments",
            topics: ["Reflection", "Refraction", "Snell's Law", "Total Internal Reflection", "Lenses", "Mirrors", "Prism"],
            formulas: [
              "n₁sinθ₁ = n₂sinθ₂",
              "1/f = 1/v - 1/u",
              "m = v/u = h'/h",
              "1/f = (n-1)(1/R₁ - 1/R₂)",
              "δ = (n-1)A",
              "sinθ_c = 1/n"
            ],
            problems: 60
          },
          {
            id: "phy-opt-02",
            name: "Wave Optics",
            topics: ["Huygens' Principle", "Interference", "Young's Double Slit", "Diffraction", "Polarization"],
            formulas: [
              "β = λD/d",
              "Path difference = d sinθ",
              "Constructive: Δx = nλ",
              "Destructive: Δx = (n+1/2)λ",
              "a sinθ = nλ (diffraction)",
              "I = I₀ cos²θ (Malus)"
            ],
            problems: 50
          },
          {
            id: "phy-opt-03",
            name: "Optical Instruments",
            topics: ["Microscope", "Telescope", "Eye", "Camera", "Spectrometer"],
            formulas: [
              "M = (v₀/u₀)(D/f_e)",
              "M = f₀/f_e",
              "P = 1/f (diopter)"
            ],
            problems: 35
          },
          {
            id: "phy-opt-04",
            name: "Interference Advanced",
            topics: ["Thin Films", "Newton's Rings", "Michelson Interferometer", "Fabry-Perot"],
            formulas: [
              "2μt cosθ = nλ",
              "r_n = √(nλR)",
              "Δ = 2d"
            ],
            problems: 30
          },
          {
            id: "phy-opt-05",
            name: "Diffraction Advanced",
            topics: ["Fraunhofer Diffraction", "Fresnel Diffraction", "Resolving Power", "Grating"],
            formulas: [
              "(a+b)sinθ = nλ",
              "R = λ/Δλ = nN",
              "R = D/1.22λ"
            ],
            problems: 30
          },
          {
            id: "phy-opt-06",
            name: "Polarization Advanced",
            topics: ["Brewster's Law", "Double Refraction", "Optical Activity", "Circular Polarization"],
            formulas: [
              "tanθ_B = n₂/n₁",
              "I = I₀ cos²θ"
            ],
            problems: 25
          },
          {
            id: "phy-opt-07",
            name: "Fiber Optics",
            topics: ["Total Internal Reflection", "Numerical Aperture", "Modes", "Dispersion"],
            formulas: [
              "NA = √(n₁² - n₂²)",
              "Acceptance angle = sin⁻¹(NA)"
            ],
            problems: 20
          },
          {
            id: "phy-opt-08",
            name: "Lasers",
            topics: ["Stimulated Emission", "Population Inversion", "Laser Types", "Applications"],
            formulas: [
              "E₂ - E₁ = hf",
              "λ = c/f"
            ],
            problems: 15
          },
          {
            id: "phy-opt-09",
            name: "Holography",
            topics: ["Interference Pattern", "3D Imaging", "Applications"],
            problems: 10
          },
          {
            id: "phy-opt-10",
            name: "Photometry",
            topics: ["Luminous Intensity", "Illuminance", "Luminous Flux", "Inverse Square Law"],
            formulas: [
              "E = I/r²",
              "Φ = 4πI"
            ],
            problems: 15
          }
        ]
      },

      // UNIT 4: MODERN PHYSICS (9 chapters)
      modernPhysics: {
        name: "Modern Physics",
        chapters: [
          {
            id: "phy-mod-01",
            name: "Dual Nature of Radiation and Matter",
            topics: ["Photoelectric Effect", "de Broglie Wavelength", "Davisson-Germer Experiment"],
            formulas: [
              "E = hf = hc/λ",
              "KE_max = hf - φ",
              "eV₀ = hf - φ",
              "λ = h/p = h/mv",
              "p = E/c"
            ],
            problems: 45
          },
          {
            id: "phy-mod-02",
            name: "Atoms",
            topics: ["Bohr Model", "Hydrogen Spectrum", "Energy Levels", "Atomic Spectra"],
            formulas: [
              "E_n = -13.6/n² eV",
              "r_n = n²r₀",
              "1/λ = R(1/n₁² - 1/n₂²)",
              "R = 1.097 × 10⁷ m⁻¹"
            ],
            problems: 40
          },
          {
            id: "phy-mod-03",
            name: "Nuclei",
            topics: ["Nuclear Structure", "Mass Defect", "Binding Energy", "Radioactivity", "Nuclear Reactions"],
            formulas: [
              "Δm = Zm_p + Nm_n - M",
              "BE = Δmc²",
              "N = N₀e^(-λt)",
              "t₁/₂ = 0.693/λ",
              "Q = (Δm)c²"
            ],
            problems: 45
          },
          {
            id: "phy-mod-04",
            name: "Semiconductor Electronics",
            topics: ["Intrinsic", "Extrinsic", "p-n Junction", "Diode", "Transistor", "Logic Gates"],
            formulas: [
              "I = I₀(e^(eV/kT) - 1)",
              "β = I_C/I_B",
              "α = I_C/I_E",
              "β = α/(1-α)"
            ],
            problems: 50
          },
          {
            id: "phy-mod-05",
            name: "X-rays",
            topics: ["Production", "Properties", "Bragg's Law", "Compton Effect"],
            formulas: [
              "λ_min = hc/eV",
              "2d sinθ = nλ",
              "Δλ = (h/m_ec)(1 - cosθ)"
            ],
            problems: 25
          },
          {
            id: "phy-mod-06",
            name: "Quantum Mechanics",
            topics: ["Wave Function", "Uncertainty Principle", "Schrödinger Equation", "Quantum Numbers"],
            formulas: [
              "ΔxΔp ≥ h/4π",
              "ΔEΔt ≥ h/4π",
              "Ψ²dV = probability"
            ],
            problems: 30
          },
          {
            id: "phy-mod-07",
            name: "Special Relativity",
            topics: ["Time Dilation", "Length Contraction", "Mass-Energy Equivalence", "Relativistic Momentum"],
            formulas: [
              "t' = γt",
              "L' = L/γ",
              "γ = 1/√(1 - v²/c²)",
              "E = mc²",
              "E² = (pc)² + (m₀c²)²"
            ],
            problems: 35
          },
          {
            id: "phy-mod-08",
            name: "Particle Physics",
            topics: ["Elementary Particles", "Quarks", "Leptons", "Bosons", "Standard Model"],
            formulas: [
              "Conservation laws",
              "Feynman diagrams"
            ],
            problems: 20
          },
          {
            id: "phy-mod-09",
            name: "Astrophysics",
            topics: ["Stars", "Galaxies", "Black Holes", "Cosmology", "Big Bang"],
            formulas: [
              "L = 4πR²σT⁴",
              "R_s = 2GM/c²",
              "H₀ = 70 km/s/Mpc"
            ],
            problems: 20
          }
        ]
      }
    }
  },

  // ==================== CHEMISTRY (45+ CHAPTERS) ====================
  chemistry: {
    name: "Chemistry",
    totalChapters: 47,
    totalTopics: 280,
    totalProblems: 550,
    
    units: {
      // PHYSICAL CHEMISTRY (15 chapters)
      physical: {
        name: "Physical Chemistry",
        chapters: [
          {
            id: "chem-phy-01",
            name: "Some Basic Concepts of Chemistry",
            topics: ["Mole Concept", "Stoichiometry", "Empirical Formula", "Molecular Formula", "Limiting Reagent"],
            formulas: [
              "n = m/M = V/22.4 = N/N_A",
              "% yield = (actual/theoretical) × 100",
              "Molarity M = n/V",
              "Molality m = n/W_kg"
            ],
            problems: 50
          },
          {
            id: "chem-phy-02",
            name: "Structure of Atom",
            topics: ["Atomic Models", "Quantum Numbers", "Electronic Configuration", "Aufbau Principle", "Hund's Rule"],
            formulas: [
              "E = -13.6/n² eV",
              "1/λ = R(1/n₁² - 1/n₂²)",
              "λ = h/mv",
              "ΔxΔp ≥ h/4π"
            ],
            problems: 45
          },
          {
            id: "chem-phy-03",
            name: "Classification of Elements and Periodicity",
            topics: ["Periodic Table", "Periodic Trends", "Ionization Energy", "Electron Affinity", "Electronegativity"],
            formulas: [
              "IE₁ < IE₂ < IE₃",
              "Atomic radius: Li > Na > K",
              "EN: F > O > N > Cl"
            ],
            problems: 35
          },
          {
            id: "chem-phy-04",
            name: "Chemical Bonding and Molecular Structure",
            topics: ["Ionic Bond", "Covalent Bond", "Lewis Structure", "VSEPR Theory", "Hybridization", "MOT"],
            formulas: [
              "Bond order = (Nb - Na)/2",
              "Dipole moment μ = q × d",
              "% ionic character = (observed/theoretical) × 100"
            ],
            problems: 55
          },
          {
            id: "chem-phy-05",
            name: "States of Matter: Gases and Liquids",
            topics: ["Gas Laws", "Ideal Gas Equation", "Kinetic Theory", "Real Gases", "Liquefaction"],
            formulas: [
              "PV = nRT",
              "P₁V₁/T₁ = P₂V₂/T₂",
              "v_rms = √(3RT/M)",
              "(P + an²/V²)(V - nb) = nRT"
            ],
            problems: 50
          },
          {
            id: "chem-phy-06",
            name: "Thermodynamics",
            topics: ["First Law", "Enthalpy", "Hess's Law", "Entropy", "Gibbs Energy", "Spontaneity"],
            formulas: [
              "ΔU = q + w",
              "ΔH = ΔU + PΔV",
              "ΔG = ΔH - TΔS",
              "ΔG < 0 (spontaneous)",
              "K = e^(-ΔG°/RT)"
            ],
            problems: 55
          },
          {
            id: "chem-phy-07",
            name: "Equilibrium",
            topics: ["Chemical Equilibrium", "Le Chatelier's Principle", "Kp and Kc", "Ionic Equilibrium", "pH"],
            formulas: [
              "K_c = [C]^c[D]^d/[A]^a[B]^b",
              "K_p = K_c(RT)^Δn",
              "pH = -log[H⁺]",
              "pOH = -log[OH⁻]",
              "pH + pOH = 14",
              "K_w = [H⁺][OH⁻] = 10⁻¹⁴"
            ],
            problems: 60
          },
          {
            id: "chem-phy-08",
            name: "Redox Reactions",
            topics: ["Oxidation Number", "Balancing Redox", "Electrochemical Series", "Nernst Equation"],
            formulas: [
              "E_cell = E°_cell - (RT/nF)lnQ",
              "E_cell = E°_cell - (0.059/n)logQ",
              "ΔG° = -nFE°_cell",
              "log K = nE°/0.059"
            ],
            problems: 50
          },
          {
            id: "chem-phy-09",
            name: "Hydrogen",
            topics: ["Position in Periodic Table", "Isotopes", "Hydrides", "Water", "Hydrogen Peroxide"],
            formulas: [
              "H₂O₂ → H₂O + ½O₂",
              "Volume strength = 11.2 × Molarity"
            ],
            problems: 25
          },
          {
            id: "chem-phy-10",
            name: "Chemical Kinetics",
            topics: ["Rate of Reaction", "Order", "Molecularity", "Arrhenius Equation", "Collision Theory"],
            formulas: [
              "Rate = k[A]^m[B]^n",
              "t₁/₂ = 0.693/k (first order)",
              "k = Ae^(-Ea/RT)",
              "log(k₂/k₁) = (Ea/2.303R)(1/T₁ - 1/T₂)"
            ],
            problems: 55
          },
          {
            id: "chem-phy-11",
            name: "Surface Chemistry",
            topics: ["Adsorption", "Catalysis", "Colloids", "Emulsions", "Micelles"],
            formulas: [
              "x/m = kP^(1/n) (Freundlich)",
              "x/m = aP/(1+bP) (Langmuir)"
            ],
            problems: 35
          },
          {
            id: "chem-phy-12",
            name: "Solutions",
            topics: ["Concentration Terms", "Raoult's Law", "Colligative Properties", "Osmosis", "Abnormal Molar Mass"],
            formulas: [
              "P = P°X",
              "ΔP = P°X_solute",
              "ΔT_b = K_b × m",
              "ΔT_f = K_f × m",
              "π = CRT",
              "i = (observed/calculated)"
            ],
            problems: 60
          },
          {
            id: "chem-phy-13",
            name: "Electrochemistry",
            topics: ["Conductance", "Kohlrausch's Law", "Electrolysis", "Batteries", "Fuel Cells", "Corrosion"],
            formulas: [
              "Λ_m = κ × 1000/M",
              "Λ°_m = λ°_+ + λ°_-",
              "W = ZIt = (E/96500)It",
              "E_cell = E°_cell - (0.059/n)logQ"
            ],
            problems: 50
          },
          {
            id: "chem-phy-14",
            name: "Solid State",
            topics: ["Crystal Lattice", "Unit Cell", "Packing Efficiency", "Defects", "Semiconductors"],
            formulas: [
              "Packing efficiency (fcc) = 74%",
              "Packing efficiency (bcc) = 68%",
              "Packing efficiency (hcp) = 74%",
              "d = √(h² + k² + l²) × a"
            ],
            problems: 40
          },
          {
            id: "chem-phy-15",
            name: "Nuclear Chemistry",
            topics: ["Radioactivity", "Half-life", "Nuclear Reactions", "Fission", "Fusion"],
            formulas: [
              "N = N₀e^(-λt)",
              "t₁/₂ = 0.693/λ",
              "E = Δmc²"
            ],
            problems: 30
          }
        ]
      },

      // INORGANIC CHEMISTRY (16 chapters)
      inorganic: {
        name: "Inorganic Chemistry",
        chapters: [
          {
            id: "chem-inorg-01",
            name: "s-Block Elements (Alkali and Alkaline Earth Metals)",
            topics: ["Group 1", "Group 2", "Properties", "Compounds", "Anomalous Behavior"],
            problems: 40
          },
          {
            id: "chem-inorg-02",
            name: "p-Block Elements - Group 13",
            topics: ["Boron Family", "Borax", "Boric Acid", "Diborane", "Aluminum"],
            problems: 35
          },
          {
            id: "chem-inorg-03",
            name: "p-Block Elements - Group 14",
            topics: ["Carbon Family", "Allotropes", "Silicones", "Silicates", "Zeolites"],
            problems: 35
          },
          {
            id: "chem-inorg-04",
            name: "p-Block Elements - Group 15",
            topics: ["Nitrogen Family", "Ammonia", "Nitric Acid", "Phosphorus", "Phosphine"],
            problems: 40
          },
          {
            id: "chem-inorg-05",
            name: "p-Block Elements - Group 16",
            topics: ["Oxygen Family", "Ozone", "Sulfur", "Sulfuric Acid", "Oxoacids"],
            problems: 40
          },
          {
            id: "chem-inorg-06",
            name: "p-Block Elements - Group 17",
            topics: ["Halogens", "HCl", "Interhalogen Compounds", "Oxoacids of Halogens"],
            problems: 40
          },
          {
            id: "chem-inorg-07",
            name: "p-Block Elements - Group 18",
            topics: ["Noble Gases", "Xenon Compounds", "Uses"],
            problems: 20
          },
          {
            id: "chem-inorg-08",
            name: "d and f Block Elements",
            topics: ["Transition Elements", "Properties", "Compounds", "Lanthanoids", "Actinoids"],
            problems: 45
          },
          {
            id: "chem-inorg-09",
            name: "Coordination Compounds",
            topics: ["Werner's Theory", "Nomenclature", "Isomerism", "Bonding", "Crystal Field Theory"],
            formulas: [
              "EAN = Z - oxidation state + 2×CN",
              "CFSE = -0.4Δ₀ × n_t2g + 0.6Δ₀ × n_eg"
            ],
            problems: 50
          },
          {
            id: "chem-inorg-10",
            name: "Metallurgy",
            topics: ["Occurrence", "Concentration", "Extraction", "Refining", "Thermodynamics"],
            problems: 35
          },
          {
            id: "chem-inorg-11",
            name: "Environmental Chemistry",
            topics: ["Air Pollution", "Water Pollution", "Soil Pollution", "Green Chemistry"],
            problems: 25
          },
          {
            id: "chem-inorg-12",
            name: "Qualitative Analysis",
            topics: ["Group Analysis", "Salt Analysis", "Flame Tests", "Confirmatory Tests"],
            problems: 30
          },
          {
            id: "chem-inorg-13",
            name: "Bioinorganic Chemistry",
            topics: ["Hemoglobin", "Chlorophyll", "Vitamin B12", "Metal Ions in Biology"],
            problems: 20
          },
          {
            id: "chem-inorg-14",
            name: "Organometallic Compounds",
            topics: ["Grignard Reagent", "Organolithium", "Ferrocene", "Wilkinson's Catalyst"],
            problems: 25
          },
          {
            id: "chem-inorg-15",
            name: "Acids, Bases and Salts",
            topics: ["Arrhenius", "Bronsted-Lowry", "Lewis", "Buffer Solutions", "Hydrolysis"],
            formulas: [
              "pH = pKa + log([A⁻]/[HA])",
              "Degree of hydrolysis h = √(Kh)"
            ],
            problems: 35
          },
          {
            id: "chem-inorg-16",
            name: "Extraction of Metals",
            topics: ["Ellingham Diagram", "Reduction", "Electrolytic Refining", "Zone Refining"],
            problems: 30
          }
        ]
      },

      // ORGANIC CHEMISTRY (16 chapters)
      organic: {
        name: "Organic Chemistry",
        chapters: [
          {
            id: "chem-org-01",
            name: "Basic Principles of Organic Chemistry",
            topics: ["IUPAC Nomenclature", "Isomerism", "Electronic Effects", "Reaction Mechanisms"],
            problems: 50
          },
          {
            id: "chem-org-02",
            name: "Hydrocarbons - Alkanes",
            topics: ["Preparation", "Properties", "Reactions", "Conformations"],
            problems: 40
          },
          {
            id: "chem-org-03",
            name: "Hydrocarbons - Alkenes",
            topics: ["Preparation", "Properties", "Addition Reactions", "Markovnikov's Rule"],
            problems: 45
          },
          {
            id: "chem-org-04",
            name: "Hydrocarbons - Alkynes",
            topics: ["Preparation", "Properties", "Reactions", "Acidity"],
            problems: 40
          },
          {
            id: "chem-org-05",
            name: "Aromatic Hydrocarbons",
            topics: ["Benzene", "Aromaticity", "Electrophilic Substitution", "Directing Effects"],
            problems: 50
          },
          {
            id: "chem-org-06",
            name: "Haloalkanes and Haloarenes",
            topics: ["Preparation", "SN1 and SN2", "Elimination", "Grignard Reagent"],
            problems: 55
          },
          {
            id: "chem-org-07",
            name: "Alcohols, Phenols and Ethers",
            topics: ["Preparation", "Properties", "Reactions", "Acidity of Phenols"],
            problems: 55
          },
          {
            id: "chem-org-08",
            name: "Aldehydes and Ketones",
            topics: ["Preparation", "Nucleophilic Addition", "Aldol Condensation", "Cannizzaro Reaction"],
            problems: 60
          },
          {
            id: "chem-org-09",
            name: "Carboxylic Acids and Derivatives",
            topics: ["Preparation", "Acidity", "Reactions", "Esters", "Amides"],
            problems: 55
          },
          {
            id: "chem-org-10",
            name: "Amines",
            topics: ["Preparation", "Basicity", "Reactions", "Diazonium Salts"],
            problems: 50
          },
          {
            id: "chem-org-11",
            name: "Biomolecules",
            topics: ["Carbohydrates", "Proteins", "Amino Acids", "Nucleic Acids", "Vitamins"],
            problems: 40
          },
          {
            id: "chem-org-12",
            name: "Polymers",
            topics: ["Classification", "Addition Polymers", "Condensation Polymers", "Rubber"],
            problems: 35
          },
          {
            id: "chem-org-13",
            name: "Chemistry in Everyday Life",
            topics: ["Drugs", "Antibiotics", "Antiseptics", "Detergents", "Food Preservatives"],
            problems: 25
          },
          {
            id: "chem-org-14",
            name: "Organic Compounds Containing Nitrogen",
            topics: ["Nitro Compounds", "Cyanides", "Isocyanides", "Amides"],
            problems: 35
          },
          {
            id: "chem-org-15",
            name: "Stereochemistry",
            topics: ["Optical Isomerism", "Geometrical Isomerism", "Conformational Isomerism", "R-S Configuration"],
            problems: 40
          },
          {
            id: "chem-org-16",
            name: "Organic Reaction Mechanisms",
            topics: ["Free Radical", "Electrophilic", "Nucleophilic", "Pericyclic Reactions"],
            problems: 45
          }
        ]
      }
    }
  },

  // ==================== MATHEMATICS (60+ CHAPTERS) ====================
  mathematics: {
    name: "Mathematics",
    totalChapters: 62,
    totalTopics: 350,
    totalProblems: 700,
    
    units: {
      // ALGEBRA (20 chapters)
      algebra: {
        name: "Algebra",
        chapters: [
          {
            id: "math-alg-01",
            name: "Sets, Relations and Functions",
            topics: ["Set Operations", "Relations", "Types of Functions", "Composition", "Inverse"],
            problems: 50
          },
          {
            id: "math-alg-02",
            name: "Complex Numbers",
            topics: ["Algebra", "Argand Plane", "Modulus", "Argument", "De Moivre's Theorem", "Roots of Unity"],
            formulas: [
              "z = x + iy",
              "|z| = √(x² + y²)",
              "arg(z) = tan⁻¹(y/x)",
              "(cosθ + isinθ)^n = cosnθ + isinnθ"
            ],
            problems: 60
          },
          {
            id: "math-alg-03",
            name: "Quadratic Equations",
            topics: ["Roots", "Nature of Roots", "Sum and Product", "Formation", "Inequalities"],
            formulas: [
              "x = (-b ± √(b² - 4ac))/2a",
              "D = b² - 4ac",
              "α + β = -b/a",
              "αβ = c/a"
            ],
            problems: 55
          },
          {
            id: "math-alg-04",
            name: "Sequences and Series",
            topics: ["AP", "GP", "HP", "AGP", "Sum to n terms", "Sum to infinity"],
            formulas: [
              "S_n = n/2[2a + (n-1)d]",
              "S_n = a(r^n - 1)/(r - 1)",
              "S_∞ = a/(1-r) for |r| < 1"
            ],
            problems: 60
          },
          {
            id: "math-alg-05",
            name: "Permutations and Combinations",
            topics: ["Fundamental Principle", "Permutations", "Combinations", "Circular Permutations"],
            formulas: [
              "^nP_r = n!/(n-r)!",
              "^nC_r = n!/[r!(n-r)!]",
              "^nC_r = ^nC_(n-r)",
              "Circular = (n-1)!"
            ],
            problems: 65
          },
          {
            id: "math-alg-06",
            name: "Binomial Theorem",
            topics: ["Expansion", "General Term", "Middle Term", "Binomial Coefficients"],
            formulas: [
              "(a+b)^n = Σ^nC_r a^(n-r) b^r",
              "T_(r+1) = ^nC_r a^(n-r) b^r",
              "Sum of coefficients = 2^n"
            ],
            problems: 55
          },
          {
            id: "math-alg-07",
            name: "Matrices",
            topics: ["Types", "Operations", "Transpose", "Determinants", "Inverse", "Rank"],
            formulas: [
              "|A| = ad - bc (2×2)",
              "A⁻¹ = adj(A)/|A|",
              "AA⁻¹ = I"
            ],
            problems: 60
          },
          {
            id: "math-alg-08",
            name: "Determinants",
            topics: ["Properties", "Minors", "Cofactors", "Expansion", "Applications"],
            formulas: [
              "|kA| = k^n|A|",
              "|AB| = |A||B|",
              "|A^T| = |A|"
            ],
            problems: 55
          },
          {
            id: "math-alg-09",
            name: "Probability",
            topics: ["Basic Concepts", "Addition Theorem", "Multiplication Theorem", "Conditional Probability", "Bayes' Theorem"],
            formulas: [
              "P(A∪B) = P(A) + P(B) - P(A∩B)",
              "P(A∩B) = P(A)P(B|A)",
              "P(A|B) = P(A∩B)/P(B)"
            ],
            problems: 65
          },
          {
            id: "math-alg-10",
            name: "Mathematical Induction",
            topics: ["Principle", "Divisibility", "Inequalities", "Summation"],
            problems: 40
          },
          {
            id: "math-alg-11",
            name: "Logarithms",
            topics: ["Laws", "Change of Base", "Exponential Equations", "Logarithmic Inequalities"],
            formulas: [
              "log_a(mn) = log_a m + log_a n",
              "log_a(m/n) = log_a m - log_a n",
              "log_a m^n = n log_a m",
              "log_b a = log_c a / log_c b"
            ],
            problems: 45
          },
          {
            id: "math-alg-12",
            name: "Theory of Equations",
            topics: ["Polynomial Equations", "Relation between Roots and Coefficients", "Symmetric Functions"],
            formulas: [
              "Σα = -b/a",
              "Σαβ = c/a",
              "αβγ = -d/a"
            ],
            problems: 50
          },
          {
            id: "math-alg-13",
            name: "Inequalities",
            topics: ["AM-GM-HM", "Cauchy-Schwarz", "Triangle Inequality", "Chebyshev's Inequality"],
            formulas: [
              "AM ≥ GM ≥ HM",
              "|a+b| ≤ |a| + |b|"
            ],
            problems: 40
          },
          {
            id: "math-alg-14",
            name: "Partial Fractions",
            topics: ["Linear Factors", "Repeated Factors", "Quadratic Factors"],
            problems: 35
          },
          {
            id: "math-alg-15",
            name: "Mathematical Reasoning",
            topics: ["Statements", "Logical Connectives", "Quantifiers", "Validity"],
            problems: 30
          },
          {
            id: "math-alg-16",
            name: "Statistics",
            topics: ["Mean", "Median", "Mode", "Variance", "Standard Deviation", "Correlation"],
            formulas: [
              "Mean = Σx/n",
              "Variance σ² = Σ(x-μ)²/n",
              "SD σ = √variance",
              "r = Σ(x-x̄)(y-ȳ)/√[Σ(x-x̄)²Σ(y-ȳ)²]"
            ],
            problems: 45
          },
          {
            id: "math-alg-17",
            name: "Linear Programming",
            topics: ["Formulation", "Graphical Method", "Feasible Region", "Optimization"],
            problems: 35
          },
          {
            id: "math-alg-18",
            name: "Boolean Algebra",
            topics: ["Operations", "Laws", "De Morgan's Laws", "Logic Gates"],
            problems: 25
          },
          {
            id: "math-alg-19",
            name: "Group Theory Basics",
            topics: ["Groups", "Subgroups", "Cyclic Groups", "Permutation Groups"],
            problems: 20
          },
          {
            id: "math-alg-20",
            name: "Number Theory",
            topics: ["Divisibility", "GCD", "LCM", "Modular Arithmetic", "Fermat's Theorem"],
            formulas: [
              "a ≡ b (mod m)",
              "a^(p-1) ≡ 1 (mod p)"
            ],
            problems: 35
          }
        ]
      },

      // CALCULUS (22 chapters)
      calculus: {
        name: "Calculus",
        chapters: [
          {
            id: "math-calc-01",
            name: "Limits",
            topics: ["Definition", "Evaluation", "L'Hospital's Rule", "Indeterminate Forms", "Sandwich Theorem"],
            formulas: [
              "lim(x→0) sinx/x = 1",
              "lim(x→0) (1-cosx)/x = 0",
              "lim(x→∞) (1 + 1/x)^x = e"
            ],
            problems: 60
          },
          {
            id: "math-calc-02",
            name: "Continuity",
            topics: ["Definition", "Types of Discontinuity", "Intermediate Value Theorem"],
            problems: 45
          },
          {
            id: "math-calc-03",
            name: "Differentiability",
            topics: ["Definition", "Relation with Continuity", "Differentiability of Functions"],
            problems: 40
          },
          {
            id: "math-calc-04",
            name: "Differentiation",
            topics: ["Rules", "Chain Rule", "Product Rule", "Quotient Rule", "Implicit Differentiation"],
            formulas: [
              "d/dx(x^n) = nx^(n-1)",
              "d/dx(sinx) = cosx",
              "d/dx(e^x) = e^x",
              "d/dx(lnx) = 1/x"
            ],
            problems: 70
          },
          {
            id: "math-calc-05",
            name: "Applications of Derivatives",
            topics: ["Tangent and Normal", "Rate of Change", "Increasing/Decreasing", "Maxima/Minima", "Rolle's Theorem", "LMVT"],
            formulas: [
              "Slope of tangent = dy/dx",
              "Slope of normal = -1/(dy/dx)"
            ],
            problems: 75
          },
          {
            id: "math-calc-06",
            name: "Indefinite Integration",
            topics: ["Standard Integrals", "Substitution", "Partial Fractions", "By Parts", "Special Integrals"],
            formulas: [
              "∫x^n dx = x^(n+1)/(n+1) + C",
              "∫e^x dx = e^x + C",
              "∫(1/x) dx = ln|x| + C",
              "∫sinx dx = -cosx + C"
            ],
            problems: 80
          },
          {
            id: "math-calc-07",
            name: "Definite Integration",
            topics: ["Properties", "Leibnitz Rule", "Reduction Formulas", "Gamma and Beta Functions"],
            formulas: [
              "∫[a to b] f(x)dx = F(b) - F(a)",
              "∫[a to b] f(x)dx = ∫[a to b] f(a+b-x)dx",
              "∫[0 to a] f(x)dx = ∫[0 to a] f(a-x)dx"
            ],
            problems: 75
          },
          {
            id: "math-calc-08",
            name: "Area Under Curves",
            topics: ["Area between Curve and Axis", "Area between Two Curves", "Parametric Forms"],
            formulas: [
              "A = ∫[a to b] y dx",
              "A = ∫[a to b] |f(x) - g(x)| dx"
            ],
            problems: 55
          },
          {
            id: "math-calc-09",
            name: "Differential Equations",
            topics: ["Order and Degree", "Variable Separable", "Homogeneous", "Linear", "Exact"],
            formulas: [
              "dy/dx + Py = Q",
              "IF = e^(∫P dx)",
              "Solution: y(IF) = ∫Q(IF) dx + C"
            ],
            problems: 65
          },
          {
            id: "math-calc-10",
            name: "Higher Order Derivatives",
            topics: ["nth Derivative", "Leibnitz Theorem", "Parametric Forms"],
            problems: 40
          },
          {
            id: "math-calc-11",
            name: "Mean Value Theorems",
            topics: ["Rolle's Theorem", "Lagrange's MVT", "Cauchy's MVT", "Taylor's Theorem"],
            problems: 35
          },
          {
            id: "math-calc-12",
            name: "Curve Sketching",
            topics: ["Asymptotes", "Concavity", "Points of Inflection", "Curvature"],
            problems: 30
          },
          {
            id: "math-calc-13",
            name: "Partial Derivatives",
            topics: ["First Order", "Second Order", "Chain Rule", "Euler's Theorem"],
            problems: 40
          },
          {
            id: "math-calc-14",
            name: "Maxima and Minima (Two Variables)",
            topics: ["Critical Points", "Second Derivative Test", "Lagrange Multipliers"],
            problems: 35
          },
          {
            id: "math-calc-15",
            name: "Multiple Integrals",
            topics: ["Double Integrals", "Triple Integrals", "Change of Variables"],
            problems: 40
          },
          {
            id: "math-calc-16",
            name: "Vector Calculus",
            topics: ["Gradient", "Divergence", "Curl", "Line Integrals", "Green's Theorem"],
            formulas: [
              "∇f = ∂f/∂x î + ∂f/∂y ĵ + ∂f/∂z k̂",
              "div F = ∇·F",
              "curl F = ∇×F"
            ],
            problems: 45
          },
          {
            id: "math-calc-17",
            name: "Sequences and Series (Calculus)",
            topics: ["Convergence", "Tests for Convergence", "Power Series", "Taylor Series"],
            formulas: [
              "e^x = 1 + x + x²/2! + x³/3! + ...",
              "sinx = x - x³/3! + x⁵/5! - ...",
              "cosx = 1 - x²/2! + x⁴/4! - ..."
            ],
            problems: 50
          },
          {
            id: "math-calc-18",
            name: "Improper Integrals",
            topics: ["Infinite Limits", "Unbounded Functions", "Convergence Tests"],
            problems: 35
          },
          {
            id: "math-calc-19",
            name: "Fourier Series",
            topics: ["Periodic Functions", "Fourier Coefficients", "Convergence"],
            problems: 30
          },
          {
            id: "math-calc-20",
            name: "Laplace Transforms",
            topics: ["Definition", "Properties", "Inverse Transform", "Applications to DEs"],
            formulas: [
              "L{f(t)} = ∫[0 to ∞] e^(-st) f(t) dt",
              "L{f'(t)} = sF(s) - f(0)"
            ],
            problems: 40
          },
          {
            id: "math-calc-21",
            name: "Numerical Methods",
            topics: ["Newton-Raphson", "Trapezoidal Rule", "Simpson's Rule", "Euler's Method"],
            problems: 30
          },
          {
            id: "math-calc-22",
            name: "Complex Analysis Basics",
            topics: ["Analytic Functions", "Cauchy-Riemann Equations", "Contour Integration"],
            problems: 25
          }
        ]
      },

      // COORDINATE GEOMETRY (12 chapters)
      coordinateGeometry: {
        name: "Coordinate Geometry",
        chapters: [
          {
            id: "math-cg-01",
            name: "Straight Lines",
            topics: ["Slope", "Equations", "Distance", "Angle between Lines", "Concurrent Lines"],
            formulas: [
              "m = (y₂-y₁)/(x₂-x₁)",
              "y - y₁ = m(x - x₁)",
              "d = |ax₁+by₁+c|/√(a²+b²)",
              "tanθ = |(m₁-m₂)/(1+m₁m₂)|"
            ],
            problems: 60
          },
          {
            id: "math-cg-02",
            name: "Circles",
            topics: ["Equation", "Tangent", "Normal", "Chord", "Pair of Tangents", "Radical Axis"],
            formulas: [
              "(x-h)² + (y-k)² = r²",
              "x² + y² + 2gx + 2fy + c = 0",
              "Tangent: xx₁ + yy₁ = r²"
            ],
            problems: 65
          },
          {
            id: "math-cg-03",
            name: "Parabola",
            topics: ["Standard Forms", "Focal Chord", "Tangent", "Normal", "Latus Rectum"],
            formulas: [
              "y² = 4ax",
              "Focus: (a, 0)",
              "Directrix: x = -a",
              "Latus rectum = 4a"
            ],
            problems: 60
          },
          {
            id: "math-cg-04",
            name: "Ellipse",
            topics: ["Standard Forms", "Eccentricity", "Foci", "Tangent", "Normal"],
            formulas: [
              "x²/a² + y²/b² = 1",
              "e = √(1 - b²/a²)",
              "Foci: (±ae, 0)",
              "b² = a²(1 - e²)"
            ],
            problems: 60
          },
          {
            id: "math-cg-05",
            name: "Hyperbola",
            topics: ["Standard Forms", "Eccentricity", "Asymptotes", "Tangent", "Normal"],
            formulas: [
              "x²/a² - y²/b² = 1",
              "e = √(1 + b²/a²)",
              "Asymptotes: y = ±(b/a)x",
              "b² = a²(e² - 1)"
            ],
            problems: 60
          },
          {
            id: "math-cg-06",
            name: "3D Geometry - Coordinates",
            topics: ["Distance Formula", "Section Formula", "Direction Cosines", "Direction Ratios"],
            formulas: [
              "d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]",
              "l² + m² + n² = 1",
              "cosα = l, cosβ = m, cosγ = n"
            ],
            problems: 50
          },
          {
            id: "math-cg-07",
            name: "3D Geometry - Lines",
            topics: ["Equation of Line", "Angle between Lines", "Shortest Distance", "Skew Lines"],
            formulas: [
              "(x-x₁)/l = (y-y₁)/m = (z-z₁)/n",
              "cosθ = |l₁l₂ + m₁m₂ + n₁n₂|"
            ],
            problems: 55
          },
          {
            id: "math-cg-08",
            name: "3D Geometry - Planes",
            topics: ["Equation of Plane", "Angle between Planes", "Distance from Point", "Line and Plane"],
            formulas: [
              "ax + by + cz + d = 0",
              "d = |ax₁+by₁+cz₁+d|/√(a²+b²+c²)"
            ],
            problems: 55
          },
          {
            id: "math-cg-09",
            name: "Polar Coordinates",
            topics: ["Conversion", "Polar Equations", "Area in Polar Form"],
            formulas: [
              "x = r cosθ",
              "y = r sinθ",
              "r² = x² + y²",
              "tanθ = y/x"
            ],
            problems: 35
          },
          {
            id: "math-cg-10",
            name: "Transformation of Axes",
            topics: ["Translation", "Rotation", "Invariants"],
            problems: 30
          },
          {
            id: "math-cg-11",
            name: "Locus",
            topics: ["Definition", "Equation of Locus", "Parametric Equations"],
            problems: 40
          },
          {
            id: "math-cg-12",
            name: "Sphere",
            topics: ["Equation", "Tangent Plane", "Great Circle", "Intersection with Line"],
            formulas: [
              "(x-a)² + (y-b)² + (z-c)² = r²",
              "x² + y² + z² + 2ux + 2vy + 2wz + d = 0"
            ],
            problems: 40
          }
        ]
      },

      // TRIGONOMETRY (8 chapters)
      trigonometry: {
        name: "Trigonometry",
        chapters: [
          {
            id: "math-trig-01",
            name: "Trigonometric Ratios and Identities",
            topics: ["Basic Ratios", "Fundamental Identities", "Allied Angles", "Compound Angles"],
            formulas: [
              "sin²θ + cos²θ = 1",
              "1 + tan²θ = sec²θ",
              "1 + cot²θ = csc²θ",
              "sin(A±B) = sinAcosB ± cosAsinB",
              "cos(A±B) = cosAcosB ∓ sinAsinB"
            ],
            problems: 70
          },
          {
            id: "math-trig-02",
            name: "Trigonometric Equations",
            topics: ["General Solutions", "Principal Solutions", "Conditional Identities"],
            formulas: [
              "sinθ = sinα ⟹ θ = nπ + (-1)ⁿα",
              "cosθ = cosα ⟹ θ = 2nπ ± α",
              "tanθ = tanα ⟹ θ = nπ + α"
            ],
            problems: 65
          },
          {
            id: "math-trig-03",
            name: "Inverse Trigonometric Functions",
            topics: ["Definitions", "Properties", "Graphs", "Equations"],
            formulas: [
              "sin⁻¹x + cos⁻¹x = π/2",
              "tan⁻¹x + cot⁻¹x = π/2",
              "tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)]"
            ],
            problems: 60
          },
          {
            id: "math-trig-04",
            name: "Heights and Distances",
            topics: ["Angle of Elevation", "Angle of Depression", "Applications"],
            problems: 45
          },
          {
            id: "math-trig-05",
            name: "Properties of Triangles",
            topics: ["Sine Rule", "Cosine Rule", "Projection Formula", "Area", "Circumradius", "Inradius"],
            formulas: [
              "a/sinA = b/sinB = c/sinC = 2R",
              "cosA = (b²+c²-a²)/2bc",
              "Area = (1/2)ab sinC",
              "Area = √[s(s-a)(s-b)(s-c)]",
              "r = (s-a)tanA/2"
            ],
            problems: 55
          },
          {
            id: "math-trig-06",
            name: "Multiple and Sub-multiple Angles",
            topics: ["Double Angle", "Triple Angle", "Half Angle", "Transformation Formulas"],
            formulas: [
              "sin2A = 2sinAcosA",
              "cos2A = cos²A - sin²A",
              "tan2A = 2tanA/(1-tan²A)",
              "sin3A = 3sinA - 4sin³A"
            ],
            problems: 50
          },
          {
            id: "math-trig-07",
            name: "Summation of Series",
            topics: ["Sum of Sines", "Sum of Cosines", "Sum of Tangents"],
            problems: 35
          },
          {
            id: "math-trig-08",
            name: "Hyperbolic Functions",
            topics: ["Definitions", "Identities", "Inverse Hyperbolic Functions"],
            formulas: [
              "sinhx = (e^x - e^(-x))/2",
              "coshx = (e^x + e^(-x))/2",
              "cosh²x - sinh²x = 1"
            ],
            problems: 30
          }
        ]
      }
    }
  }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = massivePCMContent;
}

console.log('✅ Massive PCM content loaded - 159 chapters total!');
