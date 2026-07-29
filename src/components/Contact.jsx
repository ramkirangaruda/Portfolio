import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data/content.js";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-ember"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-2xl text-balance font-display text-3xl leading-tight text-parchment sm:text-4xl"
        >
          Building something, hiring, or just want to talk shop — my inbox is open.
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-3 font-mono text-2xl text-parchment transition-colors hover:text-ember sm:text-3xl"
        >
          <Mail className="h-6 w-6 shrink-0 text-moss" />
          {profile.email}
          <ArrowUpRight className="h-6 w-6 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-parchment transition-colors hover:border-ember hover:text-ember"
          >
            <GithubIcon className="h-4 w-4" /> github.com/ramkirangaruda
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-parchment transition-colors hover:border-ember hover:text-ember"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
