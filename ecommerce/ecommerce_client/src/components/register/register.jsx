import * as React from "react";
import { Link } from "react-router-dom"
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';

import "./register.scss";

export function Register({ visible, onOk, onCancel, showModalLogin }) {

    return (
        <div>
            <Modal
                className="register"
                title="Register"
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form>
                    <Form.Item className="input-content" label="NAME">
                        <Input className="input-login"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Enter your name..."
                        />
                    </Form.Item>

                    <Form.Item className="input-content" label="E-MAIL">
                        <Input className="input-login"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Enter your e-mail..."
                        />
                    </Form.Item>

                    <Form.Item className="input-content" label="PASSWORD">
                        <Input className="input-login"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Enter your password..."
                        />
                    </Form.Item>

                    <Form.Item className="footer">

                        <div className="top">
                            <p>By creating an account you agree to the</p>
                            <div className="bottom">
                                <Link to="/" className="link-primary">Terms of Service</Link>
                                <p>and</p>
                                <Link to="/" className="link-primary">Privacy Policy</Link>
                            </div>
                        </div>
                        
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>

                        <div className="bottom-register">
                            <p className="text">Do have an account? </p>
                            <Button className="register" type="link" onClick={showModalLogin}> Log In </Button>
                        </div>

                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Register
