'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ItemCardProps {
  imageUrl: string
  title: string
  price: number
}

export default function ItemCard({ imageUrl, title, price }: ItemCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-300 ease-in-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-xl font-bold text-blue-600">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}