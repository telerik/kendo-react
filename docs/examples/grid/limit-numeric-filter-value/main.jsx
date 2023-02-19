import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { NumericTextBox } from '@progress/kendo-react-inputs';

import products from './products.json';

export const RangeFilterCell = (props) => {
  let minTextBox;
  let maxTextBox;

  const inRange = (current, { min, max }) =>
    (min === null || current >= min) && (max === null || current <= max);

  const onChange = (event) => {
    props.onChange({
      value: {
        min: minTextBox.value,
        max: maxTextBox.value,
      },
      operator: inRange,
      syntheticEvent: event.syntheticEvent,
    });
  };

  const onClearButtonClick = (event) => {
    event.preventDefault();
    props.onChange({
      value: null,
      operator: '',
      syntheticEvent: event,
    });
  };

  const value = props.value || null;
  return (
    <div>
      Min:
      <span
        style={{
          margin: '0 16px 0 2px',
        }}
      >
        <NumericTextBox
          width="70px"
          value={value && value.min}
          min={0}
          ref={(numeric) => {
            minTextBox = numeric;
          }}
          onChange={onChange}
        />
      </span>
      Max:
      <span
        style={{
          margin: '0 2px 0 4px',
        }}
      >
        <NumericTextBox
          width="70px"
          value={value && value.max}
          min={0}
          ref={(numeric) => {
            maxTextBox = numeric;
          }}
          onChange={onChange}
        />
      </span>
      <button
        className="k-button k-button-icon k-clear-button-visible"
        title="Clear"
        disabled={!value}
        onClick={onClearButtonClick}
      >
        <span className="k-icon k-i-filter-clear" />
      </button>
    </div>
  );
};

import { DropDownList } from '@progress/kendo-react-dropdowns';
export const DropdownFilterCell = (props) => {
  let hasValue = (value) => Boolean(value && value !== props.defaultItem);

  const onChange = (event) => {
    hasValue = hasValue(event.target.value);
    props.onChange({
      value: hasValue ? event.target.value : '',
      operator: hasValue ? 'eq' : '',
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
      <DropDownList
        data={props.data}
        onChange={onChange}
        value={props.value || props.defaultItem}
        defaultItem={props.defaultItem}
      />
      <button
        className="k-button k-button-icon k-clear-button-visible"
        title="Clear"
        disabled={!hasValue(props.value)}
        onClick={onClearButtonClick}
      >
        <span className="k-icon k-i-filter-clear" />
      </button>
    </div>
  );
};
const categories = Array.from(
  new Set(
    products.map((p) => (p.Category ? p.Category.CategoryName : ''))
  )
);

const CategoryFilterCell = (props) => (
  <DropdownFilterCell
    {...props}
    data={categories}
    defaultItem={'Select category'}
  />
);

const App = () => {
  const [data, setData] = React.useState(products);
  const [filter, setFilter] = React.useState();

  const filterChange = (event) => {
    setData(filterBy(products, event.filter));
    setFilter(event.filter);
  };

  return (
    <Grid
      style={{
        height: '400px',
      }}
      data={data}
      filterable={true}
      filter={filter}
      onFilterChange={filterChange}
    >
      <Column field="ProductID" title="ID" filterable={false} width="60px" />
      <Column field="ProductName" title="Product Name" />
      <Column
        field="Category.CategoryName"
        title="Category Name"
        filterCell={CategoryFilterCell}
      />
      <Column
        field="UnitPrice"
        title="Unit Price"
        format="{0:c}"
        filterCell={RangeFilterCell}
      />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
