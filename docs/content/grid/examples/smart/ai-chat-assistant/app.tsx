import * as React from 'react';
import { GridHandle, GridAIState, handleAIResponse } from '@progress/kendo-react-grid';
import { ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';
import { Drawer, DrawerContent, DrawerNavigation } from '@progress/kendo-react-layout';
import { savePDF } from '@progress/kendo-react-pdf';
import axios, { AxiosResponse } from 'axios';

import { addColumnsValues } from './data';
import { AIChat, bot, user, initialMessages } from './chat';
import { DataGrid } from './grid';
import './styles.css';

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
const initialGridState: GridAIState = {
    sort: [],
    filter: { logic: 'and', filters: [] },
    group: [],
    columnsState: initialColumnsState
};

const App = () => {
    const [gridState, setGridState] = React.useState<GridAIState>(initialGridState);
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [initialSize, setInitialSize] = React.useState<number>(0);
    const [showChat, setShowChat] = React.useState(true);
    const [drawerMode, setDrawerMode] = React.useState<'push' | 'overlay'>('push');
    const gridRef = React.useRef<GridHandle | null>(null);

    const isMobile = initialSize <= 560;

    React.useEffect(() => {
        const handleResize = () => {
            setInitialSize(window.innerWidth);
            setShowChat(window.innerWidth > 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Set drawer mode and overlay class based on window width
    React.useEffect(() => {
        const drawer = document.querySelector('.k-drawer');

        if (!drawer) return;

        if (window.innerWidth <= 768) {
            setDrawerMode('overlay');
            drawer.classList.add('overlay');
        } else {
            setDrawerMode('push');
            drawer.classList.remove('overlay');
        }
    }, [initialSize]);

    const exportPDFWithMethod = () => {
        const element = (document.querySelector('.k-grid') as HTMLElement) || document.body;
        savePDF(element, { paperSize: 'A4', landscape: true, margin: '1cm', scale: 0.5 });
    };

    const handleBeforeRequest = (event: { columns: unknown; prompt?: string }, isRetry: boolean) => {
        const processedEvent = {
            ...event,
            columns: addColumnsValues(event.columns as typeof initialColumnsState)
        };

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
                        text: processedEvent.prompt
                    }
                ],
                columns: processedEvent.columns
            }
        })
            .then((e) => onResponseSuccess(e, processedEvent.prompt, isRetry))
            .catch(onResponseError);
    };

    const onResponseSuccess = (response: AxiosResponse, promptMessage?: string, isRetry?: boolean) => {
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
        for (const message of result.messages) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    text: message,
                    author: bot
                }
            ]);
        }
    };

    const onResponseError = () => {
        // Remove typing indicator on error
        setMessages((prev) => prev.filter((msg) => msg.id !== 'typing'));
    };

    const addNewMessage = (event: ChatSendMessageEvent) => {
        const messageText = event.message.text || '';

        setMessages((prev) => [
            ...prev,
            { ...event.message, text: messageText || ' ', id: Date.now().toString(), author: user }
        ]);

        handleBeforeRequest(
            {
                columns: gridState.columnsState || initialColumnsState,
                prompt: messageText
            },
            false
        );
    };

    const handleGridStateChange = (newState: Partial<GridAIState>) => {
        setGridState((prev) => ({ ...prev, ...newState }));
    };

    const handleReset = () => {
        setGridState(initialGridState);
    };

    return (
        <div>
            <Drawer
                expanded={showChat}
                position="end"
                mode={drawerMode}
                onOverlayClick={() => setShowChat(false)}
                width={isMobile ? initialSize - 61 : 360}
                animation={initialSize > 560}
            >
                <DrawerNavigation>
                    <AIChat messages={messages} onSendMessage={addNewMessage} onClose={() => setShowChat(false)} />
                </DrawerNavigation>
                <DrawerContent>
                    <DataGrid
                        gridRef={gridRef}
                        gridState={gridState}
                        onGridStateChange={handleGridStateChange}
                        handleReset={handleReset}
                        showChat={showChat}
                        onToggleChat={() => setShowChat(!showChat)}
                    />
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default App;
