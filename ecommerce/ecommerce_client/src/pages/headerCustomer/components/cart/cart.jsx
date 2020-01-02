import * as React from "react";

import "./cart.scss";
import { Badge, Icon, Dropdown } from 'antd'
import { FastCart } from '../index'

export function Cart({
  cart
}) {

  return (
    <div className="cart">
      <Dropdown overlay={<FastCart cart={cart} />} placement="bottomRight">
        <Badge count={cart.quantity} className="badge-cart">
          <Icon type="shopping-cart" className="icon-cart" />
        </Badge>
      </Dropdown>
    </div>
  );
}

export default Cart