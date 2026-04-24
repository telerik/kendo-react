---
title: GridSmartBoxSearchProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridSmartBoxSearchProps."
api_reference: true
type: inner_api
slug: api_grid_gridsmartboxsearchprops
---

# GridSmartBoxSearchProps



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


#### delay?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the delay in milliseconds before triggering search.


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


#### fields?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





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
</tbody>
</table>



