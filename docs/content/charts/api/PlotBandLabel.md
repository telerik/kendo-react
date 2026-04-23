---
title: PlotBandLabel
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the PlotBandLabel."
api_reference: true
type: inner_api
slug: api_charts_plotbandlabel
---

# PlotBandLabel
The appearance configuration for the plot band label.


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


"center" | "left" | "right"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The horizontal alignment of the label text.

By default, the label is aligned to the left.

The supported values are:
- `"center"`&mdash;The label is positioned in the center of the plot band.
- `"right"`&mdash;The label is positioned on the right side of the plot band.
- `"left"`&mdash;The label is positioned on the left side of the plot band.


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


The background color of the label. Accepts a valid CSS color string, including hex and rgb.


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


The border of the label.


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


The color of the plot band label text.
Accepts a valid [CSS `color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
configuration string, including hex and rgb.


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


The font of the plot band label text.
Accepts a valid [CSS `font`](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
configuration string.


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


The margin of the label. A numeric value sets all margins.


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


The padding of the label. A numeric value sets all paddings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"center" | "top" | "bottom"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The vertical position of the label inside the plot band.

By default, the label is aligned to the top.

The supported values are:
- `"bottom"`&mdash;The label is positioned on the bottom of the plot band.
- `"center"`&mdash;The label is positioned in the center of the plot band.
- `"top"`&mdash;The label is positioned on the top of the plot band.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rotation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rotation angle of the label. By default, the label is not rotated.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text of the label.

> The text can be split into multiple lines by using line feed characters ("\n").


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


If set to `false`, the will not display the plot band label.
By default, the plot band labels are not displayed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [PlotBandLabelVisualArgs]({% slug api_charts_plotbandlabelvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that can be used to create a custom visual for the label.

The available argument fields are:

- `text`&mdash;The label text.
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `options`&mdash;The label options.
- `createVisual`&mdash;A function that can be used to get the default visual.
- `sender`&mdash;A reference to the Chart instance.


</td>
</tr>
</tbody>
</table>



