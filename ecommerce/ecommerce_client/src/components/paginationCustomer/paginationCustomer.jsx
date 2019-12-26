import * as React from "react";

import "./paginationCustomer.scss";
import { Pagination } from 'antd'

export function PaginationCustomer({ }) {

  return (
    <div className="pagination-customer">
        <Pagination simple defaultCurrent={2} total={50} />
    </div>
  );
}

export default PaginationCustomer
