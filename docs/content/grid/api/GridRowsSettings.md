---
title: GridRowsSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridRowsSettings."
api_reference: true
type: inner_api
slug: api_grid_gridrowssettings
---

# GridRowsSettings
The settings of the rows prop options.


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


#### data?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomRowProps]({% slug api_grid_gridcustomrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the data row.

```tsx
import { MyDataRow } from './MyDataRow';
<Grid rows={{ data: MyDataRow }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupFooter?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomRowProps]({% slug api_grid_gridcustomrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the group footer row.

```tsx
import { MyGroupFooterRow } from './MyGroupFooterRow';
<Grid rows={{ groupFooter: MyGroupFooterRow }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupHeader?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomRowProps]({% slug api_grid_gridcustomrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the group header row.

```tsx
import { MyGroupHeaderRow } from './MyGroupHeaderRow';
<Grid rows={{ groupHeader: MyGroupHeaderRow }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedData?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomRowProps]({% slug api_grid_gridcustomrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering pinned data rows.
Falls back to `rows.data` (then default) when omitted.

```tsx
import { MyPinnedRow } from './MyPinnedRow';
<Grid rows={{ pinnedData: MyPinnedRow }} />
```



</td>
</tr>
</tbody>
</table>



