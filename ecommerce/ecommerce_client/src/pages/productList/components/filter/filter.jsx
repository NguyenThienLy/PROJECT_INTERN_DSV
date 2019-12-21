import * as React from "react";

import "./filter.scss";
import { Card } from 'antd';

export class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { Meta } = Card;

        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>
        );
    }
}

export default Filter














