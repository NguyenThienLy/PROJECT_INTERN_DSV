import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'

import './imageProduct.scss'

export function ImageProduct({ }) {

    useEffect(() => {

    });

    return (
        <div className="image-product">
            <Row>
                <Col span={5}>
                    <Row>
                        <img className="sub-img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Row>

                    <Row>
                        <img className="sub-img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Row>

                    <Row>
                        <img className="sub-img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Row>

                    <Row>
                        <img className="sub-img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Row>
                </Col>

                <Col span={18} offset={1}>
                    <Row>
                        <img className="main-img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default ImageProduct;