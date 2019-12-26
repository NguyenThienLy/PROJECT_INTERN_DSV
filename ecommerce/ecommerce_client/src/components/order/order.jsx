import * as React from "react";

import "./order.scss";
import { Select } from 'antd'

export function Order({ }) {
    const { Option } = Select;

    return (
        <div className="order">
            <Select defaultValue="lucy">
                <Option value="Popularity">Popularity</Option>
                <Option value="Name: A - Z">Name: A - Z</Option>
                <Option value="Price: lowest to highest">Price: lowest to highest</Option>
                <Option value="Price: highest to lowest">Price: highest to lowest</Option>
            </Select>
        </div>
    );
}

export default Order
