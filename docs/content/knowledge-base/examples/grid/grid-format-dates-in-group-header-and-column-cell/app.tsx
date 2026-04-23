import * as React from 'react';
import { Grid, GridColumn as Column, GridCustomCellProps } from '@progress/kendo-react-grid';
import products from './products';
import { useInternationalization } from '@progress/kendo-react-intl';

const initialGroup = [
    {
        field: 'ProductionDate'
    },
    {
        field: 'ProductName'
    }
];

const CustomDateCell = (props: GridCustomCellProps) => {
    const value = props.children;
    const intl = useInternationalization();
    const formatted = intl.formatDate(new Date(value), 'MM/dd/yyyy');
    return <td {...props.tdProps}> {formatted}</td>;
};

const GroupMyHeaderCustomCell = (props: GridCustomCellProps) => {
    const value = props.dataItem[props.field];
    const intl = useInternationalization();
    const formatted = intl.formatDate(new Date(value), 'EEE MMM dd yyyy HH:mm');

    if (props.dataItem.field == 'ProductionDate') {
        return (
            props.tdProps && (
                <td
                    {...props.tdProps}
                    style={{
                        backgroundColor: 'skyblue'
                    }}
                >
                    {props.children && (
                        <p className="k-reset">
                            {props.children.props.children[0]}
                            {formatted}
                        </p>
                    )}
                </td>
            )
        );
    } else {
        return <td {...props.tdProps}>{props.children}</td>;
    }
};

const App = () => {
    return (
        <Grid
            style={{
                height: '520px'
            }}
            dataItemKey="ProductID"
            data={products}
            autoProcessData={true}
            groupable={true}
            defaultGroup={initialGroup}
            cells={{
                group: {
                    groupHeader: GroupMyHeaderCustomCell
                }
            }}
        >
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="ProductionDate" title="Production Date" cells={{ data: CustomDateCell }} />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};
export default App;
