import Image from "next/image";
import { Check } from "lucide-react";

const highlights = [
  "Atención cercana y personalizada",
  "Mantenimiento y reparación",
  "Experiencia y pasión por las motos",
  "Servicio en Talavera la Real",
];

export default function Taller() {
  return (
    <section
      id="taller"
      className="overflow-hidden bg-neutral-900 text-white"
    >
      {/* Cabecera */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 lg:px-8 lg:pt-24">
        <div className="max-w-4xl">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            El taller
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tu moto en
            <span className="block text-red-500">
              buenas manos
            </span>
          </h2>

        </div>
      </div>

      {/* Imagen del taller a ancho completo */}
      <div className="relative mt-10 h-[500px] w-full overflow-hidden sm:h-[600px] lg:h-[750px]">
        <Image
          src="/images/taller-marakamoto.png"
          alt="Taller de motos MARAKAMOTO en Talavera la Real"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Degradado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Contenido inferior */}
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-8 lg:pb-24">
        <div className="max-w-4xl">

          <p className="mt-10 text-lg leading-relaxed text-neutral-300">
            En MARAKAMOTO trabajamos cada moto con dedicación y atención al
            detalle. Desde una revisión periódica hasta una reparación,
            buscamos que tu moto vuelva a la carretera en las mejores
            condiciones.
          </p>

          <p className="mt-5 leading-relaxed text-neutral-400">
            Estamos en Talavera la Real, ofreciendo un servicio cercano para
            motoristas que buscan confianza, mantenimiento y cuidado para su
            moto.
          </p>

          {/* Características */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600">
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="text-white"
                  />
                </div>

                <span className="text-sm font-semibold leading-6 text-neutral-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Botón */}
          <div className="mt-10">
            <a
              href="#contacto"
              className="inline-flex rounded border border-red-600 bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              Contactar
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}