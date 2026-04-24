---
title: ChartSeriesDefaultsNotesProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartSeriesDefaultsNotesProps."
api_reference: true
type: inner_api
slug: api_charts_chartseriesdefaultsnotesprops
---

# ChartSeriesDefaultsNotesProps
Represents the props of the KendoReact ChartSeriesDefaultsNotes component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/series#toc-default-series-configuration)).


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


#### icon?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaultsNotesIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The icon of the notes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaultsNotesLabel


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The label of the notes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### line?


</td>
<td type class="table-cell-type">


<code>


[NoteLine]({% slug api_charts_noteline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The line of the notes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [SeriesNoteVisualArgs]({% slug api_charts_seriesnotevisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for creating a custom visual for the notes.

The available argument fields are:
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines the note target rect.
- `options`&mdash;The note options.
- `createVisual`&mdash;A function for getting the default visual.
- `category`&mdash;The category of the note point.
- `dataItem`&mdash;The `dataItem` of the note point.
- `value`&mdash;The value of the note point.
- `sender`&mdash;The Chart instance.
- `series`&mdash;The series of the note point.
- `text`&mdash;The note text.


</td>
</tr>
</tbody>
</table>



