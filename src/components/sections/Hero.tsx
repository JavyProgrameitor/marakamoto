"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    desktop: "/images/hero-marakamoto-1.png",
    mobile: "/images/hero-marakamoto-movil-1.png",
  },
  {
    desktop: "/images/hero-marakamoto-2.png",
    mobile: "/images/hero-marakamoto-movil-2.png",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.desktop}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={slide.mobile}
            />

            <img
              src={slide.desktop}
              alt="Taller de motos MARAKAMOTO"
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </picture>
        </div>
      ))}

      {/* Oscurecimiento suave */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Degradado para mantener legible el texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Taller de motos · Talavera la Real
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Pasión por
            <span className="block text-red-500">
              las dos ruedas
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-200 md:text-xl">
            Mecánica, reparación, mantenimiento, neumáticos y recambios para
            que tu moto esté siempre a punto.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded border border-red-600 bg-red-600 px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              Contactar
            </a>

            <a
              href="#servicios"
              className="rounded border border-white/60 bg-black/10 px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-white backdrop-blur-[2px] transition hover:bg-white hover:text-black"
            >
              Nuestros servicios
            </a>
          </div>
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Mostrar imagen ${index + 1}`}
            className={`h-1 transition-all duration-300 ${index === currentSlide
              ? "w-10 bg-red-600"
              : "w-6 bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
}