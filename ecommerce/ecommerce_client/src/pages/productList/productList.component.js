import React, { useState, useEffect } from 'react'
import { Col, Row, Typography, Divider } from 'antd'

import {
    Product,
    Fitler,
    CategoryFitler
} from './components'
import HeaderCustomer from '../headerCustomer/headerCustomer.component';
import {
    FooterCustomer,
    BreadcrumbMain,
    Order,
    PaginationCustomer
} from '../../components'
import './productList.component.scss'

function ProductList({ productFilter }) {
    const { Title } = Typography;

    useEffect(() => {

    });

    return (
        <div className="product-list">
            <Row>
                <HeaderCustomer />
            </Row>

            <Row className="top-product-list" type="flex" justify="space-around" align="middle">
                <BreadcrumbMain />
            </Row>

            <Row>
                <Col span={2} />

                <Col span={20}>
                    <Row type="flex" align="middle">
                        <Col span={4}>
                            <p className="header-fitler">Category</p>
                        </Col>
                        <Col span={5} offset={1}>
                            <Order />
                        </Col>
                        <Col span={5} offset={9}>
                            <PaginationCustomer />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={4} >
                            <CategoryFitler />
                            <Divider />
                            <p className="header-fitler">Fitler</p>
                            <Fitler />
                        </Col>

                        <Col span={19} offset={1}>
                            <Row gutter={20}>
                                {productFilter.data.map((element) => {
                                    return (<Col className="col-product" span={6}>
                                        <Product key={element.id} product={element} />
                                    </Col>)
                                })}
                            </Row>
                        </Col>
                    </Row>

                    <Row className="bottom" type="flex" align="top">
                        <Col span={5} offset={19} type="flex" justify="end">
                            <PaginationCustomer />
                        </Col>
                    </Row>
                </Col>

                <Col span={2} />
            </Row>

            <Row>
                <FooterCustomer />
            </Row>
        </div>
    );
}

export default ProductList;