import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridToolbarGroup } from '@progress/kendo-react-grid';
import { AggregateDescriptor } from '@progress/kendo-data-query';

import { DemoItem, items } from './data';

const aggregates: AggregateDescriptor[] = [
    { field: 'engagement', aggregate: 'min' },
    { field: 'engagement', aggregate: 'max' },
    { field: 'budget', aggregate: 'min' },
    { field: 'budget', aggregate: 'max' }
];

const App = () => {
    return (
        <Grid
            style={{ height: '520px' }}
            data={items}
            dataItemKey="id"
            scrollable="scrollable"
            pageable={true}
            defaultSkip={0}
            defaultTake={15}
            autoProcessData={true}
            dataLayoutMode="stacked"
            stackedLayoutSettings={{ cols: 2 }}
            groupable={{ footer: 'visible' }}
            defaultGroup={[{ field: 'category', aggregates }]}
        >
            <GridToolbar>
                <GridToolbarGroup />
            </GridToolbar>
            <Column field="category" title="Category" />
            <Column field="subCategory" title="Subcategory" />
            <Column field="name" title="Name" />
            <Column field="engagement" title="Engagement" />
            <Column field="budget" title="Budget" />
        </Grid>
    );
};

export default App;
