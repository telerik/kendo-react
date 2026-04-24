import * as React from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

export const MyCustomEditCell = (props: GridCustomCellProps) => {
    const additionalProps = {
        ref: (td) => {
            const input = td && td.querySelector('input');
            const activeElement = document.activeElement;

            if (!input || !activeElement || input === activeElement || !activeElement.contains(input)) {
                return;
            }

            if (input.type === 'checkbox') {
                input.focus();
            }
        }
    };

    return (
        <td {...props.tdProps} {...additionalProps}>
            {props.children}
        </td>
    );
};

export const MyCustomDateCell = (props: GridCustomCellProps) => {
    const { dataItem, field } = props;
    const value = field && dataItem[field] ? dataItem[field] : '19990101';

    return (
        <td
            style={{
                textAlign: 'center'
            }}
            {...props.tdProps}
        >
            {value ? value.toLocaleDateString() : ''}
        </td>
    );
};

export const MyCustomDateEditCell = (props: GridCustomCellProps) => {
    const { dataItem, field } = props;
    const value = field && dataItem[field] ? dataItem[field] : '19990101';
    const onChange = (e) => {
        if (props.onChange) {
            props.onChange({
                dataIndex: 0,
                dataItem: props.dataItem,
                field: props.field,
                syntheticEvent: e.syntheticEvent,
                value: e.target.value
            });
        }
    };

    return (
        <MyCustomEditCell {...props}>
            <div>
                <DatePicker name={field} defaultValue={value} format="yyyy-MM-dd" onChange={onChange} />
            </div>
        </MyCustomEditCell>
    );
};
