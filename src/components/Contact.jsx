import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/content.js";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden border-t border-hair px-[4vw] pb-[18vh] pt-[16vh] text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_60%,rgba(232,255,71,0.05),transparent_70%)]" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="display text-[clamp(2.875rem,9vw,9.375rem)] leading-[0.85]"
        >
          <span className="block">Got something</span>
          <span className="block txt-hollow-thick">worth building?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto my-[4vh] font-mono text-[11px] uppercase tracking-[0.22em] text-dim"
        >
          Hiring, collaborating, or just talking shop — the inbox is open.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-4 bg-acid px-9 py-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-85"
        >
          {profile.email}
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-[6vh] flex flex-wrap items-center justify-center gap-8"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-acid"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-acid"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-acid"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
