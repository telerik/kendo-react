import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/appData';
import { Sparkline } from '@progress/kendo-react-charts';
import { Checkbox } from '@progress/kendo-react-inputs';

const SparkLineChartCell = (props) => <td><Sparkline data={props.dataItem.PriceHistory} /></td>
const ActiveCell = (props) => <td><Checkbox disabled defaultChecked={props.dataItem[props.field]} /></td>

const processData = (data) => {
  data.forEach((item) => {
    item.PriceHistory = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    return item;
  })
  return data;
}

export const GridContainer = () => (

  <div>
    <Grid
      style={{ height: '300px' }}
      data={processData(gridData)}
      defaultSort={[{
        field: "UnitPrice",
        dir:"asc"
      }]}
      sortable
    >
      <Column field="ProductID" title="ID" width="40px" sortable={false} />
      <Column field="ProductName" title="Name" />
      <Column field="UnitPrice" title="Price" width="80px" />
      <Column field="UnitsInStock" title="In stock" width="100px" sortable={false} />
      <Column field="PriceHistory"title="Price history" width="200px" cells={{ data: SparkLineChartCell }} sortable={false} />
      <Column field="Discontinued"  title="Active" width="70px" cells={{ data: ActiveCell }} sortable={false} />
    </Grid>
  </div>
);