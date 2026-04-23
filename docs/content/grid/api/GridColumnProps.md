---
title: GridColumnProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnprops
---

# GridColumnProps
The props of the GridColumn component.


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


#### cells?


</td>
<td type class="table-cell-type">


<code>


[GridCellsSettings]({% slug api_grid_gridcellssettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a set of cell components that the Grid will render instead of the built-in cell.

```jsx
<GridColumn cells={{ data: CustomDataCell }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


[GridColumnProps]({% slug api_grid_gridcolumnprops %})[] | ReactElement&lt;[GridColumnProps]({% slug api_grid_gridcolumnprops %})&gt;[] | [GridColumnChildrenProps]({% slug api_grid_gridcolumnchildrenprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of child columns.

```jsx
<GridColumn>
  <GridColumn field="child1" />
  <GridColumn field="child2" />
</GridColumn>
```



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


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number | (colSpanProps: [GridColSpanProps]({% slug api_grid_gridcolspanprops %})) => number


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


Sets the colSpan of the column which will make the row content span over multiple cells.
As arguments, it takes either a number or a function that returns a number.

```jsx
<GridColumn colSpan={2} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[GridColumnMenuProps]({% slug api_grid_gridcolumnmenuprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a React element that will be cloned and rendered inside the column menu of the Grid ([see example](https://www.telerik.com/kendo-react-ui/components/grid/columns/column-menu#toc-basic-usage)).

```jsx
<GridColumn columnMenu={CustomColumnMenu} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnType?


</td>
<td type class="table-cell-type">


<code>


[GridColumnType]({% slug api_grid_gridcolumntype %})


</code>


</td>
<td class="table-cell-default">


<code>


"data"


</code>


</td>
<td class="table-cell-comment">


Sets the type of the column and renders a dedicated column for interaction.

```jsx
<GridColumn columnType="checkbox" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### contextMenu?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridContextMenuOptions]({% slug api_grid_gridcontextmenuoptions %}) | (options: [GridCellBaseOptions]({% slug api_grid_gridcellbaseoptions %})) => boolean | [GridContextMenuOptions]({% slug api_grid_gridcontextmenuoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the context menu settings that will be applied to the column.

```jsx
<GridColumn contextMenu={{ enabled: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### disableReorder?


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


Disables the ability to reorder when another column is dragged over it or tried to be reordered with keyboard.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines whether the column is editable ([more information and examples](https://www.telerik.com/kendo-react-ui/components/grid/editing/editing-inline)).

```jsx
<GridColumn editable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editor?


</td>
<td type class="table-cell-type">


<code>


[GridDataType]({% slug api_grid_griddatatype %})


</code>


</td>
<td class="table-cell-default">


<code>


'text'


</code>


</td>
<td class="table-cell-comment">


Defines the editor type. Used when the column enters the edit mode ([more information and examples](https://www.telerik.com/kendo-react-ui/components/grid/editing/editing-inline)).

```jsx
<GridColumn editor="date" />
```






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


[GridDataType]({% slug api_grid_griddatatype %})


</code>


</td>
<td class="table-cell-default">


<code>


'text'


</code>


</td>
<td class="table-cell-comment">


Defines the filter type that will be rendered inside the filter row.

```jsx
<GridColumn filter="numeric" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


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


Defines if a filter UI will be rendered for this column.

```jsx
<GridColumn filterable={false} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the title which will be set to the input element in the filter cell.

```jsx
<GridColumn filterTitle="Custom Filter Title" />
```



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


#### groupable?


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


Determines if the column can be dragged to the group panel.

```jsx
<GridColumn groupable={false} />
```






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


#### hidden?


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


Controls the visibility of the Grid's column.

```jsx
<GridColumn hidden={true} />
```






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


<code>


false


</code>


</td>
<td class="table-cell-comment">


Defines if the column is locked (frozen or sticky).
Locked columns are the columns that are visible at all times while the user scrolls the component horizontally.

```jsx
<GridColumn locked={true} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum width of the column (in pixels).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### media?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the screen size condition that needs to be satisfied for a column to remain visible. If you set the hidden property, the behavior of media is overridden.

```jsx
<GridColumn media="(min-width: 600px)" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### menuIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default (three vertical dots) column menu icon or the icon set through the ([`columnMenuIcon`](https://www.telerik.com/kendo-react-ui/components/grid/api/gridprops#toc-columnmenuicon)) property.

```jsx
<GridColumn menuIcon={CustomIcon} />
```



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




</td>
<td class="table-cell-comment">


**Deprecated**: Use the `minWidth` property instead. The `minResizableWidth` property will be removed in a future version.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### minWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the minimum width of the column (in pixels).


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


#### rowSpannable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridRowSpannableSettings]({% slug api_grid_gridrowspannablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the cells of the column should be spanned when their values are the same.

```jsx
<GridColumn rowSpannable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridColumnSortSettings]({% slug api_grid_gridcolumnsortsettings %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Allows the column headers to be clicked and the `sortChange` event emitted.
You have to handle the `sortChange` event yourself and sort the data.

```jsx
<GridColumn sortable={true} />
```






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


#### validator?


</td>
<td type class="table-cell-type">


<code>


FieldValidatorType | FieldValidatorType[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The validation method for the edit field when editting is in mode `dialog`.

The method arguments are:

* value - The current value of the field.
* valueGetter - Function which can be used to get other fields value.
Usable when validator depends on more than one field. Supports field paths.
* fieldProps - Props of the Field component. Currently contains only the `name` prop.
Usable when one validator is used across multiple fields.

Returns `string` to signify error or `undefined` to signify validation success.


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



