'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

export  function ParallaxCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && backgroundRef.current) {
        const { top, height } = carouselRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Check if the carousel is in the viewport
        if (top < windowHeight && top + height > 0) {
          const scrollPosition = window.scrollY - top
          const parallaxEffect = scrollPosition * 0.5 // Adjust this value to control the parallax intensity

          backgroundRef.current.style.transform = `translateY(${parallaxEffect}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={carouselRef} className="relative h-[80vh] overflow-hidden mb-14">
      <div 
        ref={backgroundRef} 
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/homeImage.jpg"
          alt="Fondo del carrusel"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-md p-6 text-white">
          <h2 className="text-4xl font-bold mb-4 text-center">CANTARE</h2>
          <h2 className="text-4xl font-bold mb-4 text-center">detalles</h2>
        </div>
      </div>
    </div>
  )
}