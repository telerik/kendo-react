import * as React from 'react';

import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridGroupExpandChangeEvent
} from '@progress/kendo-react-grid';
import { AggregateDescriptor, DataResult, process, State } from '@progress/kendo-data-query';

import { setGroupIds, GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';
import { Product } from './gd-interfaces';
import CustomGroupHeaderCell from './custom-group-header-cell';
import { CustomGroupFooterCell, CustomGroupColumnFooterCell } from './custom-group-footer-cell';

const initialDataState: State = {
    take: 10,
    skip: 0,
    group: [{ field: 'Category.CategoryName' }, { field: 'ProductName' }]
};

const aggregates: AggregateDescriptor[] = [
    { field: 'UnitPrice', aggregate: 'average' },
    { field: 'UnitsInStock', aggregate: 'sum' }
];

const processWithGroups = (data: Product[], dataState: State) => {
    const groups = dataState.group;
    if (groups) {
        groups.map((group) => (group.aggregates = aggregates));
    }
    dataState.group = groups;
    const newDataState = process(data, dataState);
    setGroupIds({ data: newDataState.data, group: dataState.group });
    return newDataState;
};

const App = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [resultState, setResultState] = React.useState<DataResult>(() =>
        processWithGroups(products, initialDataState)
    );

    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);

    const onDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        const newDataState = processWithGroups(products, event.dataState);
        setResultState(newDataState);
        setDataState(event.dataState);
    }, []);

    const onGroupExpandChange = React.useCallback((event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    }, []);

    return (
        <Grid
            style={{ height: '500px' }}
            data={resultState}
            {...dataState}
            onDataStateChange={onDataStateChange}
            groupable={{
                displayMode: 'compact',
                footer: 'visible',
                groupColumn: { cells: { groupHeader: CustomGroupHeaderCell, groupFooter: CustomGroupColumnFooterCell } }
            }}
            groupExpand={groupExpand}
            onGroupExpandChange={onGroupExpandChange}
            pageable={true}
            cells={{ groupFooter: CustomGroupFooterCell }}
        >
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" />
            <Column field="UnitsInStock" title="Units In Stock" />
            <Column field="Category.CategoryName" title="Category" />
        </Grid>
    );
};

export default App;
