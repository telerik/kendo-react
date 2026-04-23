---
title: ChartCategoryAxisNotesLabelProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartCategoryAxisNotesLabelProps."
api_reference: true
type: inner_api
slug: api_charts_chartcategoryaxisnoteslabelprops
---

# ChartCategoryAxisNotesLabelProps
Represents the props of the KendoReact ChartCategoryAxisNotesLabel component.


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


The text color of the label. Accepts a valid CSS color string, including hex and rgb.


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


The function which returns the label content. The function argument contains a `value` field and defines the category value. You can split the text into multiple lines by using the line feed characters (`"\n"`).


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


The font style of the label.


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


The format for displaying the notes label. Uses the [`format`](https://www.telerik.com/kendo-react-ui/components/intl/api/intlservice#toc-format) method of IntlService. Contains one placeholder (`"{0}"`) which represents the category value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


[NoteLabelPosition]({% slug api_charts_notelabelposition %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The position of the label.

The available options are:
- `"inside"`&mdash;The label is positioned inside the icon.
- `"outside"`&mdash;The label is positioned outside the icon.


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


If set to `true`, the Chart displays the category notes label. By default, the category notes label is visible.


</td>
</tr>
</tbody>
</table>



