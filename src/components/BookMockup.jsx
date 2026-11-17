import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion.js";

const BOOK_COVER = "/images/book/Book%20Cover.jpeg";

export default function BookMockup() {
  const [exists, setExists] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const ref = useRef(null);
  const reduced = useReducedMotion();

  const handleMove = (e) => {
    if (reduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px =
      (e.clientX - rect.left) / rect.width - 0.5;

    const py =
      (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: py * -8,
      y: px * 10,
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
      animate={reduced ? {} : { y: [0, -8, 0] }}
      transition={
        reduced
          ? {}
          : {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      style={{ perspective: 1200 }}
      className="relative mx-auto w-72 sm:w-80 md:w-96 lg:w-[28rem]"
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 14,
        }}
        className="relative w-full rounded-lg border border-gold/50 bg-surface shadow-gold overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {exists ? (
          <img
            src={BOOK_COVER}
            alt="The Agentic Shift book cover"
            onError={() => {
              console.error(
                "Book cover failed to load:",
                BOOK_COVER
              );
              setExists(false);
            }}
            className="block w-full h-auto object-contain"
          />
        ) : (
          <div className="aspect-[2/3] w-full flex flex-col items-center justify-center gap-4 p-6 text-center bg-gradient-to-br from-surface to-black">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold/70"
            >
              <path
                d="M5 4.5h9a2.5 2.5 0 012.5 2.5v12.5H7.5A2.5 2.5 0 015 17V4.5z"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              <path
                d="M5 17a2.5 2.5 0 012.5-2.5h9"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>

            <span className="text-[11px] tracking-[0.18em] text-muted">
              ADD BOOK COVER
            </span>
          </div>
        )}

        {/* Book spine */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/40 pointer-events-none" />

        {/* Inner highlight */}
        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-silver/10 pointer-events-none" />
      </motion.div>

      {/* Outer frame */}
      <div className="absolute -inset-3 rounded-xl border border-line -z-10" />
    </motion.div>
  );
}