import React from 'react'
import './Footer.css'
import instaIcon from '../../static/icons/instagram.png'
import fbIcon from '../../static/icons/facebook.png'
import tiktokIcon from '../../static/icons/tiktok.png'
import twitterIcon from '../../static/icons/twitter.png'
import pinterestIcon from '../../static/icons/pinterest.png'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='NavbarContainerBot'>
            <div className='NavbarContainerBot1'>
                <div className='NavbarContainerBotText'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="NavbarContainerBotTextIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <p>FREE DELIVERY & RETURNS</p>
                </div>
                <div className='NavbarContainerBotText'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="NavbarContainerBotTextIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                    <p>100 FOR THE RETURN OF GOODS</p>
                </div>
                <div className='NavbarContainerBotText'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="NavbarContainerBotTextIcon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <p>HELP AND CONTACT</p>
                </div>
            </div>
        </div>
        <div className='FooterTop'>
            <h2 className='FooterTopH2'>Subscribe to the newsletter</h2>
            <p className='FooterTopP'>Don't miss out on new products</p>
            <input type='text' className='FooterTopInput' placeholder='Email' />
            <button className='FooterTopBtn'>Sign up</button>
        </div>
        <div className='FooterMid'> 
            <div className='FooterMidLeft'>
                <h2 className='FooterContH1'>market</h2>
                <div className='FooterMidLeftIcons'>
                    <a href='#' className='FooterMidLeftIconDiv'>
                        <img src={instaIcon} className='FooterMidLeftIcon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a> */}
                    </a>
                    <a href='#' className='FooterMidLeftIconDiv'>
                        <img src={fbIcon} className='FooterMidLeftIcon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}
                    </a>
                    <a href='#' className='FooterMidLeftIconDiv'>
                        <img src={twitterIcon} className='FooterMidLeftIcon'/>
                       {/* <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Pixel perfect - Flaticon</a> */}
                    </a>
                    <a href='#' className='FooterMidLeftIconDiv'>
                        <img src={tiktokIcon} className='FooterMidLeftIcon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/tiktok" title="tiktok icons">Tiktok icons created by Freepik - Flaticon</a> */}
                    </a>
                    <a href='#' className='FooterMidLeftIconDiv'>
                        <img src={pinterestIcon} className='FooterMidLeftIcon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/pinterest-logo" title="pinterest logo icons">Pinterest logo icons created by Hight Quality Icons - Flaticon</a> */}
                    </a>
                </div>
            </div>
        </div>
        <p className='FooterContainerBotP'>&copy; 2023 Created By Ksawery Tkaczyk</p>
    </div>
  )
}

export default Footer