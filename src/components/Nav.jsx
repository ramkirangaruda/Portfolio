import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/content.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-hair bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-[4vw] py-5">
          <Link
            to="/"
            className="font-display text-[1.6rem] font-black uppercase leading-none tracking-[0.12em] text-bone"
          >
            GR<span className="text-acid">.</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={`/${item.href}`}
                  className="font-display text-xs uppercase tracking-[0.2em] text-dim transition-colors hover:text-bone"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden bg-acid px-6 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-85 sm:inline-block"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-bone lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink px-[6vw] py-8 lg:hidden">
          <div className="flex justify-end">
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-7 w-7 text-bone" />
            </button>
          </div>

          <ul className="mt-10 flex flex-1 flex-col justify-center gap-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-hair py-4">
                <Link
                  to={`/${item.href}`}
                  onClick={() => setOpen(false)}
                  className="display text-[clamp(2.5rem,11vw,4.5rem)] leading-[0.9] text-bone transition-colors hover:text-acid"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block bg-acid px-6 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Resume
          </a>
        </div>
      )}
    </>
  );
}
