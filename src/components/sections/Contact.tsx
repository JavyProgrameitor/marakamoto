import Image from "next/image";
import {
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";


export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-black py-24 text-white lg:py-32"
    >
      {/* Cabecera */}
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Contacto
        </p>

        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
          Hablemos de
          <span className="block text-red-500">tu moto</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          Si necesitas una revisión, tienes alguna consulta o quieres pedir
          cita, contacta directamente con MARAKAMOTO.
        </p>
      </div>

      {/* Imagen */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/contacto-marakamoto.png"
          alt="MARAKAMOTO - Taller de motos en Talavera la Real"
          width={2048}
          height={1024}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      {/* Contacto */}
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">

          {/* Teléfono */}
          <a
            href="tel:+34658782535"
            className="group flex items-center gap-4 border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600/50 hover:bg-neutral-900"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600">
              <Phone size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Teléfono
              </p>

              <p className="mt-1 text-lg font-bold transition group-hover:text-red-500">
                658 782 535
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/34658782535"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600/50 hover:bg-neutral-900"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600">
              <FaWhatsapp size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                WhatsApp
              </p>

              <p className="mt-1 text-lg font-bold transition group-hover:text-red-500">
                Enviar mensaje
              </p>
            </div>
          </a>

          {/* Ubicación */}
          <div className="flex items-center gap-4 border border-white/10 bg-neutral-950 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600">
              <MapPin size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Estamos en
              </p>

              <p className="mt-1 text-lg font-bold">
                Talavera la Real
              </p>

              <p className="text-sm text-neutral-400">
                Badajoz
              </p>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider">
              Síguenos
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              MARAKAMOTO en redes sociales
            </p>
          </div>

          <div className="flex items-center gap-3">

            {/* Facebook - activo */}
            <a
              href="https://www.facebook.com/pedro.apariciogarcia.."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de MARAKAMOTO"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-red-600 hover:bg-red-600"
            >
              <FaFacebookF size={20} />
            </a>

            {/* Instagram */}
            <span
              title="Instagram próximamente"
              className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-neutral-600"
            >
              <FaInstagram size={20} />
            </span>

            {/* YouTube */}
            <span
              title="YouTube próximamente"
              className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-neutral-600"
            >
              <FaYoutube size={20} />
            </span>

            {/* TikTok */}
            <span
              title="TikTok próximamente"
              className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-neutral-600"
            >
              <FaTiktok size={20} />
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}