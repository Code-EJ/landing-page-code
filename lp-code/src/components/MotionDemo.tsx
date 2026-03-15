import React from "react";
import {
  useScrollTrigger,
  useStaggerScroll,
  useScrollTimeline,
} from "../hooks/scrollHooks";
import { useGSAP } from "@gsap/react";

const MotionDemo: React.FC = () => {
  // ex Simples (Fade + Slide)
  const singleRef = useScrollTrigger({ opacity: 0, x: -100, duration: 1 });

  // ex Stagger
  const staggerRef = useStaggerScroll(".card-item", {
    opacity: 0,
    y: 50,
    rotation: 5,
  });

  // ex Timeline
  const { containerRef, tl } = useScrollTimeline();

  useGSAP(
    () => {
      if (tl.current) {
        tl.current
          .from(".item-1", { opacity: 0, y: -30, duration: 0.6 })
          .from(".item-2", { width: 0, duration: 0.8 }, "-=0.2") // "-=0.2" controla pra comecar o efeito antes de terminar o anterior
          .from(".item-3", { opacity: 0, scale: 0.5, duration: 0.5 });
      }
    },
    { scope: containerRef },
  );

  return (
    <div className="p-10 space-y-[50vh] bg-slate-900 text-white">
      <section className="h-[20vh] flex items-center justify-center border-b border-slate-700">
        <h2 className="text-2xl animate-pulse">
          Faz scroll para baixo para ver a magia! ↓
        </h2>
      </section>

      {/* DEMO 1: SIMPLES */}
      <section
        ref={singleRef}
        className="p-10 bg-blue-600 rounded-xl max-w-2xl mx-auto"
      >
        <h3 className="text-3xl font-bold">Animation Simples</h3>
        <p>Eu apareci deslizando da esquerda usando o hook básico.</p>
      </section>

      {/* DEMO 2: STAGGER */}
      <section ref={staggerRef} className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Efeito Stagger (Cascata)
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="card-item p-8 bg-purple-600 rounded-lg text-center font-bold"
            >
              Card {i}
            </div>
          ))}
        </div>
      </section>

      {/* DEMO 3: TIMELINE*/}
      <section
        ref={containerRef}
        className="max-w-2xl mx-auto text-center border-t border-slate-700 pt-20"
      >
        <h3 className="item-1 text-4xl font-black mb-2">A Timeline Master</h3>
        <div
          className="item-2 h-1 bg-yellow-400 mx-auto mb-4"
          style={{ width: "200px" }}
        ></div>
        <p className="item-3 text-xl text-slate-300">
          Esta sequência foi orquestrada pelo Hook de Timeline!
        </p>
      </section>

      <footer className="h-[50vh]"></footer>
    </div>
  );
};

export default MotionDemo;
