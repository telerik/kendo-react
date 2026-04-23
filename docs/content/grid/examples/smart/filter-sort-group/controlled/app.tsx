import * as React from 'react';
import { CompositeFilterDescriptor, SortDescriptor, process } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarAIAssistant,
    GridToolbarSpacer
} from '@progress/kendo-react-grid';
import type { GridToolbarAIAssistantHandle } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { arrowRotateCcwIcon, filterIcon } from '@progress/kendo-svg-icons';
import { customers, addColumnsValues } from './data';
import { ColumnMenu } from './columnMenu';
import { AIPromptOutputInterface } from '@progress/kendo-react-conversational-ui';
import { AxiosResponse } from 'axios';
import { CustomAmountCell, CustomStatusCell, CustomAccountTypeCell } from './custom-cells';

const App = () => {
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(20);
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
                // take={20}
                style={{ height: '740px' }}
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
                    <Button svgIcon={arrowRotateCcwIcon} title={'Reset'} themeColor={'base'} onClick={handleReset}>
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
