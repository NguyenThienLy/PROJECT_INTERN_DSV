import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from 'antd';
import * as moment from 'moment';
import { api } from '../../../reducers';

import './loginSellerPage.component.scss'
import {
    LoginSeller
} from './components/';
import NameLocal from '../../../config/localStorage';

export function LoginSellerPage({
    seller,
    login
}) {
    let history = useHistory();

    useEffect(() => {
          // local storage not exist
          if (localStorage.getItem(NameLocal.EXPIRED_TOKEN_ADMIN) !== null &&
          localStorage.getItem(NameLocal.USER_INFO_ADMIN) !== null) {

          const expiredToken = JSON.parse(localStorage.getItem(NameLocal.EXPIRED_TOKEN_ADMIN));
          const userInfoLocal = JSON.parse(localStorage.getItem(NameLocal.USER_INFO_ADMIN));

          if (expiredToken &&
              moment(expiredToken).isAfter(moment())) {

                history.push('/seller/order-page');
          }
          else if (expiredToken &&
              !moment(expiredToken).isAfter(moment())) {
                  
              localStorage.removeItem(NameLocal.EXPIRED_TOKEN_ADMIN);
              localStorage.removeItem(NameLocal.TOKEN_JWT_ADMIN);
              localStorage.removeItem(NameLocal.USER_INFO_ADMIN);
          }
      }
    })

    return (
        <div className="login-seller-page">
            <Link to="/"> <Avatar shape="square" className="logo" src="https://i.imgur.com/QUUigZo.png" /> </Link>
            <LoginSeller
                login={login}
                seller={seller}
            />
        </div >
    );
}

export default LoginSellerPage;
