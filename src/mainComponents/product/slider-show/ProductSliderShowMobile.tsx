"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideShow.css';

// import required modules
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';



interface Props {
    images: string[];
    title: string;
    className?: string;
}



export const ProductSliderShowMobile = ({ images, title, className }: Props) => {


    return (
        <div className={className}>

            <Swiper

                style={{
                    width: '100%',
                    height: '500px',
                }}


                pagination
                // autoplay={{
                //     delay: 3500
                // }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >

                {
                    images.map(image => (

                        <SwiperSlide key={image} >
                            <Image
                                width={700}
                                height={600}
                                src={`/products/${image}`}
                                alt={`Imagen de ${title}`}
                                className='object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
