import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderIcon from '../../static/icons/orderConfirm.png'
import './ConfirmOrderScreen.css'
import Footer from '../../components/Footer/Footer.js'

const ConfirmOrderScreen = () => {
    const navigation = useNavigate()

    return (
        <>
            <div className='ConfirmOrderContainer'>
                <div className='ConfirmOrderContainer1'>
                    <img src={OrderIcon} className='ConfirmOrderContainerIcon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/order" title="order icons">Order icons created by Uniconlabs - Flaticon</a> */}
                    <h1 className='ConfirmOrderContainer1H1'>Hey Ksawery</h1>
                    <h1 className='ConfirmOrderContainer1H1'>Thanks for your purchase.</h1>
                    <h2 className='ConfirmOrderContainer1H2'>Order Id: #899172</h2>
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
                    <button className='CartContainerRightMainDivBtn' onClick={() => navigation('/')}>Go To Home</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ConfirmOrderScreen