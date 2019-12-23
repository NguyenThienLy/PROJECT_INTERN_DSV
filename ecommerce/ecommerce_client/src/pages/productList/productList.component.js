import React, { useState, useEffect } from 'react'

import {
    Product,
    Filter
} from './components'
import HeaderCustomer from '../headerCustomer/headerCustomer.component';

function ProductList({ productFilter }) {

    useEffect(() => {
       console.log("productFilter", productFilter)
    });

    return (
        <div>
            <HeaderCustomer/>
            {productFilter.data.map((element) => {
               return <Product key={element.id} product={element} />
            })}
        </div>
    );
}

export default ProductList;