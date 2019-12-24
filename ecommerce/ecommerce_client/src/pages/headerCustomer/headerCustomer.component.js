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
    LoginCustomer,
    Register,
    ForgotPassword
} from '../../components'

export function HeaderCustomer({ }) {
    const [isLogin, setIsLogin] = useState(false)
    const [isShowModalLogin, setShowModalLogin] = useState(false)
    const [isShowModalRegister, setShowModalRegister] = useState(false)
    const [isShowModalForgotPassword, setShowModalForgotPassword] = useState(false)

    const showModalLogin = () => {
        setShowModalLogin(true)
        setShowModalRegister(false)
        setShowModalForgotPassword(false)
    }

    const handleOkLogin = e => {
        setShowModalLogin(false)
    }

    const handleCancelLogin = e => {
        setShowModalLogin(false)
    }

    const showModalRegister = () => {
        setShowModalRegister(true)
        setShowModalLogin(false)
        setShowModalForgotPassword(false)
    }

    const handleOkRegister = e => {
        setShowModalRegister(false)
    }

    const handleCancelRegister = e => {
        setShowModalRegister(false)
    }

    const showModalForgotaPassword = () => {
        setShowModalForgotPassword(true)
        setShowModalRegister(false)
        setShowModalLogin(false)
    }

    const handleOkForgotaPassword = e => {
        setShowModalForgotPassword(false)
    }

    const handleCancelForgotaPassword = e => {
        setShowModalForgotPassword(false)
    }

    return (
        <div className="header-customer">
            <LoginCustomer
                visible={isShowModalLogin}
                onOk={handleOkLogin}
                onCancel={handleCancelLogin}
                showModalRegister={showModalRegister} />

            <Register
                visible={isShowModalRegister}
                onOk={handleOkRegister}
                onCancel={handleCancelRegister}
                showModalLogin={showModalLogin} />

            <Register
                visible={isShowModalForgotPassword}
                onOk={handleOkForgotPassword}
                onCancel={handleCancelForgotPassword}
                showModalLogin={showModalLogin} />

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
                            <Button type="link" ghost onClick={showModalRegister}>
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
