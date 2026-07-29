import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Builds a smooth wandering line (elevation-profile / topographic-line
 * shape) across a viewBox using a small deterministic sine mix so it
 * reads as organic terrain rather than a perfect wave. Returns both the
 * raw point list (for scroll-linked markers) and the path string.
 */
function buildContourPoints(width, height, { amplitude, frequency, phase, baseline }) {
  const points = 48;
  const pts = [];
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    const t = (i / points) * Math.PI * 2 * frequency + phase;
    const y =
      baseline +
      Math.sin(t) * amplitude +
      Math.sin(t * 2.3 + phase) * amplitude * 0.28;
    pts.push([x, y]);
  }
  return pts;
}

function pointsToPath(pts) {
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const mx = (px + cx) / 2;
    const my = (py + cy) / 2;
    d += ` Q ${px.toFixed(1)} ${py.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
  }
  const last = pts[pts.length - 1];
  d += ` T ${last[0].toFixed(1)} ${last[1].toFixed(1)}`;
  return d;
}

const W = 1200;
const H = 420;

const LAYERS = [
  { amplitude: 34, frequency: 1.6, phase: 0.4, baseline: 120, color: "var(--color-moss)", opacity: 0.22, width: 1.4 },
  { amplitude: 46, frequency: 1.2, phase: 1.8, baseline: 200, color: "var(--color-ember)", opacity: 0.3, width: 1.6 },
  { amplitude: 28, frequency: 2.1, phase: 3.1, baseline: 270, color: "var(--color-moss)", opacity: 0.16, width: 1.2 },
  { amplitude: 40, frequency: 1.4, phase: 5.0, baseline: 340, color: "var(--color-slate)", opacity: 0.14, width: 1.2 },
];

/** Ambient, layered contour lines for the hero backdrop — draws in on load. */
export function ContourBackdrop({ className = "" }) {
  const paths = useMemo(
    () => LAYERS.map((l) => ({ ...l, d: pointsToPath(buildContourPoints(W, H, l)) })),
    []
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          fill="none"
          stroke={p.color}
          strokeWidth={p.width}
          strokeLinecap="round"
          opacity={p.opacity}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  );
}

/**
 * A slim full-width trail line used as a section divider. A marker
 * travels along it as the section scrolls through view — a small nod
 * to the elevation profile of an actual trail run. The marker is a
 * plain SVG circle interpolated across the precomputed points, so it
 * scales correctly with the viewBox regardless of rendered width.
 */
export function TrailDivider({ className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const divH = 100;
  const pts = useMemo(
    () => buildContourPoints(W, divH, { amplitude: 22, frequency: 1.2, phase: 1.8, baseline: 50 }),
    []
  );
  const d = useMemo(() => pointsToPath(pts), [pts]);

  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const steps = pts.map((_, i) => i / (pts.length - 1));

  const cx = useTransform(scrollYProgress, steps, xs);
  const cy = useTransform(scrollYProgress, steps, ys);

  return (
    <div ref={ref} className={`relative h-14 w-full ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${divH}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path d={d} fill="none" stroke="var(--color-line)" strokeWidth="1.5" />
        <path
          d={d}
          fill="none"
          stroke="var(--color-ember)"
          strokeWidth="1.5"
          strokeDasharray="1 9"
          opacity="0.6"
        />
        <motion.circle
          cx={cx}
          cy={cy}
          r="4"
          fill="var(--color-ember)"
          style={{ filter: "drop-shadow(0 0 5px rgba(226,121,61,0.7))" }}
        />
      </svg>
    </div>
  );
}
