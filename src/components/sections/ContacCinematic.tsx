
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    let ctx: gsap.Context | undefined;

    const setupAnimation = () => {
      if (ctx || !Number.isFinite(video.duration)) return;
      if (video.duration <= 0) return;

      ctx = gsap.context(() => {
        const playhead = { time: 0 };

        gsap.set(titleRef.current, {
          autoAlpha: 0,
          y: 60,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        timeline.to(
          playhead,
          {
            time: video.duration,
            duration: 10,
            ease: "none",
            onUpdate: () => {
              if (
                Math.abs(video.currentTime - playhead.time) > 0.03
              ) {
                video.currentTime = playhead.time;
              }
            },
          },
          0
        );

        timeline
          .to(
            titleRef.current,
            {
              autoAlpha: 1,
              y: 0,
              duration: 2,
            },
            2
          )
          .to(
            titleRef.current,
            {
              autoAlpha: 1,
              duration: 5,
            },
            4
          );
      }, section);
    };

    video.addEventListener("loadedmetadata", setupAnimation);

    if (video.readyState >= 1) {
      setupAnimation();
    }

    return () => {
      video.removeEventListener("loadedmetadata", setupAnimation);
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-svh overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src="/video/marakamoto-higgsfield.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      <div
        ref={titleRef}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
      >
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Contacto
        </p>

        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-8xl">
          Hablemos de
          <span className="block text-red-500">tu moto</span>
        </h2>

        <p className="mt-6 max-w-xl text-base text-neutral-200 sm:text-lg">
          Si necesitas una revisión, tienes alguna consulta o quieres
          pedir cita, contacta directamente con MARAKAMOTO.
        </p>
      </div>
    </section>
  );
}
