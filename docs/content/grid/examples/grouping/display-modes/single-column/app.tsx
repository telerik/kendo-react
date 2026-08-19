import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarFilter,
    GridToolbarGroup,
    GridDataLayoutMode,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { assets } from './data';
import './styles.css';

const initialGroup: GroupDescriptor[] = [{ field: 'department' }, { field: 'officeLocation' }, { field: 'deviceType' }];

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

const CustomGroupHeaderCell = (props: GridCustomCellProps) => {
    type TdPropsWithKey = React.TdHTMLAttributes<HTMLTableCellElement> & { key?: string };
    const { key: tdKey, ...tdProps } = props.tdProps as TdPropsWithKey;
    const { key: td2Key, ...td2Props } = (props.td2Props ?? {}) as TdPropsWithKey;

    if (props.isSpacerCell) {
        return <td key={tdKey} {...tdProps} />;
    }
    const toggle = React.isValidElement(props.children)
        ? React.Children.toArray((props.children.props as { children?: React.ReactNode }).children)[0]
        : null;
    return (
        <>
            <td key={tdKey} {...tdProps} style={{ ...tdProps.style }}>
                <div className="k-grouping-row-content">
                    {toggle}
                    <span className="k-grouping-row-text">{props.dataItem?.value}</span>
                </div>
            </td>
            {props.td2Props && <td key={td2Key} {...td2Props} style={{ ...td2Props.style }} />}
        </>
    );
};

const App = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 400);

    React.useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 400);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const dataLayoutMode: GridDataLayoutMode = isMobile ? 'stacked' : 'columns';

    return (
        <Grid
            data={assets}
            dataItemKey="assetId"
            autoProcessData={true}
            defaultGroup={initialGroup}
            groupable={{
                displayMode: 'singleColumn',
                groupColumn: { width: 210, cells: { groupHeader: CustomGroupHeaderCell } },
                hideGroupedColumns: true
            }}
            sortable={true}
            filterable={true}
            style={{
                height: '500px'
            }}
            dataLayoutMode={dataLayoutMode}
            stackedLayoutSettings={isMobile ? { cols: 1 } : undefined}
            resizable={true}
        >
            <GridToolbar>
                <GridToolbarFilter />
                <GridToolbarGroup />
            </GridToolbar>
            <Column field="department" title="Department" width={170} />
            <Column field="officeLocation" title="Location" width={170} />
            <Column field="deviceType" title="Device Type" width={170} />
            <Column field="assetId" title="Asset ID" width={100} />
            <Column field="deviceModel" title="Device Model" width={170} />
            <Column field="assignedEmployee" title="Assignee" width={140} />
            <Column field="purchaseDate" title="Purchase Date" width={140} format="{0:yyyy-MM-dd}" />
            <Column field="status" title="Status" cells={{ data: StatusCell }} />
        </Grid>
    );
};
export default App;
