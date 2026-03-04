import type { VariantProps } from "class-variance-authority"
import { fileItemVariants } from "./fileItem.variants"
import { cn } from "../../../lib/utils/cn"

export type FileItemProps =
  VariantProps<typeof fileItemVariants> & {
    name: string
    className?: string
  }

export function FileItem({
  name,
  type,
  className
}: FileItemProps) {
  return (
    <div className={cn(fileItemVariants({ type }), className)}>
      <span>{type === "folder" ? "📁" : "📄"}</span>
      {name}
    </div>
  )
}