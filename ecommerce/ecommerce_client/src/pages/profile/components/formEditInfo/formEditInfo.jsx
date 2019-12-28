import * as React from "react";
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';

import "./formEditInfo.scss";

export function FormEditInfo({ changeTabInfo }) {
    return (
        <div className="form-edit-info">
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
                        type="password"
                        placeholder="Enter your email..."
                    />
                </Form.Item>

                <Form.Item className="footer">
                    <Button type="link" className="secondary-form-button" onClick={() => changeTabInfo("1")}>
                        Cancel
                    </Button>

                    <Button type="primary" htmlType="submit" className="primary-form-button" onClick={() => changeTabInfo("1")}>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}

export default FormEditInfo














