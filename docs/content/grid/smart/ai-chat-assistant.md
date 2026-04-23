---
title: AI Chat Assistant
description: 'Learn how to implement an AI Chat Assistant for the KendoKendoReact Data Grid that enables natural language interactions to perform data operations through conversational commands.'
components: ['datagrid']
slug: ai_chat_assistant
position: 50
tag: new
tier: premium
---

# KendoReact Data Grid AI Chat Assistant

The KendoReact Data Grid can be enhanced with an AI-powered chat assistant that allows users to interact with Grid data using natural language commands.

By integrating the [Chat](slug:overview_chat) component with the Grid's built-in AI features, you can create an intuitive conversational interface where users can perform all [supported Smart Grid operations](slug:smart_grid_toolbar_assistant#supported-operations) through simple text commands instead of navigating through multiple UI controls.

> The demo in this article uses a Telerik-hosted AI service for demonstration purposes only. For production applications, you should implement your own AI service that understands your specific domain, data, and business requirements.

The following example demonstrates how to implement an AI Chat Assistant that enables users to manage Grid data through natural language commands. Click the **AI Grid** button in the Grid toolbar to open the Chat panel and try inserting a prompt to interact with the data.

<demo metaUrl="grid/smart/ai-chat-assistant/" height="670"></demo>

## Implementation Steps

To implement an AI Chat Assistant for your Grid, follow the steps below:

1. Configure the Grid with the features you want to make available through AI commands. Enable [`sortable`](slug:api_grid_gridprops#sortable), [`groupable`](slug:api_grid_gridprops#groupable), and other features to allow AI-driven data operations:

    ```tsx
    <Grid
        data={data}
        sortable={true}
        groupable={{ enabled: true, footer: 'visible' }}
        resizable={true}
        reorderable={true}
        pdf={true}
    ></Grid>
    ```

1. Manage the Grid state using the [`GridAIState`](slug:api_grid_gridaistate) interface. This state object holds the current sort, filter, group, and column configuration that the AI can modify:

    ```tsx
    import { GridAIState } from '@progress/kendo-react-grid';
    const App = () => {
        const [gridState, setGridState] = React.useState<GridAIState>({
            sort: [],
            filter: undefined,
            group: [],
            columnsState: initialColumnsState
        });

        return (
            <Grid
                ...
                ref={gridRef}
                {...gridState}
                onSortChange={(e) => setGridState((prev) => ({ ...prev, sort: e.sort }))}
                onFilterChange={(e) => setGridState((prev) => ({ ...prev, filter: e.filter }))}
                onGroupChange={(e) => setGridState((prev) => ({ ...prev, group: e.group }))}
                onColumnsStateChange={(e) => setGridState((prev) => ({ ...prev, columnsState: e.columnsState }))}
                onPageChange={(e) => setGridState((prev) => ({ ...prev, skip: e.page.skip, take: e.page.take }))}
            />
        );
    };
    ```

1. Implement a function to send user prompts to your AI service. The request should include the prompt text and column information so the AI understands the Grid structure:

    ```tsx
    const handleBeforeRequest = (event: { columns: unknown; prompt?: string }) => {
        // Show typing indicator while waiting for response
        setMessages((prev) => [...prev, { id: 'typing', author: bot, typing: true }]);

        // Send request to your AI service
        axios({
            method: 'POST',
            url: 'your-ai-service-endpoint',
            data: {
                role: 'user',
                contents: [{ $type: 'text', text: event.prompt }],
                columns: event.columns
            }
        })
            .then((response) => onResponseSuccess(response))
            .catch(onResponseError);
    };
    ```

1. When the response returns, use the [`handleAIResponse`](slug:api_grid_handleairesponse) helper function from `@progress/kendo-react-grid` to process the AI response and extract the new Grid state and messages:

    ```tsx
    import { handleAIResponse } from '@progress/kendo-react-grid';

    const onResponseSuccess = (response: AxiosResponse) => {
        // Remove typing indicator
        setMessages((prev) => prev.filter((msg) => msg.id !== 'typing'));

        // Process AI response using the helper function
        const result = handleAIResponse(response, gridState, gridRef.current);

        // Update Grid state with all changes
        setGridState(result.state);

        // Handle PDF export if requested
        if (result.shouldExportPdf) {
            exportPDFWithMethod();
        }

        // Add AI response messages to Chat
        for (const message of result.messages) {
            setMessages((prev) => [...prev, { id: Date.now().toString(), text: message, author: bot }]);
        }
    };
    ```

    The `handleAIResponse` function returns an object containing the updated `state`, an array of `messages` to display, and a `shouldExportPdf` flag.

1. Set up the Chat component to collect user prompts and display AI responses. Use the [`inputValue`](slug:api_conversational-ui_chatprops#inputValue) and [`onInputValueChange`](slug:api_conversational-ui_chatprops#onInputValueChange) props to control the input field, and handle the [`onSendMessage`](slug:api_conversational-ui_chatprops#onSendMessage) event to process user messages:

    ```tsx
    <Chat
        messages={messages}
        authorId={user.id}
        inputValue={inputValue}
        onInputValueChange={(value) => setInputValue(value)}
        suggestions={suggestions}
        onSuggestionClick={(suggestion) => setInputValue(suggestion.text)}
        onSendMessage={onSendMessage}
        placeholder="Ask me to sort, filter, or analyze your data."
    />
    ```

1. Handle the send message event to add the user message to the chat history and trigger the AI request:

    ```tsx
    const addNewMessage = (event: ChatSendMessageEvent) => {
        const messageText = event.message.text || '';

        // Add user message to chat
        setMessages((prev) => [
            ...prev,
            { ...event.message, text: messageText, id: Date.now().toString(), author: user }
        ]);

        // Send request to AI service
        handleBeforeRequest({
            columns: gridState.columnsState,
            prompt: messageText
        });
    };
    ```

## Suggested Links

-   [React Data Grid AI Toolbar Assistant](slug:smart_grid_toolbar_assistant)
-   [AI Service Manual Integration](slug:smart_grid_toolbar_assistant#manual-integration)
-   [Smart Extensions](slug:smart_grid)
-   [Chat Overview](slug:overview_chat)
-   [API Index of the Grid](slug:api_grid)
-   [API Reference of the Chat](slug:api_conversational-ui)
