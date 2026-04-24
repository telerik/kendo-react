---
title: SankeyEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyEvent."
api_reference: true
type: inner_api
slug: api_charts_sankeyevent
---

# SankeyEvent
The KendoReact Sankey event object.


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


#### dataItem


</td>
<td type class="table-cell-type">


<code>


[SankeyNodeDataItem]({% slug api_charts_sankeynodedataitem %}) | [SankeyLinkDataItem]({% slug api_charts_sankeylinkdataitem %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The dataItem of the related element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sender


</td>
<td type class="table-cell-type">


<code>


Sankey


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Sankey component instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[SankeyHandle]({% slug api_charts_sankeyhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetType


</td>
<td type class="table-cell-type">


<code>


"link" | "node"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target element type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event type.


</td>
</tr>
</tbody>
</table>



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


Indicates whether the default action has been prevented.


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


Prevents the default action.


</td>
</tr>

</tbody>
</table>



