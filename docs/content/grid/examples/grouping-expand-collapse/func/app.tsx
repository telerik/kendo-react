import * as React from 'react';
import { process, State } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridDataStateChangeEvent,
    GridGroupExpandChangeEvent
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const App = () => {
    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);

    const [dataState, setDataState] = React.useState<State>({
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
    });

    const data = process(products, dataState);
    const someCollapsed = Boolean(groupExpand?.length && hasCollapsed(groupExpand, dataState.group?.length));

    const handleDataStateChange = React.useCallback((event: GridDataStateChangeEvent) => {
        setDataState(event.dataState);
    }, []);

    const handleGroupExpandChange = React.useCallback((event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    }, []);

    const handleGroupsToggle = React.useCallback(() => {
        setGroupExpand(!someCollapsed ? getGroupsExpandDescriptor(data.data, false, dataState.group?.length) : []);
    }, [data.data, dataState.group?.length, someCollapsed]);

    return (
        <Grid
            style={{
                height: '520px'
            }}
            pageable={{
                pageSizes: true
            }}
            groupable={true}
            data={data}
            onDataStateChange={handleDataStateChange}
            {...dataState}
            groupExpand={groupExpand}
            onGroupExpandChange={handleGroupExpandChange}
        >
            <GridToolbar>
                <Button type="button" themeColor={'primary'} onClick={handleGroupsToggle}>
                    {someCollapsed ? 'Expand' : 'Collapse'} Groups
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

const getGroupsExpandDescriptor = (
    groups: any[],
    expanded: boolean,
    maxDepth: number = 0,
    level: number = 0
): GroupExpandDescriptor[] => {
    if (maxDepth <= level) {
        return [];
    }

    return groups.map((group) => {
        const result: GroupExpandDescriptor = {
            field: group.field,
            value: group.value,
            expanded
        };

        if (group?.items?.length) {
            result.groups = getGroupsExpandDescriptor(group.items, expanded, maxDepth, level++);
        }

        return result;
    });
};

const hasCollapsed = (groups: GroupExpandDescriptor[], maxDepth: number = 0, level = 0): boolean => {
    return level < maxDepth
        ? groups.some((g) => g.expanded === false || !g.groups?.length || hasCollapsed(g.groups, maxDepth, level + 1))
        : false;
};

export default App;
