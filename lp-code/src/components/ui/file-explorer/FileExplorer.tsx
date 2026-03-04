import { FileItem } from "./FileItem"
/**
 * FileExplorer Component
 *
 * Dados atualmente mockados internamente.
 */
export function FileExplorer() {
  const files = [
    { name: "src", type: "folder" as const },
    { name: "components", type: "folder" as const },
    { name: "App.tsx", type: "file" as const },
    { name: "package.json", type: "file" as const }
  ]

  return (
    <div className="rounded-xl border p-4 bg-white shadow-sm">
      {files.map((file) => (
        <FileItem key={file.name} {...file} />
      ))}
    </div>
  )
}