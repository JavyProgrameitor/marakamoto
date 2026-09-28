import {
  Wrench,
  Settings,
  CircleGauge,
  PackageOpen,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mecánica y reparación",
    description:
      "Diagnóstico y reparación de averías para mantener tu moto en las mejores condiciones.",
  },
  {
    icon: Settings,
    title: "Mantenimiento y revisiones",
    description:
      "Revisiones periódicas, puesta a punto y mantenimiento para disfrutar de tu moto con tranquilidad.",
  },
  {
    icon: CircleGauge,
    title: "Neumáticos",
    description:
      "Cambio y mantenimiento de neumáticos para conseguir seguridad y buen comportamiento en carretera.",
  },
  {
    icon: PackageOpen,
    title: "Recambios y accesorios",
    description:
      "Recambios, componentes y accesorios para el mantenimiento y mejora de tu moto.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-neutral-950 px-6 py-24 text-white lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabecera */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            MARAKAMOTO
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Nuestros servicios
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Cuidamos tu moto para que tú solo tengas que preocuparte de
            disfrutar de la carretera.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group bg-neutral-950 p-8 transition duration-300 hover:bg-neutral-900 lg:min-h-80"
              >
                {/* Icono */}
                <Icon
                  size={42}
                  strokeWidth={1.5}
                  className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-10 text-2xl font-bold uppercase leading-tight transition group-hover:text-red-500">
                  {service.title}
                </h3>

                <div className="my-6 h-px w-10 bg-red-600 transition-all duration-300 group-hover:w-20" />

                <p className="leading-relaxed text-neutral-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}