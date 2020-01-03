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
            <Row type="flex" justify="center" gutter={20}>

                {subCategory.dataSimilarProduct.map(item => {
                    return (<Col key={item._id} span={4}><SimilarProduct productItem={item} />  </Col>);
                })}

            </Row>
        </div>
    );
}

export default ListSimilarProduct;