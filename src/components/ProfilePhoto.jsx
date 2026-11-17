import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion.js";

const PHOTO_SRC = "/images/profile/profile-photo.jpeg";

export default function ProfilePhoto({
  size = "w-60 h-72 md:w-64 md:h-80",
}) {
  const [exists, setExists] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const handleMove = (e) => {
    if (reduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: py * -8,
      y: px * 8,
    });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={reduced ? {} : { y: [0, -10, 0] }}
      transition={
        reduced
          ? {}
          : {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      style={{ perspective: 1000 }}
      className={`relative mx-auto ${size}`}
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
        className="relative w-full h-full rounded-[2rem] border border-gold/40 bg-white shadow-gold overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {exists ? (
          <img
            src={PHOTO_SRC}
            alt="R. Prithiviraj"
            onError={() => setExists(false)}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-black">
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold/70"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              <path
                d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>

            <span className="text-[11px] tracking-[0.2em] text-muted">
              ADD PROFILE PHOTO
            </span>
          </div>
        )}

        <div
          className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-silver/10 pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>

      <div
        className="absolute -inset-3 rounded-[2.5rem] border border-line -z-10"
        aria-hidden="true"
      />
    </motion.div>
  );
}