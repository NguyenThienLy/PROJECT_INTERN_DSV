import * as React from "react";
import { Card, Icon, Avatar } from 'antd';

import "./itemFastCart.scss";

export function ItemFastCart({ }) {
  const { Meta } = Card;

  return (
    <div>
      <Card className="item-fast-cart"
        style={{ width: 300 }}
      >
        <Meta
          avatar={<Avatar shape="square" src="https://i.imgur.com/KhjpIwg.jpg" />}
          title="New Balance Men's Street Backpack"
          description="$485 S - Black - 1 pcs"
        />
      </Card>
    </div>
  );

}

export default ItemFastCart