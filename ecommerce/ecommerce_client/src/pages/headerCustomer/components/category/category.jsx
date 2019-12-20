import * as React from "react";

import "./category.scss";
import { List, Icon } from 'antd';

export class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {
        title: 'Men',
      },
      {
        title: 'Ladies',
      },
      {
        title: 'Girls',
      },
      {
        title: 'Boy',
      },
    ];

    return (
      <div>
        <List style={{width: '285px'}}
          grid={{ gutter: 4, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<h3>{item.title}<Icon type="down" /></h3> }  
              />
            </List.Item>
          )}
        />,
      </div>
    );
  }
}

export default Category