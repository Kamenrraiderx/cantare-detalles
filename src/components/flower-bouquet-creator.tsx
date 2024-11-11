'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { setJsonCookie } from '@/utils/jsonCookie.utils'
import CartNotificationModal from './cart-notification-modal'

type Selection = {
    size?: { name: string; price: number };
    flowers?: { name: string; price: number };
    arrangement?: { name: string; price: number };
    extras?: { name: string; price: number }[];
}

const sizes = [
    { name: "Pequeño", price: 215, description: "1 Rosa eterna y follaje artificial", image: '/images/littleBouquet.jpg' },
    { name: "Mediano", price: 480, description: "5 Rosas eternas y follaje Artificial", image: '/images/mediumBouquet.jpg' },
    { name: "Grande", price: 1285, description: "30 Rosas Eternas", image: '/images/bigBouquet.jpg' },
]

const flowers = [
    { name: "Tulipanes", price: 0, image: '/images/toulipanes.jpg' },
    { name: "Girasoles", price: 0, image: '/images/sunflower.jpg' },
    { name: "Rosas", price: 0, image: '/images/roses.jpg' },
]

const arrangements = [
    { name: "Bouquet", price: 0, image: '/images/bouquet.jpg' },
    { name: "Arreglos en jarrón", price: 0, image: '/images/vaseArrangements.jpg' },
    { name: "Ramos de Mariposa", price: 0, image: '/images/butterflyBouquet.jpg' },
    { name: "Cajitas de Madera", price: 0, image: '/images/woodenBoxBouquet.jpg' },
]

const extras = [
    { name: "Mariposas", price: 10 },
    { name: "Personalización con sticker", price: 40 },
    { name: "Corona", price: 160 },
    { name: "Peluche pequeño", price: 175 },
    { name: "Marco de fotos", price: 210 },
]

export default function FlowerBouquetCreator() {
    const [step, setStep] = useState(1)
    const [selection, setSelection] = useState<Selection>({})
    
    
    const onSubmit = async () => {
        // try {
        //     const response = await fetch('/api/email', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({

        //             receipients: [
        //                 {
        //                     name: 'Prueba',
        //                     address: 'alejandro.reyes95@yahoo.com',
        //                 },
        //             ],


        //         }),
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const result = await response.json();
        // } catch (error) {
        //     console.error('Se produjo un error:', error);
        // }

        setJsonCookie('persolanizedBouquet',selection)

    };

    

    const handleSizeSelect = (size: typeof sizes[0]) => {
        setSelection({ ...selection, size })
        setStep(2)
    }

    const handleFlowerSelect = (flower: typeof flowers[0]) => {
        setSelection({ ...selection, flowers: flower })
        setStep(3)
    }

    const handleArrangementSelect = (arrangement: typeof arrangements[0]) => {
        setSelection({ ...selection, arrangement })
        setStep(4)
    }

    const handleExtraSelect = (extra: typeof extras[0]) => {
        const currentExtras = selection.extras || []
        const updatedExtras = currentExtras.some(e => e.name === extra.name)
            ? currentExtras.filter(e => e.name !== extra.name)
            : [...currentExtras, extra]
        setSelection({ ...selection, extras: updatedExtras })
    }

    const getTotalPrice = () => {
        const sizePrice = selection.size?.price || 0
        const extrasPrice = selection.extras?.reduce((sum, extra) => sum + extra.price, 0) || 0
        return sizePrice + extrasPrice
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Paso 1: Elige el tamaño del ramo</CardTitle>
                            <CardDescription>Selecciona el tamaño que prefieras para tu ramo</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {sizes.map((size) => (
                                    <div key={size.name} className="flex justify-center">
                                        <RadioGroupItem value={size.name} id={size.name} className="peer sr-only" />
                                        <Label
                                            htmlFor={size.name}
                                            className="flex relative flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <div className='w-full h-40'>
                                                <Image
                                                    src={`${size.image}`}
                                                    alt={size.name}
                                                    fill
                                                    className="mb-3 object-cover" // object-cover asegura que se mantenga el aspecto de la imagen
                                                />

                                            </div>
                                            <div className='h-280'>
                                                <span className="text-sm font-medium">{size.name}</span>
                                                <span className="text-sm text-muted-foreground">{size.description}</span>
                                                <span className="mt-2 font-bold">L. {size.price.toFixed(2)}</span>
                                            </div>
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>

                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleSizeSelect(sizes[0])} className="w-full">Continuar</Button>
                        </CardFooter>
                    </Card>
                )
            case 2:
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Paso 2: Selecciona tus flores</CardTitle>
                            <CardDescription>Elige el tipo de flores para tu ramo</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {flowers.map((flower) => (
                                    <div key={flower.name}>
                                        <RadioGroupItem value={flower.name} id={flower.name} className="peer sr-only" />
                                        <Label
                                            htmlFor={flower.name}
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <Image
                                                src={`${flower.image}`}
                                                alt={flower.name}
                                                width={100}
                                                height={100}
                                                className="mb-3"
                                            />
                                            <span className="text-sm font-medium">{flower.name}</span>
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleFlowerSelect(flowers[0])} className="w-full">Continuar</Button>
                        </CardFooter>
                    </Card>
                )
            case 3:
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Paso 3: Elige tu arreglo</CardTitle>
                            <CardDescription>Selecciona el tipo de arreglo para tus flores</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {arrangements.map((arrangement) => (
                                    <div key={arrangement.name}>
                                        <RadioGroupItem value={arrangement.name} id={arrangement.name} className="peer sr-only" />
                                        <Label
                                            htmlFor={arrangement.name}
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <Image
                                                src={`${arrangement.image}`}
                                                alt={arrangement.name}
                                                width={100}
                                                height={100}
                                                className="mb-3"
                                            />
                                            <span className="text-sm font-medium">{arrangement.name}</span>
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleArrangementSelect(arrangements[0])} className="w-full">Continuar</Button>
                        </CardFooter>
                    </Card>
                )
            case 4:
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Paso 4: Añade tus extras</CardTitle>
                            <CardDescription>Selecciona los extras que deseas añadir a tu ramo</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {extras.map((extra) => (
                                    <Label
                                        key={extra.name}
                                        htmlFor={extra.name}
                                        className="flex items-center space-x-3 space-y-0"
                                    >
                                        <input
                                            type="checkbox"
                                            id={extra.name}
                                            className="form-checkbox h-5 w-5"
                                            onChange={() => handleExtraSelect(extra)}
                                        />
                                        <span>{extra.name} - L. {extra.price.toFixed(2)}</span>
                                    </Label>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => setStep(5)} className="w-full">Ver resumen</Button>
                        </CardFooter>
                    </Card>
                )
            case 5:
                return (
                    <Card>
                        <CardHeader>
                            <CardTitle>Resumen de tu ramo</CardTitle>
                            <CardDescription>Revisa los detalles de tu selección</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p><strong>Tamaño:</strong> {selection.size?.name} - L. {selection.size?.price.toFixed(2)}</p>
                                <p><strong>Flores:</strong> {selection.flowers?.name}</p>
                                <p><strong>Arreglo:</strong> {selection.arrangement?.name}</p>
                                <p><strong>Extras:</strong></p>
                                <ul className="list-disc pl-5">
                                    {selection.extras?.map((extra) => (
                                        <li key={extra.name}>{extra.name} - L. {extra.price.toFixed(2)}</li>
                                    ))}
                                </ul>
                                <p className="text-xl font-bold">Total: L. {getTotalPrice().toFixed(2)}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <CartNotificationModal product={selection} orderType='personalizedBouquet'/>
                        </CardFooter>
                    </Card>
                )
            default:
                return null
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Crea tu ramo personalizado</h1>
            {renderStep()}
        </div>
    )
}