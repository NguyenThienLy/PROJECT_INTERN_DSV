import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Modal, Button } from 'antd';

import './itemDetailCart.scss';
import {
    NumbericUpDown
} from '../../../../components'

export function ItemDetailCart({
    cartItem,
    increaseItemCart,
    decreaseItemCart,
    removeItemCart,
    increaseQuantityProduct,
    decreaseQuantityProduct
}) {
    const [currQuantity, setCurrQuantity] = useState(cartItem.quantity);
    const [visibleRemoveItem, setVisibleRemoveItem] = useState(false);

    const getCurrQuantity = (quantity) => {
        setCurrQuantity(quantity);
    }

    const onConfirmRemoveItem = () => {
        onShowModalRemoveItem();
    }

    const onOkeModalRemoveItem = () => {
        removeItemCart(cartItem._id, cartItem.size, cartItem.color);
        increaseQuantityProduct(cartItem._id, currQuantity);
        setVisibleRemoveItem(false);
    };

    const onCancelModalRemoveItem = () => {
        setVisibleRemoveItem(false);
    };

    const onShowModalRemoveItem = () => {
        setVisibleRemoveItem(true);
    };

    const increaseItem = () => {
        increaseItemCart(cartItem._id);
        increaseQuantityProduct(cartItem._id, 1);
    }


    const decreaseItem = () => {
        decreaseItemCart(cartItem._id);
        decreaseQuantityProduct(cartItem._id, 1);
    }

    return (
        <div className="item-detail-cart">
            <Modal
                title="Confirm delete"
                visible={visibleRemoveItem}
                onOk={onOkeModalRemoveItem}
                onCancel={onCancelModalRemoveItem}
                okText="Oke"
                cancelText="Cancel"
            >
                Delete item in cart?
            </Modal>

            <Row type="flex" justify="center" align="middle">
                <Col span={9}>
                    <Col span={7}>
                        <img className="image" src={cartItem.mainImage}></img>
                    </Col>

                    <Col span={15} offset={2}>
                        <div className="container-description">
                            <Link to={`/product-info/${cartItem.slug}`}>
                                <p className="name-product">
                                    {cartItem.name}
                                </p>
                            </Link>

                            <span className="action">Change</span>
                            <span className="action">|</span>
                            <Button className="action" type="link" onClick={onConfirmRemoveItem}>Remove</Button>
                        </div>
                    </Col>
                </Col>

                <Col span={2} className="container-color">
                    <Avatar className="avt-color" style={{ backgroundColor: `${cartItem.color.code}` }}></Avatar>
                </Col>

                <Col span={3}>
                    <p className="size">{cartItem.size}</p>
                </Col>

                <Col span={7} className="container-quantity">
                    <NumbericUpDown
                        increaseItem={increaseItem}
                        decreaseItem={decreaseItem}
                        quantityProduct={cartItem.maxQuantity}
                        valueQuantity={currQuantity}
                        getCurrQuantity={getCurrQuantity} />
                </Col>

                <Col span={3} className="container-amount">
                    <p className="amount">$Mat{+cartItem.price * currQuantity}</p>
                </Col>
            </Row>
        </div>
    );
}

export default ItemDetailCart;
