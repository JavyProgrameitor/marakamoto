"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="#inicio" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo-marakamoto-1.png"
            alt="MARAKAMOTO"
            width={500}
            height={160}
            priority
            className="h-auto w-48 sm:w-56"
          />
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Servicios
          </a>

          <a
            href="#taller"
            className="text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Taller
          </a>

          <a
            href="#galeria"
            className="text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Galería
          </a>

          <a
            href="#contacto"
            className="text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Contacto
          </a>
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <div className="relative h-5 w-7">
            <span
              className={`absolute left-0 top-0 h-0.5 w-7 bg-white transition-all duration-300 ${
                menuOpen ? "top-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2 h-0.5 w-7 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-4 h-0.5 w-7 bg-white transition-all duration-300 ${
                menuOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`absolute left-0 top-24 w-full overflow-hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Servicios
          </a>

          <a
            href="#taller"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Taller
          </a>

          <a
            href="#galeria"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Galería
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
            className="py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:text-red-500"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}