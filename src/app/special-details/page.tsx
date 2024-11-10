'use client'
import ItemCard from "@/components/item";
import Title from "@/components/title";
import FloralPagination from "@/components/ui/floral-pagination";
import { useState } from "react";

export default function SpecialDetailsPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }
    return (
        <div className="my-20">
            <Title title="Detalles Especiales" />
            <div className="lg:px-24 grid gap-5 justify-items-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
                <div className="w-4/5">
                    <ItemCard imageUrl="/images/homeImage.jpg" price={200} title="Perritos" />
                </div>
            </div>
            <div className="flex justify-center w-full items-center mt-20">
                <FloralPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}