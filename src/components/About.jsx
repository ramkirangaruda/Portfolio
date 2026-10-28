import { motion } from "framer-motion";
import { profile } from "../data/content.js";
import { Eyebrow, RuleRow } from "./Section.jsx";
import { stagger } from "../lib/motion.js";

/* The operating principles behind the work — the manifesto column. */
const rules = [
  {
    no: "01",
    text: (
      <>
        Build it because <strong className="font-bold text-bone">something is broken</strong>, not
        because it would look good in a repo.
      </>
    ),
  },
  {
    no: "02",
    text: (
      <>
        <strong className="font-bold text-bone">Shipped and used</strong> beats clever and
        theoretical. Every project here has real users or it does not count.
      </>
    ),
  },
  {
    no: "03",
    text: (
      <>
        Read the whole codebase first. <strong className="font-bold text-bone">Systems</strong>{" "}
        before syntax.
      </>
    ),
  },
  {
    no: "04",
    text: (
      <>
        Building a service and running it are the same job:{" "}
        <strong className="font-bold text-bone">keep it up, keep it honest</strong>.
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-y-[5vh] border-t border-hair px-[4vw] py-[16vh] md:grid-cols-[1fr_1.4fr] md:gap-x-[6vw]"
    >
      <Eyebrow className="md:sticky md:top-32 md:self-start">Operating notes</Eyebrow>

      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="display text-[clamp(2.125rem,4.6vw,4.5rem)] leading-[0.92]"
        >
          A CS student who ended up{" "}
          <span className="text-faint">shipping real systems</span> — from{" "}
          <em className="not-italic text-acid">helpdesks to hackathons</em>.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 max-w-2xl text-base leading-relaxed text-dim"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-[8vh] border-t border-hair"
        >
          {rules.map((r) => (
            <RuleRow key={r.no} index={r.no}>
              <p className="text-[clamp(1.0625rem,1.5vw,1.375rem)] font-semibold uppercase leading-[1.35] tracking-[0.02em] text-dim">
                {r.text}
              </p>
            </RuleRow>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
