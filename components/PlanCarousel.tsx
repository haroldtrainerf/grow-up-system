"use client";

import { useEffect, useRef, useState } from "react";

export default function PlanCarousel({ children }: { children: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scales, setScales] = useState<number[]>(children.map(() => 1));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScales = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const newScales = itemRefs.current.map((el) => {
        if (!el) return 1;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        const maxDistance = containerRect.width / 2 + rect.width / 2;
        const ratio = Math.min(distance / maxDistance, 1);
        return 1 - ratio * 0.22;
      });
      setScales(newScales);
    };

    updateScales();
    container.addEventListener("scroll", updateScales, { passive: true });
    window.addEventListener("resize", updateScales);
    return () => {
      container.removeEventListener("scroll", updateScales);
      window.removeEventListener("resize", updateScales);
    };
  }, [children.length]);

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-[7.5%] md:hidden"
    >
      {children.map((child, i) => {
        const scale = scales[i] ?? 1;
        return (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="shrink-0 w-[85%] max-w-[320px] snap-center transition-transform duration-150 ease-out"
            style={{
              transform: `scale(${scale})`,
              opacity: 0.55 + scale * 0.45,
              zIndex: Math.round(scale * 100),
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
