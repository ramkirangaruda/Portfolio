import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { gnr } from "../data/content.js";
import { SectionHeading } from "./Experience.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function GNRRobotics() {
  return (
    <section id="gnr" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Building things that build people"
          title="GNR Robotics"
          description={gnr.blurb}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-slate"
        >
          <a
            href={gnr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-ember hover:text-parchment transition-colors"
          >
            gnrrobo.com
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <span>{gnr.parent}</span>
          <span>{gnr.location}</span>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {gnr.pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="font-display text-lg text-parchment">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface"
        >
          {gnr.tracks.map((track, i) => (
            <motion.div
              key={track.band}
              variants={fadeUp}
              className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-baseline sm:gap-6 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-moss">
                {track.band}
              </span>
              <span className="w-52 shrink-0 font-display text-base text-parchment">
                {track.name}
              </span>
              <span className="text-sm leading-relaxed text-slate">{track.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
