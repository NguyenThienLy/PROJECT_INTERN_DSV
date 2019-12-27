import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd'

import { api } from '../../services'

import './homePage.component.scss'
import HeaderCustomer from '../headerCustomer/headerCustomer.component'
import {
    IntroCarousel,
    IntroProduct
} from './components/'
import {
    FooterCustomer
} from '../../components'

export function HomePage({ }) {
    const { Content } = Layout;

    return (
        <div className="home-page">
            <HeaderCustomer />

            <Content className="body-page">
                <Row>
                    <IntroCarousel />
                </Row>

                <Row className="container-intro-product" gutter={20}>
                    <Col span={6} >
                        <IntroProduct />
                    </Col>

                    <Col span={6}>
                        <IntroProduct />
                    </Col>

                    <Col span={6} >
                        <IntroProduct />
                    </Col>

                    <Col span={6} >
                        <IntroProduct />
                    </Col>
                </Row>
            </Content>

            <FooterCustomer />
        </div>
    );
}

export default HomePage;
