import * as React from "react"
import { Card, Icon, Avatar } from 'antd'
import { Link } from "react-router-dom"

import "./fastCart.scss";
import ItemFastCart from '../itemFastCart/itemFastCart'

export function FastCart({
  cart
}) {
  const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div>
      { cart.items.length !== 0 &&
        <Card className="fast-cart">
          {cart.items.map(item => {
            return (<Card.Grid key={item._id} style={gridStyle}> <ItemFastCart productItem ={item} /></Card.Grid>);
          })}
          <Card.Grid style={gridStyle}> <div className="view-cart"><Link to="/shopping-cart">View cart</Link></div> </Card.Grid>
        </Card>
      }
    </div>
  );

}

export default FastCart