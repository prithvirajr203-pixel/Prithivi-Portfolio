import { motion } from "framer-motion";
import { achievements } from "../data/achievements.js";

export default function AchievementSection() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 border-t border-line"
    >
      <div className="section-max container-px">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="text-xs tracking-[0.2em] text-gold mb-3">
            ACHIEVEMENTS
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-offwhite">
            Achievements
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-surface border border-line hover:border-gold/50 transition-colors duration-300"
            >
              {a.image && (
                <div className="w-full aspect-[4/3] mb-5 rounded-xl overflow-hidden bg-black/20">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      console.error(
                        "Achievement image failed:",
                        a.image
                      );
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              <h3 className="font-display text-2xl text-gradient-gold mb-2">
                {a.title}
              </h3>

              {a.context && (
                <p className="text-sm text-silver">
                  {a.context}
                </p>
              )}

              {a.project && (
                <p className="text-xs text-muted mt-2">
                  {a.project}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}