---
title: SankeyLegend
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyLegend."
api_reference: true
type: inner_api
slug: api_charts_sankeylegend
---

# SankeyLegend
Represents the Sankey legend options.


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


#### align?


</td>
<td type class="table-cell-type">


<code>


"center" | "end" | "start"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The legend is horizontally aligned when [`legend.position`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartlegendprops#toc-position) is set to `"top"` or `"bottom"`. The legend is vertically aligned when [`legend.position`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartlegendprops#toc-position) is set to `"left"` or `"right"`.

The supported values are:
- `"start"`&mdash;The legend is aligned to the start.
- `"center"`&mdash;The legend is aligned to the center.
- `"end"`&mdash;The legend is aligned to the end.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### background?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The background color of the legend. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


[Border]({% slug api_charts_border %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The border of the legend.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The height of the legend when [`legend.orientation`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartlegendprops#toc-orientation) is set to `"vertical"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


[SankeyLegendItem]({% slug api_charts_sankeylegenditem %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the legend items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


[LegendLabels]({% slug api_charts_legendlabels %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The label configuration of the Chart legend.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


number | [Margin]({% slug api_charts_margin %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The margin of the Chart legend. A numeric value sets all paddings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offsetX?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The X offset of the Chart legend. The offset is relative to the default position of the legend. For example, a value of `20` moves the legend 20 pixels to the right of its initial position. Negative values move the legend to the left of its current position.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offsetY?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Y offset of the chart legend. The offset is relative to the current position of the legend. For example, a value of `20` moves the legend 20 pixels down from its initial position. Negative values move the legend upwards from its current position.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### orientation?


</td>
<td type class="table-cell-type">


<code>


"vertical" | "horizontal"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The orientation of the legend items.

The supported values are:
- `"vertical"`&mdash;The legend items are added vertically.
- `"horizontal"`&mdash;The legend items are added horizontally.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number | [Padding]({% slug api_charts_padding %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The padding of the Chart legend. A numeric value sets all paddings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"left" | "right" | "top" | "bottom" | "custom"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The positions of the Chart legend.

The supported values are:
- `"top"`&mdash;The legend is positioned on the top.
- `"bottom"`&mdash;The legend is positioned on the bottom.
- `"left"`&mdash;The legend is positioned on the left.
- `"right"`&mdash;The legend is positioned on the right.
- `"custom"`&mdash;The legend is positioned by using [`legend.offsetX`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartlegendprops#toc-offsetx) and [`legend.offsetY`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartlegendprops#toc-offsety).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### reverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the legend items are reversed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


LegendTitle


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title of the Chart legend.
By default, the Chart will not render a legend title.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart displays the legend ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/legend#toc-hiding-the-legend)). By default, the Chart legend is visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The legend width when the [`legend.orientation`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartlegendprops#toc-orientation) is set to `"horizontal"`.


</td>
</tr>
</tbody>
</table>



