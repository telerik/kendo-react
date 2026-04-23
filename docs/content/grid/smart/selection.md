---
title: AI-Powered Row Selection
description: 'Learn how to use the selection in the KendoKendoReact Data Grid to interact with your data using natural language prompts.'
components: ['datagrid']
slug: ai_selection
position: 70
tier: premium
subject: AI Toolbar Assistant feature of the Grid
---

# KendoReact Data Grid AI-Powered Selection

The [KendoReact Data Grid](slug:overview_grid) provides intelligent row selection functionality through its AI Toolbar Assistant. This feature enables users to select specific data rows based on natural language prompts, making data interaction more intuitive and efficient.

AI-powered selection interprets user requests and automatically selects relevant rows based on the specified criteria, allowing for complex selection patterns without manual clicking or complex filter combinations.

> The demos in this article use a Telerik-hosted AI service for demonstration purposes only. For production applications, you should implement your own AI service that understands your specific domain, data, and business requirements.

To implement AI-powered selection in your Grid:

1. Set up the Grid with data binding and selection enabled:

    ```jsx
    <Grid data={patients} selectable={true}></Grid>
    ```

1. Add the AI Toolbar Assistant to the Grid toolbar using the `GridToolbar` component:

    ```jsx
    <Grid data={patients} selectable={true}>
        <GridToolbar>
            <GridToolbarAIAssistant />
        </GridToolbar>
    </Grid>
    ```

## Selection Implementation Approaches

The AI-powered selection feature supports different implementation approaches depending on how you want to handle the AI service integration and selection logic:

-   [Automatic Selection](#automatic-selection)
-   [Manual Selection Integration](#manual-selection-integration)
-   [Controlled Selection](#controlled-selection)

### Automatic Selection

In the automatic selection approach, the AI Toolbar Assistant handles communication with your AI service internally and automatically applies selection based on the service response. You configure the `requestUrl` property to point to your AI service endpoint that returns selection instructions:

```jsx
<GridToolbarAIAssistant requestUrl="https://your-ai-service.com/api/grid" />
```

Your AI service should return responses that include selection information, which the Grid will automatically process to select matching rows. This approach requires minimal custom code while providing intelligent selection capabilities.

The following example demonstrates automatic selection where users can request patterns like "select patients over 60" or "select critical cases":

<demo metaUrl="grid/smart/select/basic/" height="670"></demo>

> By default, the `GridToolbarAIAssistant` doesn't keep the prompt history and result returned by the AI model. If you need to keep the history, check the following two examples that use the `outputs` prop.

### Manual Selection Integration

For complete control over the selection logic, you can manually handle the AI interaction through the `onPromptRequest` event. This approach allows you to implement custom selection algorithms and validation based on AI-generated insights.

The `onPromptRequest` event provides access to the user's natural language prompt and Grid context, allowing you to process the request with your AI service and implement custom selection logic.

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

This approach is ideal when you need custom selection validation, complex selection rules, or integration with existing business logic.

The following example demonstrates manual integration where you have complete control over the selection interaction.

<demo metaUrl="grid/smart/select/manual/" height="700"></demo>

### Controlled Selection

The controlled selection approach combines the benefits of automatic AI service communication with custom selection control. You can intercept AI responses and apply custom selection logic while still leveraging the built-in communication capabilities.

Key features of controlled selection:

-   **Selection State Management**: Full control over which rows are selected and how
-   **Custom Validation**: Apply business rules to validate AI-suggested selections
-   **Business Logic Integration**: Filter and modify AI suggestions before applying selections
-   **Multi-criteria Selection**: Implement complex selection rules based on multiple data attributes

This approach is perfect when you need to integrate selection with your application's business rules or implement custom selection validation.

```jsx
<GridToolbarAIAssistant
    requestUrl="https://your-ai-service.com/api/grid"
    onPromptRequest={handleBeforeRequest}
    onResponseSuccess={onResponseSuccess}
/>
```

The following example showcases controlled selection with custom validation and response handling. In this demo, the selection logic filters out deceased patients from AI suggestions, demonstrating how business rules can be applied to AI-generated selections. Because this demo showcases the controlled mode of the component, it demonstrates how to use the `outputs` prop along with additional logic to display the prompt output history.

<demo metaUrl="grid/smart/select/controlled/" height="670"></demo>

#### Selection Event Handling

The `GridToolbarAIAssistant` component exposes several events that are particularly useful for implementing custom selection functionality:

-   [`onPromptRequest`](slug:api_grid_gridtoolbaraiassistantprops#onpromptrequest)&mdash;Fires before the AI request is sent. Use this to validate selection requests or modify the prompt before processing.
-   [`onResponseSuccess`](slug:api_grid_gridtoolbaraiassistantprops#onresponsesuccess)&mdash;Fires when the AI service returns selection instructions. Use this to apply custom selection logic based on the AI response.
-   [`onResponseError`](slug:api_grid_gridtoolbaraiassistantprops#onresponseerror)&mdash;Fires when the AI service request fails. Use this to provide fallback selection or error handling.

## Suggested Links

-   [React Data Grid](slug:overview_grid)
-   [Smart Grid Overview](slug:smart_grid)
-   [Smart Grid Basic Operations](slug:smart_grid_toolbar_assistant)
-   [Smart Grid AI Custom Column](slug:ai_custom_column)
-   [Smart Grid AI Highlighting](slug:ai_highlight)
-   [Grid Selection Overview](slug:selection_grid)
-   [Smart Grid Extensions](slug:smart_grid)
