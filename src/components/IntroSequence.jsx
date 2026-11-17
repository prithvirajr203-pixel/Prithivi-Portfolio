import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion.js";

const STEPS = [
  { key: "name", text: " R.PRITHIVIRAJ", size: "text-3xl md:text-5xl font-display" },
  { key: "init", text: "SYSTEM INITIALIZING...", size: "text-xs md:text-sm tracking-[0.3em] text-muted" },
  { key: "status", text: "● ONLINE", size: "text-sm md:text-base tracking-[0.25em] text-gold" },
  { key: "title", text: "AGENTIC AI DEVELOPER", size: "text-lg md:text-2xl tracking-[0.15em] text-silver-light" },
];

const STEP_DURATION = 620;

export default function IntroSequence({ onDone }) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(() => {
        setVisible(false);
        onDone?.();
      }, 300);
      return () => clearTimeout(t);
    }
    if (step >= STEPS.length) {
      const t = setTimeout(() => {
        setVisible(false);
        onDone?.();
      }, 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), STEP_DURATION);
    return () => clearTimeout(t);
  }, [step, reduced, onDone]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {step < STEPS.length && (
              <motion.p
                key={STEPS[step].key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className={`${STEPS[step].size} text-offwhite`}
              >
                {STEPS[step].text}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
