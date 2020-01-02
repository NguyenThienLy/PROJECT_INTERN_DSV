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
                <Card
                    bordered={false}
                    hoverable
                    cover={<img alt="example" src={productItem.mainImage} />}
                >
                      <Link to={`/product-info/${productItem.slug}`}><Meta title={productItem.name} description={productItem.price} /> </Link>
                </Card>
        </div>
    );

}

export default Product














