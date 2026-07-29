export const profile = {
  name: "Garuda Ramkiran",
  location: "Bangalore, India",
  email: "ramkirangaruda@gmail.com",
  github: "https://github.com/ramkirangaruda",
  linkedin: "https://www.linkedin.com/in/ramkiran-garuda-864011321/",
  resume: "/resume.pdf",
  eyebrow: "Developer & Operator",
  headline: ["Ships systems.", "Operates schools.", "Runs trails."],
  subhead:
    "BTech CSE student at VIT Vellore building production software by day — full-stack systems, AI pipelines, distributed infrastructure — and running the operations behind a K-12 learning center on the side.",
  summary:
    "I'm a CS student who ended up running two things at once: a developer role shipping AI tooling and multi-tenant SaaS, and the day-to-day operations of a school. Along the way I've built an IT helpdesk used by 300+ employees, a government school ERP, a retail analytics engine, and a distributed task scheduler — usually because something was broken and nobody else was going to fix it. JEE 96th percentile, hackathon finalist, ideathon winner, and this year I started running ultra trails for fun.",
};

export const stats = [
  { value: "9.28", label: "CGPA, BTech CSE" },
  { value: "300+", label: "employees on TicketZilla" },
  { value: "96th", label: "percentile, JEE Mains" },
  { value: "25km", label: "off-road ultra, first attempt" },
];

export const experience = [
  {
    org: "iFocus Systec",
    role: "Developer — AI & Developer Tooling",
    place: "Bangalore",
    points: [
      "Studied the QwikHire ATS codebase — a multi-tenant B2B SaaS with AI-run interviews — documenting WebSockets, multi-tenancy, auth, and billing from first principles.",
      "Designed an AI job-description generation pipeline for QwikHire; selected GPT-OSS 20B and 120B after comparing models on oracle correctness, automation-readiness, and security handling.",
      "Built and shipped TicketZilla, a full-stack IT helpdesk system, deployed and used internally by 300+ employees.",
    ],
    tags: ["React", "TypeScript", "NestJS", "FastAPI", "PostgreSQL"],
  },
  {
    org: "ElectraCode",
    role: "Contract Developer",
    place: "Bangalore",
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
    points: [
      "Manage day-to-day school operations — scheduling, staff coordination, vendor management, student administration — across preschool, K-12 tuition, and IIT foundation coaching.",
      "Lead franchising and business development: evaluating partnerships, managing agreements, driving expansion of the learning center model.",
      "Deliver guest lectures for JEE aspirants on problem-solving strategy and subject fundamentals.",
      "Built and manage the school website, integrating StaffRoom — a teacher recruitment portal — to hire directly from the platform.",
      "Automate administrative workflows to cut manual effort across the center's operations.",
    ],
    tags: ["Operations", "Franchising", "Next.js", "Automation"],
  },
];

export const projects = [
  {
    name: "TicketZilla",
    tagline: "Internal IT helpdesk, live at iFocus Systec",
    description:
      "Role-based support ticket system with an IT_ADMIN approval workflow, async task queuing via BullMQ, and structured ticket lifecycle management. Built for and deployed at iFocus Systec.",
    tags: ["React", "TypeScript", "NestJS", "FastAPI", "PostgreSQL", "Redis", "BullMQ"],
    href: "https://github.com/ramkirangaruda/IT-Support-Helpdesk-Management-System",
    meta: "300+ employees",
  },
  {
    name: "RetailOS",
    tagline: "Retail analytics engine — DevSpace hackathon finalist",
    description:
      "Star-schema data warehouse with incremental ETL pipelines and automated stockout prediction with reorder recommendations. Sponsored-track finalist at the DevSpace 54-hour hackathon.",
    tags: ["FastAPI", "DuckDB", "Next.js", "Docker", "JWT"],
    href: "https://github.com/ramkirangaruda/RetailOS",
    meta: "Hackathon finalist",
  },
  {
    name: "GridForge",
    tagline: "Distributed task scheduling platform",
    description:
      "Dispatches Python jobs to remote workers via Redis-backed CPU/GPU queues, with isolated Docker execution, PyTorch/CUDA support, and a real-time monitoring dashboard.",
    tags: ["FastAPI", "Redis", "Docker", "React", "Tailwind CSS"],
    href: "https://github.com/ramkirangaruda/gridforge",
    meta: "GPU-aware queues",
  },
  {
    name: "SchoolSync",
    tagline: "Full-featured school management PWA",
    description:
      "Handles student records, fee collection, attendance, homework, academic calendars, photo galleries, report cards, and timetable scheduling in one installable app.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "shadcn/ui", "NextAuth"],
    href: "https://github.com/ramkirangaruda/SRS",
    meta: "PWA + push notifications",
  },
  {
    name: "StaffRoom",
    tagline: "Teacher recruitment marketplace",
    description:
      "Connects schools with teachers through job listings, candidate profiles, and matching — integrated directly into SRS Learning Center's hiring flow.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    href: "https://staffroom-three.vercel.app/",
    meta: "Live product",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "Java"],
  Frameworks: ["FastAPI", "Next.js", "React", "NestJS", "Prisma", "Tailwind CSS"],
  Infrastructure: ["Docker", "Redis", "PostgreSQL", "MongoDB", "DuckDB", "BullMQ", "Git", "Vercel"],
  Concepts: ["Distributed systems", "ETL", "Multi-tenancy", "AI / LLM evaluation", "DSA"],
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
    title: "Toastmasters International",
    subtitle: "Club Treasurer",
    description: "Managed club finances, budgeting, and event fund allocation. Active speaker in Table Topics and prepared speeches.",
  },
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
