import * as React from "react";

import "./product.scss";
import { Card } from 'antd';

export function Product({product}) {
    const { Meta } = Card;

    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.link} />}
            >
                <Meta title={product.name}  description="www.instagram.com" />
            </Card>
        </div>
    );

}

export default Product














