import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { HeroRootProps } from "../../types/hero.type.ts";
import HeroImage from "./HeroImage";
import HeroLogo from "./HeroLogo";
import fotoFundo from '../../assets/images/fundoHeroSection.png';
import zeroum from '../../assets/images/ZeroUmHeroSection.png';
import cadeira from '../../assets/images/cadeira1.webp';

export default function HeroRoot({ onAnimationComplete, className = "" }: HeroRootProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Procura o container do logo pelas classes que colocamos
    const logoContainer = containerRef.current?.querySelector(".hero-logo-container");
    const bgImage = containerRef.current?.querySelector("img");

    if (!logoContainer || !bgImage) return;

    // propriedades configuradas no componente (ou definimos padrões)
    const direction = logoContainer.getAttribute("data-direction") || "bottom";
    const durationProp = Number(logoContainer.getAttribute("data-duration")) || 1.2;

    // onde animação começa baseado na prop
    const startPositions: Record<string, gsap.TweenVars> = {
    bottom: { y: "100%", x: "0%" },
    top: { y: "-100%", x: "0%" },
    left: { x: "-100%", y: "0%" },
    right: { x: "100%", y: "0%" },
    };

    // posição inicial do logo e do fundo
    gsap.set(logoContainer, { ...startPositions[direction], opacity: 0 });
    gsap.set(bgImage, { scale: 1.2 });

    // Timeline Principal (Animation Controller)
    const tl = gsap.timeline({
      onComplete: () => {
        if (onAnimationComplete) onAnimationComplete();
      }
    });

    // Sequência animações
    tl.to(bgImage, {
      scale: 1,
      duration: 2,
      ease: "power2.out"
    })
    .to(logoContainer, {
      x: "0%",
      y: "0%",
      opacity: 1,
      duration: durationProp,
      ease: "power4.out"
    }, "-=1") // Começa 1 segundo antes do fundo terminar (overlap)
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 1.5,
      ease: "power2.inOut"
    });

    // Cleanup para evitar vazamento de memória se o componente desmontar no meio
    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  return (
    <section 
      ref={containerRef}
      className={`fixed inset-0 w-full h-screen bg-neutral-950 text-white overflow-hidden z-50 ${className}`}
    >
      <button 
        onClick={onAnimationComplete}
        className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-mono py-2 px-4 rounded-full border border-white/20 transition-all uppercase tracking-wider"
      >
        Skip Intro ➔
      </button>

      <HeroImage 
        src={fotoFundo} 
        alt="Foto de Cadeira"
        pulseEffect={false} // Desativado temporariamente para não brigar com a timeline do GSAP
      />
      
      <div className="flex min-h-screen h-full w-full items-center justify-center">
        <HeroLogo direction="bottom" duration={1.2} src={zeroum} alt="Foto de Zero Um" />
      </div>
    </section>
  );
}
