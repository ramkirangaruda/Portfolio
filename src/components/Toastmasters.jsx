import { motion } from "framer-motion";
import { toastmasters } from "../data/content.js";
import { SectionHeading } from "./Experience.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Toastmasters() {
  return (
    <section id="toastmasters" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={toastmasters.role}
          title={toastmasters.club}
          description={toastmasters.blurb}
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {toastmasters.pillars.map((pillar) => (
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
      </div>
    </section>
  );
}
