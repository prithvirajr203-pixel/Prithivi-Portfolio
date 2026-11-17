import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import ProfilePhoto from "./ProfilePhoto.jsx";
import LabStatus from "./LabStatus.jsx";
import SocialLinks from "./SocialLinks.jsx";

const AI3DCore = lazy(() => import("./AI3DCore.jsx"));

const techLine = ["AI Agents", "Generative AI", "LLMs", "n8n", "AI/ML"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="section-max container-px w-full grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

        {/* LEFT SIDE */}
        <div className="order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

            {/* Profile Photo */}
            <div className="mb-2">
              <ProfilePhoto size="w-40 h-40 md:w-48 md:h-48" />
            </div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-offwhite">
                R.Prithiviraj
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-1"
            >
              <p className="text-lg md:text-xl text-gradient-gold font-medium tracking-wide">
                Agentic AI Developer
              </p>

              <p className="text-sm md:text-base text-silver tracking-[0.15em]">
                AI AUTOMATION BUILDER
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-md text-silver/90 text-base md:text-lg leading-relaxed font-display italic"
            >
              "I build AI systems that don't just respond — they reason, connect
              tools, automate workflows, and take action."
            </motion.p>

            {/* Technology Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1 text-xs text-muted"
            >
              {techLine.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-gold/50">•</span>
                  )}
                  {t}
                </span>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Explore Projects */}
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-gold-gradient text-black text-sm font-medium tracking-wide hover:shadow-gold transition-shadow duration-300"
              >
                Explore Projects
              </a>

              {/* View Resume */}
              <a
                href="/resume/R.Prithiviraj%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-silver/30 text-silver-light text-sm tracking-wide hover:border-gold hover:text-gold transition-colors duration-300"
              >
                View Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col items-center lg:items-start gap-4 pt-4"
            >
              <SocialLinks />
              <LabStatus online />
            </motion.div>

          </div>
        </div>

        {/* RIGHT SIDE - AI 3D CORE */}
        <div className="order-1 lg:order-2 relative">
          <Suspense
            fallback={
              <div className="w-full h-[340px] md:h-[520px] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-gold/30 border-t-gold animate-spin" />
              </div>
            }
          >
            <AI3DCore />
          </Suspense>
        </div>

      </div>
    </section>
  );
}