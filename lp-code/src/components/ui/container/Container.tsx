import type { ReactNode } from "react"
import { cn } from "../../../lib/utils/cn"
import { containerVariants } from "./container.variants"

type Props = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: Props) {
  return (
    <div className={cn(containerVariants(), className)}>
      {children}
    </div>
  )
}