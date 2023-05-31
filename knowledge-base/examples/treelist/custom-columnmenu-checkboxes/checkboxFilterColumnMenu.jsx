import React from 'react';
import { ColumnMenuBooleanColumn } from '@progress/kendo-react-data-tools';
import { Checkbox } from '@progress/kendo-react-inputs';

const ColumnMenuCustomCheckboxesFilter = (props) => {
  const { filter, onFilterChange, data } = props;
  const inputChange = React.useCallback(
    (event) => {
      const newFilter = {
        ...filter,
        value: filter.value.includes(event.value)
          ? filter.value.filter((f) => f !== event.value)
          : [event.value, ...filter.value],
      };

      onFilterChange.call(undefined, event.syntheticEvent, newFilter, filter);
    },
    [filter, onFilterChange]
  );

  return (
    <div style={{ height: '300px', overflow: 'scroll' }}>
      {data.map((i) => (
        <React.Fragment key={i}>
          <Checkbox
            onChange={(event) =>
              inputChange({ syntheticEvent: event.syntheticEvent, value: i })
            }
            checked={filter.value.includes(i)}
            label={String(i)}
            labelPlacement="after"
          />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export const ColumnMenuCustomCheckboxesColumn = (props) => {
  const initialFilter = React.useCallback(
    (field) => ({
      logic: 'or',
      filters: [
        {
          operator: (current, values) => values.includes(current),
          field,
          value: [],
        },
      ],
    }),
    []
  );

  return (
    <ColumnMenuBooleanColumn
      {...props}
      filterContent={[
        (props2) => (
          <ColumnMenuCustomCheckboxesFilter {...props2} data={props.data} />
        ),
      ]}
      initialFilter={initialFilter}
    />
  );
};
