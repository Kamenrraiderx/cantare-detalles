import { Feature } from "@/components/feature";
import OrderFeature from "@/components/order-feature";
import { ParallaxCarousel } from "@/components/parallax-carousel";
import FeatureGrid from "@/components/steps";
import Title from "@/components/title";

export default function Home() {
  return (
    <div>
      <div className="px-60">
        <ParallaxCarousel />
      </div>
      <div className="px-60 flex gap-3">
        <Feature className="w-1/3" />
        <Feature className="w-1/3" />
        <Feature className="w-1/3" />
      </div>
      <div className="px-60 mt-14">
        <Feature className="w-full" />

      </div>

      <Title title="Tu pedido incluye" />
      <div className="px-60">
        <OrderFeature className="" imageAlt="" content="Incluye en tu ramo o arreglo una tarjeta con tus palabras" title="Nota Personalizada" imagePosition="right" imageSrc="/images/personalNote.jpg" />
        <OrderFeature className="" imageAlt="" content="Todos nuestros precios incluyen envío a nivel nacional" title="Entrega a domicilio" imagePosition="left" imageSrc="/images/homeDelivery.jpg" />
        <OrderFeature className="" imageAlt="" content="Te indicaremos cómo cuidar tus flores para que duren el mayor tiempo posible" title="Garantía de calidad" imagePosition="right" imageSrc="/images/personalNote.jpg" />
      </div>

      <Title title="Pasos para comprar" />
      <div className="px-60 mt-14">
        <FeatureGrid />

      </div>
    </div>
  );
}
