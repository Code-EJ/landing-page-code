import { cva, type VariantProps } from "class-variance-authority"

export const cardVariants = cva(
  "rounded-2xl border bg-background p-6 transition-all",
  {
    variants: {
      variant: {
        default: "border-muted",
        elevated: "shadow-lg border-transparent",
        ghost: "border-transparent bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type CardVariants = VariantProps<typeof cardVariants>