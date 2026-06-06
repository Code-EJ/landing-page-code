import type { HeroLogoProps } from "../../types/hero.type.ts";

export default function HeroLogo({ src, alt, direction = "left", duration = 1, delay = 0 }: HeroLogoProps) {
  // Guardamos classes de posicionamento inicial mockadas para o GSAP mover depois
  return (
    <div className="hero-logo-container absolute inset-0 z-10 bg-black flex flex-col items-center justify-center text-center p-8 mix-blend-multiply select-none"
        data-animation-direction={direction}//Usando variaveis de forma simbolica
        data-animation-duration={duration}
        data-animation-delay={delay}
    >
      {/* A imagem de textura/retângulo que você quer que fique em volta do texto */}
      <img 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <h1 className="relative z-10 text-6xl md:text-9xl font-black text-white tracking-tighter uppercase px-4">
        TEXTO VAZADO
      </h1>
    </div>
  );
}
