import { onlineSection, onlinePlans, onlineComparison } from "@/data/site-config";
import PlanCard from "@/components/PlanCard";
import ComparisonToggle from "@/components/ComparisonToggle";
import Reveal from "@/components/Reveal";
import RevealZoom from "@/components/RevealZoom";

export default function OnlineTraining() {
  return (
    <section className="bg-paperAlt">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-grow font-bold mb-3">
          {onlineSection.subheading}
        </p>
        <h2 className="font-display text-3xl md:text-5xl uppercase">{onlineSection.heading}</h2>
        <p className="mt-4 text-ink/70 max-w-xl">{onlineSection.description}</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {onlinePlans.map((plan, i) => (
            <RevealZoom key={plan.id} delay={i * 100}>
              <PlanCard plan={plan} />
            </RevealZoom>
          ))}
        </div>

        <ComparisonToggle columns={onlineComparison.columns} rows={onlineComparison.rows} />
      </Reveal>
    </section>
  );
}
