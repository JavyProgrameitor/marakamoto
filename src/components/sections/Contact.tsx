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

import ContactCinematic from "@/components/sections/ContacCinematic";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-black py-24 text-white lg:py-32"
    >
      <ContactCinematic />


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
      </div>
    </section>
  );
}