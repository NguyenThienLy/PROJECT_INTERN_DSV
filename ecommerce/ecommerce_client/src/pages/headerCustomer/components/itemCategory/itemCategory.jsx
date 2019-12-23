import * as React from "react";
import { Icon } from 'antd'

import "./itemCategory.scss";

export function ItemCategory({}) {

  return (
    <div className="item-category">
       <p>Men</p>
       <Icon type="caret-down" />
    </div>
  );

}

export default ItemCategory