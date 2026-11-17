import { useState } from "react";
import { motion } from "framer-motion";
import { clientProjects, freelanceProfile } from "../data/clientWork.js";
import ClientProjectCard from "./ClientProjectCard.jsx";
import ClientProjectDetail from "./ClientProjectDetail.jsx";

export default function ClientWork() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="client-work" className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-6"
        >
          <p className="text-xs tracking-[0.2em] text-gold mb-3">CLIENT &amp; FREELANCE WORK</p>
          <h2 className="font-display text-4xl md:text-5xl text-offwhite mb-4">
            Real-world project experience
          </h2>
          <p className="text-silver text-base leading-relaxed">
            Alongside my personal AI projects, I work on freelance and client
            projects, building practical digital solutions based on real
            requirements.
          </p>
        </motion.div>

        <p className="text-sm text-muted tracking-wide mb-10">
          {freelanceProfile.role} — {freelanceProfile.organization}
        </p>

        <div className="grid gap-6">
          {clientProjects.map((project) => (
            <ClientProjectCard key={project.id} project={project} onOpenDetail={setSelected} />
          ))}
        </div>
      </div>

      <ClientProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
