import * as React from "react";

import "./footerCustomer.scss";
import { Icon, Avatar } from 'antd'

export function FooterCustomer({ }) {

  return (
    <div className="footer-customer">
      <div className="top">
        <div className="space-start"></div>

        <div className="left">
          <Avatar shape="square" className="logo" src="https://i.imgur.com/QUUigZo.png" />
        </div>

        <div className="center">
          <ul className="ul">
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Help</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="right">
          <Icon className="icon" type="twitter" />
          <Icon className="icon" type="facebook" />
          <Icon className="icon" type="instagram" />
        </div>

        <div className="space-end"></div>
      </div>

      <div className="bottom">
        <div className="space-start"></div>

        <div className="left">
          <ul className="ul">
            <li className="start">Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Help</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="right">
        <ul className="ul">
            <li>Privacy Policy</li>
            <li className="end">Term & Conditions</li>
          </ul>
        </div>

        <div className="space-end"></div>
      </div>
    </div>
  );
}

export default FooterCustomer
