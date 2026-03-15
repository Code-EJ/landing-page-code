import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LaptopSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const laptopRef = React.useRef<HTMLDivElement>(null);
  const screenRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Timeline com Pin e Scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500",
          pin: true,
          scrub: 1, //unidade medida segundo
        },
      });

      tl.to(laptopRef.current, {
        scale: 1.5,
        y: 50,
        duration: 1,
      })
        .to(
          screenRef.current,
          {
            rotateX: 0,
            backgroundColor: "#3b82f6",
            duration: 1.5,
          },
          "-=0.5",
        )
        .to(".laptop-text", {
          opacity: 1,
          y: -20,
          stagger: 0.2,
        });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="text-center mb-10">
        <h2 className="laptop-text opacity-0 text-4xl font-bold text-white">
          Performance de Elite
        </h2>
        <p className="laptop-text opacity-0 text-gray-400">
          Sente o poder do hardware sob o teu comando.
        </p>
      </div>

      {/* REPRESENTAÇÃO DO LAPTOP */}
      <div
        ref={laptopRef}
        className="relative w-[300px] h-[200px] [perspective:1000px] bg-red-500 text-white p-10"
      >
        {/* parte de cima da trela */}
        <div
          ref={screenRef}
          className="w-full h-full bg-gray-800 border-4 border-gray-700 rounded-t-lg origin-bottom"
          style={{ transform: "rotateX(-90deg)" }}
        >
          <div className="flex items-center justify-center h-full text-white font-mono text-[10px]">
            System Booting...
          </div>
        </div>

        {/* parte de baixo tela */}
        <div className="w-[340px] h-[15px] bg-gray-600 absolute -bottom-2 -left-[20px] rounded-b-lg shadow-2xl"></div>
      </div>
    </div>
  );
};

export default LaptopSection;
