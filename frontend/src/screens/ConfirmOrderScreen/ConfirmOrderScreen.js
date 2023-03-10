import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OrderIcon from '../../static/icons/orderConfirm.png'
import './ConfirmOrderScreen.css'
import Footer from '../../components/Footer/Footer.js'
import useFetchGetAuth from '../../hooks/useFetchGetAuth'

const ConfirmOrderScreen = () => {
    const navigation = useNavigate()
    const { orderId } = useParams()
    const { data } = useFetchGetAuth(`http://127.0.0.1:8000/api/confirm/order/${orderId}`)

    return (
        <>
            {data && data['order'] != 'No order' ? (
                <>
                    <div className='ConfirmOrderContainer'>
                        <div className='ConfirmOrderContainer1'>
                            <img src={OrderIcon} className='ConfirmOrderContainerIcon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/order" title="order icons">Order icons created by Uniconlabs - Flaticon</a> */}
                            <h1 className='ConfirmOrderContainer1H1'>Hey {data['order']['username']}</h1>
                            <h1 className='ConfirmOrderContainer1H1'>Thanks for your purchase.</h1>
                            <h2 className='ConfirmOrderContainer1H2'>Order Id: #{data['order']['id']}</h2>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Subtotal</h3>
                                <p>${data['order']['order_total']}</p>
                            </div>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Shipping</h3>
                                <p>$0</p>
                            </div>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Total</h3>
                                <p>${data['order']['order_total']}</p>
                            </div>
                            <button className='CartContainerRightMainDivBtn' onClick={() => navigation('/')}>Go To Home</button>
                        </div>
                    </div>
                    <Footer/>
                </>
            ) : (
                <>
                    <div className='ConfirmOrderContainer'>
                        <div className='ConfirmOrderContainer1'>
                            <img src={OrderIcon} className='ConfirmOrderContainerIcon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/order" title="order icons">Order icons created by Uniconlabs - Flaticon</a> */}
                            <h1 className='ConfirmOrderContainer1H1' style={{marginBottom: 40}}>This order does not exists</h1>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Subtotal</h3>
                                <p>$0</p>
                            </div>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Shipping</h3>
                                <p>$0</p>
                            </div>
                            <div className='CartContainerRightMainDiv'>
                                <h3>Total</h3>
                                <p>$0</p>
                            </div>
                            <button className='CartContainerRightMainDivBtn' onClick={() => navigation('/')}>Go To Home</button>
                        </div>
                    </div>
                    <Footer/>
                </>
            )}
        </>
    )
}

export default ConfirmOrderScreen