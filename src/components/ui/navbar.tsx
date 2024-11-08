'use client'

import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar({ cartItems = 3 }: { cartItems?: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">CANTARE</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Crea tu ramo</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Detalles especiales</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Conoceme</a>
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Crea tu ramo</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Detalles especiales</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Conoceme</a>
            <div className="flex items-center px-3 py-2">
              <ShoppingCart className="h-6 w-6 text-gray-700 mr-2" />
              <span className="text-gray-700">Cart ({cartItems})</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}