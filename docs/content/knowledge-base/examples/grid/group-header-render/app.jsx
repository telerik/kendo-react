import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

import products from './shared-kb-products';

const App = () => {
    const createAppState = (dataState) => {
        return {
            result: process(products, dataState),
            dataState: dataState
        };
    };

    const [state, setState] = React.useState(
        createAppState({
            take: 10,
            group: [{ field: 'UnitsInStock' }]
        })
    );

    const customCell = (props) => {
        const children = (
            <p className="k-reset">
                {props.children.props.children[0]}
                {props.dataItem[props.field]} count: {props.dataItem.items.length}
            </p>
        );

        return (
            props.tdProps && <td {...props.tdProps} key={props.tdProps.key}>
                {children}
            </td>
        );
    };

    const dataStateChange = (event) => {
        setState(createAppState(event.data));
    };

    const expandChange = (event) => {
        event.dataItem[event.target.props.expandField] = event.value;
        setState({
            result: Object.assign({}, state.result),
            dataState: state.dataState
        });
    };

    return (
        <Grid
            style={{ height: '520px' }}
            resizable={true}
            reorderable={true}
            filterable={true}
            sortable={true}
            pageable={{ pageSizes: true }}
            groupable={true}
            cells={{
                group: {
                    groupHeader: customCell
                }
            }}
            data={state.result}
            onDataStateChange={dataStateChange}
            {...state.dataState}
            onExpandChange={expandChange}
            expandField="expanded"
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
