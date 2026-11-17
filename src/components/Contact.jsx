import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks.jsx";

// TODO: Replace with your real contact email.
const EMAIL = "prithvirajr203@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 border-t border-line">
      <div className="section-max container-px text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-offwhite mb-5">
            Let's build something that acts.
          </h2>
          <p className="text-silver text-base md:text-lg mb-10">
            Open to opportunities in Agentic AI, AI/ML, Generative AI, AI
            Automation and freelance development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${EMAIL}`}
              className="px-7 py-3 rounded-full bg-gold-gradient text-black text-sm font-medium tracking-wide hover:shadow-gold transition-shadow duration-300"
            >
              {EMAIL}
            </a>
            <a
              href="/resume/R.Prithiviraj%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-silver/30 text-silver-light text-sm tracking-wide hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Resume
            </a>
          </div>

          <SocialLinks className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
}
