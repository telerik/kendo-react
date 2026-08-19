import * as React from 'react';
import { Grid, GridColumn as Column, GridCustomCellProps } from '@progress/kendo-react-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { assets } from './data';
import './styles.css';

const initialGroup: GroupDescriptor[] = [{ field: 'department' }, { field: 'deviceType' }];

const getStatusClass = (status: string): string => {
    if (status === 'Active') {
        return 'success';
    }
    if (status === 'In Repair') {
        return 'warning';
    }
    return 'base';
};

const StatusCell = (props: GridCustomCellProps) => (
    <td {...props.tdProps}>
        <span className={`status-badge status-badge-${getStatusClass(props.dataItem.status)}`}>
            {props.dataItem.status}
        </span>
    </td>
);

const App = () => {
    return (
        <Grid
            style={{ height: '520px' }}
            data={assets}
            dataItemKey="assetId"
            autoProcessData={true}
            defaultGroup={initialGroup}
            groupable={{
                displayMode: 'multipleColumns',
                hideGroupedColumns: true
            }}
        >
            <Column field="department" title="Department" width={240} />
            <Column field="deviceType" title="Device Type" width={220} />
            <Column field="deviceModel" title="Device Model" width={280} />
            <Column field="purchaseDate" title="Purchase Date" width={200} format="{0:yyyy-MM-dd}" />
            <Column field="status" title="Status" cells={{ data: StatusCell }} />
        </Grid>
    );
};
export default App;
