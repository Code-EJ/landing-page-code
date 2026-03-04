import { cn } from "../../../lib/utils/cn"

type Props = {
  className?: string
}

export function Navbar({ className }: Props) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between">
        <span className="font-bold">Logo</span>
        <div className="flex gap-6 text-sm">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </nav>
  )
}