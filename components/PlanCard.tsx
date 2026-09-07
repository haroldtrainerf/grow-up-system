import { Plan, paypalNote, buyButtonLabel } from "@/data/site-config";

function formatCLP(value: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PlanCard({ plan }: { plan: Plan }) {
  const highlighted = Boolean(plan.highlight);

  return (
    <div
      className={`relative flex flex-col h-full p-8 ${
        highlighted
          ? "bg-ink text-white border-2 border-grow shadow-xl md:-mt-4 md:mb-4"
          : "bg-white text-ink border border-ink/15"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-grow text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5">
          ⭐ {plan.badge}
        </span>
      )}

      <h3 className="font-display text-2xl tracking-wide mt-2">{plan.name}</h3>
      <p className="mt-2 text-3xl font-display">
        {formatCLP(plan.priceCLP)}
        <span
          className={`text-base font-body font-normal ${highlighted ? "text-white/60" : "text-muted"}`}
        >
          {" "}
          / mes
        </span>
      </p>
      {plan.priceNote && (
        <p
          className={`text-xs uppercase tracking-wide mt-1 ${
            highlighted ? "text-white/60" : "text-muted"
          }`}
        >
          {plan.priceNote}
        </p>
      )}

      <ul className="mt-6 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="text-sm flex gap-2">
            <span className={highlighted ? "text-grow-light font-bold" : "text-grow font-bold"}>
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      <p
        className={`mt-6 text-sm leading-relaxed ${highlighted ? "text-white/75" : "text-ink/70"}`}
      >
        {plan.description}
      </p>

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_blank"
        className="mt-6"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={plan.paypalHostedButtonId} />
        <input type="hidden" name="currency_code" value="USD" />
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center bg-grow px-5 py-3.5 font-bold tracking-wide text-white hover:bg-grow-dark transition-colors"
        >
          {buyButtonLabel}
        </button>
      </form>
      <p className={`mt-3 text-[11px] leading-snug ${highlighted ? "text-white/50" : "text-muted"}`}>
        {paypalNote}
      </p>
    </div>
  );
}
