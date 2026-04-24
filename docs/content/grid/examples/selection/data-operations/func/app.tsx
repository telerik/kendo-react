import * as React from 'react';
import { process, State } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridSelectionChangeEvent,
    GridColumnMenuSort,
    GridColumnMenuFilter,
    GridColumnMenuGroup,
    GridGroupExpandChangeEvent
} from '@progress/kendo-react-grid';
import { SelectDescriptor, GroupExpandDescriptor } from '@progress/kendo-react-data-tools';

import products from './gd-products';

export const ColumnMenu = (props) => {
    return (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} />
            <GridColumnMenuGroup {...props} />
        </div>
    );
};

const initialDataState: State = {
    take: 8,
    skip: 0,
    group: [{ field: 'Category.CategoryName' }],
    filter: {
        logic: 'and',
        filters: [{ field: 'UnitsInStock', operator: 'gt', value: 50 }]
    }
};

const App = () => {
    const [select, setSelect] = React.useState<SelectDescriptor>({});
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);

    const onDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        setDataState(event.dataState);
    }, []);

    const onGroupExpandChange = React.useCallback((event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    }, []);

    const onHeaderSelectionChange = React.useCallback((event: GridHeaderSelectionChangeEvent) => {
        setSelect(event.select);
    }, []);

    const onSelectionChange = React.useCallback((event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    }, []);

    return (
        <Grid
            style={{ height: '480px' }}
            pageable={{ pageSizes: true }}
            data={process(products, dataState)}
            dataItemKey="ProductID"
            groupable={{
                enabled: false,
                expandable: true
            }}
            filterable={true}
            sortable={true}
            {...dataState}
            onDataStateChange={onDataStateChange}
            groupExpand={groupExpand}
            onGroupExpandChange={onGroupExpandChange}
            select={select}
            selectable={{ enabled: true, mode: 'multiple' }}
            onHeaderSelectionChange={onHeaderSelectionChange}
            onSelectionChange={onSelectionChange}
        >
            <Column filterable={false} columnType="checkbox" />
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" columnMenu={ColumnMenu} />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" columnMenu={ColumnMenu} />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" columnMenu={ColumnMenu} />
            <Column field="Category.CategoryName" title="Category Name" columnMenu={ColumnMenu} />
        </Grid>
    );
};

export default App;
