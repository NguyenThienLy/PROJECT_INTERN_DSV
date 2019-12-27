import React, { useState, useEffect } from 'react'
import { Row, Col, Rate, Button, Avatar, Divider, Descriptions } from 'antd'

import {
    NumbericUpDown
} from '../../../../components'
import './infoProduct.scss'

export function InfoProduct({ }) {

    useEffect(() => {

    });

    return (
        <div className="info-product">
            <Row>
                <Row>
                    <Col span={24}>
                        <p className="header">Collete Stretch Linen Minidress</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <p className="price">$69.00</p>
                    </Col>
                </Row>

                <Row type="flex" align="middle">
                    <Col span={7}>
                        <Rate />
                    </Col>

                    <Col span={7}>
                        <p className="review">0 Review</p>
                    </Col>
                </Row>

                <Row className="row-container">
                    <Col span={24} >
                        <p className="name-props">Size</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={3}>
                        <Button className="btn-size" type="primary" ghost>S</Button>
                    </Col>

                    <Col span={3}>
                        <Button className="btn-size" type="primary" ghost>M</Button>
                    </Col>

                    <Col span={3}>
                        <Button className="btn-size" type="primary" ghost>L</Button>
                    </Col>

                </Row>

                <Row className="row-container">
                    <Col span={24} >
                        <p className="name-props">Color</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={3}>
                        <Avatar className="avt-color"></Avatar>
                    </Col>

                    <Col span={3}>
                        <Avatar className="avt-color"></Avatar>
                    </Col>
                    <Col span={3}>
                        <Avatar className="avt-color"></Avatar>
                    </Col>
                    <Col span={3}>
                        <Avatar className="avt-color"></Avatar>
                    </Col>
                    <Col span={3}>
                        <Avatar className="avt-color"></Avatar>
                    </Col>

                    <Col span={3}>
                        <Avatar className="avt-color"></Avatar>
                    </Col>
                </Row>

                <Row type="flex" align="middle" className="row-container">
                    <Col span={5} >
                        <p className="name-props">Quantity</p>
                    </Col>

                    <Col span={10} className="name-props">
                        <NumbericUpDown />
                    </Col>
                </Row>

                <Row className="row-container">
                    <Button type="primary" className="btn-add-to-cart">
                        Add to cart
                    </Button>
                </Row>

                <Divider />

                <Row>
                    <div className="descripton">
                        <p className="header-descripton">Model wearing size S</p>
                        <div className="content-descripton">
                            <p> - Chest: 36”</p>
                            <p>  - Length: 25.75”</p>
                        </div>
                    </div>
                </Row>
            </Row>
        </div>
    );
}

export default InfoProduct;