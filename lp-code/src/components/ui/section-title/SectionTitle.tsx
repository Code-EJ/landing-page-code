import { cn } from "../../../lib/utils/cn"
import { sectionTitleVariants } from "./sectionTitle.variants"

type Props = {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: Props) {
  return (
    <div className={cn(sectionTitleVariants(), className)}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}