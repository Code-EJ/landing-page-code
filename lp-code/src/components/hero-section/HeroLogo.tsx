import type { HeroLogoProps } from "../../types/hero.type.ts";

export default function HeroLogo({
  src,
  alt,
  direction = "left",
  duration = 1,
  delay = 0,
}: HeroLogoProps) {
  // classes de posicionamento inicial mockadas para o GSAP mover depois
  return (
    <div
      className="hero-logo-container absolute inset-0 z-10 bg-black flex flex-col items-center justify-center text-center p-8 mix-blend-multiply select-none"
      data-animation-direction={direction} //Usando variaveis de forma simbolica
      data-animation-duration={duration}
      data-animation-delay={delay}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <h1 className="relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-mono text-white tracking-tighter uppercase px-4 break-words max-w-full">
        CODE[]
      </h1>
    </div>
  );
}
