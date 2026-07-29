import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/content.js";
import { ContourBackdrop } from "./ContourLine.jsx";
import SplitText from "./SplitText.jsx";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <ContourBackdrop />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ember"
        >
          {profile.eyebrow} — {profile.location}
        </motion.p>

        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-balance sm:text-6xl md:text-7xl">
          {profile.headline.map((line, i) => (
            <span key={i} className="block">
              <SplitText text={line} delay={0.15 + i * 0.25} />
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-slate"
        >
          {profile.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 font-mono text-sm text-ink transition-transform hover:scale-[1.03] hover:bg-ember-soft"
          >
            See the work
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-parchment transition-colors hover:border-ember hover:text-ember"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-parchment transition-colors hover:border-ember hover:text-ember"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
