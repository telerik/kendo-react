---
title: AI-Powered Row Highlight
description: 'Learn how to use the highlight in the KendoKendoReact Data Grid to interact with your data using natural language prompts.'
components: ['datagrid']
slug: ai_highlight
position: 60
tier: premium
subject: AI Toolbar Assistant feature of the Grid
---

# KendoReact Data Grid AI-Powered Highlighting

The KendoReact Data Grid provides intelligent row highlighting functionality through its AI Toolbar Assistant. This feature enables users to visually identify specific data patterns and outliers using natural language prompts, without applying traditional filters that hide data.

AI-powered highlighting interprets user requests and automatically highlights relevant rows based on the specified criteria, making data exploration more intuitive and keeping all data visible while emphasizing important patterns.

> The demos in this article use a Telerik-hosted AI service for demonstration purposes only. For production applications, you should implement your own AI service that understands your specific domain, data, and business requirements.

To implement AI-powered highlighting in your Grid:

1. Set up the Grid with data binding and custom cell rendering for highlighting support:

    ```jsx
    <Grid data={customers}></Grid>
    ```

1. Add the AI Toolbar Assistant to the Grid toolbar using the `GridToolbar` component:

    ```jsx
    <Grid data={customers}>
        <GridToolbar>
            <GridToolbarAIAssistant />
        </GridToolbar>
    </Grid>
    ```

## Highlighting Implementation Approaches

The AI-powered highlighting feature supports different implementation approaches depending on how you want to handle the AI service integration and highlighting logic:

-   [Automatic Highlighting](#automatic-highlighting)
-   [Manual Highlighting Integration](#manual-highlighting-integration)
-   [Controlled Highlighting](#controlled-highlighting)

### Automatic Highlighting

In the automatic highlighting approach, the AI Toolbar Assistant handles communication with your AI service internally and automatically applies highlighting based on the service response. You configure the `requestUrl` property to point to your AI service endpoint that returns highlighting instructions:

```jsx
<GridToolbarAIAssistant requestUrl="https://your-ai-service.com/api/grid" />
```

Your AI service should return responses that include highlighting information, which the Grid will automatically process to highlight matching rows. This approach requires minimal custom code while providing intelligent highlighting capabilities.

The following example demonstrates automatic highlighting where users can request patterns like "highlight customers with high balances" or "show me overdue accounts":

<demo metaUrl="grid/smart/highlight/basic/" height="670"></demo>

> By default, the `GridToolbarAIAssistant` doesn't keep the prompt history and result returned by the AI model. If you need to keep the history, check the following two examples that use the `outputs` prop.

### Manual Highlighting Integration

For complete control over the highlighting logic, you can manually handle the AI interaction through the `onPromptRequest` event. This approach allows you to implement custom highlighting algorithms and visual styling based on AI-generated insights.

The `onPromptRequest` event provides access to the user's natural language prompt and Grid context, allowing you to process the request with your AI service and implement custom highlighting logic.

```jsx
<GridToolbarAIAssistant onPromptRequest={handleBeforeRequest} />
```

```typescript
const handleBeforeRequest = (event, isRetry) => {
    // Add column metadata for AI processing
    event.columns = addColumnsValues(event.columns);
    setStreaming(true);

    // Make custom AI service request
    axios({
        ...event.requestOptions,
        url: 'https://your-ai-service.com/api/grid',
        headers: event.headers,
        data: {
            role: event.role,
            contents: [{ $type: 'text', text: event.promptMessage }],
            columns: event.columns
        }
    })
        .then((response) => onResponseSuccess(response, event.promptMessage, isRetry))
        .catch(onResponseError);
};
```

This approach is ideal when you need custom highlighting styles, complex highlighting rules, or integration with existing business logic. The following example demonstrates manual integration where you have complete control over the highlighting interaction. Because this demo showcases the manual mode of the component, it demonstrates how to use the `outputs` prop along with additional logic to display the prompt output history.

<demo metaUrl="grid/smart/highlight/manual/" height="670"></demo>

### Controlled Highlighting

The controlled highlighting approach combines the benefits of automatic AI service communication with custom highlighting control. You can intercept AI responses and apply custom highlighting logic while still leveraging the built-in communication capabilities.

Key features of controlled highlighting:

-   **Highlighting State Management**: Full control over which rows are highlighted and how
-   **Custom Styling**: Apply your own CSS classes and styling for highlighted rows
-   **Business Logic Integration**: Validate and modify AI suggestions before applying highlights
-   **Multi-level Highlighting**: Implement different highlight styles for different criteria

This approach is perfect when you need to integrate highlighting with your application's design system or implement complex highlighting rules.

```jsx
<GridToolbarAIAssistant
    requestUrl="https://your-ai-service.com/api/grid"
    onPromptRequest={handleBeforeRequest}
    onResponseSuccess={onResponseSuccess}
/>
```

The following example showcases controlled highlighting with custom validation and response handling. Because this demo showcases the controlled mode of the component, it demonstrates how to use the `outputs` prop along with additional logic to display the prompt output history.

<demo metaUrl="grid/smart/highlight/controlled/" height="670"></demo>

#### Highlighting Event Handling

The `GridToolbarAIAssistant` component exposes several events that are particularly useful for implementing custom highlighting functionality:

-   [`onPromptRequest`](slug:api_grid_gridtoolbaraiassistantprops#onpromptrequest)&mdash;Fires before the AI request is sent. Use this to validate highlighting requests or modify the prompt before processing.
-   [`onResponseSuccess`](slug:api_grid_gridtoolbaraiassistantprops#onresponsesuccess)&mdash;Fires when the AI service returns highlighting instructions. Use this to apply custom highlighting logic based on the AI response.
-   [`onResponseError`](slug:api_grid_gridtoolbaraiassistantprops#onresponseerror)&mdash;Fires when the AI service request fails. Use this to provide fallback highlighting or error handling.
