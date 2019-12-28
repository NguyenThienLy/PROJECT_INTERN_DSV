import * as React from "react";
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';

import "./formChangePassword.scss";

export function FormChangePassword({ }) {
    return (
        <div className="form-change-password">
            <Form>
                <Form.Item className="input-content" label="CURRENT PASSWORD">
                    <Input className="input-login"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Enter your password..."
                    />
                </Form.Item>

                <Form.Item className="input-content" label="NEW PASSWORD">
                    <Input className="input-login"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Enter your password..."
                    />
                </Form.Item>

                <Form.Item className="input-content" label="RE-ENTER PASSWORD">
                    <Input className="input-login"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Enter your password..."
                    />
                </Form.Item>

                <Form.Item className="footer">
                    <Button type="primary" htmlType="submit" className="primary-form-button">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}

export default FormChangePassword














