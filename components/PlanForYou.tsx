import { planForYou, contact, whatsappLink } from "@/data/site-config";
import Reveal from "@/components/Reveal";

export default function PlanForYou() {
  return (
    <section id="evaluacion" className="bg-ink text-white">
      <Reveal className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl uppercase">{planForYou.heading}</h2>
        <div className="mt-6 space-y-4 text-white/70 max-w-xl mx-auto">
          {planForYou.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={contact.diagnosticFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-grow px-7 py-4 font-bold tracking-wide text-white hover:bg-grow-dark transition-colors"
          >
            {planForYou.ctaLabel}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/40 px-7 py-4 font-bold tracking-wide text-white hover:border-white transition-colors"
          >
            {planForYou.secondaryCtaLabel}
          </a>
        </div>
        <p className="mt-5 text-xs text-white/50">{planForYou.note}</p>
      </Reveal>
    </section>
  );
}
