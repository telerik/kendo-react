import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridGroupChangeEvent,
    GridGroupExpandChangeEvent
} from '@progress/kendo-react-grid';
import { GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import { GroupDescriptor, groupBy } from '@progress/kendo-data-query';
import products from './gd-products';

const initialGroup: GroupDescriptor[] = [
    {
        field: 'UnitsInStock'
    },
    {
        field: 'ProductName'
    }
];

const App = () => {
    const [group, setGroup] = React.useState<GroupDescriptor[]>(initialGroup);
    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);

    const handleGroupChange = React.useCallback((event: GridGroupChangeEvent) => {
        setGroup(event.group);
    }, []);

    const handleGroupExpandChange = React.useCallback((event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    }, []);

    return (
        <Grid
            style={{
                height: '520px'
            }}
            dataItemKey="ProductID"
            groupable={true}
            data={groupBy(products, group)}
            onGroupChange={handleGroupChange}
            group={group}
            groupExpand={groupExpand}
            onGroupExpandChange={handleGroupExpandChange}
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
