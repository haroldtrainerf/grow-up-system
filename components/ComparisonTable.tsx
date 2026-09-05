type Row = { label: string; values: (boolean | string)[] };

export default function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Row[];
}) {
  return (
    <div className="mt-10 table-scroll overflow-x-auto border border-ink/15">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr>
            <th className="sticky left-0 bg-paperAlt text-left font-display font-normal tracking-wide p-4 border-b border-ink/15">
              BENEFICIO
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="bg-paperAlt text-center font-display font-normal tracking-wide p-4 border-b border-l border-ink/15 whitespace-nowrap"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="odd:bg-white even:bg-paper">
              <td className="sticky left-0 bg-inherit p-4 border-b border-ink/10 font-medium">
                {row.label}
              </td>
              {row.values.map((val, i) => (
                <td
                  key={i}
                  className="text-center p-4 border-b border-l border-ink/10 whitespace-nowrap"
                >
                  {typeof val === "boolean" ? (
                    val ? (
                      <span className="text-grow font-bold">✓</span>
                    ) : (
                      <span className="text-ink/25">—</span>
                    )
                  ) : (
                    val
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
