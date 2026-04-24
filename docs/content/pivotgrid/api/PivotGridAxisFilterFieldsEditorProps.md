---
title: PivotGridAxisFilterFieldsEditorProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridAxisFilterFieldsEditorProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridaxisfilterfieldseditorprops
---

# PivotGridAxisFilterFieldsEditorProps
Represents the props of the [KendoReact PivotGridAxisFilterFieldsEditor component](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxisfilterfieldseditor).


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


#### applyButton?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ButtonProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `applyButton` component.

The default component is: [KendoReactButton](https://www.telerik.com/kendo-react-ui/components/buttons/api/button).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### axes


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates which of the three available axes are represented by the editor:
- columnAxes
- rowAxes
- measureAxes


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `className` property of the top-most element of the PivotGridAxisFilterFieldsEditor in addition to the default `k-columnmenu-item-wrapper` class.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuForm?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ColumnMenuFormProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `columnMenuForm` component.

The default component is: [KendoReactColumnMenuForm](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnmenuform).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuItem?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ColumnMenuItemProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `columnMenuItem` component.

The default component is: [KendoReactColumnMenuItem](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnmenuitem).


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


Sets the `data` of the PivotGridAxisFilterFieldsEditor.

The `data` represents all fields available for filtering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dataItem` of the AxisEditor.

The `dataItem` is a single [PivotGridAxis](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxis) object.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultFilter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the initial filter value before additional operations are executed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` property of the top-most element of the PivotGridAxisFilterFieldsEditor.


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


Overrides the default `treeView` component.

The default component is: `() => <Skeleton shape={'rectangle'} style={{height: '20px', width:'calc(100% - 16px)', margin: 8}}/>`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resetButton?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ButtonProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `resetButton` component.

The default component is: [KendoReactButton](https://www.telerik.com/kendo-react-ui/components/buttons/api/button).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `style` property of the top-most element of the PivotGridAxisFilterFieldsEditor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` property of the top-most element of the PivotGridAxisFilterFieldsEditor.


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



