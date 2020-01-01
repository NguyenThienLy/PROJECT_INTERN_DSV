import React, { useState, useEffect } from 'react';

import "./accountCustomer.scss";
import { Menu, Dropdown, Avatar } from 'antd'

import {
  SubAccountCustomer
} from '../index'

export function AccountCustomer({ 
  customer,
  onLogout, 
  logout, 
  userInfo 
}) {

  useEffect(() => {
  
  })

  return (
    <div className="account-customer">
      <Dropdown overlay={<SubAccountCustomer customer={customer} onLogout={onLogout} logout={logout}/>} placement="bottomRight">
        <Avatar src={userInfo.avatar} />
      </Dropdown>
    </div>
  );
}


export default AccountCustomer
