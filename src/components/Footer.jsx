import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import SocialLinks from "./SocialLinks";
import { site } from "../data/site";
import { container } from "../lib/styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div
        className={`${container} grid gap-7 py-10 md:grid-cols-[1.4fr_1fr]`}
      >
        <div>
          <p className="text-lg font-bold text-ink">{site.name}</p>
          <p className="mt-1.5 text-sm text-dim sm:text-base">
            {site.location} · {site.role}
          </p>
          <p className="mt-1 text-sm text-dim sm:text-base">
            {site.availability}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted sm:text-base"
            aria-label="Footer"
          >
            <Link className="transition-colors hover:text-accent" to="/about">
              About
            </Link>
            <Link
              className="transition-colors hover:text-accent"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="transition-colors hover:text-accent"
              to="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="transition-colors hover:text-accent"
              to="/contact"
            >
              Contact
            </Link>
          </nav>

          <SocialLinks />
        </div>
      </div>

      <div
        className={`${container} flex flex-wrap items-center justify-between gap-3 border-t border-border py-5 text-xs text-dim sm:text-sm`}
      >
        <p>
          © {year} {site.name}. All rights reserved.
        </p>

        <a
          className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          href={site.portfolio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live portfolio
          <LuArrowUpRight aria-hidden="true" size={14} />
        </a>
      </div>
    </footer>
  );
}
