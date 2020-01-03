import * as React from "react";

import "./itemProductTable.scss";

export function ItemProductTable({productItem}) {
    return (
        <div className="item-product-table">
            <img className="img-table-item" src={productItem.mainImage}></img>
            <div className="container-content">
                <div className="title"><p>{productItem.name}</p></div>
                <div className="category"><p>{productItem.category}, {productItem.subCategory}</p></div>
            </div>
        </div>
    );

}

export default ItemProductTable