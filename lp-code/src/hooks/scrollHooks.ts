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
export const useScrollTrigger = <T extends HTMLElement = HTMLDivElement>(
  animationVars: gsap.TweenVars,
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  const elementRef = useRef<T | null>(null);

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
      }); // gsap
    },
    { 
      scope: elementRef,
      dependencies: [animationVars, scrollVars]
    }, // useGSAP function
  ); // useGSAP

  return elementRef;
}; // hook



/**
 * Hook para animação em cascata (stagger) de múltiplos elementos filhos
 * @param containerRef Ref do container pai que engloba os itens a serem animados
 * @param selector Seletor CSS para os itens filhos (ex: ".card")
 * @param fromVars Configurações de animação inicial (ex: opacity: 0, y: 50)
 * @param toVars Configurações de animação final (ex: opacity: 1, y: 0)
 * @param scrollVars Configurações opcionais para o ScrollTrigger
 * @returns Ref a ser aplicada no container pai
 * 
 * @description Este hook é ideal para criar animações em cascata (stagger) onde múltiplos elementos filhos são animados sequencialmente à medida que entram na viewport. Ele utiliza o poder do GSAP para controlar a animação e o ScrollTrigger para ativá-la com base no scroll. O hook é flexível, permitindo personalizar tanto as animações quanto o comportamento do ScrollTrigger conforme necessário.
 * 
 * @note Mudança de from para fromTo para melhor refletir a estrutura do GSAP e evitar confusão com o hook useScrollTrigger. O fromVars define o estado inicial dos elementos, enquanto o toVars define o estado final, incluindo o valor de stagger para controlar o atraso entre as animações dos itens.
 * @note A adição
 */
export const useStaggerScroll = <T extends HTMLElement = HTMLDivElement>(
  containerRef: React.RefObject<T | null>,
  selector: string,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  useGSAP(
    () => {
      gsap.fromTo(
        selector,
        fromVars, 
        {
        ...toVars,
        stagger: toVars.stagger ?? 0.15,
        overwrite: "auto", // overwrite garante que a animação seja reiniciada corretamente ao entrar/voltar à viewport com o scroll
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          ...scrollVars,
        },
      }); // gsap
    }, // useGSAP function
    {
      scope: containerRef, 
      dependencies : [selector, fromVars, toVars, scrollVars]
    }
  );  // useGSAP
}; // hook


/**
 * Hook para criação de uma timeline GSAP controlada por scroll.
 * Permite orquestrar sequências complexas de animação.
 * @param scrollVars - (Opcional) Configurações do ScrollTrigger
 * @returns containerRef e timelineRef (tl)
 */
export const useScrollTimeline = <T extends HTMLElement = HTMLDivElement>(
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  const containerRef = useRef<T | null>(null);
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
        }, // scrollTrigger
      }); // gsap.timeline
    }, // useGSAP function
    {
      scope: containerRef,
      dependencies: [scrollVars]
    },
  ); // useGSAP

  return { containerRef, tl };
}; // hook



/**
 * Hook para fixar (pin) uma seção na tela e animar conforme o progresso do scroll.
 * @param scrubValue Sensibilidade do acompanhamento do scroll (padrão 1).
 * @param scrollVars Configurações adicionais de ScrollTrigger.
 * @returns Objeto com as refs e a timeline gerada.
 */
export const useScrollPin = <
  Section extends HTMLElement = HTMLDivElement,
  Trigger extends HTMLElement = HTMLDivElement
  >(
  scrubValue: number | boolean = 1,
  scrollVars?: Partial<ScrollTrigger.Vars>,
) => {
  const sectionRef = useRef<Section | null>(null);
  const triggerRef = useRef<Trigger | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !triggerRef.current) return;

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: scrollVars?.end ?? "+=2000",
          pin: sectionRef.current,
          scrub: scrubValue,
          markers: false,
          ...scrollVars,
        }, // scrollTrigger
      }); // gsap.timeline
    }, // useGSAP function
    {
      scope: sectionRef,
      dependencies: [scrubValue, scrollVars]
  },
  ); // useGSAP

  return { sectionRef, triggerRef, tl };
}; // hook
