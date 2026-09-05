"use client";

import { useState } from "react";
import Image from "next/image";
import { about } from "@/data/site-config";
import Reveal from "@/components/Reveal";

const PREVIEW_COUNT = 3;

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const preview = about.paragraphs.slice(0, PREVIEW_COUNT);
  const rest = about.paragraphs.slice(PREVIEW_COUNT);

  return (
    <section id="sobre-harold" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
        <div className="relative aspect-[4/5] bg-paperAlt md:sticky md:top-24 h-fit">
          <Image
            src={about.photoSrc}
            alt={about.photoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-8">{about.heading}</h2>
          <div className="space-y-4 text-lg text-ink/80 leading-relaxed max-w-prose">
            {preview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {expanded &&
              rest.map((p, i) => <p key={`rest-${i}`}>{p}</p>)}
          </div>

          {!expanded && rest.length > 0 && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-4 text-sm font-bold tracking-wide text-grow hover:text-grow-dark underline underline-offset-4"
            >
              LEER MI HISTORIA COMPLETA
            </button>
          )}

          <div className="mt-10 border-t border-ink/10 pt-8">
            <p className="font-display text-xl mb-3">{about.profileLine}</p>
            <p className="text-ink/70 leading-relaxed max-w-prose mb-5">{about.objective}</p>
            <div className="flex flex-wrap gap-2">
              {about.focusAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs uppercase tracking-wide border border-ink/20 px-3 py-1.5"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
