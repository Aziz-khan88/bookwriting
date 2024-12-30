"use client";
import styles from "@/styles/home/clients.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Image from "next/image";
//Clients
import Client01 from "media/home/clientsLogo/1.webp";
import Client02 from "media/home/clientsLogo/2.webp";
import Client03 from "media/home/clientsLogo/3.webp";
import Client04 from "media/home/clientsLogo/4.webp";
import Client05 from "media/home/clientsLogo/5.webp";
import Client06 from "media/home/clientsLogo/6.webp";
import Client07 from "media/home/clientsLogo/7.webp";
import Client08 from "media/home/clientsLogo/8.webp";

export const ClientImages = [
    {
        Img: Client01.src,
    },
    {
        Img: Client02.src,
    },
    {
        Img: Client03.src,
    },
    {
        Img: Client04.src,
    },
    {
        Img: Client05.src,
    },
    {
        Img: Client06.src,
    },
    {
        Img: Client07.src,
    },
    {
        Img: Client08.src,
    },

]
const Clients = () => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: "center" },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            }),
        ]
    );

    return (
        <section className={styles.clientSlider}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {ClientImages.map((item, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <Image src={item.Img} alt={`Client ${index}`} width={154} height={42} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
