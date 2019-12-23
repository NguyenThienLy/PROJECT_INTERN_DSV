import * as React from "react";
import { Card } from 'antd';

import "./introProduct.scss";

export function IntroProduct({}) {
    const { Meta } = Card;

    return (
        <div>
            <Card
                hoverable
                cover={<img alt="example" src="https://i.imgur.com/WPeI25i.jpg" />}
            >
                <Meta title="Mens"  description="www.instagram.com" />
            </Card>
        </div>
    );

}

export default IntroProduct














