import * as React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

export const InputFilterCell = (props) => {
  let hasValue = (value) => Boolean(value);
  const onChange = (event) => {
    hasValue = hasValue(event.target.value);
    props.onChange({
      value: hasValue
        ? event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        : '',
      operator: hasValue ? 'contains' : '',
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
  return (
    <div className="k-filtercell">
      <Input onChange={onChange} value={props.value} />
      <Button
        title="Clear"
        disabled={!hasValue(props.value)}
        onClick={onClearButtonClick}
        icon="filter-clear"
      />
    </div>
  );
};
