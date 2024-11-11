'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import detailJSONData from '@/data/detailsData.json'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getJsonCookie } from '@/utils/jsonCookie.utils'

interface CartItem {
  discount:number
  name: string
  originalPrice: number
  rating:number
  reviews:number
  quantity: number
  images: string[]
  sales:number
}

interface Detail {
  name: string;
  images: string[];  // Arreglo de imágenes de tipo string
  discount: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  sales: number;
}

interface Details {
  [key: string]: Detail;
}



// Simula la obtención de datos del carrito desde una cookie
const getCartFromCookie = (): CartItem[] => {
  const detail = getJsonCookie('detail') as string[]
  console.log(detail)

  const detailsData: Details =  detailJSONData

  return detail?.map((key)=>{return {quantity: 1,...detailsData[key]}})
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setCartItems(getCartFromCookie()||[])
  }, [])

  const updateQuantity = (name: string, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.name === name ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0))
  }

  const removeItem = (name: string) => {
    setCartItems(cartItems.filter(item => item.name !== name))

  }

  const total = cartItems?.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0) || 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Pedido enviado:', { items: cartItems, name, phone, total })
    // Aquí iría la lógica para enviar el pedido al servidor
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío</p>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Resumen del Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.name} className="flex items-center space-x-4 py-2 border-b">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">L{item.originalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.name)}
                    aria-label="Eliminar item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold">L{total.toFixed(2)}</span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Número de Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={cartItems.length === 0 || !name || !phone}
                >
                  Enviar Pedido
                </Button>
              </form>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}