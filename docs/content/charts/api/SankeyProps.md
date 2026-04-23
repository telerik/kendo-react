---
title: SankeyProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyProps."
api_reference: true
type: inner_api
slug: api_charts_sankeyprops
---

# SankeyProps
Represents the props of the KendoReact [Sankey](https://www.telerik.com/kendo-react-ui/components/charts/api/sankey) component.


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


Sets additional CSS classes to the Sankey component.


</td>
</tr>
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


The data of the Sankey component containing the `links` and `nodes` props.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` attribute of the Sankey component.


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


If set to `true`, the Sankey component will not perform automatic layout.


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


The `labels` default props of the Sankey component.
The value will be applied to all labels unless overridden by the `nodes` label prop of the `data` prop.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### legend?


</td>
<td type class="table-cell-type">


<code>


[SankeyLegend]({% slug api_charts_sankeylegend %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The legend configuration of the Sankey component.


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


The `links` default props of the Sankey component.
The value will be applied to all links unless overridden by the `links` prop of the `data` prop.


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


The `nodes` default props of the Sankey component.
The value will be applied to all nodes unless overridden by the `nodes` prop of the `data` prop.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLinkClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SankeyEvent]({% slug api_charts_sankeyevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a link is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLinkEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [SankeyEvent]({% slug api_charts_sankeyevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse pointer enters a link. Similar to the `mouseenter` event,


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLinkLeave?


</td>
<td type class="table-cell-type">


<code>


(event: [SankeyEvent]({% slug api_charts_sankeyevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse pointer leaves a link. Similar to the `mouseleave` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNodeClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SankeyEvent]({% slug api_charts_sankeyevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a node is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNodeEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [SankeyEvent]({% slug api_charts_sankeyevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse pointer enters a node. Similar to the `mouseenter` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNodeLeave?


</td>
<td type class="table-cell-type">


<code>


(event: [SankeyEvent]({% slug api_charts_sankeyevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse pointer leaves a node. Similar to the `mouseleave` event.


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


The styles that are applied to the Sankey component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


[SankeyTitle]({% slug api_charts_sankeytitle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title configuration of the Sankey component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltip?


</td>
<td type class="table-cell-type">


<code>


[SankeyTooltip]({% slug api_charts_sankeytooltip %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the Sankey tooltips.


</td>
</tr>
</tbody>
</table>



