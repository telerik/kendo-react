---
title: ExportEvent
description: "Learn how to build custom functionality when working with the React Chart Wizard by Kendo UI with the help of the ExportEvent."
api_reference: true
type: inner_api
slug: api_chart-wizard_exportevent
---

# ExportEvent
Provides arguments for the `export` event on the Chart Wizard.


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


#### chart


</td>
<td type class="table-cell-type">


<code>


Chart


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the current Chart chart instance you want to export.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportOptions


</td>
<td type class="table-cell-type">


<code>


[ExportOptions]({% slug api_chart-wizard_exportoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the export options on the Chart Wizard.


</td>
</tr>
</tbody>
</table>



## Constructors

### ExportEvent
<code>


(chart: Chart, exportOptions: [ExportOptions]({% slug api_chart-wizard_exportoptions %}))


</code>


#### Parameters
##### chart
<code>


Chart


</code>


##### exportOptions
<code>


[ExportOptions]({% slug api_chart-wizard_exportoptions %})


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### isDefaultPrevented


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns `true` if any of the event subscribers prevented the event.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


boolean


</code>


</td>
<td>


- Returns `true` if you prevented the default action.
Otherwise, returns `false`.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### preventDefault


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Prevents the default action for a specific event.
This action stops the source component from executing its built-in behavior that follows the event.


</td>
</tr>

</tbody>
</table>



