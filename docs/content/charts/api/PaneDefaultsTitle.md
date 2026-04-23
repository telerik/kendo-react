---
title: PaneDefaultsTitle
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the PaneDefaultsTitle."
api_reference: true
type: inner_api
slug: api_charts_panedefaultstitle
---

# PaneDefaultsTitle
The configuration options of the default pane title.


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


The background color of the title. Accepts a valid CSS color string, including hex and rgb.


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


The border of the title.


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


The text color of the title. Accepts a valid CSS color string, including hex and rgb.


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


The font style of the title.


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


The margin of the title. A numeric value sets all margins.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"center" | "left" | "right"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The position of the title.

The supported values are:
- `"left"`&mdash;The axis title is positioned on the left (applicable to the horizontal axis).
- `"right"`&mdash;The axis title is positioned on the right (applicable to the horizontal axis).
- `"center"`&mdash;The axis title is positioned in the center.


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


If set to `true`, the Chart displays the pane title. By default, the pane title is visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: any) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that can be used to create a custom visual for the title.

The available argument fields are:

- `text`&mdash;The label text.
- `rect`&mdash;The [geometry Rect](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `sender`&mdash;The Chart instance (might be `undefined`).
- `options`&mdash;The label options.
- `createVisual`&mdash;A function that can be used to get the default visual.


</td>
</tr>
</tbody>
</table>



