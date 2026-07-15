import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { HeroRootProps } from "../../types/hero.type.ts";
import HeroImage from "./HeroImage";
import HeroLogo from "./HeroLogo";
import fotoFundo from '../../assets/images/fundoHeroSection.png';
import zeroum from '../../assets/images/ZeroUmHeroSection.png';
import cadeira from '../../assets/images/cadeira1.webp';

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
          onAnimationComplete?.();
          return;
        }

        gsap.set(imageRef.current, { scale: 1.2, force3D: true });

        gsap.set(logoRef.current, { yPercent: 100, opacity: 0, force3D: true });

        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
          onComplete() {
            onAnimationComplete?.();
          },
        });

        tl.to(imageRef.current, { scale: 1, duration: 2 })

        .to(
          logoRef.current,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
          },
          "-=1"
        )

        .to(containerRef.current, { opacity: 0, duration: .8, delay: 1.5 });

        return () => tl.kill();
      }
    );

    return () => mm.revert();

  }, {
    scope: containerRef,
  });

  return (
    <section
      ref={containerRef}
      className={` fixed inset-0 w-full h-screen overflow-hidden bg-black z-50 ${className} `}
    >

      <button
        onClick={onAnimationComplete}
        className=" absolute top-6 right-6 z-50 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-xs uppercase tracking-widest transition hover:bg-white/20"
      >
        Skip Intro →
      </button>

      <HeroImage
        ref={imageRef}
        src={fotoFundo}
        alt="Imagem de fundo"
      />

      <HeroLogo
        ref={logoRef}
        src={zeroum}
        alt="Textura binária"
      />

    </section>
  );
}