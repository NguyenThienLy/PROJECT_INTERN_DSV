import * as React from "react";
import { Dropdown } from 'antd'

import "./category.scss";
import { ItemCategory, SubCategory } from '../index';

export function Category({ }) {
  const subCategory = (
    <SubCategory />
  );

  return (
    <Dropdown overlay={subCategory} placement="bottomCenter">
      <div className="category">
        <ItemCategory className="item-category" />
        <ItemCategory className="item-category" />
        <ItemCategory className="item-category" />
        <ItemCategory className="item-category" />
        <ItemCategory className="item-category" />
      </div>
    </Dropdown>
  );

}

export default Category