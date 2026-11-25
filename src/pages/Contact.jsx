import {
  LuBriefcase,
  LuGithub,
  LuMail,
  LuMapPin,
} from "react-icons/lu";
import CopyEmailButton from "../components/CopyEmailButton";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  card,
  container,
  pageShell,
  pageTitle,
  primaryButton,
  secondaryButton,
  sectionLabel,
  sectionLead,
} from "../lib/styles";

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Contact Alain Fils Niyomucamanza in Kigali, Rwanda for freelance, remote, and collaboration opportunities in full-stack development and IT systems.",
    path: "/contact",
  });

  const mailto = `mailto:${site.email}`;

  return (
    <section className={pageShell}>
      <div className={container}>
        <div className="max-w-3xl">
          <p className={sectionLabel}>Contact</p>
          <h1 className={pageTitle}>
            Let&apos;s build something useful.
          </h1>
          <p className={sectionLead}>
            I&apos;m open to freelance projects, remote work, and
            collaboration on software, data, and IT systems. If you
            have a problem worth solving, I&apos;d like to hear about
            it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
          <div className={`${card} p-6 md:p-8`}>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
              Email
            </span>

            <a
              href={mailto}
              className="mt-2 flex items-center gap-2 break-all text-lg font-semibold text-ink transition-colors hover:text-accent sm:text-xl"
            >
              <LuMail
                aria-hidden="true"
                size={18}
                className="shrink-0 text-accent"
              />
              {site.email}
            </a>

            <div className="mt-5">
              <CopyEmailButton />
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-sm text-dim sm:text-base">
              <span className="flex items-center gap-2">
                <LuMapPin
                  aria-hidden="true"
                  size={15}
                  className="shrink-0 text-accent"
                />
                {site.location}
              </span>

              <span className="flex items-center gap-2">
                <LuBriefcase
                  aria-hidden="true"
                  size={15}
                  className="shrink-0 text-accent"
                />
                {site.availability}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className={`${card} p-6`}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
                Find me online
              </p>
              <SocialLinks withLabels className="mt-4" />
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={mailto} className={primaryButton}>
                <LuMail aria-hidden="true" size={16} />
                Send an Email
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                <LuGithub aria-hidden="true" size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
