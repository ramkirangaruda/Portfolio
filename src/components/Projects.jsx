import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content.js";
import { SectionHead, Tag } from "./Section.jsx";

const shipped = projects.filter((p) => p.status !== "In build").length;

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-hair pt-[14vh]">
      <div className="px-[4vw] pb-[6vh]">
        <SectionHead
          eyebrow="Selected work"
          title="The"
          em="index"
          count={[
            `Projects live _${String(shipped).padStart(2, "0")}_`,
            `In build _${String(projects.length - shipped).padStart(2, "0")}_`,
          ]}
        />
      </div>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-8%" }}
        className="relative"
      >
        {projects.map((p) => (
          <Row key={p.name} project={p} />
        ))}
      </motion.div>
    </section>
  );
}

function Row({ project: p }) {
  return (
    <motion.a
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden border-t border-hair px-[4vw] last:border-b"
    >
      {/* Acid panel wipes up from the baseline on hover. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-acid transition-transform duration-500 ease-swipe group-hover:scale-y-100"
      />

      <div className="relative z-10 grid grid-cols-1 gap-x-[3vw] gap-y-3 py-[4.5vh] transition-transform duration-500 ease-swipe md:grid-cols-[6.5rem_1fr_auto] md:items-center md:group-hover:translate-x-[2vw]">
        <span className="font-mono text-xs tracking-[0.2em] text-faint transition-colors duration-300 group-hover:text-ink/70 md:self-start md:pt-3">
          LAB/{p.no}
        </span>

        <div className="min-w-0">
          <h3 className="display text-[clamp(2.25rem,7vw,6.5rem)] leading-[0.85] txt-hollow transition-colors duration-[400ms] group-hover:txt-filled-ink md:whitespace-nowrap">
            {p.name}
          </h3>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors duration-300 group-hover:text-ink/70">
            {p.tagline}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-dim transition-colors duration-300 group-hover:text-ink/80">
            {p.description}
          </p>
        </div>

        {/* Meta slides out of the way as the arrow slides in. */}
        <div className="flex flex-wrap items-center gap-2 transition-all duration-[400ms] ease-swipe md:flex-col md:items-end md:group-hover:-translate-x-8 md:group-hover:opacity-0">
          <Tag status className="group-hover:border-ink/40 group-hover:text-ink">
            {p.status}
          </Tag>
          <Tag className="group-hover:border-ink/40 group-hover:text-ink">{p.type}</Tag>
          <Tag className="group-hover:border-ink/40 group-hover:text-ink">{p.year}</Tag>
        </div>
      </div>

      <ArrowUpRight
        aria-hidden="true"
        className="absolute right-[4vw] top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 translate-x-8 text-ink opacity-0 transition-all duration-[400ms] ease-swipe group-hover:translate-x-0 group-hover:opacity-100 md:block"
      />
    </motion.a>
  );
}
