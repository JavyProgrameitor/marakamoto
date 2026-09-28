import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        {/* Parte principal */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="inline-block">
              <Image
                src="/images/logo-marakamoto-1.png"
                alt="MARAKAMOTO"
                width={500}
                height={160}
                className="h-auto w-56"
              />
            </a>

            <p className="mt-6 max-w-sm leading-relaxed text-neutral-400">
              Mecánica, mantenimiento, neumáticos y recambios para cuidar tu
              moto y mantenerla siempre a punto.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Navegación
            </h3>

            <nav className="mt-6 flex flex-col gap-3">
              <a
                href="#inicio"
                className="text-neutral-400 transition hover:text-white"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="text-neutral-400 transition hover:text-white"
              >
                Servicios
              </a>

              <a
                href="#taller"
                className="text-neutral-400 transition hover:text-white"
              >
                Taller
              </a>

              <a
                href="#galeria"
                className="text-neutral-400 transition hover:text-white"
              >
                Galería
              </a>

              <a
                href="#contacto"
                className="text-neutral-400 transition hover:text-white"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Contacto
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+34658782535"
                className="group flex items-center gap-3 text-neutral-400 transition hover:text-white"
              >
                <Phone
                  size={19}
                  className="shrink-0 text-red-500"
                />

                <span>658 782 535</span>
              </a>

              <a
                href="https://wa.me/34658782535"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neutral-400 transition hover:text-white"
              >
                <FaWhatsapp
                  size={20}
                  className="shrink-0 text-red-500"
                />

                <span>WhatsApp</span>
              </a>

              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-red-500"
                />

                <span>
                  Talavera la Real
                  <br />
                  Badajoz
                </span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Redes sociales
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-neutral-500">
              Sigue la actividad de MARAKAMOTO.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              {/* Facebook activo */}
              <a
                href="https://www.facebook.com/pedro.apariciogarcia.."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-red-600 hover:bg-red-600"
              >
                <FaFacebookF size={18} />
              </a>

              {/* Redes todavía no activas */}
              <span
                title="Instagram próximamente"
                className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-neutral-600"
              >
                <FaInstagram size={19} />
              </span>

              <span
                title="YouTube próximamente"
                className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-neutral-600"
              >
                <FaYoutube size={20} />
              </span>

              <span
                title="TikTok próximamente"
                className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-neutral-600"
              >
                <FaTiktok size={18} />
              </span>

            </div>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} MARAKAMOTO. Todos los derechos
            reservados.
          </p>

          <p>
            Taller de motos · Talavera la Real
          </p>

        </div>
      </div>
    </footer>
  );
}