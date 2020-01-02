import * as React from "react";
import { Divider, Button, Card } from 'antd';
import { Link } from 'react-router-dom'

import "./introProduct.scss";

export function IntroProduct({ 
    categoryItem
 }) {

    return (
        <div className="intro-product">
            <img className="img-intro-product" src={categoryItem.avatar}></img>
            <div className="container-content">
                <p className="name-intro">{categoryItem.name}</p>
                <Divider className="divider-intro" />

                <div className="container-btn">
                    <Link to={`/product-list/${categoryItem.slug}`}>
                        <Button className="btn-intro" type="primary" >Shop now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default IntroProduct














