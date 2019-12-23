import React, { Component } from 'react'
import { Avatar } from 'antd'

import { api } from '../../services'
import './headerCustomer.component.scss'
import {
    AccountCustomer,
    Cart,
    Category,
    SearchCustomer
} from './components/'

export function HeaderCustomer({ }) {
    return (
        <div className="header-customer">
            <div className="top">
                <div className="space-start">

                </div>

                <div className="left">
                    <SearchCustomer className="search-customer" />
                </div>

                <div className="center">
                    <Avatar shape="square" className="logo" src="https://i.imgur.com/QUUigZo.png" />
                </div>

                <div className="right">
                    <AccountCustomer className="account-customer" />
                    <Cart className="cart" />
                </div>

                <div className="space-end">

                </div>
            </div>

            <div className="bottom">
                <Category />
            </div>
        </div>
    );
}

export default HeaderCustomer;
