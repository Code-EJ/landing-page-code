/** @vitest-environment jsdom */
import { describe, it, expect, vi } from "vitest";

vi.mock("gsap", () => {
  return {
    default: {
      from: vi.fn(),
      fromTo: vi.fn(),
      timeline: vi.fn(() => ({
        from: vi.fn(),
        fromTo: vi.fn(),
      })),
      registerPlugin: vi.fn(),
    },
  };
});

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {},
}));

vi.mock("@gsap/react", () => ({
  useGSAP: (cb: Function) => cb(),
}));

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import {
  useScrollTrigger,
  useStaggerScroll,
  useScrollTimeline,
  useScrollPin,
} from "./scrollHooks";



const TestComponent = () => {
  const ref = useScrollTrigger({ opacity: 0 });

  return <div ref={ref}>Test</div>;
};

describe("useScrollTrigger", () => {
  /**
   * Deve renderizar o componente sem erros e aplicar o ref.
   */
  it("renderiza sem erros", () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText("Test")).toBeInTheDocument();
  });
});





const StaggerComponent = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useStaggerScroll(
    containerRef,
    ".item",
    { opacity: 0, y: 50 }, // fromVars
    { opacity: 1, y: 0, stagger: 0.15 }, // toVars
    {}
  );

  return (
    <div ref={containerRef}>
      <div className="item">1</div>
      <div className="item">2</div>
    </div>
  );
};

describe("useStaggerScroll", () => {
  /**
   * Deve renderizar múltiplos elementos dentro do container.
   */
  it("renderiza elementos corretamente", () => {
    const { getByText } = render(<StaggerComponent />);

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});




const TimelineComponent = () => {
  const { containerRef } = useScrollTimeline();

  return <div ref={containerRef}>Timeline</div>;
};

describe("useScrollTimeline", () => {
  /**
   * Deve criar uma timeline e retornar o ref corretamente.
   */
  it("cria timeline e renderiza componente", () => {
    const { getByText } = render(<TimelineComponent />);

    expect(getByText("Timeline")).toBeInTheDocument();
  });
});




const PinComponent = () => {
  const { sectionRef } = useScrollPin();

  return <div ref={sectionRef}>Pin</div>;
};

describe("useScrollPin", () => {
  /**
   * Deve renderizar a seção com pin sem erros.
   */
  it("renderiza corretamente", () => {
    const { getByText } = render(<PinComponent />);

    expect(getByText("Pin")).toBeInTheDocument();
  });
});

