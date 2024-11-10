
'use client'

import Image from 'next/image'
import { CircleUser, Gem, SquarePen } from "lucide-react";
import Link from 'next/link';
export function Feature({ title, image1, icon  }: { title: string, image1: string, icon: "circle" | "gem" | "square" }) {
    const Icons = {
        "circle": {"icon":CircleUser,"ref":"/aboutme"},
        "gem": {"icon":Gem,"ref":"/special-details"},
        "square": {"icon":SquarePen,"ref":"/create-your-bouquet"}
    }
    const Icon = Icons[icon]
    return (
        <Link
            href={Icon.ref}
            className="relative w-full mx-auto mt-8 group"
        >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary rounded-full p-3 shadow-lg">
                <Icon.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-center pt-8 pb-4">{title}</h2>
                <div className="relative aspect-video">
                    <Image
                        src={image1}
                        alt="First summary image"
                        layout="fill"
                        objectFit="cover"
                        className={`transition-opacity duration-300 opacity-100 group-hover:opacity-0 `}
                    />
                    <Image
                        src={image1}
                        alt="Second summary image"
                        layout="fill"
                        objectFit="cover"
                        className={`transition-opacity duration-300  group-hover:opacity-100 opacity-0 brightness-75`}
                    />
                </div>
            </div>
        </Link>
    )
}