import * as React from "react";
import { Divider, Button } from 'antd';

import "./infoAccount.scss";

export function InfoAccount({ }) {
    return (
        <div className="info-account">
            <div className="container-content">
                <p className="title">
                    Name
               </p>
                <p className="content">Johnnie Kennedy</p>
            </div>
            <div className="container-content">
                <p className="title">
                    E-mail
               </p>
                <p className="content">johnniekennedy@gmail.com</p>
            </div>
        </div>
    );

}

export default InfoAccount














