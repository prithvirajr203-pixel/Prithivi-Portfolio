import { motion } from "framer-motion";
import ProjectMedia from "./ProjectMedia.jsx";

export default function ClientProjectCard({ project, onOpenDetail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group grid md:grid-cols-2 rounded-2xl overflow-hidden bg-surface border border-line hover:border-gold/60 transition-colors duration-300"
    >
      <button
        onClick={() => onOpenDetail(project)}
        className="aspect-video md:aspect-auto text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
          <ProjectMedia image={project.image} video={project.video} alt={project.title} />
        </div>
      </button>

      <div className="p-7 flex flex-col justify-center">
        <p className="text-[11px] tracking-[0.16em] text-gold mb-2">{project.category.toUpperCase()}</p>
        <h3 className="font-display text-2xl md:text-3xl text-offwhite mb-2">{project.title}</h3>
        <p className="text-sm text-silver leading-relaxed mb-3">{project.description}</p>
        <p className="text-xs text-muted mb-5">{project.role}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-line text-silver">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-silver-light hover:text-gold transition-colors w-fit"
        >
          View Live Project
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  );
}
