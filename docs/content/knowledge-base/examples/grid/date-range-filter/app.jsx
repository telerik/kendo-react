import React, { useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';

import { sampleProducts } from './shared-kb-sample-products';

const defaultValue = new Date(1996, 8, 19);

const App = () => {
  const defaultFilter = {
    logic: 'and',
    filters: [
      {
        field: 'FirstOrderedOn',
        operator: 'gte',
        value: defaultValue,
      },
    ],
  };

  const [data] = useState(sampleProducts.slice());
  const [filter, setFilter] = useState(defaultFilter);
  const [minDateFilter, setMinDateFilter] = useState(null);
  const [maxDateFilter, setMaxDateFilter] = useState(null);

  const filterChange = (event) => {
    setFilter(event.filter);
  };

  const handleClearDateFilter = () => {
    const newFilter = filter.filters.filter(
      (f) => f.field !== 'FirstOrderedOn'
    );
    setMinDateFilter(null);
    setMaxDateFilter(null);
    setFilter({ ...filter, filters: newFilter });
  };

  const handleDateFilterChange = ({ value, operator }) => {
    let newFilters = filter.filters.filter(
      (f) => !(f.field === 'FirstOrderedOn' && f.operator === operator)
    );

    newFilters.push({
      field: 'FirstOrderedOn',
      operator,
      value,
    });

    if (operator === 'gt') {
      setMinDateFilter(value);
    } else {
      setMaxDateFilter(value);
    }

    setFilter({ ...filter, filters: newFilters });
  };

  const MyDateFilterCell = () => (
    <div className="k-filtercell">
      <DatePicker
        format={'MMMM yyyy'}
        defaultValue={defaultValue}
        value={minDateFilter}
        onChange={(e) =>
          handleDateFilterChange({
            value: e.target.value,
            operator: 'gt',
          })
        }
      />
      <DatePicker
        format={'MMMM yyyy'}
        value={maxDateFilter}
        onChange={(e) =>
          handleDateFilterChange({
            value: e.target.value,
            operator: 'lt',
          })
        }
      />
      <Button
        title="Clear"
        disabled={!(minDateFilter || maxDateFilter)}
        onClick={handleClearDateFilter}
      >
        Clear
      </Button>
    </div>
  );

  return (
    <Grid
      style={{ height: '400px' }}
      data={filterBy(data, filter)}
      filterable={true}
      filter={filter}
      onFilterChange={filterChange}
    >
      <Column field="ProductID" title="ID" filterable={false} width="40px" />
      <Column
        filter="date"
        field="FirstOrderedOn"
        format={'{0:dd/MM/yyyy}'}
        width={300}
        cells={{ filterCell: MyDateFilterCell }}
      />
      <Column field="ProductName" title="Product Name" width="160px" />
      <Column
        field="Category.CategoryName"
        title="Category Name"
        width="240px"
      />
    </Grid>
  );
};

export default App;
