import * as React from "react";
import { Card } from 'antd';
import { Link } from 'react-router-dom'

import "./introProduct.scss";

export function IntroProduct({ }) {
    const { Meta } = Card;

    return (
        <div>
            <Link to="/product-list">
                <Card
                    hoverable
                    cover={<img alt="example" src="https://i.imgur.com/WPeI25i.jpg" />}
                >
                    <Meta title="Mens" description="www.instagram.com" />
                </Card>
            </Link>
        </div>
    );

}

export default IntroProduct














