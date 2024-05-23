import * as React from 'react';

import { LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import {
  Grid,
  GridColumn as Column,
  GRID_COL_INDEX_ATTRIBUTE,
} from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './sample-products';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';
const initialFilter = {
  logic: 'and',
  filters: [
    {
      field: 'ProductName',
      operator: 'contains',
      value: 'Chef',
    },
  ],
};
loadMessages(
  {
    grid: {
      filterIsTrue: 'Yes',
      filterIsFalse: 'No',
    },
  },
  'myCustomMessages'
);

const BooleanYesNoCell = (props) => {
  const field = props.field || '';
  const value = props.dataItem[field];
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  let content = (
    <td
      colSpan={props.colSpan}
      role={'gridcell'}
      aria-colindex={props.ariaColumnIndex}
      aria-selected={props.isSelected}
      {...{
        [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex,
      }}
      {...navigationAttributes}
    >
      {value === null ? '' : props.dataItem[field] ? 'Yes' : 'No'}
    </td>
  ); 

  return props.render ? props.render.call(undefined, content, props) : content;
};
const App = () => {
  const [filter, setFilter] = React.useState(initialFilter);
  return (
    <LocalizationProvider language="myCustomMessages">
      <Grid
        style={{
          height: '420px',
        }}
        data={filterBy(sampleProducts, filter)}
        filterable={true}
        filter={filter}
        onFilterChange={(e) => setFilter(e.filter)}
      >
        <Column 
          field="FirstOrderedOn"
          width="240px"
          filter="date"
          format="{0:d}"
        />
        <Column
          field="UnitPrice"
          width="180px"
          filter="numeric"
          format="{0:c}"
        />
        <Column
          field="Discontinued"
          width="190px"
          filter="boolean"
          cell={BooleanYesNoCell}
        />
      </Grid>
    </LocalizationProvider>
  );
};

export default App;
