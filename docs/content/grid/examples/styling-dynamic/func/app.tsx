import * as React from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent, GridCustomCellProps } from '@progress/kendo-react-grid';
import { Product } from './gd-interfaces';
import { EditDescriptor } from '@progress/kendo-react-data-tools';

const initialData = [
    { ProductID: 1, ProductName: 'Tea', UnitPrice: 18, UnitsOnOrder: 20 },
    { ProductID: 2, ProductName: 'Coffee', UnitPrice: 10, UnitsOnOrder: 55 }
];

const cellWithBackGround = (props: GridCustomCellProps) => {
    const product = props.dataItem.UnitPrice * props.dataItem.UnitsOnOrder;
    if (product < 400) {
        return (
            <td
                {...props.tdProps}
                style={{
                    ...props.tdProps?.style,
                    backgroundColor: 'rgb(55, 180, 0,0.32)'
                }}
            >
                {product}
            </td>
        );
    }
    return (
        <td
            {...props.tdProps}
            style={{
                ...props.tdProps?.style,
                backgroundColor: 'rgb(243, 23, 0, 0.32)'
            }}
        >
            {product} <span>Maximum exceeded</span>
        </td>
    );
};

const App = () => {
    const [data, setData] = React.useState<Product[]>(initialData);
    const [edit, setEdit] = React.useState<EditDescriptor>({
        1: true,
        2: true
    });

    const itemChange = (event: GridItemChangeEvent) => {
        const field = event.field || '';
        event.dataItem[field] = event.value;
        let newData = data.map((item) => {
            if (item.ProductID === event.dataItem.ProductID) {
                item[field] = event.value;
            }
            return item;
        });
        setData(newData);
    };

    return (
        <div>
            <Grid
                data={data}
                scrollable="none"
                editable={true}
                edit={edit}
                dataItemKey="ProductID"
                onItemChange={itemChange}
            >
                <Column field="ProductName" title="Product Name" editable={false} />
                <Column field="UnitPrice" title="Units Price" editor="numeric" />
                <Column field="UnitsOnOrder" title="Units On Order" editor="numeric" />
                <Column title="Total value" cells={{ data: cellWithBackGround }} />
            </Grid>
        </div>
    );
};
export default App;
