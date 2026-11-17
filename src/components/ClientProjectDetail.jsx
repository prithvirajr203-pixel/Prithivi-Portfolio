import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectMedia from "./ProjectMedia.jsx";

export default function ClientProjectDetail({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-surface border border-gold/30 shadow-gold"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-line flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors"
            >
              ✕
            </button>

            <div className="aspect-video">
              <ProjectMedia image={project.image} video={project.video} alt={project.title} />
            </div>

            <div className="p-7">
              <p className="text-[11px] tracking-[0.16em] text-gold mb-2">
                {project.category.toUpperCase()}
              </p>
              <h3 className="font-display text-3xl text-offwhite mb-2">{project.title}</h3>
              <p className="text-sm text-muted mb-4">{project.role}</p>
              <p className="text-silver leading-relaxed mb-6">{project.description}</p>

              <p className="text-xs tracking-[0.16em] text-muted mb-6">PROJECT DETAILS</p>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-black text-sm font-medium hover:shadow-gold transition-shadow"
              >
                View Live Project →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
