import { forwardRef } from "react"
import type { ButtonHTMLAttributes } from "react"
import type { VariantProps } from "class-variance-authority"
import { buttonVariants } from "./button.variants"
import { cn } from "../../../lib/utils/cn"

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"