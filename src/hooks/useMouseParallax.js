import { useEffect, useState } from "react";

// Returns normalized mouse position (-1 to 1) relative to viewport center.
export default function useMouseParallax(disabled = false) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) return;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [disabled]);

  return pos;
}
