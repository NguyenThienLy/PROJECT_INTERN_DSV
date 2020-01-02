import React, { useState, useEffect } from 'react';
import { Col, Row, Layout, Divider } from 'antd';
import * as _ from 'lodash';

import {
    CommentCustomer,
    FromBrand,
    ImageProduct,
    ListSimilarProduct,
    InfoProduct
} from './components'
import HeaderCustomer from '../headerCustomer/headerCustomer.container'
import {
    BreadcrumbMain,
    FooterCustomer,
    PaginationCustomer
} from '../../components'
import './productInfo.component.scss'

export function ProductInfo({
    product,
    brand,
    subCategory,
    getItem,
    getListFromBrand,
    getListSimilarProduct,
    match
}) {
    const { Content } = Layout;
    const [isProductChange, setIsProductChange] = useState(false);
    const [productItem, setProductItem] = useState({});

    useEffect(() => {
        const item = product.items.find(item => item.slug === match.params.slug);

        // haven't item in redux-state
        // get item in DB
        if (item === undefined) {
            getItem(match.params.slug);
        }
        else if (!_.isEqual(productItem, item)) {
            setProductItem(item);
        }
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
                        {!_.isEqual(productItem, {}) && <ImageProduct productItem={productItem} />}
                    </Col>

                    <Col span={9} offset={1} productItem={productItem}>
                        {!_.isEqual(productItem, {}) && <InfoProduct productItem={productItem} />}
                    </Col>

                    <Col span={2} offset={2}>
                        {!_.isEqual(productItem, {}) && <FromBrand idBrand={productItem.brand} idProduct={productItem._id} getListFromBrand={getListFromBrand} brand={brand} />}
                    </Col>
                </Row>

                <Divider orientation="left">Reviews</Divider>

                <Row className="contaiter-comment">
                    <Row><CommentCustomer /></Row>
                    <Row><CommentCustomer /></Row>
                    <Row><CommentCustomer /></Row>
                    <Row type="flex" justify="end"><PaginationCustomer /></Row>
                </Row>

                <Divider orientation="left">You may also like</Divider>

                {!_.isEqual(productItem, {}) && <ListSimilarProduct idSubCategory={productItem.subCategory} idProduct={productItem._id} getListSimilarProduct={getListSimilarProduct} subCategory={subCategory} />}
            </Content>

            <FooterCustomer />
        </div>
    );
}

export default ProductInfo;