import { cva } from "class-variance-authority"

export const scrollIndicatorVariants = cva(
  "absolute left-1/2 -translate-x-1/2 select-none",
  {
    variants: {
      position: {
        default: "bottom-6 md:bottom-8 lg:bottom-10",
        fixed: "fixed bottom-6 md:bottom-8",
      },
      size: {
        sm: "scale-75",
        md: "scale-100",
        lg: "scale-125",
      },
      visibility: {
        always: "",
        desktopOnly: "hidden md:block",
        mobileOnly: "md:hidden",
      },
    },
    defaultVariants: {
      position: "default",
      size: "md",
      visibility: "always",
    },
  }
)