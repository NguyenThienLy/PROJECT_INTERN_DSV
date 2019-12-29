import * as React from "react";
import { DatePicker } from 'antd';

import "./datepicker.scss";

export function Datepicker({ }) {
    const { RangePicker } = DatePicker;

    return (
        <div className="date-picker">
            <RangePicker />
        </div>
    );

}

export default Datepicker














