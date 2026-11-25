import { useEffect } from "react";
import { site } from "../data/site";

const DEFAULT_DESCRIPTION =
  "Alain Fils Niyomucamanza — full-stack and systems developer based in Kigali, Rwanda. React, TypeScript, Python, PHP, PostgreSQL, and IT infrastructure.";

function setMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export function usePageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
} = {}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${site.name}`
      : `${site.name} | ${site.role}`;

    const canonical = new URL(path, site.url).toString();
    const ogImage = new URL(image || "/og-image.png", site.url).toString();

    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", ogImage);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    setCanonical(canonical);
  }, [title, description, path, image]);
}
