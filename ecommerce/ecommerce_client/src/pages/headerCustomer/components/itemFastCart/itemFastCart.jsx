import * as React from "react";

import "./itemFastCart.scss";

export function ItemFastCart({ 
  cartItem
}) {
  return (
    <div className="item-fast-cart">
      <div className="container-image">
        <img src={cartItem.mainImage}></img>
      </div>
      <div className="container-content">
        <div className="tilte"><p>{cartItem.name}</p></div>
        <div className="container-description">
          <div className="price">${cartItem.price}</div>
          <div className="props">{cartItem.size} - {cartItem.color.name} - {cartItem.quantity} pcs</div>
        </div>
      </div>
    </div>
  );

}

export default ItemFastCart