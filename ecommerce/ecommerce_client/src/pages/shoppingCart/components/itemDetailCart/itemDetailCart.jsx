import React, { Component } from 'react'
import { Row, Col, Avatar, Divider } from 'antd'

import './itemDetailCart.scss'
import {
    NumbericUpDown
} from '../../../../components'

export function ItemDetailCart({ 
    cartItem
}) {
    return (
        <div className="item-detail-cart">
            <Row type="flex" justify="center" align="middle">
                <Col span={9}>
                    <Col span={7}>
                        <img className="image" src={cartItem.mainImage}></img>
                    </Col>

                    <Col span={15} offset={2}>
                        <div className="container-description">
                            <p className="name-product">
                            {cartItem.name}
                            </p>

                            <span className="action">Change</span>
                            <span className="action">|</span>
                            <span className="action">Remove</span>
                        </div>
                    </Col>
                </Col>

                <Col span={2} className="container-color">
                    <Avatar className="avt-color" style={{ backgroundColor: `${cartItem.color.code}` }}></Avatar>
                </Col>

                <Col span={3}>
                    <p className="size">{cartItem.size}</p>
                </Col>

                <Col span={7} className="container-quantity">
                    <NumbericUpDown valueQuantity = {cartItem.quantity}/>
                </Col>

                <Col span={3} className="container-amount">
                    <p className="amount">${cartItem.price}</p>
                </Col>
            </Row>
        </div>
    );
}

export default ItemDetailCart;
