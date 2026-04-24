import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { groupBy } from '@progress/kendo-data-query';
import { setExpandedState, setGroupIds } from '@progress/kendo-react-data-tools';
import products from './shared-kb-products';

const initialGroup = [
    {
        field: 'UnitsInStock'
    }
];

const processWithGroups = (data, group) => {
    const newDataState = groupBy(data, group);
    setGroupIds({
        data: newDataState,
        group: group
    });
    return newDataState;
};
const ProductNameCell = (props) => {
    return (
        <td
            {...props.tdProps}
            colSpan={1}
            style={{
                color: 'blue'
            }}
        >
            {props.children}
        </td>
    );
};

const CategoryNameCell = (props) => {
    return (
        <td
            {...props.tdProps}
            colSpan={1}
            style={{
                color: '#aaa'
            }}
        >
            {props.children}
        </td>
    );
};

const App = () => {
    const [group, setGroup] = React.useState(initialGroup);

    const [resultState, setResultState] = React.useState(processWithGroups(products, initialGroup));
    const [collapsedState, setCollapsedState] = React.useState([]);
    const onGroupChange = React.useCallback((event) => {
        const newDataState = processWithGroups(products, event.group);
        setGroup(event.group);
        setResultState(newDataState);
    }, []);
    const onExpandChange = React.useCallback(
        (event) => {
            const item = event.dataItem;
            if (item.groupId) {
                const newCollapsedIds = !event.value
                    ? [...collapsedState, item.groupId]
                    : collapsedState.filter((groupId) => groupId !== item.groupId);
                setCollapsedState(newCollapsedIds);
            }
        },
        [collapsedState]
    );

    const newData = setExpandedState({
        data: resultState,
        collapsedIds: collapsedState
    });

    return (
        <Grid
            style={{
                height: '520px'
            }}
            data={newData}
            groupable={true}
            onGroupChange={onGroupChange}
            group={group}
            onExpandChange={onExpandChange}
            expandField="expanded"
        >
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" cells={{ data: ProductNameCell }} />
            <Column field="UnitPrice" title="Unit Price" />
            <Column field="UnitsInStock" title="Units In Stock" />
            <Column field="Category.CategoryName" title="Category Name" cells={{ data: CategoryNameCell }} />
        </Grid>
    );
};
export default App;
