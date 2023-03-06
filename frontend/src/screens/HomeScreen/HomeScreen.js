import React from 'react'
import './HomeScreen.css'
import HomeBannerSlider from '../../components/HomeBannerSlider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductSliderSmall from '../../components/ProductSliderSmall/ProductSliderSmall';
import CategoriesSwiper from '../../components/CategoriesSwiper/CategoriesSwiper';
import Footer from '../../components/Footer/Footer';
import useFetchGet from '../../hooks/useFetchGet';

const HomeScreen = () => {
    const { data, loading } = useFetchGet('http://127.0.0.1:8000/api/home')

    return (
        <>
            <div className='HomeContainer'>
                {data && <HomeBannerSlider data={data['banners']}/>}     
                {data && <CategoriesSwiper data={data['categories']} />}
                <div className='HomeContainer1'>
                    <div className='HomeContainerTop'>
                        {data && <ProductSliderSmall title={data['technologyProducts']['name']} data={data['technologyProducts']['products']} slug={data['technologyProducts']['slug']}/>}
                        {data && <ProductSliderSmall title={data['clothesProducts']['name']} data={data['clothesProducts']['products']} slug={data['clothesProducts']['slug']}/>}
                    </div>
                    {data && <ProductSlider title={data['technologyProducts']['name']} data={data['technologyProducts']['products']} slug={data['technologyProducts']['slug']}/>}
                    {data && <ProductSlider title={data['technologyProducts']['name']} data={data['technologyProducts']['products']} slug={data['technologyProducts']['slug']}/>}
                    {data && <ProductSlider title={data['technologyProducts']['name']} data={data['technologyProducts']['products']} slug={data['technologyProducts']['slug']}/>}
                    {/* <ProductSlider title={'Bestsellers'}/>
                    <ProductSlider title={'Clothes'}/> */}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomeScreen