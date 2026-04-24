import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarAIAssistant,
    GridToolbarSpacer
} from '@progress/kendo-react-grid';
import type { GridToolbarAIAssistantHandle } from '@progress/kendo-react-grid';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import { patients, addColumnsValues } from './data';
import { Button } from '@progress/kendo-react-buttons';
import { CustomConditionSeverityCell, CustomStatusCell, CustomRiskScoreCell } from './custom-cells';
import './style.css';
const App = () => {
    const [someKey, setSomeKey] = React.useState<number>(0);
    const gridToolbarAIAssistantRef = React.useRef<GridToolbarAIAssistantHandle>(null);

    const handleReset = () => {
        setSomeKey((key) => key + 1);
    };
    return (
        <React.StrictMode>
            <Grid style={{ height: '600px' }} key={someKey} autoProcessData={true} dataItemKey="Id" data={patients}>
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
                        promptPlaceHolder="Highlight with AI"
                        suggestionsList={[
                            'Highlight age cells above 60',
                            // 'Mark all rows with critical care admissions after 15th of July',
                            'Highlight rows with patients over 65 still under treatment',
                            'Highlight rows of patients with risk score between 5 and 10',
                            'Clear highlighting'
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
                <Column field="PatientName" title="Patient Name" width={200} />
                <Column field="Age" title="Age" width={100} />
                <Column
                    field="ConditionSeverity"
                    title="Condition Severity"
                    width={200}
                    cells={{ data: CustomConditionSeverityCell }}
                />
                <Column field="Department" title="Department" width={200} />
                <Column field="Status" width={200} title="Status" cells={{ data: CustomStatusCell }} />
                <Column
                    field="AdmissionDate"
                    title="Admission Date"
                    filter="date"
                    format="{0:dd-MM-yyyy}"
                    width={120}
                />
                <Column
                    field="RiskScore"
                    title="Risk Score"
                    filter="numeric"
                    width={200}
                    cells={{ data: CustomRiskScoreCell }}
                />
            </Grid>
        </React.StrictMode>
    );
};

export default App;
