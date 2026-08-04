import { motion } from "framer-motion";
import { skills } from "../data/content.js";
import { SectionHead } from "./Section.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

const categories = Object.entries(skills);
const total = categories.reduce((n, [, items]) => n + items.length, 0);

export default function Skills() {
  return (
    <section id="skills" className="border-t border-hair px-[4vw] py-[14vh]">
      <SectionHead
        eyebrow="Toolbox"
        title="What I"
        em="reach for"
        count={[`Tools _${total}_`, `Stacks _${categories.length}_`]}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-[8vh] border-t border-hair"
      >
        {categories.map(([category, items], i) => (
          <motion.div
            key={category}
            variants={fadeUp}
            className="grid gap-x-[4vw] gap-y-5 border-b border-hair py-8 md:grid-cols-[14rem_1fr] md:items-baseline"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-acid">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[0.95] text-bone">{category}</h3>
            </div>

            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="font-display text-[clamp(1.125rem,1.9vw,1.75rem)] font-semibold uppercase tracking-[0.02em] text-dim transition-colors duration-300 hover:text-acid"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
