export const profile = {
  name: "Garuda Ramkiran",
  location: "Bangalore, India",
  email: "ramkirangaruda@gmail.com",
  github: "https://github.com/ramkirangaruda",
  linkedin: "https://www.linkedin.com/in/ramkiran-garuda-864011321/",
  resume: "/resume.pdf",
  resumeDate: "Aug 2026",
  availability: null,
  eyebrow: "Developer",
  /* Each line is a run of words; `v` picks solid, outlined, or accent treatment. */
  headline: [
    [{ t: "Ships", v: "solid" }, { t: "systems", v: "hollow" }],
    [{ t: "Wins", v: "solid" }, { t: "hackathons", v: "hollow" }],
    [{ t: "Runs", v: "solid" }, { t: "trails", v: "acid" }],
  ],
  subhead:
    "BTech CSE student at VIT Vellore building production software — full-stack systems, AI pipelines, distributed infrastructure and security tooling.",
  summary:
    "I'm a CS student who ships AI tooling and multi-tenant SaaS as a developer. Along the way I've built an IT helpdesk used by 300+ employees, a retail analytics engine, a flash-sale checkout engine and a post-quantum IoT defense system — usually because something was broken and nobody else was going to fix it. JEE 96th percentile, Code Cortex 3.0 winner, DevSpace finalist, Startup Street ideathon winner, and this year I started running ultra trails for fun.",
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
];

export const toastmasters = {
  club: "Toastmasters International",
  role: "Club Treasurer",
  blurb:
    "I joined to get better at saying things out loud — the same skill that decides whether a design doc lands or a demo holds a room. Ended up holding the club's ledger too.",
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
    title: "Code Cortex 3.0",
    subtitle: "Winner — Security Track",
    description:
      "Built SentinelMesh: an energy-aware, post-quantum defense system spanning phishing, malware, ESP32 radio mesh and physical tamper detection.",
  },
  {
    title: "DevSpace Hackathon",
    subtitle: "Sponsored Track Finalist",
    description:
      "Built RetailOS end-to-end in 54 hours — ETL pipelines, star-schema warehouse, and live KPI dashboards.",
  },
  {
    title: "Startup Street 9.0",
    subtitle: "1st Prize — Ideathon",
    description:
      "Proposed a UV-based inspection device to detect used clothing in retail return workflows, presenting feasibility, strategy, and business impact.",
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
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
