// ═══════════════════════════════════════════════════════════════
// PORTFOLIO DATA — Edit this file to update all portfolio content
// The 3D animation and section logic remain untouched.
// ═══════════════════════════════════════════════════════════════

const portfolio = {

  // ── Identity ──────────────────────────────────────────────
  person: {
    name: 'TEJASV NIGAM',
    title: 'AI Engineer · Founder · Product Builder',
    tagline: 'I build intelligent systems and turn ambitious ideas into products.',
    bio: 'I build AI-powered systems and products, with a focus on taking ideas from concept to execution. I\'m currently putting that mindset into practice as the founder of Kinship, a healthcare startup.',
    statement: 'Engineer by craft. Builder by obsession. Founder by choice.',
  },

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: 'I build intelligent systems and turn ambitious ideas into products.',
    description: 'I build AI-powered systems and products, with a focus on taking ideas from concept to execution. I\'m currently putting that mindset into practice as the founder of Kinship, a healthcare startup.',
    cta1: { label: 'EXPLORE MY WORK', target: 'work' },
    cta2: { label: 'LET\'S CONNECT', target: 'contact' },
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    sectionLabel: '01 / ABOUT',
    headline: 'THE WAY I BUILD',
    statement: 'I like taking ideas from rough concepts to working systems — figuring out what actually needs to exist, engineering the technology behind it, and turning it into something people can use.',
    pillars: [
      {
        title: 'ENGINEERING',
        description: 'Building systems that work, scale, and last.',
      },
      {
        title: 'AI',
        description: 'Turning emerging intelligence into useful products.',
      },
      {
        title: 'PRODUCT',
        description: 'I care about what gets built and why — turning technical ideas into products that are useful, intuitive, and worth using.',
      },
      {
        title: 'EXPERIMENTATION',
        description: 'I learn by building — prototyping ideas, exploring emerging technology, and pushing concepts from "what if?" to "let\'s see."',
      },
    ],
  },

  // ── Projects ──────────────────────────────────────────────
  projects: {
    sectionLabel: '02 / SELECTED WORK',
    headline: 'THINGS I\'VE BUILT',
    items: [
      {
        number: '01',
        name: 'Smart Schemes',
        shortDescription: 'An intelligent platform that helps users discover and understand relevant government welfare schemes through a simpler, more accessible experience.',
        problem: 'Government schemes can be difficult to discover and understand because information is scattered across different sources, eligibility requirements are complex, and many people don\'t know which schemes apply to them.',
        build: 'Designed and engineered the core application to organize scheme information, simplify eligibility discovery, and create a user-friendly workflow for finding relevant government benefits.',
        result: 'Selected as semi-finalist in two prominent hackathons.',
        stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'Google Generative AI', 'REST APIs'],
        tags: ['AI', 'FULL-STACK', 'CIVIC TECH'],
        github: 'https://github.com/tejasvnigam2005-sketch',
        demo: 'https://smartschemes-latest-tejas.netlify.app/',
        image: null,
      },
      {
        number: '02',
        name: 'Project Two',
        shortDescription: 'Description coming soon.',
        problem: 'Problem statement coming soon.',
        build: 'Build details coming soon.',
        result: 'Results coming soon.',
        stack: [],
        tags: [],
        github: null,
        demo: null,
        image: null,
      },
      {
        number: '03',
        name: 'Project Three',
        shortDescription: 'Description coming soon.',
        problem: 'Problem statement coming soon.',
        build: 'Build details coming soon.',
        result: 'Results coming soon.',
        stack: [],
        tags: [],
        github: null,
        demo: null,
        image: null,
      },
    ],
  },

  // ── Kinship ───────────────────────────────────────────────
  kinship: {
    sectionLabel: '03 / FOUNDER',
    name: 'KINSHIP',
    role: 'Founder & CEO',
    mission: 'To revolutionize preventive wellness by delivering intelligent, deeply personalized dietary guidance that bridges modern nutritional science with human empathy — empowering individuals to master their health with absolute clarity, sustained accountability, and lifelong trust.',
    problem: 'Lack of essential nutrients in a diet causes many and severe health problems over time. Information is scattered, diets are generic, and people struggle to stay healthy with the tools available today.',
    product: 'A product that would bring a major shift worldwide in personal healthcare and diet. It\'s your daily diet app, but not your regular one — it\'s more effective and practical.',
    vision: 'Make diet healthy, tasty, and easy for everyone. Kinship solves the major problem of deficiency in nutrition, vitamins, and other essentials in a diet, making it easy for people around the globe to stay healthy with much less effort.',
    stage: 'Work in progress',
    website: null,
  },

  // ── Experience ────────────────────────────────────────────
  experience: {
    sectionLabel: '04 / EXPERIENCE',
    headline: 'WHERE I\'VE BUILT',
    items: [
      {
        company: 'Kinship',
        role: 'Founder & CEO',
        date: '2026 — Present',
        description: 'Building Kinship, a healthcare startup focused on improving daily diet and health. Leading the product, technical direction, and early-stage development from idea to execution.',
        impact: 'Coming soon',
        techGroups: [
          { label: 'AI', items: ['OpenAI', 'Gemini', 'RAG', 'Agents'] },
          { label: 'APPLICATION', items: ['Next.js', 'TypeScript', 'React'] },
          { label: 'BACKEND', items: ['Python', 'FastAPI', 'REST API'] },
          { label: 'DATA', items: ['PostgreSQL', 'Supabase'] },
          { label: 'INFRASTRUCTURE', items: ['AWS', 'Docker', 'GitHub Actions'] },
        ],
        note: 'Built around a modular architecture designed to evolve from prototype to production.',
      },
    ],
  },

  // ── Skills ────────────────────────────────────────────────
  skills: {
    sectionLabel: '05 / TOOLKIT',
    headline: 'WHAT I BUILD WITH',
    groups: [
      {
        title: 'AI & INTELLIGENCE',
        items: ['Generative AI', 'LLMs', 'AI Applications', 'Machine Learning', 'AI APIs'],
      },
      {
        title: 'SOFTWARE',
        items: ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'FastAPI'],
      },
      {
        title: 'FRONTEND',
        items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Responsive UI'],
      },
      {
        title: 'DATA',
        items: ['PostgreSQL', 'Supabase', 'REST APIs', 'Data Modeling'],
      },
      {
        title: 'CLOUD & INFRASTRUCTURE',
        items: ['AWS', 'Git', 'GitHub', 'Docker', 'Linux'],
      },
    ],
  },

  // ── Proof ─────────────────────────────────────────────────
  proof: {
    sectionLabel: '06 / PROOF',
    headline: 'BUILT. SHIPPED. TESTED.',
    stats: [
      { value: '5+', label: 'HACKATHONS' },
      { value: 'FINALIST', label: 'IN ALL HACKATHONS' },
    ],
  },

  // ── Currently Building ────────────────────────────────────
  currentlyBuilding: {
    sectionLabel: '07 / NOW',
    headline: 'CURRENTLY BUILDING',
    focus: 'Building Kinship — a healthcare startup',
    project: 'Kinship',
    objective: 'Turn the core idea into a working, user-tested product and build the technical foundation for scale.',
    status: 'Founder mode · Early-stage · Building',
    nextMilestone: 'Launching Kinship worldwide.',
  },

  // ── Personal ──────────────────────────────────────────────
  personal: {
    sectionLabel: '08 / BEYOND CODE',
    headline: 'OUTSIDE THE TERMINAL',
    interests: [
      'Technology',
      'Startups',
      'Building ideas',
      'Exploring new places',
    ],
    featured: {
      title: 'DRIVING & AUTOMOTIVE',
      description: 'Long drives, new roads, and the simple joy of being behind the wheel.',
    },
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    headline: 'LET\'S BUILD SOMETHING WORTH TALKING ABOUT.',
    description: 'Whether it\'s an AI system, a product, or an ambitious idea worth pursuing — I\'m always open to conversations that could turn into something real.',
    email: 'tejasvnigam2005@gmail.com',
    github: 'https://github.com/tejasvnigam2005-sketch',
    linkedin: null,
  },

  // ── Navigation ────────────────────────────────────────────
  nav: {
    brand: 'Tejasv N.',
    links: [
      { label: 'WORK', target: 'work' },
      { label: 'ABOUT', target: 'about' },
      { label: 'EXPERIENCE', target: 'experience' },
      { label: 'KINSHIP', target: 'kinship' },
      { label: 'CONTACT', target: 'contact' },
    ],
    cta: { label: 'LET\'S TALK', target: 'contact' },
  },
};
