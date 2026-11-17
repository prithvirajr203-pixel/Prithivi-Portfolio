import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetail from "./ProjectDetail.jsx";

export default function ProjectCommandCenter() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="text-xs tracking-[0.2em] text-gold mb-3">PROJECTS</p>
          <h2 className="font-display text-4xl md:text-5xl text-offwhite">
            AI systems I have built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelected} index={i} />
          ))}
        </div>
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
