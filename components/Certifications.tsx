import { education } from "@/data/site-config";
import Reveal from "@/components/Reveal";

export default function Certifications() {
  return (
    <section className="bg-paperAlt">
      <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl uppercase mb-14">{education.heading}</h2>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10">
          <div className="border-l-4 border-grow pl-6">
            <p className="text-xs uppercase tracking-widest text-grow font-bold mb-2">
              Formación principal
            </p>
            <h3 className="font-display text-2xl leading-tight mb-2">{education.mainProgram}</h3>
            <p className="text-ink/60 text-sm">{education.mainProgramDuration}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted font-bold mb-4">
              Certificaciones y especializaciones
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {education.certifications.map((cert) => (
                <div key={cert} className="bg-white border border-ink/10 p-4 flex items-center gap-3">
                  <span className="text-grow font-bold">✓</span>
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
