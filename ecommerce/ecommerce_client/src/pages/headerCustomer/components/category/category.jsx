import React, { useState, useEffect } from 'react';
import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';

import "./category.scss";
import { ItemCategory, SubCategory } from '../index';

export function Category({
  getListCategory,
  category
}) {
  useEffect(() => {
    getListCategory();
  }, [])

  return (
    <div className="category">
      {category.items.map(item => {
        return (<Dropdown key={item._id} overlay={<SubCategory slugCategory={item.slug} key={item._id} listSub={item.listSub} />} placement="bottomCenter">
          <div>
          <Link to={`/product-list/${item.slug}`}><ItemCategory name={item.name} className="item-category" /></Link>
          </div>
        </Dropdown>);
      })}
    </div>
  );

}

export default Category