import React, { useRef } from 'react'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CategoriesSwiper.css'
import { Link, useNavigate } from 'react-router-dom';

const CategoriesSwiper = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const navigation = useNavigate()

    return (
        <div className='ProductSliderContainer CategorySliderContainer'>
            <div className='ProductSliderContainer1'>
                <h1 className='ProductSliderContainerH1'>Top Categories</h1>
                <button className='ProductSliderShowMoreBtn1' onClick={() => navigation('all-categories')}>Show All</button>
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
                className='ProductSliderSwiper'
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
                    1570:{
                        spaceBetween: 30,
                        slidesPerView: 5,
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
                    <Link to={'/category/technology'} className='CategorySwiperSlide'>
                        <p>Technology</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/groceries'} className='CategorySwiperSlide'>
                        <p>Groceries</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/clothes'} className='CategorySwiperSlide'>
                        <p>Clothes</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/home'} className='CategorySwiperSlide'>
                        <p>Home</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/garden'} className='CategorySwiperSlide'>
                        <p>Garden</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/technology'} className='CategorySwiperSlide'>
                        <p>Technology</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/groceries'} className='CategorySwiperSlide'>
                        <p>Groceries</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/clothes'} className='CategorySwiperSlide'>
                        <p>Clothes</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/home'} className='CategorySwiperSlide'>
                        <p>Home</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/garden'} className='CategorySwiperSlide'>
                        <p>Garden</p>
                    </Link>
                </SwiperSlide>
            </Swiper>
            
        </div>
    )
}

export default CategoriesSwiper