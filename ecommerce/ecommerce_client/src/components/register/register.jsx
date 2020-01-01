import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import { Modal, Form, Icon, Input, Button, Checkbox, Alert } from 'antd';

import "./register.scss";

export function Register({
    visible,
    onOk,
    onCancel,
    register,
    customer,
    showModalLogin
}) {
    const initialInputValue = {
        name: "",
        email: "",
        password: "",
    };

    const [message, setMessage] = useState("");
    const [typeAlert, setTypeAlert] = useState("");
    const [
        { name, email, password },
        setInputValue
    ] = useState(initialInputValue);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        register({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        });
    }

    const onChange = e => {
        const { name, value } = e.target;
        setInputValue(prevState => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        // login sucess
        if (!customer.creating &&
            customer.isCreateSuccess &&
            !_.isEqual(initialInputValue, { name, email, password })) {

            setInputValue(initialInputValue);
            setMessage("Success, congratulations!");
            setTypeAlert("success");
        }
        // login fail
        else if (!customer.creating &&
            !customer.isCreateSuccess) {
            setMessage("Failed, try again!");
            setTypeAlert("error");
        }
    });

    return (
        <div>
            <Modal
                className="register"
                title="Register"
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form onSubmit={handleFormSubmit}>
                    <Form.Item className="input-content" label="NAME">
                        <Input className="input-login"
                            prefix={<Icon type="user" />}
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Enter your name..."
                        />
                    </Form.Item>

                    <Form.Item className="input-content" label="E-MAIL">
                        <Input className="input-login"
                            prefix={<Icon type="lock" />}
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your e-mail..."
                        />
                    </Form.Item>

                    <Form.Item className="input-content" label="PASSWORD">
                        <Input className="input-login"
                            prefix={<Icon type="lock" />}
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
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

                        {message != "" &&
                            <Alert className="alert-content" closeText="Close Now" message={message} type={typeAlert} />}

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
