import * as React from 'react';
import { DropDownList, DropDownListProps } from '@progress/kendo-react-dropdowns';

export const ToolbarDropdown = (props: DropDownListProps & {text: string}) => {
    const {
        text,
        ...other
    } = props;
    return (
      <DropDownList
        {...other}
        valueRender={(el, value) => <el.type {...el.props}>{text}: {value}</el.type>}
        />
    )
}
