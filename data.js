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
        image: 'smartschemes-banner.png',
      },
      {
        number: '02',
        name: 'CityNexus',
        shortDescription: 'A smart city command platform for real-time traffic management, crime surveillance, AI voice assistance, and SOS emergency response.',
        problem: 'Cities lack a unified command interface to monitor and respond to urban challenges in real time — traffic congestion, public safety incidents, and emergency situations are handled through fragmented, disconnected systems.',
        build: 'Engineered a full-stack platform with an interactive map-based dashboard, AI-powered voice assistant, real-time crime and traffic monitoring, SOS emergency system, and a dedicated admin panel for city operators.',
        result: 'Deployed live with a full authentication system, real-time backend health monitoring, and an admin dashboard for city-level operations.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'Node.js', 'Express', 'MongoDB', 'React', 'Vite', 'Vercel'],
        tags: ['AI', 'FULL-STACK', 'SMART CITY'],
        github: 'https://github.com/tejasvnigam2005-sketch/citynexus',
        demo: 'https://citynexus.vercel.app',
        image: null,
      },
      {
        number: '03',
        name: 'CityNexus Server',
        shortDescription: 'The admin dashboard and operations backend that powers CityNexus — giving city operators a real-time control panel to monitor incidents, manage users, and oversee platform health.',
        problem: 'CityNexus needed a dedicated operations layer — a way for administrators to manage the platform, monitor live data streams, review incidents, and control the system behind the scenes without touching the public-facing app.',
        build: 'Built a React-based admin dashboard with Vite, connected to the same backend that serves CityNexus. Provides real-time stats, user management, incident logs, and system health monitoring in a clean operator interface.',
        result: 'Deployed as a standalone admin panel that works alongside CityNexus, completing the full-stack smart city ecosystem with both a public platform and an internal operations dashboard.',
        stack: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Vercel'],
        tags: ['FULL-STACK', 'ADMIN PANEL', 'SMART CITY'],
        github: 'https://github.com/tejasvnigam2005-sketch/citynexusserver',
        demo: 'https://server-two-pi-49.vercel.app',
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
    headline: 'VENTURES & EXPERIENCE',
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
      { label: 'TOOLKIT', target: 'skills' },
      { label: 'KINSHIP', target: 'kinship' },
      { label: 'CONTACT', target: 'contact' },
    ],
    cta: { label: 'LET\'S TALK', target: 'contact' },
  },
};
