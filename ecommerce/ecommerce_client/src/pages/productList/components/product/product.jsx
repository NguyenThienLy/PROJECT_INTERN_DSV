import * as React from "react";
import { Link } from 'react-router-dom'

import "./product.scss";
import { Card } from 'antd';

export function Product({ 
    productItem 
}) {
    const { Meta } = Card;

    return (
        <div className="product">
            <Link to="/product-info">
                <Card
                    bordered={false}
                    hoverable
                    cover={<img alt="example" src={productItem.mainImage} />}
                >
                    <Meta src={`/product-info/${productItem._id}`} title={productItem.name} description={productItem.price} />
                </Card>
            </Link>
        </div>
    );

}

export default Product














