import React, { useContext, useState, useEffect } from 'react'
import ProductDetailsSlider from '../../components/ProductDetailsSlider/ProductDetailsSlider'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import './ProductDetailsScreen.css'
import photo from '../../static/img.webp'
import Footer from '../../components/Footer/Footer'
import useFetchGet from '../../hooks/useFetchGet'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';
import parse from 'html-react-parser';

const ProductDetailsScreen = () => {
  const { slug } = useParams()
  const { accessToken, user } = useContext(AuthContext)
  const { data } = useFetchGet(`http://127.0.0.1:8000/api/product/${slug}`)
  const navigation = useNavigate()
  const [quantity, setQuantity] = useState(1)
  
  const AddToFavorite = () => {
    fetch(`http://127.0.0.1:8000/api/favorite/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + accessToken
      },
      body: JSON.stringify({
        user: user['user_id'],
        product: data['product']['id']
      })
    })
    .then(res => res.json())
    .then((data) => {
      navigation('/favorite')
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const AddToCart = () => {
    fetch(`http://127.0.0.1:8000/api/cart/add/${data['product']['id']}/${quantity}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + accessToken
      }
    })
    .then(res => res.json())
    .then((data) => {
      navigation('/cart')
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <>
      <div className='ProductDetailsContainer'>
        <div className='ProductDetailsContainerBot'>
          <div className='ProductDetailsContainerBot1'>
            <button className='ProductDetailsContainerBotFavorite'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ProductDetailsContainerBotFavoriteIcon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            <button className='ProductDetailsContainerBotAdd'>
              Add To Cart
            </button>
          </div>
        </div>
        <div className='ProductDetailsContainerr'>
          <div className='ProductDetailsContainer1'>
            {data && <ProductDetailsSlider data={data['sliderImages']} frontImg={data['product']['frontImg']} frontImgAlt={data['product']['frontImgAlt']}/>}
          </div>
          <div className='ProductDetailsContainer2'>
            <div className='ProductDetailsContainer2Header'>
              <h1 className='ProductDetailsContainer2HeaderH1'>{data && data['product']['title']}</h1>
              <div className='ProductSliderStarsDiv'>
                <p className='ProductSliderStarsDivRatings'>{data && data['product']['rating']}</p>
                <div className='ProductSliderStarsDiv1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="ProductSliderStarIcon">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="ProductSliderStarIcon">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="ProductSliderStarIcon">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gold" class="ProductSliderStarIcon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gold" class="ProductSliderStarIcon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
              </div>
              <div className='ProductDetailsContainer2PriceDiv'>
                {data && data['product']['discountPrice'] ? 
                  <>
                    <p className='ProductDetailsContainer2PriceDis'>${data && data['product']['discountPrice']}</p>
                    <p className='ProductDetailsContainer2Price'>${data && data['product']['normalPrice']}</p>
                  </>
                :<p className='ProductDetailsContainer2PriceDis'>${data && data['product']['normalPrice']}</p>}
              </div>
              <div className='ProductDetailsContainerRightDiv1QuantityDiv'>
                <button className='ProdictContainerRightDiv1QuantityBtn' onClick={() => setQuantity(quantity - 1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartContainerRightDiv1QuantityBtnIcon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
                </button>
                <p className='ProductContainerRightDiv1QuantityP'>{quantity}</p>
                <button className='ProdictContainerRightDiv1QuantityBtn' onClick={() => setQuantity(quantity + 1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="CartContainerRightDiv1QuantityBtnIcon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>    
              </div>
              {data && <Link className='styleLink' to={`/store/${data['product']['store']['slug']}`}>Visit Store</Link>}
              <div className='ProductDetailsContainerBott1'>
                <div className='ProductDetailsContainerBot1'>
                  <button className='ProductDetailsContainerBotFavorite' onClick={() => AddToFavorite()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ProductDetailsContainerBotFavoriteIcon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                  <button className='ProductDetailsContainerBotAdd' onClick={() => AddToCart()}>
                    Add To Cart
                  </button>
                </div>
              </div>  
              {data && <Link className='styleLink1' to={`/store/${data['product']['store']['slug']}`}>Visit Store</Link>}
            </div>
          </div>
        </div>
        <div className='ProductDetailsContainer4'>
          <div className='ProductDetailsContainer2Body'>
            <h1 className='ProductDetailsContainer2BodyH1'>Description</h1>
            {data && data ? parse(data['product']['description']) : ''}
            {/* <img src={photo} className='ProductDetailsContainer2BodyImg'/>
            <h3 className='ProductDetailsContainer2BodyH3'>Duis pellentesque mi vitae justo suscipit luctus.</h3>
            <p className='ProductDetailsContainer2BodyP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nisi, efficitur et odio quis, faucibus facilisis leo. Nunc volutpat nisl ut sem pulvinar tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            <h2 className='ProductDetailsContainer2BodyH2'>Etiam risus neque, tristique mollis felis at.</h2>
            <div className='ProductDetailsContainer2BodyOlDiv'>
              <ol className='ProductDetailsContainer2BodyOl'>
                <li className='ProductDetailsContainer2BodyLi'>Duis laoreet sem a libero dapibus feugiat ut sed lacus.</li>
                <li className='ProductDetailsContainer2BodyLi'>Suspendisse commodo vulputate enim</li>
              </ol>
            </div>
            <div className='ProductDetailsContainer2BodyOlDiv'>
              <ul className='ProductDetailsContainer2BodyUl'>
                <li className='ProductDetailsContainer2BodyLi'>Mauris facilisis, nisi in convallis rutrum, ante purus pellentesque elit</li>
                <li className='ProductDetailsContainer2BodyLi'>Maecenas eget venenatis mi, hendrerit pellentesque lacus</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className='ProductDetailsContainer3'>
          {data && <ProductSlider title={'See Also'} data={data['seeAlso']}/>}
        </div>
      </div>
      {data && <Footer/>}
    </>
  )
}

export default ProductDetailsScreen