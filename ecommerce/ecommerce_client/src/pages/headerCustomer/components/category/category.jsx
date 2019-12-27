import * as React from "react";
import { Dropdown } from 'antd'

import "./category.scss";
import { ItemCategory, SubCategory } from '../index';

export function Category({ }) {
  const subCategory = (
    <SubCategory />
  );

  return (
    <div className="category">
      <Dropdown overlay={subCategory} placement="bottomCenter">
        <div className="container-item">
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
        </div>
      </Dropdown>
    </div>
  );

}

export default Category