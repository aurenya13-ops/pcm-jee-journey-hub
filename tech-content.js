// ==================== COMPREHENSIVE TECH CONTENT ====================

const techContent = {
  // ==================== WEB DEVELOPMENT ====================
  webDev: {
    name: "Web Development",
    icon: "fas fa-globe",
    color: "#00d4ff",
    
    roadmap: {
      beginner: [
        { name: "HTML Basics", duration: "1 week", topics: ["Tags", "Attributes", "Forms", "Semantic HTML"] },
        { name: "CSS Fundamentals", duration: "2 weeks", topics: ["Selectors", "Box Model", "Flexbox", "Grid"] },
        { name: "JavaScript Basics", duration: "3 weeks", topics: ["Variables", "Functions", "DOM", "Events"] },
        { name: "Responsive Design", duration: "1 week", topics: ["Media Queries", "Mobile-First", "Bootstrap"] }
      ],
      intermediate: [
        { name: "Advanced JavaScript", duration: "4 weeks", topics: ["ES6+", "Async/Await", "Promises", "Modules"] },
        { name: "React.js", duration: "4 weeks", topics: ["Components", "Hooks", "State", "Props", "Context"] },
        { name: "Node.js & Express", duration: "3 weeks", topics: ["Server", "APIs", "Middleware", "Authentication"] },
        { name: "Databases", duration: "2 weeks", topics: ["MongoDB", "PostgreSQL", "Prisma", "Supabase"] }
      ],
      advanced: [
        { name: "Next.js", duration: "3 weeks", topics: ["SSR", "SSG", "API Routes", "Deployment"] },
        { name: "TypeScript", duration: "2 weeks", topics: ["Types", "Interfaces", "Generics", "Decorators"] },
        { name: "Testing", duration: "2 weeks", topics: ["Jest", "React Testing Library", "E2E Testing"] },
        { name: "DevOps Basics", duration: "2 weeks", topics: ["Docker", "CI/CD", "AWS", "Vercel"] }
      ]
    },
    
    projects: [
      {
        name: "Portfolio Website",
        difficulty: "Beginner",
        duration: "3 days",
        tech: ["HTML", "CSS", "JavaScript"],
        features: ["Responsive Design", "Animations", "Contact Form", "Dark Mode"],
        github: "https://github.com/topics/portfolio-website"
      },
      {
        name: "Todo App with React",
        difficulty: "Beginner",
        duration: "5 days",
        tech: ["React", "LocalStorage", "CSS"],
        features: ["Add/Delete Tasks", "Mark Complete", "Filter", "Persist Data"],
        github: "https://github.com/topics/todo-app"
      },
      {
        name: "Weather App",
        difficulty: "Intermediate",
        duration: "1 week",
        tech: ["React", "API", "Axios"],
        features: ["Search City", "5-Day Forecast", "Geolocation", "Charts"],
        github: "https://github.com/topics/weather-app"
      },
      {
        name: "E-commerce Store",
        difficulty: "Intermediate",
        duration: "2 weeks",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        features: ["Product Catalog", "Cart", "Checkout", "Payment", "Admin Panel"],
        github: "https://github.com/topics/ecommerce"
      },
      {
        name: "Social Media Clone",
        difficulty: "Advanced",
        duration: "4 weeks",
        tech: ["Next.js", "PostgreSQL", "Prisma", "AWS S3"],
        features: ["Auth", "Posts", "Comments", "Likes", "Follow", "Real-time Chat"],
        github: "https://github.com/topics/social-media"
      },
      {
        name: "Video Streaming Platform",
        difficulty: "Advanced",
        duration: "6 weeks",
        tech: ["Next.js", "FFmpeg", "AWS", "Redis"],
        features: ["Upload", "Transcode", "Stream", "Comments", "Subscriptions"],
        github: "https://github.com/topics/video-streaming"
      }
    ],
    
    resources: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", type: "Documentation" },
      { name: "freeCodeCamp", url: "https://freecodecamp.org", type: "Interactive Course" },
      { name: "JavaScript.info", url: "https://javascript.info", type: "Tutorial" },
      { name: "React Docs", url: "https://react.dev", type: "Documentation" },
      { name: "Next.js Learn", url: "https://nextjs.org/learn", type: "Interactive Course" },
      { name: "Web Dev Simplified", url: "https://youtube.com/@WebDevSimplified", type: "YouTube" }
    ]
  },

  // ==================== DATA STRUCTURES & ALGORITHMS ====================
  dsa: {
    name: "DSA & Problem Solving",
    icon: "fas fa-brain",
    color: "#ff006e",
    
    roadmap: {
      beginner: [
        { name: "Arrays & Strings", duration: "2 weeks", topics: ["Two Pointers", "Sliding Window", "Prefix Sum"] },
        { name: "Searching & Sorting", duration: "2 weeks", topics: ["Binary Search", "Quick Sort", "Merge Sort"] },
        { name: "Basic Math", duration: "1 week", topics: ["GCD", "Prime Numbers", "Modular Arithmetic"] },
        { name: "Recursion", duration: "2 weeks", topics: ["Base Cases", "Backtracking", "Tree Recursion"] }
      ],
      intermediate: [
        { name: "Linked Lists", duration: "2 weeks", topics: ["Reversal", "Cycle Detection", "Merge Lists"] },
        { name: "Stacks & Queues", duration: "2 weeks", topics: ["Monotonic Stack", "Deque", "Priority Queue"] },
        { name: "Trees", duration: "3 weeks", topics: ["Traversals", "BST", "Segment Tree", "Fenwick Tree"] },
        { name: "Graphs", duration: "4 weeks", topics: ["DFS", "BFS", "Dijkstra", "Union Find"] }
      ],
      advanced: [
        { name: "Dynamic Programming", duration: "6 weeks", topics: ["Memoization", "Tabulation", "State Optimization"] },
        { name: "Advanced Graphs", duration: "3 weeks", topics: ["Bellman-Ford", "Floyd-Warshall", "Topological Sort"] },
        { name: "String Algorithms", duration: "2 weeks", topics: ["KMP", "Rabin-Karp", "Trie", "Suffix Array"] },
        { name: "Advanced Topics", duration: "4 weeks", topics: ["Bit Manipulation", "Game Theory", "Geometry"] }
      ]
    },
    
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com", problems: "3000+", difficulty: "Easy to Hard" },
      { name: "Codeforces", url: "https://codeforces.com", problems: "8000+", difficulty: "Competitive" },
      { name: "CodeChef", url: "https://codechef.com", problems: "5000+", difficulty: "All Levels" },
      { name: "HackerRank", url: "https://hackerrank.com", problems: "2000+", difficulty: "Interview Prep" },
      { name: "AtCoder", url: "https://atcoder.jp", problems: "3000+", difficulty: "Competitive" },
      { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", problems: "10000+", difficulty: "All Levels" }
    ],
    
    practiceSheets: [
      { name: "Striver's SDE Sheet", problems: 191, url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
      { name: "Blind 75", problems: 75, url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" },
      { name: "NeetCode 150", problems: 150, url: "https://neetcode.io/" },
      { name: "Love Babbar 450", problems: 450, url: "https://450dsa.com/" },
      { name: "Apna College DSA", problems: 400, url: "https://www.apnacollege.in/dsa-sheet" }
    ],
    
    resources: [
      { name: "Abdul Bari Algorithms", url: "https://youtube.com/@abdul_bari", type: "YouTube" },
      { name: "Striver (TakeUForward)", url: "https://youtube.com/@takeUforward", type: "YouTube" },
      { name: "NeetCode", url: "https://youtube.com/@NeetCode", type: "YouTube" },
      { name: "CP Algorithms", url: "https://cp-algorithms.com", type: "Documentation" },
      { name: "CSES Problem Set", url: "https://cses.fi/problemset/", type: "Practice" }
    ]
  },

  // ==================== MOBILE DEVELOPMENT ====================
  mobile: {
    name: "Mobile Development",
    icon: "fas fa-mobile-alt",
    color: "#00ff88",
    
    tracks: {
      android: {
        name: "Android (Kotlin)",
        roadmap: [
          { name: "Kotlin Basics", duration: "2 weeks", topics: ["Syntax", "OOP", "Coroutines", "Flow"] },
          { name: "Android Fundamentals", duration: "3 weeks", topics: ["Activities", "Fragments", "Intents", "Lifecycle"] },
          { name: "UI Development", duration: "3 weeks", topics: ["XML Layouts", "Jetpack Compose", "Material Design"] },
          { name: "Data & Storage", duration: "2 weeks", topics: ["Room DB", "SharedPreferences", "DataStore"] },
          { name: "Networking", duration: "2 weeks", topics: ["Retrofit", "OkHttp", "REST APIs"] },
          { name: "Advanced", duration: "4 weeks", topics: ["MVVM", "Dependency Injection", "Testing", "Publishing"] }
        ]
      },
      ios: {
        name: "iOS (Swift)",
        roadmap: [
          { name: "Swift Basics", duration: "2 weeks", topics: ["Syntax", "Optionals", "Closures", "Protocols"] },
          { name: "iOS Fundamentals", duration: "3 weeks", topics: ["UIKit", "View Controllers", "Navigation", "Lifecycle"] },
          { name: "SwiftUI", duration: "3 weeks", topics: ["Views", "State", "Bindings", "Animations"] },
          { name: "Data & Storage", duration: "2 weeks", topics: ["Core Data", "UserDefaults", "Keychain"] },
          { name: "Networking", duration: "2 weeks", topics: ["URLSession", "Alamofire", "Combine"] },
          { name: "Advanced", duration: "4 weeks", topics: ["MVVM", "Coordinator", "Testing", "App Store"] }
        ]
      },
      crossPlatform: {
        name: "Cross-Platform",
        options: [
          {
            name: "React Native",
            duration: "8 weeks",
            topics: ["React Basics", "Native Components", "Navigation", "Expo", "Publishing"],
            pros: ["JavaScript", "Large Community", "Hot Reload", "Web Skills Transfer"],
            cons: ["Performance", "Native Modules", "Large Bundle Size"]
          },
          {
            name: "Flutter",
            duration: "8 weeks",
            topics: ["Dart", "Widgets", "State Management", "Firebase", "Publishing"],
            pros: ["Fast Performance", "Beautiful UI", "Single Codebase", "Hot Reload"],
            cons: ["Dart Learning Curve", "Large App Size", "Limited Libraries"]
          }
        ]
      }
    },
    
    projects: [
      { name: "Calculator App", difficulty: "Beginner", duration: "3 days" },
      { name: "Weather App", difficulty: "Beginner", duration: "1 week" },
      { name: "Todo List with DB", difficulty: "Intermediate", duration: "1 week" },
      { name: "Chat App", difficulty: "Intermediate", duration: "2 weeks" },
      { name: "E-commerce App", difficulty: "Advanced", duration: "4 weeks" },
      { name: "Social Media App", difficulty: "Advanced", duration: "6 weeks" }
    ],
    
    resources: [
      { name: "Android Developers", url: "https://developer.android.com", type: "Official Docs" },
      { name: "Apple Developer", url: "https://developer.apple.com", type: "Official Docs" },
      { name: "React Native Docs", url: "https://reactnative.dev", type: "Documentation" },
      { name: "Flutter Docs", url: "https://flutter.dev", type: "Documentation" },
      { name: "Philipp Lackner", url: "https://youtube.com/@PhilippLackner", type: "YouTube (Android)" },
      { name: "Sean Allen", url: "https://youtube.com/@seanallen", type: "YouTube (iOS)" }
    ]
  },

  // ==================== DEVOPS & CLOUD ====================
  devops: {
    name: "DevOps & Cloud",
    icon: "fas fa-cloud",
    color: "#ffd60a",
    
    roadmap: [
      {
        phase: "Foundation",
        duration: "4 weeks",
        topics: [
          { name: "Linux Basics", subtopics: ["Commands", "File System", "Permissions", "Shell Scripting"] },
          { name: "Networking", subtopics: ["TCP/IP", "DNS", "HTTP/HTTPS", "Load Balancing"] },
          { name: "Git & GitHub", subtopics: ["Version Control", "Branching", "Merging", "CI/CD"] }
        ]
      },
      {
        phase: "Containerization",
        duration: "3 weeks",
        topics: [
          { name: "Docker", subtopics: ["Images", "Containers", "Volumes", "Networks", "Compose"] },
          { name: "Kubernetes", subtopics: ["Pods", "Services", "Deployments", "ConfigMaps", "Secrets"] }
        ]
      },
      {
        phase: "CI/CD",
        duration: "3 weeks",
        topics: [
          { name: "GitHub Actions", subtopics: ["Workflows", "Jobs", "Secrets", "Artifacts"] },
          { name: "Jenkins", subtopics: ["Pipelines", "Plugins", "Webhooks"] },
          { name: "GitLab CI", subtopics: ["Runners", "Stages", "Artifacts"] }
        ]
      },
      {
        phase: "Cloud Platforms",
        duration: "6 weeks",
        topics: [
          { name: "AWS", subtopics: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "Route53"] },
          { name: "Azure", subtopics: ["VMs", "Blob Storage", "Functions", "App Service"] },
          { name: "GCP", subtopics: ["Compute Engine", "Cloud Storage", "Cloud Functions"] }
        ]
      },
      {
        phase: "Infrastructure as Code",
        duration: "3 weeks",
        topics: [
          { name: "Terraform", subtopics: ["Providers", "Resources", "Modules", "State"] },
          { name: "Ansible", subtopics: ["Playbooks", "Roles", "Inventory", "Modules"] }
        ]
      },
      {
        phase: "Monitoring & Logging",
        duration: "2 weeks",
        topics: [
          { name: "Prometheus", subtopics: ["Metrics", "Alerts", "Grafana"] },
          { name: "ELK Stack", subtopics: ["Elasticsearch", "Logstash", "Kibana"] }
        ]
      }
    ],
    
    certifications: [
      { name: "AWS Certified Solutions Architect", level: "Associate", duration: "2-3 months" },
      { name: "Azure Administrator", level: "Associate", duration: "2-3 months" },
      { name: "Google Cloud Associate", level: "Associate", duration: "2-3 months" },
      { name: "Kubernetes (CKA)", level: "Professional", duration: "3-4 months" },
      { name: "Docker Certified Associate", level: "Associate", duration: "1-2 months" }
    ],
    
    resources: [
      { name: "TechWorld with Nana", url: "https://youtube.com/@TechWorldwithNana", type: "YouTube" },
      { name: "AWS Training", url: "https://aws.amazon.com/training/", type: "Official" },
      { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/", type: "Documentation" },
      { name: "Docker Docs", url: "https://docs.docker.com/", type: "Documentation" }
    ]
  },

  // ==================== AI/ML (Since you mentioned it) ====================
  aiml: {
    name: "AI & Machine Learning",
    icon: "fas fa-robot",
    color: "#b5179e",
    
    roadmap: [
      {
        phase: "Prerequisites",
        duration: "4 weeks",
        topics: [
          { name: "Python", subtopics: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
          { name: "Mathematics", subtopics: ["Linear Algebra", "Calculus", "Probability", "Statistics"] }
        ]
      },
      {
        phase: "Machine Learning",
        duration: "8 weeks",
        topics: [
          { name: "Supervised Learning", subtopics: ["Regression", "Classification", "Decision Trees", "SVM"] },
          { name: "Unsupervised Learning", subtopics: ["Clustering", "PCA", "Anomaly Detection"] },
          { name: "Scikit-learn", subtopics: ["Model Training", "Evaluation", "Hyperparameter Tuning"] }
        ]
      },
      {
        phase: "Deep Learning",
        duration: "10 weeks",
        topics: [
          { name: "Neural Networks", subtopics: ["Perceptron", "Backpropagation", "Activation Functions"] },
          { name: "CNNs", subtopics: ["Image Classification", "Object Detection", "Transfer Learning"] },
          { name: "RNNs & Transformers", subtopics: ["LSTM", "GRU", "Attention", "BERT", "GPT"] },
          { name: "Frameworks", subtopics: ["TensorFlow", "PyTorch", "Keras"] }
        ]
      },
      {
        phase: "Specialized",
        duration: "8 weeks",
        topics: [
          { name: "Computer Vision", subtopics: ["OpenCV", "YOLO", "Mask R-CNN"] },
          { name: "NLP", subtopics: ["Tokenization", "Embeddings", "LLMs", "Fine-tuning"] },
          { name: "Reinforcement Learning", subtopics: ["Q-Learning", "Policy Gradient", "DQN"] }
        ]
      }
    ],
    
    projects: [
      { name: "House Price Prediction", difficulty: "Beginner", type: "Regression" },
      { name: "Spam Email Classifier", difficulty: "Beginner", type: "Classification" },
      { name: "Image Classification (CIFAR-10)", difficulty: "Intermediate", type: "CNN" },
      { name: "Sentiment Analysis", difficulty: "Intermediate", type: "NLP" },
      { name: "Object Detection", difficulty: "Advanced", type: "Computer Vision" },
      { name: "Chatbot with LLM", difficulty: "Advanced", type: "NLP" }
    ],
    
    resources: [
      { name: "Andrew Ng ML Course", url: "https://coursera.org/learn/machine-learning", type: "Course" },
      { name: "Fast.ai", url: "https://fast.ai", type: "Course" },
      { name: "Kaggle Learn", url: "https://kaggle.com/learn", type: "Interactive" },
      { name: "Hugging Face", url: "https://huggingface.co", type: "Platform" },
      { name: "Papers with Code", url: "https://paperswithcode.com", type: "Research" }
    ]
  },

  // ==================== BLOCKCHAIN ====================
  blockchain: {
    name: "Blockchain & Web3",
    icon: "fas fa-link",
    color: "#00f5ff",
    
    roadmap: [
      {
        phase: "Fundamentals",
        duration: "3 weeks",
        topics: [
          { name: "Blockchain Basics", subtopics: ["Blocks", "Mining", "Consensus", "Cryptography"] },
          { name: "Cryptocurrencies", subtopics: ["Bitcoin", "Ethereum", "Wallets", "Transactions"] }
        ]
      },
      {
        phase: "Smart Contracts",
        duration: "6 weeks",
        topics: [
          { name: "Solidity", subtopics: ["Syntax", "Data Types", "Functions", "Modifiers"] },
          { name: "Development", subtopics: ["Hardhat", "Truffle", "Remix", "Testing"] },
          { name: "Security", subtopics: ["Reentrancy", "Overflow", "Access Control"] }
        ]
      },
      {
        phase: "DApp Development",
        duration: "4 weeks",
        topics: [
          { name: "Web3.js / Ethers.js", subtopics: ["Connect Wallet", "Read/Write Contract", "Events"] },
          { name: "Frontend", subtopics: ["React", "MetaMask", "WalletConnect"] },
          { name: "IPFS", subtopics: ["Decentralized Storage", "Pinata", "NFT Metadata"] }
        ]
      }
    ],
    
    projects: [
      { name: "Simple Token (ERC-20)", difficulty: "Beginner" },
      { name: "NFT Collection (ERC-721)", difficulty: "Intermediate" },
      { name: "DeFi Staking Platform", difficulty: "Advanced" },
      { name: "DAO Governance", difficulty: "Advanced" }
    ],
    
    resources: [
      { name: "CryptoZombies", url: "https://cryptozombies.io", type: "Interactive" },
      { name: "Solidity Docs", url: "https://docs.soliditylang.org", type: "Documentation" },
      { name: "Alchemy University", url: "https://university.alchemy.com", type: "Course" },
      { name: "Patrick Collins", url: "https://youtube.com/@PatrickAlphaC", type: "YouTube" }
    ]
  },

  // ==================== CYBERSECURITY ====================
  cybersecurity: {
    name: "Cybersecurity",
    icon: "fas fa-shield-alt",
    color: "#ff0054",
    
    roadmap: [
      {
        phase: "Fundamentals",
        duration: "4 weeks",
        topics: [
          { name: "Networking", subtopics: ["TCP/IP", "Protocols", "Firewalls", "VPN"] },
          { name: "Operating Systems", subtopics: ["Linux", "Windows", "File Systems", "Processes"] },
          { name: "Cryptography", subtopics: ["Encryption", "Hashing", "SSL/TLS", "PKI"] }
        ]
      },
      {
        phase: "Offensive Security",
        duration: "8 weeks",
        topics: [
          { name: "Penetration Testing", subtopics: ["Reconnaissance", "Scanning", "Exploitation", "Post-Exploitation"] },
          { name: "Web Security", subtopics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF"] },
          { name: "Tools", subtopics: ["Metasploit", "Burp Suite", "Nmap", "Wireshark"] }
        ]
      },
      {
        phase: "Defensive Security",
        duration: "6 weeks",
        topics: [
          { name: "Security Operations", subtopics: ["SIEM", "IDS/IPS", "Incident Response"] },
          { name: "Malware Analysis", subtopics: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering"] },
          { name: "Forensics", subtopics: ["Disk Forensics", "Memory Forensics", "Network Forensics"] }
        ]
      }
    ],
    
    certifications: [
      { name: "CompTIA Security+", level: "Entry", duration: "2-3 months" },
      { name: "CEH (Certified Ethical Hacker)", level: "Intermediate", duration: "3-4 months" },
      { name: "OSCP", level: "Advanced", duration: "6-12 months" },
      { name: "CISSP", level: "Professional", duration: "6-12 months" }
    ],
    
    platforms: [
      { name: "TryHackMe", url: "https://tryhackme.com", type: "Learning Platform" },
      { name: "HackTheBox", url: "https://hackthebox.com", type: "Practice Platform" },
      { name: "PortSwigger Academy", url: "https://portswigger.net/web-security", type: "Web Security" },
      { name: "PentesterLab", url: "https://pentesterlab.com", type: "Practice" }
    ],
    
    resources: [
      { name: "John Hammond", url: "https://youtube.com/@_JohnHammond", type: "YouTube" },
      { name: "LiveOverflow", url: "https://youtube.com/@LiveOverflow", type: "YouTube" },
      { name: "OWASP", url: "https://owasp.org", type: "Organization" }
    ]
  },

  // ==================== GAME DEVELOPMENT ====================
  gameDev: {
    name: "Game Development",
    icon: "fas fa-gamepad",
    color: "#7209b7",
    
    engines: {
      unity: {
        name: "Unity (C#)",
        roadmap: [
          { name: "C# Basics", duration: "2 weeks" },
          { name: "Unity Fundamentals", duration: "3 weeks" },
          { name: "2D Game Development", duration: "4 weeks" },
          { name: "3D Game Development", duration: "6 weeks" },
          { name: "Physics & Animation", duration: "3 weeks" },
          { name: "UI & Audio", duration: "2 weeks" },
          { name: "Publishing", duration: "1 week" }
        ]
      },
      unreal: {
        name: "Unreal Engine (C++/Blueprints)",
        roadmap: [
          { name: "C++ Basics", duration: "3 weeks" },
          { name: "Unreal Fundamentals", duration: "3 weeks" },
          { name: "Blueprints", duration: "4 weeks" },
          { name: "3D Game Development", duration: "8 weeks" },
          { name: "Materials & Lighting", duration: "3 weeks" },
          { name: "Animation & AI", duration: "4 weeks" }
        ]
      },
      godot: {
        name: "Godot (GDScript)",
        roadmap: [
          { name: "GDScript Basics", duration: "1 week" },
          { name: "Godot Fundamentals", duration: "2 weeks" },
          { name: "2D Game Development", duration: "3 weeks" },
          { name: "3D Game Development", duration: "4 weeks" }
        ]
      }
    },
    
    projects: [
      { name: "Flappy Bird Clone", difficulty: "Beginner", duration: "3 days" },
      { name: "Platformer Game", difficulty: "Beginner", duration: "1 week" },
      { name: "Tower Defense", difficulty: "Intermediate", duration: "2 weeks" },
      { name: "FPS Game", difficulty: "Intermediate", duration: "3 weeks" },
      { name: "RPG Game", difficulty: "Advanced", duration: "8 weeks" },
      { name: "Multiplayer Game", difficulty: "Advanced", duration: "12 weeks" }
    ],
    
    resources: [
      { name: "Brackeys", url: "https://youtube.com/@Brackeys", type: "YouTube (Unity)" },
      { name: "Unreal Sensei", url: "https://youtube.com/@UnrealSensei", type: "YouTube (Unreal)" },
      { name: "GDQuest", url: "https://youtube.com/@GDQuest", type: "YouTube (Godot)" },
      { name: "Unity Learn", url: "https://learn.unity.com", type: "Official" }
    ]
  }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = techContent;
}
