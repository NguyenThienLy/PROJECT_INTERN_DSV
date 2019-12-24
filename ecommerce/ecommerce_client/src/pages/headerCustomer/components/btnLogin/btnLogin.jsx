import * as React from "react";
import { Button } from 'antd';

import "./btnLogin.scss";

export function BtnLogin({ showModal }) {
    return (
        <div className="btn-login">
            <Button type="primary" ghost onClick={showModal}>
                Log In
            </Button>
        </div>
    );
}

export default BtnLogin
