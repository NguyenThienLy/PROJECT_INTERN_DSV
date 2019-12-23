import * as React from "react"
import { Card, Icon, Avatar } from 'antd'
import { Link } from "react-router-dom"

import "./subCategory.scss";

export function SubCategory({ }) {
  const { Meta } = Card;

  return (
    <div>
      <Card className="sub-category">
        <Card.Grid > Tops </Card.Grid>
        <Card.Grid > Bottoms </Card.Grid>
        <Card.Grid > Dresses </Card.Grid>
        <Card.Grid > Jackets </Card.Grid>
        <Card.Grid > Shoes </Card.Grid>
        <Card.Grid > Accesories </Card.Grid>
        <Card.Grid > Sale </Card.Grid>
      </Card>
    </div>
  );

}

export default SubCategory