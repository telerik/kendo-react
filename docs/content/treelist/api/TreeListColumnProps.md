---
title: TreeListColumnProps
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the TreeListColumnProps."
api_reference: true
type: inner_api
slug: api_treelist_treelistcolumnprops
---

# TreeListColumnProps
The props of the columns of the TreeList component.


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


#### cell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TreeListCellProps]({% slug api_treelist_treelistcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a cell. If not set, a `TreeListCell` will be rendered by default.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


[TreeListColumnProps]({% slug api_treelist_treelistcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of child columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom CSS classes on the column cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ColumnMenuProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column menu component. Pass the [ColumnMenuTextColumn](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnmenutextcolumn),
[ColumnMenuNumericColumn](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnmenunumericcolumn),
[ColumnMenuDateColumn](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnmenudatecolumn),
[ColumnMenuBooleanColumn](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnmenubooleancolumn)
or a custom component base on the type of the column data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TreeListCellProps]({% slug api_treelist_treelistcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as an edit cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the column will render the icons that are used for expanding and collapsing child rows.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data field that the column binds to.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TreeListFilterCellProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


**Deprecated**. Use `filterCell` prop instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TreeListFilterCellProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a filter cell.


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


Applies a format to the value before display.
Takes the `{0:format}` form where `format` is a standard number format, a custom number format,
a standard date format, or a custom date format. For more information on supported formats see the
[kendo-intl](https://github.com/telerik/kendo-intl/blob/develop/docs/index.md) documentation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TreeListHeaderCellProps]({% slug api_treelist_treelistheadercellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a header cell.
If not set, a `TreeListHeaderCell` will be rendered by default.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom CSS classes on the header cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerSelectionValue?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates that the header selection checkbox is checked when `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the column id for distinguishing columns (multi header, resize, or keyboard navigation scenarios).
Also used as the unique key for rendering cells. If not set, a unique id is generated.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### locked?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the column is locked (frozen or sticky).
Locked columns are the columns that are visible at all times while the user scrolls the component horizontally.
Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minResizableWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


10


</code>


</td>
<td class="table-cell-comment">


Sets the minimum resize width (in pixels).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### orderIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Determines the column position. Smaller `orderIndex` values render first.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### reorderable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Enables column reordering when `true`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Enables column resizing when `true`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


boolean | ColumnSortSettings


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Enables header click to emit the `sortChange` event. Handle `sortChange` to sort the data.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the column header text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the width of the column (in pixels).


</td>
</tr>
</tbody>
</table>



