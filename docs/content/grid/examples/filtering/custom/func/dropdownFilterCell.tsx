import * as React from 'react';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { GridFilterCellProps } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { filterClearIcon } from '@progress/kendo-svg-icons';

interface DropdownFilterCellProps extends GridFilterCellProps {
    defaultItem: string;
    data: string[];
}

export const DropdownFilterCell = (props: DropdownFilterCellProps) => {
    let hasValue: any = (value) => Boolean(value && value !== props.defaultItem);

    const onChange = (event: DropDownListChangeEvent) => {
        hasValue = hasValue(event.target.value);
        props.onChange({
            value: hasValue ? event.target.value : '',
            operator: hasValue ? 'eq' : '',
            syntheticEvent: event.syntheticEvent
        });
    };

    const onClearButtonClick = (event) => {
        event.preventDefault();
        props.onChange({
            value: '',
            operator: '',
            syntheticEvent: event
        });
    };
    return (
        <div className="k-filtercell">
            <DropDownList
                data={props.data}
                onChange={onChange}
                value={props.value || props.defaultItem}
                defaultItem={props.defaultItem}
            />
            <Button
                title="Clear"
                disabled={!hasValue(props.value)}
                onClick={onClearButtonClick}
                svgIcon={filterClearIcon}
            />
        </div>
    );
};
