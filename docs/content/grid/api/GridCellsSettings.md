---
title: GridCellsSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridCellsSettings."
api_reference: true
type: inner_api
slug: api_grid_gridcellssettings
---

# GridCellsSettings
The settings of the cells prop options.


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


ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the data cell in table layout mode.

```tsx
import { MyDataCell } from './MyDataCell';
<Grid cells={{ data: MyDataCell }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### edit?


</td>
<td type class="table-cell-type">


<code>


{ boolean?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; date?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; numeric?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; text?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for edit columns.

```tsx
import { MyTextEditCell } from './MyTextEditCell';
<Grid cells={{ edit: { text: MyTextEditCell } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterCell?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomFilterCellProps]({% slug api_grid_gridcustomfiltercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the filter cell.

```tsx
import { MyFilterCell } from './MyFilterCell';
<Grid cells={{ filterCell: MyFilterCell }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### footerCell?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomFooterCellProps]({% slug api_grid_gridcustomfootercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the footer cell.

```tsx
import { MyFooterCell } from './MyFooterCell';
<Grid cells={{ footerCell: MyFooterCell }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


{ data?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for group columns.

```tsx
import { MyGroupDataCell } from './MyGroupDataCell';
<Grid cells={{ group: { data: MyGroupDataCell } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupFooter?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the group footer cell.

```tsx
import { MyGroupFooterCell } from './MyGroupFooterCell';
<Grid cells={{ groupFooter: MyGroupFooterCell }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupHeader?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the group header cell.

```tsx
import { MyGroupHeaderCell } from './MyGroupHeaderCell';
<Grid cells={{ groupHeader: MyGroupHeaderCell }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCell?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridCustomHeaderCellProps]({% slug api_grid_gridcustomheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the header cell.

```tsx
import { MyHeaderCell } from './MyHeaderCell';
<Grid cells={{ headerCell: MyHeaderCell }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### hierarchy?


</td>
<td type class="table-cell-type">


<code>


{ data?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for hierarchy columns.

```tsx
import { MyHierarchyDataCell } from './MyHierarchyDataCell';
<Grid cells={{ hierarchy: { data: MyHierarchyDataCell } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pin?


</td>
<td type class="table-cell-type">


<code>


{ data?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for pin columns.

```tsx
import { MyPinDataCell } from './MyPinDataCell';
<Grid cells={{ pin: { data: MyPinDataCell } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


{ data?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupFooter?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for selection columns.

```tsx
import { MySelectDataCell } from './MySelectDataCell';
<Grid cells={{ select: { data: MySelectDataCell } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### stackedData?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;GridStackedCustomCellProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom component for rendering the data cell in stacked layout mode.
When both `stackedData` and `data` are provided, `stackedData` takes precedence in stacked layout.

```tsx
import { MyStackedDataCell } from './MyStackedDataCell';
<Grid
  stackedLayout={{ enabled: true }}
  cells={{ stackedData: MyStackedDataCell }}
/>
```



</td>
</tr>
</tbody>
</table>



