import * as React from 'react';

import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridGroupColumnFn,
    GridGroupExpandChangeEvent
} from '@progress/kendo-react-grid';
import { DataResult, GroupDescriptor, process, State } from '@progress/kendo-data-query';

import { setGroupIds, GroupExpandDescriptor } from '@progress/kendo-react-data-tools';

import products from './gd-products';
import { Product } from './gd-interfaces';
import { ColumnMenu } from './columnMenu';
import { GroupColumnMenu } from './groupColumnMenu';

const GROUP: GroupDescriptor[] = [{ field: 'Category.CategoryName' }, { field: 'ProductName' }];

const initialDataState: State = {
    take: 10,
    skip: 0,
    group: GROUP
};

const processWithGroups = (data: Product[], dataState: State) => {
    const newDataState = process(data, dataState);
    setGroupIds({ data: newDataState.data, group: dataState.group });
    return newDataState;
};

const groupColumnFn: GridGroupColumnFn = (groupDescriptor) => {
    return {
        width: 200,
        columnMenu: GroupColumnMenu
    };
};

const App = () => {
    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [resultState, setResultState] = React.useState<DataResult>(processWithGroups(products, initialDataState));

    const onDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        const newDataState = processWithGroups(products, event.dataState);
        setDataState(event.dataState);
        setResultState(newDataState);
    }, []);

    const handleGroupExpand = (event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    };

    return (
        <Grid
            style={{ height: '450px' }}
            data={resultState}
            {...dataState}
            sortable={true}
            onDataStateChange={onDataStateChange}
            groupable={{
                displayMode: 'multipleColumns',
                groupColumn: groupColumnFn
            }}
            onGroupExpandChange={handleGroupExpand}
            groupExpand={groupExpand}
            pageable={true}
        >
            <Column field="ProductID" title="ID" width="100px" columnMenu={ColumnMenu} />
            <Column field="ProductName" title="Product Name" width="220px" columnMenu={ColumnMenu} />
            <Column field="Category.CategoryName" title="Category" width="150px" columnMenu={ColumnMenu} />
            <Column field="UnitPrice" title="Unit Price" width="180px" filter="numeric" columnMenu={ColumnMenu} />
            <Column
                field="UnitsInStock"
                title="Units In Stock"
                width="130px"
                filter="numeric"
                columnMenu={ColumnMenu}
            />
            <Column field="Discontinued" title="Discontinued" width="130px" filter="boolean" columnMenu={ColumnMenu} />
        </Grid>
    );
};

export default App;
