import React from 'react'
import './FiltersMobile.css'

const FiltersMobile = ({show, setShow}) => {
  return (
    <div className='FiltersMobileContainer' style={show ? {display: 'flex'} : {display: 'none'}}>
        <div className='FiltersMobileContainer1'>
            <div className='FiltersMobileHeader'>
                <p className='FiltersMobileHeaderText'>Sorting Methods</p>
                <button onClick={() => setShow(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="FiltersMobileHeaderIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className='FiltersMobileDiv'>
                <div className='FiltersMobileDiv1'>
                    <button className='FiltersMobileDivBtn'>From High To Low Price</button>
                    <button className='FiltersMobileDivBtn'>From Low To High Price</button>
                    <button className='FiltersMobileDivBtn'>At a Discount</button>
                </div>
            </div>
            <div className='FiltersMobileHeader'>
                <p className='FiltersMobileHeaderText'>Condition</p>
            </div>
            <div className='FiltersMobileDivNext'>
                <button className='FiltersMobileDivBtnNext'>New</button>
                <button className='FiltersMobileDivBtnNext'>Used</button>
            </div>
            <div className='FiltersMobileHeader'>
                <p className='FiltersMobileHeaderText'>Categories</p>
            </div>
            <div className='FiltersMobileDivNext'>
                <button className='FiltersMobileDivBtnNext'>Technology</button>
                <button className='FiltersMobileDivBtnNext'>Groceries</button>
                <button className='FiltersMobileDivBtnNext'>Clothes</button>
                <button className='FiltersMobileDivBtnNext'>Technology</button>
                <button className='FiltersMobileDivBtnNext'>Groceries</button>
                <button className='FiltersMobileDivBtnNext'>Clothes</button>
                <button className='FiltersMobileDivBtnNext'>Technology</button>
                <button className='FiltersMobileDivBtnNext'>Groceries</button>
                <button className='FiltersMobileDivBtnNext'>Clothes</button>
            </div>
            <div className='FiltersMobileHeader'>
                <p className='FiltersMobileHeaderText'>Product Reviews</p>
            </div>
            <div className='FiltersMobileDivNext1'>
                <button className='FiltersMobileDivBtnNext'>
                    5
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="FiltersMobileDivBtnNextIcon">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button className='FiltersMobileDivBtnNext'>
                    More Then 4 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="FiltersMobileDivBtnNextIcon">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button className='FiltersMobileDivBtnNext'>
                    More Then 3 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="FiltersMobileDivBtnNextIcon">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button className='FiltersMobileDivBtnNext'>
                    More Then 2 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="FiltersMobileDivBtnNextIcon">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button className='FiltersMobileDivBtnNext'>
                    More Then 1 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="FiltersMobileDivBtnNextIcon">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className='FiltersMobileApplyBtnDiv'>
                <button className='FiltersMobileApplyBtn'>
                    Apply Filters
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default FiltersMobile