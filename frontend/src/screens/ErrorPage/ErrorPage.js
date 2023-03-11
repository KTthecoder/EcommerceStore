import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navigation/Navbar'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <>
      <Navbar/>
      <div className='ErrorPageContainer'>
        <h1>404 Page Not Found</h1>
        <Link className='ErrorPageLink' to={'/'}>Go Back</Link>
      </div>
    </>
  )
}

export default ErrorPage