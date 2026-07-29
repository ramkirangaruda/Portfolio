import { motion } from "framer-motion";
import { profile, stats } from "../data/content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            className="max-w-2xl text-balance font-display text-2xl font-normal leading-relaxed text-parchment sm:text-3xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            className="grid grid-cols-2 gap-x-6 gap-y-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <div className="font-display text-3xl text-ember sm:text-4xl">{s.value}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-slate">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
