import { Link } from "react-router-dom";
import {
  LuArrowUpRight,
  LuBriefcase,
  LuGraduationCap,
  LuMapPin,
} from "react-icons/lu";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  container,
  primaryButton,
  secondaryButton,
} from "../lib/styles";

const highlights = [
  { title: "Full-Stack", detail: "React · APIs · Databases" },
  { title: "Data", detail: "Analytics & big data" },
  { title: "Networking", detail: "Linux & infrastructure" },
];

export default function Hero() {
  usePageMeta({
    description:
      "Alain Fils Niyomucamanza — full-stack and systems developer in Kigali, Rwanda. Building practical web, data, and IT solutions with React, TypeScript, Python, and PostgreSQL.",
    path: "/",
  });

  return (
    <section className="flex min-h-svh items-center pt-32 pb-16 sm:pt-36 md:pt-44 md:pb-28">
      <div className={container}>
        <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-accent/40 bg-surface px-3.5 py-1.5 text-left font-mono text-xs font-medium leading-snug tracking-wide text-ink sm:text-sm">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(16,185,129,0.16)]"
            aria-hidden="true"
          />
          Available for Remote IT &amp; Full-Stack Roles — Kigali,
          Rwanda
        </p>

        <p className="mt-7 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent sm:text-sm">
          Full-Stack · Data · Networking &amp; Systems
        </p>

        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          I build reliable
          <span className="block text-accent">
            software and IT systems.
          </span>
        </h1>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
          I&apos;m {site.name}, a freelance full-stack and systems
          developer based in {site.location}. I turn real-world problems
          into useful digital products — from React interfaces and APIs
          to databases and the infrastructure underneath them.
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-dim sm:text-base">
          <li className="flex items-center gap-2">
            <LuMapPin
              aria-hidden="true"
              size={15}
              className="shrink-0 text-accent"
            />
            {site.location}
          </li>
          <li className="flex items-center gap-2">
            <LuBriefcase
              aria-hidden="true"
              size={15}
              className="shrink-0 text-accent"
            />
            {site.availability}
          </li>
          <li className="flex items-center gap-2">
            <LuGraduationCap
              aria-hidden="true"
              size={15}
              className="shrink-0 text-accent"
            />
            A1 Diploma in IT · expected {site.education.expected}
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/projects" className={primaryButton}>
            View My Work
            <LuArrowUpRight aria-hidden="true" size={16} />
          </Link>

          <Link to="/contact" className={secondaryButton}>
            Let&apos;s Connect
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-[10px] border border-border bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2.5 px-4 py-3"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <strong className="text-sm font-semibold text-ink">
                {item.title}
              </strong>
              <span className="ml-auto text-xs font-medium text-dim sm:text-sm">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3.5">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-dim sm:text-sm">
            Connect
          </span>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
