import { useCallback, useEffect, useRef, useState } from "react";

export default function useCarousel({ length, autoPlayMs = 4500, visible = 1 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const maxIndex = Math.max(length - visible, 0);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (i) => setIndex(Math.min(Math.max(i, 0), maxIndex)),
    [maxIndex]
  );

  useEffect(() => {
    if (paused || length <= visible) return;
    timerRef.current = setInterval(next, autoPlayMs);
    return () => clearInterval(timerRef.current);
  }, [paused, next, autoPlayMs, length, visible]);

  return { index, next, prev, goTo, paused, setPaused, maxIndex };
}
