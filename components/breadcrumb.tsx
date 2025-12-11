import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronRight size={16} className="text-gray-400" />}
            {item.href ? (
              <a href={item.href} className="text-teal-600 hover:text-teal-700">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
