import React from 'react'
import AllCategoriesBlock from '../../components/AllCategoriesBlock'
import './AllCategoriesScreen.css'

const AllCategoriesScreen = () => {
  return (
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
  )
}

export default AllCategoriesScreen