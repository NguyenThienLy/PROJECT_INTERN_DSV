import React, { useState, useEffect } from 'react';
import { Dropdown } from 'antd'

import "./category.scss";
import { ItemCategory, SubCategory } from '../index';

export function Category({
  category
}) {
  useEffect(() => {
    console.log("category", category); 
  })

  return (
    <div className="category">
      <Dropdown overlay={<SubCategory />} placement="bottomCenter">
        <div className="container-item">
          {category.items.map(item => {
            return (<ItemCategory name={item.name} className="item-category" />);
          })}
        </div>
      </Dropdown>
    </div>
  );

}

export default Category