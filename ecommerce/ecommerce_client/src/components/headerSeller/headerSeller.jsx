import * as React from "react";

import "./headerSeller.scss";
import { Row, Col, Avatar, Icon, Badge } from 'antd'

export function HeaderSeller({
    namePage
 }) {

    return (
        <div className="header-seller">
            <Col span={6} className="txt-primary">
                {namePage}
                </Col>

            <Col span={8} offset={10}>
                <Col span={5}>
                    <Avatar className="avt-seller" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>

                <Col span={13} className="name">Lucile Bush</Col>

                <Col span={3} className="container-badge">
                    <Badge count={100} overflowCount={9}>
                    <span className="container-icon"><Icon type="mail" /></span>
                    </Badge>
                </Col>

                <Col span={3} className="container-badge">
                    <Badge count={100} overflowCount={9}>
                        <span className="container-icon"><Icon type="bell" /></span>
                    </Badge>
                </Col>
            </Col>
        </div>
    );
}

export default HeaderSeller
