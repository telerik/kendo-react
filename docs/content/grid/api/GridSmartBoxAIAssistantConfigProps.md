---
title: GridSmartBoxAIAssistantConfigProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridSmartBoxAIAssistantConfigProps."
api_reference: true
type: inner_api
slug: api_grid_gridsmartboxaiassistantconfigprops
---

# GridSmartBoxAIAssistantConfigProps
Configuration options for the AI assistant mode.

The AI assistant supports three operational modes:
- **Auto mode**: Set `requestOptions` (with `url` property) - SmartBox handles the request automatically
- **Controlled mode**: Set `requestUrl` without `requestOptions` - SmartBox makes requests but you control loading state
- **Manual mode**: Don't set `requestUrl` or `requestOptions` - Handle requests yourself via `onAIPromptRequest`


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


Enables or disables the AI assistant mode.


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


Configures the AI assistant history settings.
Can be a boolean to enable/disable or an object with detailed settings.


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


Sets the placeholder text for the AI assistant input.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptSuggestions?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


List of suggested prompts to display in the popup.

```tsx
<SmartBox aiAssistantConfig={{
  promptSuggestions: ['Sort by price', 'Filter active items', 'Group by category']
}} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### requestOptions?


</td>
<td type class="table-cell-type">


<code>


AxiosRequestConfig&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the options for the axios request.
When set (with `url` property), enables auto mode where SmartBox handles requests automatically.

```tsx
// Auto mode - SmartBox handles everything
<SmartBox aiAssistantConfig={{
  requestOptions: {
    url: 'https://api.example.com/ai/grid',
    timeout: 5000,
    headers: { 'Authorization': 'Bearer token' }
  }
}} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### requestUrl?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the URL to which the AI request will be sent.
When set without `requestOptions`, enables controlled mode.

```tsx
// Controlled mode
<SmartBox aiAssistantConfig={{ requestUrl: 'https://api.example.com/ai/grid' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### speechToTextButton?


</td>
<td type class="table-cell-type">


<code>


boolean | SpeechToTextButtonProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the speech-to-text functionality.
Can be a boolean to enable/disable or an object with SpeechToTextButton props.


</td>
</tr>
</tbody>
</table>



