---
title: ChartValueAxisNotesProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartValueAxisNotesProps."
api_reference: true
type: inner_api
slug: api_charts_chartvalueaxisnotesprops
---

# ChartValueAxisNotesProps
Represents the props of the KendoReact ChartValueAxisNotes component.


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


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The child components of the ChartValueAxisNotes. Supported child components are: ChartValueAxisNotesIcon and ChartValueAxisNotesLabel.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The items of the notes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


ValueAxisNotesIcon


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


ValueAxisNotesLabel


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


#### position?


</td>
<td type class="table-cell-type">


<code>


[NotePosition]({% slug api_charts_noteposition %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The position of the value axis note.

The supported values are:
- `"top"`&mdash;The note is positioned on the top.
- `"bottom"`&mdash;The note is positioned on the bottom.
- `"left"`&mdash;The note is positioned on the left.
- `"right"`&mdash;The note is positioned on the right.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [AxisNoteVisualArgs]({% slug api_charts_axisnotevisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for creating custom visuals for the notes.

The available argument fields are:
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines the note target rect.
- `options`&mdash;The note options.
- `createVisual`&mdash;A function that can be used to get the default visual.
- `value`&mdash;The note value.


</td>
</tr>
</tbody>
</table>



