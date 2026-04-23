import * as React from 'react';

import { Grid, GridColumn as Column, GridCustomCellProps } from '@progress/kendo-react-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';

import products from './gd-products';

const initialGroup: GroupDescriptor[] = [{ field: 'UnitsInStock' }, { field: 'ProductName' }];

const App = () => {
    interface CustomCellProps extends GridCustomCellProps {
        color: string;
    }

    const CustomCell = (props: CustomCellProps) => {
        return (
            props.tdProps && (
                <td
                    {...props.tdProps}
                    style={{
                        backgroundColor: props.color
                    }}
                >
                    {props.children && (
                        <p className="k-reset">
                            {(props.children as any).props.children[0]}
                            {props.dataItem[props.field!]} custom header
                        </p>
                    )}
                </td>
            )
        );
    };

    const GroupMyHeaderCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#a1cec5" />;
    const GroupMyDataCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#4a9d93" />;
    const GroupMyFooterCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#a1483d" />;

    return (
        <Grid
            style={{ height: '520px' }}
            data={products}
            autoProcessData={true}
            dataItemKey="ProductID"
            groupable={{ footer: 'visible' }}
            defaultGroup={initialGroup}
            cells={{
                group: {
                    groupHeader: GroupMyHeaderCustomCell,
                    data: GroupMyDataCustomCell,
                    groupFooter: GroupMyFooterCustomCell
                }
            }}
        >
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};

export default App;
