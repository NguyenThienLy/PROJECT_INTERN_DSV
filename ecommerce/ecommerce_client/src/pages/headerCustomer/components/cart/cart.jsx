import * as React from "react";

import "./cart.scss";
import { Badge, Icon } from 'antd'

export class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Badge count={5} style={{ backgroundColor: '#ffa15f' }}>
          <Icon type="shopping-cart" style={{ fontSize: '24px' }}/>
        </Badge>
      </div>
    );
  }
}

export default Cart