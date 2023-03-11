import React, { useContext } from 'react'
import './CartScreen.css'
import CartItem from '../../components/CartItem'
import CheckoutTour from '../../components/CheckoutTour'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import useFetchGetAuth from '../../hooks/useFetchGetAuth'
import { AuthContext } from '../../contexts/AuthProvider'
import Navbar from '../../navigation/Navbar'

const CartScreen = () => {
    const navigation = useNavigate()
    const { data, setReload, reload, loading } = useFetchGetAuth('http://127.0.0.1:8000/api/cart')
    const { accessToken } = useContext(AuthContext)

    const DeleteOrder = () => {
        fetch(`http://127.0.0.1:8000/api/order/remove/${data['order'][0]['order']['id']}`, {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            },
        })
        .then(res => res.json())
        .then((data) => {
            setReload(!reload)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <>
            <Navbar/>
            {!loading && <div className='CartContainer'>
                <div className='CartContainer1'>
                    <div className='CartContainerLeft'>
                        <CheckoutTour type={'cart'}/>
                        <div className='CartHeader'>
                            <div className='CartHeader1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartHeaderIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <h1>Your Cart</h1>
                            </div>
                            <button className='CartHeaderRemoveAllBtn' onClick={() => DeleteOrder()}>Remove All</button>
                        </div>
                        <div className='CartContainerRight'>
                            {/* <p className='CartContainerRightName'>Package from Name of Company</p> */}
                            {data && data['order'] != 'Your Shopping Cart is Empty' ? 
                                data && data['order'].map((item) => (
                                    <>
                                        {/* <p className='CartContainerRightName'>Package from {item['product']['store']['name']}</p> */}
                                        <CartItem reload={reload} setReload={setReload} key={item.product.id} orderItemId={item.id} shortDescription={item.product.shortDescription} quantity={item.quantity} productId={item.product.id} image={item.product.frontImg} title={item.product.title} imageAlt={item.product.frontImgAlt} normalPrice={item.product.normalPrice} discountPrice={item.product.discountPrice} slug={item.product.slug}/>
                                    </>
                                )) 
                            : <h1>Shopping Cart Is Empty</h1>}
                        </div>
                    </div>
                    <div className='CartContainerRightMain'>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Subtotal</h3>
                            <p>${data && data['order'] != 'Your Shopping Cart is Empty' ? data['order'][0]['order']['order_total'] : 0}</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Shipping</h3>
                            <p>$0</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Total</h3>
                            <p>${data && data['order'] != 'Your Shopping Cart is Empty' ? data['order'][0]['order']['order_total'] : 0}</p>
                        </div>
                        {data && data['order'] != 'Your Shopping Cart is Empty' ? 
                            <button className='CartContainerRightMainDivBtn' onClick={() => navigation('/shipping-info')}>Go To Checkout</button>
                        : <button className='CartContainerRightMainDivBtn' onClick={() => navigation('/')}>Add Products</button>}
                        
                    </div>
                </div>
            </div>}
            {!loading && <Footer/>}
        </>
    )
}

export default CartScreen