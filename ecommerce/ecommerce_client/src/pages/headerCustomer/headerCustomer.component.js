import React, { useState, useEffect } from 'react';
import { Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import * as _ from 'lodash';

import { api } from '../../services';
import './headerCustomer.component.scss';
import {
    AccountCustomer,
    Cart,
    Category,
    SearchCustomer,
    BtnLogin
} from './components';
import {
    LoginCustomer,
    Register,
    ForgotPassword
} from '../../components';
import NameLocal from '../../config/localStorage';

export function HeaderCustomer({
    category,
    customer,
    getListCategory,
    login,
    register,
    logout
}) {
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [isShowModalLogin, setShowModalLogin] = useState(false);
    const [isShowModalRegister, setShowModalRegister] = useState(false);
    const [isShowModalForgotPassword, setShowModalForgotPassword] = useState(false);

    const showModalLogin = () => {
        setShowModalLogin(true);
        setShowModalRegister(false);
        setShowModalForgotPassword(false);
    }

    const handleOkLogin = e => {
        setShowModalLogin(false);
        setIsLogin(true);
    }

    const handleCancelLogin = e => {
        setShowModalLogin(false);
    }

    const showModalRegister = () => {
        setShowModalRegister(true);
        setShowModalLogin(false);
        setShowModalForgotPassword(false);
    }

    const handleOkRegister = e => {
        setShowModalRegister(false);
    }

    const handleCancelRegister = e => {
        setShowModalRegister(false);
    }

    const showModalForgotPassword = () => {
        setShowModalForgotPassword(true);
        setShowModalRegister(false);
        setShowModalLogin(false);
    }

    const handleOkForgotPassword = e => {
        setShowModalForgotPassword(false);
    }

    const handleCancelForgotPassword = e => {
        setShowModalForgotPassword(false);
    }

    const onLogout = () => {
        setIsLogin(false);
        setUserInfo({});
    }

    useEffect(() => {
        // load list category
        getListCategory();

        // local storage not exist
        if (localStorage.getItem(NameLocal.EXPIRED_TOKEN) !== null &&
            localStorage.getItem(NameLocal.USER_INFO) !== null) {

            const expiredToken = JSON.parse(localStorage.getItem(NameLocal.EXPIRED_TOKEN));
            const userInfoLocal = JSON.parse(localStorage.getItem(NameLocal.USER_INFO));

            if (expiredToken &&
                moment(expiredToken).isAfter(moment()) &&
                !_.isEqual(userInfoLocal, userInfo)) {

                setIsLogin(true);
                setUserInfo(userInfoLocal);
            }
            else if (expiredToken &&
                !_.isEqual({}, userInfo) &&
                !moment(expiredToken).isAfter(moment())) {

                localStorage.removeItem(NameLocal.EXPIRED_TOKEN);
                localStorage.removeItem(NameLocal.TOKEN_JWT);
                localStorage.removeItem(NameLocal.USER_INFO);

                setIsLogin(false);
                setUserInfo({});
            }
        }
        else if (!_.isEqual({}, userInfo)) {
            setIsLogin(false);
            setUserInfo({});
        }
    });

    return (
        <div className="header-customer">
            <LoginCustomer
                visible={isShowModalLogin}
                onOk={handleOkLogin}
                onCancel={handleCancelLogin}
                login={login}
                customer={customer}
                showModalRegister={showModalRegister}
                showModalForgotPassword={showModalForgotPassword} />

            <Register
                visible={isShowModalRegister}
                onOk={handleOkRegister}
                register={register}
                customer={customer}
                onCancel={handleCancelRegister}
                showModalLogin={showModalLogin} />

            <ForgotPassword
                visible={isShowModalForgotPassword}
                onOk={handleOkForgotPassword}
                onCancel={handleCancelForgotPassword}
                showModalLogin={showModalLogin} />

            <div className="top">
                <div className="left">
                    <SearchCustomer className="search-customer" />
                </div>

                <div className="center">
                    <Link to="/"> <Avatar shape="square" className="logo" src="https://i.imgur.com/QUUigZo.png" /> </Link>
                </div>

                <div className="right">
                    {isLogin && <AccountCustomer customer={customer} onLogout={onLogout} logout={logout} userInfo={userInfo} className="account-customer" />}

                    {!isLogin &&
                        <div className="log-in">
                            <Button type="link" ghost onClick={showModalRegister}>
                                Register
                            </Button>

                            <BtnLogin className="btn-login" showModal={showModalLogin} />
                        </div>
                    }

                    <Link to="/shopping-cart"><Cart className="cart" /></Link>
                </div>
            </div>

            <div className="bottom">
                <Category category={category}/>
            </div>
        </div>
    );
}

export default HeaderCustomer
