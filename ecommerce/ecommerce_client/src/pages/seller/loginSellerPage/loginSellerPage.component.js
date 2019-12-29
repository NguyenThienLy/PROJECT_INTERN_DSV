import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

import { api } from '../../../reducers'

import './loginSellerPage.component.scss'
import {
    LoginSeller
} from './components/'

export function LoginSellerPage({ }) {

    return (
        <div className="login-seller-page">
            <Link to="/"> <Avatar shape="square" className="logo" src="https://i.imgur.com/QUUigZo.png" /> </Link>
            <LoginSeller />
        </div >
    );
}

export default LoginSellerPage;
