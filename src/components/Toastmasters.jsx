import { motion } from "framer-motion";
import { toastmasters } from "../data/content.js";
import { SectionHead } from "./Section.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

export default function Toastmasters() {
  return (
    <section id="toastmasters" className="border-t border-hair px-[4vw] py-[14vh]">
      <SectionHead
        eyebrow={toastmasters.role}
        title="Toastmasters"
        em="International"
        description={toastmasters.blurb}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-[8vh] grid gap-px border border-hair bg-hair md:grid-cols-3"
      >
        {toastmasters.pillars.map((pillar, i) => (
          <motion.div key={pillar.title} variants={fadeUp} className="bg-ink p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-acid">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 display text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[0.95] text-bone">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-dim">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
