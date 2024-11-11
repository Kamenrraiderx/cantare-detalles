'use client'
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ImageCarousel({ images, name }: { images: string[], name: string }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <div className="space-y-4">
            <div className="relative aspect-square">
                <Image
                    src={images[currentImageIndex]}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setCurrentImageIndex(prev =>
                        prev === 0 ? images.length - 1 : prev - 1
                    )}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setCurrentImageIndex(prev =>
                        prev === images.length - 1 ? 0 : prev + 1
                    )}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`relative w-20 aspect-square flex-shrink-0 rounded-md overflow-hidden border-2 
      ${currentImageIndex === index ? 'border-primary' : 'border-transparent'}`}
                        onClick={() => setCurrentImageIndex(index)}
                    >
                        <Image
                            src={image}
                            alt={`${name} - Vista ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}