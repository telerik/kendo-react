---
title: SmartPasteFormField
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SmartPasteFormField."
api_reference: true
type: inner_api
slug: api_buttons_smartpasteformfield
---

# SmartPasteFormField
Represents a form field configuration used by the SmartPaste component to identify and populate form inputs.


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


#### allowedValues?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional array of allowed values for fields with predefined options (e.g., dropdowns, radio buttons).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### description


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A description of the field that helps the AI understand what data to extract.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier for the form field (e.g., field name or id).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


"string" | "number" | "boolean" | "fixed-choices" | "kendo-input"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the field which determines how the value should be processed.

The available options are:
- `string` - Text-based input fields
- `boolean` - Checkbox or toggle fields
- `number` - Numeric input fields
- `fixed-choices` - Fields with predefined options (e.g., dropdowns, radio buttons)
- `kendo-input` - KendoReact input components


</td>
</tr>
</tbody>
</table>



