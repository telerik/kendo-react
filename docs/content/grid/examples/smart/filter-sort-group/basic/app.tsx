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

const App = () => {
    const [someKey, setSomeKey] = React.useState<number>(0);
    const gridToolbarAIAssistantRef = React.useRef<GridToolbarAIAssistantHandle>(null);
    const handleReset = () => {
        setSomeKey((key) => key + 1);
    };

    return (
        <React.StrictMode>
            <Grid
                key={someKey}
                autoProcessData={true}
                dataItemKey="id"
                data={customers}
                sortable={true}
                groupable={true}
                pageable={true}
                reorderable={true}
                columnMenuIcon={filterIcon}
                columnMenu={ColumnMenu}
                take={20}
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
                        promptPlaceHolder="Filter, sort or group with AI"
                        suggestionsList={[
                            'Sort by Amount descending',
                            'Group by account type',
                            'Filter only the failed transactions',
                            'Filter where currency is USD',
                            'Clear sorting and filtering'
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
                <Column field="Region" title="Region" width={200} />
            </Grid>
        </React.StrictMode>
    );
};

export default App;
