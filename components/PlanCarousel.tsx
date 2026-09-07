"use client";

import { useEffect, useRef } from "react";

export default function PlanCarousel({ children }: { children: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const applyScales = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        const maxDistance = containerRect.width / 2 + rect.width / 2;
        const ratio = Math.min(distance / maxDistance, 1);
        const scale = 1 - ratio * 0.22;

        el.style.transform = `scale(${scale})`;
        el.style.opacity = String(0.55 + scale * 0.45);
        el.style.zIndex = String(Math.round(scale * 100));
      });

      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(applyScales);
      }
    };

    applyScales();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", applyScales);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", applyScales);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [children.length]);

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-[7.5%] md:hidden"
    >
      {children.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="shrink-0 w-[85%] max-w-[320px] snap-center will-change-transform"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
