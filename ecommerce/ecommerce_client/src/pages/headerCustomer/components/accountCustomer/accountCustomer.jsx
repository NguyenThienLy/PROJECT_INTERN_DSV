import React, { useState, useEffect } from 'react';

import "./accountCustomer.scss";
import { Menu, Dropdown, Avatar } from 'antd'

import {
  SubAccountCustomer
} from '../index'

export function AccountCustomer({ userInfo }) {
  const menu = (
    <SubAccountCustomer />
  );

  useEffect(() => {
    console.log(userInfo)
    console.log(userInfo.avatar)
  })

  return (
    <div className="account-customer">
      <Dropdown overlay={menu} placement="bottomRight">
        <Avatar src={userInfo.avatar} />
      </Dropdown>
    </div>
  );
}


export default AccountCustomer
