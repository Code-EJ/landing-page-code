import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


// hook animação simples p um elemento

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



//hook animacao stagger p multiplos elementos
export const useStaggerScroll = (
  selector: string,
  animationVars: gsap.TweenVars,
  staggerAmount: number = 0.15,
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
          },
        });
      }
    },
    { scope: containerRef },
  );

  return containerRef;
};


//  Hook Timeline com ScrollTrigger
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



//Hook de Pin e Scrub
export const useScrollPin = (scrubValue: number | boolean = 1) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !triggerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000",
          pin: sectionRef.current,
          scrub: scrubValue,
          markers: false,
        },
      });

      (sectionRef as any).timeline = tl;
    },
    { scope: sectionRef },
  );

  return { sectionRef, triggerRef };
};
