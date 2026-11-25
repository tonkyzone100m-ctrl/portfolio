import { LuGithub, LuGlobe, LuLinkedin, LuMail } from "react-icons/lu";
import { site } from "../data/site";

const links = [
  {
    key: "github",
    label: "GitHub",
    href: site.github,
    Icon: LuGithub,
    external: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LuLinkedin,
    external: true,
  },
  {
    key: "portfolio",
    label: "Portfolio",
    href: site.portfolio,
    Icon: LuGlobe,
    external: true,
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${site.email}`,
    Icon: LuMail,
    external: false,
  },
];

export default function SocialLinks({
  className = "",
  withLabels = false,
}) {
  return (
    <ul
      className={`flex items-center gap-2.5 ${
        withLabels ? "flex-wrap" : ""
      } ${className}`.trim()}
    >
      {links.map(({ key, label, href, Icon, external }) => (
        <li key={key}>
          <a
            href={href}
            title={label}
            aria-label={withLabels ? undefined : label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`inline-flex min-h-[44px] items-center justify-center border border-border text-muted transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent ${
              withLabels
                ? "h-auto w-auto gap-2 rounded-full px-3.5 py-2 text-sm font-semibold"
                : "h-11 w-11 rounded-full"
            }`}
          >
            <Icon aria-hidden="true" size={18} />
            {withLabels && <span>{label}</span>}
            {withLabels && external && (
              <span className="sr-only">
                (opens in a new tab)
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
