import { motion } from "framer-motion";
import { experience } from "../data/content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Three roles, running in parallel"
          description="Not a career ladder — three tracks at once: an internship shipping AI tooling, contract work on government infrastructure, and keeping a school running day to day."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {experience.map((job) => (
            <motion.article
              key={job.org}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="font-display text-xl text-parchment">{job.org}</h3>
              <p className="mt-1 text-sm text-ember">{job.role}</p>
              <p className="mt-0.5 font-mono text-xs text-slate">{job.place}</p>
              {job.period && (
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-moss">
                  {job.period}
                </p>
              )}

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate">
                {job.points.map((pt, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 pt-1">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl"
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ember">{eyebrow}</p>
      )}
      <h2 className="text-balance font-display text-3xl text-parchment sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-balance leading-relaxed text-slate">{description}</p>
      )}
    </motion.div>
  );
}
