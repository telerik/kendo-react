import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './gd-products';

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
                        ...props.tdProps.style
                    }}
                >
                    {props.children && (
                        <p className="k-reset">
                            {props.children.props.children[0]}
                            {props.dataItem[props.field] + ' custom header'}
                        </p>
                    )}
                </td>
            )}
            {props.td2Props && <td {...props.td2Props} />}
        </>
    );
};

const GroupMyHeaderCustomCell = (props) => <CustomCell {...props} color="#a1cec5" />;

const App = () => {
    return (
        <Grid
            style={{ height: '520px', width: '850px' }}
            data={products}
            autoProcessData={true}
            dataItemKey="ProductID"
            pageable={{ pageSizes: true }}
            defaultTake={10}
            defaultSkip={0}
            groupable={true}
            defaultGroup={[{ field: 'Category.CategoryName' }, { field: 'ProductName' }]}
            lockGroups={true}
            cells={{
                group: {
                    groupHeader: GroupMyHeaderCustomCell
                }
            }}
        >
            <Column field="ProductName" title="Product Name" width="250px" locked={true} />
            <Column field="Category.CategoryName" title="Category Name" width="150px" locked={true} />
            <Column field="Discontinued" title="Discontinued" width="140px" />
            <Column field="UnitPrice" title="Unit Price" width="120px" />
            <Column field="UnitsInStock" title="Units In Stock" width="150px" />
            <Column field="QuantityPerUnit" title="Quantity Per Unit" width="200px" />
            <Column field="Category.Description" title="Category Description" width="400px" />
            <Column field="UnitsOnOrder" title="Units on Order" width="150px" />
        </Grid>
    );
};

export default App;
