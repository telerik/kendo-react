import React from "react";
import { SvgIcon } from '@progress/kendo-react-common';
import { caretAltDownIcon, caretAltUpIcon } from "@progress/kendo-svg-icons";
export default function Change(props: any) {
    const isPositive = props.change >= 0;
    const changeClass = isPositive ? 'positive' : 'negative';
    return (<span style={{ fontSize: 12, fontWeight: 500 }}>
        <span className={changeClass}>
        {isPositive ? <SvgIcon icon={caretAltUpIcon} /> :  <SvgIcon icon={caretAltDownIcon} />}
            {props.change} ({((props.change / props.price)*100).toFixed(2)}%)
        </span>

    </span>
    )
}