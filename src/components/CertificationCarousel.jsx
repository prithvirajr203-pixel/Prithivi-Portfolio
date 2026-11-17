import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useCarousel from "../hooks/useCarousel.js";
import useReducedMotion from "../hooks/useReducedMotion.js";
import CertificateCard from "./CertificateCard.jsx";

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const calculate = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCount(1);
      } else if (width < 1024) {
        setCount(2);
      } else {
        setCount(3);
      }
    };

    calculate();

    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return count;
}

export default function CertificationCarousel({
  items = [],
  onImageClick,
}) {
  const visible = useVisibleCount();
  const reduced = useReducedMotion();

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const {
    index,
    next,
    prev,
    goTo,
    setPaused,
    maxIndex,
  } = useCarousel({
    length: items.length,
    autoPlayMs: 3000,
    visible,
    enabled: isVisible,
  });

  /* Start autoplay when Certifications enters the screen */
  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const touchStartX = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const delta =
      e.changedTouches[0].clientX -
      touchStartX.current;

    if (delta > 40) {
      prev();
    }

    if (delta < -40) {
      next();
    }

    touchStartX.current = null;
  };

  if (!items.length) {
    return (
      <div className="py-10 text-center text-muted">
        No certifications available.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Certifications"
    >
      {/* Certificate slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-5"
          animate={{
            x: `calc(
              -${index} * (100% / ${visible})
              - ${index * (20 / visible)}px
            )`,
          }}
          transition={
            reduced
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 180,
                  damping: 28,
                }
          }
        >
          {items.map((cert, i) => {
            const cardWidth = `calc(
              ${100 / visible}% -
              ${((visible - 1) * 20) / visible}px
            )`;

            const active =
              i >= index &&
              i < index + visible;

            return (
              <div
                key={cert.id}
                className="shrink-0"
                style={{
                  width: cardWidth,
                }}
              >
                <CertificateCard
                  cert={cert}
                  active={active}
                  onImageClick={onImageClick}
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Small progress indicators */}
      {items.length > visible && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({
            length: maxIndex + 1,
          }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Certificate slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-7 bg-gold"
                  : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}