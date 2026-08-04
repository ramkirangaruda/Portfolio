import { motion } from "framer-motion";
import { achievements, extras } from "../data/content.js";
import { SectionHead, Tag } from "./Section.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

const all = [...achievements, ...extras];

export default function Beyond() {
  return (
    <section className="border-t border-hair px-[4vw] py-[14vh]">
      <SectionHead
        eyebrow="Beyond the code"
        title="Ideathons, hackathons,"
        em="long trails"
        count={[`Entries _${String(all.length).padStart(2, "0")}_`]}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-[8vh] border-t border-hair"
      >
        {all.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="group grid gap-x-[3vw] gap-y-4 border-b border-hair py-8 md:grid-cols-[4rem_1fr_1.3fr] md:items-baseline"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] text-acid">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="display text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[0.9] text-bone transition-colors duration-300 group-hover:text-acid">
                {item.title}
              </h3>
              <Tag className="mt-4 inline-block">{item.subtitle}</Tag>
            </div>

            <p className="text-sm leading-relaxed text-dim">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
