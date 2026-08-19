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

// The default group header cell is customized to display the group value only, without the field name.
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
    return (
        <Grid
            style={{ height: '520px' }}
            data={assets}
            dataItemKey="assetId"
            autoProcessData={true}
            defaultGroup={initialGroup}
            groupable={{
                displayMode: 'multipleColumns',
                groupColumn: {
                    width: 200,
                    title: 'Group',
                    reorderable: false,
                    cells: { groupHeader: CustomGroupHeaderCell }
                }
            }}
        >
            <Column field="deviceModel" title="Device Model" width={280} />
            <Column field="assignedEmployee" title="Assignee" width={180} />
            <Column field="status" title="Status" cells={{ data: StatusCell }} />
        </Grid>
    );
};
export default App;
