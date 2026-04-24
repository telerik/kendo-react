---
title: UseKendoPasteOptions
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the UseKendoPasteOptions."
api_reference: true
type: inner_api
slug: api_common_usekendopasteoptions
---

# UseKendoPasteOptions
Options for the useKendoPaste hook.


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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Whether the smart paste subscription is enabled.
When false, the hook will not listen for smart paste events.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### fieldName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field name to listen for in the smart paste event.
This is typically the component's `name` or `id` prop.
When the event contains a value for this field, the onValueChange callback is called.

If undefined or empty, the hook will not subscribe to events.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onValueChange


</td>
<td type class="table-cell-type">


<code>


(value: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when a value is received for this field from the smart paste event.


</td>
</tr>
</tbody>
</table>



