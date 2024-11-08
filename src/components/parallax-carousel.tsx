import styles from '@/styles/parallax.module.css';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export function ParallaxCarousel() {


    return (
        <div className='my-20'>

            <Carousel className=" h-[70vh]" orientation="horizontal">
                <CarouselPrevious aria-label="Ir al anterior" />

                <CarouselContent className="h-[70vh]">
                    <CarouselItem >
                        <Slide image='/images/homeImage.jpg' content='Creamos modelos especificos para cada necesidad ajustado a tu presupuesto' title='DE TU CABEZA A LA REALIDAD' />
                    </CarouselItem>
                </CarouselContent>

                <CarouselNext aria-label="Ir al siguiente" />
            </Carousel>
        </div>
    );
}

function Slide({ title, content, image }: { title: string; content: string; image: string }) {
    return (
        <div className={`${styles.box} ${styles.slide}`}>
            <div className={`${styles.layer} ${styles.bg}`} data-speed="-0.5">
                <Image src={image} alt='' fill />
            </div>
            <div className={`${styles.layer} ${styles.content}`} data-speed="0.9">
                <div className="w-2/3">
                    <div className="relative overflow-hidden">
                        <h4 className={`text-6xl font-bold text-white ${styles.animate}`}>
                            {title}
                        </h4>
                    </div>
                    <div className="relative overflow-hidden">
                        <p className={`text-xl text-white my-8 ${styles.animate}`}>
                            {content}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
