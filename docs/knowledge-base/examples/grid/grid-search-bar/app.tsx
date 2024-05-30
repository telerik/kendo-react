import * as React from 'react';

import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { sampleProducts } from './sample-products';
import { Input } from '@progress/kendo-react-inputs';

export function getNestedValue(fieldName, dataItem) {
  const path = (fieldName || '').split('.');
  let data = dataItem;
  path.forEach((p) => {
    data = data ? data[p] : undefined;
  });
  return data;
}

function highlightSearchTextInReactChildren(children, searchText) {
  function highlightInNode(node) {
    if (typeof node === 'string') {
      const modifiedContent = node.replace(
        new RegExp(`(${searchText})`, 'gi'),
        '<span style="background-color:#a8edb3">$1</span>'
      );
      if (node !== modifiedContent) {
        return (
          <span
            dangerouslySetInnerHTML={{
              __html: modifiedContent,
            }}
          />
        );
      }
    } else if (React.isValidElement(node)) {
      if (!node.props.children.map) {
        return React.cloneElement(
          node,
          {},
          highlightInNode(node.props.children)
        );
      } else {
        return React.cloneElement(
          node,
          {},
          node.props.children?.map((ch) => highlightInNode(ch))
        );
      }
    }
    return node;
  }
  return React.Children.map(children, (child) => {
    return highlightInNode(child);
  });
}

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
    setDataResult({
      ...dataResult,
    });
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
    let clearedPagerDataState = {
      ...dataState,
      take: 10,
      skip: 0, 
    };
    let processedData = process(newData, clearedPagerDataState);
    setDataResult(processedData);
    setDataState(clearedPagerDataState);
  };

  const cellRender = React.useCallback(
    (td, props) => {
      if (props.rowType === 'data') {
        const value = getNestedValue(props.field, props.dataItem)?.toString();
        if (!value) {
          return td;
        }
        if (
          filterValue &&
          filterValue.length > 0 &&
          value.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) >=
            0
        ) {
          const children = highlightSearchTextInReactChildren(
            td.props.children,
            filterValue
          );
          return React.cloneElement(td, [props], [children]);
        }
      }
      return td;
    },
    [filterValue]
  );

  return (
    <div>
      <Grid
        cellRender={cellRender}
        style={{
          height: '420px',
        }}
        data={dataResult}
        {...dataState}
        onDataStateChange={dataStateChange}
        expandField="expanded"
        pageable={true}
        onExpandChange={expandChange}
      >
        <GridToolbar>
          <div>
            <span
              style={{
                padding: '5px',
              }}
            >
              Search:{' '}
            </span>
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
export default App;
