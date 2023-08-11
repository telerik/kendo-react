import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  Grid,
  GridColumn as Column,
  GridDataStateChangeEvent,
  GridExpandChangeEvent,
} from '@progress/kendo-react-grid';
import { DataResult, process, State } from '@progress/kendo-data-query';

import {
  setExpandedState,
  setGroupIds,
} from '@progress/kendo-react-data-tools';

import products from './products.json';
import { Product } from './interfaces';

const initialDataState: State = {
  take: 10,
  skip: 0,
  group: [{ field: 'Category.CategoryName' }, { field: 'ProductName' }],
};

const processWithGroups = (data: Product[], dataState: State) => {
  const newDataState = process(data, dataState);

  setGroupIds({ data: newDataState.data, group: dataState.group });

  return newDataState;
};

const CustomCell = (props) => {
  console.log(props.td2Props);
  return (
    <>
      {props.tdProps && (
        <td
          {...props.tdProps}
          style={{
            backgroundColor: props.color,
            whiteSpace: 'nowrap',
            ...props.tdProps.style,
          }}
        >
          {props.children && (
            <p className="k-reset">
              {props.children.props.children[0]}
              {props.dataItem[props.field] + ' custom'}
            </p>
          )}
        </td>
      )}
      {props.td2Props && <td {...props.td2Props} />}
    </>
  );
};

const GroupMyHeaderCustomCell = (props) => (
  <CustomCell {...props} color="lightblue" />
);

const App = () => {
  const [dataState, setDataState] = React.useState<State>(initialDataState);
  const [resultState, setResultState] = React.useState<DataResult>(
    processWithGroups(products, initialDataState)
  );
  const [collapsedState, setCollapsedState] = React.useState<string[]>([]);

  const onDataStateChange = React.useCallback(
    (event: GridDataStateChangeEvent) => {
      const newDataState = processWithGroups(products, event.dataState);

      setDataState(event.dataState);
      setResultState(newDataState);
    },
    []
  );

  const onExpandChange = React.useCallback(
    (event: GridExpandChangeEvent) => {
      const item = event.dataItem;

      if (item.groupId) {
        const collapsedIds = !event.value
          ? [...collapsedState, item.groupId]
          : collapsedState.filter((groupId) => groupId !== item.groupId);
        setCollapsedState(collapsedIds);
      }
    },
    [collapsedState]
  );

  const newData = setExpandedState({
    data: resultState.data,
    collapsedIds: collapsedState,
  });

  return (
    <Grid
      style={{ height: '520px', width: '850px' }}
      pageable={{ pageSizes: true }}
      groupable={true}
      lockGroups={true}
      data={newData}
      total={resultState.total}
      onDataStateChange={onDataStateChange}
      {...dataState}
      onExpandChange={onExpandChange}
      expandField="expanded"
      cells={{
        group: {
          groupHeader: GroupMyHeaderCustomCell,
          /*           data: GroupMyDataCustomCell,
          groupFooter: GroupMyFooterCustomCell, */
        },
      }}
    >
      <Column
        field="ProductName"
        title="Product Name"
        width="250px"
        locked={true}
      />
      <Column
        field="Category.CategoryName"
        title="Category Name"
        width="150px"
        locked={true}
      />
      <Column field="Discontinued" title="Discontinued" width="140px" />
      <Column field="UnitPrice" title="Unit Price" width="120px" />
      <Column field="UnitsInStock" title="Units In Stock" width="150px" />
      <Column field="QuantityPerUnit" title="Quantity Per Unit" width="200px" />
      <Column
        field="Category.Description"
        title="Category Description"
        width="400px"
      />
      <Column field="UnitsOnOrder" title="Units on Order" width="150px" />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
