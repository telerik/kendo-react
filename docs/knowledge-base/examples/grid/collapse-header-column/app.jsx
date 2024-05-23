import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';

const App = () => {
  const [expandedColumnsState, setExpandedColumnsState] = React.useState({
    'Product Information': true,
    Category: true,
  });

  const CollapsableHeaderCell = React.useCallback(
    (props) => {
      let currentState = expandedColumnsState[props.title];
      const onClick = (ev) => {
        let newState = { ...expandedColumnsState };
        newState[props.title] = !currentState;
        ev.preventDefault();
        setExpandedColumnsState(newState);
      };
      return (
        <div>
          {props.title}
          <span
            onClick={onClick}
            style={{ float: 'right', cursor: 'pointer' }}
            class={
              currentState
                ? 'k-icon k-i-arrow-chevron-right'
                : 'k-icon k-i-arrow-chevron-left'
            }
          ></span>
        </div>
      );
    },
    [expandedColumnsState, setExpandedColumnsState]
  );
  return (
    <Grid
      style={{
        height: '420px',
      }}
      resizable={true}
      reorderable={true}
      data={products.slice(0, 10)}
    >
      <Column field="ProductID" title="ID" width={40} resizable={false} />
      <Column title="Product Information" headerCell={CollapsableHeaderCell}>
        {expandedColumnsState['Product Information'] != true ? (
          <>
            <Column field="ProductName" title="Name" />
            <Column title="Unit">
              <Column field="UnitPrice" title="Price" />
              <Column field="UnitsInStock" title="In Stock" />
            </Column>
          </>
        ) : (
          <Column field="ProductName" title="Name" />
        )}
      </Column>
      <Column
        title="Category"
        children={[
          {
            field: 'Category.CategoryName',
            title: 'Name',
          },
          <Column key={2} field="Category.Description" title="Description" />,
        ]}
      />
    </Grid>
  );
};

export default App;