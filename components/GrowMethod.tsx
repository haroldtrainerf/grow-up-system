import Image from "next/image";
import { growMethod } from "@/data/site-config";
import Reveal from "@/components/Reveal";

export default function GrowMethod() {
  return (
    <section id="metodo" className="bg-ink text-white">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] uppercase">
              {growMethod.heading}
              <br />
              <span className="text-grow-light">{growMethod.headingLine2}</span>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-prose">{growMethod.intro}</p>
          </div>
          <div className="relative aspect-[4/3] bg-white/5">
            <Image
              src={growMethod.photoSrc}
              alt={growMethod.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {growMethod.phases.map((phase) => (
            <div key={phase.letter} className="bg-ink p-6">
              <span className="font-display text-4xl text-grow-light">{phase.letter}</span>
              <h3 className="font-display text-lg mt-2 mb-2 tracking-wide">{phase.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-2xl md:text-3xl">
          <span className="font-display">GENERAR</span>
          <span className="text-grow-light">→</span>
          <span className="font-display">REFORZAR</span>
          <span className="text-grow-light">→</span>
          <span className="font-display">OPTIMIZAR</span>
          <span className="text-grow-light">→</span>
          <span className="font-display">WORK</span>
          <span className="text-grow-light">↻</span>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="font-display text-2xl md:text-3xl text-white uppercase">
            {growMethod.cycleClosing}
          </p>
          <p className="mt-2 text-sm font-bold tracking-widest text-grow-light uppercase">
            {growMethod.cycleTagline}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

