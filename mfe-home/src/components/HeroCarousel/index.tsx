import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './HeroCarousel.module.scss'

import img1 from '@/images/pane-img1.jpg';
import img2 from '@/images/pane-img2.jpg';
import img3 from '@/images/pane-img3.jpg';
import img4 from '@/images/pane-img4.jpg';
const HeroCarousel = ({ children }: React.PropsWithChildren) => {
    const imgArr = [img1, img2, img3, img4];
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                className='hero-carousel-block'
                loop={true}
                navigation
                pagination={{ clickable: true }}
            >
                <div className="category-slider" data-widget="1">
                    {imgArr.map((item, index) => (
                        <SwiperSlide key={index} virtualIndex={index} className="hero-banner-block height-full in-homepage">
                            <div className={styles.slide}>
                                <div className={styles['slide-content']}>
                                    Hero carousel from home mfe
                                </div>
                                <Image
                                    className={"hero-banner-block__img hero-banner-block__img-new d-none"}
                                    alt='Hero banner'
                                    src={item}
                                    loading="lazy"
                                    width={1920}
                                    height={610}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
}

export default HeroCarousel;