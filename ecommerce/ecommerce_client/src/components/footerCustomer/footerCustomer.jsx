import * as React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

export class FooterCustomer extends React.Component {
      render() {
        return (
          <div>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </div>
        );
      }
}
