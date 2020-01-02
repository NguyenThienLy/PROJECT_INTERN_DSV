import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'antd'
import moment from 'moment';

import './listSimilarProduct.scss';
import {
    SimilarProduct
} from '../index'

export function ListSimilarProduct({
    idSubCategory,
    idProduct,
    getListSimilarProduct,
    subCategory
}) {
    useEffect(() => {
        getListSimilarProduct(idSubCategory, idProduct);
    }, []);

    return (
        <div className="list-similar-product">
            <Row type="flex" justify="space-between" gutter={20}>
                <Col span={4}>
                    {subCategory.dataSimilarProduct.map(item => {
                        return (<SimilarProduct key={item._id} productItem={item} />);
                    })}
                </Col>
            </Row>
        </div>
    );
}

export default ListSimilarProduct;