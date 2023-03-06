import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FiltersDesktop from '../../components/FiltersDesktop'
import FiltersMobile from '../../components/FiltersMobile/FiltersMobile'
import Footer from '../../components/Footer/Footer'
import ProductInSlider from '../../components/ProductInSlider'
import useFetchGet from '../../hooks/useFetchGet'
import './FoundProductsScreen.css'

const FoundProductsScreen = () => {
    const [showFilters, setShowFilters] = useState(false)
    const { slug } = useParams()
    const { data } = useFetchGet(`http://127.0.0.1:8000/api/products/${slug}`)

    return (
        <>
            <div className='FoundProductsContainer'>
                <FiltersMobile show={showFilters} setShow={setShowFilters} />
                <div className='FoundProductsContainer1'>
                    <div className='FoundProductsContainer1Top'>
                        <div className='FoundProductsContainer1Top14'>
                            <p>Products Found</p>
                            <p>75 products</p>
                        </div>
                        <p className='FoundProductsContainer1TopP'>product name</p>
                    </div>
                    <button className='FoundProductsContainer1Btn' onClick={() => setShowFilters(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="FoundProductsContainer1BtnIcon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        <p>Filters</p>
                    </button>         
                    <div className='FoundProductsContainer1Main1'>
                        <FiltersDesktop/>
                        <div className='FoundProductsContainer1Main'>
                            {data && data['foundProducts'] == "No Products" ? 
                                <h1>Not Found</h1>
                            : data && data['foundProducts'].map((item) => (
                                <ProductInSlider slug={item.slug} normalPrice={item.normalPrice} img={item.frontImg} imgAlt={item.frontImgAlt} discountPrice={item.discountPrice} title={item.title} rating={item.rating} boughtBy={item.boughtBy}/>
                            ))}
                        </div>
                    </div>      
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FoundProductsScreen