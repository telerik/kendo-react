import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { filterIcon } from '@progress/kendo-svg-icons';
export const InputFilterCell = (props) => {
  let hasValue = (value) => Boolean(value && value !== props.defaultItem);
  const onChange = (event) => {
    hasValue = hasValue(event.target.value);
    props.onChange({
      value: hasValue ? event.target.value : '',
      operator: hasValue ? (props.operator ? props.operator : 'contains') : '',
      syntheticEvent: event.syntheticEvent,
    });
  };
  const onClearButtonClick = (event) => {
    event.preventDefault();
    props.onChange({
      value: '',
      operator: '',
      syntheticEvent: event,
    });
  };

  const onOperatorChange = (event) => {
    hasValue = hasValue(props.value);
    props.onChange({
      value: props.value,
      operator: event.value.operator,
      syntheticEvent: event.syntheticEvent,
    });
  };
  return (
    <div className="k-filtercell">
      <Input onChange={onChange} value={props.value} />
      <Button
        title="Clear"
        disabled={!hasValue(props.value)}
        onClick={onClearButtonClick}
        icon="filter-clear"
      />
      <DropDownList
        value={
          props.operator
            ? props.operators.find((i) => i.operator == props.operator)
            : props.operators.find((i) => i.operator == 'contains') //this will be the default operator
        }
        onChange={onOperatorChange}
        className="k-dropdown-operator"
        iconClassName="k-i-filter k-icon"
        svgIcon={filterIcon}
        data={props.operators}
        textField="text"
        title={'Select operator'}
        popupSettings={{
          width: '',
        }}
      />
    </div>
  );
};
