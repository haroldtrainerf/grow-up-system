import { finalCta, contact, whatsappLink, philosophy } from "@/data/site-config";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section className="bg-ink text-white">
      <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-lg md:text-2xl text-grow-light uppercase leading-snug mb-10">
          {philosophy.quoteLine1}
          <br />
          {philosophy.quoteLine2}
        </p>

        <h2 className="font-display text-3xl md:text-5xl uppercase leading-tight mb-4">
          {finalCta.heading}
        </h2>
        <p className="font-display text-xl md:text-2xl text-grow-light uppercase mb-6">
          {finalCta.subheading}
        </p>
        <p className="text-white/70 max-w-xl mx-auto mb-10">{finalCta.paragraph}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
          <a
            href="#planes"
            className="inline-flex items-center justify-center bg-grow px-6 py-4 font-bold tracking-wide text-white hover:bg-grow-dark transition-colors"
          >
            {finalCta.ctaPrimaryLabel}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/40 px-6 py-4 font-bold tracking-wide text-white hover:border-white transition-colors"
          >
            {finalCta.ctaSecondaryLabel}
          </a>
          <a
            href={contact.diagnosticFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/40 px-6 py-4 font-bold tracking-wide text-white hover:border-white transition-colors"
          >
            {finalCta.ctaTertiaryLabel}
          </a>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="font-display text-2xl">{finalCta.closingBrand}</p>
          <p className="mt-2 text-xs font-bold tracking-widest text-grow-light uppercase">
            {finalCta.closingTagline}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
