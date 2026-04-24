---
title: SmartPasteClickEvent
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SmartPasteClickEvent."
api_reference: true
type: inner_api
slug: api_buttons_smartpasteclickevent
---

# SmartPasteClickEvent
Represents the click event for the SmartPasteButton component.
Extends the standard React mouse event with additional properties for smart paste functionality.


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


#### requestData


</td>
<td type class="table-cell-type">


<code>


[SmartPasteRequestData]({% slug api_buttons_smartpasterequestdata %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The request data containing clipboard content and form fields.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### setResponse


</td>
<td type class="table-cell-type">


<code>


(response: [SmartPasteResponse]({% slug api_buttons_smartpasteresponse %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function to set the field values to populate in the form.
Call this with the response from your API to populate the form fields.


</td>
</tr>
</tbody>
</table>



