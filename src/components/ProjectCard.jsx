import { motion } from "framer-motion";
import ProjectMedia from "./ProjectMedia.jsx";

export default function ProjectCard({ project, onSelect, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-surface border border-line hover:border-gold/60 transition-colors duration-300"
    >
      {/* Project Media */}
      <div className="aspect-video overflow-hidden">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
          <ProjectMedia
            image={project.image}
            video={project.video}
            alt={project.title}
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[11px] tracking-[0.16em] text-gold mb-2">
          {project.category?.toUpperCase()}
        </p>

        <h3 className="font-display text-xl text-offwhite mb-1">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="text-xs text-muted mb-2">
            {project.subtitle}
          </p>
        )}

        <p className="text-sm text-silver leading-relaxed mb-4">
          {project.description}
        </p>

        {project.metric && (
          <p className="text-xs text-silver-light mb-4">
            {project.metric}
          </p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.technologies?.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 rounded-full border border-line text-silver"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 text-sm text-silver-light hover:text-gold transition-colors w-fit"
        >
          View Project
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </motion.div>
  );
}