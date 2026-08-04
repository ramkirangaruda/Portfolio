import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-off px-[4vw] py-10">
      <div className="flex flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:flex-row">
        <span>
          {profile.name} · {profile.location}
        </span>
        <span>© {new Date().getFullYear()} — Built with React, Vite &amp; Framer Motion</span>
      </div>
    </footer>
  );
}
