import React from 'react'
import './CartScreen.css'
import CartItem from '../../components/CartItem'
import CheckoutTour from '../../components/CheckoutTour'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const CartScreen = () => {
    const navigation = useNavigate()

    return (
        <>
            <div className='CartContainer'>
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
                            <button className='CartHeaderRemoveAllBtn'>Remove All</button>
                        </div>
                        <div className='CartContainerRight'>
                            <p className='CartContainerRightName'>Package from Name of Company</p>
                            <CartItem/>
                            <CartItem/>
                            <p className='CartContainerRightName'>Package from Name of Company</p>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                        </div>
                    </div>
                    <div className='CartContainerRightMain'>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Subtotal</h3>
                            <p>$67.98</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Shipping</h3>
                            <p>$0</p>
                        </div>
                        <div className='CartContainerRightMainDiv'>
                            <h3>Total</h3>
                            <p>$67.98</p>
                        </div>
                        <button className='CartContainerRightMainDivBtn' onClick={() => navigation('/shipping-info')}>Go To Checkout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CartScreen