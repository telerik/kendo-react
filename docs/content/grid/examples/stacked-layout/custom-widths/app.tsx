import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { employees } from './data';

const App = () => {
    const DATA_ITEM_KEY = 'id';
    return (
        <Grid
            data={employees}
            dataLayoutMode="stacked"
            stackedLayoutSettings={{ cols: ['1fr', '2fr', '1fr'] }}
            autoProcessData={true}
            selectable={{
                enabled: true,
                mode: 'single'
            }}
            dataItemKey={DATA_ITEM_KEY}
            style={{ height: '400px' }}
        >
            <Column field="fullName" title="Name" />
            <Column field="jobTitle" title="Title" />
            <Column field="country" title="Country" />
            <Column field="isOnline" title="Status" />
            <Column field="rating" title="Rating" />
            <Column field="budget" title="Budget" format="{0:c}" />
        </Grid>
    );
};

export default App;
