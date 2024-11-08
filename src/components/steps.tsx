import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type FeatureProps = {
    title: string
    content: string
    number: number
    span?: 1 | 2 | 3
}

function Feature({ title, content, number, span = 1 }: FeatureProps) {
    const spanClass = {
        1: "col-span-1",
        2: "col-span-1 md:col-span-2",
        3: "col-span-1 md:col-span-3",
    }[span]

    return (
        <Card className={`relative ${spanClass}`}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {number}
            </div>
        </Card>
    )
}

export default function FeatureGrid() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <Feature
                    title="Paso 1: Aparta con el 50% y con 24 hrs de anticipación"
                    content="Se pide un anticipo del 50% del valor de tu pedido para realizarlo (Opción válida para Tgu)."
                    number={1}
                    span={3}
                />
                <Feature
                    title="Paso 2: Envíanos un mensaje."
                    content="Te guiaremos para que elijas la mejor opción basada en tu idea y presupuesto."
                    number={2}
                />
                <Feature
                    title="Paso 3: Brinda información de envío."
                    content="Una vez confirmado tu pedido compartenos datos de envío: Dirección, Teléfono, Nombre de quien recibe."
                    number={3}
                />
                <Feature
                    title="Paso 4: Brinda información de envío."
                    content="Una vez confirmado tu pedido compartenos datos de envío: Dirección, Teléfono, Nombre de quien recibe."
                    number={4}
                />
                <Feature
                    title="Paso 5: Liquida el día de entrega"
                    content="El dia de la entrega liquida el resto."
                    number={5}
                    span={2}
                />
                <Feature
                    title="Paso 6: Envios a nivel Nacional"
                    content="El día del envío recibirás imágenes de tu detalle."
                    number={6}
                />

            </div>
        </div>
    )
}