import * as React from 'react';

import { getter } from '@progress/kendo-react-common';
import {
    GridColumn as Column,
    Grid,
    GridHandle,
    getSelectedState,
    GridSelectionChangeEvent,
    GridSortChangeEvent
} from '@progress/kendo-react-grid';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { ChartWizard, ChartWizardDataRow, getWizardDataFromGridSelection } from '@progress/kendo-react-chart-wizard';
import { sampleData } from './gd-sampleChartData';
import { chartAreaStackedIcon } from '@progress/kendo-svg-icons';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';

const DATA_ITEM_KEY = 'ID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);
const initialSort: Array<SortDescriptor> = [{ field: 'Price', dir: 'desc' }];

const App = () => {
    const [visible, setVisible] = React.useState(false);
    const [wizardData, setWizardData] = React.useState<ChartWizardDataRow[]>([]);
    const [select, setSelect] = React.useState<SelectDescriptor>({
        2: [0, 1, 2, 3],
        4: [0, 1, 2, 3],
        6: [0, 1, 2, 3],
        7: [0, 1, 2, 3]
    });
    const [sort, setSort] = React.useState(initialSort);

    const hasSelection = Object.values(select).some((value) => value);
    const gridRef = React.useRef<GridHandle>(null);

    const data = sampleData.map((item) => ({
        ...item,
        [SELECTED_FIELD]: select[idGetter(item)]
    }));

    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const onClose = React.useCallback(() => {
        setVisible(false);
    }, []);

    const onOpen = React.useCallback(() => {
        setWizardData(
            getWizardDataFromGridSelection({
                grid: gridRef.current,
                data: sampleData,
                selectedState: select,
                dataItemKey: DATA_ITEM_KEY
            })
        );

        setVisible(true);
    }, [select]);

    return (
        <>
            <div className="example-config">
                <strong>Select rows and click the "Generate Chart" button.</strong>
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '30px',
                    right: '30px'
                }}
            >
                <Grid
                    ref={gridRef}
                    style={{ height: '500px' }}
                    data={orderBy(data, sort)}
                    dataItemKey={DATA_ITEM_KEY}
                    select={select}
                    selectable={{
                        enabled: true,
                        drag: true,
                        cell: true,
                        mode: 'multiple'
                    }}
                    onSelectionChange={onSelectionChange}
                    sortable={true}
                    sort={sort}
                    onSortChange={(e: GridSortChangeEvent) => {
                        setSort(e.sort);
                    }}
                >
                    <Column field="Product" title="Product Name" />
                    <Column field="Price" title="Price" />
                    <Column field="Tax" title="Tax" />
                    <Column field="Total" title="Total" />
                </Grid>
                <FloatingActionButton
                    positionMode="absolute"
                    svgIcon={chartAreaStackedIcon}
                    onClick={onOpen}
                    disabled={!hasSelection}
                    text="Generate Chart"
                    title="Generate Chart"
                    alignOffset={{ x: 40, y: 30 }}
                    size="small"
                    style={{ zIndex: 2 }}
                ></FloatingActionButton>
            </div>
            {visible && <ChartWizard data={wizardData} onClose={onClose} />}
        </>
    );
};

export default App;
