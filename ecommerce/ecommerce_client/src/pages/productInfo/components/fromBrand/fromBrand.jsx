import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'

import './fromBrand.scss'

export function FromBrand({ }) {
    useEffect(() => {

    });

    return (
        <div className="from-brand">
            <Row type="flex" justify="end">
                <Col span={7}>
                </Col>

                <Col span={17}>
                    <Col>
                        <p className="header">More from</p>
                        <p className="name-brand">Zara</p>
                    </Col>

                    <Col className="container-image">
                        <img className="image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Col>

                    <Col container-image>
                        <img className="image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Col>

                    <Col container-image>
                        <img className="image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Col>

                    <Col container-image>
                        <img className="image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
                    </Col>
                </Col>
            </Row>
        </div>
    );
}

export default FromBrand;