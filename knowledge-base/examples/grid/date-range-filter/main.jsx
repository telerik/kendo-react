import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';

import { sampleProducts } from './sample-products';

const defaultValue = new Date(1996, 8, 19);

class App extends React.Component {
  constructor(props) {
    super(props);

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

    this.state = {
      data: sampleProducts.slice(),
      filter: defaultFilter,
    };
  }

  filterChange = (event) => {
    this.setState({ filter: event.filter });
  };

  handleClearDateFilter = () => {
    let currentFilters = { ...this.state.filter };
    let newFilter = currentFilters.filters.filter((filter) => {
      return filter.field !== 'FirstOrderedOn';
    });
    currentFilters.filters = newFilter;
    this.minDateFilter = null;
    this.maxDateFilter = null;
    this.setState({ filter: currentFilters });
  };

  handleDateFilterChange = (event) => {
    let currentFilters = { ...this.state.filter };
    if (event.operator === 'gt') {
      this.minDateFilter = event.value;
    } else {
      this.maxDateFilter = event.value;
    }
    if (currentFilters.filters) {
      let newFilter = currentFilters.filters.filter((filter) => {
        return !(
          filter.field === 'FirstOrderedOn' &&
          filter.operator === event.operator
        );
      });
      currentFilters.filters = newFilter;
      currentFilters.filters.push({
        field: 'FirstOrderedOn',
        operator: event.operator,
        value: event.value,
      });
    } else {
      currentFilters.filters = [];
      currentFilters.logic = 'and';
      currentFilters.filters.push({
        field: 'FirstOrderedOn',
        operator: event.operator,
        value: event.value,
      });
    }
    this.setState({ filter: currentFilters });
  };

  MyDateFilterCell = (props) => (
    <div className="k-filtercell">
      <DatePicker
        format={'MMMM yyyy'}
        defaultValue={defaultValue}
        value={props.min}
        onChange={(e) => {
          this.handleDateFilterChange({
            value: e.target.value,
            operator: 'gt',
          });
        }}
      />
      <DatePicker
        format={'MMMM yyyy'}
        value={props.max}
        onChange={(e) => {
          this.handleDateFilterChange({
            value: e.target.value,
            operator: 'lt',
          });
        }}
      />
      <Button
        title="Clear"
        disabled={!(this.props.min || this.props.max)}
        onClick={() => this.props.onDateFilterClear()}
      >
        Clear
      </Button>
    </div>
  );

  render() {
    return (
      <Grid
        style={{ height: '400px' }}
        data={filterBy(this.state.data, this.state.filter)}
        filterable={true}
        filter={this.state.filter}
        onFilterChange={this.filterChange}
      >
        <Column field="ProductID" title="ID" filterable={false} width="40px" />
        <Column
          filter="date"
          field="FirstOrderedOn"
          format={'{0:dd/MM/yyyy}'}
          width={300}
          filterCell={this.MyDateFilterCell}
        />
        <Column field="ProductName" title="Product Name" width="160px" />
        <Column
          field="Category.CategoryName"
          title="Category Name"
          width="240px"
        />
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('my-app'));
