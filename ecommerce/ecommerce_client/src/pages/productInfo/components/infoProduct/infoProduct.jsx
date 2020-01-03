import React, { useState, useEffect } from 'react';
import { Row, Col, Rate, Button, Avatar, Divider, Descriptions } from 'antd';

import {
    NumbericUpDown
} from '../../../../components'
import './infoProduct.scss'

export function InfoProduct({
    productItem,
    addItemCart,
    increaseQuantityProduct,
    decreaseQuantityProduct
}) {
    const [currQuantity, setCurrQuantity] = useState(1);
    const [color, setColor] = useState(productItem.color[0]);
    const [size, setSize] = useState(productItem.size[0]);

    const getCurrQuantity = (quantity) => {
        setCurrQuantity(quantity);
    }

    const onAddToCart = () => {
        const item = {
            _id: productItem._id,
            name: productItem.name,
            mainImage: productItem.mainImage,
            price: productItem.price,
            color: color,
            size: size,
            quantity: currQuantity,
            maxQuantity: productItem.quantity,
            slug: productItem.slug
        };

        addItemCart(item);
        decreaseQuantityProduct(productItem._id, currQuantity);
    }

    useEffect(() => {

    });

    return (
        <div className="info-product">
            <Row>
                <Row>
                    <Col span={24}>
                        <p className="header">{productItem.name}</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <p className="price">${productItem.price}</p>
                    </Col>
                </Row>

                <Row type="flex" align="middle">
                    <Col span={7}>
                        <Rate value={productItem.rate} />
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
                    {
                        productItem.size.map((item, index) => {
                            return (<Col key={index} span={3}>
                                <Button onClick={() => setSize(item)} className="btn-size" type="primary" ghost>{item}</Button>
                            </Col>);
                        })
                    }

                </Row>

                <Row className="row-container">
                    <Col span={24} >
                        <p className="name-props">Color</p>
                    </Col>
                </Row>

                <Row>
                    {productItem.color.map((item, index) => {
                        return (<Col key={index} span={3}>
                            <Avatar onClick={() => setColor(item)} className="avt-color" style={{ backgroundColor: `${item.code}` }}></Avatar>
                        </Col>);
                    })}
                </Row>

                {productItem.quantity !== 0 &&
                    <div>
                        <Row type="flex" align="middle" className="row-container">
                            <Col span={5} >
                                <p className="name-props">Quantity</p>
                            </Col>

                            <Col span={10} className="name-props">
                                <NumbericUpDown valueQuantity={currQuantity} getCurrQuantity={getCurrQuantity} quantityProduct={productItem.quantity} />
                            </Col>
                        </Row>

                        <Row className="row-container">
                            <Button type="primary" className="btn-add-to-cart" onClick={onAddToCart}>
                                Add to cart
                            </Button>
                        </Row>
                    </div>
                }

                {
                    !productItem.quantity &&
                    <div className="sold-out">
                        sold out
                   </div>
                }

                <Divider />

                <Row>
                    <div className="descripton">
                        <p className="header-descripton">{productItem.description}</p>
                    </div>
                </Row>
            </Row>
        </div>
    );
}

export default InfoProduct;