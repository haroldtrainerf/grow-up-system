"use client";

import { useEffect, useState } from "react";
import { nav, whatsappLink } from "@/data/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="leading-none">
          <span className="font-display text-xl tracking-wide">
            GROW <span className="text-grow">UP SYSTEM</span>
          </span>
          <span className="block text-[10px] font-body font-semibold tracking-widest text-muted">
            BY HAROLDTRAINERF
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-none bg-grow px-5 py-2.5 text-sm font-bold tracking-wide text-white hover:bg-grow-dark transition-colors"
          >
            HABLAR CON HAROLD
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-ink/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-grow px-5 py-3 text-sm font-bold tracking-wide text-white"
            >
              HABLAR CON HAROLD
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
