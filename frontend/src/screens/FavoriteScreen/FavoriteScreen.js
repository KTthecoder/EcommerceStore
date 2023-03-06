import React from 'react'
import './FavoriteScreen.css'
import CartItem from '../../components/CartItem'
import CheckoutTour from '../../components/CheckoutTour'
import { useNavigate } from 'react-router-dom'
import FavoriteItem from '../../components/FavoriteItem'
import Footer from '../../components/Footer/Footer'
import useFetchGetAuth from '../../hooks/useFetchGetAuth'

const FavoriteScreen = () => {
    const navigation = useNavigate()
    const { data } = useFetchGetAuth('http://127.0.0.1:8000/api/favorite')

    return (
        <>
            <div className='CartContainer'>
                <div className='CartContainer1'>
                    <div className='CartContainerLeft'>
                        <div className='CartHeaderr'>
                            <div className='CartHeader1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartHeaderIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <h1>Wish List</h1>
                            </div>
                        </div>
                        <div className='CartContainerRight'>
                            {data && data['favoriteProducts'] != 'No Favorite Products' ? data && data['favoriteProducts'].map((item) => (
                                <FavoriteItem key={item.id} productId={item.productId} image={item.frontImg} title={item.title} imageAlt={item.frontImgAlt} normalPrice={item.normalPrice} discountPrice={item.discountPrice} shortDescription={item.shortDescription} slug={item.slug}/>
                            )) :  <h1>No Favorite Products</h1>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FavoriteScreen