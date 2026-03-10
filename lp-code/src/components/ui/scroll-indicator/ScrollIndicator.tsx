import { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "../../../lib/cn"

type ScrollIndicatorProps = {
  className?: string
  targetId?: string
  clickable?: boolean
}
/**
 * ScrollIndicator Component
 *
 * Indicador visual animado de rolagem.
 *
 * Features:
 * - Animação contínua via Framer Motion
 * - Scroll suave opcional para targetId
 * - Suporte a forwardRef
 * - Pode ser configurado como clicável
 *
 * Otimização: will-change aplicado para melhorar performance
 * de animações transform.
 */
export const ScrollIndicator = forwardRef<HTMLDivElement, ScrollIndicatorProps>(
  ({ className, targetId, clickable = false }, ref) => {
    // Realiza scroll suave até o elemento alvo, se definido.
    const handleClick = () => {
      if (!targetId) return

      const element = document.getElementById(targetId)
      if (!element) return

      element.scrollIntoView({ behavior: "smooth" })
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2",
          clickable && "cursor-pointer",
          className
        )}
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        onClick={clickable ? handleClick : undefined}
      >
        <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    )
  }
)

ScrollIndicator.displayName = "ScrollIndicator"