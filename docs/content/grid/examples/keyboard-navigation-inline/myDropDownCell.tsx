import * as React from 'react';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

export const DropDownCell = (props: GridCustomCellProps) => {
    const localizedData = [
        { text: 'yes', value: true },
        { text: 'no', value: false },
        { text: '(empty)', value: null }
    ];

    const handleChange = (e: DropDownListChangeEvent) => {
        if (props.onChange) {
            props.onChange({
                dataIndex: 0,
                dataItem: props.dataItem,
                field: props.field,
                syntheticEvent: e.syntheticEvent,
                value: e.target.value.value
            });
        }
    };

    const { dataItem } = props;
    const field = props.field || '';
    const dataValue = dataItem[field] === null ? '' : dataItem[field];

    return (
        <td {...props.tdProps}>
            {dataItem.inEdit ? (
                <DropDownList
                    style={{ width: '100px' }}
                    onChange={handleChange}
                    value={localizedData.find((c) => c.value === dataValue)}
                    data={localizedData}
                    textField="text"
                />
            ) : dataValue == null ? (
                ''
            ) : dataValue ? (
                'yes'
            ) : (
                'no'
            )}
        </td>
    );
};
