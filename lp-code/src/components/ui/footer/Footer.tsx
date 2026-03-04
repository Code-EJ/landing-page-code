import { cn } from "../../../lib/utils/cn"

type Props = {
  className?: string
}

export function Footer({ className }: Props) {
  return (
    <footer
      className={cn(
        "border-t bg-white py-10",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">Produto</h4>
          <ul className="space-y-1 text-sm">
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Empresa</h4>
          <ul className="space-y-1 text-sm">
            <li>Sobre</li>
            <li>Carreira</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <p className="text-sm text-gray-600">
            contato@email.com
          </p>
        </div>
      </div>
    </footer>
  )
}