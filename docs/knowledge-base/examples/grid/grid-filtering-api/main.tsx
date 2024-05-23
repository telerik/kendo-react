import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  GridColumn as Column,
  GridFilterChangeEvent,
} from '@progress/kendo-react-grid';
import {
  filterBy,
  CompositeFilterDescriptor,
} from '@progress/kendo-data-query';

const initialFilter: CompositeFilterDescriptor = {
  logic: 'and',
  filters: [
    {
      field: 'name',
      operator: 'contains',
      value: 'Leanne Graham',
    },
  ],
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = React.useState(initialFilter);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  return (
    <Grid
      style={{
        height: '400px',
      }}
      data={filterBy(users, filter)}
      filterable={true}
      filter={filter}
      onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
    >
      <Column field="id" title="ID" width="40px" />
      <Column field="name" title="Name" width="250px" />
      <Column field="email" title="Email" />
      <Column field="address.street" title="Address" />
      <Column field="address.zipcode" title="Zipcode" />
      <Column field="address.city" title="City" />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
