import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProductDetailsSlider.css'

const ProductDetailsSlider = ({data, frontImg, frontImgAlt}) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <Swiper
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            className='ProductDetailsSwiper'
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
                setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current
                    swiper.params.navigation.nextEl = navigationNextRef.current

                    swiper.navigation.destroy()
                    swiper.navigation.init()
                    swiper.navigation.update()
                })
            }}
            modules={[Navigation, Pagination, A11y]}
            >
                <SwiperSlide className='HomeSwiperSlide'>
                    <img src={'http://127.0.0.1:8000' + frontImg} className='HomeSwiperSlideImgg' alt={frontImgAlt}/>
                </SwiperSlide>
                {data && data.map((item) => (
                    <SwiperSlide className='HomeSwiperSlide'>
                        <img src={'http://127.0.0.1:8000' + item['image']} className='HomeSwiperSlideImgg' alt={item['imageAlt']}/>
                    </SwiperSlide>
                ))}
            <div className='HomeSwiperBtnsDiv'>
                <button ref={navigationPrevRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="HomeSwiperBtnIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button ref={navigationNextRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="HomeSwiperBtnIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </Swiper>
    )
}

export default ProductDetailsSlider