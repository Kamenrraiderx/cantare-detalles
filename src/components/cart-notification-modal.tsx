'use client'

import { useState } from 'react'
import { X, ShoppingCart, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { setJsonCookie } from '@/utils/jsonCookie.utils'
import Link from 'next/link'

export default function CartNotificationModal({ product,orderType }: { product: object|string,orderType:string }) {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const onSubmit = async () => {
        setJsonCookie(orderType, product)
        openModal()
    };


    return (
        <div className='w-full'>
            <Button onClick={() => onSubmit()} className="flex-1 w-full"
                variant="outline">Agregar al carrito
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <ShoppingCart className="h-6 w-6 text-green-500" />
                            Artículo agregado al carrito
                        </DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-center p-6">
                        <div className="bg-green-100 text-green-800 rounded-full p-2">
                            <Check className="h-8 w-8" />
                        </div>
                    </div>
                    <p className="text-center text-gray-600">
                        El artículo ha sido agregado exitosamente a tu carrito de compras.
                    </p>
                    <div className="mt-4 flex justify-end space-x-2">
                        <Button variant="outline" onClick={closeModal}>
                            Seguir comprando
                        </Button>
                        <Link href='/shoping-cart' onClick={closeModal}>
                            <Button onClick={closeModal}>
                                Ir al carrito
                            </Button>
                        </Link>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}