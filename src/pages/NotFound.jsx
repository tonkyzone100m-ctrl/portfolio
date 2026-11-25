import { Link } from "react-router-dom";
import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  container,
  pageTitle,
  primaryButton,
  secondaryButton,
  sectionLabel,
  sectionLead,
} from "../lib/styles";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found",
    description:
      "The page you are looking for does not exist. Return to Alain Fils' portfolio home or browse the project case studies.",
    path: "/404",
  });

  return (
    <section className="flex min-h-[70vh] items-center py-32 md:py-40">
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <p className={sectionLabel}>Error 404</p>
          <h1 className={`${pageTitle} mx-auto`}>
            This page took a wrong turn.
          </h1>
          <p className={`${sectionLead} mx-auto`}>
            The page you are looking for does not exist or has been
            moved. Head back home or explore the project case studies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className={primaryButton}>
              <LuArrowLeft aria-hidden="true" size={16} />
              Back Home
            </Link>

            <Link to="/projects" className={secondaryButton}>
              View Projects
              <LuArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
