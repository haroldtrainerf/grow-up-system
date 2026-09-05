"use client";

import { useState } from "react";
import ComparisonTable from "@/components/ComparisonTable";

export default function ComparisonToggle({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: (boolean | string)[] }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-sm font-bold tracking-wide text-grow hover:text-grow-dark underline underline-offset-4"
      >
        {open ? "OCULTAR COMPARACIÓN DETALLADA" : "VER COMPARACIÓN DETALLADA"}
      </button>
      {open && <ComparisonTable columns={columns} rows={rows} />}
    </div>
  );
}
