import React from 'react'
import './HomeScreen.css'
import HomeBannerSlider from '../../components/HomeBannerSlider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductSliderSmall from '../../components/ProductSliderSmall/ProductSliderSmall';
import CategoriesSwiper from '../../components/CategoriesSwiper/CategoriesSwiper';
import Footer from '../../components/Footer/Footer';

const HomeScreen = () => {
    return (
        <>
            <div className='HomeContainer'>
                <HomeBannerSlider/>       
                <CategoriesSwiper/>
                <div className='HomeContainer1'>
                    <div className='HomeContainerTop'>
                        <ProductSliderSmall title={'Groceries'} />
                        <ProductSliderSmall title={'Technology'} />
                    </div>
                    <ProductSlider title={'Selected For You'}/>
                    <ProductSlider title={'Bestsellers'}/>
                    <ProductSlider title={'Clothes'}/>
                </div>
            </div>
            <Footer/>
        </>
        
        
    )
}

export default HomeScreen