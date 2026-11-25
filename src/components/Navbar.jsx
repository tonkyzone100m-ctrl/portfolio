import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { site } from "../data/site";
import { container } from "../lib/styles";

const THEME_STORAGE_KEY = "portfolio-theme";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function navLinkClasses({ isActive }) {
  return [
    "relative inline-flex min-h-[44px] items-center border-b border-border py-3 text-base font-medium transition-colors md:border-0 md:py-1.5 md:text-sm",
    isActive
      ? "text-accent md:text-ink md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-0.5 md:after:w-full md:after:rounded-full md:after:bg-accent"
      : "text-muted hover:text-ink",
  ].join(" ");
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("light")
      ? "light"
      : "dark",
  );

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        theme === "dark" ? "#090D16" : "#F8FAFC",
      );
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-border bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
      aria-label={
        isDark ? "Switch to light theme" : "Switch to dark theme"
      }
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <LuSun aria-hidden="true" size={19} />
      ) : (
        <LuMoon aria-hidden="true" size={19} />
      )}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");

    const handleChange = (event) => {
      if (event.matches) setIsOpen(false);
    };

    desktop.addEventListener("change", handleChange);

    return () => {
      desktop.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[76px] border-b border-border bg-bg">
      <div
        className={`${container} flex h-full items-center justify-between gap-4`}
      >
        <Link
          to="/"
          className="flex shrink-0 flex-col gap-0.5"
          aria-label={`${site.name} — home`}
          onClick={() => setIsOpen(false)}
        >
          <span className="text-lg font-bold tracking-tight text-ink">
            {site.shortName}
          </span>
          <span className="hidden font-mono text-xs font-medium uppercase tracking-[0.12em] text-dim sm:block">
            {site.role}
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <nav
            id="primary-navigation"
            aria-label="Primary"
            className={`${
              isOpen ? "flex" : "hidden"
            } fixed inset-x-0 top-[76px] z-40 flex-col border-b border-border bg-surface px-[4%] pb-5 pt-2 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 lg:gap-8`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-border bg-surface text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? (
                <LuX aria-hidden="true" size={22} />
              ) : (
                <LuMenu aria-hidden="true" size={22} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
