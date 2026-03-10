import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { FileExplorer } from "./FileExplorer"

describe("FileExplorer component", () => {

  /**
   * Verifica se os arquivos são renderizados
   */
  it("renders file explorer items", () => {
    render(<FileExplorer />)

    expect(screen.getByText("src")).toBeInTheDocument()
    expect(screen.getByText("components")).toBeInTheDocument()
    expect(screen.getByText("App.tsx")).toBeInTheDocument()
    expect(screen.getByText("package.json")).toBeInTheDocument()
  })

})