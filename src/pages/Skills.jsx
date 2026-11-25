import { usePageMeta } from "../hooks/usePageMeta";
import {
  card,
  container,
  pageShell,
  pageTitle,
  sectionLabel,
  sectionLead,
  techTag,
} from "../lib/styles";

const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building responsive, accessible interfaces and application behaviour with modern front-end tooling.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend & Data",
    description:
      "Designing server-side logic, REST APIs, and relational schemas for persistent application data.",
    tags: [
      "Node.js",
      "Express",
      "Prisma",
      "PHP",
      "Python",
      "FastAPI",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    number: "03",
    title: "Networking & Systems",
    description:
      "Working with computer networking, Linux, system administration, and IT infrastructure fundamentals.",
    tags: [
      "Networking",
      "Linux",
      "Windows Server",
      "System Administration",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using modern tooling to develop, version, deploy, and collaborate on software projects.",
    tags: [
      "Git",
      "GitHub",
      "Vite",
      "REST APIs",
      "Neon",
      "Figma",
    ],
  },
];

export default function Skills() {
  usePageMeta({
    title: "Skills",
    description:
      "Technical skills: React, TypeScript, JavaScript, Node.js, Express, Prisma, PHP, Python, FastAPI, MySQL, PostgreSQL, Linux, networking, and system administration.",
    path: "/skills",
  });

  return (
    <section className={pageShell}>
      <div className={container}>
        <div className="max-w-3xl">
          <p className={sectionLabel}>Technical Skills</p>
          <h1 className={pageTitle}>
            Technologies I use to ship working systems.
          </h1>
          <p className={sectionLead}>
            A practical toolkit spanning the front end, backend and data,
            networking, and the day-to-day workflow behind reliable
            delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const span =
              index === 0 || index === 3
                ? "sm:col-span-2 lg:col-span-2"
                : "";

            return (
              <article
                key={group.number}
                className={`${card} ${span} flex h-full flex-col p-5 transition-colors hover:border-border-strong sm:p-6`}
              >
                <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent sm:text-sm">
                  {group.number}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-ink sm:text-xl">
                  {group.title}
                </h2>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span key={tag} className={techTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
