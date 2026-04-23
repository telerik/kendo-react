import * as React from 'react';
import { CompositeFilterDescriptor, SortDescriptor, process } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarAIAssistant,
    GridToolbarSpacer,
    combineSmartFilters
} from '@progress/kendo-react-grid';
import type { GridToolbarAIAssistantHandle } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { arrowRotateCcwIcon, filterIcon } from '@progress/kendo-svg-icons';
import { customers, addColumnsValues } from './data';
import { ColumnMenu } from './columnMenu';
import { AIPromptOutputInterface } from '@progress/kendo-react-conversational-ui';
import axios, { AxiosResponse } from 'axios';
import { CustomAmountCell, CustomStatusCell, CustomAccountTypeCell } from './custom-cells';

const App = () => {
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(10);
    const [sort, setSort] = React.useState<SortDescriptor[]>([]);
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor | undefined>();
    const [group, setGroup] = React.useState<any[]>([]);
    const [outputs, setOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [streaming, setStreaming] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const gridToolbarAIAssistantRef = React.useRef<GridToolbarAIAssistantHandle>(null);

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
            req.data.commands.forEach((element) => {
                if (element.sort) {
                    setSort([element.sort]);
                }

                if (element.type == 'GridClearSort') {
                    setSort([]);
                }

                if (element.filter) {
                    const newFilter = combineSmartFilters(element.filter, filter) || undefined;
                    setFilter(newFilter);
                }

                if (element.type == 'GridClearFilter') {
                    setFilter(undefined);
                }

                if (element.group) {
                    setGroup([element.group]);
                }

                if (element.type == 'GridClearGroup') {
                    setGroup([]);
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
        setSort([]);
        setFilter(undefined);
        setGroup([]);
        setOutputs([]);
    };

    return (
        <React.StrictMode>
            <Grid
                dataItemKey="id"
                data={process(customers, { sort, filter, group, skip: skip, take: take }).data}
                total={process(customers, { sort, filter, group, skip: skip, take: take }).total}
                sortable={true}
                sort={sort}
                onSortChange={(event) => {
                    setSort(event.sort);
                }}
                groupable={true}
                group={group}
                onGroupChange={(event) => {
                    setGroup(event.group);
                }}
                filter={filter}
                onFilterChange={(event) => {
                    setFilter(event.filter);
                }}
                onPageChange={(event) => {
                    setSkip(event.page.skip);
                    setTake(event.page.take);
                }}
                pageable={true}
                columnMenuIcon={filterIcon}
                columnMenu={ColumnMenu}
                style={{ height: '720px' }}
            >
                <GridToolbar>
                    <GridToolbarAIAssistant
                        ref={gridToolbarAIAssistantRef}
                        onPromptRequest={handleBeforeRequest}
                        streaming={streaming}
                        loading={loading}
                        outputs={outputs}
                        promptPlaceHolder="Filter, sort or group with AI"
                        suggestionsList={[
                            'Sort by Amount descending',
                            'Group by account type',
                            'Filter only the failed transactions',
                            'Filter where currency is USD'
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
