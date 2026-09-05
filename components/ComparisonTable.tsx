type Row = { label: string; values: (boolean | string)[] };

export default function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Row[];
}) {
  return (
    <div className="mt-10 flex border border-ink/15 text-sm">
      {/* Columna fija de beneficios */}
      <div className="shrink-0 w-[150px] sm:w-[200px] bg-paperAlt">
        <div className="h-14 flex items-center px-4 font-display font-normal tracking-wide border-b border-ink/15">
          BENEFICIO
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`min-h-[64px] flex items-center px-4 font-medium border-b border-ink/10 ${
              i % 2 === 0 ? "bg-white" : "bg-paper"
            }`}
          >
            {row.label}
          </div>
        ))}
      </div>

      {/* Columnas de planes: esta parte se desliza hacia los lados */}
      <div className="flex overflow-x-auto snap-x snap-mandatory table-scroll">
        {columns.map((col, ci) => (
          <div key={col} className="shrink-0 w-[130px] snap-start border-l border-ink/15">
            <div className="h-14 flex items-center justify-center px-2 text-center bg-paperAlt font-display font-normal tracking-wide border-b border-ink/15 whitespace-nowrap">
              {col}
            </div>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`min-h-[64px] flex items-center justify-center border-b border-ink/10 ${
                  i % 2 === 0 ? "bg-white" : "bg-paper"
                }`}
              >
                {typeof row.values[ci] === "boolean" ? (
                  row.values[ci] ? (
                    <span className="text-grow font-bold text-lg">✓</span>
                  ) : (
                    <span className="text-ink/25">—</span>
                  )
                ) : (
                  <span className="whitespace-nowrap">{row.values[ci]}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
