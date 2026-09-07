import { inPersonSection, inPersonPlans, inPersonComparison } from "@/data/site-config";
import PlanCard from "@/components/PlanCard";
import ComparisonToggle from "@/components/ComparisonToggle";
import Reveal from "@/components/Reveal";
import RevealZoom from "@/components/RevealZoom";

export default function InPersonTraining() {
  return (
    <section id="planes">
    <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="text-xs uppercase tracking-[0.2em] text-grow font-bold mb-3">
        {inPersonSection.subheading}
      </p>
      <h2 className="font-display text-3xl md:text-5xl uppercase">{inPersonSection.heading}</h2>
      <p className="mt-4 text-ink/70 max-w-xl">{inPersonSection.description}</p>

      <div className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">
        {inPersonPlans.map((plan, i) => (
          <RevealZoom
            key={plan.id}
            delay={i * 100}
            className="shrink-0 w-[85%] max-w-[320px] snap-center md:w-auto md:max-w-none"
          >
            <PlanCard plan={plan} />
          </RevealZoom>
        ))}
      </div>

      <ComparisonToggle columns={inPersonComparison.columns} rows={inPersonComparison.rows} />
    </Reveal>
    </section>
  );
}
