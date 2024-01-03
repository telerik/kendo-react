import React from 'react';
import './App.css';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { process } from '@progress/kendo-data-query';

import '@progress/kendo-theme-default/dist/all.css';


import products from './products.json';

const MyCustomCell = (props) => {
  const value = props.dataItem[props.field];
  return (
    <td>
      <span title={props.dataItem.ProductID}>
        {value}
      </span>
    </td>
  )
}

const MyTooltipTemplate = (props) => {
  let findItem = products.filter(item => item.ProductID === parseInt(props.title))[0]
  return (
    <div>
      <h4>{findItem.ProductName}</h4>
      <hr className='k-hr'/>
      <p><span className="item-name">Category:</span> {findItem.Category.CategoryName}</p>
      <p><span className="item-name">Price:</span> {findItem.UnitPrice}</p>
      <p><span className="item-name">Discontinued:</span> {findItem.Discontinued.toString()}</p>
    </div>
  )
}

function App() {
  const [dataState, setDataState] = React.useState({ skip: 0, take: 10 })
  return (
    <div>
      <Tooltip content={MyTooltipTemplate} anchorElement="target" position="right">
        <Grid
          pageable
          sortable
          data={process(products, dataState)}
          {...dataState}
          onDataStateChange={(e) => setDataState(e.dataState)}
        >
          <GridColumn field="ProductID" title="Product Id" filter="numeric" />
          <GridColumn field="ProductName" title="Product Name" cell={MyCustomCell} />
          <GridColumn field="UnitsInStock" title="Units In Stock" filter="numeric" />
        </Grid>
      </Tooltip>
    </div>
  );
}

export default App;
