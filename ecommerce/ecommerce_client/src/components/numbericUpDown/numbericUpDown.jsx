import React, { useState, useEffect } from 'react'
import { Input, Button, Icon } from 'antd'

import './numbericUpDown.scss'

export function NumbericUpDown({ }) {

    useEffect(() => {

    });

    return (
        <div className="numberic-up-down">
                <Button className="btn-sub"> <Icon type="plus" /></Button>
                <Input value="1"></Input>
                <Button className="btn-plus"> <Icon type="minus" /></Button>
        </div>
    );
}

export default NumbericUpDown;