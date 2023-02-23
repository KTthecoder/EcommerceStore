import React, { useRef } from 'react'
import { Navigation, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProductSliderSmall.css'
import ProductInSlider from '../ProductInSlider';
import { useNavigate } from 'react-router-dom';

const ProductSliderSmall = ({title}) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const navigation = useNavigate()
    
    return (
        <div className='ProductSliderContainerSmall'>
            <div className='ProductSliderContainer1 ProductSliderContainerSmall1'>
                <h1 className='ProductSliderContainerH1'>{title}</h1>
                <div className='ProductSliderBtnsDiv'>
                    <button ref={navigationPrevRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ProductSliderBtnIcon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button ref={navigationNextRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ProductSliderBtnIcon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
          
            <Swiper
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                className='ProductSliderSwiper ProductSliderSwiperSmall'
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    600:{
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    900:{
                        spaceBetween: 20,
                        slidesPerView: 4,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                    1570: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        swiper.params.navigation.nextEl = navigationNextRef.current

                        swiper.navigation.destroy()
                        swiper.navigation.init()
                        swiper.navigation.update()
                    })
                }}
                modules={[Navigation, A11y]}
            >
                <SwiperSlide>
                    <ProductInSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductInSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductInSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductInSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductInSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductInSlider/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductInSlider/>
                </SwiperSlide>
            </Swiper>
            <button className='ProductSliderShowMoreBtn' onClick={() => navigation('category/technology')}>Show More</button>
        </div>
    )
}

export default ProductSliderSmall