import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Layout, Col } from 'antd'

import { api } from '../../../reducers'

import './order.component.scss'
import {
   
} from './components/'
import {
 sideNav, SideNav
} from '../../../components'

export function Order({ }) {
    const { Content } = Layout;
    return (
        <div className="order">
          <Content className="body-page">
              <Col span={4}>
                  <SideNav/>
              </Col>

              <Col span={19} offset={1}></Col>
          </Content>
        </div >
    );
}

export default Order;
