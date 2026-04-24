import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

export const DropdownFilterCell = props => {
    let hasValue = value => Boolean(value && value !== props.defaultItem);

    const onChange = event => {
        hasValue = hasValue(event.target.value);
        props.onChange({
            value: hasValue ? event.target.value : '',
            operator: hasValue ? 'eq' : '',
            syntheticEvent: event.syntheticEvent
        });
    };

    const onClearButtonClick = event => {
        event.preventDefault();
        props.onChange({
            value: '',
            operator: '',
            syntheticEvent: event
        });
    };

    return <div className="k-filtercell">
        <DropDownList data={props.data} onChange={onChange} value={props.value || props.defaultItem} defaultItem={props.defaultItem} />
        <Button type="button" icon="filter-clear" title="Clear" disabled={!hasValue(props.value)} onClick={onClearButtonClick} />
      </div>;
};
