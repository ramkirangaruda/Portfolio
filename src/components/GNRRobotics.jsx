import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { gnr } from "../data/content.js";
import { SectionHead } from "./Section.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

export default function GNRRobotics() {
  return (
    <section id="gnr" className="border-t border-hair px-[4vw] py-[14vh]">
      <SectionHead
        eyebrow="Built after school hours"
        title="GNR"
        em="Robotics"
        description={gnr.blurb}
        count={[
          `Pillars _${String(gnr.pillars.length).padStart(2, "0")}_`,
          `Grade bands _${String(gnr.tracks.length).padStart(2, "0")}_`,
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.5 }}
        className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint"
      >
        <a
          href={gnr.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-acid transition-colors hover:text-bone"
        >
          gnrrobo.com
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <span>{gnr.parent}</span>
        <span>{gnr.location}</span>
      </motion.div>

      {/* Four curriculum pillars */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-[8vh] grid gap-px border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-4"
      >
        {gnr.pillars.map((pillar, i) => (
          <motion.div key={pillar.title} variants={fadeUp} className="bg-ink p-7">
            <span className="font-mono text-[10px] tracking-[0.2em] text-acid">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 display text-[clamp(1.375rem,2.1vw,1.875rem)] leading-[0.95] text-bone">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-dim">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Grade-band ladder */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-[6vh] border-t border-hair"
      >
        {gnr.tracks.map((track) => (
          <motion.div
            key={track.band}
            variants={fadeUp}
            className="group grid gap-x-[3vw] gap-y-2 border-b border-hair py-7 md:grid-cols-[8rem_1fr_1.4fr] md:items-baseline"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
              {track.band}
            </span>
            <h4 className="display text-[clamp(1.375rem,2.6vw,2.25rem)] leading-[0.95] text-bone transition-colors duration-300 group-hover:text-acid">
              {track.name}
            </h4>
            <p className="text-sm leading-relaxed text-dim">{track.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
