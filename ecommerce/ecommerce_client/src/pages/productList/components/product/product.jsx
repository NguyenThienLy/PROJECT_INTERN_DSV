import * as React from "react";

import "./product.scss";
import { Card } from 'antd';

export function Product({product}) {
    const { Meta } = Card;

    return (
        <div className="product">
            <Card 
                bordered={false}
                hoverable
                cover={<img alt="example" src={product.link} />}
            >
                <Meta title={product.name}  description={product.price}/>
            </Card>
        </div>
    );

}

export default Product














