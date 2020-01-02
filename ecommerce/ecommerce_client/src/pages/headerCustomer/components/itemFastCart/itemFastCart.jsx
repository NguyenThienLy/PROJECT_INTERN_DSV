import * as React from "react";
import { Card, Icon, Avatar } from 'antd';

import "./itemFastCart.scss";

export function ItemFastCart({ 
  productItem
}) {
  const { Meta } = Card;

  return (
    <div className="item-fast-cart">
      <div className="container-image">
        <img src={productItem.mainImage}></img>
      </div>
      <div className="container-content">
        <div className="tilte">{productItem.name}</div>
        <div className="container-description">
          <div className="price">${productItem.price}</div>
          <div className="props">{productItem.size} - {productItem.color} - {productItem.quantity} pcs</div>
        </div>
      </div>
    </div>
  );

}

export default ItemFastCart