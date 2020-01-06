import React, { useState, useEffect } from 'react';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Row, Col, Avatar, Icon, Badge, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import "./headerSeller.scss";
import NameLocal from '../../config/localStorage';

export function HeaderSeller({
    namePage,
    logout
}) {
    let history = useHistory();
    const [userInfo, setUserInfo] = useState({});

    const onLogout = () => {
        logout();
        history.push('/seller/login-seller');
    }

    useEffect(() => {
        // local storage not exist
        if (localStorage.getItem(NameLocal.EXPIRED_TOKEN_ADMIN) !== null &&
            localStorage.getItem(NameLocal.USER_INFO_ADMIN) !== null) {

            const expiredToken = JSON.parse(localStorage.getItem(NameLocal.EXPIRED_TOKEN_ADMIN));
            const userInfoLocal = JSON.parse(localStorage.getItem(NameLocal.USER_INFO_ADMIN));

            if (expiredToken &&
                moment(expiredToken).isAfter(moment()) &&
                !_.isEqual(userInfoLocal, userInfo)) {

                setUserInfo(userInfoLocal);
            }
            else if (expiredToken &&
                !_.isEqual({}, userInfo) &&
                !moment(expiredToken).isAfter(moment())) {

                localStorage.removeItem(NameLocal.EXPIRED_TOKEN_ADMIN);
                localStorage.removeItem(NameLocal.TOKEN_JWT_ADMIN);
                localStorage.removeItem(NameLocal.USER_INFO_ADMIN);

                setUserInfo({});
                history.push('/seller/login-seller');
            }
        }
        else if (!_.isEqual({}, userInfo)) {
            setUserInfo({});
            history.push('/seller/login-seller');
        }
        else {
            history.push('/seller/login-seller');
        }
    });

    return (
        <div className="header-seller">
            <Col span={6} className="txt-primary">
                {namePage}
            </Col>

            <Col span={8} offset={10}>
                <Col span={5}>
                    <Avatar className="avt-seller" src={userInfo.avatar} />
                </Col>

                <Col span={12} className="name">{userInfo.name}</Col>

                <Col span={3} className="container-badge">
                    <Badge count={100} overflowCount={9}>
                        <span className="container-icon"><Icon type="mail" /></span>
                    </Badge>
                </Col>

                <Col span={3} offset={1} className="container-badge">
                    <Button 
                    className="btn-logout" 
                     type="primary" 
                     shape="circle" 
                     onClick={onLogout}
                     icon="logout" />
                </Col>
            </Col>
        </div>
    );
}

export default HeaderSeller
