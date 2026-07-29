import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content.js";
import SpotlightCard from "./SpotlightCard.jsx";
import { SectionHeading } from "./Experience.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Built because something was broken"
          description="Production systems, a hackathon build, and a couple of platforms still running in the wild."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
            >
              <SpotlightCard className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl text-parchment group-hover:text-ember transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-ember">{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{p.description}</p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-slate"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] text-moss">
                      {p.meta}
                    </span>
                  </div>
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
