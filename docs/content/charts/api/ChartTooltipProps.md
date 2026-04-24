---
title: ChartTooltipProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartTooltipProps."
api_reference: true
type: inner_api
slug: api_charts_charttooltipprops
---

# ChartTooltipProps
Represents the props of the KendoReact ChartTooltip component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/tooltips)).


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


The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


[TooltipBorder]({% slug api_charts_tooltipborder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The border configuration options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### font?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font of the tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format of the labels. Uses the [`format`](https://www.telerik.com/kendo-react-ui/components/intl/api/intlservice#toc-format) method of IntlService.

The available format placeholders are:
- Area, Bar, Column, Funnel, Pyramid, Line, and Pie: {0} - value.
- Bubble: {0} - x value, {1} - y value, {2} - size value, {3} - category name.
- Scatter and scatterLine: {0} - x value, {1} - y value.
- Candlestick and OHLC: {0} - open value, {1} - high value, {2} - low value, {3} - close value, {4} - category name.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opacity?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The opacity of the tooltip.


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


The padding of the tooltip. A numeric value sets all paddings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


(props: [TooltipContext]({% slug api_charts_tooltipcontext %})) => ReactNode | (props: [SharedTooltipContext]({% slug api_charts_sharedtooltipcontext %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that can be used to create a custom tooltip template.

When the `shared` property is set to `true`, the function accepts a `SharedTooltipContext` object as an argument.
Otherwise, it accepts a `TooltipContext` object.

The function should return a React element that represents the custom tooltip content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shared?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart displays a single tooltip for every category ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/tooltips#toc-shared-tooltip)).


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


If set to `true`, the Chart displays the series tooltip. By default, the series tooltip is not displayed.


</td>
</tr>
</tbody>
</table>



