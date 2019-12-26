import * as React from "react";

import "./categoryFitler.scss";
import { List } from 'antd'

export function CategoryFitler({ }) {
    const data = [
        'Rompers / Jumpsuits',
        'Casual dresses',
        'Going out dresses',
        'Party / Ocassion dresses',
        'Mini dresses',
        'Maxi / Midi dresses',
        'Sets'
    ];

    return (<div className="category-fitler">
        <List
            size="small"
            header={<div>All dresses</div>}
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
        />
    </div>);
}


export default CategoryFitler