import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { Grid, GridCustomCellProps, GridColumn } from '@progress/kendo-react-grid';
import products from './shared-tt-products.json';

const ProductNameCell = (props: GridCustomCellProps) => {
    return <td title={props.dataItem.ProductName}>{props.dataItem.ProductName}</td>;
};
const ProductNameHeader = (props: any) => {
    return (
        <td>
            <a className="k-link" onClick={props.onClick}>
                <span title={props.title}>{props.title}</span>
            </a>
        </td>
    );
};
const App = () => {
    return (
        <div>
            <Tooltip openDelay={100} position="right" anchorElement="element">
                <Grid style={{ height: '400px' }} data={products}>
                    <GridColumn field="ProductID" title="ID" width="40px" />
                    <GridColumn
                        field="ProductName"
                        title="Product Name"
                        width="250px"
                        cells={{ data: ProductNameCell, headerCell: ProductNameHeader }}
                    />
                    <GridColumn field="Category.CategoryName" title="CategoryName" />
                    <GridColumn field="UnitPrice" title="Price" width="80px" />
                    <GridColumn field="UnitsInStock" title="In stock" width="80px" />
                </Grid>
            </Tooltip>
        </div>
    );
};
export default App;
