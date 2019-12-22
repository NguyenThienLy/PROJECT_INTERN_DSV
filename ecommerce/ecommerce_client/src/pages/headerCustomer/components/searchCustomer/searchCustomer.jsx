import * as React from "react";
import { Input } from 'antd';

import "./searchCustomer.scss";

export function SearchCustomer({ }) {
  const { Search } = Input;

  return (
    <div>
      <Search
        placeholder="Search"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </div>
  );

}

export default SearchCustomer