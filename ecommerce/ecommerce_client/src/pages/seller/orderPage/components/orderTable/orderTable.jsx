import * as React from "react";
import { Table, Tag } from 'antd';

import "./orderTable.scss";

export function OrderTable({ }) {
    const columns = [
        {
            title: 'ORDERID',
            dataIndex: 'orderId',
            key: 'orderId',
            render: text => <a>{text}</a>,
            width: 85,
        },
        {
            title: 'ORDER DATE',
            dataIndex: 'orderDate',
            key: 'ordeDate',
            width: 150,
        },
        {
            title: 'DETAIL',
            dataIndex: 'detail',
            key: 'detail',
            width: 250,
        },
        {
            title: 'TOTAL($)',
            dataIndex: 'total',
            key: 'total',
            width: 80,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            width: 80,
            render:
                status =>
                    <Tag color="#87d068">
                        {status}
                    </Tag>
        },
        {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
            width: 100
        },
    ];

    const data = [
        {
            key: '1',
            orderId: 'AB12345',
            orderDate: 'Today, 8th Aug, 2018',
            detail: 'Collete Stretch Linen Minidress (M) x 1',
            total: '60.00',
            status: ['complete']
        },
        {
            key: '2',
            orderId: 'AB12345',
            orderDate: 'Today, 8th Aug, 2018',
            detail: 'Collete Stretch Linen Minidress (M) x 1',
            total: '60.00',
            status: ['complete']
        },
        {
            key: '3',
            orderId: 'AB12345',
            orderDate: 'Today, 8th Aug, 2018',
            detail: 'Collete Stretch Linen Minidress (M) x 1',
            total: '60.00',
            status: ['complete']
        },
        {
            key: '4',
            orderId: 'AB12345',
            orderDate: 'Today, 8th Aug, 2018',
            detail: 'Collete Stretch Linen Minidress (M) x 1',
            total: '60.00',
            status: ['complete']
        }
    ];

    return (
        <div className="order-table">
            <Table className="table" columns={columns} dataSource={data} />
        </div>
    );

}

export default OrderTable