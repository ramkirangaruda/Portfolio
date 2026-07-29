import { motion } from "framer-motion";

/**
 * react-bits style split-text reveal.
 * Splits text into words and animates each in with a staggered rise + fade.
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10%" }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="inline-block will-change-transform"
          style={{ marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}
