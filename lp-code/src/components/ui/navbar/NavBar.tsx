import { cn } from "../../../lib/cn"

type Props = {
  className?: string
}

/**
 * Navbar Component
 *
 * Estrutura de navegação principal.
 * Layout interno com flex responsivo.
 */
export function Navbar({ className }: Props) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full px-2 text-white",
        className
      )}
    >
      <div className="mx-auto px-4 py-4 flex flex-wrap gap-4 md:gap-6 justify-center items-center max-w-[900px] rounded-b-[40px]
      bg-gradient-to-r from-[#FB00FF]/30 via-purple/10 to-[#5E00D2]/30
      backdrop-blur-sm backdrop-saturate-150
      border-b border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.2)]
      before:absolute before:inset-0 before:rounded-b-[40px] before:bg-white/10 before:opacity-30 before:pointer-events-none
      relative overflow-hidden text-sm sm:text-base">
        <a href="#home" className="whitespace-nowrap">Início</a>
        <a href="#about" className="whitespace-nowrap">Sobre Nós</a>
        <a href="#services" className="whitespace-nowrap">Nossos Serviços</a>
        <a href="#contact" className="whitespace-nowrap">Contato</a>
      </div>
    </nav>
  )
}