
import Image from "next/image"
import { cn } from "@/lib/utils"

type FeatureHighlightProps = {
  imageSrc: string
  className:string
  imageAlt: string
  title: string
  content: string
  imagePosition?: "left" | "right"
}

export default function OrderFeature({
  imageSrc,
  imageAlt,
  title,
  content,
  className,
  imagePosition
}: FeatureHighlightProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className={cn(
        "flex flex-col items-center gap-8",
        imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
      )}>
        <div className="w-full md:w-1/2">
          <div className="aspect-square relative overflow-hidden rounded-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground">{content}</p>
        </div>
      </div>
    </div>
  )
}