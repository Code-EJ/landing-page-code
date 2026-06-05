/** @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LaptopSection from "./LaptopSection";

describe("LaptopSection", () => {
  it("deve renderizar o título corretamente", () => {
    render(<LaptopSection />);
    
    expect(screen.getByText(/Performance de Elite/i)).toBeInTheDocument();
  });

  it("deve conter a mensagem de sistema pronto", () => {
    render(<LaptopSection />);
    
    expect(screen.getByText(/> SYSTEM READY/i)).toBeInTheDocument();
  });
});