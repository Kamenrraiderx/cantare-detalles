'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, Gift } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutMeSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden mt-16">
            <Image
                src="/images/homeImage.jpg"
                alt="Fondo decorativo"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

            <Card className="max-w-4xl mx-auto z-20 bg-opacity-80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className={`text-5xl md:text-7xl font-bold text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        ¡Conóceme!
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className={`text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Hola, hola! Gracias por llegar hasta el final de este hermoso catálogo, lo hice especialmente para ti.
                    </p>
                    <p className={`text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Te preguntaras ¿Quien soy? Mi nombre es Elizabeth y soy la persona detrás de cada mensaje.
                    </p>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-center">
                            <Heart className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                            <h3 className="text-2xl font-semibold mb-2">Pasión</h3>
                            <p>Amo ser tu cómplice y formar parte de esos momentos únicos e irrepetibles.</p>
                        </div>
                        <div className="text-center">
                            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                            <h3 className="text-2xl font-semibold mb-2">Comunicación</h3>
                            <p>Escríbeme, chatea conmigo y descubramos juntos el detalle perfecto para él o ella.</p>
                        </div>
                        <div className="text-center">
                            <Gift className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                            <h3 className="text-2xl font-semibold mb-2">Detalles</h3>
                            <p>Cada detalle es elaborado con muchísimo cariño para ti y tu persona favorita.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
                <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-current text-white opacity-25"></path>
                </svg>
            </div>
        </section>
    )
}