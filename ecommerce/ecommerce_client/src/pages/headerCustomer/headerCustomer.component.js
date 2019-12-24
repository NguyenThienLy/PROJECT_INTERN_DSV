import React, { useState } from 'react'
import { Avatar, Button } from 'antd'

import { api } from '../../services'
import './headerCustomer.component.scss'
import {
    AccountCustomer,
    Cart,
    Category,
    SearchCustomer,
    BtnLogin
} from './components'
import {
    LoginCustomer
} from '../../components'

export function HeaderCustomer({ }) {
    const [isLogin, setIsLogin] = useState(false)
    const [isShowModalLogin, setShowModalLogin] = useState(false)

    const showModalLogin = () => {
        console.log("showmodal")
        setShowModalLogin(true)
    }

    const handleOkLogin = e => {
        setShowModalLogin(false)
    }

    const handleCancelLogin = e => {
        setShowModalLogin(false)
    }

    return (
        <div className="header-customer">
            <LoginCustomer
                visible={isShowModalLogin}
                onOk={handleOkLogin}
                onCancel={handleCancelLogin} />

            <div className="top">
                <div className="space-start" />

                <div className="left">
                    <SearchCustomer className="search-customer" />
                </div>

                <div className="center">
                    <Avatar shape="square" className="logo" src="https://i.imgur.com/QUUigZo.png" />
                </div>

                <div className="right">
                    {isLogin && <AccountCustomer className="account-customer" />}

                    {!isLogin &&
                        <div className="log-in">
                            <Button type="link" ghost>
                                Register
                            </Button>

                            <BtnLogin className="btn-login" showModal={showModalLogin} />
                        </div>
                    }

                    <Cart className="cart" />
                </div>

                <div className="space-end" />
            </div>

            <div className="bottom">
                <Category />
            </div>
        </div>
    );
}

export default HeaderCustomer
