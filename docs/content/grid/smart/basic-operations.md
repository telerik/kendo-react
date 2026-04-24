---
title: AI Smart Box
description: 'Get started with the Smart functionality of the KendoReact Smart Grid and learn how to perform basic operations.'
components: ['datagrid']
slug: smart_grid_basic_operations
tag: new
position: 30
tier: premium
---

# KendoReact Data Grid AI Smart Box

The KendoReact Data Grid AI Smart Box is a versatile toolbar tool that unifies search and AI capabilities in a single interface. It offers three distinct modes that you can enable independently or in combination to provide flexible data exploration for your users.

The AI Smart Box allows users to explore Grid data through traditional keyword search, semantic search that understands meaning and context, or AI-powered natural language commands.

> The demo below uses a Telerik-hosted AI service for AI-powered Grid control and a third-party transformer model for semantic search, both for demonstration purposes. For production applications, [implement your own AI service](slug:ai_service_setup) and [semantic matching techniques](slug:smartbox_semantic_search_mode#semantic-search-implementation) suited to your data and requirements.

The following example demonstrates a Smart Grid that processes natural language requests for performing data operations, column management, selection, and export operations.

<demo metaUrl="grid/smart/smartbox-full/" height="910"></demo>

## Implementation Steps

To configure the Grid's AI Smart Box:

1. Add the [`SmartBox`](slug:api_grid_smartbox) component within the [`GridToolbar`](slug:api_grid_gridtoolbar) component:

    ```tsx
    import { Grid, GridToolbar, SmartBox } from '@progress/kendo-react-grid';

    const App = () => {
        return (
            <Grid data={data}>
                <GridToolbar>
                    <SmartBox />
                </GridToolbar>
            </Grid>
        );
    };
    ```

2. Enable the modes you want to show in the AI Smart Box using the [`searchConfig`](slug:api_grid_smartbox#searchconfig), [`semanticSearchConfig`](slug:api_grid_smartbox#semanticsearchconfig), and [`aiAssistantConfig`](slug:api_grid_smartbox#aiassistantconfig) props:

    ```tsx
    const aiAssistantConfig = {
        enabled: true,
        promptSuggestions: ['Show top customers by revenue', 'Filter active accounts', 'Group by region']
    };

    const App = () => {
        return (
            <Grid data={data}>
                <GridToolbar>
                    <SmartBox
                        searchConfig={{ enabled: true }}
                        semanticSearchConfig={{ enabled: true }}
                        aiAssistantConfig={aiAssistantConfig}
                    />
                </GridToolbar>
            </Grid>
        );
    };
    ```

    > Search mode applies filters automatically when the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop is enabled. You can optionally handle the [`onSearch`](slug:api_grid_smartbox#onsearch) event to customize the default search behavior.

3. Configure the [`requestUrl`](slug:api_grid_smartbox#aiassistantconfig) property for AI Assistant mode to point to your AI service endpoint:

    ```tsx
    const aiAssistantConfig = {
        enabled: true,
        promptSuggestions: ['Show top customers by revenue', 'Filter active accounts', 'Group by region'],
        requestUrl: 'https://your-ai-service.com/api/grid'
    };
    ```

    > The `requestUrl` defines the endpoint where your natural language queries will be processed. It should point to [your custom AI service](slug:ai_service_setup) that can understand your domain-specific data and business logic. To explore the available integration scenarios, see [AI Assistant Tools Setup](slug:ai_assistant_tools_setup).

4. Handle the [`onSemanticSearch`](slug:api_grid_smartbox#onsemanticsearch) event to implement your semantic search logic:

    ```tsx
    import { GridSmartBoxSearchEvent } from '@progress/kendo-react-grid';

    const App = () => {
        const [gridData, setGridData] = React.useState(data);
        const semanticService = React.useRef(new SemanticSearchService());

        const handleSemanticSearch = async (event: GridSmartBoxSearchEvent) => {
            const query = event.searchValue;

            // Generate embedding for the search query
            const queryEmbedding = await semanticService.current.embed(query);

            // Compare query embedding with pre-computed Grid data embeddings
            const results = embeddedData
                .map((item) => ({
                    ...item,
                    similarity: semanticService.current.cosineSimilarity(queryEmbedding, item.embedding)
                }))
                .filter((x) => x.similarity > 0.35) // Apply similarity threshold
                .sort((a, b) => b.similarity - a.similarity);

            // Update Grid data with semantically similar results
            setGridData(results);
        };

        return (
            <Grid data={gridData}>
                <GridToolbar>
                    <SmartBox
                        searchConfig={{ enabled: true }}
                        semanticSearchConfig={{ enabled: true }}
                        aiAssistantConfig={aiAssistantConfig}
                        onSemanticSearch={handleSemanticSearch}
                    />
                </GridToolbar>
            </Grid>
        );
    };
    ```

5. Encapsulate your semantic matching mechanism in a separate service. The demo uses the `SemanticSearchService` to load a transformer model, generate vector embeddings, and calculate similarity scores.

## Available Modes

The AI Smart Box provides three modes that you can enable independently or in combination. Each mode serves different use cases and offers specific configuration options.

<TabStrip>
<TabStripTab title="Search Mode">

The Search mode is enabled by default in the AI Smart Box and provides traditional keyword-based filtering across Grid columns. As users type, the AI Smart Box generates filter expressions that match the search value against the Grid columns. Use the [`searchConfig`](slug:api_grid_smartbox#searchconfig) prop to further tailor the Search mode to your specific needs.

By default, the Grid automatically applies the search filter when the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop is enabled. You can optionally handle the [`onSearch`](slug:api_grid_smartbox#onsearch) event to customize the search behavior.

```tsx
const searchConfig = {
    enabled: true,
    placeholder: 'Search customers...',
    fields: ['name', 'email', 'company']
};

<SmartBox searchConfig={searchConfig} />;
```

> For more details about Search mode configuration, see the [KendoReact Data Grid Searching](slug:smart_grid_basic_operations#available_modes) article.

</TabStripTab>
<TabStripTab title="Semantic Search Mode">

Configure the [`semanticSearchConfig`](slug:api_grid_smartbox#semanticsearchconfig) prop of the AI Smart Box to enable semantic search functionality that interprets user intent and matches related terms, synonyms, and contextual meanings. This intelligent matching is particularly valuable when users might not know the exact terminology used in your Grid data.

When users enter a search term, handle the [`onSemanticSearch`](slug:api_grid_smartbox#onsemanticsearch) event to implement your semantic matching logic using vector embeddings or other techniques to find conceptually related content.

```tsx
const semanticSearchConfig = {
    enabled: true,
    placeholder: 'Describe what you need...'
};

const handleSemanticSearch = async (event: GridSmartBoxSearchEvent) => {
    // Implement your semantic search logic here
    // Use a desired semantic matching technique to filter and update the Grid data
    // based on the search value
};

<SmartBox semanticSearchConfig={semanticSearchConfig} onSemanticSearch={handleSemanticSearch} />;
```

> For more information about implementing semantic search in the AI Smart Box, see the [Semantic Search](slug:smartbox_semantic_search_mode) article.

</TabStripTab>
<TabStripTab title="AI Assistant Mode">

Use the [`aiAssistantConfig`](slug:api_grid_smartbox#aiassistantconfig) prop to enable AI Assistant mode, which allows users to interact with the Grid data through natural language commands. Users can apply any [supported Grid operation](slug:smart_grid#supported-operations)&mdash;including filtering, sorting, column management, data export, and row highlighting.

Configure the AI Assistant mode behavior through the `aiAssistantConfig` object. You can guide users with predefined prompts using the `promptSuggestions` property and enable automatic communication with your custom AI service by setting the `requestUrl` property.

```tsx
const aiAssistantConfig = {
    enabled: true,
    requestUrl: 'https://your-ai-service.com/api/grid',
    promptSuggestions: ['Show top customers by revenue', 'Filter active accounts', 'Group by region']
};

<SmartBox aiAssistantConfig={aiAssistantConfig} />;
```

> For more information about configuring AI Assistant mode and available integration options, see the [AI Assistant Tools Setup](slug:ai_assistant_tools_setup) article. To understand how to set up your custom AI service, see the [AI Service Setup](slug:ai_service_setup) article.

</TabStripTab>
</TabStrip>

## Setting the Active Mode

When you enable multiple modes in the AI Smart Box, users can choose their preferred interaction method by using the seamless mode-switching interface of the tool.

By default, the Search mode is initially selected when users open the AI Smart Box tool. You can customize this behavior and manually specify the mode that should be initially selected by using the [`activeMode`](slug:api_grid_smartbox#activemode) prop:

```tsx
<SmartBox
    searchConfig={searchConfig}
    semanticSearchConfig={semanticSearchConfig}
    aiAssistantConfig={aiAssistantConfig}
    activeMode="aiAssistant"
/>
```

## Customization Options

The AI Smart Box provides several customization options to tailor the appearance and behavior of the tool to your application's needs. You can configure [placeholder text](#placeholder-text), [query history settings](#query-history), and customize the appearance of [suggestions](#suggestion-template) and [history items](#history-item-template) using template directives.

### Placeholder Text

The AI Smart Box allows you to customize the placeholder text that appears in the input field for each mode.

You can define a global placeholder for all modes through the [`placeholder`](slug:api_grid_smartbox#placeholder) prop of the AI Smart Box tool:

```tsx
<SmartBox searchConfig={searchConfig} semanticSearchConfig={semanticSearchConfig} placeholder="Search or ask..." />
```

> tip To override the global placeholder for individual modes, set the `placeholder` property within the settings object of the respective AI Smart Box mode. For example, to customize the placeholder for the Semantic Search mode, see [Semantic Search Placeholder Text](slug:smartbox_semantic_search_mode#placeholder-text).

### Query History

The AI Smart Box maintains a history of recent queries for each enabled mode, allowing users to quickly reuse previous searches or commands.

You can configure global history behavior through the [`history`](slug:api_grid_smartbox#history) prop of the AI Smart Box tool, which applies to all modes unless a mode provides its own history settings. The default global history size is `5` queries, and the default timestamp format is `'HH:mm:ss'`.

```tsx
const historySettings = {
    size: 5,
    timestampFormat: 'h:mm a'
};

<SmartBox searchConfig={searchConfig} history={historySettings} />;
```

> tip For mode-specific history configuration, set the `history` property within the settings object of the respective AI Smart Box mode. For example, to configure the history settings for the Semantic Search mode, see [Semantic Search Query History](slug:smartbox_semantic_search_mode#query-history).

### Suggestion Template

The AI Smart Box provides a [`promptSuggestionRender`](slug:api_grid_smartbox#promptsuggestionrender) prop to customize the appearance of prompt suggestions in AI Assistant mode. The render function receives the suggestion text and an `onClick` callback, allowing you to add icons, styling, or additional markup.

```tsx
import { sparklesIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const promptSuggestionRender = (suggestion: string, onClick: () => void) => (
    <li className="k-list-item custom-suggestion" onClick={onClick}>
        <SvgIcon icon={sparklesIcon} />
        <span>{suggestion}</span>
    </li>
);

<SmartBox aiAssistantConfig={aiAssistantConfig} promptSuggestionRender={promptSuggestionRender} />;
```

### History Item Template

You can use the [`historyItemRender`](slug:api_grid_smartbox#historyitemrender) prop to customize the content of history items and format how previous queries are displayed. This render function applies to all modes that have history enabled. The function receives a history item object with `text`, `timestamp`, and `format` properties, and an `onClick` callback.

```tsx
import { formatDate } from '@progress/kendo-intl';

const historyItemRender = (item: { text: string; timestamp: Date; format: string }, onClick: () => void) => (
    <li className="k-list-item custom-history-item" onClick={onClick}>
        <span className="history-text">{item.text}</span>
        <span className="history-time">{formatDate(item.timestamp, item.format)}</span>
    </li>
);

<SmartBox semanticSearchConfig={semanticSearchConfig} historyItemRender={historyItemRender} />;
```
