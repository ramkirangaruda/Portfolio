import { motion } from "framer-motion";
import { profile, stats } from "../data/content.js";
import { Eyebrow } from "./Section.jsx";

const variantClass = {
  solid: "text-bone",
  hollow: "txt-hollow-thick",
  acid: "text-acid",
};

/** Each headline line masks its own overflow so the words wipe up from below. */
function Line({ words, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {words.map((w, i) => (
          <span key={i} className={variantClass[w.v]}>
            {i > 0 && " "}
            {w.t}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[4vw] pb-[6vh] pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_40%,rgba(232,255,71,0.04),transparent_70%),radial-gradient(40%_50%_at_20%_80%,rgba(232,255,71,0.02),transparent_60%)]" />
        <div className="blueprint absolute inset-0" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Eyebrow className="mb-[3vh]">
            {profile.eyebrow} — {profile.location}
          </Eyebrow>
        </motion.div>

        <h1 className="display text-[clamp(3.5rem,11.5vw,11rem)] leading-[0.8]">
          {profile.headline.map((words, i) => (
            <Line key={i} words={words} delay={0.3 + i * 0.15} />
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-[5vh] flex flex-wrap items-end justify-between gap-x-10 gap-y-8 border-t border-hair pt-6"
        >
          <p className="max-w-[520px] text-[clamp(1rem,1.6vw,1.5rem)] font-semibold uppercase leading-[1.3] tracking-[0.02em] text-dim">
            {profile.subhead}
          </p>

          <div className="text-left font-mono text-[11px] uppercase leading-[2] tracking-[0.16em] text-faint sm:text-right">
            {stats.map((s) => (
              <div key={s.label}>
                <i className="not-italic text-acid">{s.value}</i> {s.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
