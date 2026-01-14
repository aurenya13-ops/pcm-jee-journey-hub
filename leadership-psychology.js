// 🧠 LEADERSHIP & PSYCHOLOGY FOR TECH LEADERS
// For those who want to lead something bigger - become CEOs, CTOs, Founders

const leadershipPsychology = {
  
  // ============================================
  // CORE LEADERSHIP PRINCIPLES
  // ============================================
  
  coreLeadership: {
    
    // VISION & STRATEGY
    visionStrategy: {
      title: "Vision & Strategic Thinking",
      icon: "🎯",
      description: "How to think big and create compelling visions",
      
      principles: [
        {
          name: "Think 10x, Not 10%",
          source: "Larry Page (Google)",
          explanation: "Incremental thinking leads to incremental results. 10x thinking forces innovation.",
          example: "Google didn't try to make search 10% better - they reimagined it completely",
          exercise: "Take your current project. Instead of improving it 10%, how would you make it 10x better?",
          realWorld: "SpaceX didn't make rockets 10% cheaper - they made them reusable (100x cheaper)"
        },
        
        {
          name: "First Principles Thinking",
          source: "Elon Musk",
          explanation: "Break down problems to fundamental truths, then reason up from there",
          example: "Rocket cost: Don't accept 'rockets are expensive'. Ask: What are rockets made of? Aluminum, copper, carbon fiber. How much do raw materials cost? 2% of rocket price. Why so expensive? Because they're not reused.",
          exercise: "Pick a 'fact' in your field. Break it down to first principles. Is it really true?",
          realWorld: "Tesla batteries: Industry said 'batteries are $600/kWh'. Musk broke it down to raw materials ($80/kWh) and built Gigafactory"
        },
        
        {
          name: "Inversion Thinking",
          source: "Charlie Munger",
          explanation: "Instead of 'How to succeed?', ask 'How to fail?' then avoid those things",
          example: "Don't ask 'How to build great company?' Ask 'What kills companies?' - Bad culture, slow decisions, ignoring customers",
          exercise: "List 5 ways your project could fail. Now design systems to prevent each one.",
          realWorld: "Amazon's 'Working Backwards' - Start with customer, work backwards to solution"
        },
        
        {
          name: "Compound Growth Mindset",
          source: "Naval Ravikant",
          explanation: "1% better every day = 37x better in a year. Focus on daily improvement.",
          math: "(1.01)^365 = 37.78",
          example: "Learn one new concept daily. In a year, you're exponentially ahead.",
          exercise: "What's your 1% daily improvement? Code review? Reading? Exercise?",
          realWorld: "Warren Buffett: Read 500 pages daily. Compound knowledge over 60 years = legendary investor"
        },
        
        {
          name: "Optionality & Antifragility",
          source: "Nassim Taleb",
          explanation: "Create systems that benefit from chaos and uncertainty",
          example: "Don't just survive failures - design to get stronger from them",
          exercise: "How can your project benefit from unexpected events?",
          realWorld: "Amazon Web Services: Started as internal tool, became $80B business when they opened it up"
        }
      ],
      
      frameworks: [
        {
          name: "OKRs (Objectives & Key Results)",
          usedBy: "Google, Intel, LinkedIn",
          structure: {
            objective: "Qualitative, inspirational goal",
            keyResults: "3-5 measurable outcomes",
            example: {
              objective: "Build the best AI learning platform",
              keyResults: [
                "100,000 active users by Q4",
                "90% user satisfaction score",
                "50% completion rate for courses",
                "Partner with 10 universities"
              ]
            }
          },
          implementation: "Set quarterly OKRs. Review weekly. Grade 0-1 (0.7 is good - means you stretched)"
        },
        
        {
          name: "BHAG (Big Hairy Audacious Goal)",
          usedBy: "Jim Collins (Good to Great)",
          explanation: "10-30 year goal that's exciting and daunting",
          examples: [
            "Microsoft (1980s): A computer on every desk and in every home",
            "SpaceX: Make humanity multiplanetary",
            "Google: Organize world's information",
            "Tesla: Accelerate world's transition to sustainable energy"
          ],
          yourTurn: "What's your BHAG? What seems impossible but would change everything?"
        },
        
        {
          name: "Blue Ocean Strategy",
          usedBy: "Cirque du Soleil, Nintendo Wii",
          explanation: "Create uncontested market space instead of competing in red oceans",
          framework: {
            eliminate: "What factors can you eliminate that industry takes for granted?",
            reduce: "What can you reduce below industry standard?",
            raise: "What can you raise above industry standard?",
            create: "What can you create that industry never offered?"
          },
          example: "Cirque du Soleil: Eliminated animals, reduced danger, raised artistic quality, created theatrical circus"
        }
      ],
      
      exercises: [
        {
          title: "30-Year Vision Exercise",
          time: "30 minutes",
          steps: [
            "Close your eyes. It's 2054. You're 50+ years old.",
            "What did you build? What's your legacy?",
            "Who did you impact? How many lives changed?",
            "What technology exists because of you?",
            "Write it down in vivid detail.",
            "Now work backwards: What needs to happen in 2044? 2034? 2024?"
          ]
        },
        
        {
          title: "Regret Minimization Framework",
          source: "Jeff Bezos",
          steps: [
            "Project yourself to age 80",
            "Look back at your life",
            "What would you regret NOT doing?",
            "That's what you should do now"
          ],
          bezosExample: "At 80, I won't regret trying and failing at Amazon. I would regret not trying."
        }
      ],
      
      videos: [
        { title: "Elon Musk on First Principles", url: "https://www.youtube.com/watch?v=NV3sBlRgzTI" },
        { title: "Simon Sinek - Start With Why", url: "https://www.youtube.com/watch?v=u4ZoJKF_VuA" },
        { title: "Steve Jobs - Think Different", url: "https://www.youtube.com/watch?v=8rwsuXHA7RA" },
        { title: "Naval Ravikant - How to Get Rich", url: "https://www.youtube.com/watch?v=1-TZqOsVCNM" }
      ]
    },
    
    // DECISION MAKING
    decisionMaking: {
      title: "Decision Making Under Uncertainty",
      icon: "🎲",
      description: "How to make high-quality decisions with incomplete information",
      
      frameworks: [
        {
          name: "Type 1 vs Type 2 Decisions",
          source: "Jeff Bezos",
          explanation: {
            type1: "One-way doors - irreversible, need careful analysis (hiring CEO, selling company)",
            type2: "Two-way doors - reversible, make them fast (feature launches, experiments)"
          },
          rule: "Most decisions are Type 2. Don't overthink them. Move fast.",
          example: "Amazon: 'Disagree and Commit' - If reversible, commit even if you disagree. Learn fast."
        },
        
        {
          name: "Expected Value Thinking",
          source: "Poker & Venture Capital",
          formula: "EV = (Probability of Success × Payoff) - (Probability of Failure × Cost)",
          example: {
            decision: "Should I start a startup?",
            calculation: "(10% × $100M) - (90% × $200k) = $10M - $180k = $9.82M EV",
            conclusion: "Even with 90% failure rate, positive EV if upside is big enough"
          },
          exercise: "Calculate EV for your next 3 major decisions"
        },
        
        {
          name: "Regret Minimization",
          source: "Jeff Bezos",
          process: [
            "Imagine yourself at 80 years old",
            "Look back at this decision",
            "Which choice would you regret more?",
            "Do the opposite of that"
          ],
          power: "Removes short-term noise, focuses on long-term meaning"
        },
        
        {
          name: "Pre-Mortem Analysis",
          source: "Gary Klein",
          process: [
            "Assume your project failed spectacularly",
            "It's 1 year later. What went wrong?",
            "List all possible failure modes",
            "Now design to prevent each one"
          ],
          example: "Before launching product: 'It failed because... users didn't understand it, servers crashed, competitors copied us, we ran out of money'. Now address each."
        },
        
        {
          name: "Eisenhower Matrix",
          source: "Dwight D. Eisenhower",
          matrix: {
            urgentImportant: "Do immediately (crises, deadlines)",
            notUrgentImportant: "Schedule (strategy, learning, relationships) - MOST IMPORTANT",
            urgentNotImportant: "Delegate (interruptions, some emails)",
            notUrgentNotImportant: "Eliminate (time wasters, busy work)"
          },
          insight: "Most people live in Urgent. Leaders live in Important."
        },
        
        {
          name: "80/20 Rule (Pareto Principle)",
          source: "Vilfredo Pareto",
          principle: "80% of results come from 20% of efforts",
          applications: [
            "80% of revenue from 20% of customers",
            "80% of bugs from 20% of code",
            "80% of impact from 20% of features",
            "80% of learning from 20% of content"
          ],
          action: "Identify your 20%. Double down on it. Eliminate the rest."
        }
      ],
      
      mentalModels: [
        {
          name: "Second-Order Thinking",
          explanation: "Don't just think 'What happens next?' Think 'And then what?'",
          example: {
            firstOrder: "Lower prices → More customers",
            secondOrder: "More customers → Need more servers → Higher costs → Lower margins → Can't sustain low prices → Lose customers",
            better: "Lower prices → More customers → Economies of scale → Lower costs → Sustainable low prices → Moat"
          }
        },
        
        {
          name: "Opportunity Cost",
          explanation: "Every choice has a hidden cost - what you didn't choose",
          example: "Working on Feature A means NOT working on Feature B. Which has higher impact?",
          rule: "Always ask: What am I NOT doing by doing this?"
        },
        
        {
          name: "Margin of Safety",
          source: "Benjamin Graham",
          explanation: "Build in buffers for uncertainty",
          examples: [
            "Estimate project takes 3 months? Plan for 5.",
            "Need $100k runway? Raise $200k.",
            "Server can handle 1000 users? Design for 5000."
          ]
        },
        
        {
          name: "Skin in the Game",
          source: "Nassim Taleb",
          principle: "Don't trust advice from people who don't bear the consequences",
          examples: [
            "VCs who invest their own money > VCs who only manage others' money",
            "Founders who use their own product > Founders who don't",
            "Advisors who have built companies > Advisors who only studied them"
          ]
        }
      ],
      
      exercises: [
        {
          title: "Decision Journal",
          purpose: "Improve decision quality over time",
          method: [
            "Before major decision, write down:",
            "- What you decided",
            "- Why you decided it",
            "- What you expect to happen",
            "- Probability of success (your estimate)",
            "6 months later, review:",
            "- What actually happened",
            "- Why were you right/wrong?",
            "- What did you learn?"
          ],
          benefit: "Calibrate your judgment. See your biases."
        },
        
        {
          title: "Kill Your Darlings",
          purpose: "Overcome sunk cost fallacy",
          exercise: [
            "List your current projects",
            "For each, ask: 'If I weren't already doing this, would I start it today?'",
            "If no, kill it. Even if you've invested months."
          ],
          insight: "Past investment is irrelevant. Only future value matters."
        }
      ],
      
      videos: [
        { title: "Ray Dalio - Principles for Success", url: "https://www.youtube.com/watch?v=B9XGUpQZY38" },
        { title: "Charlie Munger - Psychology of Human Misjudgment", url: "https://www.youtube.com/watch?v=pqzcCfUglws" },
        { title: "Annie Duke - Thinking in Bets", url: "https://www.youtube.com/watch?v=uYNsSeYjkp4" }
      ]
    },
    
    // TEAM BUILDING & CULTURE
    teamCulture: {
      title: "Building High-Performance Teams",
      icon: "👥",
      description: "How to attract, retain, and multiply A-players",
      
      principles: [
        {
          name: "A-Players Hire A-Players, B-Players Hire C-Players",
          source: "Steve Jobs",
          explanation: "Insecure people hire worse than themselves. Confident people hire better.",
          action: "Only hire people who are better than you at something. If you're the smartest in the room, you're in the wrong room.",
          jobsQuote: "It doesn't make sense to hire smart people and tell them what to do. We hire smart people so they can tell us what to do."
        },
        
        {
          name: "Culture Eats Strategy for Breakfast",
          source: "Peter Drucker",
          explanation: "Best strategy fails with bad culture. Average strategy wins with great culture.",
          examples: [
            "Netflix: 'Freedom & Responsibility' - Treat people like adults, they act like adults",
            "Amazon: 'Customer Obsession' - Every decision starts with customer",
            "Apple: 'Insane Attention to Detail' - Sweat the small stuff",
            "Google: '10x Thinking' - Don't settle for incremental"
          ],
          action: "Define your 3-5 core values. Hire/fire based on them. No exceptions."
        },
        
        {
          name: "Radical Candor",
          source: "Kim Scott (Google, Apple)",
          framework: {
            axes: "Care Personally × Challenge Directly",
            radicalCandor: "High care + High challenge = Best feedback",
            ruinousEmpathy: "High care + Low challenge = Nice but useless",
            obnoxiousAggression: "Low care + High challenge = Asshole",
            manipulativeInsincerity: "Low care + Low challenge = Passive aggressive"
          },
          example: "Bad: 'Good job!' Good: 'Your presentation was clear, but you lost the audience at slide 5. Next time, add a story there.'",
          rule: "Praise in public, criticize in private. Be specific. Focus on behavior, not person."
        },
        
        {
          name: "No Brilliant Jerks",
          source: "Netflix, Patty McCord",
          principle: "Skills matter. Culture fit matters more.",
          reasoning: "One toxic person destroys team morale, drives away good people, creates politics",
          netflixRule: "We're a team, not a family. Pro sports team - best players who work well together",
          action: "Fire brilliant jerks fast. They're not worth it."
        },
        
        {
          name: "Disagree and Commit",
          source: "Andy Grove (Intel), Jeff Bezos (Amazon)",
          explanation: "Debate vigorously. Once decided, everyone commits 100% - even if they disagreed.",
          benefit: "Fast decisions + Full alignment. No passive-aggressive 'I told you so'.",
          example: "Team debates feature for 2 hours. You think it's wrong. CEO decides to build it. You commit fully and make it succeed.",
          alternative: "Consensus = Slow decisions, watered-down ideas, lowest common denominator"
        },
        
        {
          name: "Extreme Ownership",
          source: "Jocko Willink (Navy SEALs)",
          principle: "Leaders take responsibility for everything. No excuses.",
          examples: [
            "Team missed deadline? Your fault for not checking in.",
            "Engineer wrote bad code? Your fault for not training them.",
            "Customer churned? Your fault for not understanding their needs."
          ],
          power: "When you own everything, you can fix everything. Blame = Powerlessness."
        }
      ],
      
      hiringFramework: {
        title: "How to Hire A-Players",
        
        process: [
          {
            stage: "Sourcing",
            principle: "Best people aren't looking. Go find them.",
            tactics: [
              "Ask your best employees: 'Who's the best person you've worked with?'",
              "Attend conferences, meetups, hackathons",
              "Contribute to open source, find top contributors",
              "Offer referral bonuses (but hire for fit, not bonus)"
            ]
          },
          
          {
            stage: "Screening",
            principle: "Look for slope, not y-intercept",
            explanation: "Don't hire for what they know. Hire for how fast they learn.",
            questions: [
              "Tell me about a time you learned something completely new in 1 week",
              "What's the hardest problem you've solved? Walk me through your thinking.",
              "What do you do when you're stuck?",
              "What have you built that you're proud of?"
            ]
          },
          
          {
            stage: "Interviews",
            framework: "STAR Method (Situation, Task, Action, Result)",
            goodQuestions: [
              "Tell me about a time you failed. What did you learn?",
              "Describe a conflict with a teammate. How did you resolve it?",
              "What's something you believe that most people disagree with?",
              "If you could change one thing about your last company, what would it be?"
            ],
            redFlags: [
              "Blames others for failures",
              "Can't explain technical decisions",
              "Doesn't ask questions about company/role",
              "Only cares about salary/title"
            ],
            greenFlags: [
              "Asks about impact, not perks",
              "Shows curiosity about problems",
              "Admits mistakes, shows learning",
              "Challenges your assumptions respectfully"
            ]
          },
          
          {
            stage: "Reference Checks",
            principle: "Back-channel references > Official references",
            method: [
              "Ask candidate: 'Who were your managers at X company?'",
              "Find those people on LinkedIn",
              "Ask: 'On scale 1-10, how would you rate them? What would make them a 10?'",
              "Listen for hesitation, damning with faint praise"
            ]
          },
          
          {
            stage: "Offer",
            principle: "Sell the mission, not the money",
            approach: [
              "Paint vision: 'Here's what we're building and why it matters'",
              "Show impact: 'You'll own X, affect Y users'",
              "Highlight growth: 'You'll learn A, B, C'",
              "Then discuss compensation"
            ],
            equity: "Early employees should get meaningful equity (0.5-2%). They're taking huge risk."
          }
        ],
        
        barRaiser: {
          concept: "Amazon's Bar Raiser Program",
          rule: "Every hire should raise the average quality of the team",
          question: "Is this person better than 50% of current team in this role?",
          ifNo: "Don't hire. You're lowering the bar."
        }
      },
      
      retentionStrategies: [
        {
          name: "Autonomy, Mastery, Purpose",
          source: "Daniel Pink - Drive",
          autonomy: "Let people choose HOW to solve problems, not just execute orders",
          mastery: "Provide challenges that stretch them, training to grow",
          purpose: "Connect work to bigger mission. 'You're not building a feature, you're helping students learn'",
          example: "Google's 20% time - Engineers spend 20% on passion projects. Created Gmail, AdSense."
        },
        
        {
          name: "Career Ladders",
          principle: "Show clear path to growth",
          structure: {
            junior: "Learn fundamentals, ship features",
            mid: "Own projects, mentor juniors",
            senior: "Design systems, lead initiatives",
            staff: "Set technical direction, multiply team",
            principal: "Company-wide impact, thought leadership"
          },
          action: "Every 6 months: Review progress, set next goals, provide resources"
        },
        
        {
          name: "Psychological Safety",
          source: "Google's Project Aristotle",
          finding: "Best teams aren't smartest - they're safest",
          safety: "Can I take risks without fear of embarrassment or punishment?",
          howToBuild: [
            "Leader admits mistakes first",
            "Reward asking questions, not just having answers",
            "No blame culture - focus on systems, not people",
            "Celebrate failures that taught lessons"
          ]
        },
        
        {
          name: "Skip-Level 1-on-1s",
          purpose: "Understand what's really happening",
          method: "CEO meets with engineers, skipping managers",
          questions: [
            "What's frustrating you?",
            "What should we start/stop/continue doing?",
            "If you were CEO, what would you change?",
            "Who's doing great work that I should know about?"
          ],
          benefit: "Catch problems early, show you care, get unfiltered truth"
        }
      ],
      
      exercises: [
        {
          title: "Culture Audit",
          frequency: "Quarterly",
          method: [
            "Anonymous survey: 'Do you feel psychologically safe? Can you do your best work? Would you recommend us to friends?'",
            "Track eNPS (Employee Net Promoter Score)",
            "Exit interviews: 'Why are you really leaving?'",
            "Act on feedback publicly"
          ]
        },
        
        {
          title: "Team Health Check",
          source: "Spotify",
          dimensions: [
            "Easy to release",
            "Suitable process",
            "Tech quality",
            "Value delivered",
            "Speed",
            "Mission clarity",
            "Fun"
          ],
          method: "Team rates each 1-5. Discuss lowest scores. Fix them."
        }
      ],
      
      videos: [
        { title: "Simon Sinek - Leaders Eat Last", url: "https://www.youtube.com/watch?v=ReRcHdeUG9Y" },
        { title: "Patty McCord - Netflix Culture", url: "https://www.youtube.com/watch?v=Xbq_k_TfBVA" },
        { title: "Kim Scott - Radical Candor", url: "https://www.youtube.com/watch?v=4yODalLQ2lM" },
        { title: "Jocko Willink - Extreme Ownership", url: "https://www.youtube.com/watch?v=ljqra3BcqWM" }
      ]
    }
  },
  
  // ============================================
  // PSYCHOLOGY FOR LEADERS
  // ============================================
  
  leadershipPsychology: {
    
    // COGNITIVE BIASES
    cognitiveBiases: {
      title: "Cognitive Biases Every Leader Must Know",
      icon: "🧠",
      description: "Your brain lies to you. Here's how to catch it.",
      
      biases: [
        {
          name: "Confirmation Bias",
          definition: "Seeking information that confirms what you already believe",
          danger: "You'll miss contradictory evidence, make bad decisions",
          example: "You think your product is great. You only listen to positive feedback, ignore complaints.",
          antidote: [
            "Actively seek disconfirming evidence",
            "Ask: 'What would prove me wrong?'",
            "Hire people who disagree with you",
            "Red team your ideas"
          ],
          exercise: "Take your strongest belief about your product. Spend 1 hour trying to prove it wrong."
        },
        
        {
          name: "Sunk Cost Fallacy",
          definition: "Continuing something because you've invested in it, not because it's right",
          danger: "Throwing good money after bad, staying in failing projects",
          example: "Spent 6 months on feature. It's not working. But 'we've come so far...' so you continue.",
          antidote: [
            "Ignore past investment",
            "Ask: 'If I weren't already doing this, would I start it today?'",
            "If no, kill it immediately"
          ],
          quote: "The market doesn't care how much you've invested. Only future value matters."
        },
        
        {
          name: "Dunning-Kruger Effect",
          definition: "Incompetent people overestimate their ability. Experts underestimate theirs.",
          danger: "Overconfidence in areas you don't understand",
          graph: "Confidence peaks early (Mt. Stupid), drops (Valley of Despair), rises slowly (Slope of Enlightenment)",
          antidote: [
            "Assume you're on Mt. Stupid in new areas",
            "Seek experts, listen to them",
            "Test assumptions with experiments, not opinions"
          ],
          example: "Non-technical CEO thinks engineering is easy. Underestimates timelines, frustrates team."
        },
        
        {
          name: "Availability Heuristic",
          definition: "Overweighting recent/memorable events",
          danger: "Overreacting to outliers, missing base rates",
          example: "One customer complains loudly. You pivot entire product. But 1000 happy customers are silent.",
          antidote: [
            "Look at data, not anecdotes",
            "Ask: 'Is this representative or memorable?'",
            "Track metrics, not stories"
          ]
        },
        
        {
          name: "Survivorship Bias",
          definition: "Focusing on successes, ignoring failures",
          danger: "Learning wrong lessons from successful people",
          example: "Dropouts who succeeded: Jobs, Gates, Zuckerberg. Conclusion: Drop out! Reality: Millions dropped out and failed. You don't see them.",
          antidote: [
            "Study failures, not just successes",
            "Ask: 'What did failed companies do?'",
            "Look for base rates, not outliers"
          ],
          famousExample: "WWII planes: Reinforce where they have bullet holes? No! Reinforce where they DON'T - those planes didn't return."
        },
        
        {
          name: "Planning Fallacy",
          definition: "Underestimating time/cost/difficulty",
          danger: "Missed deadlines, budget overruns, team burnout",
          example: "Think project takes 1 month. Takes 3. Every time.",
          antidote: [
            "Reference class forecasting: How long did similar projects take?",
            "Add 50% buffer to estimates",
            "Break into smaller pieces, estimate each"
          ],
          hofstadtersLaw: "It always takes longer than you expect, even when you take into account Hofstadter's Law."
        },
        
        {
          name: "Groupthink",
          definition: "Desire for harmony leads to bad decisions",
          danger: "No one challenges ideas, everyone agrees, disaster follows",
          example: "Challenger explosion: Engineers knew O-rings would fail in cold. Didn't speak up. Groupthink killed 7 astronauts.",
          antidote: [
            "Assign devil's advocate role",
            "Reward dissent, not agreement",
            "Leader speaks last, not first",
            "Anonymous feedback channels"
          ]
        },
        
        {
          name: "Fundamental Attribution Error",
          definition: "Blaming people's character, not circumstances",
          danger: "Unfair judgments, poor team dynamics",
          example: "Engineer misses deadline. You think: 'They're lazy.' Reality: Their parent is sick, they're working 2 jobs.",
          antidote: [
            "Ask: 'What circumstances led to this?'",
            "Assume good intent",
            "Fix systems, not people"
          ],
          quote: "You judge yourself by intentions, others by actions. Flip it."
        }
      ],
      
      debiasing: {
        title: "How to Debias Your Thinking",
        techniques: [
          {
            name: "Pre-Mortem",
            method: "Before decision, imagine it failed. Why? Address those reasons.",
            benefit: "Catches blind spots before they hurt you"
          },
          {
            name: "Outside View",
            method: "Don't ask 'Will MY project succeed?' Ask 'What % of similar projects succeed?'",
            benefit: "Grounds you in reality, not optimism"
          },
          {
            name: "Red Team",
            method: "Assign team to attack your idea. Reward them for finding flaws.",
            benefit: "Stress-tests ideas before market does"
          },
          {
            name: "Decision Journal",
            method: "Write down predictions. Review later. Calibrate.",
            benefit: "Learn from mistakes, improve judgment"
          }
        ]
      },
      
      videos: [
        { title: "Dan Ariely - Predictably Irrational", url: "https://www.youtube.com/watch?v=9X68dm92HVI" },
        { title: "Thinking Fast and Slow - Kahneman", url: "https://www.youtube.com/watch?v=CjVQJdIrDJ0" }
      ]
    },
    
    // EMOTIONAL INTELLIGENCE
    emotionalIntelligence: {
      title: "Emotional Intelligence for Leaders",
      icon: "❤️",
      description: "IQ gets you hired. EQ gets you promoted.",
      
      components: [
        {
          name: "Self-Awareness",
          definition: "Understanding your emotions, triggers, strengths, weaknesses",
          why: "Can't manage what you don't understand",
          practices: [
            "Daily journaling: 'What did I feel today? Why?'",
            "Ask for feedback: '360 reviews'",
            "Meditation: Observe thoughts without judgment",
            "Track patterns: 'I get angry when...'",
            "Know your values: 'What matters most to me?'"
          ],
          exercise: "List 5 situations that trigger you. Why? What's the pattern?"
        },
        
        {
          name: "Self-Regulation",
          definition: "Managing your emotions, not being controlled by them",
          why: "Leaders set the emotional tone. Your anxiety becomes team's anxiety.",
          techniques: [
            "Pause before reacting: Count to 10",
            "Reframe: 'This isn't a crisis, it's a challenge'",
            "Box breathing: 4-4-4-4 (inhale-hold-exhale-hold)",
            "Name the emotion: 'I'm feeling frustrated because...'",
            "Choose response: 'I feel X, but I'll do Y'"
          ],
          example: "Engineer breaks production. You're furious. Pause. Breathe. Ask: 'What happened? How do we prevent this?' Not: 'How could you be so stupid?!'"
        },
        
        {
          name: "Motivation",
          definition: "Internal drive to achieve, not just external rewards",
          intrinsic: "Autonomy, Mastery, Purpose > Money, Status",
          practices: [
            "Connect work to values: 'Why does this matter?'",
            "Set learning goals, not just outcome goals",
            "Celebrate progress, not just results",
            "Find meaning in struggle: 'This is hard AND important'"
          ],
          quote: "He who has a why can bear any how. - Nietzsche"
        },
        
        {
          name: "Empathy",
          definition: "Understanding others' emotions and perspectives",
          why: "Can't lead people you don't understand",
          types: {
            cognitive: "I understand what you're thinking",
            emotional: "I feel what you're feeling",
            compassionate: "I want to help you"
          },
          practices: [
            "Active listening: Repeat back what you heard",
            "Ask: 'How are you feeling?' and actually listen",
            "Perspective-taking: 'If I were them, I'd feel...'",
            "Validate emotions: 'That sounds frustrating' (even if you disagree)"
          ],
          mistake: "Trying to fix emotions. Sometimes people just need to be heard."
        },
        
        {
          name: "Social Skills",
          definition: "Building relationships, influencing, collaborating",
          skills: [
            "Communication: Clear, concise, compelling",
            "Conflict resolution: Address issues, not people",
            "Influence: Persuade without authority",
            "Collaboration: Make 1+1=3",
            "Change management: Help people through transitions"
          ],
          practices: [
            "1-on-1s: Build relationships, not just status updates",
            "Public speaking: Practice, get feedback, improve",
            "Networking: Give before you ask",
            "Storytelling: Facts tell, stories sell"
          ]
        }
      ],
      
      exercises: [
        {
          title: "Emotion Labeling",
          method: "Throughout day, pause and label emotion: 'I'm feeling anxious because...'",
          benefit: "Awareness is first step to management",
          science: "Labeling emotions reduces amygdala activation (fear response)"
        },
        
        {
          title: "Empathy Mapping",
          method: "For each team member, map: What do they think? Feel? Say? Do? What are their pains? Gains?",
          benefit: "Understand motivations, communicate better"
        },
        
        {
          title: "Feedback Practice",
          method: "Give 1 piece of specific, actionable feedback daily",
          template: "When you [behavior], I felt [emotion] because [impact]. Next time, try [suggestion].",
          example: "When you interrupted me in the meeting, I felt disrespected because my idea wasn't heard. Next time, let me finish, then share your thoughts."
        }
      ],
      
      videos: [
        { title: "Daniel Goleman - Emotional Intelligence", url: "https://www.youtube.com/watch?v=Y7m9eNoB3NU" },
        { title: "Brené Brown - Power of Vulnerability", url: "https://www.youtube.com/watch?v=iCvmsMzlF7o" },
        { title: "Susan David - Emotional Agility", url: "https://www.youtube.com/watch?v=NDQ1Mi5I4rg" }
      ]
    },
    
    // RESILIENCE & MENTAL TOUGHNESS
    resilience: {
      title: "Building Resilience & Mental Toughness",
      icon: "💪",
      description: "Startups are brutal. You need to be tougher.",
      
      principles: [
        {
          name: "Growth Mindset",
          source: "Carol Dweck",
          fixed: "Intelligence is static. Failure means I'm not smart.",
          growth: "Intelligence is malleable. Failure means I haven't learned YET.",
          impact: "Growth mindset people achieve more, persist longer, enjoy challenges",
          practice: [
            "Replace 'I can't' with 'I can't YET'",
            "Praise effort, not talent: 'You worked hard' not 'You're smart'",
            "See failures as data: 'What did I learn?'",
            "Embrace challenges: 'This will make me better'"
          ],
          example: "Michael Jordan cut from high school team. Didn't think 'I'm not talented.' Thought 'I need to work harder.' Became GOAT."
        },
        
        {
          name: "Stoicism",
          source: "Marcus Aurelius, Seneca, Epictetus",
          core: "Control what you can. Accept what you can't. Know the difference.",
          dichotomy: {
            control: "Your thoughts, actions, effort, attitude",
            noControl: "Others' opinions, outcomes, past, future"
          },
          practices: [
            "Negative visualization: Imagine losing everything. Appreciate what you have.",
            "Amor fati: Love your fate. Everything happens for you, not to you.",
            "Memento mori: Remember you'll die. Makes problems seem smaller.",
            "Premeditatio malorum: Imagine worst case. Prepare for it. Fear disappears."
          ],
          quote: "You have power over your mind, not outside events. Realize this, and you will find strength. - Marcus Aurelius"
        },
        
        {
          name: "Antifragility",
          source: "Nassim Taleb",
          levels: {
            fragile: "Breaks under stress (glass)",
            robust: "Resists stress (rock)",
            antifragile: "Gets stronger from stress (muscles, immune system)"
          },
          application: "Don't just survive failures. Design to get stronger from them.",
          examples: [
            "Muscles: Stress (lifting) → Micro-tears → Stronger muscles",
            "Immune system: Exposure to germs → Antibodies → Stronger immunity",
            "Startups: Customer complaints → Product improvements → Better product"
          ],
          practice: [
            "Seek small stressors: Cold showers, fasting, hard workouts",
            "Learn from every failure: Post-mortems, not blame",
            "Build redundancy: Multiple revenue streams, skills, relationships",
            "Embrace volatility: Market crashes = Buying opportunities"
          ]
        },
        
        {
          name: "Grit",
          source: "Angela Duckworth",
          definition: "Passion + Perseverance for long-term goals",
          formula: "Talent × Effort = Skill. Skill × Effort = Achievement. (Effort counts twice!)",
          components: {
            interest: "Find what you love",
            practice: "Deliberate practice daily",
            purpose: "Connect to something bigger",
            hope: "Believe you can improve"
          },
          example: "Will Smith: 'I'm not talented. I just work harder than everyone else. While you're sleeping, I'm working. While you're eating, I'm working.'"
        },
        
        {
          name: "Stress Inoculation",
          source: "Navy SEALs, Special Forces",
          principle: "Expose to small doses of stress to build tolerance",
          training: [
            "Physical: Cold exposure, fasting, intense exercise",
            "Mental: Public speaking, difficult conversations, high-stakes decisions",
            "Emotional: Meditation, journaling, therapy"
          ],
          benefit: "When real crisis hits, you've been there before. You're calm.",
          quote: "Under pressure, you don't rise to the occasion. You fall to your level of training."
        }
      ],
      
      practices: [
        {
          name: "Morning Routine",
          why: "Win the morning, win the day",
          example: [
            "5:00 AM - Wake up (no snooze)",
            "5:05 - Hydrate (500ml water)",
            "5:10 - Meditate (10 min)",
            "5:20 - Journal (gratitude + goals)",
            "5:30 - Exercise (30 min)",
            "6:00 - Cold shower (2 min)",
            "6:10 - Learn (read/podcast 20 min)",
            "6:30 - Deep work (2 hours, no distractions)"
          ],
          benefit: "Before 9 AM, you've meditated, exercised, learned, and made progress. Most people haven't started."
        },
        
        {
          name: "Meditation",
          why: "Train attention, reduce reactivity, increase clarity",
          types: {
            mindfulness: "Observe thoughts without judgment",
            loving_kindness: "Cultivate compassion",
            body_scan: "Release tension",
            breath_focus: "Calm nervous system"
          },
          howToStart: [
            "Start small: 2 minutes daily",
            "Use app: Headspace, Calm, Waking Up",
            "Focus on breath: In for 4, out for 6",
            "When mind wanders (it will), gently return to breath",
            "Don't judge yourself. That's the practice."
          ],
          science: "8 weeks of meditation increases gray matter in prefrontal cortex (decision-making), decreases amygdala (fear)"
        },
        
        {
          name: "Journaling",
          why: "Clarify thinking, process emotions, track progress",
          prompts: [
            "Morning: What are 3 things I'm grateful for? What would make today great?",
            "Evening: What went well? What could be better? What did I learn?",
            "Weekly: What progress did I make? What's blocking me? What's next?",
            "Monthly: Am I closer to my goals? What needs to change?"
          ],
          benefit: "Externalizes thoughts, reduces rumination, increases self-awareness"
        },
        
        {
          name: "Physical Training",
          why: "Strong body, strong mind",
          principles: [
            "Consistency > Intensity: 30 min daily > 3 hours weekly",
            "Progressive overload: Gradually increase difficulty",
            "Recovery: Sleep 7-9 hours, rest days matter",
            "Variety: Strength, cardio, flexibility"
          ],
          mental_benefits: [
            "Reduces anxiety, depression",
            "Increases focus, energy",
            "Builds discipline, confidence",
            "Proves you can do hard things"
          ],
          quote: "No citizen has a right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable. - Socrates"
        }
      ],
      
      videos: [
        { title: "David Goggins - Can't Hurt Me", url: "https://www.youtube.com/watch?v=78I9dTB9vqM" },
        { title: "Jocko Willink - Discipline Equals Freedom", url: "https://www.youtube.com/watch?v=8W5D6NKjkx4" },
        { title: "Carol Dweck - Growth Mindset", url: "https://www.youtube.com/watch?v=hiiEeMN7vbQ" },
        { title: "Ryan Holiday - The Obstacle Is The Way", url: "https://www.youtube.com/watch?v=Lq9iglXdJPc" }
      ]
    }
  },
  
  // ============================================
  // COMMUNICATION & INFLUENCE
  // ============================================
  
  communication: {
    
    storytelling: {
      title: "The Art of Storytelling",
      icon: "📖",
      why: "Facts tell. Stories sell. Leaders are storytellers.",
      
      structure: {
        name: "Hero's Journey (Joseph Campbell)",
        stages: [
          "Ordinary World - Status quo",
          "Call to Adventure - Problem appears",
          "Refusal of Call - Doubt, fear",
          "Meeting Mentor - Guidance",
          "Crossing Threshold - Commitment",
          "Tests, Allies, Enemies - Challenges",
          "Ordeal - Biggest challenge",
          "Reward - Victory",
          "Return - Share wisdom"
        ],
        application: "Every pitch, presentation, product story follows this",
        example: {
          startup: "World has problem (ordinary) → We discovered it (call) → Seemed impossible (refusal) → Found insight (mentor) → Built solution (threshold) → Faced challenges (tests) → Launched product (ordeal) → Users love it (reward) → Now scaling (return)"
        }
      },
      
      frameworks: [
        {
          name: "Pixar Pitch",
          template: [
            "Once upon a time, [context]",
            "Every day, [status quo]",
            "One day, [inciting incident]",
            "Because of that, [consequence]",
            "Because of that, [escalation]",
            "Until finally, [resolution]"
          ],
          example: "Once upon a time, students struggled to learn PCM. Every day, they memorized formulas without understanding. One day, we realized: What if we combined PCM with coding? Because of that, students started building real projects. Because of that, they understood concepts deeply. Until finally, they became engineers who can build anything."
        },
        
        {
          name: "Problem-Agitate-Solve",
          structure: {
            problem: "Identify pain point",
            agitate: "Make it visceral, urgent",
            solve: "Present your solution"
          },
          example: "Problem: Students hate studying. Agitate: They spend hours memorizing, forget everything, fail exams, lose confidence. Solve: Our platform makes learning fun through projects. They build, they learn, they remember."
        },
        
        {
          name: "Before-After-Bridge",
          structure: {
            before: "Life before your solution",
            after: "Life after your solution",
            bridge: "How to get there"
          },
          example: "Before: Confused by physics formulas. After: Building physics simulations confidently. Bridge: Our interactive challenges teach through doing."
        }
      ],
      
      techniques: [
        {
          name: "Show, Don't Tell",
          bad: "Our product is great",
          good: "Last week, a student who failed physics built a projectile simulator and aced his exam",
          principle: "Specific beats generic. Stories beat claims."
        },
        
        {
          name: "Contrast",
          method: "Highlight difference between old and new",
          example: "Traditional learning: Read textbook, memorize, forget. Our way: Build project, understand deeply, remember forever."
        },
        
        {
          name: "Metaphors & Analogies",
          why: "Make complex simple, abstract concrete",
          examples: [
            "Startup is like rocket: Need escape velocity to break free of gravity (competition)",
            "Code is like LEGO: Small pieces combine to build anything",
            "Learning is like compound interest: Small daily gains = Massive long-term growth"
          ]
        },
        
        {
          name: "Rule of Three",
          why: "Three is memorable, persuasive, satisfying",
          examples: [
            "Life, liberty, pursuit of happiness",
            "Blood, sweat, tears",
            "Veni, vidi, vici (I came, I saw, I conquered)",
            "Our platform: Learn, Build, Master"
          ]
        }
      ],
      
      exercises: [
        {
          title: "Elevator Pitch",
          time: "30 seconds",
          structure: "Problem + Solution + Traction",
          example: "Students hate studying because it's boring memorization. We make learning fun by having them build real projects. 10,000 students, 90% completion rate, partnered with 5 universities.",
          practice: "Record yourself. Watch. Cringe. Improve. Repeat."
        },
        
        {
          title: "Origin Story",
          why: "People connect with why you started",
          template: "I was [situation]. I felt [emotion]. I realized [insight]. So I built [solution].",
          example: "I was a JEE student drowning in formulas. I felt frustrated - I could memorize but not understand. I realized: What if I could code these concepts? So I built this platform.",
          power: "Vulnerability creates connection. Perfection creates distance."
        }
      ],
      
      videos: [
        { title: "Simon Sinek - Start With Why", url: "https://www.youtube.com/watch?v=u4ZoJKF_VuA" },
        { title: "Nancy Duarte - The Secret Structure of Great Talks", url: "https://www.youtube.com/watch?v=1nYFpuc2Umk" },
        { title: "Andrew Stanton (Pixar) - The Clues to a Great Story", url: "https://www.youtube.com/watch?v=KxDwieKpawg" }
      ]
    },
    
    publicSpeaking: {
      title: "Public Speaking & Presentations",
      icon: "🎤",
      why: "Ideas don't spread themselves. You must present them.",
      
      preparation: [
        {
          step: "Know Your Audience",
          questions: [
            "Who are they? (Engineers? Investors? Students?)",
            "What do they care about?",
            "What do they already know?",
            "What do they need to know?",
            "What action do you want them to take?"
          ],
          principle: "Tailor message to audience, not yourself"
        },
        
        {
          step: "Structure",
          framework: "Tell them what you'll tell them. Tell them. Tell them what you told them.",
          opening: "Hook (story, question, stat) → Why it matters → What you'll cover",
          body: "3 main points (max). Each with story/example.",
          closing: "Recap → Call to action → Memorable ending",
          rule: "If you can't explain it simply, you don't understand it well enough. - Einstein"
        },
        
        {
          step: "Slides",
          principles: [
            "One idea per slide",
            "More images, fewer words",
            "Big fonts (30pt minimum)",
            "High contrast (dark text, light background)",
            "No bullet points (use visuals)"
          ],
          bad: "Wall of text, tiny font, clip art",
          good: "One powerful image, one sentence",
          rule: "Slides support you. You're not reading slides."
        }
      ],
      
      delivery: [
        {
          aspect: "Body Language",
          tips: [
            "Stand tall, shoulders back (confidence)",
            "Make eye contact (connection)",
            "Use hand gestures (emphasis)",
            "Move with purpose (energy)",
            "Smile (warmth)"
          ],
          avoid: [
            "Crossed arms (defensive)",
            "Hands in pockets (nervous)",
            "Pacing (anxious)",
            "Reading slides (boring)"
          ]
        },
        
        {
          aspect: "Voice",
          tips: [
            "Vary pace (fast for excitement, slow for importance)",
            "Vary volume (loud for emphasis, soft for intimacy)",
            "Pause (let ideas sink in)",
            "Enunciate (be understood)",
            "Project (be heard)"
          ],
          exercise: "Record yourself. Listen. Improve."
        },
        
        {
          aspect: "Handling Nerves",
          techniques: [
            "Reframe: Not 'I'm nervous' but 'I'm excited'",
            "Breathe: Box breathing before speaking",
            "Prepare: Practice 10x more than you think",
            "Visualize: See yourself succeeding",
            "Start strong: Memorize first 2 minutes"
          ],
          truth: "Everyone's nervous. Pros just hide it better."
        }
      ],
      
      advanced: [
        {
          technique: "Pause for Power",
          why: "Silence is powerful. Lets ideas land.",
          example: "We're going to change education. [3 second pause] Forever.",
          practice: "After key points, pause 2-3 seconds. Feels awkward. Looks powerful."
        },
        
        {
          technique: "Rhetorical Questions",
          why: "Engages audience, makes them think",
          examples: [
            "What if learning was fun?",
            "Why do we accept boring education?",
            "Imagine a world where..."
          ]
        },
        
        {
          technique: "Callbacks",
          why: "Creates cohesion, shows you planned",
          method: "Reference earlier point at end",
          example: "Remember that student I mentioned? She's now an engineer at Google."
        }
      ],
      
      videos: [
        { title: "Chris Anderson - TED's Secret to Great Public Speaking", url: "https://www.youtube.com/watch?v=-FOCpMAww28" },
        { title: "Julian Treasure - How to Speak So People Listen", url: "https://www.youtube.com/watch?v=eIho2S0ZahI" },
        { title: "Amy Cuddy - Your Body Language Shapes Who You Are", url: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc" }
      ]
    }
  },
  
  // ============================================
  // RECOMMENDED READING
  // ============================================
  
  readingList: {
    title: "Essential Books for Tech Leaders",
    
    categories: {
      strategy: [
        { title: "Zero to One", author: "Peter Thiel", why: "How to build the future" },
        { title: "The Lean Startup", author: "Eric Ries", why: "Build-Measure-Learn" },
        { title: "Good to Great", author: "Jim Collins", why: "What makes companies great" },
        { title: "Blue Ocean Strategy", author: "Kim & Mauborgne", why: "Create new markets" },
        { title: "The Innovator's Dilemma", author: "Clayton Christensen", why: "Why big companies fail" }
      ],
      
      leadership: [
        { title: "Extreme Ownership", author: "Jocko Willink", why: "Take responsibility for everything" },
        { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", why: "Real startup struggles" },
        { title: "Principles", author: "Ray Dalio", why: "Decision-making frameworks" },
        { title: "High Output Management", author: "Andy Grove", why: "How to manage" },
        { title: "The Five Dysfunctions of a Team", author: "Patrick Lencioni", why: "Build great teams" }
      ],
      
      psychology: [
        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", why: "How we think and decide" },
        { title: "Influence", author: "Robert Cialdini", why: "Psychology of persuasion" },
        { title: "Mindset", author: "Carol Dweck", why: "Growth vs fixed mindset" },
        { title: "Atomic Habits", author: "James Clear", why: "Build better habits" },
        { title: "The Power of Now", author: "Eckhart Tolle", why: "Presence and awareness" }
      ],
      
      communication: [
        { title: "Made to Stick", author: "Chip & Dan Heath", why: "Make ideas memorable" },
        { title: "Crucial Conversations", author: "Patterson et al", why: "Handle difficult talks" },
        { title: "Never Split the Difference", author: "Chris Voss", why: "Negotiation tactics" },
        { title: "The Mom Test", author: "Rob Fitzpatrick", why: "Talk to customers right" }
      ],
      
      philosophy: [
        { title: "Meditations", author: "Marcus Aurelius", why: "Stoic wisdom" },
        { title: "The Obstacle Is the Way", author: "Ryan Holiday", why: "Turn obstacles into opportunities" },
        { title: "Man's Search for Meaning", author: "Viktor Frankl", why: "Find purpose in suffering" },
        { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", why: "Wealth and happiness" }
      ]
    }
  }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = leadershipPsychology;
}

console.log("🧠 LEADERSHIP & PSYCHOLOGY MODULE LOADED!");
console.log("🎯 Vision & Strategy");
console.log("🧠 Cognitive Biases");
console.log("❤️ Emotional Intelligence");
console.log("💪 Resilience & Mental Toughness");
console.log("📖 Storytelling & Communication");
console.log("📚 Essential Reading List");
console.log("🚀 Ready to lead something bigger!");