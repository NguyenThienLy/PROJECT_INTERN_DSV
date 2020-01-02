import React, { useState, useEffect } from 'react'
import { Input, Button, Icon } from 'antd'

import './numbericUpDown.scss';

export function NumbericUpDown({
    valueQuantity,
    quantityProduct,
    getCurrQuantity
 }) {
    const [quantity, setQuantity] = useState(valueQuantity);

    const increase = () => {
        if (quantity < quantityProduct) {
            getCurrQuantity(quantity + 1);
            setQuantity(quantity + 1);
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            getCurrQuantity(quantity - 1);
            setQuantity(quantity - 1);
        }
    }

    useEffect(() => {

    });

    return (
        <div className="numberic-up-down">
            <Button className="btn-sub" onClick={decrease}> <Icon type="minus" /></Button>
            <Input value={quantity}></Input>
            <Button className="btn-plus" onClick={increase}> <Icon type="plus" /></Button>
        </div>
    );
}

export default NumbericUpDown;