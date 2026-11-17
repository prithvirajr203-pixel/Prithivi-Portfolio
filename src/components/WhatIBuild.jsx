import { motion } from "framer-motion";

const cards = [
  {
    title: "AI Agents",
    description:
      "AI systems that understand tasks, reason through steps, use tools, and take action.",
    icon: (
      <path
        d="M12 3l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.3l5-.7L12 3z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "AI Automation",
    description:
      "AI-powered workflows that automate repetitive work and connect different tools.",
    icon: (
      <>
        <circle cx="7" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="17" cy="17" r="2.6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9.5 8.5l5 7M14.5 8.5l-5 7" stroke="currentColor" strokeWidth="1.1" />
      </>
    ),
  },
  {
    title: "LLM + Tools",
    description:
      "Connecting AI models with APIs, databases, webhooks and external tools.",
    icon: (
      <>
        <rect x="4" y="4" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
        <rect x="13" y="13" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M11 7.5h4M16.5 11v2" stroke="currentColor" strokeWidth="1.1" />
      </>
    ),
  },
  {
    title: "AI / ML",
    description:
      "Machine learning and computer vision systems built for practical applications.",
    icon: (
      <>
        <rect x="3.5" y="7" width="17" height="11" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="9" cy="12.5" r="1.6" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="15" cy="12.5" r="1.6" stroke="currentColor" strokeWidth="1.1" />
        <path d="M8 7V4.5h8V7" stroke="currentColor" strokeWidth="1.1" />
      </>
    ),
  },
];

export default function WhatIBuild() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-offwhite">What I build</h2>
          <p className="mt-4 text-silver text-base md:text-lg">
            Four areas of work that define how I approach AI engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-surface border border-line hover:border-gold/60 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-lg border border-gold/40 flex items-center justify-center text-gold mb-5 group-hover:shadow-gold-sm transition-shadow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {card.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl text-offwhite mb-2">{card.title}</h3>
              <p className="text-sm text-silver leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
