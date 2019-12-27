import * as React from "react";
import { Link } from 'react-router-dom'

import "./product.scss";
import { Card } from 'antd';

export function Product({ product }) {
    const { Meta } = Card;

    return (
        <div className="product">
            <Link to="/product-info">
                <Card
                    bordered={false}
                    hoverable
                    cover={<img alt="example" src={product.link} />}
                >
                    <Meta src="/product-info" title={product.name} description={product.price} />
                </Card>
            </Link>
        </div>
    );

}

export default Product














