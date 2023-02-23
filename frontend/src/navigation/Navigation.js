import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllCategoriesScreen from '../screens/AllCategoriesScreen/AllCategoriesScreen'
import CartScreen from '../screens/CartScreen/CartScreen'
import ConfirmOrderScreen from '../screens/ConfirmOrderScreen/ConfirmOrderScreen'
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen'
import FoundProductsScreen from '../screens/FoundProductsScreen/FoundProductsScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen'
import ProductsInCategoryScreen from '../screens/ProductsInCategoryScreen/ProductsInCategoryScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import ShippingScreen from '../screens/ShippingScreen/ShippingScreen'


function Navigation() {
  return (
    <Routes>
      <Route exact path='/' element={<HomeScreen/>} />
      <Route exact path='/product/:slug' element={<ProductDetailsScreen/>} />
      <Route exact path='/search/:slug' element={<FoundProductsScreen/>} />
      <Route exact path='/category/:slug' element={<ProductsInCategoryScreen/>} />
      <Route exact path='/all-categories' element={<AllCategoriesScreen/>} />
      <Route exact path='/cart' element={<CartScreen/>} />
      <Route exact path='/shipping-info' element={<ShippingScreen/>} />
      <Route exact path='/payment' element={<PaymentScreen/>} />
      <Route exact path='/confirm-order' element={<ConfirmOrderScreen/>} />
      <Route exact path='/favorite' element={<FavoriteScreen/>} />
      <Route exact path='/profile' element={<ProfileScreen/>} />
    </Routes>
  )
}

export default Navigation