import React from 'react';

import { Grid, GridColumn, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { process, type State } from '@progress/kendo-data-query';
import orders from './orders';

const App = () => {
    const [state, setState] = React.useState<State>({
        sort: [{ field: 'customerID', dir: 'asc' }]
    });

    const handleDataStateChange = (event: GridDataStateChangeEvent) => {
        setState(event.dataState);
    };

    return (
        <Grid
            style={{
                height: '520px'
            }}
            dataItemKey="ProductID"
            data={process(orders, state)}
            rowSpannable={true}
            {...state}
            onDataStateChange={handleDataStateChange}
            sortable={true}
            filterable={true}
            groupable={true}
            pageable={true}
        >
            <GridColumn field="orderID" title="Order ID" />
            <GridColumn field="customerID" title="Customer ID" />
            <GridColumn field="employeeID" title="Employee ID" rowSpannable={false} />
            <GridColumn
                field="shipVia"
                rowSpannable={{
                    valueGetter: (dataItem) => `${dataItem.shipVia} - ${dataItem.customerID}`
                }}
                title="Ship Via"
            />
            <GridColumn field="freight" title="Freight" />
        </Grid>
    );
};
export default App;
