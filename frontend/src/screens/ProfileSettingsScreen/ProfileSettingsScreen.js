import React, { useContext } from 'react'
import './ProfileSettingsScreen.css'
import { Link, NavLink } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../contexts/AuthProvider';

const ProfileSettingsScreen = () => {
    const { logoutUser } = useContext(AuthContext)
    return (
        <>
            <div className='ProfileContainer'>
                <div className='ProfileContainer1'>
                    <h1 className='ProfileContainer1H1'>Your Orders</h1>
                    <div className='ProfileContainer1Header'>
                        <NavLink className={({ isActive }) => (isActive ? 'ProfileContainer1HeaderBtn' : 'ProfileContainer1HeaderBtnDis')} to={'/profile'}>Orders</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'ProfileContainer1HeaderBtn' : 'ProfileContainer1HeaderBtnDis')} to={'/settings'}>Settings</NavLink>
                    </div>
                    <div className='ProfileContainer1Main'>
                        <button onClick={() => logoutUser()}>Logout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProfileSettingsScreen