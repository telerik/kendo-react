---
title: GridScrollableSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridScrollableSettings."
api_reference: true
type: inner_api
slug: api_grid_gridscrollablesettings
---

# GridScrollableSettings
Defines the scrollable settings for the Grid.


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


#### mode?


</td>
<td type class="table-cell-type">


<code>


[ScrollMode]({% slug api_grid_scrollmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the scroll mode.

The available options are:
- `none`&mdash;Renders no scrollbar.
- `scrollable`&mdash;Default scroll mode. Requires the `height` option.
- `virtual`&mdash;Renders a portion of the data while the user scrolls.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollbar?


</td>
<td type class="table-cell-type">


<code>


"default" | "proxied"


</code>


</td>
<td class="table-cell-default">


<code>


'default'


</code>


</td>
<td class="table-cell-comment">


Controls the scrollbar rendering style.

- `default`&mdash;Uses the native browser scrollbar (default).
- `proxied`&mdash;Renders a custom overlay scrollbar on top of the content area.
  The overlay appears on hover or scroll and hides when idle,
  eliminating the white-space flash during virtual scrolling jumps.





</td>
</tr>
</tbody>
</table>



