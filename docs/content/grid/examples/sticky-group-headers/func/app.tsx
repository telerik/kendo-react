import * as React from 'react';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCustomCellProps } from '@progress/kendo-react-grid';
import { process, State, AggregateDescriptor } from '@progress/kendo-data-query';
import { setGroupIds } from '@progress/kendo-react-data-tools';

import products from './gd-products';
import { Product } from './gd-interfaces';

const initialDataState: State = {
    group: [{ field: 'Category.CategoryName' }]
};

const aggregates: AggregateDescriptor[] = [
    { field: 'UnitsInStock', aggregate: 'sum' },
    { field: 'UnitPrice', aggregate: 'average' }
];

const processWithGroups = (data: Product[], dataState: State) => {
    if (dataState.group) {
        dataState.group.forEach((group) => (group.aggregates = aggregates));
    }

    const newDataState = process(data, dataState);
    setGroupIds({ data: newDataState.data, group: dataState.group });

    return newDataState;
};

const App = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [resultState, setResultState] = React.useState(processWithGroups(products, initialDataState));

    const handleDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        const newDataState = processWithGroups(products, event.dataState);
        setDataState(event.dataState);
        setResultState(newDataState);
    }, []);

    const MyFooterCustomCell = (props: GridCustomCellProps) => {
        let cellContent;
        if (props.field === 'UnitPrice') {
            cellContent = `Average: ${props.dataItem.aggregates.UnitPrice.average.toFixed(2)}`;
        } else if (props.field === 'UnitsInStock') {
            cellContent = `Sum: ${props.dataItem.aggregates.UnitsInStock.sum}`;
        }

        return (
            <td {...props.tdProps} colSpan={1}>
                {cellContent}
            </td>
        );
    };

    return (
        <Grid
            style={{ height: '520px' }}
            groupable={{
                enabled: true,
                footer: 'visible',
                stickyHeaders: true,
                stickyFooters: true
            }}
            data={resultState}
            {...dataState}
            onDataStateChange={handleDataStateChange}
            cells={{
                groupFooter: MyFooterCustomCell
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
