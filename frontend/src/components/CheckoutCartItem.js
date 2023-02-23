import React from 'react'
import photo from '../static/img.webp'

const CheckoutCartItem = () => {
  return (
    <div className='CartContainerRightMain1CartItem'>
      <img src={photo} className='CartContainerRightMain1CartItemImg'/>
      <div className='CartContainerRightMain1CartItemDiv'>
          <h3 className='CartContainerRightMain1CartItemDivTitle'>Nullam odio nisi, tempus gravida elit id, hendrerit consectetur augue.</h3>
          <div className='CartContainerRightMain1CartItemDivMore'>
              <p className='CartContainerRightMain1CartItemDivQuantity'>Quantity: 1</p>
              <div className='CartContainerRightMain1CartItemDiv1'>
                  <p className='CartContainerRightMain1CartItemDivPriceDis'>$37.98</p>
                  <p className='CartContainerRightMain1CartItemDivPrice'>$42.72</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default CheckoutCartItem