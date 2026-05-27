---
title: GridWebMcpToolsHelpers
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridWebMcpToolsHelpers."
api_reference: true
type: inner_api
slug: api_grid_gridwebmcptoolshelpers
---

# GridWebMcpToolsHelpers
Helpers passed to the `tools` callback.


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


#### columns


</td>
<td type class="table-cell-type">


<code>


{ field: string; id: string; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column metadata extracted from GridColumn children.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current grid data (visible rows).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tname


</td>
<td type class="table-cell-type">


<code>


(suffix: string) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Generates a prefixed tool name: `{groupName}_{suffix}`.


</td>
</tr>
</tbody>
</table>



