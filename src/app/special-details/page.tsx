'use client'
import detailJSONData from '@/data/detailsData.json'
import ItemCard from "@/components/item";
import Title from "@/components/title";
import FloralPagination from "@/components/ui/floral-pagination";
import { useState } from "react";

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

export default function SpecialDetailsPage() {
    const detailsData: Details = detailJSONData
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const keys = Object.keys(detailsData)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }
    return (
        <div className="my-20">
            <Title title="Detalles Especiales" />
            <div className="lg:px-24 grid gap-5 justify-items-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {keys.map((key, index) =>
                    <div className="w-4/5" key={index}>
                        <ItemCard imageUrl="/images/homeImage.jpg" price={detailsData[key].originalPrice} title={detailsData[key].name} name={key} />
                    </div>

                )}
            </div>



            <div className="flex justify-center w-full items-center mt-20">
                <FloralPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}