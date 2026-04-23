import * as React from 'react';
import { Grid, GridColumn as Column, GridSortChangeEvent } from '@progress/kendo-react-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { employees } from './gd-employees';

const DATA_ITEM_KEY = 'id';

const App = () => {
    const [sort, setSort] = React.useState<SortDescriptor[]>();

    return (
        <div>
            <Grid
                data={employees}
                autoProcessData={true}
                dataItemKey={DATA_ITEM_KEY}
                contextMenu={true}
                sortable={true}
                defaultSort={sort}
                selectable={{ enabled: true }}
                style={{ height: '500px' }}
            >
                <Column columnType="checkbox" width={50} />

                <Column title="Employee">
                    <Column field="full_name" title="Contact Name" width="250px" />
                    <Column field="job_title" title="Job Title" width="220px" />
                    <Column field="country" title="Country" width="100px" />
                    <Column field="is_online" title="Status" filter="text" width="100px" />
                </Column>
                <Column title="Performance">
                    <Column field="rating" title="Rating" width="230px" />
                    <Column field="target" title="Engagement" width="250px" />
                    <Column field="budget" title="Budget" width="230px" />
                </Column>
                <Column title="Contacts">
                    <Column field="phone" title="Phone" width="230px" />
                    <Column field="address" title="Address" width="230px" />
                </Column>
            </Grid>
        </div>
    );
};
export default App;
