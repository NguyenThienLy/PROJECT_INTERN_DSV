import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Avatar } from 'antd';

import './sideNav.scss';

export function SideNav({
    selectDefault
 }) {
    const { SubMenu } = Menu;

    useEffect(()=>{
    
    })

    return (
        <div className="side-nav">
            <div className="container-logo">
                <Link to="/"> <Avatar shape="square" className="logo" src="https://i.imgur.com/QUUigZo.png" /> </Link>
            </div>

            <Menu
                className="menu-seller"
                selectedKeys={[`${selectDefault}`]}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Overview</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link className="link-name" to="/seller/order-page">
                        <Icon type="ordered-list" />
                        <span>Orders</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="skin" />
                            <span>Products</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">
                        <Link className="link-name" to="/seller/product-main">Main </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link className="link-name" to="/seller/product-add">Add</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link className="link-name" to="/seller/product-update">Update</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="6">
                    <Icon type="pay-circle" />
                    <span>Payments</span>
                </Menu.Item>
                <Menu.Item key="7">
                    <Icon type="tag" />
                    <span>Promotions</span>
                </Menu.Item>
                <Menu.Item key="8">
                    <Icon type="setting" />
                    <span>Setting</span>
                </Menu.Item>
            </Menu>
        </div >
    );
}

export default SideNav;
