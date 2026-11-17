import { motion } from "framer-motion";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-offwhite">Experience</h2>
          <p className="mt-4 text-silver text-base md:text-lg">
            Research and applied work across AI, machine learning and computer vision.
          </p>
        </motion.div>

        <div className="relative border-l border-line ml-3 space-y-14">
          {experience.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8"
            >
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gold" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl text-offwhite">{role.organization}</h3>
                <span className="text-sm text-gold tracking-wide">{role.role}</span>
              </div>

              {role.focus && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {role.focus.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 rounded-full border border-line text-silver"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              {role.project && (
                <div className="mt-6 p-5 rounded-xl bg-surface border border-line">
                  <p className="text-sm text-muted tracking-[0.14em] mb-1">PROJECT</p>
                  <h4 className="font-display text-xl text-offwhite mb-2">{role.project}</h4>
                  <p className="text-sm text-silver leading-relaxed mb-5">
                    {role.projectDescription || role.description}
                  </p>

                  {role.highlights && (
                    <ul className="space-y-2.5 mb-5">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-silver leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {role.techStack && (
                    <div className="grid sm:grid-cols-2 gap-3 mb-5">
                      {role.techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className="p-3.5 rounded-lg bg-black/40 border border-line"
                        >
                          <p className="text-sm text-offwhite mb-0.5">{tech.name}</p>
                          <p className="text-xs text-muted leading-snug">{tech.note}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {role.data && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                      {Object.entries(role.data).map(([key, val]) => (
                        <div key={key}>
                          <p className="text-lg md:text-xl font-display text-gradient-gold">{val}</p>
                          <p className="text-[11px] text-muted mt-0.5">{humanize(key)}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {role.models && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                      {role.models.map((model) => (
                        <div key={model.name} className="p-4 rounded-lg bg-black/40 border border-line">
                          <p className="text-sm text-offwhite mb-2">{model.name}</p>
                          <div className="space-y-1">
                            {Object.entries(model.results).map(([k, v]) => (
                              <div key={k} className="flex justify-between text-xs">
                                <span className="text-muted">{k}</span>
                                <span className="text-silver-light">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {role.reasonCodes && (
                    <div className="flex flex-wrap gap-2">
                      {role.reasonCodes.map((code) => (
                        <span
                          key={code}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold tracking-wide"
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function humanize(key) {
  const map = {
    februaryRecords: "February Records",
    contentRecords: "Content Records",
    eligiblePages: "Eligible Pages",
    finalLabeledExamples: "Final Labeled Examples",
    wentDarkPages: "Went-Dark Pages",
    wentDarkRate: "Went-Dark Rate",
    training: "Training",
    testing: "Testing",
  };
  return map[key] || key;
}