import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  card,
  container,
  pageShell,
  pageTitle,
  sectionLabel,
  techTag,
} from "../lib/styles";

const details = [
  {
    label: "Location",
    title: site.location,
    detail: site.availability,
  },
  {
    label: "Education",
    title: site.education.program,
    detail: `${site.education.school} · expected ${site.education.expected}`,
  },
  {
    label: "Focus",
    title: "Full-stack & IT systems",
    detail: "Web applications · data and analytics · networking",
  },
  {
    label: "Availability",
    title: "Remote & freelance",
    detail:
      "Open to collaboration, contract work, and junior full-stack roles",
  },
];

const coreStack = [
  "React",
  "TypeScript",
  "PHP",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
];

export default function About() {
  usePageMeta({
    title: "About",
    description:
      "About Alain Fils Niyomucamanza — a full-stack and systems developer in Kigali, Rwanda, studying an A1 Diploma in Information Technology at Rwanda Polytechnic – Karongi College.",
    path: "/about",
  });

  return (
    <section className={pageShell}>
      <div className={container}>
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className={sectionLabel}>About Me</p>
          <h1 className={pageTitle}>
            Full-stack developer and systems builder based in Kigali.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            className={`${card} flex flex-col p-6 transition-colors hover:border-border-strong sm:col-span-2 sm:p-7`}
          >
            <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
              Profile
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Practical systems, built end to end.
            </h2>

            <div className="mt-4 max-w-prose space-y-4 text-base leading-relaxed text-muted">
              <p>
                I&apos;m {site.name}, a freelance full-stack and systems
                developer based in {site.location}. I enjoy turning
                real-world problems into practical digital systems that
                people can actually use — from the interface and API to the
                database and the infrastructure underneath.
              </p>

              <p>
                I&apos;m currently pursuing an {site.education.program} at{" "}
                {site.education.school}, expected in{" "}
                {site.education.expected}. Alongside my studies, I build
                production-oriented projects with React, TypeScript, Python,
                PHP, Node.js, and PostgreSQL, while strengthening my
                networking, Linux, and system administration skills.
              </p>

              <p>
                My approach is simple: understand the problem, design the
                smallest reliable solution, ship it, and keep improving it
                with real feedback. I care about clean structure, accessible
                interfaces, and systems that hold up outside a demo.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {coreStack.map((item) => (
                <span key={item} className={techTag}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          {details.map((item) => (
            <article
              key={item.label}
              className={`${card} flex flex-col p-5 transition-colors hover:border-border-strong sm:p-6`}
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
                {item.label}
              </span>
              <strong className="mt-2 block text-base font-semibold text-ink sm:text-lg">
                {item.title}
              </strong>
              <small className="mt-1.5 block text-sm leading-relaxed text-dim sm:text-base">
                {item.detail}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
