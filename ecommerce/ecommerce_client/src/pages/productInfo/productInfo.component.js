import React, { useState, useEffect } from 'react'
import { Col, Row, Typography, Divider } from 'antd'

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
    FooterCustomer
} from '../../components'
import './productInfo.component.scss'

export function ProductInfo({ }) {

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
                    <Row>
                        <Col span={10}>
                            <ImageProduct/>                        
                        </Col>

                        <Col span={9} offset={1}>
                            <InfoProduct/>
                        </Col>

                        <Col span={2} offset={2}>
                            <FromBrand/>
                        </Col>
                    </Row>

                    <Divider orientation="left">Reviews</Divider>

                    <Row>
                        <Col span={2}>
                        </Col>

                        <Col span={20}>
                            <Row><CommentCustomer /></Row>
                            <Row><CommentCustomer /></Row>
                            <Row><CommentCustomer /></Row>
                        </Col>

                        <Col span={2}>
                        </Col>
                    </Row>
               
                    <Divider orientation="left">You may also like</Divider>

                    <Row className="container-similar-product" type="flex" justify="space-between" gutter={20}>
                        <Col span={4}>
                            <SimilarProduct/>
                        </Col>

                        <Col span={4}>
                            <SimilarProduct/>
                        </Col>

                        <Col span={4}>
                            <SimilarProduct/>
                        </Col>

                        <Col span={4}>
                            <SimilarProduct/>
                        </Col>

                        <Col span={4}>
                            <SimilarProduct/>
                        </Col>

                        <Col span={4}>
                            <SimilarProduct/>
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

export default ProductInfo;