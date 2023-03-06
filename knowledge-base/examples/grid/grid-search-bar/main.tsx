import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  GridColumn as Column,
  GridFilterChangeEvent,
  GridFilterOperators,
  GridToolbar,
} from '@progress/kendo-react-grid';
import {
  process,
} from '@progress/kendo-data-query';
import { sampleProducts } from './sample-products';
import { Input } from '@progress/kendo-react-inputs';
const filterOperators: GridFilterOperators = {
  text: [{ text: 'grid.filterContainsOperator', operator: 'contains' }],
  numeric: [{ text: 'grid.filterEqOperator', operator: 'eq' }],
  date: [{ text: 'grid.filterEqOperator', operator: 'eq' }],
  boolean: [{ text: 'grid.filterEqOperator', operator: 'eq' }],
};

const App = () => {
  const [filterValue, setFilterValue] = React.useState();
  const [filteredSampleProducts, setFilteredSampleProducts] =
    React.useState(sampleProducts);

  const [dataState, setDataState] = React.useState({
    skip: 0,
    take: 10,
  });

  const [dataResult, setDataResult] = React.useState(
    process(filteredSampleProducts, dataState)
  );

  const dataStateChange = (event) => {
    setDataResult(process(filteredSampleProducts, event.dataState));
    setDataState(event.dataState);
  };

  const expandChange = (event) => {
    const isExpanded =
      event.dataItem.expanded === undefined
        ? event.dataItem.aggregates
        : event.dataItem.expanded;
    event.dataItem.expanded = !isExpanded;

    setDataResult({ ...dataResult });
  };
  const onFilterChange = (ev) => {
    let value = ev.value;
    setFilterValue(ev.value);
    let newData = sampleProducts.filter((item) => {
      let match = false;
      for (const property in item) {
        if (
          item[property]
            .toString()
            .toLocaleLowerCase()
            .indexOf(value.toLocaleLowerCase()) >= 0
        ) {
          match = true;
        }
        if (
          item[property].toLocaleDateString &&
          item[property].toLocaleDateString().indexOf(value) >= 0
        ) {
          match = true;
        }
      }
      return match;
    });
    setFilteredSampleProducts(newData);
    let clearedPagerDataState = { ...dataState, take: 10, skip: 0 };
    let processedData = process(newData, clearedPagerDataState);
    setDataResult(processedData);
    setDataState(clearedPagerDataState);
  };

  const getHighlight = (value, filter) => {
    let index = value
      .toLocaleLowerCase()
      .indexOf(filterValue.toLocaleLowerCase());
    if (index >= 0) {
      let left = value.substr(0, index);
      let right = value.substring(index + filter.length, value.length);
      return (
        <React.Fragment>
          {left}
          <span className="highligth">
            {value.substr(index, filter.length)}
          </span>
          {getHighlight(right, filter)}
        </React.Fragment>
      );
    }
    return value;
  };
  const cellRender = React.useCallback(
    (td, props) => {
      const value = td.props.children;
      if (
        filterValue &&
        filterValue.length > 0 &&
        value.substr &&
        value.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) >= 0
      ) {
        const children = getHighlight(value, filterValue.toLocaleLowerCase());
        return React.cloneElement(td, [props], [children]);
      }
      return td;
    },
    [filterValue]
  );
  return (
    <div>
      <Grid
        cellRender={cellRender}
        style={{ height: '420px' }}
        data={dataResult}
        {...dataState}
        onDataStateChange={dataStateChange}
        expandField="expanded"
        pageable={true}
        onExpandChange={expandChange}
      >
        <GridToolbar>
          <div>
            <span style={{ padding: '5px' }}>Search: </span>
            <span>
              <Input
                value={filterValue}
                onChange={onFilterChange}
                style={{
                  border: '2px solid #ccc',
                  boxShadow: 'inset 0px 0px 0.5px 0px rgba(0,0,0,0.0.1)',
                }}
              />
            </span>
          </div>
        </GridToolbar>
        <Column field="ProductID" title="ID" filterable={false} width="60px" />
        <Column field="ProductName" title="Product Name" width="260px" />
        <Column
          field="FirstOrderedOn"
          width="220px"
          filter="date"
          format="{0:d}"
        />
        <Column
          field="UnitPrice"
          width="180px"
          filter="numeric"
          format="{0:c}"
        />
        <Column field="Discontinued" width="190px" filter="boolean" />
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
