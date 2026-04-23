import * as React from 'react';
import { filterBy } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarAIAssistant,
    GridToolbarSpacer,
    CompositeHighlightDescriptor,
    GridHighlightDescriptor,
    GridHandle,
    GridColumnProps
} from '@progress/kendo-react-grid';
import type { GridSelectionChangeEvent, GridToolbarAIAssistantHandle } from '@progress/kendo-react-grid';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

import { patients, addColumnsValues } from './data';
import { AIPromptOutputInterface } from '@progress/kendo-react-conversational-ui';
import axios, { AxiosResponse } from 'axios';
import { CustomConditionSeverityCell, CustomStatusCell, CustomRiskScoreCell } from './custom-cells';

const getSelectFromResults = (
    dataItems: any[],
    filter: CompositeHighlightDescriptor,
    columns: GridColumnProps[],
    dataItemKey?: string
): any => {
    const cellIndexes = Object.keys(filter.cells).map((key) => {
        return columns.findIndex((col) => col.field === key);
    });
    const selected = Object.keys(filter.cells).length > 0 ? cellIndexes : true;
    return dataItems.reduce((acc, item) => {
        acc[item[dataItemKey ?? 'id']] = selected;
        return acc;
    }, {} as Record<any, boolean>);
};

const getSelectedItems = (
    data: any,
    filters: CompositeHighlightDescriptor[],
    columns: GridColumnProps[],
    dataItemKey?: string
) => {
    const results = filters.reduce((acc, f) => {
        return {
            ...acc,
            ...getSelectFromResults(filterBy(data, f), f, columns, dataItemKey)
        };
    }, {});
    return results;
};

const App = () => {
    const gridRef = React.useRef<GridHandle>(null);
    const gridToolbarAIAssistantRef = React.useRef<GridToolbarAIAssistantHandle>(null);
    const [select, setSelect] = React.useState<GridHighlightDescriptor>();
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [streaming, setStreaming] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleBeforeRequest = (event, isRetry) => {
        event.columns = addColumnsValues(event.columns);
        setStreaming(true);
        setLoading(true);
        axios({
            ...event.requestOptions,
            url: 'https://demos.telerik.com/service/v2/ai/grid/smart-state',
            headers: event.headers,
            data: {
                role: event.role,
                contents: [
                    {
                        $type: 'text',
                        text: event.promptMessage
                    }
                ],
                columns: event.columns
            }
        })
            .then((e) => onResponseSuccess(e, event.promptMessage, isRetry))
            .catch(onResponseError);
    };

    const onResponseSuccess = (req: AxiosResponse<any>, promptMessage?: string, isRetry?: boolean) => {
        setStreaming(false);
        setLoading(false);
        if (req && req.data) {
            const grid = gridRef.current;
            req.data.commands.forEach((element) => {
                if (element.select && grid) {
                    const newSelect = getSelectedItems(patients, [element.select], grid.columns, 'Id');

                    setSelect({ ...newSelect });
                }

                if (element.type == 'GridClearSelect') {
                    setSelect({});
                }
            });

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
    const onResponseError = (req: any) => {
        setStreaming(false);
        setLoading(false);
    };

    const handleReset = () => {
        setSelect(undefined);
    };

    const handleSelectionChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
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
                onSelectionChange={handleSelectionChange}
            >
                <GridToolbar>
                    <GridToolbarAIAssistant
                        ref={gridToolbarAIAssistantRef}
                        onPromptRequest={handleBeforeRequest}
                        onResponseSuccess={(event) => {
                            gridToolbarAIAssistantRef.current?.hide();
                        }}
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
                <Column field="PatientName" width={200} title="Patient Name" />
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
