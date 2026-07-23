import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { HeroRootProps } from "../../types/hero.type.ts";
import HeroImage from "./HeroImage";
import HeroLogo from "./HeroLogo";
import fotoFundo from '../../assets/images/fundoHeroSection.png';
import zeroum from '../../assets/images/ZeroUmHeroSection.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroRoot({ onAnimationComplete, className = "" }: HeroRootProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    if ( !containerRef.current || !imageRef.current || !logoRef.current) { return; }
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
          onAnimationComplete?.();
          return;
        }

        gsap.set(imageRef.current, { scale: 1.15, force3D: true });
        gsap.set(logoRef.current, { yPercent: 100, opacity: 0, force3D: true });

        // timeline sem autoplay
        // animação controlada pelo scroll(scrub)
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onLeave: () => onAnimationComplete?.(),
          },
        });

        tl.to(imageRef.current, { scale: 1, duration: 0.2 }, 0)
          .to(logoRef.current, { yPercent: 0, opacity: 1, duration: 0.45 }, 0.15)
          .to(containerRef.current, { scale: 0.94, opacity: 0.85, duration: 0.35 }, 0.65);
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      }
    );

    return () => mm.revert();

  }, {
    scope: containerRef,
  });

  return (
    <section
      ref={containerRef}
      className={` relative w-full h-screen overflow-hidden bg-black ${className} `}
    >

      <HeroImage
        ref={imageRef}
        src={fotoFundo}
        alt="Imagem de fundo"
      />

      <HeroLogo
        ref={logoRef}
        src={zeroum}
        cutoutSrc={fotoFundo}
        alt="Textura binária"
      />

    </section>
  );
}
