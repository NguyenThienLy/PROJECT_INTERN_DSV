import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homePage/homePage'
import MyAccount from './pages/myAccount/myAccount'
import ProductInfo from './pages/productInfo/productInfo'
import ProductList from './pages/productList/productList'
import ShoppingCart from './pages/shoppingCart/shoppingCart'

import LoginSellerPage from './pages/seller/loginSellerPage/loginSellerPage'
import Order from './pages/seller/order/order'
import ProductAdd from './pages/seller/product/add/add'
import ProductMain from './pages/seller/product/main/main'
import ProductUpdate from './pages/seller/product/update/update'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/my-account' component={MyAccount} />
        <Route exact path='/product-info' component={ProductInfo} />
        <Route exact path='/product-list' component={ProductList} />
        <Route exact path='/shopping-cart' component={ShoppingCart} />

        <Route exact path='/login-seller-page' component={LoginSellerPage} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/product-add' component={ProductAdd} />
        <Route exact path='/product-main' component={ProductMain} />
        <Route exact path='/product-update' component={ProductUpdate} />
    </Switch>
)

export default Router