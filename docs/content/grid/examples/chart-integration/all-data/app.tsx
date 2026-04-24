import * as React from 'react';

import { GridColumn as Column, Grid, GridHandle, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { ChartWizard, ChartWizardDataRow, getWizardDataFromGridSelection } from '@progress/kendo-react-chart-wizard';
import { sampleData } from './gd-sampleChartData';
import { chartAreaStackedIcon } from '@progress/kendo-svg-icons';

const DATA_ITEM_KEY = 'ID';

const App = () => {
    const [visible, setVisible] = React.useState(false);
    const [wizardData, setWizardData] = React.useState<ChartWizardDataRow[]>([]);
    const gridRef = React.useRef<GridHandle>(null);

    const onClose = React.useCallback(() => {
        setVisible(false);
    }, []);

    const onOpen = React.useCallback(() => {
        const allItems = Object.fromEntries(sampleData.map((dataItem) => [dataItem[DATA_ITEM_KEY], true]));
        setWizardData(
            getWizardDataFromGridSelection({
                grid: gridRef.current,
                data: sampleData,
                selectedState: allItems,
                dataItemKey: DATA_ITEM_KEY
            })
        );
        setVisible(true);
    }, []);

    return (
        <>
            <Grid ref={gridRef} data={sampleData} dataItemKey={DATA_ITEM_KEY} style={{ height: '600px' }}>
                <GridToolbar>
                    <Button svgIcon={chartAreaStackedIcon} onClick={onOpen}>
                        Chart For All Data
                    </Button>
                </GridToolbar>
                <Column field="Product" title="Product Name" />
                <Column field="Price" title="Price" />
                <Column field="Tax" title="Tax" />
                <Column field="Total" title="Total" />
            </Grid>
            {visible && <ChartWizard data={wizardData} onClose={onClose} />}
        </>
    );
};

export default App;
