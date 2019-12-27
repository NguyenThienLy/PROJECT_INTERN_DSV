import React, { useState, useEffect } from 'react'
import { Col, Row, Layout, Divider } from 'antd'

import {
    CommentCustomer,
    FromBrand,
    ImageProduct,
    SimilarProduct,
    InfoProduct
} from './components'
import HeaderCustomer from '../headerCustomer/headerCustomer.component'
import {
    BreadcrumbMain,
    FooterCustomer,
    PaginationCustomer
} from '../../components'
import './productInfo.component.scss'

export function ProductInfo({ }) {
    const { Content } = Layout;

    useEffect(() => {

    });

    return (
        <div className="product-info">
            <HeaderCustomer />

            <Content className="body-page">
                <Row className="top-product-info" type="flex" justify="space-around" align="middle">
                    <BreadcrumbMain />
                </Row>

                <Row >
                    <Col span={10}>
                        <ImageProduct />
                    </Col>

                    <Col span={9} offset={1}>
                        <InfoProduct />
                    </Col>

                    <Col span={2} offset={2}>
                        <FromBrand />
                    </Col>
                </Row>

                <Divider orientation="left">Reviews</Divider>

                <Row className="contaiter-comment">
                    <Row><CommentCustomer /></Row>
                    <Row><CommentCustomer /></Row>
                    <Row><CommentCustomer /></Row>
                    <Row type="flex" justify="end"><PaginationCustomer/></Row>
                </Row>

                <Divider orientation="left">You may also like</Divider>

                <Row type="flex" justify="space-between" gutter={20}>
                    <Col span={4}>
                        <SimilarProduct />
                    </Col>

                    <Col span={4}>
                        <SimilarProduct />
                    </Col>

                    <Col span={4}>
                        <SimilarProduct />
                    </Col>

                    <Col span={4}>
                        <SimilarProduct />
                    </Col>

                    <Col span={4}>
                        <SimilarProduct />
                    </Col>

                    <Col span={4}>
                        <SimilarProduct />
                    </Col>
                </Row>
            </Content>

            <FooterCustomer />
        </div>
    );
}

export default ProductInfo;