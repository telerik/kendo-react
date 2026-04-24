---
title: ChartWizardProps
description: "Learn how to build custom functionality when working with the React Chart Wizard by Kendo UI with the help of the ChartWizardProps."
api_reference: true
type: inner_api
slug: api_chart-wizard_chartwizardprops
---

# ChartWizardProps
The props of the KendoReact ChartWizard component.


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


#### data?


</td>
<td type class="table-cell-type">


<code>


[ChartWizardDataRow]({% slug api_chart-wizard_chartwizarddatarow %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the data you want to display in the ChartWizard component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultState?


</td>
<td type class="table-cell-type">


<code>


[ChartWizardDefaultState]({% slug api_chart-wizard_chartwizarddefaultstate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default state of the ChartWizard component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportOptions?


</td>
<td type class="table-cell-type">


<code>


[ExportOptions]({% slug api_chart-wizard_exportoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the export options for the ChartWizard component.


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


Fires when you close the ChartWizard component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExport?


</td>
<td type class="table-cell-type">


<code>


(event: [ExportEvent]({% slug api_chart-wizard_exportevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Chart exports. You can prevent this action.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onStateChange?


</td>
<td type class="table-cell-type">


<code>


(state: [ChartWizardState]({% slug api_chart-wizard_chartwizardstate %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the ChartWizard component state changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### state?


</td>
<td type class="table-cell-type">


<code>


[ChartWizardState]({% slug api_chart-wizard_chartwizardstate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the state of the ChartWizard component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### window?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;WindowProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the component that renders the ChartWizard window.


</td>
</tr>
</tbody>
</table>



