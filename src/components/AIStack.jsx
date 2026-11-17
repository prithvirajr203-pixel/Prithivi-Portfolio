import { useState } from "react";
import { motion } from "framer-motion";
import { constellation } from "../data/skills.js";

// Deterministic layout: place nodes evenly around a circle.
function layout(count, radius) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  });
}

export default function AIStack() {
  const [active, setActive] = useState(null);
  const positions = layout(constellation.length, 42);

  return (
    <section className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-12"
        >
          <p className="text-xs tracking-[0.2em] text-gold mb-3">TECHNOLOGY</p>
          <h2 className="font-display text-4xl md:text-5xl text-offwhite">
            The stack behind every agent
          </h2>
        </motion.div>

        <div className="relative w-full aspect-square max-w-2xl mx-auto">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
            {positions.map((p, i) => (
              <line
                key={`line-${i}`}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke={active === constellation[i].id ? "#D4AF37" : "#292929"}
                strokeWidth={active === constellation[i].id ? 0.4 : 0.25}
              />
            ))}
          </svg>

          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface border border-gold flex items-center justify-center text-center shadow-gold-sm">
              <span className="text-[10px] md:text-xs tracking-[0.1em] text-gold font-medium px-2">
                AI AGENT
              </span>
            </div>
          </div>

          {positions.map((p, i) => {
            const node = constellation[i];
            const isActive = active === node.id;
            return (
              <button
                key={node.id}
                onMouseEnter={() => setActive(node.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(node.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(isActive ? null : node.id)}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                aria-label={`${node.label}: ${node.description}`}
              >
                <span
                  className={`block rounded-full border transition-all duration-300 ${
                    isActive
                      ? "w-3.5 h-3.5 bg-gold border-gold shadow-gold-sm"
                      : "w-2 h-2 bg-silver/60 border-silver/40"
                  }`}
                />
                <span
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-[10px] md:text-xs transition-colors ${
                    isActive ? "text-gold" : "text-muted"
                  }`}
                >
                  {node.label}
                </span>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-40 p-3 rounded-lg bg-surface border border-gold/40 text-left z-20 pointer-events-none"
                  >
                    <p className="text-xs text-offwhite mb-1">{node.label}</p>
                    <p className="text-[11px] text-silver leading-snug">{node.description}</p>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
