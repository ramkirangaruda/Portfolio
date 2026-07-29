import { motion } from "framer-motion";
import { education } from "../data/content.js";
import { SectionHeading } from "./Experience.jsx";

export default function Education() {
  return (
    <section id="education" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="2021 → 2028" />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg text-parchment">{e.school}</h3>
                <p className="mt-0.5 text-sm text-slate">{e.detail}</p>
              </div>
              <div className="flex items-center gap-4 font-mono text-xs text-slate sm:text-right">
                <span className="text-ember">{e.score}</span>
                <span>{e.years}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
