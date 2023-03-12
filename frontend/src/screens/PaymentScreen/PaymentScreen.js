import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CartItem from '../../components/CartItem'
import CheckoutTour from '../../components/CheckoutTour'
import Footer from '../../components/Footer/Footer'
import useFetchGetAuth from '../../hooks/useFetchGetAuth'
import useFetchGet from '../../hooks/useFetchGet'
import './PaymentScreen.css'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm'
import Navbar from '../../navigation/Navbar'

const stripePromise = loadStripe('pk_test_51MVCeYCKMWUsmhhqTTSSUu2p0XxdT3rHmX8Upe8pJkjR1DkuCThrdeshswZCFzKqxEshbNciFswcPXs16WhTufxT00vBMFD6jg');

const PaymentScreen = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const { data, loading } = useFetchGetAuth('http://127.0.0.1:8000/api/payment')
    const [clientSecret, setClientSecret] = useState(null)

    useEffect(() => {
        console.log(location)
        fetch("http://127.0.0.1:8000/api/stripe/create-checkout-session", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                price: location.state.price,
                email: location.state.email,
            })
        })
        .then(res => res.json())
        .then((data) => {
            setClientSecret(data)
            console.log(data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    const options = {
        clientSecret: clientSecret,
    };

    if(loading){
        return (
            <>
                <Navbar/>
                <div style={{height: '150vh'}}></div>
            </>
        )
    }

    return (
        <>
            {!loading && <Navbar/>}
            {!loading && <div className='CartContainer'>
                <div className='CartContainer1'>
                    <div className='CartContainerLeft'>
                        <CheckoutTour type={'payment'}/>
                        <div className='CartHeader'>
                            <div className='CartHeader1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartHeaderIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <h1>Payment</h1>
                            </div>
                        </div>
                        <div className='CartContainerRight'>
                            {data && data['Response'] != 'Your Shopping Cart is Empty' ? 
                                data && data['order'].map((item) => (
                                    <div key={item.product.id}>
                                        {/* <p className='CartContainerRightName'>Package from {item['product']['store']['name']}</p> */}
                                        <CartItem type={true} orderItemId={item.id} shortDescription={item.product.shortDescription} quantity={item.quantity} productId={item.product.id} image={item.product.frontImg} title={item.product.title} imageAlt={item.product.frontImgAlt} normalPrice={item.product.normalPrice} discountPrice={item.product.discountPrice} slug={item.product.slug}/>
                                    </div>
                                )) : <h1>Shopping Cart Is Empty</h1>}
                        </div>
                    </div>
                    <div className='CartContainerRightMain'>
                        <h1 className='CartContainerRightMainh1'>Order Summary</h1>
                        <div className='CartContainerRightMainDiv1'>
                            <div className='CartContainerRightMainDiv1Top'>
                                <p>{data && data['ShippingInfo']['name']} {data && data['ShippingInfo']['lastName']}</p>
                            </div>
                            <div className='CartContainerRightMainDiv1Bot'>
                                <p>{data && data['ShippingInfo']['address']}</p>
                                <p>{data && data['ShippingInfo']['zipcode']} {data && data['ShippingInfo']['city']}</p>
                            </div>
                            <button className='CartContainerRightMainDivBtn1' onClick={() => navigation('/shipping-info/edit')}>Edit Info</button>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Subtotal</h3>
                            <p>${data && data['order'][0]['order']['order_total']}</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Shipping</h3>
                            <p>$0</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Total</h3>
                            <p>${data && data['order'][0]['order']['order_total']}</p>
                        </div>
                        {/* <button className='CartContainerRightMainDivBtn' onClick={() => {}}>Order & Pay</button> */}
                        {/* <button className='CartContainerRightMainDivBtn' onClick={() => navigation('/confirm-order')}>Order & Pay</button> */}
                        {stripePromise && clientSecret && (
                            <Elements stripe={stripePromise} options={options}>
                                {data && <CheckoutForm orderId={data['order'][0]['order']['id']}/>}
                            </Elements>
                        )}
                    </div>
                </div>
            </div>}
            {!loading && <Footer/>}
        </>
    )
}

export default PaymentScreen