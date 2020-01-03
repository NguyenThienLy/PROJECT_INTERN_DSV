import * as React from 'react';
import { Table, Tag, Button, Dropdown, Menu, Icon } from 'antd';

import './productTable.scss';
import {
    ItemProductTable
} from '../index';

export function ProductTable({ }) {
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
          <Button style={styleBtnRemove} className="btn-action-product-table"  type="primary"  icon="delete">Remove</Button>
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

    const data = [
        {
            key: '1',
            products: {
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                name: 'Collete Stretch Linen Minidress',
                category: 'Girls',
                subCategory: 'Long dresse'
            },
            sold: '4/10',
            dateAdded: 'Today, 8th Aug, 2018',
            profit: '60.00'
        },
        {
            key: '2',
            products: {
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                name: 'Collete Stretch Linen Minidress',
                category: 'Girls',
                subCategory: 'Long dresse'
            },
            sold: '4/10',
            dateAdded: 'Today, 8th Aug, 2018',
            profit: '60.00'
        },
        {
            key: '3',
            products: {
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                name: 'Collete Stretch Linen Minidress',
                category: 'Girls',
                subCategory: 'Long dresse'
            },
            sold: '4/10',
            dateAdded: 'Today, 8th Aug, 2018',
            profit: '60.00'
        },
        {
            key: '4',
            products: {
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                name: 'Collete Stretch Linen Minidress',
                category: 'Girls',
                subCategory: 'Long dresse'
            },
            sold: '4/10',
            dateAdded: 'Today, 8th Aug, 2018',
            profit: '60.00'
        }
    ];

    return (
        <div className="product-table">
            <Table className="table" columns={columns} dataSource={data} />
        </div>
    );

}

export default ProductTable;