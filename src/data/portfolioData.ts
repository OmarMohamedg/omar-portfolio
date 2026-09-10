/**
 * ============================================================================
 * PORTFOLIO DATA — single source of truth
 * ============================================================================
 * Edit this file to update the site's content. No UI component contains
 * hardcoded personal information, project data, skills, credentials or
 * timeline entries — everything below flows into the components.
 *
 * Nothing in this file is fabricated: statuses, numbers and dates are only
 * as specific as the information provided. Unknown values are left out
 * rather than invented.
 * ============================================================================
 */

import type {
  Credential,
  PersonalInfo,
  Project,
  SkillGroup,
  SocialLinks,
  TimelineEntry,
} from "../types";

export const personal: PersonalInfo = {
  name: "Omar Mohamed Eltawapty",
  shortName: "Omar Eltawapty",
  title: "Cybersecurity & Software Engineer",
  subtitle: "Full-Stack Developer",
  location: "Mansoura, Egypt",
  email: "engomar030@gmail.com",
  university: "Delta University for Science and Technology",
  faculty: "Faculty of Artificial Intelligence",
  degree: "B.Sc. in Cybersecurity",
  academicLevel: "Level 4",
  heroStatement:
    "Building secure software systems, investigating vulnerabilities, and engineering smarter solutions.",
};

export const social: SocialLinks = {
  github: "https://github.com/OmarMohamedg",
  linkedin: "https://www.linkedin.com/in/omar-m-eltwapty-a87a40319/",
  email: "engomar030@gmail.com",
};

export const aboutIntro =
  "I'm an AI and Cybersecurity student developing software engineering skills, with a focus on secure systems, web application security, backend development, and intelligent security solutions. I don't only look for what's broken — I care about how software is designed, built, tested and secured from the first line of code.";

export const profileFacts = {
  identity: personal.shortName,
  role: personal.title,
  specialization: "Cybersecurity",
  engineering: "Full-Stack Development",
  interests: [
    "Web Security",
    "Backend Engineering",
    "Secure Software",
    "Artificial Intelligence",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    description: "Core languages",
    items: ["Python", "JavaScript", "TypeScript", "C#"],
  },
  {
    category: "Frontend",
    description: "Interface layer",
    items: ["HTML5", "CSS3", "React.js"],
  },
  {
    category: "Backend",
    description: "Server & API layer",
    items: ["Node.js", "Express.js", "Flask"],
  },
  {
    category: "Database",
    description: "Data layer",
    items: ["PostgreSQL", "SQL Server"],
  },
  {
    category: "Software Engineering",
    description: "Practices & principles",
    items: [
      "Software Architecture",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Clean Code",
      "REST APIs",
      "Backend Development",
      "Database Design",
      "Git & GitHub",
      "Version Control",
      "Testing & Debugging",
      "System Design",
      "Secure Software Development",
      "API Security",
      "Web Application Development",
    ],
  },
  {
    category: "Cybersecurity",
    description: "Security discipline",
    items: [
      "Web Application Security",
      "Vulnerability Assessment",
      "OWASP Principles",
      "Access Control",
      "RBAC",
      "Security Monitoring",
      "SOC Fundamentals",
      "Security Testing",
    ],
  },
  {
    category: "Tools",
    description: "Security & development tooling",
    items: [
      "Linux",
      "Git",
      "GitHub",
      "VMware",
      "Wireshark",
      "Burp Suite",
      "FFUF",
      "Amass",
      "Sublist3r",
      "Dirsearch",
    ],
  },
];

export const workflowStages = [
  {
    id: "design",
    label: "Design",
    description: "Model the system, its data, and its threat surface before writing code.",
  },
  {
    id: "build",
    label: "Build",
    description: "Implement clean, typed, well-structured full-stack features.",
  },
  {
    id: "test",
    label: "Test",
    description: "Validate behavior with automated and manual testing.",
  },
  {
    id: "secure",
    label: "Secure",
    description: "Review against OWASP principles, access control, and input handling.",
  },
  {
    id: "deploy",
    label: "Deploy",
    description: "Ship with logging, monitoring, and a path to iterate safely.",
  },
];

export const projects: Project[] = [
  {
    id: "brain-tumor-detection",
    caseNumber: "CASE-01",
    title: "Brain Tumor Detection",
    domain: "Computer Vision / AI",
    status: "Completed",
    securityFocus: "Data handling & report integrity",
    technologies: ["Python", "Transfer Learning", "Flask", "Flutter"],
    description:
      "An AI system for detecting brain tumors from MRI scans using transfer learning, paired with a mobile app and an API for automated PDF report generation.",
    features: [
      "Flutter mobile application",
      "Flask API for inference",
      "Automated PDF report generation",
      "Transfer learning model for MRI classification",
    ],
    github: "https://github.com/OmarMohamedg",
    details: {
      overview:
        "A computer vision system that classifies brain MRI scans using a transfer-learning model, delivered through a Flutter mobile app backed by a Flask API.",
      problem:
        "MRI review is time-intensive, and early, accessible triage tooling can support — not replace — clinical review.",
      solution:
        "A trained transfer-learning classifier is served through a Flask API. The Flutter client submits scans, receives predictions, and generates a shareable PDF report.",
      architecture:
        "Flutter client → Flask REST API → transfer-learning inference model → PDF report generator.",
      technologies: ["Python", "Flask", "Flutter", "Transfer Learning"],
      securityConcepts: [
        "Safe handling of uploaded medical image data",
        "API input validation",
        "Controlled report generation",
      ],
      engineeringDecisions: [
        "Separated inference (API) from presentation (mobile client) for maintainability",
        "Used transfer learning to build on an established vision backbone",
      ],
      challenges:
        "Connecting a mobile client reliably to a Python inference API, and structuring PDF report generation around model output.",
      lessonsLearned:
        "How to design a clean boundary between an AI inference service and the client that consumes it.",
    },
  },
  {
    id: "venom-x",
    caseNumber: "CASE-02",
    title: "VENOM X — Web Security Scanner",
    domain: "Web Application Security",
    status: "Active",
    securityFocus: "Passive vulnerability analysis",
    technologies: ["Node.js", "Express.js"],
    description:
      "A passive web security scanner built on OWASP principles that identifies potential injection points, local file inclusion risks, and security misconfigurations without performing intrusive exploitation.",
    features: [
      "Passive detection of potential injection vulnerabilities",
      "Local File Inclusion (LFI) indicators",
      "Security misconfiguration checks",
      "Built around OWASP principles",
    ],
    github: "https://github.com/OmarMohamedg",
    details: {
      overview:
        "VENOM X inspects a target web application and flags indicators of common vulnerability classes through passive, non-intrusive analysis.",
      problem:
        "Developers often lack a fast, safe first pass for spotting common web security issues before deeper manual testing.",
      solution:
        "A Node.js/Express scanning engine that inspects requests and responses for signs of injection risk, LFI exposure, and misconfiguration, following OWASP-aligned checks.",
      architecture:
        "Express-based scanning engine → rule-based passive checks → structured findings output.",
      technologies: ["Node.js", "Express.js"],
      securityConcepts: [
        "OWASP Top 10 principles",
        "Injection vulnerability indicators",
        "Local File Inclusion (LFI)",
        "Security misconfiguration detection",
      ],
      engineeringDecisions: [
        "Kept the scanner passive by design — analysis only, no intrusive exploitation",
        "Structured findings so results are actionable rather than raw output",
      ],
      challenges:
        "Distinguishing genuine indicators of risk from false positives using passive signals only.",
      lessonsLearned:
        "How OWASP principles translate into concrete, automatable checks against a running application.",
    },
  },
  {
    id: "ai-vulnerability-hunter",
    caseNumber: "CASE-03",
    title: "AI Vulnerability Hunter",
    domain: "AI × Cybersecurity",
    status: "Active",
    securityFocus: "XSS · SQL Injection · LFI",
    technologies: ["Python", "Sublist3r", "Amass", "Dirsearch", "FFUF"],
    description:
      "An intelligent web vulnerability scanning platform that orchestrates reconnaissance and scanning tools with AI to surface potential XSS, SQL Injection, and LFI issues.",
    features: [
      "AI-assisted orchestration of scanning workflows",
      "Subdomain enumeration via Sublist3r and Amass",
      "Directory and content discovery via Dirsearch and FFUF",
      "Coverage across XSS, SQL Injection, and LFI",
    ],
    github: "https://github.com/OmarMohamedg",
    details: {
      overview:
        "A platform that chains reconnaissance and scanning tools under AI-assisted orchestration to surface potential web vulnerabilities.",
      problem:
        "Running reconnaissance and vulnerability scanning tools manually and correlating their output is slow and inconsistent.",
      solution:
        "An orchestration layer coordinates Sublist3r, Amass, Dirsearch, and FFUF, using AI to help sequence scans and surface the most relevant findings across XSS, SQL Injection, and LFI.",
      architecture:
        "Orchestration layer → tool integrations (Sublist3r, Amass, Dirsearch, FFUF) → AI-assisted result correlation.",
      technologies: ["Python", "Sublist3r", "Amass", "Dirsearch", "FFUF"],
      securityConcepts: ["Cross-Site Scripting (XSS)", "SQL Injection", "Local File Inclusion (LFI)", "Reconnaissance"],
      engineeringDecisions: [
        "Wrapped existing, trusted security tools rather than reimplementing scanning logic",
        "Used AI to assist orchestration and triage, not to replace the underlying tooling",
      ],
      challenges:
        "Coordinating several independent CLI tools into one coherent pipeline and workflow.",
      lessonsLearned:
        "How to design an orchestration layer around existing security tools instead of building scanning from scratch.",
    },
  },
  {
    id: "toia-system",
    caseNumber: "CASE-04",
    title: "TOIA System",
    domain: "Software Engineering / Backend / Business Systems",
    status: "Active",
    securityFocus: "RBAC · Secure authentication · Audit logging",
    technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Kysely"],
    description:
      "A production-oriented sales and inventory management system with secure authentication, role-based access control, warehouse and ledger management, and automated integration testing.",
    features: [
      "Secure authentication and RBAC",
      "Product and warehouse management",
      "Customer and supplier ledgers",
      "Transactional financial operations with concurrency protection",
      "Audit logging",
      "Automated integration testing",
    ],
    github: "https://github.com/OmarMohamedg",
    details: {
      overview:
        "TOIA is a backend-heavy sales and inventory management system built to production-oriented standards: typed, tested, and access-controlled.",
      problem:
        "Small and mid-sized sales operations need reliable inventory, ledger, and transaction tracking without sacrificing data integrity under concurrent use.",
      solution:
        "A TypeScript/Express backend on PostgreSQL (via Kysely) implements RBAC-secured endpoints, transactional financial operations with concurrency protection, and an audit trail, verified by automated integration tests.",
      architecture:
        "Express API → Kysely query builder → PostgreSQL, with RBAC middleware, transactional service layer, and an audit-logging layer.",
      technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Kysely"],
      securityConcepts: [
        "Role-Based Access Control (RBAC)",
        "Secure authentication",
        "Audit logging",
        "Concurrency-safe transactional operations",
      ],
      engineeringDecisions: [
        "Chose Kysely for type-safe SQL query building over a heavier ORM",
        "Enforced concurrency protection on financial operations to prevent race conditions",
        "Built automated integration tests around core transactional flows",
      ],
      challenges:
        "Designing transactional operations across products, warehouses, and ledgers that remain consistent under concurrent access.",
      lessonsLearned:
        "How to combine strict typing, RBAC, and transactional integrity in a real backend system rather than a demo.",
    },
  },
];

export const credentials: Credential[] = [
  {
    id: "google-cyber",
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    status: "IN PROGRESS",
  },
  {
    id: "microsoft-cyber",
    name: "Microsoft Cybersecurity Professional Certificate",
    issuer: "Microsoft",
    status: "IN PROGRESS",
  },
  {
    id: "nti-network-security",
    name: "Network Security Training",
    issuer: "NTI",
    status: "TRAINING",
  },
  {
    id: "recoded-apricot",
    name: "Tech Upskilling Program",
    issuer: "Re:Coded & Apricot",
    status: "TRAINING",
  },
  {
    id: "idor-workshop",
    name: "Web Application Security Workshop — Broken Access Control & IDOR",
    issuer: "Workshop",
    status: "WORKSHOP",
  },
];

export const timeline: TimelineEntry[] = [
  { year: "2023", label: "University Journey", items: ["Began studies at Delta University for Science and Technology"] },
  { year: "2024", label: "Programming & AI Development", items: ["Programming foundations", "AI and applied development"] },
  { year: "2025", label: "Cybersecurity Development", items: ["Cybersecurity coursework and hands-on learning"] },
  {
    year: "2026",
    label: "Security Projects & Software Engineering",
    items: [
      "Security projects",
      "Software engineering",
      "Web application security",
      "Professional development",
    ],
  },
];

// Derived from the data above — never hand-typed, never fabricated.
export const stats = {
  projects: projects.length,
  certifications: credentials.length,
  technologies: Array.from(new Set(skillGroups.flatMap((g) => g.items))).length,
  securityDomains: skillGroups.find((g) => g.category === "Cybersecurity")?.items.length ?? 0,
};

export const siteMeta = {
  title: "Omar Eltawapty | Cybersecurity & Software Engineer",
  description:
    "Portfolio of Omar Mohamed Eltawapty — Cybersecurity & Software Engineer and Full-Stack Developer. Secure software development, web application security, backend engineering, and AI.",
};
