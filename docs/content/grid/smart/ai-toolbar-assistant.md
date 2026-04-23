---
title: AI Toolbar Assistant
description: 'Learn how to use the AI Toolbar Assistant in the KendoKendoReact Data Grid to enable your end users to interact with your data using natural language prompts.'
components: ['datagrid']
slug: smart_grid_toolbar_assistant
position: 80
tier: premium
---

# KendoReact DataGrid AI Toolbar Assistant

> tip For an enhanced user experience with additional search capabilities, prompt suggestions, and streamlined UI, we recommend using the [AI Smart Box](slug:smart_grid_basic_operations). The AI Smart Box combines traditional search, semantic search, and AI-powered operations in a single, unified interface.

The AI Toolbar Assistant interprets user requests and automatically applies the corresponding Grid operations, making data exploration more intuitive and accessible. The toolbar tool consists of a [Window](slug:overview_window) component and an [AIPrompt](slug:overview_aiprompt) component that work together to enable natural language interaction with your custom AI service.

> The demo in this article uses a Telerik-hosted AI service for demonstration purposes only. For production applications, you should [implement your own AI service](slug:ai_service_setup) that understands your specific domain, data, and business requirements.

The following example demonstrates a Smart Grid that processes natural language requests for performing data operations, column management, selection, highlighting, and export operations.

<demo metaUrl="grid/smart/resize-reorder-show-lock/basic/" height="770"></demo>

## Implementation Steps

To configure the Grid's AI Toolbar Assistant:

1. Enable the desired data operations of the Grid that the AI Toolbar Assistant should control:

    ```tsx
    <Grid data={data} sortable={true} groupable={true} filterable={true} reorderable={true} resizable={true}>
        {/* Column definitions */}
    </Grid>
    ```

2. Add the [`GridToolbarAIAssistant`](slug:api_grid_gridtoolbaraiassistant) component within the [`GridToolbar`](slug:api_grid_gridtoolbar) component:

    ```tsx
    import { Grid, GridToolbar, GridToolbarAIAssistant } from '@progress/kendo-react-grid';

    <Grid data={data}>
        <GridToolbar>
            <GridToolbarAIAssistant />
        </GridToolbar>
    </Grid>;
    ```

3. Configure the [`requestUrl`](slug:api_grid_gridtoolbaraiassistant#requesturl) property to point to your custom AI service endpoint:

    ```tsx
    <GridToolbarAIAssistant requestUrl="https://your-ai-service.com/api/grid" />
    ```

    > The `requestUrl` defines the endpoint where your natural language queries will be processed. It should point to [your custom AI service](slug:ai_service_setup) that can understand your domain-specific data and business logic.

## AI Service Communication

The AI Toolbar Assistant supports three main integration approaches for connecting to your AI service:

-   [Automatic Integration](slug:ai_assistant_tools_setup#automatic-integration)&mdash;The quickest approach where the Grid handles the communication with your AI service automatically.
-   [Controlled Integration](slug:ai_assistant_tools_setup#controlled-integration)&mdash;Automatic AI service communication with request/response customization through event handlers.
-   [Manual Integration](slug:ai_assistant_tools_setup#manual-integration)&mdash;Full control over AI service communication while using the built-in toolbar tool UI.

For detailed information about each integration approach, including code examples and best practices, see [Smart Grid AI Assistant Tools Setup](slug:ai_assistant_tools_setup).

## Customization Options

The AI Toolbar Assistant provides various configuration options to customize the experience based on your application requirements:

-   [Prompt Suggestions](#prompt-suggestions)
-   [Placeholder Text](#placeholder-text)
-   [Speech-to-Text](#speech-to-text)

### Prompt Suggestions

You can guide users with predefined prompts by using the [`suggestionsList`](slug:api_grid_gridtoolbaraiassistant#suggestionslist) property. This helps users understand the types of commands your AI service can process and provides quick access to common operations.

```tsx
<GridToolbarAIAssistant
    requestUrl="https://your-ai-service.com/api/grid"
    suggestionsList={[
        'Sort by Amount descending',
        'Group by account type',
        'Show only failed transactions',
        'Filter where currency is USD',
        'Clear filtering'
    ]}
/>
```

### Placeholder Text

Use the [`promptPlaceHolder`](slug:api_grid_gridtoolbaraiassistant#promptplaceholder) property to customize the placeholder text that appears in the AI prompt input field:

```tsx
<GridToolbarAIAssistant
    requestUrl="https://your-ai-service.com/api/grid"
    promptPlaceHolder="Ask AI to filter, sort, or group your data..."
/>
```

### Speech-to-Text

Enable voice input capabilities using the [`enableSpeechToText`](slug:api_grid_gridtoolbaraiassistant#enablespeechtotext) property. This enhances accessibility by allowing users to speak their commands instead of typing:

```tsx
<GridToolbarAIAssistant requestUrl="https://your-ai-service.com/api/grid" enableSpeechToText={true} />
```

## Suggested Links

-   [Smart Grid AI Assistant Tools Setup](slug:ai_assistant_tools_setup)
-   [AI Service Setup](slug:ai_service_setup)
-   [Smart Grid Overview](slug:smart_grid)
-   [KendoKendoReact Data Grid Configuring the ToolBar](slug:toolbar_tools_grid)
-   [Grid Sorting](slug:sorting_grid)
-   [KendoKendoReact Data Grid Row and Cell Highlighting](slug:ai_highlight)
-   [KendoReact AIPrompt Overview](slug:overview_aiprompt)
-   [API Reference of the GridToolbarAIAssistant](slug:api_grid_gridtoolbaraiassistant)
