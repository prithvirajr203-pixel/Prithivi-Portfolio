import { motion } from "framer-motion";
import { education } from "../data/achievements.js";

export default function Education() {
  return (
    <section className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] text-gold mb-10"
        >
          EDUCATION
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 rounded-2xl bg-surface border border-line hover:border-gold/50 transition-colors duration-300"
            >
              <h3 className="font-display text-2xl md:text-3xl text-offwhite mb-1">
                {item.degree}
              </h3>
              {item.field && (
                <p className="text-silver text-base md:text-lg mb-3">{item.field}</p>
              )}
              <p className="text-muted text-sm mb-6">{item.institution}</p>
              <div className="inline-flex items-baseline gap-2 px-5 py-2.5 rounded-full border border-gold/30">
                <span className="text-gradient-gold font-display text-xl">{item.score}</span>
                <span className="text-xs text-muted tracking-wide">{item.scoreLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}