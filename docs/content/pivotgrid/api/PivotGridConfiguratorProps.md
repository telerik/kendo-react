---
title: PivotGridConfiguratorProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridConfiguratorProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridconfiguratorprops
---

# PivotGridConfiguratorProps
Represents the props of the [KendoReact PivotGridConfigurator component](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridconfigurator).


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


Sets the `className` property of the top-most element of the PivotGridConfigurator in addition to the default `k-pivotgrid-configurator` class.


</td>
</tr>
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


Sets the `data` of the PivotGridConfigurator.

The `data` represents all fields available in the configurator.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editor?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridConfiguratorEditorProps]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `editor` component.

The default component is: [PivotGridConfiguratorEditor](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridconfiguratoreditor).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is filtered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### form?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;FormProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `form` component.

The default component is: [KendoReactForm](https://www.telerik.com/kendo-react-ui/components/form/api/form).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formElement?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;FormElementProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `formElement` component.

The default component is: [KendoReactFormElement](https://www.telerik.com/kendo-react-ui/components/form/api/formelement).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### horizontal?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Renders the PivotGridConfigurator in `horizontal` orientation.





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


Sets the `id` property of the top-most element of the PivotGridConfigurator.


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


#### onAxisFilterFieldExpand?


</td>
<td type class="table-cell-type">


<code>


(event?: [PivotGridAxisFilterFieldExpandEvent]({% slug api_pivotgrid_pivotgridaxisfilterfieldexpandevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever an `AxisFilterField` is expanded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAxisFilterFieldsExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event?: [PivotGridAxisFilterFieldsExpandChangeEvent]({% slug api_pivotgrid_pivotgridaxisfilterfieldsexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `expanded` state of the `AxisFilterFields` is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnAxesChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridConfiguratorAxesChangeEvent]({% slug api_pivotgrid_pivotgridconfiguratoraxeschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `columnAxes` property should change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFieldsEditorFieldCheck?


</td>
<td type class="table-cell-type">


<code>


(event: PivotGridFieldsEditorFieldCheckEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever a `field` is checked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFieldsEditorFieldExpand?


</td>
<td type class="table-cell-type">


<code>


(event: PivotGridFieldsEditorFieldExpandEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever a `field` is expanded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridConfiguratorFilterChangeEvent]({% slug api_pivotgrid_pivotgridconfiguratorfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `filter` property should change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMeasureAxesChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridConfiguratorAxesChangeEvent]({% slug api_pivotgrid_pivotgridconfiguratoraxeschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `measureAxes` property should change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowAxesChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridConfiguratorAxesChangeEvent]({% slug api_pivotgrid_pivotgridconfiguratoraxeschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `rowAxes` property should change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridConfiguratorSortChangeEvent]({% slug api_pivotgrid_pivotgridconfiguratorsortchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever the `sort` property should change.


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


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is sorted.


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


Sets the `style` property of the top-most element of the PivotGridConfigurator.


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


Sets the `tabIndex` property of the top-most element of the PivotGridConfigurator.


</td>
</tr>
</tbody>
</table>



