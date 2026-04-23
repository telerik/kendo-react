---
title: DrilldownEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the DrilldownEvent."
api_reference: true
type: inner_api
slug: api_charts_drilldownevent
---

# DrilldownEvent
Arguments for the `drilldown` event.

See [Drilldown Charts](https://www.telerik.com/kendo-react-ui/components/charts/drill-down).


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


#### currentState


</td>
<td type class="table-cell-type">


<code>


[ChartDrilldownState]({% slug api_charts_chartdrilldownstate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current Chart [drilldown state](https://www.telerik.com/kendo-react-ui/components/charts/api/chartprops#toc-drilldownstate).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nextState


</td>
<td type class="table-cell-type">


<code>


[ChartDrilldownState]({% slug api_charts_chartdrilldownstate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Chart [drilldown state](https://www.telerik.com/kendo-react-ui/components/charts/api/chartprops#toc-drilldownstate) that will apply the current drilldown operation.

See [Drilldown](https://www.telerik.com/kendo-react-ui/components/charts/drill-down) for an application example.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### point


</td>
<td type class="table-cell-type">


<code>


[SeriesPointType]({% slug api_charts_seriespointtype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The clicked series point.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### series


</td>
<td type class="table-cell-type">


<code>


[EventSeriesOptions]({% slug api_charts_eventseriesoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The clicked point series options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Charts]({% slug api_charts_charts %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Chart` component that triggered the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data point value.


</td>
</tr>
</tbody>
</table>



