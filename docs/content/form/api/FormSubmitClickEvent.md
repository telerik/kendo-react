---
title: FormSubmitClickEvent
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FormSubmitClickEvent."
api_reference: true
type: inner_api
slug: api_form_formsubmitclickevent
---

# FormSubmitClickEvent
Contains data for the form submit click event.


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


#### event?


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Contains the original browser event that triggered the submit.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isModified


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether any form fields have been changed from their initial values.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isValid


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether the form passes all validation rules.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### values


</td>
<td type class="table-cell-type">


<code>


{[name: string]: any}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the current values from all form fields.


</td>
</tr>
</tbody>
</table>



