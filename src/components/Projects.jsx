import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects, inBuildStrip } from "../data/projects.js";
import { SectionHead, Tag } from "./Section.jsx";
import { GithubIcon } from "./icons.jsx";

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
          <Row key={p.slug} project={p} />
        ))}
      </motion.div>

      {inBuildStrip.length > 0 && <InBuildStrip />}
    </section>
  );
}

function Row({ project: p }) {
  const hasLinks = p.links.github || p.links.live || p.links.writeup;

  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
      className="group relative border-t border-hair px-[4vw] last:border-b"
    >
      {/* Acid panel wipes up from the baseline on hover. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-acid transition-transform duration-500 ease-swipe group-hover:scale-y-100"
      />

      <Link to={`/work/${p.slug}`} className="relative z-10 block">
        <div className="grid grid-cols-1 gap-x-[3vw] gap-y-3 pt-[4.5vh] transition-transform duration-500 ease-swipe md:grid-cols-[6.5rem_1fr_auto] md:items-center md:group-hover:translate-x-[2vw]">
          <span className="font-mono text-xs tracking-[0.2em] text-faint transition-colors duration-300 group-hover:text-ink/70 md:self-start md:pt-3">
            {p.lab}
          </span>

          <div className="min-w-0">
            <h3 className="display text-[clamp(2.25rem,7vw,6.5rem)] leading-[0.85] txt-hollow transition-colors duration-[400ms] group-hover:txt-filled-ink md:whitespace-nowrap">
              {p.name}
            </h3>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors duration-300 group-hover:text-ink/70">
              {p.tagline}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-dim transition-colors duration-300 group-hover:text-ink/80">
              {p.summary}
            </p>

            {p.metrics.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-lg text-acid transition-colors duration-300 group-hover:text-ink">
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint transition-colors duration-300 group-hover:text-ink/60">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Meta slides out of the way as the arrow slides in. */}
          <div className="flex flex-wrap items-center gap-2 transition-all duration-[400ms] ease-swipe md:flex-col md:items-end md:group-hover:-translate-x-8 md:group-hover:opacity-0">
            <Tag status className="group-hover:border-ink/40 group-hover:text-ink">
              {p.status}
            </Tag>
            <Tag className="group-hover:border-ink/40 group-hover:text-ink">{p.category}</Tag>
            <Tag className="group-hover:border-ink/40 group-hover:text-ink">{p.year}</Tag>
          </div>
        </div>

        <ArrowUpRight
          aria-hidden="true"
          className="absolute right-[4vw] top-[4.5vh] z-20 hidden h-11 w-11 -translate-y-1/2 translate-x-8 text-ink opacity-0 transition-all duration-[400ms] ease-swipe group-hover:translate-x-0 group-hover:opacity-100 md:block"
        />
      </Link>

      {hasLinks && (
        <div className="relative z-10 mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 pb-[4.5vh]">
          {p.links.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors duration-300 hover:text-acid group-hover:text-ink/70"
            >
              <GithubIcon className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors duration-300 hover:text-acid group-hover:text-ink/70"
            >
              Live <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {p.links.writeup && (
            <a
              href={p.links.writeup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors duration-300 hover:text-acid group-hover:text-ink/70"
            >
              Writeup <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

function InBuildStrip() {
  return (
    <div className="border-t border-hair px-[4vw] py-[8vh]">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Also in build</p>
      <ul className="space-y-6">
        {inBuildStrip.map((item) => (
          <li key={item.name} className="flex flex-col gap-1 border-b border-hair pb-6 last:border-b-0 last:pb-0">
            <div className="flex flex-wrap items-baseline gap-3">
              <h4 className="font-display text-lg font-semibold uppercase tracking-[0.02em] text-bone">
                {item.name}
              </h4>
              <Tag status>{item.status}</Tag>
              {item.links.github && (
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-acid"
                >
                  <GithubIcon className="h-3.5 w-3.5" /> Code
                </a>
              )}
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-dim">{item.tagline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
