import { useEffect, useState } from "react";
import { nav, profile } from "../data/content.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-parchment hover:text-ember transition-colors"
        >
          GR<span className="text-ember">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-slate hover:text-parchment transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-parchment hover:border-ember hover:text-ember transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
