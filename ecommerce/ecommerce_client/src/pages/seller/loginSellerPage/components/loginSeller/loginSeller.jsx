import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Alert } from 'antd';
import { Link, useHistory } from 'react-router-dom';

import './loginSeller.scss'

export function LoginSeller({
    seller,
    login
}) {
    const [errMessage, setErrMessage] = useState("");
    let history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        login(
            e.target.email.value,
            e.target.password.value
        );
    }

    useEffect(() => {
        // login fail
        if (!seller.fetchingLogin &&
            seller.isFetchLoginSuccess &&
            seller.dataLogin !== null &&
            !seller.dataLogin.isLogin) {

            setErrMessage(seller.dataLogin.message);
        }
        // login sucess
        else if (!seller.fetchingLogin &&
            seller.isFetchLoginSuccess &&
            seller.dataLogin !== null &&
            seller.dataLogin.isLogin) {
            history.push("/seller/order-page");
        }
    });

    return (
        <div className="login-seller">
            {/* {islogin && <Redirect to="/seller/order-page" />} */}

            <p className="txt-primary">Log in</p>

            <Form onSubmit={handleFormSubmit}>
                <Form.Item className="input-content" label="EMAIL">
                    <Input className="input-login"
                        prefix={<Icon type="user" />}
                        placeholder="email@sample.com"
                        name="email"
                    />
                </Form.Item>

                <Form.Item className="input-content" label="PASSWORD">
                    <Input className="input-login"
                        prefix={<Icon type="lock" />}
                        type="password"
                        placeholder="Enter password"
                        name="password"
                    />
                </Form.Item>

                <Form.Item className="footer">
                    <Button type="primary" htmlType="submit" className="btn-primary">
                        Log in
                    </Button>

                    <Button type="link" className="btn-link" >Forgot password</Button>

                    {errMessage != "" &&
                        <Alert className="alert-content" closeText="Close Now" message={errMessage} type="error" />}
                </Form.Item>
            </Form>
        </div >
    );
}

export default LoginSeller;
