import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'

import './imageProduct.scss'

export function ImageProduct({
    productItem
}) {

    return (
        <div className="image-product">
            <Row>
                <Col span={5}>
                    {
                        productItem.subImage.map((item, index) => {
                            return (<Row key={index}>
                                <img className="sub-img" src={item}></img>
                            </Row>);
                        })
                    }

                </Col>

                <Col span={18} offset={1}>
                    <Row>
                        <img className="main-img" src={productItem.mainImage}></img>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default ImageProduct;