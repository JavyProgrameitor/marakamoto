import Image from "next/image";

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="bg-neutral-950 py-24 text-white lg:py-32"
    >
      {/* Cabecera */}
      <div className="mx-auto mb-14 max-w-7xl px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Nuestro día a día
        </p>

        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
          Galería
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          Motos, reparaciones y momentos del día a día en MARAKAMOTO.
        </p>
      </div>

      {/* Galería a ancho completo */}
      <div className="group relative w-full overflow-hidden">
        <Image
          src="/images/galeria-marakamoto.png"
          alt="Galería del taller de motos MARAKAMOTO"
          width={1536}
          height={1024}
          sizes="100vw"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* Oscurecimiento muy suave */}
        <div className="pointer-events-none absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/10" />

        {/* Línea roja inferior */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-700 group-hover:w-full" />
      </div>
    </section>
  );
}