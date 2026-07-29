import { skills } from "../data/content.js";
import Marquee from "./Marquee.jsx";
import { SectionHeading } from "./Experience.jsx";

const categories = Object.entries(skills);

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="What I reach for"
        />
      </div>

      <div className="mt-14 space-y-4">
        {categories.map(([category, items], i) => (
          <div key={category} className="group">
            <div className="mx-auto mb-2 max-w-6xl px-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
                {category}
              </span>
            </div>
            <Marquee items={items} reverse={i % 2 === 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
