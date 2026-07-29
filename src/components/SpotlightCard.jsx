import { useRef, useState } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

/**
 * react-bits style spotlight card: a radial glow that follows the cursor,
 * plus a gentle 3D tilt. Falls back to a static card on touch devices.
 */
export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);
  const [isTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches
  );

  const mx = useSpring(0, { stiffness: 300, damping: 30 });
  const my = useSpring(0, { stiffness: 300, damping: 30 });
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });

  const background = useMotionTemplate`radial-gradient(240px circle at ${mx}px ${my}px, rgba(226,121,61,0.16), transparent 70%)`;

  function handleMove(e) {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mx.set(x);
    my.set(y);
    ry.set(((x - rect.width / 2) / rect.width) * 6);
    rx.set(-((y - rect.height / 2) / rect.height) * 6);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-ember/40 ${className}`}
    >
      {!isTouch && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
