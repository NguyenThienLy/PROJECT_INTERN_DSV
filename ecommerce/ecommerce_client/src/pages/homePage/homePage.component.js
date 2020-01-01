import React, { useState, useEffect } from 'react'
import { Row, Col, Layout } from 'antd'

import { api } from '../../services'

import './homePage.component.scss'
import HeaderCustomer from '../headerCustomer/headerCustomer.container'
import {
    IntroCarousel,
    IntroProduct
} from './components/'
import {
    FooterCustomer
} from '../../components'

export function HomePage({
    category,
    getListCategory
}) {
    const { Content } = Layout;

    useEffect(() => {
        getListCategory();
    }, []);

    return (
        <div className="home-page">
            <HeaderCustomer />

            <Content className="body-page">
                <Row>
                    <IntroCarousel />
                </Row>

                <Row className="container-intro-product" gutter={20}>
                    {category.items.map((item) => {
                        return (<Col key={item._id} span={6} >
                            <IntroProduct categoryItem= {item} />
                        </Col>);
                    })}
                </Row>
            </Content>

            <FooterCustomer />
        </div>
    );
}

export default HomePage;
