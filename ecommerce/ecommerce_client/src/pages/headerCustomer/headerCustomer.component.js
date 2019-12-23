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

class HeaderCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    async componentDidMount() {

    }
    render() {
        return (
            <div className="header-customer">
                <div className="top">
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
                </div>

                <div className="bottom">
                    <Category />
                </div>

            </div>
        );
    }
}

export default HeaderCustomer;
