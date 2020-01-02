import React, { useState, useEffect } from 'react';
import { Card, Icon, Avatar } from 'antd';
import { Link } from "react-router-dom";

import "./fastCart.scss";
import ItemFastCart from '../itemFastCart/itemFastCart';

export function FastCart({
  cart
}) {
  const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div>
      {cart.items.length !== 0 &&
        <Card className="fast-cart">
          <div className="scrollbar">
            {cart.items.map((item, index) => {
              return (<Card.Grid key={index} style={gridStyle}> <ItemFastCart cartItem={item} /></Card.Grid>);
            })}
          </div>
          <Card.Grid style={gridStyle}> <div className="view-cart"><Link to="/shopping-cart">View cart</Link></div> </Card.Grid>
        </Card>
      }
    </div>
  );

}

export default FastCart