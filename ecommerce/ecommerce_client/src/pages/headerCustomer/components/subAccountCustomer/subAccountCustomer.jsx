import * as React from "react"
import { Divider, Button } from 'antd'
import { Link } from "react-router-dom"

import "./subAccountCustomer.scss";

export function SubAccountCustomer({ }) {

  return (
    <div className="sub-account-customer">
        <ul>
            <Link to="/profile"><li>Account setting</li></Link>
            <Divider className="divider-sub-account-customer"/>
            <li><Button type="link">Link</Button></li>
        </ul>
    </div>
  );

}

export default SubAccountCustomer