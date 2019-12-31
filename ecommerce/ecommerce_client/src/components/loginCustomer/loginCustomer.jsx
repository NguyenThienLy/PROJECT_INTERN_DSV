import React, { useState, useEffect } from 'react';

import { Modal, Form, Icon, Input, Button, Checkbox, Alert } from 'antd';

import "./loginCustomer.scss";

export function LoginCustomer({ visible, onOk, onCancel, login, resultLogin, showModalRegister, showModalForgotPassword }) {
    const [errMessage, setErrMessage] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        login(
            e.target.email.value,
            e.target.password.value
        );
    }

    useEffect(() => {
        if (resultLogin.data && !resultLogin.data.isLogin) {
            setErrMessage(resultLogin.data.message);
        }
    });

    return (
        <div>
            <Modal
                className="login-customer"
                title="Log In"
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form onSubmit={handleFormSubmit}>
                    <Form.Item className="input-content" label="E-MAIL">
                        <Input className="input-login"
                            prefix={<Icon type="email" />}
                            placeholder="Enter your e-mail"
                            name="email"
                        />
                    </Form.Item>

                    <Form.Item className="input-content" label="PASSWORD">
                        <Input className="input-login"
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                        />
                    </Form.Item>

                    <Form.Item className="footer">
                        <Checkbox>Remember me</Checkbox>

                        <Button className="forgot-password" type="link" onClick={showModalForgotPassword}> Forgot password</Button>

                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            Log in
                        </Button>

                        {errMessage != "" &&
                            <Alert className="alert-content" closeText="Close Now" message={errMessage} type="error" />}

                        <div className="bottom">
                            <p className="text">Don't have an account? </p>
                            <Button className="register" type="link" onClick={showModalRegister}> Register </Button>
                        </div>

                    </Form.Item>
                </Form>
            </Modal>
        </div >
    );
}

export default LoginCustomer
