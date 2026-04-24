---
title: ChartNavigatorCategoryAxisLabelsProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartNavigatorCategoryAxisLabelsProps."
api_reference: true
type: inner_api
slug: api_charts_chartnavigatorcategoryaxislabelsprops
---

# ChartNavigatorCategoryAxisLabelsProps
Represents the props of the KendoReact ChartNavigatorCategoryAxisLabels component.


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


The background color of the labels. Accepts a valid CSS color string, including hex and rgb.


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


The border of the labels.


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


The text color of the labels. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


(e: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The function which returns the label content. You can split the text into multiple lines by using the line feed characters (`"\n"`).

The fields available in the function argument are:
- `value`&mdash;The category value.
- `dataItem`&mdash;The data item if a field is specified. If the category does not have a corresponding item in the data, an empty object is passed.
- `format`&mdash;The default format of the label.
- `culture`&mdash;The default culture (if set) of the label.
- `text`&mdash;The default label text.
- `index`&mdash;The index of the label.
- `count`&mdash;The total number of rendered labels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### culture?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The culture to use when formatting date values. The specified culture must be loaded as demonstrated in the [Internationalization Overview](https://www.telerik.com/kendo-react-ui/components/intl/i18n).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateFormats?


</td>
<td type class="table-cell-type">


<code>


[DateFormats]({% slug api_charts_dateformats %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format for displaying the labels of the date category axis. The `{0}` placeholder represents the category value. The Chart selects the appropriate format for the current [`categoryAxis.baseUnit`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-baseunit) option.

Setting the [`categoryAxis.labels.format`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxislabelsprops#toc-format) option overrides the date formats. For more information, refer to the [`format`](https://www.telerik.com/kendo-react-ui/components/intl/api/intlservice#toc-format) method of IntlService.

> Not supported for Radar Charts. Use [`categoryAxis.labels.format`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxislabelsprops#toc-format) instead.


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


The font style of the labels.


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


The format for displaying the labels. Uses the [`format`](https://www.telerik.com/kendo-react-ui/components/intl/api/intlservice#toc-format) method of IntlService. Contains one placeholder (`"{0}"`) which represents the category value.


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


The margin of the labels. A numeric value sets all margins.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mirror?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart mirrors the axis labels and ticks. If the labels are normally on the left side of the axis, the mirroring of the axis renders them to the right.


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


The padding of the labels. A numeric value sets all paddings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


[AxisLabelsPosition]({% slug api_charts_axislabelsposition %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The position of the axis labels. By default, labels are positioned next to the axis.
* When `position` is set to `end`, the labels are placed at the end of the crossing axis&mdash;
typically, at the top or right end of the Chart unless the crossing axis was reversed.
* When `position` is set to `start`, the labels are placed at the start of the crossing axis&mdash;
typically, at the left or bottom end of the Chart unless the crossing axis was reversed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rotation?


</td>
<td type class="table-cell-type">


<code>


number | "auto" | [LabelRotation]({% slug api_charts_labelrotation %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rotation angle of the labels. By default, the labels are not rotated. If the axis is horizontal, can be set to `"auto"`. In this case, the labels are rotated only if the slot size is not sufficient for the entire labels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of labels to skip. By default, no labels are skipped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### step?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rendering step of the label&mdash;renders every n<sup>th</sup> label. By default, every label is rendered.


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


If set to `true`, the Chart displays the category axis labels. By default, the category axis labels are visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [AxisLabelVisualArgs]({% slug api_charts_axislabelvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for creating a custom visual for the labels.

The available argument fields are:
- `createVisual`&mdash;A function for getting the default visual.
- `culture`&mdash;The default culture (if set) on the label.
- `dataItem`&mdash;The data item if a field is specified.
- `format`&mdash;The default format of the label.
- `options`&mdash;The label options.
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `sender`&mdash;The Chart instance (might be `undefined`).
- `text`&mdash;The label text.
- `value`&mdash;The category value.


</td>
</tr>
</tbody>
</table>



