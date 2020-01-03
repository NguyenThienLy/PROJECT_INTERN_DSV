import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Divider } from 'antd'

import './totalCart.scss'

export function TotalCart({
    cart,
    cancelCart
}) {
    const [subTotal, setSubTotal] = useState(0.00);

    useEffect(() => {
        const total = cart.items.reduce((sum, item) => sum + (+item.price) * item.quantity, 0);

        setSubTotal(total);
    })

    return (
        <div className="total-cart">
            <Row className="container-content">
                <Row>
                    <Col span={18} className="text-detail">Shipping & Handling:</Col>
                    <Col span={6} className="text-detail">Free</Col>
                </Row>

                <Row>
                    <Col span={18} className="text-detail">Total product:</Col>
                    <Col span={6} className="text-detail">${subTotal}</Col>
                </Row>

                <Divider className="divider-total" />

                <Row>
                    <Col span={18} className="text-total">Subtotal</Col>
                    <Col span={6} className="text-total">${subTotal}</Col>
                </Row>
            </Row>

            <Row>
                <Button type="primary" className="btn-checkout">Check out</Button>
            </Row>

            <Row>
                <Button type="primary" className="btn-cancle" ghost onClick={()=>cancelCart()}> Cancel order</Button>
            </Row>
        </div>
    );
}

export default TotalCart;
