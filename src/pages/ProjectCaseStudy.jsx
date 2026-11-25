import { Link, useParams } from "react-router-dom";
import {
  LuArrowLeft,
  LuArrowUpRight,
  LuChartNoAxesCombined,
  LuCircleCheck,
  LuGithub,
  LuLightbulb,
  LuTarget,
} from "react-icons/lu";
import { getProjectBySlug } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import NotFound from "./NotFound";
import {
  container,
  pageTitle,
  primaryButton,
  secondaryButton,
  sectionLabel,
  techTag,
} from "../lib/styles";

function CaseActions({ project, withContact = false }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButton}
        >
          Live Demo
          <LuArrowUpRight aria-hidden="true" size={16} />
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryButton}
        >
          <LuGithub aria-hidden="true" size={16} />
          Source Code
        </a>
      )}

      {withContact && (
        <Link to="/contact" className={secondaryButton}>
          Discuss this project
        </Link>
      )}
    </div>
  );
}

function FeatureGrid({ items }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent sm:text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-lg font-semibold text-ink sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function ProjectDetail({ project }) {
  usePageMeta({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });

  const story = [
    { Icon: LuTarget, label: "Problem", text: project.problem },
    { Icon: LuLightbulb, label: "Solution", text: project.solution },
    { Icon: LuCircleCheck, label: "Outcome", text: project.outcome },
  ];

  return (
    <article className="text-ink">
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-20">
        <div className={container}>
          <Link
            to="/projects"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-accent"
          >
            <LuArrowLeft aria-hidden="true" size={16} />
            All projects
          </Link>

          <p className={`${sectionLabel} mt-8`}>
            {project.categories.join(" · ")}
          </p>

          <h1 className={pageTitle}>{project.title}</h1>

          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            <div className="bg-surface p-4">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
                Role
              </span>
              <strong className="mt-1.5 block break-words text-base font-semibold text-ink">
                {project.role}
              </strong>
            </div>

            <div className="bg-surface p-4">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
                Status
              </span>
              <strong className="mt-1.5 block break-words text-base font-semibold text-ink">
                {project.status}
              </strong>
            </div>

            <div className="bg-surface p-4">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
                Stack
              </span>
              <strong className="mt-1.5 block break-words text-base font-semibold text-ink">
                {project.stack.join(" · ")}
              </strong>
            </div>
          </div>

          <div className="mt-8">
            <CaseActions project={project} />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className={container}>
          {project.image ? (
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center">
              <LuChartNoAxesCombined
                aria-hidden="true"
                size={40}
                className="mx-auto text-accent"
              />
              <p className="mx-auto mt-3 max-w-prose text-base leading-relaxed text-muted">
                {project.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {project.stack.map((item) => (
                  <span key={item} className={techTag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div
          className={`${container} grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16`}
        >
          <div>
            <p className={sectionLabel}>01 · Overview</p>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {project.subtitle}
            </h2>
          </div>

          <div className="max-w-prose space-y-4 text-base leading-relaxed text-muted">
            <p>{project.summary}</p>
            <p>{project.outcome}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-soft py-14 md:py-20">
        <div
          className={`${container} grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16`}
        >
          <div>
            <p className={sectionLabel}>02 · The work</p>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Problem, solution, outcome.
            </h2>
          </div>

          <div className="space-y-6">
            {story.map(({ Icon, label, text }) => (
              <div key={label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <div className="max-w-prose">
                  <strong className="block text-base font-semibold text-ink">
                    {label}
                  </strong>
                  <p className="mt-1 text-base leading-relaxed text-muted">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className={container}>
          <p className={sectionLabel}>03 · Architecture</p>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            How it fits together.
          </h2>

          <FeatureGrid items={project.architecture} />
        </div>
      </section>

      <section className="border-y border-border bg-bg-soft py-14 md:py-20">
        <div className={container}>
          <p className={sectionLabel}>04 · Key features</p>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            What it does.
          </h2>

          <FeatureGrid items={project.features} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div
          className={`${container} grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16`}
        >
          <div>
            <p className={sectionLabel}>05 · Highlights</p>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Technical proof of work.
            </h2>
          </div>

          <div>
            <ul className="space-y-3">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-base text-muted"
                >
                  <LuCircleCheck
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className={techTag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14 md:py-20">
        <div className={container}>
          <p className={sectionLabel}>06 · Links</p>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Explore the project.
          </h2>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-muted">
            Review the source where available, try the live product, or
            get in touch to talk through the architecture and delivery.
          </p>

          <div className="mt-8">
            <CaseActions project={project} withContact />
          </div>
        </div>
      </section>
    </article>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  return <ProjectDetail project={project} />;
}
