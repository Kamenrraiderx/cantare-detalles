import { notFound } from 'next/navigation';
import detailsData from '@/data/detailsData.json';
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from '@/components/image-carousel';
interface PageParams {
    params: {
        detail: string;
    };
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

export default async function Page({ params }: PageParams) {

    // Asegúrate de que detailsData tenga la estructura correcta
    const detailsData: Details = {
        flower_bouquet: {
            name: "Ramo de Rosas",
            images: ["/images/roses.jpg", "/images/specialDetails.jpg"],
            discount: 10,
            originalPrice: 100,
            rating: 4.5,
            reviews: 150,
            sales: 500
        },
        succulent_set: {
            name: "Colección de Suculentas",
            images: ["/images/roses.jpg", "/images/roses.jpg"],
            discount: 15,
            originalPrice: 80,
            rating: 4.7,
            reviews: 210,
            sales: 320
        }
    };

    const details: Details = detailsData; // No es necesario usar Record<string, Details>
    const detail = await params.detail;
    const detailData = details[detail];

    if (!detailData) {
        return notFound();
    }


    const discountPercentage = Math.round(
        ((detailData.originalPrice - detailData.discount) / detailData.originalPrice) * 100
    );





    return (
        <div className="  bg-background/80 backdrop-blur-sm z-50 overflow-y-auto my-20">
            <div className="container lg:mx-auto lg:px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                        {/* Left Column - Image Carousel */}
                        
                        <ImageCarousel images={detailData.images} name={detailData.name}/>

                        {/* Right Column - Product Details */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-3xl font-bold text-primary">
                                            ${detailData.discount.toFixed(2)}
                                        </span>
                                        <span className="text-lg text-muted-foreground line-through">
                                            ${detailData.discount.toFixed(2)}
                                        </span>
                                        <Badge variant="destructive" className="ml-2">
                                            -{discountPercentage}% dto.
                                        </Badge>
                                    </div>
                                    <h1 className="text-xl font-semibold">{detailData.name}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon">
                                        <Share2 className="h-5 w-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Heart className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(detailData.rating)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {detailData.rating} ({detailData.reviews} valoraciones)
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        | {detailData.sales} vendidos
                                    </span>
                                </div>

                                <div className="space-y-4">

                                    <div className="flex gap-4">
                                        <Button
                                            className="flex-1"
                                            variant="outline"
                                        >
                                            Agregar al carrito
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




