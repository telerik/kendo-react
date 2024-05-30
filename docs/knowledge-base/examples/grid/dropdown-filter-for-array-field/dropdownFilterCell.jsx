import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
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
        <button className="k-button k-button-icon k-clear-button-visible" title="Clear" disabled={!hasValue(props.value)} onClick={onClearButtonClick}>
          <span className="k-icon k-i-filter-clear" />
        </button>
      </div>;
};