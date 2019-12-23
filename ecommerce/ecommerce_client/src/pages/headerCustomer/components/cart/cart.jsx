import * as React from "react";

import "./cart.scss";
import { Badge, Icon, Dropdown } from 'antd'
import { FastCart } from '../index'

export function Cart({ }) {
  const fastCart = (
    <FastCart />
  );

  return (
    <div className="cart">
      <Dropdown overlay={fastCart} placement="bottomRight">
        <Badge count={5} style={{ backgroundColor: '#ffa15f' }}>
          <Icon type="shopping-cart" style={{ fontSize: '24px' }} />
        </Badge>
      </Dropdown>
    </div>
  );
}

export default Cart