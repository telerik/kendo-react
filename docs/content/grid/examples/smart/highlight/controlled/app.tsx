import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarAIAssistant,
    GridToolbarSpacer,
    GridHighlightDescriptor,
    GridHighlightChangeEvent
} from '@progress/kendo-react-grid';
import type { GridToolbarAIAssistantHandle } from '@progress/kendo-react-grid';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { patients, addColumnsValues } from './data';
import { AIPromptOutputInterface } from '@progress/kendo-react-conversational-ui';
import { AxiosResponse } from 'axios';
import { CustomConditionSeverityCell, CustomStatusCell, CustomRiskScoreCell } from './custom-cells';

const App = () => {
    const gridRef = React.useRef(null);
    const gridToolbarAIAssistantRef = React.useRef<GridToolbarAIAssistantHandle>(null);
    const [highlight, setHighlight] = React.useState<GridHighlightDescriptor>();
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

    const handleHighlightChange = (event: GridHighlightChangeEvent) => {
        setHighlight(event.highlight);
    };

    const handleReset = () => {
        setHighlight({});
    };
    return (
        <React.StrictMode>
            <Grid
                ref={gridRef}
                style={{ height: '600px' }}
                autoProcessData={true}
                dataItemKey="Id"
                highlight={highlight}
                data={patients}
                onHighlightChange={handleHighlightChange}
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
                        promptPlaceHolder="Highlight with AI"
                        suggestionsList={[
                            'Highlight age cells above 60',
                            // 'Mark all rows with cri˚tical care admissions after 15th of July',
                            'Highlight rows with patients over 65 still under treatment',
                            'Highlight rows of patients with risk score between 5 and 10',
                            'Clear highlighting'
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
