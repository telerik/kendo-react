import * as React from 'react';
import { groupBy, GroupResult, process } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridToolbar, GridGroupExpandChangeEvent } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { setGroupIds, GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const initialDataState = {
    take: 10,
    skip: 0,
    group: [
        {
            field: 'UnitsInStock'
        },
        {
            field: 'ProductName'
        }
    ]
};
const processWithGroups = (data, dataState) => {
    const newDataState = process(data, dataState);
    setGroupIds({
        data: newDataState.data,
        group: dataState.group
    });
    return newDataState;
};

const App = () => {
    const [dataState, setDataState] = React.useState(initialDataState);
    const [resultState, setResultState] = React.useState(processWithGroups(products, initialDataState));
    const [collapsedGroup, setCollapsedGroup] = React.useState<GroupExpandDescriptor[]>([]);

    const onDataStateChange = React.useCallback((event) => {
        const newDataState = processWithGroups(products, event.dataState);
        setDataState(event.dataState);
        setResultState(newDataState);
    }, []);

    const onGroupExpandChange = React.useCallback((event: GridGroupExpandChangeEvent) => {
        setCollapsedGroup(event.groupExpand);
    }, []);

    const onGroupsExpand = React.useCallback(() => {
        setCollapsedGroup(
            resultState.data.reduce<GroupExpandDescriptor[]>((acc, item) => {
                acc.push({
                    field: item.field,
                    value: item.value,
                    expanded: true
                });
                return acc;
            }, [])
        );
    }, [resultState.data]);

    const onGroupsCollapse = React.useCallback(() => {
        const allGroups = groupBy(products, dataState.group);
        setCollapsedGroup(
            (allGroups as GroupResult[]).reduce<GroupExpandDescriptor[]>((acc, item) => {
                acc.push({
                    field: item.field,
                    value: item.value,
                    expanded: false
                });
                return acc;
            }, [])
        );
    }, [resultState.data]);

    const hasCollapsed = collapsedGroup.some((g) => g.expanded === false);

    return (
        <Grid
            style={{
                height: '520px'
            }}
            pageable={{
                pageSizes: true
            }}
            groupable={true}
            data={resultState.data}
            total={resultState.total}
            groupExpand={collapsedGroup}
            dataItemKey="ProductID"
            onGroupExpandChange={onGroupExpandChange}
            onDataStateChange={onDataStateChange}
            {...dataState}
        >
            <GridToolbar>
                <Button type="button" themeColor={'primary'} onClick={hasCollapsed ? onGroupsExpand : onGroupsCollapse}>
                    {hasCollapsed ? 'Expand' : 'Collapse'} Groups
                </Button>
            </GridToolbar>
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};
export default App;
