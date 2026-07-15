import { forwardRef } from "react";
import type { HeroLogoProps } from "../../types/hero.type";

const HeroLogo = forwardRef<HTMLDivElement, HeroLogoProps>(
  ({ src, alt }, ref) => {
    return (
      <div
        ref={ref}
        className=" absolute inset-0 z-10 flex items-center justify-center overflow-hidden select-none mix-blend-multiply will-change-transform"
      >
        {/* overlay dos numeros */}
        <img
          src={src}
          alt={alt}
          className=" absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <h1
          className=" relative z-20 mix-blend-screen text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white font-mono px-4 text-center "
        >
          TEXTO
        </h1>
        {/* <div className="hero-logo-container relative flex items-center justify-center bg-black mix-blend-screen overflow-hidden">
          <h1 className="text-9xl font-black text-white tracking-tighter uppercase">
            TEXTO
          </h1>
        </div>         */}
      </div>
    );
  }
);

export default HeroLogo;