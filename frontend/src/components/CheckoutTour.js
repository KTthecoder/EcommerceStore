import React from 'react'

const CheckoutTour = ({type}) => {
    return (
        <div className='CartStatusBar'>
            {type == 'cart' ? 
            <>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Cart</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircle'>

                </div>
                <p className='CartStatusBarP'>Shipping Info</p>
                <div className='CartStatusBarDash'></div>
                <div className='CartStatusBarCircle'>

                </div>
                <p className='CartStatusBarP'>Payment</p>
                <div className='CartStatusBarDash'></div>
                <div className='CartStatusBarCircle'>

                </div>
                <p className='CartStatusBarP'>Confirm</p>
            </>
            : null}

            {type == 'shipping' ? 
            <>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Cart</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Shipping Info</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircle'>

                </div>
                <p className='CartStatusBarP'>Payment</p>
                <div className='CartStatusBarDash'></div>
                <div className='CartStatusBarCircle'>

                </div>
                <p className='CartStatusBarP'>Confirm</p>
            </>
            : null}

            {type == 'payment' ? 
            <>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Cart</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Shipping Info</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Payment</p>
                <div className='CartStatusBarDash'></div>
                <div className='CartStatusBarCircle'>

                </div>
                <p className='CartStatusBarP'>Confirm</p>
            </>
            : null}

            {type == 'confirm' ? 
            <>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Cart</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Shipping Info</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Payment</p>
                <div className='CartStatusBarDashFinished'></div>
                <div className='CartStatusBarCircleFinished'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartStatusBarCircleIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='CartStatusBarPFinished'>Confirm</p>
            </>
            : null}
            
        </div>
    )
}

export default CheckoutTour