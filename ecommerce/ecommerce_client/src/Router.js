import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage.container';
import Profile from './pages/profile/profile.component';
import ProductInfo from './pages/productInfo/productInfo.container';
import ProductList from './pages/productList/productList.container';
import ShoppingCart from './pages/shoppingCart/shoppingCart.container';

import LoginSellerPage from './pages/seller/loginSellerPage/loginSellerPage.container';
import OrderPage from './pages/seller/orderPage/orderPage.component';
import ProductAdd from './pages/seller/product/add/add.container';
import ProductMain from './pages/seller/product/main/main.container';
import ProductUpdate from './pages/seller/product/update/update.component';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/product-info/:slug' component={ProductInfo} />
        <Route exact path='/product-list/:slugCategory' component={ProductList}></Route>
        <Route exact path='/product-list/:slugCategory/:slugSubCategory' component={ProductList}></Route>
        <Route exact path='/shopping-cart' component={ShoppingCart} />

        <Route exact path='/seller/login-seller' component={LoginSellerPage} />
        <Route exact path='/seller/order-page' component={OrderPage} />
        <Route exact path='/seller/product-add' component={ProductAdd} />
        <Route exact path='/seller/product-main' component={ProductMain} />
        <Route exact path='/seller/product-update/:slug' component={ProductUpdate} />
    </Switch>
)

export default Router