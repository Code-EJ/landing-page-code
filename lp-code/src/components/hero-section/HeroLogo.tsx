import { forwardRef } from "react";
import type { HeroLogoProps } from "../../types/hero.type";

const HeroLogo = forwardRef<HTMLDivElement, HeroLogoProps>(
  ({ src, alt, cutoutSrc }, ref) => {
    return (
      <div
        ref={ref}
        className=" absolute inset-0 z-10 flex items-center justify-center overflow-hidden select-none mix-blend-multiply will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          className=" absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* texto vazado */}
        <h1
          className=" relative z-20 bg-cover bg-center bg-clip-text text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight font-mono px-4 text-center "
          style={{ backgroundImage: `url(${cutoutSrc})` }}
        >
          TEXTO
        </h1>
      </div>
    );
  }
);

export default HeroLogo;