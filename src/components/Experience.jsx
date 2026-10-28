import { motion } from "framer-motion";
import { experience } from "../data/content.js";
import { SectionHead, Tag } from "./Section.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hair px-[4vw] py-[14vh]">
      <SectionHead
        eyebrow="Currently"
        title="Where I've"
        em="shipped"
        description="Not a career ladder. An internship shipping AI tooling and internal products used by hundreds of employees."
        count={[`Roles _${String(experience.length).padStart(2, "0")}_`, "Status _live_"]}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-8%" }}
        className="mt-[8vh] border-t border-hair"
      >
        {experience.map((job) => (
          <motion.article
            key={job.org}
            variants={fadeUp}
            className="grid gap-x-[4vw] gap-y-6 border-b border-hair py-[5vh] md:grid-cols-[1fr_1.3fr]"
          >
            <div className="md:sticky md:top-32 md:self-start">
              <h3 className="display text-[clamp(2rem,4vw,3.75rem)] leading-[0.9]">{job.org}</h3>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-acid">
                {job.role}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                {job.place}
              </p>
              {job.period && (
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {job.period}
                </p>
              )}
            </div>

            <div>
              <ul className="space-y-4">
                {job.points.map((pt, i) => (
                  <li key={i} className="grid grid-cols-[2.25rem_1fr] gap-3">
                    <span className="pt-1 font-mono text-[10px] tracking-[0.2em] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-dim">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
