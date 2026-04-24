import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridGroupChangeEvent,
    GridGroupExpandChangeEvent
} from '@progress/kendo-react-grid';
import { GroupDescriptor, groupBy } from '@progress/kendo-data-query';
import { GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const initialGroup: GroupDescriptor[] = [
    {
        field: 'Category.CategoryName'
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
            style={{ height: '520px' }}
            dataItemKey="ProductID"
            groupable={true}
            data={groupBy(products, group)}
            lockGroups={true}
            onGroupChange={handleGroupChange}
            group={group}
            groupExpand={groupExpand}
            onGroupExpandChange={handleGroupExpandChange}
        >
            <Column field="ProductName" title="Product Name" width="250px" locked={true} />
            <Column field="Category.CategoryName" title="Category Name" width="150px" locked={true} />
            <Column field="Discontinued" title="Discontinued" width="140px" />
            <Column field="UnitPrice" title="Unit Price" width="120px" />
            <Column field="UnitsInStock" title="Units In Stock" width="150px" />
            <Column field="QuantityPerUnit" title="Quantity Per Unit" width="200px" />
            <Column field="Category.Description" title="Category Description" width="400px" />
            <Column field="UnitsOnOrder" title="Units on Order" width="150px" />
        </Grid>
    );
};
export default App;
