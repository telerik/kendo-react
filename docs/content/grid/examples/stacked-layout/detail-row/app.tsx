import * as React from 'react';
import { Grid, GridColumn as Column, GridDetailRowProps } from '@progress/kendo-react-grid';
import { LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';

import { customers } from './data';

loadMessages(
    {
        grid: {
            detailExpand: 'Expand Details',
            detailCollapse: 'Collapse Details'
        }
    },
    'en'
);

const DetailComponent = (props: GridDetailRowProps) => {
    const dataItem = props.dataItem as any;

    return (
        <section>
            <div>
                <span className="k-font-bold">In stock: </span>
                <span>{dataItem.UnitsInStock}</span>
            </div>
            <div>
                <span className="k-font-bold">On order: </span>
                <span>{dataItem.UnitsOnOrder}</span>
            </div>
        </section>
    );
};

const App = () => {
    return (
        <LocalizationProvider language="en">
            <Grid
                data={customers}
                dataItemKey="id"
                detail={DetailComponent}
                dataLayoutMode="stacked"
                stackedLayoutSettings={{ cols: 2 }}
                style={{ height: '520px' }}
                pageable={true}
                defaultSkip={0}
                defaultTake={10}
                autoProcessData={true}
            >
                <Column field="ContactName" title="Contact Name" width={'100%'} />
                <Column field="CompanyName" title="Company Name" />
                <Column field="Country" title="Country" />
            </Grid>
        </LocalizationProvider>
    );
};

export default App;
