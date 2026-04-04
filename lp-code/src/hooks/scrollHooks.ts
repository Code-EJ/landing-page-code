import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


/**
 * Hook para animação simples de um único elemento baseada em ScrollTrigger
 * @param animationVars Configurações de animação do GSAP (ex: opacity, x, y)
 * @param scrollVars Configurações opcionais para sobrescrever o comportamento do ScrollTrigger. (ex: start, end)
 * @returns Ref a ser aplicada no elemento HTML
 */
export const useScrollTrigger = (
  animationVars: gsap.TweenVars,
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      gsap.from(elementRef.current, {
        ...animationVars,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...scrollVars,
        },
      });
    },
    { scope: elementRef },
  );

  return elementRef;
};



/**
 * Hook para animação em cascata (stagger) de múltiplos elementos filhos
 * @param selector Seletor CSS para os itens filhos (ex: ".card")
 * @param animationVars Configurações de animação para cada item
 * @param staggerAmount Delay entre cada item (default: 0.15)
 * @param scrollVars Configurações opcionais para o ScrollTrigger
 * @returns Ref a ser aplicada no container pai
 */
export const useStaggerScroll = (
  selector: string,
  animationVars: gsap.TweenVars,
  staggerAmount: number = 0.15,
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const targets = containerRef.current.querySelectorAll(selector);

      if (targets.length > 0) {
        gsap.from(targets, {
          ...animationVars,
          stagger: staggerAmount,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            ...scrollVars,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return containerRef;
};


/**
 * Hook para criação de uma timeline GSAP controlada por scroll.
 * Permite orquestrar sequências complexas de animação.
 * @param scrollVars - (Opcional) Configurações do ScrollTrigger
 * @returns containerRef e timelineRef (tl)
 */
export const useScrollTimeline = (
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          ...scrollVars,
        },
      });
    },
    { scope: containerRef },
  );

  return { containerRef, tl };
};



/**
 * Hook para fixar (pin) uma seção na tela e animar conforme o progresso do scroll.
 * @param scrubValue Sensibilidade do acompanhamento do scroll (padrão 1).
 * @param scrollVars Configurações adicionais de ScrollTrigger.
 * @returns Objeto com as refs e a timeline gerada.
 */
export const useScrollPin = (
  scrubValue: number | boolean = 1,
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: scrubValue,
          markers: false,
          ...scrollVars,
        },
      });
    },
    { scope: sectionRef },
  );

  return { sectionRef, triggerRef, tl };
};
