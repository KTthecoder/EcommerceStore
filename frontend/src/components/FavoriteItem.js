import React from 'react'
import { useNavigate } from 'react-router-dom'

const FavoriteItem = () => {
    const navigation = useNavigate()

    return (
        <div className='CartContainerRightDiv'>
            <div className='CartContainerRightDivImgDiv'>
                <div className='CartContainerRightDivImg'></div>
            </div>
            <div className='CartContainerRightDiv1'>
                <div className='CartContainerRightDivv2'>
                    <h1>Suspendisse egestas nunc neque. Ut vulputate porta ligula eu interdum.</h1>
                    <p className='CartContainerRightDiv1P'>Suspendisse mauris ipsum, tempus a pretium scelerisque, porttitor a justo. Integer quis porta ex.</p>
                    <div className='CartContainerRightDivInfo'>
                        <div className='CartContainerRightDiv1PriceDiv1'>
                            <p className='CartContainerRightDiv1PriceDis'>$38.93</p>
                            <p className='CartContainerRightDiv1Price'>$41.72</p>
                        </div>
                    </div>
                </div>
                <div className='CartContainerRightDivv1'>
                    <button onClick={() => navigation('/cart')} className='CartContainerRightDivv1AddBtn'>Add To Cart</button>
                    <button onClick={() => navigation('/favorite')} className='CartContainerRightDivv1RemoveBtn'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem