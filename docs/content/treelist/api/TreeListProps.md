---
title: TreeListProps
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the TreeListProps."
api_reference: true
type: inner_api
slug: api_treelist_treelistprops
---

# TreeListProps
Represents the props of the [KendoReact TreeList component](https://www.telerik.com/kendo-react-ui/components/treelist/get-started).


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


#### cellRender?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: "null" | ReactElement&lt;HTMLTableCellElement&gt;, props: [TreeListCellProps]({% slug api_treelist_treelistcellprops %})) => "null" | ReactElement&lt;HTMLTableCellElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered before a cell is rendered. Useful for customizing the cell rendering.


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


Adds custom CSS classes to the TreeList container element.

Example:
```jsx
<TreeList className="custom-treelist-class" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the column menu component to be used by the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuFilter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the composite filter descriptor for the column menu filter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


[TreeListColumnProps]({% slug api_treelist_treelistcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the columns of the TreeList using an array of `TreeListColumnProps`.

Example:
```jsx
<TreeList columns={[{ field: 'name', title: 'Name' }]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnVirtualization?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables column virtualization to improve performance by rendering only visible columns.

Example:
```jsx
<TreeList columnVirtualization={true} />
```


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


Provides the data to be displayed in the TreeList.

Example:
```jsx
<TreeList data={[{ id: 1, name: 'Item 1' }]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the unique key for each row in the TreeList. If not set, the row index is used.

Example:
```jsx
<TreeList dataItemKey="id" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the edit state of the current item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editRow?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TreeListRowProps]({% slug api_treelist_treelistrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set and when the data item is in edit mode, the `editRow` value will be rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the expanded state of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the current filter descriptors for the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterRow?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;FilterRowProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set, it will be rendered instead of the default `FilterRow` TreeList component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerCellRender?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: ReactNode, props: [TreeListHeaderCellProps]({% slug api_treelist_treelistheadercellprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered before a header cell is rendered. Useful for customizing the header cell rendering.


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


Specifies the `id` attribute of the TreeList container element.

Example:
```jsx
<TreeList id="treelist-component" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables keyboard navigation for the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### noRecords?


</td>
<td type class="table-cell-type">


<code>


React.ReactElement&lt;[TreeListNoRecordsProps]({% slug api_treelist_treelistnorecordsprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the component that will be rendered when the `data` property of the TreeList is empty or undefined.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnMenuFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListColumnMenuFilterChangeEvent]({% slug api_treelist_treelistcolumnmenufilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the column menu filter state changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnReorder?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListColumnReorderEvent]({% slug api_treelist_treelistcolumnreorderevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when columns are reordered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnResize?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListColumnResizeEvent]({% slug api_treelist_treelistcolumnresizeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when a column is resized.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataStateChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListDataStateChangeEvent]({% slug api_treelist_treelistdatastatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the data state changes. The event must be handled to apply the new state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListExpandChangeEvent]({% slug api_treelist_treelistexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user clicks on the expand or collapse icon of a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListFilterChangeEvent]({% slug api_treelist_treelistfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the filter state changes. The event must be handled to apply filtering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onHeaderSelectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListHeaderSelectionChangeEvent]({% slug api_treelist_treelistheaderselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user clicks the checkbox of a column header whose `field` matches `selectedField`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListItemChangeEvent]({% slug api_treelist_treelistitemchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user changes the values of the item.
The event is not debounced and fires on every `onChange` event of the input in the current `EditCell`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListKeyDownEvent]({% slug api_treelist_treelistkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user presses a keyboard key.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListPageChangeEvent]({% slug api_treelist_treelistpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the page state changes. The event must be handled to apply paging.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowClick?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowClickEvent]({% slug api_treelist_treelistrowclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user clicks a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowContextMenu?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowContextMenuEvent]({% slug api_treelist_treelistrowcontextmenuevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user opens the context menu of a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowDoubleClickEvent]({% slug api_treelist_treelistrowdoubleclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user double clicks a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowDrag?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowDragEvent]({% slug api_treelist_treelistrowdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when a row is dragged.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowDrop?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListRowDragEvent]({% slug api_treelist_treelistrowdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when a row is dragged and dropped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListSelectionChangeEvent]({% slug api_treelist_treelistselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user selects or deselects a row or cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeListSortChangeEvent]({% slug api_treelist_treelistsortchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the sorting state changes. The event must be handled to apply sorting.

Example:
```jsx
<TreeList onSortChange={(event) => console.log(event.sort)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pager?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the pager component to be used by the TreeList.


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




</td>
<td class="table-cell-comment">


Enables column reordering by dragging their header cells.


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




</td>
<td class="table-cell-comment">


Enables column resizing by dragging the edges of their header cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### row?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TreeListRowProps]({% slug api_treelist_treelistrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the row component to be used by the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowDraggable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables row dragging and dropping.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the height of each row in the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowRender?


</td>
<td type class="table-cell-type">


<code>


(row: ReactElement&lt;HTMLTableRowElement&gt;, props: [TreeListRowProps]({% slug api_treelist_treelistrowprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered before a row is rendered. Useful for customizing the row rendering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollable?


</td>
<td type class="table-cell-type">


<code>


[ScrollMode]({% slug api_treelist_scrollmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the scroll mode of the TreeList.

The available options are:
- `none`&mdash;Renders no scrollbar.
- `scrollable`&mdash;Represents the default scroll mode of the TreeList.
Requires you to set the `overflow` and `height` (for vertical scrolling),
or `width` (for horizontal scrolling) styles.
- `virtual`&mdash;Enables the vertical virtual scrolling of the TreeList.
Requires you to set the `overflow` and `height` styles and `rowHeight` prop of the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectable?


</td>
<td type class="table-cell-type">


<code>


[TreeListSelectableSettings]({% slug api_treelist_treelistselectablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the selection settings for the TreeList.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation of the selected state of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the number of records to be skipped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the current sorting descriptors for the TreeList.

Example:
```jsx
<TreeList sort={[{ field: 'name', dir: 'asc' }]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


SortSettings


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables sorting functionality for the TreeList.

Example:
```jsx
<TreeList sortable={{ mode: 'single', allowUnsort: true }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `style` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subItemsField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide an array representation of the item subitems.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tableProps?


</td>
<td type class="table-cell-type">


<code>


React.DetailedHTMLProps&lt;TableHTMLAttributes&lt;HTMLTableElement&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A props object that will be passed to the underlying HTML table.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### take?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the number of records to be taken.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbar?


</td>
<td type class="table-cell-type">


<code>


React.ReactElement&lt;[TreeListToolbarProps]({% slug api_treelist_treelisttoolbarprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TreeList toolbar component.


</td>
</tr>
</tbody>
</table>



