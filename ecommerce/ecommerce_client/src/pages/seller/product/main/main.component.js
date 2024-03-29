import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Layout, Col, Row, Button } from 'antd';
import {
    SideNav,
    HeaderSeller,
    SearchSeller,
    Order
} from '../../../../components';
import {
    ProductTable
} from '../components';
import './main.component.scss';

export function ProductMain({
    seller,
    product,
    getProductFilter,
    logout
}) {
    const { Content } = Layout;

    useEffect(() => {
       
    });

    return (
        <div className="product-main-page">
            <Content className="body-page">
                <Row>
                    <Col span={4} className="container-side-nav">
                        <SideNav selectDefault="3" />
                    </Col>

                    <Col span={20} className="container-content">
                        <HeaderSeller logout={logout} namePage="Products" />
                        <Row className="container-header">
                            <Col span={2} className="container-titler">SORT BY</Col>
                            <Col span={3} className="container-btn"><Order /></Col>
                            <Col span={5} offset={6} className="container-search"><SearchSeller /></Col>
                            <Col span={4} className="container-btn"><Button style={{ backgroundColor: '#ffa15f', color: 'white' }} className="btn-primary" type="primary" icon="plus">Add product</Button></Col>
                            <Col span={3} className="container-btn"><Button style={{ color: '#ffa15f' }} className="btn-primary" type="primary" icon="export">Export</Button></Col>
                        </Row>
                        <Row className="container-table">
                            <ProductTable
                                product={product}
                                getProductFilter={getProductFilter}
                            />
                        </Row>
                    </Col>
                </Row>
            </Content>
        </div >
    );
}

export default ProductMain;