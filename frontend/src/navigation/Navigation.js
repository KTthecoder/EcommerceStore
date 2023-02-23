import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import AllCategoriesScreen from '../screens/AllCategoriesScreen/AllCategoriesScreen'
import CartScreen from '../screens/CartScreen/CartScreen'
import ConfirmOrderScreen from '../screens/ConfirmOrderScreen/ConfirmOrderScreen'
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen'
import FoundProductsScreen from '../screens/FoundProductsScreen/FoundProductsScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen'
import ProductsInCategoryScreen from '../screens/ProductsInCategoryScreen/ProductsInCategoryScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen'
import ShippingScreen from '../screens/ShippingScreen/ShippingScreen'
import PrivateRoute from '../utils/PrivateRoute'


function Navigation() {
  return (
    <Routes>
      {/* Without Authentication */}
      <Route exact path='/login' element={<LoginScreen/>} />
      <Route exact path='/register' element={<RegisterScreen/>} />
      <Route exact path='/' element={<HomeScreen/>} />
      <Route exact path='/product/:slug' element={<ProductDetailsScreen/>} />
      <Route exact path='/search/:slug' element={<FoundProductsScreen/>} />
      <Route exact path='/category/:slug' element={<ProductsInCategoryScreen/>} />
      <Route exact path='/all-categories' element={<AllCategoriesScreen/>} />

      {/* With Authentication */}
      <Route exact path='/cart' element={<PrivateRoute/>}>
        <Route exact path='/cart' element={<CartScreen/>} />
      </Route>
      
      <Route exact path='/shipping-info' element={<ShippingScreen/>} />
      <Route exact path='/payment' element={<PaymentScreen/>} />
      <Route exact path='/confirm-order' element={<ConfirmOrderScreen/>} />
      <Route exact path='/favorite' element={<FavoriteScreen/>} />
      <Route exact path='/profile' element={<ProfileScreen/>} />
    </Routes>
  )
}

export default Navigation