import reportHubDashboard from "../assets/reporthub-dashboard.png";
import cvMakerDashboard from "../assets/cv-maker-dashboard.png";

// Paste the School Management System source URL here when available.
const SCHOOL_MANAGEMENT_GITHUB = "";

export const projectCategories = [
  "All",
  "Full-Stack",
  "Data / Analytics",
  "Web Apps",
  "Full-Stack Web App",
];

export const projects = [
  {
    slug: "uplift-rwanda",
    title: "UpliftRwanda",
    subtitle: "Big-data analytics dashboard for national statistics",
    categories: ["Data / Analytics", "Full-Stack"],
    summary:
      "A big-data analytics dashboard built for the NISR 2026 Big Data Hackathon, turning large public datasets into clear, explorable indicators for decision makers.",
    role: "Full-Stack Developer · NISR 2026 Big Data Hackathon",
    status: "Live",
    statusType: "live",
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "Neon"],
    github: "https://github.com/tonkyzone100m-ctrl/UpliftRwanda",
    demo: "https://uplift-frontend-ruby.vercel.app/",
    image: null,
    problem:
      "Large national datasets are difficult to explore without dedicated tooling. Analysts and decision makers need fast, readable answers, not raw tables.",
    solution:
      "UpliftRwanda exposes a React analytics dashboard backed by a Python FastAPI service and a PostgreSQL (Neon) warehouse, so indicators can be queried, compared, and visualised in one place.",
    outcome:
      "A working hackathon prototype that demonstrates an end-to-end path from big-data storage to an interactive analytics experience, built under time pressure with a modern React and Python stack.",
    architecture: [
      {
        title: "Frontend",
        description:
          "React single-page dashboard with reusable chart and metric components, responsive layouts, and API-driven state.",
      },
      {
        title: "API layer",
        description:
          "Python FastAPI service exposing query endpoints, validation, and serialisation for analytics payloads.",
      },
      {
        title: "Data layer",
        description:
          "PostgreSQL hosted on Neon, structured for analytical queries over large public datasets.",
      },
    ],
    features: [
      {
        title: "Analytics dashboard",
        description:
          "Interactive panels that surface headline indicators and make large datasets easier to interpret.",
      },
      {
        title: "API-driven data flow",
        description:
          "The React client consumes FastAPI endpoints instead of embedding data, keeping the UI thin and maintainable.",
      },
      {
        title: "Cloud Postgres",
        description:
          "Neon-hosted PostgreSQL provides a managed database layer that is quick to provision for hackathon delivery.",
      },
    ],
    highlights: [
      "Built for the NISR 2026 Big Data Hackathon",
      "End-to-end React + FastAPI + PostgreSQL architecture",
      "Focused on making national statistics approachable",
    ],
  },
  {
    slug: "reporthub",
    title: "ReportHub",
    subtitle: "Community infrastructure reporting and tracking platform",
    categories: ["Web Apps", "Full-Stack"],
    summary:
      "A community infrastructure reporting platform that lets citizens submit issues and gives authorities a structured way to review, track, and resolve them.",
    role: "Full-Stack Developer",
    status: "Live",
    statusType: "live",
    stack: ["React", "TypeScript", "PHP", "MySQL", "REST API"],
    github: "https://github.com/tonkyzone100m-ctrl/reporthub-pro",
    demo: "https://reporthub-pro.vercel.app/",
    image: reportHubDashboard,
    problem:
      "Infrastructure problems are hard to report and follow through informal channels. Citizens do not always know where to report an issue, and authorities struggle to organise incoming reports.",
    solution:
      "ReportHub provides a single workflow: a typed React interface for reporting and tracking, a PHP REST API for business logic, and MySQL for persistent report records and status history.",
    outcome:
      "A structured reporting system with a clear lifecycle from submission to resolution, designed so both residents and administrators see the same source of truth.",
    architecture: [
      {
        title: "Frontend",
        description:
          "React with TypeScript for typed report models, forms, filters, and status views.",
      },
      {
        title: "API layer",
        description:
          "PHP REST API handling authentication, report submission, assignment, and status transitions.",
      },
      {
        title: "Data layer",
        description:
          "MySQL relational schema for reports, users, categories, and resolution history.",
      },
    ],
    features: [
      {
        title: "Report submission",
        description:
          "A structured form captures location, category, description, and supporting details.",
      },
      {
        title: "Tracking and status",
        description:
          "Residents can follow a report through its lifecycle instead of losing visibility after submission.",
      },
      {
        title: "Administrative tools",
        description:
          "Authorities can review, prioritise, assign, and update reports from a central dashboard.",
      },
    ],
    highlights: [
      "Typed React frontend with a PHP REST API",
      "Relational MySQL data model for report lifecycles",
      "Designed around citizen-to-authority accountability",
    ],
  },
  {
    slug: "cv-maker",
    title: "CV Maker",
    subtitle: "Full-stack resume builder with AI-assisted summaries",
    categories: ["Full-Stack", "Web Apps"],
    summary:
      "A resume builder that helps users create, customise, and export professional CVs with a live preview and AI-assisted summary writing.",
    role: "Full-Stack Developer",
    status: "Live",
    statusType: "live",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Neon",
    ],
    github: "https://github.com/tonkyzone100m-ctrl/CV_maker",
    demo: "https://cv-maker-sigma-puce.vercel.app",
    image: cvMakerDashboard,
    problem:
      "Creating a clean, consistent resume is slow with traditional document editors. Formatting, versioning, and writing a strong summary get in the way of the actual content.",
    solution:
      "CV Maker combines a live preview editor, secure accounts, and AI-assisted summaries on a Node.js and Prisma backend, with print-ready layouts for export.",
    outcome:
      "A deployed full-stack application with authentication, persistent resumes, live editing, and PDF-ready output — used as a practical showcase of end-to-end product delivery.",
    architecture: [
      {
        title: "Frontend",
        description:
          "React + Vite + Tailwind CSS editor with live preview state and print-optimised layouts.",
      },
      {
        title: "API layer",
        description:
          "Node.js and Express REST API with authentication and resume CRUD endpoints.",
      },
      {
        title: "Data layer",
        description:
          "Prisma ORM over PostgreSQL (Neon), with typed models for users and resume sections.",
      },
    ],
    features: [
      {
        title: "Live preview editor",
        description:
          "Form changes update the document preview instantly, so layout and content stay in sync.",
      },
      {
        title: "AI-assisted summaries",
        description:
          "Integrated AI processing helps users draft concise, professional profile summaries.",
      },
      {
        title: "Accounts and persistence",
        description:
          "Secure registration and login let users save and return to their resume data.",
      },
      {
        title: "Print and PDF ready",
        description:
          "Dedicated print styles produce clean A4 output straight from the browser.",
      },
    ],
    highlights: [
      "Deployed live on Vercel with a hosted PostgreSQL database",
      "Typed data layer with Prisma",
      "Authentication plus persistent resume records",
    ],
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    subtitle: "Role-based academic management platform",
    categories: ["Full-Stack Web App"],
    summary:
      "A role-based academic management platform supporting five distinct roles — HR, Registrar, Head of Department, Lecturer, and Student — with secure session-based authentication, user profile management, course and student records, and administrative workflows.",
    role: "Full-Stack Developer",
    status: "Live",
    statusType: "live",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: SCHOOL_MANAGEMENT_GITHUB,
    demo: "https://schoolms2026.ct.ws/login.php",
    image: null,
    problem:
      "Academic records are often spread across spreadsheets and disconnected tools, which makes staff, course, and student data hard to keep consistent and secure.",
    solution:
      "A PHP and MySQL platform with session-based authentication and five role-specific experiences — HR, Registrar, Head of Department, Lecturer, and Student — each exposing only the records and workflows that role needs.",
    outcome:
      "A deployed management system that centralises user profiles, course and student records, and administrative workflows behind secure role-based access.",
    architecture: [
      {
        title: "Frontend",
        description:
          "HTML5, CSS3, and JavaScript interfaces tailored to each role's daily tasks and permissions.",
      },
      {
        title: "Application layer",
        description:
          "PHP session-based authentication, role checks, and routing for administrative workflows.",
      },
      {
        title: "Data layer",
        description:
          "MySQL relational tables for users, roles, courses, students, and academic records.",
      },
    ],
    features: [
      {
        title: "Five role-based dashboards",
        description:
          "HR, Registrar, Head of Department, Lecturer, and Student each get a focused view of their work.",
      },
      {
        title: "Secure session authentication",
        description:
          "Session-based login gates every page and limits access by role.",
      },
      {
        title: "Course and student records",
        description:
          "Centralised records for courses, students, and the relationships between them.",
      },
      {
        title: "Administrative workflows",
        description:
          "Structured processes for registration, department management, and academic operations.",
      },
    ],
    highlights: [
      "Five distinct roles with scoped access",
      "Session-based authentication",
      "Deployed PHP + MySQL application",
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Developer portfolio and project case-study platform",
    categories: ["Web Apps"],
    summary:
      "A responsive developer portfolio built with React, Vite, and Tailwind CSS v4, featuring dynamic project case studies, a filterable gallery, per-route metadata, and accessible interactions.",
    role: "Designer & Developer",
    status: "Live",
    statusType: "live",
    stack: ["React", "Vite", "Tailwind CSS", "React Router"],
    github: "https://github.com/tonkyzone100m-ctrl/portfolio",
    demo: "https://portfolio-sigma-black-aa6aolxx26.vercel.app/",
    image: null,
    problem:
      "A static résumé or generic template does not show how projects were designed, built, and delivered.",
    solution:
      "A data-driven portfolio with dedicated case studies, searchable projects, a gallery, and per-route SEO metadata, all built on a single Tailwind design-token system.",
    outcome:
      "A deployed portfolio that presents projects as structured case studies with clear architecture, features, and links.",
    architecture: [
      {
        title: "Frontend",
        description:
          "React 19 and Vite with client-side routing and reusable page components.",
      },
      {
        title: "Design system",
        description:
          "Tailwind CSS v4 with @theme tokens and shared utility strings for consistent spacing, type, and colour.",
      },
      {
        title: "Routing and SEO",
        description:
          "React Router routes plus a usePageMeta hook for per-route titles, descriptions, and canonical URLs.",
      },
    ],
    features: [
      {
        title: "Dynamic case studies",
        description:
          "One data-driven template renders problem, solution, architecture, and features for every project.",
      },
      {
        title: "Searchable project list",
        description:
          "Projects can be searched and filtered by category and stack.",
      },
      {
        title: "Accessible gallery",
        description:
          "A filterable gallery with a focus-trapped lightbox, Escape and arrow-key navigation.",
      },
      {
        title: "Per-route metadata",
        description:
          "Each route updates its title, description, OpenGraph tags, and canonical URL.",
      },
    ],
    highlights: [
      "React 19 + Vite + Tailwind CSS v4",
      "Accessible navigation, gallery, and focus handling",
      "Deployed on Vercel with SPA rewrites",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
