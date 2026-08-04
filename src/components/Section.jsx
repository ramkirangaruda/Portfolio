import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion.js";

/** Acid eyebrow with a trailing rule — the label that opens every section. */
export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`flex items-center gap-3.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-acid ${className}`}
    >
      {children}
      <span className="h-px w-10 bg-acid" />
    </p>
  );
}

/**
 * Section header: eyebrow, oversized condensed title, and an optional
 * monospaced counter pinned to the baseline on the right.
 */
export function SectionHead({ eyebrow, title, em, description, count }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6"
    >
      <div className="max-w-4xl">
        {eyebrow && <Eyebrow className="mb-7">{eyebrow}</Eyebrow>}
        <h2 className="display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.85]">
          {title}
          {em && <em className="not-italic text-acid"> {em}</em>}
        </h2>
        {description && (
          <p className="mt-7 max-w-xl text-[clamp(1rem,1.4vw,1.2rem)] font-semibold uppercase leading-snug tracking-[0.02em] text-dim">
            {description}
          </p>
        )}
      </div>

      {count && (
        <div className="text-right font-mono text-[11px] uppercase leading-[1.9] tracking-[0.2em] text-faint">
          {count.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/** Hairline-separated numbered row used for experience, education and rules. */
export function RuleRow({ index, children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`grid grid-cols-[2.5rem_1fr] items-baseline gap-6 border-b border-hair py-7 sm:grid-cols-[3.75rem_1fr] ${className}`}
    >
      <span className="font-mono text-[11px] tracking-[0.2em] text-acid">{index}</span>
      <div>{children}</div>
    </motion.div>
  );
}

/** Outlined pill for tech tags and status chips. */
export function Tag({ children, status = false, className = "" }) {
  return (
    <span
      className={`border px-2.5 py-1.5 font-mono text-[10px] uppercase leading-none tracking-[0.18em] transition-colors duration-300 ${
        status ? "border-acid text-acid" : "border-hair text-dim"
      } ${className}`}
    >
      {children}
    </span>
  );
}
