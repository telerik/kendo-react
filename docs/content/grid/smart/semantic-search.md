---
title: Semantic Search
description: 'Learn how to use Semantic Search mode in the AI Smart Box to enable semantic search that interprets user intent and matches related terms and contextual meanings.'
slug: smartbox_semantic_search_mode
position: 100
components: ['grid']
tag: new
tier: premium
---

# KendoReact Data Grid Semantic Search

The Semantic Search mode of the [AI Smart Box](slug:smart_grid_basic_operations) interprets user intent and matches related terms, synonyms, and contextual meanings rather than exact keywords. When users enter a search term, your implementation uses semantic matching techniques to return filter criteria that capture semantically related content.

For example, try searching for "workout essentials" in the demo below to look for records like "resistance bands set", "fitness guide", or "multivitamin tablets", even though none of these records contain the exact query. This intelligent matching is particularly valuable when users might not know the exact terminology used in your data.

> The demo in this article uses a third-party service to implement semantic search for demonstration purposes. For production applications, evaluate and select semantic matching techniques that best suit your specific data characteristics and accuracy requirements.

The following example demonstrates Semantic Search mode in action:

<demo metaUrl="grid/smart/semantic-search/" height="920"></demo>

## Semantic Search Implementation

The Semantic Search mode requires an implementation that analyzes query meaning and returns semantically relevant results. Unlike traditional keyword matching that looks for exact text, your semantic search implementation must analyze the intent behind user queries and recognize when different words express the same concept.

Generally, such capabilities rely on machine learning models that understand language patterns and conceptual relationships through natural language processing (NLP) techniques.

The typical workflow is:

1. User enters a search query in natural language.
2. The [`onSemanticSearch`](slug:api_grid_smartbox#onsemanticsearch) event of the AI Smart Box fires with the query text.
3. You process the query using your chosen semantic matching technique.
4. Your implementation returns filter criteria based on semantic matching.
5. You apply the filters to the Grid data.

> tip The demo above uses a third-party transformer model to generate vector embeddings that understand semantic relationships in the data. Other approaches include large language models (LLMs), entity recognition, synonym expansion, or hybrid methods that combine multiple techniques.

To implement Semantic Search in the AI Smart Box tool:

1. Add the [`SmartBox`](slug:api_grid_smartbox) component to your Grid toolbar with Semantic Search mode enabled:

    ```tsx
    import { Grid, GridToolbar, SmartBox } from '@progress/kendo-react-grid';

    const App = () => {
        return (
            <Grid data={data}>
                <GridToolbar>
                    <SmartBox
                        semanticSearchConfig={{
                            enabled: true
                        }}
                    />
                </GridToolbar>
            </Grid>
        );
    };
    ```

2. Configure additional Semantic Search mode settings in your component if needed:

    ```tsx
    const semanticSearchConfig = {
        enabled: true,
        placeholder: 'Describe what you need...',
        delay: 600,
        history: {
            size: 5,
            timestampFormat: 'h:mm a'
        }
    };

    <SmartBox semanticSearchConfig={semanticSearchConfig} />;
    ```

3. Handle the [`onSemanticSearch`](slug:api_grid_smartbox#onsemanticsearch) event to implement your semantic search logic:

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
                    <SmartBox semanticSearchConfig={semanticSearchConfig} onSemanticSearch={handleSemanticSearch} />
                </GridToolbar>
            </Grid>
        );
    };
    ```

4. Create a separate service to encapsulate the semantic matching mechanism. In the demo, the `SemanticSearchService` loads the transformer model, converts text into vector embeddings, and provides the cosine similarity calculation to compare vectors.

## Configuration Options

The Semantic Search mode provides the following configuration options to customize its behavior through the `semanticSearchConfig` prop:

-   [Typing Delay](#typing-delay)&mdash;Set the debounce time before triggering the search.
-   [Placeholder Text](#placeholder-text)&mdash;Provide guidance text in the search input field.
-   [Query History](#query-history)&mdash;Enable users to access and reuse previous search queries.

### Typing Delay

You can use the `delay` property to control how long the AI Smart Box waits after the user stops typing before triggering the search. Since the semantic search logic may take time to process, consider using a longer delay to avoid triggering too many searches as users type. The default value is `700` milliseconds.

```tsx
const semanticSearchConfig = {
    enabled: true,
    delay: 800 // Wait 800ms after user stops typing
};

<SmartBox semanticSearchConfig={semanticSearchConfig} />;
```

### Placeholder Text

The `placeholder` property allows you to customize the placeholder text that appears in the AI Smart Box when Semantic Search mode is active. The placeholder text should communicate that this mode understands natural language and concepts, not just exact keywords.

```tsx
const semanticSearchConfig = {
    enabled: true,
    placeholder: 'Describe what you need...'
};

<SmartBox semanticSearchConfig={semanticSearchConfig} />;
```

### Query History

The `history` property configures query history specifically for Semantic Search mode, allowing users to access and reuse previous searches. The default history size is `5` queries, and the default timestamp format is `'HH:mm:ss'`.

```tsx
const semanticSearchConfig = {
    enabled: true,
    history: {
        size: 5, // Keep last 5 searches
        timestampFormat: 'h:mm a' // Show time in 12-hour format
    }
};

<SmartBox semanticSearchConfig={semanticSearchConfig} />;
```

## Suggested Links

-   [AI Smart Box](slug:smart_grid_basic_operations)
-   [KendoReact Data Grid Searching](slug:smart_grid_basic_operations#available_modes)
-   [AI Assistant Tools Setup](slug:ai_assistant_tools_setup)
-   [Smart Grid Overview](slug:smart_grid)
-   [KendoKendoReact Data Grid Configuring the ToolBar](slug:toolbar_tools_grid)
-   [API Reference of the SmartBox](slug:api_grid_smartbox)
