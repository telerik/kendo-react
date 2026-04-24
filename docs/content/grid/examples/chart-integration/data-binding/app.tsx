import * as React from 'react';

import { ChartWizard, getWizardDataFromGridSelection } from '@progress/kendo-react-chart-wizard';

import {
    Grid,
    GridColumn as Column,
    GridSelectionChangeEvent,
    GridKeyDownEvent,
    getSelectedState,
    getSelectedStateFromKeyDown,
    GridHandle,
    GridToolbar,
    GridSortChangeEvent
} from '@progress/kendo-react-grid';

import { getter } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';
import { sampleData } from './gd-sampleChartData';
import { chartAreaStackedIcon } from '@progress/kendo-svg-icons';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';

const DATA_ITEM_KEY = 'ID';
const initialSort: Array<SortDescriptor> = [{ field: 'Price', dir: 'desc' }];

const App = () => {
    const gridRef = React.useRef<GridHandle>(null);
    const [visible, setVisible] = React.useState(false);
    const [sort, setSort] = React.useState(initialSort);
    const [select, setSelect] = React.useState<SelectDescriptor>({
        2: [0, 1, 2, 3],
        4: [0, 1, 2, 3],
        6: [0, 1, 2, 3],
        7: [0, 1, 2, 3]
    });

    const hasSelection = (state: { [id: string]: boolean | number[] }): boolean => {
        let hasSelection = true;

        const currentState = Object.keys(state);
        if (currentState.length === 0) {
            hasSelection = false;
        } else {
            for (let key of currentState) {
                const item = state[key];
                hasSelection = Array.isArray(item) ? item.length > 0 : item === true;

                if (hasSelection) {
                    break;
                }
            }
        }

        return hasSelection;
    };

    const disabled: boolean = !hasSelection(select);

    const chartWizardData = getWizardDataFromGridSelection({
        grid: gridRef.current,
        data: sampleData,
        selectedState: select,
        dataItemKey: DATA_ITEM_KEY
    });

    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const onClose = React.useCallback(() => {
        setVisible(false);
    }, []);

    const onOpen = React.useCallback(() => {
        setVisible(true);
    }, []);

    return (
        <>
            <div className="example-config">
                <strong>Select rows and click the "Chart of Selected Data" button.</strong>
            </div>
            <Grid
                ref={gridRef}
                style={{ height: '500px' }}
                data={orderBy(sampleData, sort)}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: true,
                    cell: true,
                    mode: 'multiple'
                }}
                navigatable={true}
                select={select}
                onSelectionChange={onSelectionChange}
                sortable={true}
                sort={sort}
                onSortChange={(e: GridSortChangeEvent) => {
                    setSort(e.sort);
                }}
            >
                <GridToolbar>
                    <Button svgIcon={chartAreaStackedIcon} onClick={onOpen} disabled={disabled}>
                        Chart of Selected Data
                    </Button>
                </GridToolbar>
                <Column field="Product" title="Product Name" />
                <Column field="Price" title="Price" />
                <Column field="Tax" title="Tax" />
                <Column field="Total" title="Total" />
            </Grid>

            {visible && <ChartWizard data={chartWizardData} onClose={onClose} />}
        </>
    );
};

export default App;
