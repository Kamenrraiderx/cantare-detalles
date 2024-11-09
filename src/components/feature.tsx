
'use client'

import { ForwardRefExoticComponent, RefAttributes, useState } from 'react'
import Image from 'next/image'
import { Info, LucideProps } from 'lucide-react'
import { CircleUser, Gem, SquarePen } from "lucide-react";
export function Feature({ title, image1, image2, icon }: { title: string, image1: string, image2: string, icon: "circle"|"gem"|"square" }) {
    const [isHovered, setIsHovered] = useState(false)
    const Icons = {
        "circle":CircleUser,
        "gem":Gem,
        "square":SquarePen
    }
    const Icon = Icons[icon]
    return (
        <div
            className="relative w-full mx-auto mt-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary rounded-full p-3 shadow-lg">
                <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-center pt-8 pb-4">{title}</h2>
                <div className="relative aspect-video">
                    <Image
                        src={image1}
                        alt="First summary image"
                        layout="fill"
                        objectFit="cover"
                        className={`transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <Image
                        src={image1}
                        alt="Second summary image"
                        layout="fill"
                        objectFit="cover"
                        className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} brightness-75`}
                    />
                </div>
            </div>
        </div>
    )
}