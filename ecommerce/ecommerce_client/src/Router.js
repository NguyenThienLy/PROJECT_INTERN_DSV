import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homePage/homePage.component'
import Profile from './pages/profile/profile.component'
import ProductInfo from './pages/productInfo/productInfo.component'
import ProductList from './pages/productList/productList.component'
import ShoppingCart from './pages/shoppingCart/shoppingCart.component'

import LoginSellerPage from './pages/seller/loginSellerPage/loginSellerPage.component'
import Order from './pages/seller/order/order.component'
import ProductAdd from './pages/seller/product/add/add.component'
import ProductMain from './pages/seller/product/main/main.component'
import ProductUpdate from './pages/seller/product/update/update.component'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/profile' component={Profile} />
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