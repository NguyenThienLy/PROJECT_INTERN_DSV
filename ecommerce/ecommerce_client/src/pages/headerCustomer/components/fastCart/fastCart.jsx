import * as React from "react"
import { Card, Icon, Avatar } from 'antd'
import { Link } from "react-router-dom"

import "./fastCart.scss";
import ItemFastCart from '../itemFastCart/itemFastCart'

export function FastCart({ }) {
  const { Meta } = Card;

  const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div>
      <Card className="fast-cart">
        <Card.Grid style={gridStyle}>  <ItemFastCart /></Card.Grid>
        <Card.Grid style={gridStyle}>  <ItemFastCart /></Card.Grid>
        <Card.Grid style={gridStyle}>  <ItemFastCart /></Card.Grid>
        <Card.Grid style={gridStyle}> <div className="wiew-cart"><Link  to="/shopping-cart">Wiew cart</Link></div> </Card.Grid>
      </Card>
    </div>
  );

}

export default FastCart