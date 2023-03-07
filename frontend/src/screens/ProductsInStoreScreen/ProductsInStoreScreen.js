import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FiltersDesktop from '../../components/FiltersDesktop'
import FiltersMobile from '../../components/FiltersMobile/FiltersMobile'
import Footer from '../../components/Footer/Footer'
import ProductInSlider from '../../components/ProductInSlider'
import useFetchGet from '../../hooks/useFetchGet'

const ProductsInStoreScreen = () => {
    const [showFilters, setShowFilters] = useState(false)
    const { slug } = useParams()
    const { data } = useFetchGet(`http://127.0.0.1:8000/api/store/${slug}`)

    return (
        <>
            <div className='FoundProductsContainer1Topp1'>
                <p className='FoundProductsContainer1TopH112'>{slug.slice(0, 1).toUpperCase() + slug.slice(1, slug.length)}</p>
            </div>
            <div className='FoundProductsContainer'>
                <FiltersMobile show={showFilters} setShow={setShowFilters} />
                <div className='FoundProductsContainer1'>
                    <button className='FoundProductsContainer1Btn' onClick={() => setShowFilters(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="FoundProductsContainer1BtnIcon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        <p>Filters</p>
                    </button>         
                    <div className='FoundProductsContainer1Main1'>
                        <FiltersDesktop/>
                        <div className='FoundProductsContainer1Main11'>
                            <div className='FoundProductsContainer1Top1'>
                                <p>Category</p>
                                <p>75 products</p>
                            </div>
                            <div className='FoundProductsContainer1Toppp1' style={{backgroundImage: `url(http://127.0.0.1:8000${data && data['store']['storeBanner']})`}}>
                                <div className='FoundProductsContainer1Topp22'>
                                    <div className='FoundProductsContainer1Top2'>
                                        <p className='FoundProductsContainer1TopH11'>{data && data['store']['name']}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='FoundProductsContainer1Main'>
                                {data && data['storeProducts'].map((item) => (
                                    <ProductInSlider slug={item.slug} normalPrice={item.normalPrice} img={item.frontImg} imgAlt={item.frontImgAlt} discountPrice={item.discountPrice} title={item.title} rating={item.rating} boughtBy={item.boughtBy}/>
                                ))}
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <Footer/>
        </>
       
    )
}

export default ProductsInStoreScreen