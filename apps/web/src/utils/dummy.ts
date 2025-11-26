export interface User {
  id: string;
  avatar?: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  xURL: string;
  linkedinURL: string;
  isAccountVerified: boolean;
  headline: string;
  createdAt: string; // "yyyy-mm-dd"
  updatedAt: string; // "yyyy-mm-dd"
}

export const sampleUsers: User[] = [
  {
    id: crypto.randomUUID(),
    avatar: "https://i.pravatar.cc/150?img=32",
    firstname: "Olivia",
    lastname: "Martinez",
    username: "olivia.martinez",
    email: "olivia.martinez@example.com",
    xURL: "https://x.com/olivia_m",
    linkedinURL: "https://www.linkedin.com/in/oliviamartinez",
    isAccountVerified: true,
    headline:
      "Olivia Martinez is a senior product manager focused on payments and fintech strategy.",
    createdAt: "2024-03-15",
    updatedAt: "2024-09-02",
  },
  {
    id: crypto.randomUUID(),
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    firstname: "Ethan",
    lastname: "Brown",
    username: "ethanbrown",
    email: "ethan.brown@example.com",
    xURL: "https://x.com/ethanbrown",
    linkedinURL: "https://www.linkedin.com/in/ethanbrown",
    isAccountVerified: false,
    headline:
      "Ethan Brown is a software engineer specializing in backend systems and scalable APIs.",
    createdAt: "2023-11-01",
    updatedAt: "2024-01-20",
  },
  {
    id: crypto.randomUUID(),
    avatar: "https://i.pravatar.cc/150?img=5",
    firstname: "Sophia",
    lastname: "Chen",
    username: "sophia.chen",
    email: "sophia.chen@example.com",
    xURL: "https://x.com/sophia_chen",
    linkedinURL: "https://www.linkedin.com/in/sophiachen",
    isAccountVerified: true,
    headline:
      "Sophia Chen is a data scientist with expertise in machine learning and analytics.",
    createdAt: "2024-06-10",
    updatedAt: "2025-02-14",
  },
  {
    id: crypto.randomUUID(),
    firstname: "Liam",
    lastname: "Patel",
    username: "liampatel",
    email: "liam.patel@example.com",
    xURL: "https://x.com/liam_patel",
    linkedinURL: "https://www.linkedin.com/in/liampatel",
    isAccountVerified: false,
    headline:
      "Liam Patel is a solutions architect concentrating on cloud migrations and reliability.",
    createdAt: "2022-08-22",
    updatedAt: "2023-05-30",
  },
  {
    id: crypto.randomUUID(),
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
    firstname: "Isabella",
    lastname: "Garcia",
    username: "isabella_g",
    email: "isabella.garcia@example.com",
    xURL: "https://x.com/isabellagarcia",
    linkedinURL: "https://www.linkedin.com/in/isabellagarcia",
    isAccountVerified: true,
    headline:
      "Isabella Garcia is a marketing director experienced in B2B growth and brand strategy.",
    createdAt: "2024-01-05",
    updatedAt: "2024-12-01",
  },
  {
    id: crypto.randomUUID(),
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    firstname: "Noah",
    lastname: "Thompson",
    username: "noaht",
    email: "noah.thompson@example.com",
    xURL: "https://x.com/noaht",
    linkedinURL: "https://www.linkedin.com/in/noahthompson",
    isAccountVerified: false,
    headline:
      "Noah Thompson is a QA lead specializing in automation and test strategy.",
    createdAt: "2023-02-18",
    updatedAt: "2024-04-07",
  },
  {
    id: crypto.randomUUID(),
    avatar: "https://i.pravatar.cc/150?img=12",
    firstname: "Mia",
    lastname: "Nguyen",
    username: "mia.nguyen",
    email: "mia.nguyen@example.com",
    xURL: "https://x.com/mia_nguyen",
    linkedinURL: "https://www.linkedin.com/in/mian1990",
    isAccountVerified: true,
    headline:
      "Mia Nguyen is a UX researcher focused on user-centered design and accessibility.",
    createdAt: "2024-05-12",
    updatedAt: "2024-11-20",
  },
  {
    id: crypto.randomUUID(),
    avatar:
      "https://images.unsplash.com/photo-1531123414780-f3b5d2b3db0a?w=200&q=80&auto=format&fit=crop",
    firstname: "Lucas",
    lastname: "Rivera",
    username: "lucasrivera",
    email: "lucas.rivera@example.com",
    xURL: "https://x.com/lucas_r",
    linkedinURL: "https://www.linkedin.com/in/lucasrivera",
    isAccountVerified: false,
    headline:
      "Lucas Rivera is a frontend engineer with a focus on performance and developer experience.",
    createdAt: "2023-12-01",
    updatedAt: "2024-06-18",
  },
  {
    id: crypto.randomUUID(),
    firstname: "Emma",
    lastname: "Wilson",
    username: "emmawilson",
    email: "emma.wilson@example.com",
    xURL: "https://x.com/emmawilson",
    linkedinURL: "https://www.linkedin.com/in/emmawilson",
    isAccountVerified: true,
    headline:
      "Emma Wilson is a corporate counsel advising on technology agreements and compliance.",
    createdAt: "2021-07-09",
    updatedAt: "2024-02-28",
  },
  {
    id: crypto.randomUUID(),
    avatar: "https://i.pravatar.cc/150?img=20",
    firstname: "Benjamin",
    lastname: "Adler",
    username: "benjamin.adler",
    email: "benjamin.adler@example.com",
    xURL: "https://x.com/benjaminadler",
    linkedinURL: "https://www.linkedin.com/in/benjaminadler",
    isAccountVerified: true,
    headline:
      "Benjamin Adler is a finance manager specializing in corporate reporting and forecasting.",
    createdAt: "2024-09-03",
    updatedAt: "2025-01-11",
  },
];

export interface Product {
  id: string;
  logo?: string;
  name: string;
  tagline: string;
  description: string; // up to 600 chars
  category: string[]; // up to 5
  url: string;
  isDev: boolean;
  xURL: string;
  linkedinURL?: string;
  isOpenSource: boolean;
  sourceCodeUrl?: string;
  rating: number; // 0.0 - 5.0
  gallery: string[]; // mostly 1270x760 images
  impressions: number; // number of people who liked the product
  createdAt: string; // "yyyy-mm-dd"
  updatedAt: string; // "yyyy-mm-dd"
  launchDate?: string; // optional "yyyy-mm-dd"
}

export const sampleProducts: Product[] = [
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Flowboard",
    name: "Flowboard",
    tagline: "Visual workflow builder for modern teams",
    description:
      "Flowboard is a no-code visual workflow builder that lets teams design, automate, and monitor complex business processes. Integrations for popular SaaS tools, real-time execution logs, and role-based access make it suitable for ops, marketing, and product teams looking to reduce manual handoffs.",
    category: ["no-code", "automation", "integrations", "SaaS"],
    url: "https://www.flowboard.app",
    isDev: false,
    xURL: "https://x.com/flowboardapp",
    linkedinURL: "https://www.linkedin.com/company/flowboard",
    isOpenSource: false,
    rating: 4.5,
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 4520,
    createdAt: "2023-11-10",
    updatedAt: "2024-06-05",
    launchDate: "2026-06-01",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=SignalHub",
    name: "SignalHub",
    tagline: "Realtime event router and pub/sub layer",
    description:
      "SignalHub routes high-frequency events across services with guaranteed delivery semantics and low latency. Built for microservices and serverless architectures, it provides topic-based routing, backpressure handling, and observability hooks to trace event flows end-to-end.",
    category: ["messaging", "pubsub", "realtime", "observability"],
    url: "https://www.signalhub.io",
    isDev: true,
    xURL: "https://x.com/signalhub_io",
    linkedinURL: "https://www.linkedin.com/company/signalhub",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/signalhub/signalhub",
    rating: 4.2,
    gallery: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1280,
    createdAt: "2024-01-20",
    updatedAt: "2024-04-22",
    launchDate: "2026-07-10",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Cachely",
    name: "Cachely",
    tagline: "Edge caching made simple",
    description:
      "Cachely is a distributed edge caching service that reduces latency and origin load. With intelligent eviction policies, instant purging, and a compact SDK, Cachely is designed for CDNs, media platforms, and high-traffic APIs that need consistent millisecond responses worldwide.",
    category: ["edge", "cache", "performance"],
    url: "https://www.cachely.dev",
    isDev: true,
    xURL: "https://x.com/cachely",
    linkedinURL: "https://www.linkedin.com/company/cachely",
    isOpenSource: false,
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 2340,
    createdAt: "2024-02-05",
    updatedAt: "2024-06-10",
    launchDate: "2026-08-15",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=NimbusDB",
    name: "NimbusDB",
    tagline: "Cloud-native document database",
    description:
      "NimbusDB is a horizontally scalable document database with a focus on developer ergonomics. It supports flexible querying, multi-region replication, ACID transactions for single-document scopes, and a compact CLI for migrations and backups. Designed to fit serverless and container-first stacks.",
    category: ["database", "cloud", "distributed", "serverless"],
    url: "https://www.nimbusdb.com",
    isDev: false,
    xURL: "https://x.com/nimbusdb",
    linkedinURL: "https://www.linkedin.com/company/nimbusdb",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/nimbusdb/nimbus",
    rating: 3.9,
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 980,
    createdAt: "2023-12-12",
    updatedAt: "2024-03-16",
    launchDate: "2026-09-01",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=PulseUI",
    name: "PulseUI",
    tagline: "Design system & component library",
    description:
      "PulseUI is a lightweight design system and React component library focused on accessibility and performance. It offers composable primitives, theming, and a visual playground for designers and developers to prototype and ship consistent interfaces quickly.",
    category: ["design-system", "ui", "react", "accessibility"],
    url: "https://www.pulseui.design",
    isDev: true,
    xURL: "https://x.com/pulseui",
    linkedinURL: "https://www.linkedin.com/company/pulseui",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/pulseui/pulseui",
    rating: 4.7,
    gallery: [
      "https://images.unsplash.com/photo-1523475496153-3d6ccff6b4f2?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 5120,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-09",
    launchDate: "2026-11-01",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Authly",
    name: "Authly",
    tagline: "Authentication & authorization as a service",
    description:
      "Authly provides a simple API for authentication, single sign-on, and fine-grained authorization. Features include passwordless login, OAuth providers, session management, and audit logging. Built with enterprise-grade security and developer-first SDKs for fast integration.",
    category: ["security", "auth", "SSO", "identity"],
    url: "https://www.authly.security",
    isDev: false,
    xURL: "https://x.com/authly_sec",
    linkedinURL: "https://www.linkedin.com/company/authly",
    isOpenSource: false,
    rating: 4.1,
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521790362716-9c9f8a9f2b2f?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 3000,
    createdAt: "2023-10-02",
    updatedAt: "2024-02-03",
    launchDate: "2026-05-20",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=MarketMesh",
    name: "MarketMesh",
    tagline: "Realtime market data & analytics",
    description:
      "MarketMesh aggregates global market data feeds, normalizes events, and provides analytics pipelines for trading systems and fintech applications. Built-in connectors, backtesting playgrounds, and dashboards make it easy to monitor streams and derive trading signals.",
    category: ["fintech", "analytics", "streaming"],
    url: "https://www.marketmesh.co",
    isDev: true,
    xURL: "https://x.com/marketmesh",
    linkedinURL: "https://www.linkedin.com/company/marketmesh",
    isOpenSource: false,
    rating: 3.8,
    gallery: [
      "https://images.unsplash.com/photo-1517148815978-75f6acaaff06?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 850,
    createdAt: "2024-04-01",
    updatedAt: "2024-05-14",
    launchDate: "2026-10-10",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=TelemetryX",
    name: "TelemetryX",
    tagline: "Lightweight distributed tracing & metrics",
    description:
      "TelemetryX provides a compact agent for collecting traces and metrics with minimal overhead. It exports to popular backends, supports adaptive sampling, and includes a centralized UI for trace inspection. Ideal for startups that need observability without heavy operational cost.",
    category: ["observability", "tracing", "metrics", "agent"],
    url: "https://www.telemetryx.io",
    isDev: true,
    xURL: "https://x.com/telemetryx",
    linkedinURL: "https://www.linkedin.com/company/telemetryx",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/telemetryx/agent",
    rating: 4.3,
    gallery: [
      "https://images.unsplash.com/photo-1531498860504-0f8a4b6cd7c9?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 2100,
    createdAt: "2023-09-15",
    updatedAt: "2024-09-02",
    launchDate: "2026-06-20",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Gridly",
    name: "Gridly",
    tagline: "Responsive grid layout engine",
    description:
      "Gridly is a compact layout engine that provides fine-grained control over responsive grids, auto-placement heuristics, and performant rendering for highly dynamic dashboards and data-heavy interfaces.",
    category: ["ui", "layout", "css", "performance"],
    url: "https://www.gridly.dev",
    isDev: true,
    xURL: "https://x.com/gridly",
    linkedinURL: "https://www.linkedin.com/company/gridly",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/gridly/gridly",
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1503424886304-6a4698e5dfb9?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526378722281-1fbb0f6f9f8b?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1760,
    createdAt: "2024-03-30",
    updatedAt: "2024-05-07",
    launchDate: "2026-08-30",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=OrbitCache",
    name: "OrbitCache",
    tagline: "Smart edge caching for media",
    description:
      "OrbitCache accelerates media delivery with adaptive chunking, conditional prefetching, and multi-tenant edge policies. Designed for video platforms and live streaming applications to reduce rebuffering and origin load.",
    category: ["edge", "cache", "media"],
    url: "https://www.orbitcache.io",
    isDev: false,
    xURL: "https://x.com/orbitcache",
    linkedinURL: "https://www.linkedin.com/company/orbitcache",
    isOpenSource: false,
    rating: 3.6,
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 640,
    createdAt: "2023-08-22",
    updatedAt: "2024-06-22",
    launchDate: "2026-09-15",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=SyncLane",
    name: "SyncLane",
    tagline: "Conflict-free sync for offline apps",
    description:
      "SyncLane provides CRDT-based synchronization primitives and a tiny SDK for reliable offline-first experiences. It handles merges, versioning, and efficient delta replication across devices and browsers.",
    category: ["sync", "offline", "sdk"],
    url: "https://www.synclane.dev",
    isDev: true,
    xURL: "https://x.com/synclane",
    linkedinURL: "https://www.linkedin.com/company/synclane",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/synclane/synclane",
    rating: 4.4,
    gallery: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 2900,
    createdAt: "2023-11-05",
    updatedAt: "2024-03-24",
    launchDate: "2026-12-01",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=BrightLoop",
    name: "BrightLoop",
    tagline: "Event-driven orchestration for microservices",
    description:
      "BrightLoop simplifies event choreography with a visual editor, retry policies, and observability hooks. It supports long-running workflows, sagas, and custom adapters for cloud-native environments.",
    category: ["orchestration", "microservices", "workflow"],
    url: "https://www.brightloop.app",
    isDev: false,
    xURL: "https://x.com/brightloop",
    linkedinURL: "https://www.linkedin.com/company/brightloop",
    isOpenSource: false,
    rating: 3.9,
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1200,
    createdAt: "2024-01-18",
    updatedAt: "2024-02-05",
    launchDate: "2026-07-20",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Formica",
    name: "Formica",
    tagline: "Adaptive form builder and validations",
    description:
      "Formica is a lightweight form engine that provides schema-driven forms, conditional logic, and accessible validation UIs. It integrates with popular frontend frameworks and reduces repetitive form boilerplate.",
    category: ["forms", "ui", "accessibility"],
    url: "https://www.formica.dev",
    isDev: true,
    xURL: "https://x.com/formica",
    linkedinURL: "https://www.linkedin.com/company/formica",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/formica/formica",
    rating: 4.6,
    gallery: [
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 3400,
    createdAt: "2024-02-20",
    updatedAt: "2024-04-08",
    launchDate: "2026-10-01",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=DocuMint",
    name: "DocuMint",
    tagline: "Document generation & templating API",
    description:
      "DocuMint offers a flexible templating API for generating PDFs, DOCX, and HTML reports with dynamic data, styling, and merge fields. It supports streaming, caching, and high-throughput generation for SaaS use cases.",
    category: ["documents", "api", "pdf"],
    url: "https://www.documint.io",
    isDev: false,
    xURL: "https://x.com/documint",
    linkedinURL: "https://www.linkedin.com/company/documint",
    isOpenSource: false,
    rating: 3.7,
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523911437204-3ec3d6b9f8d5?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 760,
    createdAt: "2023-07-30",
    updatedAt: "2024-01-13",
    launchDate: "2026-05-30",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=LedgerWave",
    name: "LedgerWave",
    tagline: "Event-sourced ledger for fintech apps",
    description:
      "LedgerWave is an immutable, auditable ledger service optimized for high-volume financial events. It exposes strict guarantees for ordering, reconciliation tools, and integrations with settlement systems.",
    category: ["fintech", "ledger", "compliance"],
    url: "https://www.ledgerwave.com",
    isDev: true,
    xURL: "https://x.com/ledgerwave",
    linkedinURL: "https://www.linkedin.com/company/ledgerwave",
    isOpenSource: false,
    rating: 4.2,
    gallery: [
      "https://images.unsplash.com/photo-1532074205216-d0e1f7b2e3f6?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1680,
    createdAt: "2023-10-12",
    updatedAt: "2024-08-30",
    launchDate: "2026-11-15",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=BeaconKit",
    name: "BeaconKit",
    tagline: "Feature flagging & gradual rollouts",
    description:
      "BeaconKit provides low-latency feature flags, targeting rules, and analytics hooks for safe rollouts. It supports multi-environment strategies, percentage rollouts, and SDKs for server and client runtimes.",
    category: ["feature-flags", "devops", "sdk"],
    url: "https://www.beaconkit.dev",
    isDev: false,
    xURL: "https://x.com/beaconkit",
    linkedinURL: "https://www.linkedin.com/company/beaconkit",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/beaconkit/beaconkit",
    rating: 4.5,
    gallery: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 2750,
    createdAt: "2023-11-21",
    updatedAt: "2024-07-04",
    launchDate: "2026-06-10",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=QueryForge",
    name: "QueryForge",
    tagline: "SQL-first analytics pipeline",
    description:
      "QueryForge lets teams author repeatable analytics pipelines with SQL, materialized views, and incremental refresh. It plugs into data warehouses and provides lineage, scheduling, and lightweight orchestration.",
    category: ["analytics", "sql", "data-engineering"],
    url: "https://www.queryforge.ai",
    isDev: true,
    xURL: "https://x.com/queryforge",
    linkedinURL: "https://www.linkedin.com/company/queryforge",
    isOpenSource: false,
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1500,
    createdAt: "2024-01-08",
    updatedAt: "2024-05-20",
    launchDate: "2026-09-05",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=StyleGrid",
    name: "StyleGrid",
    tagline: "Theme engine and component tokens",
    description:
      "StyleGrid centralizes design tokens, consistent theming, and token-based component styling for multi-product design systems. It exports platform-ready tokens and integrates with build tools for runtime theming.",
    category: ["design-system", "theming", "tokens"],
    url: "https://www.stylegrid.design",
    isDev: true,
    xURL: "https://x.com/stylegrid",
    linkedinURL: "https://www.linkedin.com/company/stylegrid",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/stylegrid/stylegrid",
    rating: 4.1,
    gallery: [
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1270&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1980,
    createdAt: "2023-12-05",
    updatedAt: "2024-06-16",
    launchDate: "2026-08-05",
  },

  // 15 additional products
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=EdgePulse",
    name: "EdgePulse",
    tagline: "Edge compute orchestration",
    description:
      "EdgePulse coordinates distributed edge compute across regions with workload placement, autoscaling, and secure tunnels. Optimized for latency-sensitive applications and IoT fleets.",
    category: ["edge", "orchestration", "compute"],
    url: "https://www.edgepulse.io",
    isDev: true,
    xURL: "https://x.com/edgepulse",
    linkedinURL: "https://www.linkedin.com/company/edgepulse",
    isOpenSource: false,
    rating: 4.2,
    gallery: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 980,
    createdAt: "2024-02-14",
    updatedAt: "2024-10-12",
    launchDate: "2026-12-10",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=AuthVault",
    name: "AuthVault",
    tagline: "Secrets management for application teams",
    description:
      "AuthVault is a secrets and credential management service providing short-lived certificates, rotation policies, and fine-grained access controls for cloud-native applications.",
    category: ["security", "secrets", "compliance"],
    url: "https://www.authvault.io",
    isDev: false,
    xURL: "https://x.com/authvault",
    linkedinURL: "https://www.linkedin.com/company/authvault",
    isOpenSource: false,
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 640,
    createdAt: "2023-05-10",
    updatedAt: "2024-03-11",
    launchDate: "2026-05-05",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Metricly",
    name: "Metricly",
    tagline: "Lightweight metrics pipeline",
    description:
      "Metricly ingests high-cardinality metrics and exposes a compact query API with adaptive downsampling and storage-tiering to control costs while preserving query fidelity.",
    category: ["observability", "metrics", "analytics"],
    url: "https://www.metricly.app",
    isDev: true,
    xURL: "https://x.com/metricly",
    isOpenSource: false,
    rating: 4.1,
    gallery: [
      "https://images.unsplash.com/photo-1531498860504-0f8a4b6cd7c9?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1120,
    createdAt: "2024-06-01",
    updatedAt: "2024-11-10",
    launchDate: "2026-10-20",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=ThreadFlow",
    name: "ThreadFlow",
    tagline: "Event stream processing made simple",
    description:
      "ThreadFlow offers a serverless stream processing platform with SQL-based transforms, windowing, and durable checkpointing for real-time analytics and alerting.",
    category: ["streaming", "analytics", "serverless"],
    url: "https://www.threadflow.dev",
    isDev: true,
    xURL: "https://x.com/threadflow",
    linkedinURL: "https://www.linkedin.com/company/threadflow",
    isOpenSource: false,
    rating: 4.3,
    gallery: [
      "https://images.unsplash.com/photo-1517148815978-75f6acaaff06?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 760,
    createdAt: "2024-04-12",
    updatedAt: "2024-07-09",
    launchDate: "2027-01-15",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=CacheSphere",
    name: "CacheSphere",
    tagline: "Distributed caching across CDNs",
    description:
      "CacheSphere synchronizes cache layers across CDNs with consistency controls, tiered invalidation, and SDKs for common runtimes.",
    category: ["cache", "cdn", "edge"],
    url: "https://www.cachesphere.com",
    isDev: false,
    xURL: "https://x.com/cachesphere",
    isOpenSource: false,
    rating: 3.9,
    gallery: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 430,
    createdAt: "2023-04-20",
    updatedAt: "2023-05-20",
    launchDate: "2026-09-25",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=FormForge",
    name: "FormForge",
    tagline: "Composable form primitives",
    description:
      "FormForge exposes a schema-first form renderer with server-side validation connectors and client-side performance optimizations for large forms.",
    category: ["forms", "validation", "ui"],
    url: "https://www.formforge.dev",
    isDev: true,
    xURL: "https://x.com/formforge",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/formforge/formforge",
    rating: 4.5,
    gallery: [
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 2210,
    createdAt: "2024-05-01",
    updatedAt: "2024-09-01",
    launchDate: "2026-11-05",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Notifyly",
    name: "Notifyly",
    tagline: "Unified notifications & delivery",
    description:
      "Notifyly consolidates push, email, SMS, and in-app notifications into a single API with delivery guarantees, fallbacks, and personalization features.",
    category: ["messaging", "notifications", "api"],
    url: "https://www.notifyly.com",
    isDev: false,
    xURL: "https://x.com/notifyly",
    isOpenSource: false,
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 980,
    createdAt: "2024-03-15",
    updatedAt: "2024-12-12",
    launchDate: "2026-07-01",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=SchemaSafe",
    name: "SchemaSafe",
    tagline: "Schema registry and compatibility tools",
    description:
      "SchemaSafe stores and validates schemas for events and messages with compatibility checks, versioning, and client code generation.",
    category: ["schema", "events", "data"],
    url: "https://www.schemasafe.io",
    isDev: true,
    xURL: "https://x.com/schemasafe",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/schemasafe/schemasafe",
    rating: 4.2,
    gallery: [
      "https://images.unsplash.com/photo-1523475496153-3d6ccff6b4f2?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 540,
    createdAt: "2024-01-11",
    updatedAt: "2024-04-02",
    launchDate: "2026-06-30",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Inspecta",
    name: "Inspecta",
    tagline: "Runtime security posture scanning",
    description:
      "Inspecta continuously analyzes running workloads for misconfigurations, drift, and vulnerable packages, producing prioritized remediation reports and CI integrations.",
    category: ["security", "scanning", "ci"],
    url: "https://www.inspecta.security",
    isDev: false,
    xURL: "https://x.com/inspecta_sec",
    linkedinURL: "https://www.linkedin.com/company/inspecta",
    isOpenSource: false,
    rating: 4.3,
    gallery: [
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1285,
    createdAt: "2023-09-27",
    updatedAt: "2024-02-14",
    launchDate: "2026-12-20",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=DataWeave",
    name: "DataWeave",
    tagline: "Streaming ETL for real-time insights",
    description:
      "DataWeave provides a streaming-first ETL pipeline with connectors, windowed aggregations, and schema evolution tooling for continuous data transformations.",
    category: ["etl", "streaming", "data-engineering"],
    url: "https://www.dataweave.ai",
    isDev: true,
    xURL: "https://x.com/dataweave",
    isOpenSource: false,
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1990,
    createdAt: "2022-09-18",
    updatedAt: "2022-10-03",
    launchDate: "2026-05-25",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=Logix",
    name: "Logix",
    tagline: "Centralized logging with fast queries",
    description:
      "Logix stores, indexes, and queries logs at scale with cost controls, retention policies, and a lightweight query language optimized for developers and SREs.",
    category: ["logging", "observability", "search"],
    url: "https://www.logix.io",
    isDev: false,
    xURL: "https://x.com/logix",
    isOpenSource: false,
    rating: 3.8,
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 710,
    createdAt: "2023-06-05",
    updatedAt: "2024-01-21",
    launchDate: "2026-08-12",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=SignalEdge",
    name: "SignalEdge",
    tagline: "Low-latency signal propagation",
    description:
      "SignalEdge focuses on deterministic event delivery across unreliable networks with adaptive reconnection strategies and bandwidth-aware batching.",
    category: ["realtime", "messaging", "edge"],
    url: "https://www.signaledge.net",
    isDev: true,
    xURL: "https://x.com/signaledge",
    isOpenSource: false,
    rating: 4.1,
    gallery: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 920,
    createdAt: "2024-02-02",
    updatedAt: "2024-06-18",
    launchDate: "2026-09-02",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=BuildForge",
    name: "BuildForge",
    tagline: "Distributed build system",
    description:
      "BuildForge distributes compilation and CI workloads across a pool of workers with cache-sharing, remote execution, and artifact provenance tracking.",
    category: ["ci", "build", "devops"],
    url: "https://www.buildforge.dev",
    isDev: true,
    xURL: "https://x.com/buildforge",
    isOpenSource: true,
    sourceCodeUrl: "https://github.com/buildforge/buildforge",
    rating: 4.4,
    gallery: [
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 1400,
    createdAt: "2023-11-28",
    updatedAt: "2024-04-02",
    launchDate: "2026-11-30",
  },
  {
    id: crypto.randomUUID(),
    logo: "https://via.placeholder.com/128.png?text=APIQuill",
    name: "APIQuill",
    tagline: "Rapid API design & mocking",
    description:
      "APIQuill lets teams design, document, and mock APIs with example-driven contracts and integrated linting to catch breaking changes early in the dev cycle.",
    category: ["api", "developer-tools", "mocking"],
    url: "https://www.apiquill.com",
    isDev: false,
    xURL: "https://x.com/apiquill",
    isOpenSource: false,
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1503424886304-6a4698e5dfb9?w=1270&q=80&auto=format&fit=crop",
    ],
    impressions: 860,
    createdAt: "2024-01-02",
    updatedAt: "2024-06-30",
    launchDate: "2026-06-05",
  },
];

export interface Review {
  id: string;
  productId: string;
  userId: string;
  review: string;
  createdAt: string; // "yyyy-mm-dd"
  updatedAt: string; // "yyyy-mm-dd"
}

export const sampleReviews: Review[] = (() => {
  const p = sampleProducts;
  const u = sampleUsers;

  return [
    {
      id: crypto.randomUUID(),
      productId: p[0].id,
      userId: u[0].id,
      review:
        "Flowboard saved our ops team hours every week — the visual editor is excellent.",
      createdAt: "2024-06-05",
      updatedAt: "2024-06-05",
    },
    {
      id: crypto.randomUUID(),
      productId: p[1].id,
      userId: u[1].id,
      review:
        "SignalHub is fast and reliable. We had a couple of quirks with backpressure but support was helpful.",
      createdAt: "2024-04-22",
      updatedAt: "2024-04-22",
    },
    {
      id: crypto.randomUUID(),
      productId: p[2].id,
      userId: u[2].id,
      review: "Cachely did wonders for global latency. Super easy to plug in.",
      createdAt: "2024-06-10",
      updatedAt: "2024-06-10",
    },
    {
      id: crypto.randomUUID(),
      productId: p[3].id,
      userId: u[3].id,
      review:
        "NimbusDB has great ergonomics but documentation around multi-region setup could be clearer.",
      createdAt: "2024-03-15",
      updatedAt: "2024-03-16",
    },
    {
      id: crypto.randomUUID(),
      productId: p[4].id,
      userId: u[4].id,
      review:
        "PulseUI's accessibility defaults saved us tons of manual fixes — highly recommend.",
      createdAt: "2024-01-09",
      updatedAt: "2024-01-09",
    },
    {
      id: crypto.randomUUID(),
      productId: p[5].id,
      userId: u[5].id,
      review: "Authly's SSO integration worked out of the box. Clean SDKs.",
      createdAt: "2024-02-02",
      updatedAt: "2024-02-03",
    },
    {
      id: crypto.randomUUID(),
      productId: p[6].id,
      userId: u[6].id,
      review:
        "MarketMesh gave us low-latency feeds but pricing ramps quickly for heavy usage.",
      createdAt: "2024-05-14",
      updatedAt: "2024-05-14",
    },
    {
      id: crypto.randomUUID(),
      productId: p[7].id,
      userId: u[7].id,
      review:
        "TelemetryX is lightweight and integrates nicely with our backend — negligible overhead.",
      createdAt: "2024-09-02",
      updatedAt: "2024-09-02",
    },
    {
      id: crypto.randomUUID(),
      productId: p[8].id,
      userId: u[8].id,
      review:
        "Gridly made responsive layouts trivial. Love the auto-placement heuristics.",
      createdAt: "2024-05-07",
      updatedAt: "2024-05-07",
    },
    {
      id: crypto.randomUUID(),
      productId: p[9].id,
      userId: u[9].id,
      review:
        "OrbitCache helped reduce rebuffering on our streaming app by ~30%.",
      createdAt: "2024-06-22",
      updatedAt: "2024-06-22",
    },
    {
      id: crypto.randomUUID(),
      productId: p[10].id,
      userId: u[8].id,
      review:
        "SyncLane's CRDTs are brilliant for offline-first UX. Merging is painless.",
      createdAt: "2024-03-24",
      updatedAt: "2024-03-24",
    },
    {
      id: crypto.randomUUID(),
      productId: p[11].id,
      userId: u[0].id,
      review:
        "BrightLoop reduced our orchestration boilerplate. The visual editor is a highlight.",
      createdAt: "2024-02-05",
      updatedAt: "2024-02-05",
    },
  ];
})();

export interface Reply {
  id: string;
  reply: string;
  userId: string;
  replyId: string;
  likes: number;
  createdAt: string; // "yyyy-mm-dd"
  UpdatedAt: string; // "yyyy-mm-dd"
}

export interface Comment {
  id: string;
  productId: string;
  comment: string;
  userId: string;
  likes: number;
  replies?: Reply[];
  createdAt: string; // "yyyy-mm-dd"
  updatedAt: string; // "yyyy-mm-dd"
}

export const sampleComments: Comment[] = (() => {
  const p = sampleProducts;
  const u = sampleUsers;

  const c1: Comment = {
    id: crypto.randomUUID(),
    productId: p[0].id,
    comment: "Love the visual editor — sped up our workflows dramatically.",
    userId: u[0].id,
    likes: 18,
    createdAt: "2024-06-02",
    updatedAt: "2024-06-03",
  };

  const c2: Comment = {
    id: crypto.randomUUID(),
    productId: p[1].id,
    comment: "Reliable routing, but would love better dashboard metrics.",
    userId: u[1].id,
    likes: 7,
    createdAt: "2024-04-18",
    updatedAt: "2024-04-20",
  };

  const c3: Comment = {
    id: crypto.randomUUID(),
    productId: p[2].id,
    comment: "Edge caching integration was straightforward and fast.",
    userId: u[2].id,
    likes: 12,
    createdAt: "2024-08-10",
    updatedAt: "2024-08-10",
  };

  const c4: Comment = {
    id: crypto.randomUUID(),
    productId: p[3].id,
    comment: "Great ergonomics for developers, saved us hours on migrations.",
    userId: u[3].id,
    likes: 22,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-02",
  };

  const r41: Reply = {
    id: crypto.randomUUID(),
    reply: "Which migration tool did you use with it?",
    userId: u[4].id,
    replyId: c4.id,
    likes: 5,
    createdAt: "2024-03-02",
    UpdatedAt: "2024-03-02",
  };

  const r42: Reply = {
    id: crypto.randomUUID(),
    reply: "We used the CLI + a small custom script for schema diffs.",
    userId: u[3].id,
    replyId: r41.id, // reply to the reply
    likes: 3,
    createdAt: "2024-03-03",
    UpdatedAt: "2024-03-03",
  };

  c4.replies = [r41, r42];

  const c5: Comment = {
    id: crypto.randomUUID(),
    productId: p[4].id,
    comment: "Accessible components are a big win for our team.",
    userId: u[5].id,
    likes: 14,
    createdAt: "2024-07-12",
    updatedAt: "2024-07-14",
  };

  const c6: Comment = {
    id: crypto.randomUUID(),
    productId: p[5].id,
    comment: "Auth flows worked out of the box with our SSO provider.",
    userId: u[6].id,
    likes: 9,
    createdAt: "2024-01-28",
    updatedAt: "2024-01-30",
  };

  const c7: Comment = {
    id: crypto.randomUUID(),
    productId: p[6].id,
    comment: "Market data latency is impressive, great for live dashboards.",
    userId: u[7].id,
    likes: 11,
    createdAt: "2024-02-11",
    updatedAt: "2024-02-12",
  };

  const c8: Comment = {
    id: crypto.randomUUID(),
    productId: p[7].id,
    comment: "TelemetryX agent is tiny and non-intrusive — recommended.",
    userId: u[8].id,
    likes: 16,
    createdAt: "2024-09-01",
    updatedAt: "2024-09-02",
  };

  const c9: Comment = {
    id: crypto.randomUUID(),
    productId: p[8].id,
    comment: "Gridly made our dashboard layout much easier to reason about.",
    userId: u[9].id,
    likes: 8,
    createdAt: "2024-05-06",
    updatedAt: "2024-05-07",
  };

  const c10: Comment = {
    id: crypto.randomUUID(),
    productId: p[9].id,
    comment: "OrbitCache helped reduce buffering for our streaming app.",
    userId: u[9].id,
    likes: 13,
    createdAt: "2024-06-20",
    updatedAt: "2024-06-21",
  };

  const c11: Comment = {
    id: crypto.randomUUID(),
    productId: p[10].id,
    comment: "SyncLane's CRDT primitives worked well for our offline sync.",
    userId: u[0].id,
    likes: 10,
    createdAt: "2024-03-22",
    updatedAt: "2024-03-25",
  };

  const c12: Comment = {
    id: crypto.randomUUID(),
    productId: p[11].id,
    comment: "BrightLoop simplified our saga orchestration considerably.",
    userId: u[1].id,
    likes: 6,
    createdAt: "2024-02-01",
    updatedAt: "2024-02-02",
  };

  const c13: Comment = {
    id: crypto.randomUUID(),
    productId: p[12].id,
    comment: "Formica's conditional logic saved a lot of custom code.",
    userId: u[2].id,
    likes: 15,
    createdAt: "2024-04-08",
    updatedAt: "2024-04-09",
  };

  const c14: Comment = {
    id: crypto.randomUUID(),
    productId: p[13].id,
    comment: "DocuMint handles templating reliably at scale.",
    userId: u[3].id,
    likes: 4,
    createdAt: "2024-01-12",
    updatedAt: "2024-01-13",
  };

  const c15: Comment = {
    id: crypto.randomUUID(),
    productId: p[14].id,
    comment: "LedgerWave's ordering guarantees were critical for us.",
    userId: u[4].id,
    likes: 19,
    createdAt: "2024-08-30",
    updatedAt: "2024-09-01",
  };

  const c16: Comment = {
    id: crypto.randomUUID(),
    productId: p[15].id,
    comment: "BeaconKit made percentage rollouts painless.",
    userId: u[5].id,
    likes: 21,
    createdAt: "2024-07-03",
    updatedAt: "2024-07-04",
  };

  const c17: Comment = {
    id: crypto.randomUUID(),
    productId: p[16].id,
    comment: "QueryForge saved us from writing a lot of bespoke ETL.",
    userId: u[6].id,
    likes: 5,
    createdAt: "2024-05-20",
    updatedAt: "2024-05-21",
  };

  const c18: Comment = {
    id: crypto.randomUUID(),
    productId: p[17].id,
    comment: "StyleGrid tokens integrate well with our build system.",
    userId: u[7].id,
    likes: 9,
    createdAt: "2024-06-15",
    updatedAt: "2024-06-16",
  };

  const c19: Comment = {
    id: crypto.randomUUID(),
    productId: p[16].id,
    comment: "Cachely reduced our origin load significantly.",
    userId: u[8].id,
    likes: 17,
    createdAt: "2024-03-29",
    updatedAt: "2024-03-30",
  };

  const c20: Comment = {
    id: crypto.randomUUID(),
    productId: p[15].id,
    comment: "PulseUI primitives sped up prototypes and accessibility checks.",
    userId: u[9].id,
    likes: 20,
    createdAt: "2024-02-25",
    updatedAt: "2024-02-26",
  };

  // Add a couple more replies across other comments
  const r95: Reply = {
    id: crypto.randomUUID(),
    reply: "Can you share the exact integration steps?",
    userId: u[2].id,
    replyId: c1.id,
    likes: 2,
    createdAt: "2024-06-03",
    UpdatedAt: "2024-06-03",
  };

  const r101: Reply = {
    id: crypto.randomUUID(),
    reply: "We opened a ticket and the team responded within a day.",
    userId: u[0].id,
    replyId: c2.id,
    likes: 1,
    createdAt: "2024-04-21",
    UpdatedAt: "2024-04-21",
  };

  const r152: Reply = {
    id: crypto.randomUUID(),
    reply: "Happy to share a sample config in a gist.",
    userId: u[4].id,
    replyId: r95.id, // reply to reply
    likes: 3,
    createdAt: "2024-06-04",
    UpdatedAt: "2024-06-04",
  };

  // Attach some replies
  c1.replies = [
    r95,
    {
      id: crypto.randomUUID(),
      reply: "Useful — what cache headers did you employ?",
      userId: u[6].id,
      replyId: c1.id,
      likes: 2,
      createdAt: "2024-06-04",
      UpdatedAt: "2024-06-04",
    },
  ];

  c2.replies = [r101];

  c3.replies = [
    {
      id: crypto.randomUUID(),
      reply: "Did you see improvements in TTFB?",
      userId: u[5].id,
      replyId: c3.id,
      likes: 4,
      createdAt: "2024-08-11",
      UpdatedAt: "2024-08-11",
    },
  ];

  c11.replies = [
    {
      id: crypto.randomUUID(),
      reply: "CRDT approach reduced conflict resolution headaches.",
      userId: u[9].id,
      replyId: c11.id,
      likes: 6,
      createdAt: "2024-03-23",
      UpdatedAt: "2024-03-24",
    },
  ];

  // --- 20 additional comments (c21..c40) ---
  const c21: Comment = {
    id: crypto.randomUUID(),
    productId: p[18].id,
    comment: "EdgePulse handled multi-region placement without hiccups.",
    userId: u[1].id,
    likes: 8,
    createdAt: "2024-10-12",
    updatedAt: "2024-10-13",
  };

  const c22: Comment = {
    id: crypto.randomUUID(),
    productId: p[19].id,
    comment: "AuthVault rotation policies work as advertised.",
    userId: u[2].id,
    likes: 11,
    createdAt: "2024-03-11",
    updatedAt: "2024-03-11",
  };

  const c23: Comment = {
    id: crypto.randomUUID(),
    productId: p[20].id,
    comment: "Metricly's downsampling keeps our dashboards snappy.",
    userId: u[3].id,
    likes: 7,
    createdAt: "2024-11-10",
    updatedAt: "2024-11-10",
  };

  const c24: Comment = {
    id: crypto.randomUUID(),
    productId: p[21].id,
    comment: "ThreadFlow made windowing simple for our alerts.",
    userId: u[4].id,
    likes: 13,
    createdAt: "2024-07-09",
    updatedAt: "2024-07-10",
  };

  const c25: Comment = {
    id: crypto.randomUUID(),
    productId: p[22].id,
    comment: "CacheSphere synchronized caches nicely across regions.",
    userId: u[5].id,
    likes: 5,
    createdAt: "2023-05-20",
    updatedAt: "2023-05-21",
  };

  const c26: Comment = {
    id: crypto.randomUUID(),
    productId: p[23].id,
    comment: "FormForge simplified complex forms in our admin panels.",
    userId: u[6].id,
    likes: 14,
    createdAt: "2024-09-01",
    updatedAt: "2024-09-02",
  };

  const c27: Comment = {
    id: crypto.randomUUID(),
    productId: p[24].id,
    comment: "Notifyly consolidated our channels with minimal effort.",
    userId: u[7].id,
    likes: 10,
    createdAt: "2024-12-12",
    updatedAt: "2024-12-12",
  };

  const c28: Comment = {
    id: crypto.randomUUID(),
    productId: p[25].id,
    comment: "SchemaSafe's compatibility checks prevented a production issue.",
    userId: u[8].id,
    likes: 12,
    createdAt: "2024-04-02",
    updatedAt: "2024-04-03",
  };

  const c29: Comment = {
    id: crypto.randomUUID(),
    productId: p[26].id,
    comment: "Inspecta found drift during our CI runs and saved time.",
    userId: u[9].id,
    likes: 9,
    createdAt: "2024-02-14",
    updatedAt: "2024-02-15",
  };

  const c30: Comment = {
    id: crypto.randomUUID(),
    productId: p[27].id,
    comment: "DataWeave's connectors made streaming ETL painless.",
    userId: u[0].id,
    likes: 16,
    createdAt: "2022-10-03",
    updatedAt: "2022-10-03",
  };

  const c31: Comment = {
    id: crypto.randomUUID(),
    productId: p[28].id,
    comment:
      "Logix queries are fast and the retention controls helped us cut costs.",
    userId: u[1].id,
    likes: 6,
    createdAt: "2024-01-21",
    updatedAt: "2024-01-22",
  };

  const c32: Comment = {
    id: crypto.randomUUID(),
    productId: p[29].id,
    comment:
      "SignalEdge's batching strategy reduced retransmits significantly.",
    userId: u[2].id,
    likes: 8,
    createdAt: "2024-06-18",
    updatedAt: "2024-06-19",
  };

  const c33: Comment = {
    id: crypto.randomUUID(),
    productId: p[30].id,
    comment: "BuildForge cut our CI time by distributing builds effectively.",
    userId: u[3].id,
    likes: 18,
    createdAt: "2024-04-02",
    updatedAt: "2024-04-05",
  };

  const c34: Comment = {
    id: crypto.randomUUID(),
    productId: p[31].id,
    comment: "APIQuill made mocking endpoints during development trivial.",
    userId: u[4].id,
    likes: 7,
    createdAt: "2024-06-30",
    updatedAt: "2024-07-01",
  };

  const c35: Comment = {
    id: crypto.randomUUID(),
    productId: p[25].id,
    comment: "EdgePulse docs could use more deployment examples.",
    userId: u[5].id,
    likes: 3,
    createdAt: "2025-02-02",
    updatedAt: "2025-02-03",
  };

  const c36: Comment = {
    id: crypto.randomUUID(),
    productId: p[28].id,
    comment: "AuthVault made rotating DB credentials trivial.",
    userId: u[6].id,
    likes: 15,
    createdAt: "2023-07-15",
    updatedAt: "2023-07-16",
  };

  const c37: Comment = {
    id: crypto.randomUUID(),
    productId: p[23].id,
    comment: "Metricly's API is minimal and very usable for our use case.",
    userId: u[7].id,
    likes: 9,
    createdAt: "2024-11-10",
    updatedAt: "2024-11-11",
  };

  const c38: Comment = {
    id: crypto.randomUUID(),
    productId: p[13].id,
    comment: "ThreadFlow's SQL transforms are a huge productivity boost.",
    userId: u[8].id,
    likes: 14,
    createdAt: "2025-06-01",
    updatedAt: "2025-06-02",
  };

  const c39: Comment = {
    id: crypto.randomUUID(),
    productId: p[6].id,
    comment: "CacheSphere was simple to add to our CDN layer.",
    userId: u[9].id,
    likes: 4,
    createdAt: "2023-05-21",
    updatedAt: "2023-05-22",
  };

  const c40: Comment = {
    id: crypto.randomUUID(),
    productId: p[17].id,
    comment: "FormForge schema-first approach fixed a lot of bugs early.",
    userId: u[0].id,
    likes: 17,
    createdAt: "2024-09-02",
    updatedAt: "2024-09-03",
  };

  // Optionally attach a couple of replies to new comments
  c24.replies = [
    {
      id: crypto.randomUUID(),
      reply: "How are you handling late-arriving events?",
      userId: u[8].id,
      replyId: c24.id,
      likes: 2,
      createdAt: "2024-07-10",
      UpdatedAt: "2024-07-10",
    },
  ];

  c33.replies = [
    {
      id: crypto.randomUUID(),
      reply: "Did you integrate remote cache? Any tips?",
      userId: u[5].id,
      replyId: c33.id,
      likes: 4,
      createdAt: "2024-04-03",
      UpdatedAt: "2024-04-03",
    },
  ];

  // return assembled list (40 comments)
  return [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
    c21,
    c22,
    c23,
    c24,
    c25,
    c26,
    c27,
    c28,
    c29,
    c30,
    c31,
    c32,
    c33,
    c34,
    c35,
    c36,
    c37,
    c38,
    c39,
    c40,
  ];
})();
