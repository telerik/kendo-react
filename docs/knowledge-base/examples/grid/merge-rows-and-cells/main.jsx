import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';

const App = () => {
  const [gridData, setGridData] = useState(products);
  const gridRef = React.useRef(null);
  const cellRender = (cell, props) => {
    const { dataItem, field } = props;
    let duplicate = false;
    if (gridRef.current) {
      const rowIndex = props.dataIndex;
      const columns = gridRef.current.columns;
      const colIndex = columns.findIndex((c) => c.field == props.field);

      if (colIndex > 0) {
        if (
          dataItem[columns[colIndex].field] ==
          dataItem[columns[colIndex - 1].field]
        ) {
          duplicate = true;
        }
      }
      if (rowIndex > 0) {
        if (
          dataItem[props.field] ==
          gridRef.current.props.data[rowIndex - 1][props.field]
        ) {
          duplicate = true;
        }
      }
    }
    let style = { ...cell.props.style };
    if (typeof dataItem[props.field] == 'boolean') {
      style.backgroundColor = dataItem[props.field] ? '#1fb542' : '#b51f2e';
      style.color = dataItem[props.field] ? '#1fb542' : '#b51f2e';
      style.border = 'none';
    }

    if (duplicate) {
      return (
        <td {...cell.props} style={style}>
          {' '}
        </td>
      );
    } else {
      return <td {...cell.props} style={style}></td>;
    }
  };
  return (
    <div>
      <Grid
        ref={gridRef}
        style={{
          height: '500px',
        }}
        data={gridData}
        cellRender={cellRender}
      >
        <Column field="ProductID" title="ID" width="60px" />
        <Column field="ProductName" title="Name" width="250px" />
        <Column field="CategoryName" title="CategoryName" />
        <Column field="UnitPrice" title="Price" width="80px" />
        <Column field="Discontinued" width="120px" />
        <Column field="Discontinued2" width="120px" />
      </Grid>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
