import React from 'react'

const CheckoutCartItem = ({title, image, imageAlt, quantity, normalPrice, discountPrice}) => {
  return (
    <div className='CartContainerRightMain1CartItem'>
      <img src={`http://127.0.0.1:8000${image}`} className='CartContainerRightMain1CartItemImg' alt={imageAlt}/>
      <div className='CartContainerRightMain1CartItemDiv'>
        <h3 className='CartContainerRightMain1CartItemDivTitle'>{title}</h3>
        <div className='CartContainerRightMain1CartItemDivMore'>
          <p className='CartContainerRightMain1CartItemDivQuantity'>Quantity: {quantity}</p>
          <div className='CartContainerRightMain1CartItemDiv1'>
            {discountPrice ? 
            <>
              <p className='CartContainerRightMain1CartItemDivPriceDis'>${discountPrice}</p>
              <p className='CartContainerRightMain1CartItemDivPrice'>${normalPrice}</p>
            </> : <p className='CartContainerRightMain1CartItemDivPriceDis'>${normalPrice}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCartItem