import * as React from "react";
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';

import "./loginCustomer.scss";

export function LoginCustomer({ visible, onOk, onCancel }) {

    return (
        <div>
            <Modal
                className="login-customer"
                title="Log In"
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form className="login-form">
                    <Form.Item className="input-content" label="E-MAIL">
                        <Input className="input-login"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item className="input-content" label="PASSWORD">
                        <Input className="input-login"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item className="footer-login">
                        <Checkbox>Remember me</Checkbox>

                        <Button className="forgot-password" type="link"> Forgot password</Button>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>

                        <div className="bottom">
                            <p className="text">Don't have an account? </p>
                            <Button className="register" type="link"> Register </Button>
                        </div>

                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default LoginCustomer
