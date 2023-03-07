import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

const CartItem = ({type, reload, setReload, title, image, imageAlt, quantity, shortDescription, normalPrice, discountPrice, slug, productId, orderItemId}) => {
    const { accessToken } = useContext(AuthContext)
    const [ productQuantity, setProductQuantity ] = useState(1)

    const AddToCart = () => {
        fetch(`http://127.0.0.1:8000/api/cart/add/${productId}/${productQuantity}`, {
          method: 'POST',
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

    const RemoveFromCart = () => {
        fetch(`http://127.0.0.1:8000/api/cart/remove/${orderItemId}`, {
          method: 'POST',
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
        <div className='CartContainerRightDiv'>
            <div className='CartContainerRightDivImgDiv'>
                <img alt={imageAlt} src={'http://127.0.0.1:8000' + image} className='CartContainerRightDivImg'/>
            </div>
            <div className='CartContainerRightDiv1'>
                <Link to={`/product/${slug}`}><h1>{title}</h1></Link>
                <p className='CartContainerRightDiv1P'>{shortDescription}</p>
                <div className='CartContainerRightDivInfo'>
                    {!type ? 
                    <>
                        <div className='CartContainerRightDiv1QuantityDiv'>
                            <button className='CartContainerRightDiv1QuantityBtn' onClick={() => RemoveFromCart()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartContainerRightDiv1QuantityBtnIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            <p className='CartContainerRightDiv1QuantityP'>{quantity}</p>
                            <button className='CartContainerRightDiv1QuantityBtn' onClick={() => AddToCart()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartContainerRightDiv1QuantityBtnIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>    
                        </div>
                    </>
                    : <p className='CartContainerRightDiv1QuantityP1'>Quantity: {productQuantity}</p>}
                    <div className='CartContainerRightDiv1PriceDiv'>
                        {discountPrice ? 
                        <>
                            <p className='CartContainerRightDiv1PriceDis'>${discountPrice}</p>
                            <p className='CartContainerRightDiv1Price'>${normalPrice}</p>
                        </>    
                        : <p className='CartContainerRightDiv1PriceDis'>${normalPrice}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem