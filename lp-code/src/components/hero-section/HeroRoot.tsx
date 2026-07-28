import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "./HeroImage";
import HeroLogo from "./HeroLogo";

import type { HeroRootProps } from "../../types/hero.type";

import ftCadeiras from "../../assets/images/cadeira1.webp";
import zeroum from "../../assets/images/ZeroUmHeroSection.png";
import ftFundo from "../../assets/images/fundoHeroSection.png";
import cinza from "../../assets/images/fundo-cinza.avif";


gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroRoot({ onAnimationComplete, className = "" }: HeroRootProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current || !logoRef.current || !textRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {

        if (context.conditions?.reduce) {
          gsap.set(imageRef.current, { scale: 1 });
          gsap.set(logoRef.current, { yPercent: 0, opacity: 1 });
          gsap.set(textRef.current, { rotateX: 0, opacity: 1 });
          onAnimationComplete?.();
          return;
        }

        // imagem de fundo com zoom leve
        gsap.set(imageRef.current, { scale: 1.15, force3D: true });
        
        // overlay de números transparentes(zeroum)
        gsap.set(logoRef.current, { yPercent: 100, opacity: 0, force3D: true });

        // texto começa deitado (90 graus) e invisível
        gsap.set(textRef.current, { 
          rotateX: 90, 
          opacity: 0, 
          transformOrigin: "50% 0%", 
          force3D: true 
        });

        // --- TIMELINE DE SCROLL ---
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%", // aumenta curso do scroll
            scrub: 1,      // sincroniza com scroll
            pin: true,
            anticipatePin: 1,
            onLeave: () => onAnimationComplete?.(),
          },
        });

        tl
          // Ajusta escala do fundo e sobe a imagem dos números 'zeroum'
          .to(imageRef.current, { scale: 1, duration: 0.25 }, 0)
          .to(logoRef.current, { yPercent: 0, opacity: 1, duration: 0.35 }, 0.1)

          // texto caindo sobre a tela com efeito de rotação 3D
          .to(
            textRef.current,
            { 
              rotateX: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out"
            },
            0.45
          )

          // pausa curta + fade out da intro para revelar a Home
          .to(
            containerRef.current, 
            { scale: 0.94, opacity: 0, duration: 0.35 }, 
            0.95
          );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      }
    );

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
    >
      <HeroImage
        ref={imageRef}
        src={ftCadeiras}
        alt="Imagem de fundo"
      />

      <HeroLogo
        ref={logoRef}
        textRef={textRef}
        src={zeroum}
        cutoutSrc={cinza}
        alt="Textura binária"
      />

    </section>
  );
}