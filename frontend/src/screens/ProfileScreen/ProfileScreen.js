import React from 'react'
import './ProfileScreen.css'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

const ProfileScreen = () => {
  return (
    <>
        <div className='ProfileContainer'>
            <div className='ProfileContainer1'>
                <h1 className='ProfileContainer1H1'>Your Orders</h1>
                <div className='ProfileContainer1Header'>
                    <Link className='ProfileContainer1HeaderBtn' to={'/profile'}>Orders</Link>
                    <Link className='ProfileContainer1HeaderBtn' to={'/profile/settings'}>Settings</Link>
                </div>
                <div className='ProfileContainer1Main'>
                    <div className='ProfileContainer1MainBlock1'>
                        <h1 className='ProfileContainer1MainBlockH1Top'>Order ID</h1>
                        <p className='ProfileContainer1MainBlockPTop'>Data Ordered</p>
                        <p className='ProfileContainer1MainBlockPriceTop'>Price</p>
                        <button className='ProfileContainer1MainBlockBtnTop'>Action</button>
                    </div>
                    <Link to={'/profile'} className='ProfileContainer1MainBlock'>
                        <div className='ProfileContainer1MainBlockDiv'>
                            <h1 className='ProfileContainer1MainBlockH1'>Order #325</h1>
                            <p className='ProfileContainer1MainBlockP'>2023-03-21</p>
                        </div>
                        <div className='ProfileContainer1MainBlockDiv1'>
                            <p className='ProfileContainer1MainBlockPrice'>$578.97</p>
                            <button className='ProfileContainer1MainBlockBtn'>See Order</button>
                        </div>
                    </Link>
                    <Link to={'/profile'} className='ProfileContainer1MainBlock'>
                        <div className='ProfileContainer1MainBlockDiv'>
                            <h1 className='ProfileContainer1MainBlockH1'>Order #325</h1>
                            <p className='ProfileContainer1MainBlockP'>2023-03-21</p>
                        </div>
                        <div className='ProfileContainer1MainBlockDiv1'>
                            <p className='ProfileContainer1MainBlockPrice'>$578.97</p>
                            <button className='ProfileContainer1MainBlockBtn'>See Order</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default ProfileScreen