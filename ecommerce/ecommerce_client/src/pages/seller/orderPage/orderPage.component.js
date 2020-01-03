import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Layout, Col, Row, Button } from 'antd';

import { api } from '../../../reducers';

import './orderPage.component.scss';
import {
    Datepicker,
    OrderTable
} from './components/';
import {
    SideNav,
    HeaderSeller,
    SearchSeller
} from '../../../components';

export function OrderPage({ }) {
    const { Content } = Layout;
    return (
        <div className="order-page">
            <Content className="body-page">
                <Col span={4}>
                    <SideNav selectDefault="2"/>
                </Col>

                <Col span={20} className="container-content">
                    <HeaderSeller namePage="Orders"/>
                    <Row className="container-header">
                        <Col span={3} className="container-titler">ORDERED DATE</Col>
                        <Col span={5} className="container-datapicker"><Datepicker /></Col>
                        <Col span={3} className="container-btn"><Button className="btn-primary" type="primary">Today</Button></Col>
                        <Col span={3} className="container-btn"><Button className="btn-primary" type="primary">Yesterday</Button></Col>
                        <Col span={5} offset={2} className="container-search"><SearchSeller/></Col>
                        <Col span={3} className="container-btn"><Button className="btn-primary" type="primary">Export</Button></Col>
                    </Row>
                    <Row className="container-table">
                        <OrderTable/>
                    </Row>
                </Col>
            </Content>
        </div >
    );
}

export default OrderPage;
