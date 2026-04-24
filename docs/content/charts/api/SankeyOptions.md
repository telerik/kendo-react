---
title: SankeyOptions
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyOptions."
api_reference: true
type: inner_api
slug: api_charts_sankeyoptions
---

# SankeyOptions
Represents the options of the Sankey component.


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


#### data


</td>
<td type class="table-cell-type">


<code>


[SankeyData]({% slug api_charts_sankeydata %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data of the Sankey. The data object contains the Sankey nodes and links configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disableAutoLayout?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Sankey will not automatically reorder the nodes to reduce the number of links that cross over each other.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disableKeyboardNavigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Sankey keyboard navigation will be disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


[SankeyLabelDefaults]({% slug api_charts_sankeylabeldefaults %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default label options of the Sankey.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### legend?


</td>
<td type class="table-cell-type">


<code>


SankeyLegend


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The legend configuration options of the Sankey.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### links?


</td>
<td type class="table-cell-type">


<code>


[SankeyLinkDefaults]({% slug api_charts_sankeylinkdefaults %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default link options of the Sankey.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nodes?


</td>
<td type class="table-cell-type">


<code>


[SankeyNodeDefaults]({% slug api_charts_sankeynodedefaults %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default node options of the Sankey.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rtl?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Sankey will render from right to left.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


SankeyTitle


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Sankey title configuration options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltip?


</td>
<td type class="table-cell-type">


<code>


SankeyTooltip


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The tooltip configuration options of the Sankey.


</td>
</tr>
</tbody>
</table>



