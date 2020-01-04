import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
import NameLocal from '../../../config/localStorage';

export function OrderPage({
    seller
}) {
    const { Content } = Layout;
 
    return (
        <div className="order-page">
            <Content className="body-page">
                <Row>
                    <Col span={4} className="container-side-nav">
                        <SideNav selectDefault="2" />
                    </Col>

                    <Col span={20} className="container-content">
                        <HeaderSeller namePage="Orders" />

                        <Row className="container-header">
                            <Col span={3} className="container-titler">ORDERED DATE</Col>
                            <Col span={5} className="container-datapicker"><Datepicker /></Col>
                            <Col span={3} className="container-btn"><Button className="btn-primary" type="primary">Today</Button></Col>
                            <Col span={3} className="container-btn"><Button className="btn-primary" type="primary">Yesterday</Button></Col>
                            <Col span={5} offset={2} className="container-search"><SearchSeller /></Col>
                            <Col span={3} className="container-btn"><Button className="btn-primary" type="primary">Export</Button></Col>
                        </Row>

                        <Row className="container-table">
                            <OrderTable />
                        </Row>
                    </Col>
                </Row>
            </Content>
        </div >
    );
}

export default OrderPage;
