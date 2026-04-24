import * as React from 'react';
import { CompositeFilterDescriptor, SortDescriptor, process } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarSpacer,
    GridHandle,
    GridCustomCellProps,
    handleAIResponse,
    GridAIState
} from '@progress/kendo-react-grid';
import { savePDF } from '@progress/kendo-react-pdf';

import { Button } from '@progress/kendo-react-buttons';
import { filterIcon, sparklesIcon, paperPlaneIcon } from '@progress/kendo-svg-icons';
import { customers, addColumnsValues } from './data';
import { ColumnMenu } from './columnMenu';
import axios, { AxiosResponse } from 'axios';
import {
    CustomRatingCell,
    CustomAmountCell,
    CustomDiscountCell,
    CustomStatusCell,
    CustomOrderTypeCell
} from './custom-cells';
import {
    Chat,
    ChatSendMessageEvent,
    Message,
    User,
    ChatMessageTemplateProps
} from '@progress/kendo-react-conversational-ui';

import { SvgIcon, IconsContext } from '@progress/kendo-react-common';
import { setGroupIds } from '@progress/kendo-react-data-tools';

const chatAIIcon = {
    name: 'chatAI',
    content:
        '<path d="M10 2C11.6569 2 13 3.34315 13 5V6C14.6569 6 16 7.34315 16 9V15H8L7.8457 14.9961C6.31166 14.9184 5.08163 13.6883 5.00391 12.1543L5 12V11H2V6.1748L3 8.94531V10H5V9C5 7.34315 6.34315 6 8 6H12V5C12 3.89543 11.1046 3 10 3H8.94531L6.1748 2H10ZM8 7C6.89543 7 6 7.89543 6 9V12C6 13.1046 6.89543 14 8 14H15V9C15 7.89543 14.1046 7 13 7H8ZM12.5 11C12.7761 11 13 11.2239 13 11.5C13 11.7761 12.7761 12 12.5 12H8.5C8.22386 12 8 11.7761 8 11.5C8 11.2239 8.22386 11 8.5 11H12.5ZM12.5 9C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H8.5C8.22386 10 8 9.77614 8 9.5C8 9.22386 8.22386 9 8.5 9H12.5ZM3.7959 2.2041L6 3L3.7959 3.7959L3 6L2.2041 3.7959L0 3L2.2041 2.2041L3 0L3.7959 2.2041Z" fill="currentColor"/>',
    viewBox: '0 0 16 16'
};
const closeIcon = {
    name: 'close',
    content:
        '<path d="M3.18381 4.06877C2.93932 3.82428 2.93932 3.42787 3.18381 3.18337C3.4283 2.93888 3.82469 2.93888 4.06918 3.18337L12.8166 11.9311C13.0611 12.1756 13.0611 12.572 12.8166 12.8165C12.5721 13.061 12.1758 13.061 11.9313 12.8165L3.18381 4.06877Z M11.9308 3.18347C12.1753 2.93897 12.5717 2.93897 12.8162 3.18347C13.0607 3.42796 13.0607 3.82437 12.8162 4.06887L4.06874 12.8166C3.82425 13.0611 3.42785 13.0611 3.18337 12.8166C2.93888 12.5721 2.93888 12.1757 3.18337 11.9312L11.9308 3.18347Z" fill="currentColor"/>',
    viewBox: '0 0 16 16'
};
const resetIcon = {
    name: 'reset',
    content:
        '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8 M3 3v5h5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: '0 0 24 24'
};
const submitIcon = {
    name: 'submit',
    content:
        '<path d="M7.38529 2.625C7.38529 2.27982 7.66512 2 8.01029 2C8.35547 2 8.63529 2.27982 8.63529 2.625V13.375C8.63529 13.7202 8.35547 14 8.01029 14C7.66512 14 7.38529 13.7202 7.38529 13.375V2.625Z M7.60224 3.07573C7.35816 2.83165 7.35816 2.43593 7.60224 2.19185C7.84631 1.94777 8.24204 1.94777 8.48612 2.19185L12.552 6.25771C12.7961 6.50179 12.7961 6.89752 12.552 7.14159C12.3079 7.38567 11.9122 7.38567 11.6681 7.14159L7.60224 3.07573Z M8.40234 3.07583C8.64641 2.83175 8.64641 2.43602 8.40234 2.19194C8.15826 1.94786 7.76253 1.94786 7.51845 2.19194L3.45259 6.25781C3.20851 6.50188 3.20851 6.89761 3.45259 7.14169C3.69667 7.38577 4.0924 7.38577 4.33647 7.14169L8.40234 3.07583Z" fill="rgba(33, 37, 41, 1)"/>',
    viewBox: '0 0 16 16'
};
interface CustomersGridProps {
    isSmart: boolean;
}

const bot: User = {
    id: 0,
    name: 'bot'
};

const user: User = {
    id: 1,
    name: 'user'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        timestamp: new Date(),
        text: "👋 Hi! I'm your AI Grid Assistant. I can help you browse and analyze data. Try asking me to:  \n\n• Show me top 10 performing sales team members \n• Sort bookings data \n• Export data to pdf \n\nWhat would you like to do?"
    }
];
interface ChatSuggestion {
    id: string | number;
    text: string;
    description?: string;
}

const ChatSuggestions: ChatSuggestion[] = [
    {
        id: 'top-10-sales',
        text: 'Show the strongest sales by team member',
        description: 'Group by Sales Person and sort by SalesPersonBookingsSum descending'
    },
    {
        id: 'sort-amount-desc',
        text: 'Sort by Bookings',
        description: 'Sort by bookings descending'
    },
    {
        id: 'export-pdf',
        text: 'Export to PDF',
        description: 'Export to PDF'
    },
    {
        id: 'filter-asia-region',
        text: 'Show Asia Region',
        description: 'Filter Asia Region'
    },
    {
        id: 'hide-rating-column',
        text: 'Hide Rating Column',
        description: 'Hide Rating Column'
    }
];

const aggregates = [
    {
        field: 'Bookings',
        aggregate: 'sum'
    }
];

const MyFooterCustomCell = (props: GridCustomCellProps) => {
    let cellContent;
    if (props.field === 'Bookings') {
        const sum = props.dataItem.aggregates.Bookings.sum;
        cellContent = `Sum: ${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(sum)}`;
    }
    console.log('props in footer cell', props);
    return (
        <td {...props.tdProps} colSpan={1}>
            {cellContent}
        </td>
    );
};
const AIMessageTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => (
    <div style={{ padding: '16px 0' }}>
        <div
            style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
            }}
        >
            <div style={{ flex: 1, minWidth: 0 }}>
                <div
                    style={{
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word'
                    }}
                >
                    {item?.text}
                </div>
            </div>
        </div>
    </div>
);

const initialColumnsState = [
    { id: '_0_column', field: 'Id', hidden: false, width: '80px', filter: 'numeric' },
    { id: '_1_column', field: 'Account', hidden: false, width: '250px', filter: 'text' },
    { id: '_2_column', field: 'LicenseType', hidden: false, width: '140px', filter: 'text' },
    { id: '_3_column', field: 'Bookings', hidden: false, width: '130px', filter: 'numeric' },
    { id: '_4_column', field: 'NumberOfSeats', hidden: false, width: '100px', filter: 'numeric' },
    { id: '_5_column', field: 'CustomerRating', hidden: false, width: '195px', filter: 'numeric' },
    { id: '_6_column', field: 'Region', hidden: false, width: '150px', filter: 'text' },
    { id: '_7_column', field: 'SalesPerson', hidden: false, width: '150px', filter: 'text' },
    { id: '_8_column', field: 'OrderDate', hidden: false, width: '140px', filter: 'date' },
    { id: '_9_column', field: 'Status', hidden: false, width: '120px', filter: 'text' },
    { id: '_10_column', field: 'Discount', hidden: false, width: '120px', filter: 'numeric' },
    { id: '_11_column', field: 'OrderType', hidden: false, width: '140px', filter: 'text' },
    { id: '_12_column', field: 'Product', hidden: false, width: '160px', filter: 'text' },
    { id: '_13_column', field: 'ContactEmail', hidden: false, width: '320px', filter: 'text' },
    { id: '_14_column', field: 'ContactPhone', hidden: false, width: '200px', filter: 'text' },
    { id: '_15_column', field: 'Industry', hidden: false, width: '130px', filter: 'text' }
];

export const CustomersGrid = ({ isSmart }: CustomersGridProps) => {
    const [gridState, setGridState] = React.useState<GridAIState>({
        sort: [],
        filter: undefined,
        group: [],
        columnsState: initialColumnsState
    });
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [showChat, setShowChat] = React.useState(true);
    const gridRef = React.useRef<GridHandle | null>(null);

    const AIHeaderTemplate = () => {
        return (
            <>
                <div>
                    <SvgIcon className="ai-icon" icon={sparklesIcon} /> Ask KendoReact AI Grid Assistant
                </div>
                <div className={'k-spacer'} />
                <Button fillMode={'clear'} svgIcon={closeIcon} onClick={() => setShowChat(false)} />
            </>
        );
    };

    const exportPDFWithMethod = () => {
        let element: any = document.querySelector('.k-grid') || document.body;
        savePDF(element, { paperSize: 'A4', landscape: true, margin: '1cm', scale: 0.5 });
    };

    const handleBeforeRequest = (event, isRetry) => {
        event.columns = addColumnsValues(event.columns);

        // Add typing indicator
        const typingMessage: Message = {
            id: 'typing',
            author: bot,
            typing: true
        };
        setMessages((prev) => [...prev, typingMessage]);

        axios({
            method: 'POST',
            withCredentials: false,
            responseType: 'json',
            url: 'https://demos.telerik.com/service/v2/ai/grid/smart-state',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            },
            data: {
                role: 'user',
                contents: [
                    {
                        $type: 'text',
                        text: event.prompt
                    }
                ],
                columns: event.columns
            }
        })
            .then((e) => onResponseSuccess(e, event.prompt, isRetry))
            .catch(onResponseError);
    };

    const onResponseSuccess = (response: AxiosResponse<any>, promptMessage?: string, isRetry?: boolean) => {
        // Remove typing indicator
        setMessages((prev) => prev.filter((msg) => msg.id !== 'typing'));

        // Use the pure function to handle AI response
        const result = handleAIResponse(response, gridState, gridRef.current);

        // Update grid state with all changes
        setGridState(result.state);

        // Handle PDF export if requested
        if (result.shouldExportPdf) {
            exportPDFWithMethod();
        }

        // Add AI response messages to chat
        result.messages.forEach((message) => {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    text: message,
                    author: bot
                }
            ]);
        });
    };

    const onResponseError = (req: any) => {
        // Remove typing indicator on error
        setMessages((prev) => prev.filter((msg) => msg.id !== 'typing'));
    };

    const handleReset = () => {
        setGridState({
            sort: [],
            filter: undefined,
            group: [],
            columnsState: initialColumnsState,
            skip: 0,
            take: 20
        });
        setMessages(initialMessages);
    };

    const addNewMessage = (event: ChatSendMessageEvent) => {
        setMessages([
            ...messages,
            { ...event.message, text: event.message.text || ' ', id: Date.now().toString(), author: user }
        ]);
        handleBeforeRequest(
            {
                columns: gridState.columnsState,
                prompt: event.message.text
            },
            false
        );
    };

    const handleSuggestionClick = (suggestion: ChatSuggestion) => {
        const suggestionMessage: Message = {
            id: Date.now(),
            author: user,
            text: suggestion.text,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, suggestionMessage]);
        handleBeforeRequest(
            {
                columns: gridState.columnsState,
                prompt: suggestion.description
            },
            false
        );
    };

    const processWithGroups = (data, dataState) => {
        if (dataState.group) {
            dataState.group.forEach((group) => (group.aggregates = aggregates));
        }
        const newDataState = process(data, dataState);
        setGroupIds({
            data: newDataState.data,
            group: dataState.group
        });
        return newDataState;
    };

    return (
        <IconsContext.Provider
            value={{
                type: 'svg',
                icons: {
                    //a custom SVG icon
                    [paperPlaneIcon.name]: submitIcon
                    //or any of the built-in SVG icons
                    //[caretAltDownIcon.name]: filterIcon,
                }
            }}
        >
            <div className="grid-frame">
                <div className="container-wrapper">
                    <div className="container-wrapper-grid">
                        <Grid
                            ref={gridRef}
                            dataItemKey="Id"
                            data={
                                processWithGroups(customers, {
                                    sort: gridState.sort,
                                    filter: gridState.filter,
                                    group: gridState.group
                                }).data
                            }
                            resizable={true}
                            reorderable={true}
                            sortable={true}
                            {...gridState}
                            onSortChange={(event) => {
                                setGridState((prev) => ({ ...prev, sort: event.sort }));
                            }}
                            groupable={{ enabled: true, footer: 'visible' }}
                            onGroupChange={(event) => {
                                setGridState((prev) => ({ ...prev, group: event.group }));
                            }}
                            onFilterChange={(event) => {
                                setGridState((prev) => ({ ...prev, filter: event.filter }));
                            }}
                            onColumnsStateChange={(event) => {
                                setGridState((prev) => ({ ...prev, columnsState: event.columnsState }));
                            }}
                            columnMenuIcon={filterIcon}
                            pdf={true}
                            style={{ height: '100%', width: '100%', maxWidth: '2525px' }}
                            className={`${gridState.group?.length == 0 ? 'hide-group' : ''}`}
                            cells={{
                                groupFooter: MyFooterCustomCell
                            }}
                            size="small"
                        >
                            <GridToolbar>
                                <GridToolbarSpacer />
                                {isSmart && (
                                    <Button
                                        svgIcon={chatAIIcon}
                                        title={'AI Grid'}
                                        fillMode={'outline'}
                                        rounded={'full'}
                                        className={`gradient-border-button ${showChat ? 'active' : ''}`}
                                        onClick={() => setShowChat(!showChat)}
                                    >
                                        {showChat ? undefined : 'AI Grid'}
                                    </Button>
                                )}
                                <Button
                                    svgIcon={resetIcon}
                                    title={'Reset changes'}
                                    themeColor={'base'}
                                    onClick={handleReset}
                                    fillMode={'flat'}
                                    rounded={'full'}
                                />
                            </GridToolbar>
                            <Column field="Id" title="ID" columnMenu={ColumnMenu} />
                            <Column field="Account" title="Account" columnMenu={ColumnMenu} />
                            <Column field="LicenseType" title="License" columnMenu={ColumnMenu} />
                            <Column
                                field="Bookings"
                                title="Bookings"
                                filter="numeric"
                                cells={{ data: CustomAmountCell }}
                                columnMenu={ColumnMenu}
                            />
                            <Column field="NumberOfSeats" title="Seats" filter="numeric" columnMenu={ColumnMenu} />
                            <Column
                                field="CustomerRating"
                                title="Rating"
                                cells={{ data: CustomRatingCell }}
                                columnMenu={ColumnMenu}
                            />
                            <Column field="Region" title="Region" columnMenu={ColumnMenu} />
                            <Column field="SalesPerson" title="Sales Person" columnMenu={ColumnMenu} />
                            <Column
                                field="OrderDate"
                                title="Order Date"
                                filter="date"
                                format="{0:MM/dd/yyyy}"
                                columnMenu={ColumnMenu}
                            />
                            <Column
                                field="Status"
                                title="Status"
                                cells={{ data: CustomStatusCell }}
                                columnMenu={ColumnMenu}
                            />
                            <Column
                                field="Discount"
                                title="Discount"
                                filter="numeric"
                                cells={{ data: CustomDiscountCell }}
                                columnMenu={ColumnMenu}
                            />
                            <Column
                                field="OrderType"
                                title="Order Type"
                                cells={{ data: CustomOrderTypeCell }}
                                columnMenu={ColumnMenu}
                            />
                            <Column field="Product" title="Product" columnMenu={ColumnMenu} />
                            <Column field="ContactEmail" title="Email" columnMenu={ColumnMenu} />
                            <Column field="ContactPhone" title="Phone" columnMenu={ColumnMenu} />
                            <Column field="Industry" title="Industry" columnMenu={ColumnMenu} />
                        </Grid>
                    </div>
                    {showChat && isSmart && (
                        <div className="container-wrapper-chat">
                            <Chat
                                messages={messages}
                                authorId={user.id}
                                onSendMessage={addNewMessage}
                                placeholder={'Ask me to sort, filter, or analyze your data. '}
                                suggestions={ChatSuggestions}
                                onSuggestionClick={handleSuggestionClick}
                                showUsername={false}
                                uploadConfig={false}
                                headerTemplate={AIHeaderTemplate}
                                receiverMessageSettings={{
                                    messageTemplate: AIMessageTemplate,
                                    messageWidthMode: 'full'
                                }}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </IconsContext.Provider>
    );
};
