import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllCategoriesScreen from '../screens/AllCategoriesScreen/AllCategoriesScreen'
import CartScreen from '../screens/CartScreen/CartScreen'
import ConfirmOrderScreen from '../screens/ConfirmOrderScreen/ConfirmOrderScreen'
import EditShippingInfoScreen from '../screens/EditShippingInfoScreen/EditShippingInfoScreen'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen'
import FoundProductsScreen from '../screens/FoundProductsScreen/FoundProductsScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import OrderInfoScreen from '../screens/OrderInfoScreen/OrderInfoScreen'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen'
import ProductsInCategoryScreen from '../screens/ProductsInCategoryScreen/ProductsInCategoryScreen'
import ProductsInStoreScreen from '../screens/ProductsInStoreScreen/ProductsInStoreScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen/ProfileSettingsScreen'
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
      <Route exact path='/search/' element={<FoundProductsScreen/>} />
      <Route exact path='/category/:slug' element={<ProductsInCategoryScreen/>} />
      <Route exact path='/store/:slug' element={<ProductsInStoreScreen/>} />
      <Route exact path='/all-categories' element={<AllCategoriesScreen/>} />
      <Route path='*' element={<ErrorPage/>} />

      {/* With Authentication */}
      <Route exact path='/cart' element={<PrivateRoute/>}>
        <Route exact path='/cart' element={<CartScreen/>} />
      </Route>
      <Route exact path='/shipping-info' element={<PrivateRoute/>}>
        <Route exact path='/shipping-info' element={<ShippingScreen/>} />
      </Route>
      <Route exact path='/shipping-info/edit' element={<PrivateRoute/>}>
        <Route exact path='/shipping-info/edit' element={<EditShippingInfoScreen/>} />
      </Route>
      <Route exact path='/payment' element={<PrivateRoute/>}>
        <Route exact path='/payment' element={<PaymentScreen/>} />
      </Route>
      <Route exact path='/confirm-order' element={<PrivateRoute/>}>
        <Route path='/confirm-order/:orderId' element={<ConfirmOrderScreen/>} />
      </Route>
      <Route exact path='/favorite' element={<PrivateRoute/>}>
        <Route exact path='/favorite' element={<FavoriteScreen/>} />
      </Route>
      <Route exact path='/profile' element={<PrivateRoute/>}>
        <Route exact path='/profile' element={<ProfileScreen/>} />
      </Route>
      <Route exact path='/settings' element={<PrivateRoute/>}>
        <Route exact path='/settings' element={<ProfileSettingsScreen/>} />
      </Route>
      <Route exact path='/order/:orderId' element={<PrivateRoute/>}>
        <Route exact path='/order/:orderId' element={<OrderInfoScreen/>} />
      </Route>
    </Routes>
  )
}

export default Navigation