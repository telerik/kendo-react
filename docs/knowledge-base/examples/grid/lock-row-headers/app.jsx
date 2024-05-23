import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './products-with-sections.json';
import { filterBy } from '@progress/kendo-data-query';

const rowHeight = 50;

const App = () => {
  const [data, setData] = React.useState(products);

  const cellRender = (td, props) => {
    let extraProps = {};

    if (props.dataItem.locked) {
      (extraProps.style = {
        top: 0,
        ...props.style,
        backgroundColor: 'rgb(201 197 197)',
        fontWeight: 'bold'
      }),
        (extraProps.className = props.className + ' k-grid-row-sticky');
    }

    return React.cloneElement(
      td,
      { ...td.props, ...extraProps },
      td.props.children
    );
  };

  const collapseAll = () => {
    let onlyHeaders = filterBy(products, [{field: 'locked', operator: 'eq', value: true}]);
    setData(onlyHeaders);
  }

  const expandAll = () => {
    let allExpanded = filterBy(products, []);
    setData(allExpanded);
  }


  return (
    <div>
      <Button onClick={collapseAll}>Collapse All</Button>
      <Button onClick={expandAll}>Expand All</Button>
      <Grid
        style={{
          height: 600,
          width: 800,
        }}
        data={data}
        reorderable={true}
        cellRender={cellRender}
        rowHeight={rowHeight}
      >
        <Column field="ProductName" title="Name" width="350px" />
        <Column field="UnitPrice" title="Price" width="190px" />
        <Column field="UnitsInStock" title="In stock"/>
      </Grid>
    </div>
  );
};

export default App;
