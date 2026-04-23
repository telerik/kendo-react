---
title: SplitterOnChangeEvent
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the SplitterOnChangeEvent."
api_reference: true
type: inner_api
slug: api_layout_splitteronchangeevent
---

# SplitterOnChangeEvent
Represents the onChange event of the Splitter.


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


#### isLast


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if is the last event during drag. Can be used to optimize performance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### newState


</td>
<td type class="table-cell-type">


<code>


[SplitterPaneProps]({% slug api_layout_splitterpaneprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new panes state.


</td>
</tr>
</tbody>
</table>



