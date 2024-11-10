'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Flower } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface FloralPaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function FloralPagination({ totalPages, currentPage, onPageChange }: FloralPaginationProps) {
  const [hoveredPage, setHoveredPage] = useState<number | null>(null)

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <Button
            key={i}
            variant={i === currentPage ? "default" : "outline"}
            size="icon"
            className={`relative w-10 h-10 ${
              i === currentPage ? 'bg-pink-100 text-pink-800' : 'hover:bg-pink-50'
            }`}
            onClick={() => onPageChange(i)}
            onMouseEnter={() => setHoveredPage(i)}
            onMouseLeave={() => setHoveredPage(null)}
          >
            {i}
            {hoveredPage === i && (
              <Flower className="absolute -top-4 -right-4 w-6 h-6 text-pink-400 animate-spin-slow" />
            )}
          </Button>
        )
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(<span key={i} className="px-2">...</span>)
      }
    }
    return pageNumbers
  }

  return (
    <nav className="flex justify-center items-center space-x-2 my-8" aria-label="Pagination">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="hover:bg-pink-50"
      >
        <span className="sr-only">Página anterior</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {renderPageNumbers()}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="hover:bg-pink-50"
      >
        <span className="sr-only">Página siguiente</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  )
}