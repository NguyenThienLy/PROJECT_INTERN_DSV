import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Dropdown, Menu, Icon } from 'antd';
import * as _ from 'lodash';
import * as moment from 'moment';
import './productTable.scss';
import {
    ItemProductTable
} from '../index';

export function ProductTable({
    product,
    getProductFilter
}) {
    // const [productList, setProductList] = useState([]);
    const [order, setOrder] = useState(1);

    const styleBtnEdit = {
        width: '100%',
        backgroundColor: '#ffa15f',
        border: 'none'

    };

    const styleBtnRemove = {
        width: '100%',
        backgroundColor: '#ff5f6d',
        border: 'none'
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <Button style={styleBtnEdit} className="btn-action-product-table" type="primary" icon="edit">Edit</Button>
            </Menu.Item>
            <Menu.Item>
                <Button style={styleBtnRemove} className="btn-action-product-table" type="primary" icon="delete">Remove</Button>
            </Menu.Item>
        </Menu>
    );

    const columns = [
        {
            title: 'PRODUCTS',
            dataIndex: 'products',
            key: 'products',
            render: product => <ItemProductTable productItem={product} />,
            width: 250,
        },
        {
            title: 'SOLD',
            dataIndex: 'sold',
            key: 'sold',
            width: 80,
        },
        {
            title: 'DATE ADDED',
            dataIndex: 'dateAdded',
            key: 'dateAdded',
            width: 150,
        },
        {
            title: 'PROFIT($)',
            dataIndex: 'profit',
            key: 'profit',
            width: 150,
        },
        {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
            render: () => (<Dropdown overlay={menu}>
                <span className="ant-dropdown-link">
                    Actions <Icon type="down" />
                </span>
            </Dropdown>),
            width: 150
        },
    ];

    let productList = product.items.map(item => {
        return {
            key: item._id,
            products: {
                mainImage: item.mainImage,
                name: item.name,
                subCategory: item.subCategoryList.length !== 0 ? item.subCategoryList[0].name : "No Sub category",
                category: item.categoryList.length !== 0 ? item.categoryList[0].name : "No category"
            },
            sold: `${item.soldQuantity} / ${item.soldQuantity + item.quantity}`,
            dateAdded: moment(item.createdAt).format('LL'),
            profit: `$ ${Math.round(item.price * item.soldQuantity)}`
        }
    });

    useEffect(() => {
        getProductFilter({ order: 11 });
    }, []);

    return (
        <div className="product-table">
            <div className="scrollbar">
                <Table className="table" columns={columns} dataSource={productList} />
            </div>
        </div>
    );

}

export default ProductTable;