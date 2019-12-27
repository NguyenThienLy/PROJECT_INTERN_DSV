import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import moment from 'moment';

import './similarProduct.scss'

export function SimilarProduct({ }) {
    const { Meta } = Card;

    useEffect(() => {

    });

    return (
        <div className="similar-product">
            <Card
                hoverable
                bordered={false}
                style={{ width: 130}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" />
            </Card>
        </div>
    );
}

export default SimilarProduct;