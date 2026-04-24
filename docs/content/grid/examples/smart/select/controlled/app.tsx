import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarAIAssistant,
    GridToolbarSpacer,
    GridHighlightDescriptor
} from '@progress/kendo-react-grid';
import type { GridSelectionChangeEvent, GridToolbarAIAssistantHandle } from '@progress/kendo-react-grid';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { patients, addColumnsValues } from './data';
import { AIPromptOutputInterface } from '@progress/kendo-react-conversational-ui';
import { AxiosResponse } from 'axios';
import { CustomConditionSeverityCell, CustomStatusCell, CustomRiskScoreCell } from './custom-cells';

const App = () => {
    const gridRef = React.useRef(null);
    const gridToolbarAIAssistantRef = React.useRef<GridToolbarAIAssistantHandle>(null);
    const [select, setSelect] = React.useState<GridHighlightDescriptor>();
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [streaming, setStreaming] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleBeforeRequest = (event, isRetry) => {
        event.columns = addColumnsValues(event.columns);
        setStreaming(true);
        setLoading(true);
    };

    const onResponseSuccess = (req: AxiosResponse<any>, promptMessage?: string, isRetry?: boolean) => {
        setStreaming(false);
        setLoading(false);
        if (req && req.data) {
            if (req.data.messages) {
                const responseContentStart = ['Operation is successful. Data is: \n'];
                const responseContentBody = req.data.messages
                    .map((output: string, idx: number) => `${idx + 1}. ${output}`)
                    .join('\n');
                setOutputs([
                    {
                        id: outputs.length + 1,
                        title: 'Generate with AI',
                        subTitle: promptMessage,
                        prompt: promptMessage,
                        responseContent: responseContentStart.concat(responseContentBody).join(''),
                        isRetry: isRetry
                    },
                    ...outputs
                ]);
            }
        }
        gridToolbarAIAssistantRef.current?.hide();
    };

    const handleSelectChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const handleReset = () => {
        setSelect({});
    };

    return (
        <React.StrictMode>
            <Grid
                ref={gridRef}
                style={{ height: '600px' }}
                autoProcessData={true}
                dataItemKey="Id"
                selectable={true}
                select={select}
                data={patients}
                onSelectionChange={handleSelectChange}
            >
                <GridToolbar>
                    <GridToolbarAIAssistant
                        ref={gridToolbarAIAssistantRef}
                        requestUrl="https://demos.telerik.com/service/v2/ai/grid/smart-state"
                        onPromptRequest={handleBeforeRequest}
                        onResponseSuccess={onResponseSuccess}
                        streaming={streaming}
                        loading={loading}
                        outputs={outputs}
                        promptPlaceHolder="Select with AI"
                        suggestionsList={[
                            'Select age above 60',
                            'Select rows with critical status',
                            'Select all rows Age above 50 and less than 65',
                            'Clear Selection'
                        ]}
                        enableSpeechToText={true}
                    />
                    <GridToolbarSpacer />
                    <Button svgIcon={arrowRotateCcwIcon} title={'Reset'} themeColor={'base'} onClick={handleReset}>
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
                <Column field="Status" title="Status" width={200} cells={{ data: CustomStatusCell }} />
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
