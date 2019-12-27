import React, { Component } from 'react'
import { Row, Col, Avatar, Divider } from 'antd'

import './itemDetailCart.scss'
import {
    NumbericUpDown
} from '../../../../components'

export function ItemDetailCart({ }) {
    return (
        <div className="item-detail-cart">
            <Row type="flex" justify="center" align="middle">
                <Col span={9}>
                    <Col span={7}>
                        <img className="image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Col>

                    <Col span={15} offset={2}>
                        <div className="container-description">
                            <p className="name-product">
                                Collete Stretch Linen Minidress
                            </p>

                            <span className="action">Change</span>
                            <span className="action">|</span>
                            <span className="action">Remove</span>
                        </div>
                    </Col>
                </Col>

                <Col span={2} className="container-color">
                    <Avatar className="avt-color"></Avatar>
                </Col>

                <Col span={3}>
                    <p className="size">S</p>
                </Col>

                <Col span={7} className="container-quantity">
                    <NumbericUpDown />
                </Col>

                <Col span={3} className="container-amount">
                    <p className="amount">$69.00</p>
                </Col>
            </Row>
        </div>
    );
}

export default ItemDetailCart;
