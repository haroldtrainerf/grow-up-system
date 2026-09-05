import Image from "next/image";
import { hero, whatsappLink } from "@/data/site-config";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={hero.photoSrc}
          alt={hero.photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pb-16 pt-40 md:pb-24">
        <p className="text-xs uppercase tracking-[0.2em] text-grow-light font-bold mb-4">
          {hero.tag}
        </p>
        <h1 className="font-display text-white text-4xl sm:text-6xl md:text-7xl leading-[1.02] max-w-4xl uppercase">
          {hero.headlineLine1}
          <br />
          {hero.headlineLine2}
        </h1>
        <p className="mt-6 max-w-xl text-white/80 text-lg">{hero.subline}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#planes"
            className="inline-flex items-center justify-center bg-grow px-7 py-4 font-bold tracking-wide text-white hover:bg-grow-dark transition-colors"
          >
            {hero.ctaPrimaryLabel}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/40 px-7 py-4 font-bold tracking-wide text-white hover:border-white transition-colors"
          >
            {hero.ctaSecondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
