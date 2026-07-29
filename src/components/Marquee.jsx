/**
 * react-bits style infinite marquee. Duplicates children once so the
 * CSS animation (translateX 0 -> -50%) loops seamlessly.
 */
export default function Marquee({ items, reverse = false, className = "" }) {
  return (
    <div
      className={`relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-3 pr-3 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <Chip key={`a-${i}`}>{item}</Chip>
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-3 pr-3 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <Chip key={`b-${i}`}>{item}</Chip>
        ))}
      </div>
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm text-slate">
      {children}
    </span>
  );
}
