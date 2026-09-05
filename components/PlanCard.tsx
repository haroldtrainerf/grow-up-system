import { Plan, paypalNote, buyButtonLabel } from "@/data/site-config";

function formatCLP(value: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="border border-ink/15 bg-white p-8 flex flex-col h-full">
      <h3 className="font-display text-2xl tracking-wide">{plan.name}</h3>
      <p className="mt-2 text-3xl font-display">
        {formatCLP(plan.priceCLP)}
        <span className="text-base font-body font-normal text-muted"> / mes</span>
      </p>
      {plan.priceNote && (
        <p className="text-xs text-muted uppercase tracking-wide mt-1">{plan.priceNote}</p>
      )}

      <ul className="mt-6 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="text-sm flex gap-2">
            <span className="text-grow font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-ink/70 leading-relaxed">{plan.description}</p>

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
      <p className="mt-3 text-[11px] text-muted leading-snug">{paypalNote}</p>
    </div>
  );
}
