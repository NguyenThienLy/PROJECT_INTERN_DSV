import React, { useState, useEffect } from 'react'
import { Col, Row, Layout, Divider } from 'antd'

import {
    Product,
    Fitler,
    CategoryFitler
} from './components'
import HeaderCustomer from '../headerCustomer/headerCustomer.container';
import {
    FooterCustomer,
    BreadcrumbMain,
    Order,
    PaginationCustomer
} from '../../components'
import './productList.component.scss'

function ProductList({ 
    product,
    getProductFilter,
    match
 }) {
    const { Content } = Layout;

    useEffect(() => {
        //order, color, brand, size, status, subCategory, category
        getProductFilter({order: 11});
    }, [product.items]);

    return (
        <div className="product-list">
            <HeaderCustomer />

            <Content className="body-page">
                <Row className="top-product-list" type="flex" justify="space-around" align="middle">
                    <BreadcrumbMain content={{
                        main: "product-list",
                        sub1: match.params.slugCategory,
                        sub2: null
                    }}/>
                </Row>

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
                        {/* <Fitler /> */}
                    </Col>

                    <Col span={19} offset={1}>
                        <Row gutter={20}>
                            {product.items.map((item) => {
                                return (<Col className="col-product" key={item._id} span={6}>
                                    <Product productItem={item}/>
                                </Col>)
                            })}
                        </Row>
                    </Col>
                </Row>

                <Row type="flex" align="top">
                    <Col span={5} offset={19} type="flex" justify="end">
                        <PaginationCustomer />
                    </Col>
                </Row>
            </Content>

            <FooterCustomer />
        </div>
    );
}

export default ProductList;