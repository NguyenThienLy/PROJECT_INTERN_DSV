import React, { useState, useEffect, useCallback } from 'react'
import { Col, Row } from 'antd'

import './fromBrand.scss'

export function FromBrand({
    idBrand,
    idProduct,
    getListFromBrand,
    brand
}) {

    useEffect(() => {
        getListFromBrand(idBrand, idProduct);
    }, [idBrand, idProduct]);

    return (
        <div className="from-brand">
            <Row type="flex" justify="start">
                <Col>
                    <p className="header">More from</p>
                    <p className="name-brand">Zara</p>
                </Col>

                {
                    brand.dataFromBrand.map(item => {
                        return (<Col key={item._id}>
                            <img className="image" src={item.mainImage}></img>
                        </Col>);
                    })
                }

            </Row>
        </div>
    );
}

export default FromBrand;