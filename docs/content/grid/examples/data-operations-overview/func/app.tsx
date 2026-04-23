import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridCellProps,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import { process, State, DataResult } from '@progress/kendo-data-query';

import products from './gd-products';
import { Checkbox } from '@progress/kendo-react-inputs';
import { DetailExpandDescriptor } from '@progress/kendo-react-data-tools';
const initialDataState: State = {
    sort: [{ field: 'code', dir: 'asc' }],
    take: 10,
    skip: 0,
    group: [
        {
            field: 'CategoryID'
        }
    ]
};

const DiscontinuedCell = (props: GridCustomCellProps) => (
    <td {...props.tdProps}>
        <Checkbox disabled={true} checked={props.dataItem[props.field || '']} />
    </td>
);

const App = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [dataResult, setDataResult] = React.useState<DataResult>(process(products, dataState));

    return (
        <Grid
            pageable={true}
            sortable={true}
            filterable={true}
            groupable={true}
            style={{ height: '400px' }}
            data={dataResult}
            {...dataState}
            onDataStateChange={(e: GridDataStateChangeEvent) => {
                setDataState(e.dataState);
                setDataResult(process(products, e.dataState));
            }}
        >
            <Column field="ProductID" title="ID" width="80px" filterable={false} />
            <Column field="CategoryID" title="CategoryID" width="250px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="UnitPrice" title="Price" filter="numeric" width="150px" />
            <Column field="UnitsInStock" title="In stock" filter="numeric" width="150px" />
            <Column field="Discontinued" filter="boolean" cells={{ data: DiscontinuedCell }} />
        </Grid>
    );
};

export default App;
