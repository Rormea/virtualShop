"use client"

import React, { useRef, useState } from 'react';
import { Swiper as SwiperObnect } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideShow.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import Image from 'next/image';



interface Props {
    images: string[];
    title: string;
    className?: string;
}



export const ProductSliderShowme = ({ images, title, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObnect>();


    return (
        <div className={className}>

            <Swiper
                // style={{
                //     '--swiper-navigation-color': '#fff',
                //     '--swiper-pagination-color': '#fff',
                // } as React.CSSProperties
                // }

                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 3500
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >

                {
                    images.map(image => (

                        <SwiperSlide key={image} >
                            <Image
                                width={1024}
                                height={800}
                                src={`/products/${image}`}
                                alt={`Imagen de ${title}`}
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Aca para poner los thumbs o las imagens abajao  */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map(image => (

                        <SwiperSlide key={image} >
                            <Image
                                width={300}
                                height={300}
                                src={`/products/${image}`}
                                alt={`Imagen de ${title}`}
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}
