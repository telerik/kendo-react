import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { DatePicker } from '@progress/kendo-react-dateinputs';

import { sampleProducts } from './sample-products';

const categories = Array.from(
  new Set(sampleProducts.map(p => p.Category.CategoryName))
);

class App extends React.Component {
  CategoryFilterCell;
  minDateFilter = undefined;
  maxDateFilter = undefined;
  constructor(props) {
    super(props);
    this.state = {
      data: sampleProducts.slice(),
      filter: []
    };
  }

  filterChange = event => {
    this.setState({ filter: event.filter });
  };

  handleClearDateFilter = () => {
    let currentFilters = { ...this.state.filter };
    let newFilter = currentFilters.filters.filter(filter => {
      return filter.field !== 'FirstOrderedOn';
    });
    currentFilters.filters = newFilter;
    this.minDateFilter = null;
    this.maxDateFilter = null;
    this.setState({ filter: currentFilters });
  };

  handleDateFilterChange = event => {
    let currentFilters = { ...this.state.filter };
    if (event.operator === 'gt') {
      this.minDateFilter = event.value;
    } else {
      this.maxDateFilter = event.value;
    }
    if (currentFilters.filters) {
      let newFilter = currentFilters.filters.filter(filter => {
        return !(
          filter.field === 'FirstOrderedOn' &&
          filter.operator === event.operator
        );
      });
      currentFilters.filters = newFilter;
      currentFilters.filters.push({
        field: 'FirstOrderedOn',
        operator: event.operator,
        value: event.value
      });
    } else {
      currentFilters.filters = [];
      currentFilters.logic = 'and';
      currentFilters.filters.push({
        field: 'FirstOrderedOn',
        operator: event.operator,
        value: event.value
      });
    }
    this.setState({ filter: currentFilters });
  };

  MyDateFilterCell = props => (
    <DateRangeFilter
      {...props}
      min={this.minDateFilter}
      max={this.maxDateFilter}
      onDateFilterChange={this.handleDateFilterChange}
      onDateFilterClear={this.handleClearDateFilter}
    />
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
          format={'{0:dd/MM/yyy}'}
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

class DateRangeFilter extends React.Component {
  render() {
    return (
      <div className="k-filtercell">
        <DatePicker
          value={this.props.min}
          onChange={e => {
            this.props.onDateFilterChange({
              value: e.target.value,
              operator: 'gt'
            });
          }}
        />
        <DatePicker
          value={this.props.max}
          onChange={e => {
            this.props.onDateFilterChange({
              value: e.target.value,
              operator: 'lt'
            });
          }}
        />
        <button
          className="k-button k-button-icon k-clear-button-visible"
          title="Clear"
          disabled={!(this.props.min || this.props.max)}
          onClick={() => this.props.onDateFilterClear()}
        >
          <span className="k-icon k-i-filter-clear" />
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('my-app'));
