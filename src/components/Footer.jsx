import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-slate sm:flex-row">
        <span>{profile.name} · {profile.location}</span>
        <span>Built with React, Vite &amp; Framer Motion</span>
      </div>
    </footer>
  );
}
