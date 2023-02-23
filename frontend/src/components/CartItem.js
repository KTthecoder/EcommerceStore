import React from 'react'

const CartItem = ({type}) => {
    return (
        <div className='CartContainerRightDiv'>
            <div className='CartContainerRightDivImgDiv'>
                <div className='CartContainerRightDivImg'></div>
            </div>
            <div className='CartContainerRightDiv1'>
                <h1>Suspendisse egestas nunc neque. Ut vulputate porta ligula eu interdum.</h1>
                <p className='CartContainerRightDiv1P'>Suspendisse mauris ipsum, tempus a pretium scelerisque, porttitor a justo. Integer quis porta ex.</p>
                <div className='CartContainerRightDivInfo'>
                    {!type ? 
                    <>
                        <div className='CartContainerRightDiv1QuantityDiv'>
                            <button className='CartContainerRightDiv1QuantityBtn'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartContainerRightDiv1QuantityBtnIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            <p className='CartContainerRightDiv1QuantityP'>1</p>
                            <button className='CartContainerRightDiv1QuantityBtn'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartContainerRightDiv1QuantityBtnIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>    
                        </div>
                    </>
                    : <p className='CartContainerRightDiv1QuantityP1'>Quantity: 1</p>}
                    <div className='CartContainerRightDiv1PriceDiv'>
                        <p className='CartContainerRightDiv1PriceDis'>$38.93</p>
                        <p className='CartContainerRightDiv1Price'>$41.72</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem