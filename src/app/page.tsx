import { Feature } from "@/components/feature";
import OrderFeature from "@/components/order-feature";
import { ParallaxCarousel } from "@/components/parallax-carousel";
import FeatureGrid from "@/components/steps";
import Title from "@/components/title";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="lg:px-60">
        <ParallaxCarousel />
      </div>
      <div className="lg:px-60 flex gap-3 md:flex-row flex-col">
        <Feature image1="/images/createYourBucket.jpg"  title="Crea tu ramo" icon="square"/>
        <Feature image1="/images/specialDetails.jpg"  title="Detalles especiales" icon="gem"/>
        <Feature image1="/images/aboutMe.jpg"  title="Conoceme" icon="circle"/>
      </div>


      <Title title="Tu pedido incluye" />
      <div className="lg:px-60">
        <OrderFeature className="" imageAlt="" content="Incluye en tu ramo o arreglo una tarjeta con tus palabras" title="Nota Personalizada" imagePosition="right" imageSrc="/images/personalNote.jpg" />
        <OrderFeature className="" imageAlt="" content="Todos nuestros precios incluyen envío a nivel nacional" title="Entrega a domicilio" imagePosition="left" imageSrc="/images/homeDelivery.jpg" />
        <OrderFeature className="" imageAlt="" content="Te indicaremos cómo cuidar tus flores para que duren el mayor tiempo posible" title="Garantía de calidad" imagePosition="right" imageSrc="/images/trustedPartner.jpg" />
      </div>

      <Title title="Pasos para comprar" />
      <div className="lg:px-60 mt-14">
        <FeatureGrid />

      </div>
    </div>
  );
}
