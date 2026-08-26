import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useDocumentMeta } from "../lib/meta.js";

export default function NotFound() {
  useDocumentMeta({ title: "404", description: "Page not found.", path: "/404" });

  return (
    <section className="grain relative flex min-h-[80svh] flex-col items-start justify-center overflow-hidden px-[4vw] pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="blueprint absolute inset-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-faint">LAB/404</span>
        <h1 className="display mt-3 text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] txt-hollow-thick">
          Off the trail
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-dim">
          Nothing's mapped at this coordinate. The route you followed doesn't lead anywhere on this site.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex items-center gap-2.5 bg-acid px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-85"
        >
          <ArrowLeft className="h-4 w-4" /> Back to base camp
        </Link>
      </motion.div>
    </section>
  );
}
