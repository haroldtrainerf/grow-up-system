"use client";

import { useState } from "react";
import { faq } from "@/data/site-config";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Reveal className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h2 className="font-display text-3xl md:text-5xl uppercase mb-14">Preguntas frecuentes</h2>

      <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
        {faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg pr-4 tracking-wide">{item.question}</span>
                <span className="text-grow text-xl shrink-0">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <p className="text-ink/70 leading-relaxed pb-5 pr-8">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
