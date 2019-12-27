import * as React from "react";
import { Divider, Button, Card } from 'antd';
import { Link } from 'react-router-dom'

import "./introProduct.scss";

export function IntroProduct({ }) {

    return (
        <div className="intro-product">
            <img className="img-intro-product" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
            <div className="container-content">
                <p className="name-intro">Men</p>
                <Divider className="divider-intro" />

                <div className="container-btn">
                    <Link to="/product-list">
                        <Button className="btn-intro" type="primary" >Shop now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default IntroProduct














