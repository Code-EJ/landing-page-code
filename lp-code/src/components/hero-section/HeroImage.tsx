import type { HeroImageProps } from "../../types/hero.type.ts";

export default function HeroImage({ src, alt, pulseEffect = false }: HeroImageProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          pulseEffect ? "scale-105 transition-transform duration-10000 ease-out-quad" : ""
        }`}
      />
      {/* Overlay escuro para garantir contraste com o texto do Figma */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
