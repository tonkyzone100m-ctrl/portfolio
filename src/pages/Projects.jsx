import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuArrowUpRight,
  LuChartNoAxesCombined,
  LuCircleCheck,
  LuExternalLink,
  LuGithub,
  LuRocket,
  LuSearch,
  LuX,
} from "react-icons/lu";
import { projectCategories, projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  chip,
  chipActive,
  container,
  pageShell,
  pageTitle,
  primaryButton,
  sectionLabel,
  sectionLead,
  secondaryButton,
  statusLive,
  statusPill,
  statusProgress,
  tag,
  techTag,
  textLink,
} from "../lib/styles";

function getProjectHost(project) {
  if (!project.demo) return project.slug;

  try {
    const { host, pathname } = new URL(project.demo);
    const path = pathname === "/" ? "" : pathname.replace(/\/$/, "");

    return `${host.replace(/^www\./, "")}${path}`;
  } catch {
    return project.demo;
  }
}

function ProjectCard({ project }) {
  const isLive = project.statusType === "live";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-border-strong">
      <Link
        to={`/projects/${project.slug}`}
        className="block overflow-hidden border-b border-border bg-bg-soft"
        aria-label={`${project.title} case study`}
      >
        <span className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-3 py-2">
          <span
            className="flex shrink-0 items-center gap-1.5"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="mx-1 min-w-0 flex-1 truncate rounded-[4px] border border-border bg-bg px-2 py-0.5 text-center font-mono text-xs text-dim">
            {getProjectHost(project)}
          </span>

          {isLive && (
            <span className="shrink-0 rounded-[4px] bg-accent px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent-ink">
              Live
            </span>
          )}
        </span>

        <span className="relative block aspect-[16/10] overflow-hidden bg-bg-soft">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <span
              className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-dim"
              aria-hidden="true"
            >
              <LuChartNoAxesCombined size={32} />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] sm:text-sm">
                {project.title}
              </span>
            </span>
          )}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          {project.categories.map((category) => (
            <span className={tag} key={category}>
              {category}
            </span>
          ))}

          <span
            className={`${statusPill} ${
              isLive ? statusLive : statusProgress
            }`}
          >
            {isLive ? (
              <LuCircleCheck aria-hidden="true" size={13} />
            ) : (
              <LuRocket aria-hidden="true" size={13} />
            )}
            {project.status}
          </span>
        </div>

        <h2 className="text-lg font-semibold text-ink sm:text-xl">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h2>

        <p className="text-base leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span key={item} className={techTag}>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButton}
            >
              <LuExternalLink aria-hidden="true" size={15} />
              Live Demo
            </a>
          )}

          <Link to={`/projects/${project.slug}`} className={textLink}>
            Case Study
            <LuArrowUpRight aria-hidden="true" size={14} />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              <LuGithub aria-hidden="true" size={14} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  usePageMeta({
    title: "Projects",
    description:
      "Project case studies by Alain Fils Niyomucamanza: School Management System, ReportHub infrastructure reporting, CV Maker resume builder, UpliftRwanda big-data analytics, and this portfolio.",
    path: "/projects",
  });

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.categories.includes(activeCategory);

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = [
        project.title,
        project.subtitle,
        project.summary,
        ...project.categories,
        ...project.stack,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [query, activeCategory]);

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("All");
  };

  return (
    <section className={pageShell}>
      <div className={container}>
        <div className="max-w-3xl">
          <p className={sectionLabel}>Selected Work</p>
          <h1 className={pageTitle}>
            Projects built to solve real problems.
          </h1>
          <p className={sectionLead}>
            Each project includes the problem, the solution, the
            architecture, and the technical proof of work — with a live
            demo and source code where available.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="flex min-h-[44px] w-full items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3.5 py-2.5 text-muted transition-colors focus-within:border-accent md:max-w-sm">
            <LuSearch aria-hidden="true" size={16} className="shrink-0" />
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, stack, or category"
              className="w-full bg-transparent text-base text-ink outline-none placeholder:text-dim"
            />
          </label>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${chip} ${
                  activeCategory === category ? chipActive : ""
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
            <p className="text-base leading-relaxed text-muted">
              No projects match your search or filters.
            </p>
            <button
              type="button"
              className={secondaryButton}
              onClick={resetFilters}
            >
              <LuX aria-hidden="true" size={15} />
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
