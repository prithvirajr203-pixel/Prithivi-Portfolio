import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.title} certificate preview`}
        >
          <motion.div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-11 right-0 w-9 h-9 rounded-full bg-black/60 border border-line flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors"
            >
              ✕
            </button>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto rounded-xl border border-gold/40 shadow-gold"
            />
            <p className="text-center text-sm text-silver mt-4">{cert.title} — {cert.organization}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
