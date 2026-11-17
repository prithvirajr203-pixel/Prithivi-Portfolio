import { motion } from "framer-motion";

const flow = [
  { label: "User", note: "Gives an instruction or goal" },
  { label: "AI Agent", note: "Plans the steps needed" },
  { label: "LLM", note: "Reasons through the task" },
  { label: "Tools", note: "Selects the right capability" },
  { label: "APIs", note: "Connects to external systems" },
  { label: "Workflow", note: "Executes the multi-step process" },
  { label: "Action", note: "Completes the real-world outcome" },
];

export default function AIThatActs() {
  return (
    <section className="relative py-28 md:py-36 border-t border-line">
      <div className="section-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-offwhite">
            From AI that talks
            <span className="block text-gradient-gold">to AI that acts.</span>
          </h2>
          <p className="mt-5 text-silver text-base md:text-lg">
            An agent doesn't just generate text — it reasons, chooses tools,
            calls real systems, and carries a task through to completion.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-stretch justify-between gap-2">
          {flow.map((node, i) => (
            <div key={node.label} className="flex items-center flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-3 flex-1"
              >
                <div className="w-14 h-14 rounded-full border border-gold/50 bg-surface flex items-center justify-center relative">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-gold/40"
                    animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
                  />
                </div>
                <p className="text-sm tracking-[0.12em] text-offwhite">{node.label.toUpperCase()}</p>
                <p className="text-xs text-muted max-w-[9rem]">{node.note}</p>
              </motion.div>
              {i < flow.length - 1 && (
                <div className="relative h-px flex-1 -mx-1 mb-14 bg-line overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent"
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="md:hidden flex flex-col gap-0">
          {flow.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 shrink-0 rounded-full border border-gold/50 bg-surface flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>
                {i < flow.length - 1 && (
                  <div className="w-px flex-1 bg-line my-1 relative overflow-hidden" style={{ minHeight: "2.25rem" }}>
                    <motion.div
                      className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-gold to-transparent"
                      animate={{ y: ["-100%", "300%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                    />
                  </div>
                )}
              </div>
              <div className="pb-9">
                <p className="text-sm tracking-[0.12em] text-offwhite">{node.label.toUpperCase()}</p>
                <p className="text-xs text-muted mt-0.5">{node.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
