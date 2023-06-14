import React from 'react'
import AllCategoriesBlock from '../../components/AllCategoriesBlock'
import './AllCategoriesScreen.css'
import Footer from '../../components/Footer/Footer.js'
import Navbar from '../../navigation/Navbar'

const AllCategoriesScreen = () => {
  return (
    <>
      <Navbar/>
      <div className='AllCategoriesContainer'>
        <div className='AllCategoriesContainerTop'>
          <h1>All Categories</h1>
        </div>
        <div className='AllCategoriesContainer1'>
          <AllCategoriesBlock/>
          <AllCategoriesBlock/>
          <AllCategoriesBlock/>
          <AllCategoriesBlock/>
          <AllCategoriesBlock/>
          <AllCategoriesBlock/>
        </div>
      </div>
      <Footer/>
    </>
    
  )
}

export default AllCategoriesScreen