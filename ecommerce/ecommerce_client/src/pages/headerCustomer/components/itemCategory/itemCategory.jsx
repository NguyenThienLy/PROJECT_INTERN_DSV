import * as React from "react";
import { Icon } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import "./itemCategory.scss";

export function ItemCategory({ }) {

  return (
    <div className="item-category">
      <p>Men</p>
      <span className="container-icon">
        <FontAwesomeIcon className="icon-category" icon={faAngleDown} />
      </span>
    </div>
  );

}

export default ItemCategory