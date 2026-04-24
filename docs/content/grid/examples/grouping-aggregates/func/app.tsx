import * as React from 'react';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCustomCellProps } from '@progress/kendo-react-grid';
import { process, State, AggregateDescriptor } from '@progress/kendo-data-query';
import { setGroupIds, setExpandedState, DetailExpandDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';
import { Product } from './gd-interfaces';

const initialDataState: State = {
    take: 10,
    skip: 0,
    group: [{ field: 'UnitsInStock' }, { field: 'ProductName' }]
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
            cellContent = `Average: ${props.dataItem.aggregates.UnitPrice.average}`;
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
            pageable={{ pageSizes: true }}
            resizable={true}
            reorderable={true}
            filterable={true}
            sortable={true}
            groupable={{ footer: 'visible', enabled: true }}
            data={resultState.data}
            total={resultState.total}
            onDataStateChange={handleDataStateChange}
            {...dataState}
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
