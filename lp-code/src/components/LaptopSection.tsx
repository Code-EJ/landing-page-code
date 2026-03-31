import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registro obrigatório dos plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * LaptopSection
 * Componente de teste para animação avançada com ScrollTrigger.
 *
 * Objetivo:
 * - Testar performance com Pin + Scrub
 * - Simular abertura de um laptop em 3D
 * - Validar fluidez de animações sincronizadas com scroll
 *
 * Recursos:
 * - Pin (fixa a seção durante scroll)
 * - Scrub (animação segue o scroll)
 * - Transformações 3D (rotateX + perspective)
 * - Responsividade básica (mobile e desktop)
 *
 * Observações:
 * - Usa useGSAP para garantir cleanup automático
 * - Inclui verificações de null para evitar erros em strict mode
 */
const LaptopSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const laptopRef = React.useRef<HTMLDivElement>(null);
  const screenRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {

      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)"
      }, (context) => {
        // Verifica a condição atual
        const isDesktop = context.conditions?.isDesktop;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=1000",
            scrub: 1,
            pin: true,
            // Adicionado para evitar flashes visuais e jump no pin
            anticipatePin: 1,
          },
        });

        // Ajuste de escala pra Mobile
        if (!isDesktop) {
          gsap.set(laptopRef.current, { scale: 0.6 });
        } else {
          gsap.set(laptopRef.current, { scale: 1 });
        }

        tl.to(screenRef.current, {
          rotateX: 0,
          ease: "power2.inOut",
        })
        .to(".laptop-text", {
          opacity: 1,
          y: isDesktop ? -20 : -10,
          stagger: 0.2,
          duration: 0.5
        }, "-=0.5");
      });

      // O useGSAP já lida com o cleanup internamente, 
      // mas o mm.revert() é bom para limpar as queries de mídia.
      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="text-center mb-10 px-4">
        <h2 className="laptop-text opacity-0 text-3xl md:text-4xl font-bold text-white translate-y-10">
          Performance de Elite
        </h2>
        <p className="laptop-text opacity-0 text-sm md:text-base text-gray-400 translate-y-10">
          Sente o poder do hardware sob o teu comando.
        </p>
      </div>

      <div 
        ref={laptopRef} 
        className="relative w-[280px] md:w-[300px] h-[180px] md:h-[200px] [perspective:1200px]" 
      >
        <div 
          ref={screenRef} 
          className="w-full h-full bg-gray-800 border-4 border-gray-700 rounded-t-lg shadow-inner"
          style={{ 
            transform: "rotateX(-95deg)", 
            transformOrigin: "bottom center", 
            backfaceVisibility: "hidden" 
          }} 
        >
          <div className="flex flex-col items-center justify-center h-full bg-blue-900/20">
             <div className="text-blue-400 font-mono text-[10px] animate-pulse">
               {">"} SYSTEM READY
             </div>
          </div>
        </div>
        
        <div className="w-[300px] md:w-[320px] h-[10px] bg-gray-700 absolute -bottom-1 -left-[10px] rounded-b-md shadow-xl border-t border-gray-500"></div>
      </div>
    </div>
  );
};

export default LaptopSection;
