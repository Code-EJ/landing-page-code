import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { HeroRootProps } from "../../types/hero.type.ts";
import HeroImage from "./HeroImage";
import HeroLogo from "./HeroLogo";
import marcela from '../../assets/images/Marcela.png';
import zeroum from '../../assets/images/ZeroUm.png';
import cadeira from '../../assets/images/cadeira1.webp';
// lp-code\src\assets\images\cadeira1.webp

export default function HeroRoot({ onAnimationComplete, className = "" }: HeroRootProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Procura o container do logo pelas classes que colocamos
    const logoContainer = containerRef.current?.querySelector(".hero-logo-container");
    const bgImage = containerRef.current?.querySelector("img");

    if (!logoContainer || !bgImage) return;

    // Pegamos as propriedades configuradas no componente (ou definimos padrões)
    const direction = logoContainer.getAttribute("data-direction") || "bottom";
    const durationProp = Number(logoContainer.getAttribute("data-duration")) || 1.2;

    // Mapeia onde a animação deve começar com base na prop
    const startPositions: Record<string, gsap.TweenVars> = {
    bottom: { y: "100%", x: "0%" },
    top: { y: "-100%", x: "0%" },
    left: { x: "-100%", y: "0%" },
    right: { x: "100%", y: "0%" },
    };

    // 1. Configura a posição inicial baseada na prop direction do componente (simulando vindo de baixo)
    // Para deixar dinâmico depois, faremos a leitura das props, mas vamos fixar 'bottom' de início:
    gsap.set(logoContainer, { ...startPositions[direction], opacity: 0 });
    gsap.set(bgImage, { scale: 1.2 });

    // 2. Cria a Timeline Principal (Animation Controller)
    const tl = gsap.timeline({
      onComplete: () => {
        // Quando toda a sequência acabar, avisa o React!
        if (onAnimationComplete) onAnimationComplete();
      }
    });

    // 3. Sequência de Animações
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
      delay: 1.5, // Dá um tempo para o usuário ler o texto antes do fade out final
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
      className={`relative w-full min-h-screen bg-neutral-950 text-white overflow-hidden ${className}`}
    >
      <button 
        onClick={onAnimationComplete}
        className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-mono py-2 px-4 rounded-full border border-white/20 transition-all uppercase tracking-wider"
      >
        Skip Intro ➔
      </button>

      <HeroImage 
        src={cadeira} 
        alt="Foto de Cadeira"
        pulseEffect={false} // Desativado temporariamente para não brigar com a timeline do GSAP
      />
      
      <div className="flex min-h-screen h-full w-full items-center justify-center">
        <HeroLogo direction="bottom" duration={1.2} src={zeroum} alt="Foto de Zero Um" />
      </div>
    </section>
  );
}