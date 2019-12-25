import * as React from "react";
import { Link } from "react-router-dom"
import { Breadcrumb } from 'antd';

import "./breadcrumbMain.scss";

export function BreadcrumbMain({ visible, onOk, onCancel, showModalLogin }) {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>Ladies</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link href="">Dresses</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbMain