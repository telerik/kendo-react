---
title: GridGroupableSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridGroupableSettings."
api_reference: true
type: inner_api
slug: api_grid_gridgroupablesettings
---

# GridGroupableSettings
The settings for grouping the data of the Grid ([see example](https://www.telerik.com/kendo-react-ui/components/grid/grouping/grouping)).


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


#### enabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if grouping by dragging and dropping the column headers is allowed and if the group header is visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridGroupExpandableSettings]({% slug api_grid_gridgroupexpandablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The group expandable settings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


"none" | "visible" | "always"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the group footer row is visible when the group is collapsed. Defaults to `none`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stickyFooters?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


When enabled, the group footer row sticks to the bottom of the scrollable area
so that it remains visible while scrolling through group data rows.
Requires the `footer` property to be set to `'always'` or `'visible'`.

```jsx
<Grid groupable={{ stickyFooters: true, footer: 'always' }} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### stickyHeaders?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


When enabled, the group header row sticks to the top of the scrollable area
so that it remains visible while scrolling through group data rows.

```jsx
<Grid groupable={{ stickyHeaders: true }} />
```






</td>
</tr>
</tbody>
</table>



