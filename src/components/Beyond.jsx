import { motion } from "framer-motion";
import { achievements, extras } from "../data/content.js";
import { SectionHeading } from "./Experience.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const all = [...achievements, ...extras];

export default function Beyond() {
  return (
    <section className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Beyond the code"
          title="Ideathons, hackathons, trails, and a club ledger"
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {all.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-moss">
                {item.subtitle}
              </p>
              <h3 className="mt-2 font-display text-lg text-parchment">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
