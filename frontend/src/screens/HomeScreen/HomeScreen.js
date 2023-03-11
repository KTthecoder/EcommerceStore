import React from 'react'
import './HomeScreen.css'
import HomeBannerSlider from '../../components/HomeBannerSlider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductSliderSmall from '../../components/ProductSliderSmall/ProductSliderSmall';
import CategoriesSwiper from '../../components/CategoriesSwiper/CategoriesSwiper';
import Footer from '../../components/Footer/Footer';
import useFetchGet from '../../hooks/useFetchGet';
import Navbar from '../../navigation/Navbar';

const HomeScreen = () => {
    const { data, loading } = useFetchGet('http://127.0.0.1:8000/api/home')

    return (
        <>
            {!loading && <Navbar/>}
            {!loading && <div className='HomeContainer'>
                {data && <HomeBannerSlider data={data['banners']}/>}     
                {data && <CategoriesSwiper data={data['categories']} />}
                <div className='HomeContainer1'>
                    <div className='HomeContainerTop'>
                        {data && <ProductSliderSmall title={data['technologyProducts']['name']} data={data['technologyProducts']['products']} slug={data['technologyProducts']['slug']}/>}
                        {data && <ProductSliderSmall title={data['clothesProducts']['name']} data={data['clothesProducts']['products']} slug={data['clothesProducts']['slug']}/>}
                    </div>
                    {data && <ProductSlider title={'Newest Products'} data={data['newestProducts']} slug={'newest-products'}/>}
                    {data && <ProductSlider title={'Bestsellers'} data={data['bestsellersProducts']} slug={'bestsellers'}/>}
                    {data && <ProductSlider title={data['sportProducts']['name']} data={data['sportProducts']['products']} slug={data['sportProducts']['slug']}/>}
                </div>
            </div>}
            {!loading && <Footer/>}
        </>
    )
}

export default HomeScreen