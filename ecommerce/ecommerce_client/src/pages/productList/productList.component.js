import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'

import {
    Product,
    Filter
} from './components'
import HeaderCustomer from '../headerCustomer/headerCustomer.component';
import {
    FooterCustomer,
    BreadcrumbMain
} from '../../components'

function ProductList({ productFilter }) {

    useEffect(() => {

    });

    return (
        <div>
            <Row>
                <HeaderCustomer />
            </Row>

            <Row type="flex" justify="space-around" align="middle">
                <BreadcrumbMain />
            </Row>

            <Row>
                <Col span={2}></Col>

                <Col span={20}>
                    <Row>
                        <Col>
                            <Filter span={4} />
                        </Col>

                        {productFilter.data.map((element) => {
                            return (<Col span={4}>
                                <Product key={element.id} product={element} />
                            </Col>)
                        })}
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

export default ProductList;