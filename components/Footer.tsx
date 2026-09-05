import { nav, contact, whatsappLink, legalNote } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg tracking-wide">
            GROW <span className="text-grow">UP SYSTEM</span>
          </p>
          <p className="text-xs font-semibold tracking-widest text-muted mt-1">
            BY HAROLDTRAINERF
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide mb-3">Navegación</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ink/60 hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide mb-3">Contacto</p>
          <ul className="space-y-2">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink/60 hover:text-ink"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink/60 hover:text-ink"
              >
                @{contact.instagramUser}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="text-sm text-ink/60 hover:text-ink">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-3">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} GROW UP SYSTEM. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted max-w-md">{legalNote}</p>
      </div>
    </footer>
  );
}
