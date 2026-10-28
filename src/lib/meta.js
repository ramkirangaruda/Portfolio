import { useEffect } from "react";

const SITE_URL = "https://ramkirangaruda-portfolio.vercel.app";
const DEFAULT_TITLE = "Garuda Ramkiran — Developer";
const DEFAULT_DESCRIPTION =
  "Garuda Ramkiran — full-stack developer and systems builder. BTech CSE at VIT Vellore, developer at iFocus Systec.";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(path) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", `${SITE_URL}${path}`);
}

/**
 * Sets per-route <title>, meta description and OG/Twitter tags.
 * Falls back to the site defaults for anything not passed in.
 */
export function useDocumentMeta({ title, description, path = "/", image } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Garuda Ramkiran` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    if (image) {
      setMeta("property", "og:image", image);
      setMeta("name", "twitter:image", image);
    }
    setCanonical(path);
  }, [title, description, path, image]);
}
