import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import './similarProduct.scss'

export function SimilarProduct({
    productItem
 }) {
    const { Meta } = Card;

    useEffect(() => {

    });

    return (
        <div className="similar-product">
            <Card
                hoverable
                bordered={false}
                cover={<img alt="example" src={productItem.mainImage} />}
            >
                <Link to={`/product-info/${productItem.slug}`}><Meta title={productItem.name} /></Link>
            </Card>
        </div>
    );
}

export default SimilarProduct;