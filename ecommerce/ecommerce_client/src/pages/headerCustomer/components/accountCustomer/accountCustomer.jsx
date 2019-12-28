import * as React from "react";

import "./accountCustomer.scss";
import { Menu, Dropdown, Avatar } from 'antd'

import {
  SubAccountCustomer
} from '../index'

export function AccountCustomer({ }) {
  const menu = (
    <SubAccountCustomer />
  );

  return (
    <div className="account-customer">
      <Dropdown overlay={menu} placement="bottomRight">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Dropdown>
    </div>
  );
}


export default AccountCustomer
