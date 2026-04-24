---
title: AI Assistant Tools Setup
description: 'Learn more about the different approaches for setting up the AI Assistant Tools of the Smart Grid and integrating them with your AI service.'
slug: ai_assistant_tools_setup
position: 10
components: ['grid']
tier: premium
---

# Smart Grid AI Assistant Tools Setup

The Smart Grid provides AI Assistant tools that enable you to apply Grid operations through natural language prompts. The Grid supports three main approaches for connecting these tools to your backend AI service, allowing you to choose the level of control that best fits your application requirements.

The AI Assistant tools that support these approaches for integrating with your AI service are:

<Row>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:smart_grid_basic_operations">
      <ComponentTitle>AI Smart Box</ComponentTitle>
      <ComponentDescription>Versatile search box that supports the AI service integration approaches when in AI Assistant mode.</ComponentDescription>
    </Component>
  </Column>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:smart_grid_toolbar_assistant">
      <ComponentTitle>AI Toolbar Assistant</ComponentTitle>
      <ComponentDescription>AI Assistant toolbar button for applying AI-powered Grid operations.</ComponentDescription>
    </Component>
  </Column>
</Row>

Choose an integration approach based on how much control you need over the AI communication:

-   [Automatic integration](#automatic-integration)&mdash;The simplest approach where you pass a `requestUrl` and the Grid handles the communication with your AI service automatically.
-   [Controlled integration](#controlled-integration)&mdash;Automatic handling with request/response customization.
-   [Manual integration](#manual-integration)&mdash;Full control over AI service communication while using the built-in AI Assistant UI.

> tip Each integration approach requires a backend AI service to process natural language prompts and return structured Grid commands. For guidance on implementing your backend service, see the [AI Service Setup](slug:ai_service_setup) article.

### Automatic Integration

The automatic approach is the simplest way to integrate AI functionality with your Grid. The AI Assistant toolbar tool handles all communication with your AI service internally through HTTP requests.

To configure automatic integration, add a [`GridToolbarAIAssistant`](slug:api_grid_gridtoolbaraiassistant) component to the Grid and set its [`requestUrl`](slug:api_grid_gridtoolbaraiassistant#requesturl) property to point to your custom AI service endpoint:

```jsx
<GridToolbarAIAssistant requestUrl="https://your-ai-service.com/api/grid" />
```

> The `requestUrl` defines the endpoint where your natural language queries will be processed. It should point to your custom AI service that can understand your domain-specific data and business logic.

<demo metaUrl="grid/smart/filter-sort-group/basic/" height="800"></demo>

> tip For comprehensive information about implementing your AI service including detailed request/response formats and server-side implementation, see [AI Service Setup](slug:ai_service_setup).

### Controlled Integration

In the controlled approach, you maintain full control over the AI assistant's state and behavior while leveraging built-in AI service communication. This allows you to validate AI suggestions and apply custom business logic before executing operations.

```jsx
<GridToolbarAIAssistant
    requestUrl="https://your-ai-service.com/api/grid"
    onPromptRequest={handleBeforeRequest}
    onResponseSuccess={onResponseSuccess}
/>
```

The following example demonstrates controlled integration where the AI Assistant still handles the HTTP request automatically, but the prompt outputs are customized through request and response event handlers.

<demo metaUrl="grid/smart/filter-sort-group/controlled/" height="800"></demo>

**Request Options**

When using `requestUrl`, you can also customize the settings of the internally sent HTTP request through the [`requestOptions`](slug:api_grid_gridtoolbaraiassistantprops#requestOptions) property. This allows you to add authentication headers, configure request parameters, and set other HTTP options without having to implement custom request logic:

```jsx
<GridToolbarAIAssistant requestUrl="https://your-ai-service.com/api/grid" requestOptions={{ timeout: 5000 }} />
```

> The `requestOptions` property is only applicable when you have defined a `requestUrl`. When implementing manual integration, you handle the HTTP request configuration directly in your custom implementation.

### Manual Integration

For complete control over the AI interaction, you can manually handle all AI service communication through the [`onPromptRequest`](slug:api_grid_gridaipromptprops#onPromptRequest) event. This approach gives you complete control over how requests are sent and responses are processed, making it suitable for complex scenarios or proprietary AI systems.

```jsx
<GridToolbarAIAssistant onPromptRequest={handleBeforeRequest} />
```

The `onPromptRequest` event provides the user's prompt, Grid column information, and request settings, allowing you to implement fully customized AI service communication while maintaining access to the Grid context.

The following example demonstrates how to manually send requests to an AI service and process the AI responses to apply basic data operations (filtering, sorting, and grouping) to the Grid. Because this demo showcases the manual mode of the component, it also demonstrates how to use the `outputs` prop along with additional logic to display the prompt output history.

<demo metaUrl="grid/smart/filter-sort-group/manual/" height="800"></demo>

## Suggested Links

-   [AI Service Setup](slug:ai_service_setup)
-   [Smart Grid Overview](slug:smart_grid)
-   [AI SmartBox Tool](slug:smart_grid_basic_operations)
-   [AI Toolbar Assistant](slug:smart_grid_toolbar_assistant)
-   [KendoKendoReact Data Grid Configuring the ToolBar](slug:toolbar_tools_grid)
-   [API Reference of the GridToolbarAIAssistant](slug:api_grid_gridtoolbaraiassistant)
-   [API Reference of the SmartBox](slug:api_grid_smartbox)

<!-- Remove after the cards are fixed in docs-builder -->
<style>
.pd-b div:first-child {
  padding-top: 10px;
}
</style>
