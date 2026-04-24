import * as React from 'react';

import {
    Grid,
    GridColumn,
    GridColumnMenuSort,
    isColumnMenuSortActive,
    GridColumnMenuFilter,
    GridDataStateChangeEvent,
    GridColumnMenuProps,
    isColumnMenuFilterActive
} from '@progress/kendo-react-grid';
import { DataResult, process, State } from '@progress/kendo-data-query';

import './styles.css';
import { Product } from './gd-interfaces';

const products: Array<Product> = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18.0,
        Discontinued: false
    }
];

const ColumnMenu = (props: GridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} />
        </div>
    );
};

const createDataState = (dataState: State) => {
    return {
        result: process(products.slice(0), dataState),
        dataState: dataState
    };
};
const App = () => {
    let initialState = createDataState({
        take: 8,
        skip: 0
    });

    const [result, setResult] = React.useState<DataResult>(initialState.result);
    const [dataState, setDataState] = React.useState<State>(initialState.dataState);

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        let updatedState = createDataState(event.dataState);
        setResult(updatedState.result);
        setDataState(updatedState.dataState);
    };

    const columnProps = (field: string) => {
        return {
            field: field,
            columnMenu: ColumnMenu,
            headerClassName: isColumnActive(field, dataState) ? 'active' : ''
        };
    };

    const isColumnActive = (field: string, dataState: State) => {
        return isColumnMenuFilterActive(field, dataState.filter) || isColumnMenuSortActive(field, dataState.sort);
    };

    return (
        <Grid
            data={result}
            {...dataState}
            onDataStateChange={dataStateChange}
            adaptive={true}
            sortable={true}
            pageable={true}
            pageSize={8}
        >
            <GridColumn {...columnProps('ProductID')} filter={'numeric'} />
            <GridColumn {...columnProps('ProductName')} />
            <GridColumn {...columnProps('UnitPrice')} filter={'numeric'} />
            <GridColumn {...columnProps('Discontinued')} filter={'boolean'} />
        </Grid>
    );
};

export default App;
