import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarAIAssistant,
    GridToolbarSpacer
} from '@progress/kendo-react-grid';
import type { GridToolbarAIAssistantHandle } from '@progress/kendo-react-grid';
import { filterIcon, arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import { customers, addColumnsValues } from './data';
import { ColumnMenu } from './columnMenu';
import { Button } from '@progress/kendo-react-buttons';
import { CustomAmountCell, CustomStatusCell, CustomAccountTypeCell } from './custom-cells';
import { saveGridPDF } from '@progress/kendo-react-pdf';

const App = () => {
    const [someKey, setSomeKey] = React.useState<number>(0);
    const gridToolbarAIAssistantRef = React.useRef<GridToolbarAIAssistantHandle>(null);

    const handleReset = () => {
        setSomeKey((key) => key + 1);
    };

    const handlePdfExport = async (event) => {
        const callBack = () => {
            console.log('PDF Exported');
        };

        saveGridPDF(event.target, {}, callBack);
    };

    return (
        <React.StrictMode>
            <Grid
                key={someKey}
                selectable={true}
                autoProcessData={true}
                dataItemKey="Id"
                data={customers}
                sortable={true}
                groupable={true}
                pageable={true}
                resizable={true}
                reorderable={true}
                pdf={true}
                onPdfExport={handlePdfExport}
                columnMenuIcon={filterIcon}
                columnMenu={ColumnMenu}
                style={{ height: '730px' }}
            >
                <GridToolbar>
                    <GridToolbarAIAssistant
                        ref={gridToolbarAIAssistantRef}
                        requestUrl={'https://demos.telerik.com/service/v2/ai/grid/smart-state'}
                        onPromptRequest={(event) => {
                            event.columns = addColumnsValues(event.columns);
                        }}
                        onResponseSuccess={(event) => {
                            gridToolbarAIAssistantRef.current?.hide();
                        }}
                        promptPlaceHolder="Filter, sort, group, select, resize, lock/unlock, show/hide, reorder or export with AI"
                        suggestionsList={[
                            'Sort by Amount descending and select only failed transactions',
                            'Filter where currency is USD',
                            'Lock the Amount column',
                            'Reorder AccountType to be first',
                            "Export to PDF with file name 'report'"
                        ]}
                        enableSpeechToText={true}
                    />
                    <GridToolbarSpacer />
                    <Button
                        svgIcon={arrowRotateCcwIcon}
                        title={'Reset changes'}
                        themeColor={'base'}
                        onClick={handleReset}
                    >
                        Reset changes
                    </Button>
                </GridToolbar>
                <Column field="CustomerName" title="Customer Name" width={150} />
                <Column field="Amount" title="Amount" width={100} filter="numeric" cells={{ data: CustomAmountCell }} />
                <Column field="Fee" title="Fee" width={80} />
                <Column field="Currency" title="Currency" width={80} />
                <Column field="Status" title="Status" width={125} cells={{ data: CustomStatusCell }} />
                <Column field="TransType" title="Transaction Type" width={100} />
                <Column field="AccountType" title="Account Type" width={145} cells={{ data: CustomAccountTypeCell }} />
                <Column field="TransDate" title="Transaction Date" filter="date" format="{0:dd-MM-yyyy}" width={100} />
                <Column field="Description" title="Description" width={160} />
                <Column field="Region" title="Region"  />
            </Grid>
        </React.StrictMode>
    );
};

export default App;
