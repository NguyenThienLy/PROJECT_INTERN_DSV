import React, { Component } from 'react'
import { Row, Col } from 'antd'

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
    return (
        <div className="home-page">
            <Row>
                <HeaderCustomer />
            </Row>

            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Row className="container-carousel" span={24}>
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
                </Col>
                <Col span={2}></Col>
            </Row>

            <Row>
                <FooterCustomer />
            </Row>
        </div>
    );
}

export default HomePage;
