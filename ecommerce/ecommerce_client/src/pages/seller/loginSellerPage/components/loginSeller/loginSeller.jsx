import React, { useState } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import './loginSeller.scss'

export function LoginSeller({ }) {

    return (
        <div className="login-seller">
            <p className="txt-primary">Log in</p>

            <Form>
                <Form.Item className="input-content" label="EMAIL">
                    <Input className="input-login"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="email@sample.com"
                    />
                </Form.Item>

                <Form.Item className="input-content" label="PASSWORD">
                    <Input className="input-login"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Enter password"
                    />
                </Form.Item>

                <Form.Item className="footer">
                    <Button type="primary" htmlType="submit" className="btn-primary">
                        Log in
                    </Button>

                    <Button type="link" className="btn-link">Forgot password</Button>
                </Form.Item>
            </Form>
        </div >
    );
}

export default LoginSeller;
