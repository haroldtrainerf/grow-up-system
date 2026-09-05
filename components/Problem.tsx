import { problem } from "@/data/site-config";
import Reveal from "@/components/Reveal";

export default function Problem() {
  return (
    <section className="bg-paper">
      <Reveal className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl leading-[1.05] uppercase max-w-3xl">
          {problem.heading}
          <br />
          <span className="text-grow">{problem.headingLine2}</span>
        </h2>

        <div className="mt-8 max-w-2xl space-y-4 text-lg text-ink/80">
          {problem.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10">
          {problem.pillars.map((pillar, i) => {
            const styles = [
              "bg-ink text-white",
              "bg-grow text-white",
              "bg-paperAlt text-ink",
              "bg-white text-ink border border-ink/10",
            ];
            return (
              <div
                key={pillar}
                className={`${styles[i % styles.length]} p-6 flex items-center justify-center text-center`}
              >
                <span className="font-display text-sm md:text-base tracking-wide">{pillar}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-14 border-t border-ink/10 pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-bold tracking-wide text-ink/60 uppercase">
            {problem.closingLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <p className="mt-3 font-display text-2xl md:text-3xl text-grow uppercase">
            {problem.tagline}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
