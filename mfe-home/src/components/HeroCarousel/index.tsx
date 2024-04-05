import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import _ from 'lodash'
import styles from './HeroCarousel.module.scss'
const HeroCarousel = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                className='hero-carousel-block'
                loop={true}
                navigation
                pagination={{ clickable: true }}
                lazy={true}
            >
                <div className="category-slider" data-widget="1">
                    {Array(5).fill(null).map((item, index) => (
                        <SwiperSlide key={index} virtualIndex={index} className="hero-banner-block height-full in-homepage">
                            <div className={styles.slide}>
                                <div className={styles['slide-content']}>
                                    Hero carousel from home mfe
                                </div>
                                <Image
                                    className={"hero-banner-block__img hero-banner-block__img-new"}
                                    alt='Hero banner'
                                    src={"https://picsum.photos/1920/600?random=" + (index + 1)}
                                    unoptimized
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