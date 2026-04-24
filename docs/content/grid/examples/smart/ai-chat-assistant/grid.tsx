import * as React from 'react';
import { process, SortDescriptor, GroupDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarSpacer,
    GridHandle,
    GridAIState
} from '@progress/kendo-react-grid';
import { setGroupIds } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import { filterIcon } from '@progress/kendo-svg-icons';

import { customers } from './data';
import { ColumnMenu } from './columnMenu';
import {
    CustomRatingCell,
    CustomAmountCell,
    CustomDiscountCell,
    CustomStatusCell,
    CustomOrderTypeCell
} from './custom-cells';
import { chatAIIcon, resetIcon } from './svg-icons';

const aggregates: Array<{ field: string; aggregate: 'sum' | 'max' | 'min' | 'count' | 'average' }> = [
    {
        field: 'Bookings',
        aggregate: 'sum'
    }
];

export interface DataGridProps {
    gridRef: React.RefObject<GridHandle | null>;
    gridState: GridAIState;
    onGridStateChange: (state: Partial<GridAIState>) => void;
    handleReset: () => void;
    showChat: boolean;
    onToggleChat: () => void;
}

export const DataGrid: React.FC<DataGridProps> = ({
    gridRef,
    gridState,
    onGridStateChange,
    handleReset,
    showChat,
    onToggleChat
}) => {
    const processWithGroups = (
        data: typeof customers,
        dataState: { sort?: SortDescriptor[]; filter?: CompositeFilterDescriptor; group?: GroupDescriptor[] }
    ) => {
        if (dataState.group) {
            for (const group of dataState.group) {
                (group as GroupDescriptor & { aggregates?: typeof aggregates }).aggregates = aggregates;
            }
        }
        const newDataState = process(data, dataState);
        setGroupIds({
            data: newDataState.data,
            group: dataState.group
        });
        return newDataState;
    };

    return (
        <Grid
            ref={gridRef}
            dataItemKey="Id"
            data={
                processWithGroups(customers, {
                    sort: gridState.sort,
                    filter: gridState.filter,
                    group: gridState.group
                }).data
            }
            resizable={true}
            reorderable={true}
            sortable={true}
            {...gridState}
            onSortChange={(event) => {
                onGridStateChange({ sort: event.sort });
            }}
            groupable={{ enabled: true, footer: 'visible' }}
            onGroupChange={(event) => {
                onGridStateChange({ group: event.group });
            }}
            onFilterChange={(event) => {
                onGridStateChange({ filter: event.filter });
            }}
            onColumnsStateChange={(event) => {
                onGridStateChange({ columnsState: event.columnsState });
            }}
            columnMenuIcon={filterIcon}
            pdf={true}
            style={{ height: '600px', width: '100%', maxWidth: '2525px' }}
            size="small"
            scrollable="virtual"
        >
            <GridToolbar>
                <Button
                    svgIcon={resetIcon}
                    title={'Reset changes'}
                    themeColor={'base'}
                    onClick={handleReset}
                    fillMode={'flat'}
                    rounded={'full'}
                >
                    Reset Changes
                </Button>
                <GridToolbarSpacer />
                <Button
                    svgIcon={chatAIIcon}
                    title={'AI Grid'}
                    fillMode={'outline'}
                    rounded={'full'}
                    className={`gradient-border-button ${showChat ? 'active' : ''}`}
                    onClick={onToggleChat}
                >
                    AI Grid
                </Button>
            </GridToolbar>
            <Column field="Id" title="ID" columnMenu={ColumnMenu} />
            <Column field="Account" title="Account" columnMenu={ColumnMenu} />
            <Column field="LicenseType" title="License" columnMenu={ColumnMenu} />
            <Column
                field="Bookings"
                title="Bookings"
                filter="numeric"
                cells={{ data: CustomAmountCell }}
                columnMenu={ColumnMenu}
            />
            <Column field="NumberOfSeats" title="Seats" filter="numeric" columnMenu={ColumnMenu} />
            <Column
                field="CustomerRating"
                title="Rating"
                filter="numeric"
                cells={{ data: CustomRatingCell }}
                columnMenu={ColumnMenu}
            />
            <Column field="Region" title="Region" columnMenu={ColumnMenu} />
            <Column field="SalesPerson" title="Sales Person" columnMenu={ColumnMenu} />
            <Column
                field="OrderDate"
                title="Order Date"
                filter="date"
                format="{0:MM/dd/yyyy}"
                columnMenu={ColumnMenu}
            />
            <Column field="Status" title="Status" cells={{ data: CustomStatusCell }} columnMenu={ColumnMenu} />
            <Column
                field="Discount"
                title="Discount"
                filter="numeric"
                cells={{ data: CustomDiscountCell }}
                columnMenu={ColumnMenu}
            />
            <Column
                field="OrderType"
                title="Order Type"
                cells={{ data: CustomOrderTypeCell }}
                columnMenu={ColumnMenu}
            />
            <Column field="Product" title="Product" columnMenu={ColumnMenu} />
            <Column field="ContactEmail" title="Email" columnMenu={ColumnMenu} />
            <Column field="ContactPhone" title="Phone" columnMenu={ColumnMenu} />
            <Column field="Industry" title="Industry" columnMenu={ColumnMenu} />
        </Grid>
    );
};
