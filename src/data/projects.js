/**
 * Single source of truth for every project on the site.
 *
 * @typedef {{ label: string, value: string }} Metric
 * @typedef {
 *   | { type: "p", text: string }
 *   | { type: "list", ordered?: boolean, items: string[] }
 *   | { type: "table", headers: string[], rows: string[][] }
 * } DetailBlock
 * @typedef {{
 *   slug: string,
 *   lab: string,
 *   name: string,
 *   tagline: string,
 *   status: "Shipped" | "Live" | "In build" | "Deployed" | "In delivery",
 *   year: string,
 *   category: string,
 *   summary: string,
 *   metrics: Metric[],
 *   tags: string[],
 *   links: { github?: string, live?: string, writeup?: string },
 *   detail?: {
 *     problem?: DetailBlock[],
 *     approach?: DetailBlock[],
 *     measured?: DetailBlock[],
 *     broke?: DetailBlock[],
 *     next?: DetailBlock[],
 *   },
 * }} Project
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "flashsale-engine",
    lab: "LAB/001",
    name: "Flashsale Engine",
    tagline: "Sells exactly N units to a crowd of 1,000 — three concurrency strategies, measured.",
    status: "Shipped",
    year: "2026",
    category: "Distributed systems",
    summary:
      "A flash-sale checkout engine built to make the oversell race condition real and then beat it. Three concurrency-control strategies — pessimistic row locks, optimistic versioning, and Redis atomic decrement — implemented behind one API and benchmarked head to head, with a chaos harness, idempotency, full observability, and an admission-control queue layered on top without touching the core.",
    metrics: [
      { value: "938 req/s", label: "Peak throughput" },
      { value: "0", label: "Oversells, all strategies" },
      { value: "1,000", label: "Concurrent buyers" },
    ],
    tags: ["PostgreSQL", "Redis", "FastAPI", "k6", "Prometheus", "OpenTelemetry", "Docker"],
    links: {
      github: "https://github.com/ramkirangaruda/DBMS-Project-Flashsale",
    },
    detail: {
      problem: [
        {
          type: "p",
          text: "Two people press Buy at the same instant on the last unit in stock. The database will happily confirm both unless something stops it. I wanted the failure to be reproducible on real devices, not theoretical — so the project ships with a storefront (React + Vite + Tailwind) with a synchronised drop countdown driven by server time, a live stock counter, and a hidden dev toggle to switch which strategy is active mid-demo.",
        },
      ],
      approach: [
        {
          type: "p",
          text: "Three strategies behind one interface: pessimistic SELECT ... FOR UPDATE, optimistic version-column CAS with retry, and Redis atomic DECR. Then four additive layers, each applied without modifying the checkout handlers, database.py, models.py or docker-compose.yml — verified by mechanical diff:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Redis-only idempotency (atomic SET NX, short TTL, fails open if Redis is down)",
            "Prometheus/Grafana metrics",
            "OpenTelemetry + Jaeger tracing",
            "A virtual queue + admission controller in front of checkout",
          ],
        },
      ],
      measured: [
        { type: "p", text: "40 buyers / 5 units:" },
        {
          type: "table",
          headers: ["Strategy", "Confirmed", "Oversold", "Retries", "Throughput"],
          rows: [
            ["Pessimistic (FOR UPDATE)", "5/5", "0", "0", "27.3 req/s"],
            ["Optimistic (version col)", "5/5", "0", "72", "81.9 req/s"],
            ["Redis atomic DECR", "5/5", "0", "0", "938.1 req/s"],
          ],
        },
        {
          type: "p",
          text: "Chaos verification: Jepsen-style black-box harness. The invariant — confirmed orders never exceed stock — held across all three strategies up to N=600 with 50% fault injection.",
        },
        {
          type: "p",
          text: "Idempotency: duplicate-confirm pairs drop to zero once retries hit the cache. Cache-hit speedup is 10.7x measured against an idle control. A 138x figure was also available by comparing against a loaded p50 — I'm reporting the smaller number because the idle control is the honest comparison.",
        },
      ],
      broke: [
        {
          type: "list",
          ordered: true,
          items: [
            "The correctness harness passed while the system lost money. Under real load (N=1000, 60 units), the raw optimistic strategy sold only 47 of 60 units — losers kept retrying into a stampede they kept losing. The invariant held the entire time, so no correctness test could have caught it. Only load testing surfaced it. The admission-control queue fixed it: 60/60 sold.",
            "I was wrong about the ceiling, and measurement corrected me. A K-sweep suggested concurrency plateaued around 30-39 because of FastAPI's 40-thread pool (Little's Law). Replacing the Python load harness with k6 overturned it — the harness itself was the bottleneck, reaching ~115 concurrent where k6 reached ~1000 at the same N. Concurrency actually tracks admission rate K near-linearly under a real driver.",
            "Prediction scorecard at 3 replicas: lock-wait prediction right — 5x concurrency produced ~5x p95 lock wait, serial resource queueing — with an unpredicted nuance that the median improved while the tail worsened. Postgres connection-exhaustion prediction wrong: peak was 51/100 connections, because pools are lazy and track concurrent DB work, not concurrent HTTP requests.",
            "Three defects found by measurement rather than code reading, all one principle: an admission controller must not share a scarce resource with what it is admitting people to. Sync queue-status polling competed with checkout for the same thread pool; token TTL started at grant instead of notify, punishing buyers for server slowness; the admission worker blocked on a DB pool checkout.",
            "Queue layer at N=1000/60 units: peak concurrent checkouts went from 1014 to 60-199, OCC retries fell 84%, pessimistic lock-wait p95 fell 92%, and the invariant held 60/60.",
          ],
        },
      ],
      next: [
        {
          type: "p",
          text: "Bottleneck is now located precisely: one replica is GIL-pinned to a single core; at three replicas it moves into Postgres's lock manager, with 15-20 sessions waiting on Lock. Next step is partitioning hot inventory rows. A named, unfixed observability gap remains: past ~15 concurrent buyers, contention shifts outside instrumented spans into connection-pool and thread queueing, which the current tracing does not capture.",
        },
      ],
    },
  },
  {
    slug: "tessera",
    lab: "LAB/002",
    name: "Tessera",
    tagline:
      "Per-tensor LLM quantization with a Lagrangian knapsack bit allocator — and a USB key that carries your session between machines.",
    status: "In build",
    year: "2026",
    category: "On-device AI",
    summary:
      "Uniform quantization spends the same bit budget on every layer regardless of how much each one affects the output. Tessera allocates bits per tensor using a Lagrangian knapsack solver over measured sensitivity, stored in a nested bit-plane file format, so a single artifact serves multiple precision tiers. Paired with a hardware dongle carrying portable session state and precision profiles between devices.",
    metrics: [
      { value: "Qwen3-1.7B", label: "Model" },
      { value: "16.78", label: "WikiText-2 PPL" },
      { value: "62/62", label: "Tests passing" },
    ],
    tags: ["llama.cpp", "ggml", "Quantization", "C++", "Raspberry Pi 5", "PyTorch"],
    links: {
      github: "https://github.com/ramkirangaruda/Tessera",
    },
    detail: {
      approach: [
        {
          type: "p",
          text: "ggml/llama.cpp chosen as the backend after benchmarking it against PyTorch — it was the only one delivering real memory reduction rather than simulated quantization. Target hardware is a Raspberry Pi 5 (4GB), which is what makes the RAM budget a hard constraint rather than an optimisation.",
        },
      ],
      measured: [
        {
          type: "p",
          text: "M0 verified on Qwen3-1.7B: WikiText-2 perplexity 16.78, 62/62 tests passing.",
        },
      ],
      next: [
        {
          type: "p",
          text: "M1 is a 4,728-evaluation sensitivity sweep, scored on perplexity over domain text rather than generative metrics — generative scores were too noisy to rank layers reliably.",
        },
      ],
    },
  },
  {
    slug: "ticketzilla",
    lab: "LAB/003",
    name: "TicketZilla",
    tagline: "Internal IT helpdesk, live at iFocus Systec",
    status: "Deployed",
    year: "2026",
    category: "Full-stack platform",
    summary:
      "Role-based support ticket system with an IT_ADMIN approval workflow, async task queuing via BullMQ, and structured ticket lifecycle management. Built for and deployed at iFocus Systec.",
    metrics: [],
    tags: ["React", "TypeScript", "NestJS", "FastAPI", "PostgreSQL", "Redis", "BullMQ"],
    links: {
      github: "https://github.com/ramkirangaruda/IT-Support-Helpdesk-Management-System",
    },
  },
  {
    slug: "retailos",
    lab: "LAB/004",
    name: "RetailOS",
    tagline: "Retail analytics engine — DevSpace hackathon finalist",
    status: "Shipped",
    year: "2026",
    category: "Data warehouse",
    summary:
      "Star-schema data warehouse with incremental ETL pipelines and automated stockout prediction with reorder recommendations. Sponsored-track finalist at the DevSpace 54-hour hackathon.",
    metrics: [],
    tags: ["FastAPI", "DuckDB", "Next.js", "Docker", "JWT"],
    links: {
      github: "https://github.com/ramkirangaruda/RetailOS",
    },
  },
  {
    slug: "sentinelmesh",
    lab: "LAB/005",
    name: "SentinelMesh",
    tagline: "Energy-aware security for post-quantum IoT — Code Cortex 3.0, Security Track.",
    status: "Shipped",
    year: "2026",
    category: "Security / embedded",
    summary:
      "Post-quantum cryptography protects the message, but nothing protects the battery: forged requests can drain a constrained device by forcing expensive signature verification. SentinelMesh models the 2015 Ukraine power-grid attack chain with a detector at each stage — phishing email, malicious PE files, the ESP32 field radio mesh (with a learned EnergyGate), and physical tamper sensors — feeding one correlation engine and operator console.",
    metrics: [
      { value: "288", label: "Firmware tests" },
      { value: "99", label: "Console tests" },
      { value: "500/500", label: "ML-to-C parity" },
    ],
    tags: ["ESP32", "PlatformIO", "C++", "Python", "LightGBM", "React", "Post-quantum crypto"],
    links: {
      github: "https://github.com/ramkirangaruda/Sentinel-Mesh",
    },
  },
];

/** Lighter-weight strip shown under the main index — not full cards. */
export const inBuildStrip = [];
