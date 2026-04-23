---
title: GridSmartBoxAIAssistantProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridSmartBoxAIAssistantProps."
api_reference: true
type: inner_api
slug: api_grid_gridsmartboxaiassistantprops
---

# GridSmartBoxAIAssistantProps
Represents the props for the SmartBox component.
SmartBox provides a unified search interface with three modes: standard search,
semantic search, and AI assistant for natural language grid operations.

The AI assistant supports three operational modes configured via `aiAssistantConfig`:
- **Auto mode**: Set `requestOptions` (with `url`) - SmartBox handles requests automatically
- **Controlled mode**: Set `requestUrl` - SmartBox makes requests, you control loading state
- **Manual mode**: Don't set `requestUrl` or `requestOptions` - Handle requests via `onAIPromptRequest`

```tsx
// Auto mode - SmartBox handles everything automatically
<SmartBox
  aiAssistantConfig={{
    enabled: true,
    requestOptions: {
      url: '/api/ai/grid',
      timeout: 5000
    },
    promptSuggestions: ['Sort by price', 'Filter active items']
  }}
  searchConfig={{ enabled: true }}
/>

// Controlled mode - SmartBox makes requests, you control loading state
<SmartBox
  loading={isLoading}
  aiAssistantConfig={{
    enabled: true,
    requestUrl: '/api/ai/grid'
  }}
  onAIPromptRequest={(e) => setIsLoading(true)}
  onAIResponseSuccess={(e) => setIsLoading(false)}
/>

// Manual mode - fully custom request handling
<SmartBox
  loading={isLoading}
  aiAssistantConfig={{ enabled: true }}
  onAIPromptRequest={(e) => {
    setIsLoading(true);
    myCustomFetch(e.requestData).then(handleResponse);
  }}
/>
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### activeMode?


</td>
<td type class="table-cell-type">


<code>


[SmartBoxMode]({% slug api_grid_smartboxmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the currently active mode.

```tsx
<SmartBox activeMode="aiAssistant" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### aiAssistantConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridSmartBoxAIAssistantConfigProps]({% slug api_grid_gridsmartboxaiassistantconfigprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the AI assistant mode settings.
Can be a boolean to enable/disable or an object with detailed settings.

```tsx
<SmartBox aiAssistantConfig={{
  enabled: true,
  requestUrl: '/api/ai/grid',
  promptSuggestions: ['Sort by price', 'Filter active items']
}} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


"rtl" | "ltr"


</code>


</td>
<td class="table-cell-default">


<code>


'ltr'


</code>


</td>
<td class="table-cell-comment">


Sets the text direction.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### enabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the mode is enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### history?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridSmartBoxHistoryProps]({% slug api_grid_gridsmartboxhistoryprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the settings for the history queries of all modes.
When set to `true`, enables history with default settings for all modes.
When set to `false`, disables history for all modes.
When set to an object, configures the history settings for all modes.
This shared setting overrides individual mode history settings (e.g., `searchConfig.history`).

```tsx
// Enable history with default settings for all modes
<SmartBox history={true} />

// Disable history for all modes
<SmartBox history={false} />

// Configure history settings for all modes (overrides individual mode settings)
<SmartBox history={{ size: 10, timestampFormat: 'HH:mm' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### historyItemRender?


</td>
<td type class="table-cell-type">


<code>


(item: [HistoryItem]({% slug api_grid_historyitem %}), onClick: () => void) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom render function for history items.

```tsx
<SmartBox
  historyItemRender={(item, onClick) => (
    <li className="custom-history" onClick={onClick}>
      {item.text} - {item.timestamp.toLocaleString()}
    </li>
  )}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets whether the SmartBox is in loading state.
Use this for controlled mode to manage loading state externally.

```tsx
<SmartBox loading={isLoading} onAIPromptRequest={() => setIsLoading(true)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAICancelRequest?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an AI request is cancelled by the user.
The user can cancel by clicking the stop button during loading.

```tsx
<SmartBox
  onAICancelRequest={() => {
    console.log('Request cancelled');
    setLoading(false);
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAIPromptRequest?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSmartBoxRequestEvent]({% slug api_grid_gridsmartboxrequestevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an AI prompt request is initiated.
Use this callback to intercept requests, modify data, or handle requests manually.

```tsx
// Controlled mode - intercept and modify request
<SmartBox
  onAIPromptRequest={(event) => {
    console.log('Prompt:', event.requestData.promptMessage);
    setLoading(true);
  }}
/>

// Manual mode - handle request yourself
<SmartBox
  onAIPromptRequest={(event) => {
    fetch('/api/ai', {
      method: 'POST',
      body: JSON.stringify(event.requestData)
    }).then(handleResponse);
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAIResponseError?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSmartBoxResponseErrorEvent]({% slug api_grid_gridsmartboxresponseerrorevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an AI response returns an error.
Only fires in auto or controlled mode when a `requestUrl` is configured.

```tsx
<SmartBox
  onAIResponseError={(event) => {
    console.error('AI error:', event.error);
    setLoading(false);
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAIResponseSuccess?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSmartBoxResponseSuccessEvent]({% slug api_grid_gridsmartboxresponsesuccessevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an AI response is received successfully.
Only fires in auto or controlled mode when a `requestUrl` is configured.

```tsx
<SmartBox
  onAIResponseSuccess={(event) => {
    console.log('AI response:', event.response);
    setLoading(false);
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the SmartBox input is blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the SmartBox popup closes.

```tsx
<SmartBox onClose={() => console.log('Popup closed')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the SmartBox input is focused.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the SmartBox popup opens.

```tsx
<SmartBox onOpen={() => console.log('Popup opened')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSearch?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSmartBoxSearchEvent]({% slug api_grid_gridsmartboxsearchevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a search is performed in Search mode.
The event contains the search value and filter descriptor.

```tsx
<SmartBox
  onSearch={(event) => {
    console.log('Search value:', event.searchValue);
    // Prevent default filtering if needed
    event.preventDefault();
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSemanticSearch?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSmartBoxSearchEvent]({% slug api_grid_gridsmartboxsearchevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a search is performed in Semantic Search mode.
The event contains the search value and filter descriptor.

```tsx
<SmartBox
  onSemanticSearch={(event) => {
    console.log('Semantic search:', event.searchValue);
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the placeholder text for the SmartBox input.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptSuggestionRender?


</td>
<td type class="table-cell-type">


<code>


(suggestion: string, onClick: () => void) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom render function for prompt suggestions.

```tsx
<SmartBox
  promptSuggestionRender={(suggestion, onClick) => (
    <li className="custom-suggestion" onClick={onClick}>{suggestion}</li>
  )}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### searchConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridSmartBoxSearchProps]({% slug api_grid_gridsmartboxsearchprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the search mode settings.
Can be a boolean to enable/disable or an object with detailed settings.

```tsx
<SmartBox searchConfig={{ enabled: true, fields: ['name', 'description'], delay: 300 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### semanticSearchConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridSmartBoxSemanticSearchConfigProps]({% slug api_grid_gridsmartboxsemanticsearchconfigprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the semantic search mode settings.
Can be a boolean to enable/disable or an object with detailed settings.

```tsx
<SmartBox semanticSearchConfig={{ enabled: true, placeholder: 'Search with AI...' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


'medium'


</code>


</td>
<td class="table-cell-comment">


Sets the size of the SmartBox.




```tsx
<SmartBox size="large" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### textboxProps?


</td>
<td type class="table-cell-type">


<code>


TextBoxProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Props to pass to the TextBox component.


</td>
</tr>
</tbody>
</table>



