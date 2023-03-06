import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthProvider';

const FavoriteItem = ({image, imageAlt, title, shortDescription, normalPrice, discountPrice, slug, productId}) => {
    const navigation = useNavigate()
    const { accessToken } = useContext(AuthContext)

    const DeleteProduct = () => {
        fetch(`http://127.0.0.1:8000/api/favorite/delete/${productId}`, {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            }
        })
        .then(res => res.json())
        .then((data) => {
            window.location.reload()
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
                <div className='CartContainerRightDivv2'>
                    <h1>{title}</h1>
                    <p className='CartContainerRightDiv1P'>{shortDescription}</p>
                    <div className='CartContainerRightDivInfo'>
                        <div className='CartContainerRightDiv1PriceDiv1'>
                            {discountPrice ? 
                                <>
                                    <p className='CartContainerRightDiv1PriceDis'>${discountPrice}</p>
                                    <p className='CartContainerRightDiv1Price'>${normalPrice}</p>
                                </>    
                            : <p className='CartContainerRightDiv1PriceDis'>${normalPrice}</p>}
                           
                        </div>
                    </div>
                </div>
                <div className='CartContainerRightDivv1'>
                    <button onClick={() => navigation(`/product/${slug}`)} className='CartContainerRightDivv1AddBtn'>Show Product</button>
                    <button onClick={() => DeleteProduct()} className='CartContainerRightDivv1RemoveBtn'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem