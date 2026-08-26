import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects.js";
import { Tag } from "./Section.jsx";
import { GithubIcon } from "./icons.jsx";
import { useDocumentMeta } from "../lib/meta.js";
import { fadeUp, stagger } from "../lib/motion.js";

const SECTIONS = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "measured", label: "What I Measured" },
  { key: "broke", label: "What Broke" },
  { key: "next", label: "What I'd Do Next" },
];

function Block({ block }) {
  if (block.type === "p") {
    return <p className="text-sm leading-relaxed text-dim">{block.text}</p>;
  }
  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag className={`space-y-3 pl-5 marker:text-acid ${block.ordered ? "list-decimal" : "list-disc"}`}>
        {block.items.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed text-dim">
            {item}
          </li>
        ))}
      </ListTag>
    );
  }
  if (block.type === "table") {
    return (
      <div className="overflow-x-auto border border-hair">
        <table className="w-full min-w-[640px] border-collapse font-mono text-xs">
          <thead>
            <tr className="border-b border-hair text-left text-faint">
              {block.headers.map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-normal uppercase tracking-[0.14em]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className="border-b border-hair last:border-b-0">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`whitespace-nowrap px-4 py-3 ${j === 0 ? "text-bone" : "text-dim"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

function DetailSection({ index, label, blocks }) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <motion.div variants={fadeUp} className="border-b border-hair py-[6vh]">
      <div className="mb-6 flex items-baseline gap-4">
        <span className="font-mono text-[11px] tracking-[0.2em] text-acid">{index}</span>
        <h2 className="display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[0.95] text-bone">{label}</h2>
      </div>
      <div className="max-w-3xl space-y-4 md:pl-[3.75rem]">
        {blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Work() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useDocumentMeta({
    title: project?.name,
    description: project?.tagline,
    path: `/work/${slug}`,
  });

  if (!project) return <Navigate to="/404" replace />;

  const hasLinks = project.links.github || project.links.live || project.links.writeup;

  return (
    <article className="px-[4vw] pb-[14vh] pt-40">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim transition-colors hover:text-acid"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to the index
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 border-b border-hair pb-[6vh]"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-faint">{project.lab}</span>
        <h1 className="display mt-3 text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.85]">{project.name}</h1>
        <p className="mt-5 max-w-2xl font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
          {project.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          <Tag status>{project.status}</Tag>
          <Tag>{project.category}</Tag>
          <Tag>{project.year}</Tag>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-dim">{project.summary}</p>

        {project.metrics.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-2xl text-acid">{m.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {project.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}

        {hasLinks && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-acid px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-85"
              >
                <GithubIcon className="h-4 w-4" /> Code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-hair px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-acid hover:text-acid"
              >
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links.writeup && (
              <a
                href={project.links.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-hair px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-acid hover:text-acid"
              >
                Writeup <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </motion.header>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
      >
        {SECTIONS.map((s, i) => (
          <DetailSection
            key={s.key}
            index={String(i + 1).padStart(2, "0")}
            label={s.label}
            blocks={project.detail?.[s.key]}
          />
        ))}
      </motion.div>
    </article>
  );
}
