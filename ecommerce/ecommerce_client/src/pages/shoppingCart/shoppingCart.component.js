import React, { Component } from 'react'
import { Row, Col, Divider, Typography } from 'antd'

import { api } from '../../services'

import './shoppingCart.component.scss'
import HeaderCustomer from '../headerCustomer/headerCustomer.component'
import {
    ItemDetailCart,
    TotalCart
} from './components/'
import {
    FooterCustomer
} from '../../components'

export function ShoppingCart({ }) {
    const { Title } = Typography;

    return (
        <div className="shopping-cart">
            <Row>
                <HeaderCustomer />
            </Row>

            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Row className="container-header-cart">
                        <div className="header-shopping-cart">My bag</div>
                    </Row>

                    <Row className="container-shopping-cart">
                        <Col span={16}>
                            <Row type="flex" align="middle" className="container-header">
                                <Col span={9}>
                                    <p className="header-item align-start">Product</p>
                                </Col>

                                <Col span={2}>
                                    <p className="header-item">Color</p>
                                </Col>

                                <Col span={3}>
                                    <p className="header-item">Size</p>
                                </Col>

                                <Col span={7}>
                                    <p className="header-item">Quantity</p>
                                </Col>

                                <Col span={3}>
                                    <p className="header-item align-end">Amount</p>
                                </Col>
                            </Row>

                            <Divider className="divider-item-cart" />
                            <ItemDetailCart />

                            <Divider className="divider-item-cart" />
                            <ItemDetailCart />

                            <Divider className="divider-item-cart" />
                            <ItemDetailCart />

                            <Divider className="divider-item-cart" />
                            <ItemDetailCart />

                        </Col>

                        <Col span={7} offset={1}>
                            <Row type="flex" align="middle" className="container-header">
                                <Col>
                                    <p className="header-item align-start">Total</p>
                                </Col>
                            </Row>

                            <TotalCart />
                        </Col>
                    </Row>
                </Col>
                <Col span={2}></Col>
            </Row>

            <Row>
                <FooterCustomer />
            </Row>
        </div>
    );
}

export default ShoppingCart;
