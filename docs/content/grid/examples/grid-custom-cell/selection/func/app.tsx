import * as React from 'react';
import { Grid, GridColumn as Column, GridCustomCellProps } from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';

import products from './gd-products';
const DATA_ITEM_KEY: string = 'ProductID';

interface CustomCellProps extends GridCustomCellProps {
    color: string;
    backgroundColor?: string;
}

const CustomCell = (props: CustomCellProps) => {
    return props.tdProps ? (
        <td
            {...props.tdProps}
            colSpan={1}
            style={{
                backgroundColor: props.color
            }}
        >
            {props.children}
        </td>
    ) : null;
};

const MySelectedCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#90ab86" />;

const MySelectedHeaderCustomCell = (props: GridCustomCellProps) => (
    <td
        {...props.tdProps}
        colSpan={1}
        style={{
            backgroundColor: '#a1cec5'
        }}
    />
);

const MySelectedFooterCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#4a9d93" />;

const MyHeaderCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#a1483d" />;

const MyFooterCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#fac390" />;

const App = () => {
    return (
        <div>
            <Grid
                data={products}
                autoProcessData={true}
                style={{ height: '520px' }}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: false,
                    cell: false,
                    mode: 'multiple'
                }}
                groupable={{ footer: 'visible' }}
                defaultGroup={[{ field: 'UnitsInStock' }]}
                cells={{
                    select: {
                        data: MySelectedCustomCell,
                        groupFooter: MySelectedFooterCustomCell,
                        groupHeader: MySelectedHeaderCustomCell
                    },
                    group: {
                        groupHeader: MyHeaderCustomCell,
                        groupFooter: MyFooterCustomCell
                    }
                }}
            >
                <Column columnType="checkbox" />
                <Column field="ProductName" title="Product Name" width="300px" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="UnitsOnOrder" title="Units On Order" />
                <Column field="ReorderLevel" title="Reorder Level" />
            </Grid>
        </div>
    );
};
export default App;
