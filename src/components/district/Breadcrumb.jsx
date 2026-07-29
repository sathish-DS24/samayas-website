import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li
              key={item.label}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 mx-1 flex-shrink-0" />
              )}
              {isLast ? (
                <span
                  className="text-primary-600 font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">
                    {index === 0 && <Home className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />}
                    {item.label}
                  </span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
