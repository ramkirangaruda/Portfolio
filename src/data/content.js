export const profile = {
  name: "Garuda Ramkiran",
  location: "Bangalore, India",
  email: "ramkirangaruda@gmail.com",
  github: "https://github.com/ramkirangaruda",
  linkedin: "https://www.linkedin.com/in/ramkiran-garuda-864011321/",
  resume: "/resume.pdf",
  resumeDate: "Aug 2026",
  // TODO(ramkiran): exact availability-line wording, e.g. "Open to Summer 2027 SDE internships"
  availability: null,
  eyebrow: "Developer & Operator",
  /* Each line is a run of words; `v` picks solid, outlined, or accent treatment. */
  headline: [
    [{ t: "Ships", v: "solid" }, { t: "systems", v: "hollow" }],
    [{ t: "Operates", v: "solid" }, { t: "schools", v: "hollow" }],
    [{ t: "Runs", v: "solid" }, { t: "trails", v: "acid" }],
  ],
  subhead:
    "BTech CSE student at VIT Vellore building production software by day — full-stack systems, AI pipelines, distributed infrastructure — and running the operations behind a K-12 learning center on the side.",
  summary:
    "I'm a CS student who ended up running two things at once: a developer role shipping AI tooling and multi-tenant SaaS, and the day-to-day operations of a school. Along the way I've built an IT helpdesk used by 300+ employees, a government school ERP, a retail analytics engine, and a distributed task scheduler — usually because something was broken and nobody else was going to fix it. JEE 96th percentile, hackathon finalist, ideathon winner, and this year I started running ultra trails for fun.",
};

export const stats = [
  { value: "9.28", label: "CGPA, BTech CSE" },
  { value: "300+", label: "employees on TicketZilla" },
  { value: "1,000", label: "concurrent buyers, 0 oversells" },
  { value: "50km", label: "ultra marathon, finisher" },
];

export const experience = [
  {
    org: "iFocus Systec",
    role: "Software Development Intern — AI & Developer Tooling",
    place: "Bangalore",
    period: "18 May – 18 Jul 2026 · 2 months",
    points: [
      "Studied the QwikHire ATS codebase — a multi-tenant B2B SaaS with AI-run interviews — documenting WebSockets, multi-tenancy, auth, and billing from first principles.",
      "Designed an AI job-description generation pipeline for QwikHire, running a nine-model comparison across Groq-hosted models scored on oracle correctness, automation-readiness and security handling; selected GPT-OSS 20B for skill generation and 120B for JD generation, with compound-mini as production fallback.",
      "Built and shipped TicketZilla, a full-stack IT helpdesk system, deployed and used internally by 300+ employees.",
    ],
    tags: ["React", "TypeScript", "NestJS", "FastAPI", "PostgreSQL"],
  },
  {
    org: "ElectraCode",
    role: "Contract Developer",
    place: "Bangalore",
    period: "Ongoing",
    points: [
      "Built a School ERP for government residential schools in Karnataka, expanding scope from inventory management to admissions, attendance, timetables, faculty management, and health records.",
      "Project is being expanded pan-Karnataka.",
    ],
    tags: ["FastAPI", "PostgreSQL", "OCR", "Systems design"],
  },
  {
    org: "SRS Learning Center",
    role: "Operations & Technology",
    place: "Bengaluru · srsedutech.com",
    period: "Ongoing",
    points: [
      "Manage day-to-day school operations — scheduling, staff coordination, vendor management, student administration — across preschool, K-12 tuition, and IIT foundation coaching.",
      "Run GNR Robotics (gnrrobo.com), the center's hands-on robotics program — curriculum planning, lab setup, instructor coordination, and admissions.",
      "Lead franchising and business development: evaluating partnerships, managing agreements, driving expansion of the learning center model.",
      "Deliver guest lectures for JEE aspirants on problem-solving strategy and subject fundamentals.",
      "Built and manage the school and GNR Robotics websites, plus the internal tooling behind admissions and hiring.",
      "Automate administrative workflows to cut manual effort across the center's operations.",
    ],
    tags: ["Operations", "Franchising", "Next.js", "Automation"],
  },
];

export const gnr = {
  name: "GNR Robotics",
  parent: "by SRS EduTech",
  url: "https://gnrrobo.com",
  location: "SRS Learning Centre, Horamavu Agara, Bengaluru",
  blurb:
    "Most school robotics programs stop at a kit and a block-coding app. GNR Robotics is the opposite: a low-screen-time, build-it-with-your-hands program where students wire circuits, print parts, fly drones, and pitch what they've made. Six-plus years running, out of SRS EduTech.",
  pillars: [
    {
      title: "3D Printing",
      description: "CAD design through to printed parts students actually build with.",
    },
    {
      title: "Drone Technology",
      description: "Drone fundamentals up to FPV piloting in the senior track.",
    },
    {
      title: "Applied AI",
      description: "AI literacy grounded in working projects, not slideware.",
    },
    {
      title: "TechPreneurship",
      description: "Product thinking, prototyping, and pitch competitions.",
    },
  ],
  tracks: [
    {
      band: "Grades 1–2",
      name: "Tinker Explorers",
      description: "Play-based circuits and logic games.",
    },
    {
      band: "Grades 3–5",
      name: "Foundation Builders",
      description: "Block coding, Arduino circuits, and an intro to 3D printing.",
    },
    {
      band: "Grades 6–9",
      name: "Junior Innovator",
      description: "AI literacy, electronics, CAD design, and drone basics.",
    },
    {
      band: "Grades 10–12",
      name: "TechPreneurship Track",
      description: "Embedded systems, Python, FPV drone piloting, and pitch competitions.",
    },
  ],
};

export const toastmasters = {
  club: "Toastmasters International",
  role: "Club Treasurer",
  blurb:
    "I joined to get better at saying things out loud — the same skill that decides whether a design doc lands or a guest lecture holds a room. Ended up holding the club's ledger too.",
  pillars: [
    {
      title: "Club Treasurer",
      description:
        "Own the club's finances end to end: budgeting, dues collection, event fund allocation, and keeping the books clean for the executive committee.",
    },
    {
      title: "Prepared Speeches",
      description:
        "Deliver prepared speeches and take structured evaluations on them — the fastest feedback loop I've found for tightening an argument.",
    },
    {
      title: "Table Topics",
      description:
        "Regular Table Topics speaker: one to two minutes, no prep, no notes. Good practice for thinking clearly while being watched.",
    },
  ],
};

// Project data lives in src/data/projects.js — the single source of truth
// for The Index, project metrics, and the /work/:slug detail routes.

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "Java"],
  Frameworks: ["FastAPI", "Next.js", "React", "NestJS", "Prisma", "Tailwind CSS"],
  Infrastructure: [
    "Docker",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "DuckDB",
    "BullMQ",
    "Git",
    "Vercel",
    "Prometheus",
    "Grafana",
    "OpenTelemetry",
    "Jaeger",
    "k6",
    "Neon",
  ],
  "AI / ML": ["llama.cpp / ggml", "ChromaDB", "PyTorch", "Groq"],
  Concepts: [
    "Distributed systems",
    "ETL",
    "Multi-tenancy",
    "AI / LLM evaluation",
    "DSA",
    "Concurrency control",
    "Observability",
    "Load testing",
    "Chaos engineering",
    "RAG",
    "Model quantization",
    "Admission control",
  ],
};

export const education = [
  {
    school: "VIT Vellore University",
    detail: "BTech, Computer Science & Engineering",
    score: "CGPA 9.28",
    years: "2024 – 2028",
  },
  {
    school: "New Baldwins International",
    detail: "12th, CBSE · JEE Mains 96th percentile",
    score: "90%",
    years: "2023 – 2024",
  },
  {
    school: "Narayana Public School",
    detail: "10th, CBSE",
    score: "96%",
    years: "2021 – 2022",
  },
];

export const achievements = [
  {
    title: "Startup Street 9.0",
    subtitle: "1st Prize — Ideathon",
    description:
      "Proposed a UV-based inspection device to detect used clothing in retail return workflows, presenting feasibility, strategy, and business impact.",
  },
  {
    title: "DevSpace Hackathon",
    subtitle: "Sponsored Track Finalist",
    description:
      "Built RetailOS end-to-end in 54 hours — ETL pipelines, star-schema warehouse, and live KPI dashboards.",
  },
];

export const extras = [
  {
    title: "25km BMF Ultra Trail Run",
    subtitle: "Finisher",
    description: "Completed a demanding off-road ultra trail race — first attempt at endurance running.",
  },
  {
    title: "Bengaluru Ultra Marathon 2026",
    subtitle: "50km Finisher",
    description: "Completed a 50km ultra marathon, building on the trail running base from the BMF race.",
  },
  {
    title: "ACM — VIT Student Chapter",
    subtitle: "Active Member",
    description: "Participates in technical workshops, coding contests, and event organizing.",
  },
];

export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Robotics", href: "#gnr" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
