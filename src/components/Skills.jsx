import { motion } from "framer-motion";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="text-xs tracking-[0.2em] text-gold mb-3">SKILLS</p>
          <h2 className="font-display text-4xl md:text-5xl text-offwhite">Capabilities</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-surface border border-line"
            >
              <h3 className="font-display text-lg text-gold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border border-line text-silver hover:border-gold/50 hover:text-offwhite transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
