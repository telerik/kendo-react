---
title: PivotGridFieldsEditorProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridFieldsEditorProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridfieldseditorprops
---

# PivotGridFieldsEditorProps
Represents the props of the [KendoReact PivotGridFieldsEditor component](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridfieldseditor).


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


#### columnAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the `column` axes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


PivotGridField[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `data` of the PivotGridConfiguratorEditor.

The `data` represents all fields available in the configurator.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### measureAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the `measure` axes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### noData?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `noData` component.

The default component is: `() => <div>NO DATA</div>`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCheck?


</td>
<td type class="table-cell-type">


<code>


(args: PivotGridFieldsEditorFieldCheckEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever a `check` is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpand?


</td>
<td type class="table-cell-type">


<code>


(args: PivotGridFieldsEditorFieldExpandEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever an `expand` is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the `row` axes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### treeView?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;TreeViewProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `treeView` component.

The default component is: [KendoReactTreeView](https://www.telerik.com/kendo-react-ui/components/treeview/api/treeview).


</td>
</tr>
</tbody>
</table>



