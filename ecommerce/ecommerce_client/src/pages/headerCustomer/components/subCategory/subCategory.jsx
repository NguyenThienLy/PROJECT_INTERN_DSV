import * as React from "react"
import { Card, Icon, Avatar } from 'antd'
import { Link } from "react-router-dom"

import "./subCategory.scss";

export function SubCategory({
  slugCategory,
  key,
  listSub
}) {
  return (
    <div key={key} className="sub-category">
      {listSub.map(item => {
        return <Link to={`/product-list/${slugCategory}/${item.slug}`}><div className="name-sub-category" key={item.key}> {item.name} </div></Link>
      })}
    </div>
  );

}

export default SubCategory