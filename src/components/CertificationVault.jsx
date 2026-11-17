import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/certifications.js";
import CertificationCarousel from "./CertificationCarousel.jsx";
import CertificateModal from "./CertificateModal.jsx";

export default function CertificationVault() {
  const [modalCert, setModalCert] = useState(null);

  return (
    <section
      id="certifications"
      className="relative py-24 md:py-32 border-t border-line"
    >
      <div className="section-max container-px">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="text-xs tracking-[0.2em] text-gold mb-3">
            CERTIFICATION VAULT
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-offwhite mb-4">
            Continuous learning
          </h2>

          <p className="text-silver text-base leading-relaxed">
            Continuous learning across AI, AI fluency and developer tools.
          </p>
        </motion.div>

        {/* Certificate Carousel */}
        <CertificationCarousel
          items={certifications}
          onImageClick={setModalCert}
        />
      </div>

      {/* Certificate Image Modal */}
      <CertificateModal
        cert={modalCert}
        onClose={() => setModalCert(null)}
      />
    </section>
  );
}