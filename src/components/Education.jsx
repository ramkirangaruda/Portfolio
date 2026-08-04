import { motion } from "framer-motion";
import { education } from "../data/content.js";
import { SectionHead } from "./Section.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

export default function Education() {
  return (
    <section id="education" className="border-t border-hair px-[4vw] py-[14vh]">
      <SectionHead eyebrow="Education" title="2021" em="→ 2028" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-[8vh] border-t border-hair"
      >
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            variants={fadeUp}
            className="grid gap-x-[4vw] gap-y-4 border-b border-hair py-9 md:grid-cols-[4rem_1fr_auto] md:items-baseline"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] text-acid">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="display text-[clamp(1.75rem,3.4vw,3rem)] leading-[0.9] text-bone">{e.school}</h3>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
                {e.detail}
              </p>
            </div>

            <div className="flex items-baseline gap-6 font-mono text-[11px] uppercase tracking-[0.18em] md:flex-col md:items-end md:gap-2 md:text-right">
              <span className="text-acid">{e.score}</span>
              <span className="text-faint">{e.years}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
