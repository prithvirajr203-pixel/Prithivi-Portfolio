import { motion } from "framer-motion";
import BookMockup from "./BookMockup.jsx";
import { book } from "../data/achievements.js";

export default function BookSection() {
  return (
    <section id="book" className="relative py-24 md:py-32 border-t border-line">
      <div className="section-max container-px grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <BookMockup />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs tracking-[0.2em] text-gold mb-3">PUBLISHED BOOK</p>
          <h2 className="font-display text-4xl md:text-5xl text-offwhite mb-1">{book.title}</h2>
          <p className="text-silver text-base md:text-lg mb-6 italic font-display">{book.subtitle}</p>

          <p className="text-silver leading-relaxed mb-8">{book.description}</p>

          <div className="flex gap-10">
            <div>
              <p className="text-[11px] tracking-[0.18em] text-muted mb-1">AUTHOR</p>
              <p className="text-offwhite">{book.author}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] text-muted mb-1">YEAR</p>
              <p className="text-offwhite">{book.year}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
