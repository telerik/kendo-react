---
title: GridProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridProps."
api_reference: true
type: inner_api
slug: api_grid_gridprops
---

# GridProps
Represents the props of the [KendoReact Grid component](https://www.telerik.com/kendo-react-ui/components/grid).


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


#### adaptive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Providing different rendering of the popup element based on the screen dimensions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as title in the adaptive popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoProcessData?


</td>
<td type class="table-cell-type">


<code>


boolean | { filter?: boolean; group?: boolean; page?: boolean; search?: boolean; sort?: boolean; }


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Enables data-processing inside the GridComponent based on its state.
Provides an easy, built-in way to handle data operations like sorting, filtering, grouping, and paging.




```jsx
<Grid
  autoProcessData={{
    filter: true,
    search: true,
    sort: true,
    group: true,
    page: true
  }}
/>
```



</td>
</tr>
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


Defines a set of custom cell components that the Grid will render instead of the default cells.

```jsx
import { GridCustomCellProps } from '@progress/kendo-react-grid';

const CustomCell = (props: GridCustomCellProps) => (
  <td {...props.tdProps}>
    {props.dataItem[props.field]}
  </td>
);

<Grid
  cells={{
    data: CustomCell
  }}
/>
```



</td>
</tr>
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


Determines the children nodes.


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


Sets a class for the Grid DOM element.

```jsx
<Grid className="custom-grid-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### clipboard?


</td>
<td type class="table-cell-type">


<code>


boolean | ClipboardSettings


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables clipboard copy, cut, and paste manipulations. Accepts `ClipboardSettings` or a boolean value.

```jsx
<Grid clipboard={true}  />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


"null" | ComponentType&lt;[GridColumnMenuProps]({% slug api_grid_gridcolumnmenuprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a React element that will be cloned and rendered inside the column menu of the Grid.

```jsx
<Grid columnMenu={() => <div>Custom Column Menu</div>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Globally overrides the default (three vertical dots) column menu icon for the whole Grid. If set, the prop can be overridden on column level
 using the ([menuIcon](https://www.telerik.com/kendo-react-ui/components/grid/api/gridcolumnprops#toc-menuicon)) property.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnsState?


</td>
<td type class="table-cell-type">


<code>


[GridColumnState]({% slug api_grid_gridcolumnstate %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of column states of the grid.

```jsx
<Grid columnsState={[{ field: 'ProductName', locked: true }]} />
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


Enables virtualization of the columns. If virtualization is enabled, the columns outside the view are not rendered.

```jsx
<Grid columnVirtualization={true} />
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


Specifies the context menu settings applied to the Grid.

```jsx
<Grid contextMenu={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### csv?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridCSVExportOptions]({% slug api_grid_gridcsvexportoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables CSV export functionality when set to `true` or provides CSV export configuration options.

```jsx
<Grid csv={true} />
```


```jsx
<Grid csv={{ delimiter: ';', includeUTF8BOM: true, preventFormulaInjection: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


"null" | any[] | DataResult


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the Grid ([see example](https://www.telerik.com/kendo-react-ui/components/grid/paging)). If you use paging, the `data` option has to contain only the items for the current page. It takes values of type null, any or [DataResult](https://www.telerik.com/kendo-react-ui/components/datatools/api/dataresult)
Accepts values of type `null`, `any[]`, or `DataResult`.

```jsx
<Grid data={data} />
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


Sets the Grid row key prop to the value of this field in the dataItem.
If not set, the dataItem index will be used for the row key, which might lead to rows not updating during paging or scrolling.

```jsx
<Grid dataItemKey="ID" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataLayoutMode?


</td>
<td type class="table-cell-type">


<code>


[GridDataLayoutMode]({% slug api_grid_griddatalayoutmode %})


</code>


</td>
<td class="table-cell-default">


<code>


"columns"


</code>


</td>
<td class="table-cell-comment">


Specifies the data layout mode for the Grid.

- `"columns"`: Traditional column-based table layout (default).
- `"stacked"`: Card-based layout where each row displays as a vertical
  stack of field label/value pairs. Useful for responsive layouts
  and mobile devices.

The stacked mode is independent of `adaptiveMode` and can be used separately.

> Note: Row/column spanning is not supported in stacked mode.




```tsx
// Traditional column layout (default)
<Grid dataLayoutMode="columns" data={data}>
  <GridColumn field="name" title="Name" />
  <GridColumn field="email" title="Email" />
</Grid>

// Stacked card layout
<Grid dataLayoutMode="stacked" data={data}>
  <GridColumn field="name" title="Name" />
  <GridColumn field="email" title="Email" />
</Grid>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultColumnsState?


</td>
<td type class="table-cell-type">


<code>


[GridColumnState]({% slug api_grid_gridcolumnstate %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default columns state, used only for the initial load.

```jsx
<Grid defaultColumnsState={[{ field: 'ProductName', locked: false }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultDetailExpand?


</td>
<td type class="table-cell-type">


<code>


DetailExpandDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `detailExpand` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultDetailExpand={{ ['item-data-key-id']: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultEdit?


</td>
<td type class="table-cell-type">


<code>


EditDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `edit` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultEdit={{ ['item-data-key-id']: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultFilter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `filter` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultFilter={{ logic: 'and', filters: [{ field: 'name', operator: 'contains', value: 'John' }] }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultGroup?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `group` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultGroup={[{ field: 'CategoryName' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultGroupExpand?


</td>
<td type class="table-cell-type">


<code>


GroupExpandDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `groupExpand` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultGroupExpand={[{ field: 'CategoryName', expanded: true }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultPinnedBottomRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `pinnedBottomRows` state applied to the Grid when using uncontrolled mode.
Requires `pinnable={true}`.

```tsx
<Grid pinnable={true} defaultPinnedBottomRows={[products[9]]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultPinnedTopRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `pinnedTopRows` state applied to the Grid when using uncontrolled mode.
Requires `pinnable={true}`.

```tsx
<Grid pinnable={true} defaultPinnedTopRows={[products[0]]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSearch?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the data is searched by default. Its first FilterDescriptor populates the GridSearchBox.

```jsx
<Grid defaultSearch={{ logic: 'or', filters: [{ field: 'category', operator: 'eq', value: 'electronics' }] }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSelect?


</td>
<td type class="table-cell-type">


<code>


SelectDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `select` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultSelect={{ ['item-data-key-id']: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSkip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `skip` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultSkip={10} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `sort` state applied to the Grid when using uncontrolled mode.
([see example](https://www.telerik.com/kendo-react-ui/components/grid/sorting))

```jsx
<Grid defaultSort={[{ field: 'name', dir: 'asc' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultTake?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default `take` state applied to the Grid when using uncontrolled mode.

```jsx
<Grid defaultTake={20} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### detail?


</td>
<td type class="table-cell-type">


<code>


"null" | ComponentType&lt;[GridDetailRowProps]({% slug api_grid_griddetailrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a React element that will be cloned and rendered inside the detail rows of the currently expanded items ([see example](https://www.telerik.com/kendo-react-ui/components/grid/hierarchy)).

```jsx
<Grid detail={()=>(<div>Detail Content</div>)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### detailExpand?


</td>
<td type class="table-cell-type">


<code>


DetailExpandDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the detail row is expanded.

```jsx
<Grid detailExpand={{ ['item-data-key-id']: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### detailRowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the detail row height and forces an equal height to all detail rows.

```jsx
<Grid detailRowHeight={100} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### edit?


</td>
<td type class="table-cell-type">


<code>


EditDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the in-edit mode of an item is defined.

```jsx
<Grid edit={{ ['item-data-key-id']: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridEditableSettings]({% slug api_grid_grideditablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Grid editable settings.

```jsx
<Grid editable={{ enabled: true, mode: 'inline' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editDialog?


</td>
<td type class="table-cell-type">


<code>


(props: [GridEditDialogProps]({% slug api_grid_grideditdialogprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom edit dialog component that the Grid will render instead of the built-in edit dialog.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The [descriptor](https://www.telerik.com/kendo-react-ui/components/datatools/api/compositefilterdescriptor) by which
the data is filtered ([more information and examples](https://www.telerik.com/kendo-react-ui/components/grid/filtering)). This affects
the values and buttons in the `FilterRow` of the Grid.

```jsx
<Grid filter={{ logic: 'and', filters: [{ field: 'name', operator: 'contains', value: 'John' }] }} />
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




</td>
<td class="table-cell-comment">


Enables filtering for the columns with their `field` option set.

```jsx
<Grid filterable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterOperators?


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperators]({% slug api_grid_gridfilteroperators %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filter operators for the Grid filters.

```jsx
<Grid filterOperators={{ text: [{ text: 'grid.filterContainsOperator', operator: 'contains' }] }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fixedScroll?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the scroll position will be updated after a data change.
If set to `true`, the scroll will remain in the same position.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The [descriptors](https://www.telerik.com/kendo-react-ui/components/datatools/api/groupdescriptor)[] by which the data will be grouped
([more information and examples](https://www.telerik.com/kendo-react-ui/components/grid/grouping)).

```jsx
<Grid group={[{ field: 'CategoryName' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridGroupableSettings]({% slug api_grid_gridgroupablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if grouping by dragging and dropping the column headers is allowed ([more information and examples](https://www.telerik.com/kendo-react-ui/components/grid/grouping)).

```jsx
<Grid groupable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupExpand?


</td>
<td type class="table-cell-type">


<code>


GroupExpandDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the group is expanded.

```jsx
<Grid groupExpand={[{ field: 'CategoryName', expanded: true }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### highlight?


</td>
<td type class="table-cell-type">


<code>


[GridHighlightDescriptor]({% slug api_grid_gridhighlightdescriptor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the highlight state of an item is defined.
Passing a boolean value will highlight the whole row, while passing an object will highlight individual cells by their field.

```jsx
<Grid highlight={{ ['item-data-key-id']: true }} />
<Grid highlight={{ ['item-data-key-id']: [2, 3] }} />
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


Sets the `id` property of the top div element of the component.

```jsx
<Grid id="custom-grid-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### language?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the language of the Grid when used as a server component.
Have not effect when the Grid is used as a client component.

```jsx
<Grid language="en" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### loader?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that the Grid will render instead of the built-in loader.

```jsx
<Grid loader={<div>Custom Loader...</div>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### locale?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the locale of the Grid when used as a server component.
Have not effect when the Grid is used as a client component.

```jsx
<Grid locale="en-US" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### lockGroups?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the group descriptor columns are locked (frozen or sticky).
Locked columns are the columns that are visible at all times while the user scrolls the component horizontally.
Defaults to `false`.

```jsx
<Grid lockGroups={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean | NavigatableSettings


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the user can use dedicated shortcuts to interact with the Grid.
By default, navigation is disabled and the Grid content is accessible in the normal tab sequence.

```jsx
<Grid navigatable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClipboard?


</td>
<td type class="table-cell-type">


<code>


(event: GridClipboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when clipboard support is enabled, and one of the actions (e.g., copy) is triggered.
Accepts a `GridClipboardEvent` object.

```jsx
<Grid
  clipboard={true}
  onClipboard={(event) => console.log('Clipboard action:', event.action)}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnReorder?


</td>
<td type class="table-cell-type">


<code>


(event: [GridColumnReorderEvent]({% slug api_grid_gridcolumnreorderevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the columns are reordered.

```jsx
<Grid onColumnReorder={(event) => console.log('Column reordered:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnResize?


</td>
<td type class="table-cell-type">


<code>


(event: [GridColumnResizeEvent]({% slug api_grid_gridcolumnresizeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a column is resized. Only fired when the Grid is run as a client component.

```jsx
<Grid onColumnResize={(event) => console.log('Column resized:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnsStateChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridColumnsStateChangeEvent]({% slug api_grid_gridcolumnsstatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the columns state of the Grid is changed.

```jsx
<Grid onColumnsStateChange={(event) => console.log('Columns state changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextMenu?


</td>
<td type class="table-cell-type">


<code>


(event: [GridContextMenuEvent]({% slug api_grid_gridcontextmenuevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the ContextMenu is activated. Only fired when the Grid is run as a client component.

```jsx
<Grid onContextMenu={(event) => console.log('Context menu activated:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextMenuItemClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GridContextMenuItemClickEvent]({% slug api_grid_gridcontextmenuitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the ContextMenu item is clicked. Only fired when the Grid is run as a client component.

```jsx
<Grid onContextMenuItemClick={(event) => console.log('Context menu item clicked:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCsvExport?


</td>
<td type class="table-cell-type">


<code>


(data: any[]) => any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the CSV export button.
Allows custom data transformation before export.

```jsx
<Grid onCsvExport={(data) => {
    return data.filter(item => item.active);
}} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataStateChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridDataStateChangeEvent]({% slug api_grid_griddatastatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the data state of the Grid is changed ([more information](https://www.telerik.com/kendo-react-ui/components/grid/data-operations/local-operations) and [example](https://www.telerik.com/kendo-react-ui/components/grid/data-operations/odata-server-operations)).

```jsx
<Grid onDataStateChange={(event) => console.log('Data state changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDetailExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridDetailExpandChangeEvent]({% slug api_grid_griddetailexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user expands or collapses a detail row.

```jsx
<Grid onDetailExpandChange={(event) => console.log('Detail expand changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEditChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridEditChangeEvent]({% slug api_grid_grideditchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user enters or exits an in-edit mode of a row or cell.

```jsx
<Grid onEditChange={(event) => console.log('Edit changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridFilterChangeEvent]({% slug api_grid_gridfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Grid filter is modified through the UI. You must handle the event and filter the data.

```jsx
<Grid
  filterable={true}
  onFilterChange={(event) => console.log('Filter changed:', event.filter)}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onGroupChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridGroupChangeEvent]({% slug api_grid_gridgroupchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the grouping of the Grid is changed. You have to handle the event yourself and group the data
([more information and examples](https://www.telerik.com/kendo-react-ui/components/grid/grouping)).

```jsx
<Grid onGroupChange={(event) => console.log('Group changed:', event.group)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onGroupExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridGroupExpandChangeEvent]({% slug api_grid_gridgroupexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user expands or collapses a group.

```jsx
<Grid onGroupExpandChange={(event) => console.log('Group expand changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onHeaderSelectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridHeaderSelectionChangeEvent]({% slug api_grid_gridheaderselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the checkbox of a column header whose type is set to `checkbox`.

```jsx
<Grid onHeaderSelectionChange={(event) => console.log('Header selection changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onHighlightChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridHighlightChangeEvent]({% slug api_grid_gridhighlightchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Grid highlight is modified. You must handle the event and filter the data.

```jsx
<Grid
  onHighlightChange={(event) => console.log('Highlight changed:', event.highlight)}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridItemChangeEvent]({% slug api_grid_griditemchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user changes the values of the item.

```jsx
<Grid onItemChange={(event) => console.log('Item changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [GridKeyDownEvent]({% slug api_grid_gridkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user press keyboard key. Only fired when the Grid is run as a client component.

```jsx
<Grid onKeyDown={(event) => console.log('Key pressed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNavigationAction?


</td>
<td type class="table-cell-type">


<code>


(event: [GridNavigationActionEvent]({% slug api_grid_gridnavigationactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when Grid keyboard navigation position is changed. Only fired when the Grid is run as a client component.

```jsx
<Grid onNavigationAction={(event) => console.log('Navigation action:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridPageChangeEvent]({% slug api_grid_gridpagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the page of the Grid is changed.

```jsx
<Grid onPageChange={(event) => console.log('Page changed:', event.page)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPdfExport?


</td>
<td type class="table-cell-type">


<code>


(event: { target: HTMLDivElement; }) => Promise&lt;void&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the PDF export button.

```jsx

<Grid onPdfExport={async (event) => {
       const pdf = await import('@progress/kendo-react-pdf');
       await pdf.saveGridPDF(event.target);
 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRowClickEvent]({% slug api_grid_gridrowclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a row.

```jsx
<Grid onRowClick={(event) => console.log('Row clicked:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRowDoubleClickEvent]({% slug api_grid_gridrowdoubleclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user double clicks a row.

```jsx
<Grid onRowDoubleClick={(event) => console.log('Row double clicked:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowPinChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRowPinChangeEvent]({% slug api_grid_gridrowpinchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a row is pinned, unpinned, or moved between pinned zones.
Requires `pinnable={true}`.

```tsx
<Grid pinnable={true} onRowPinChange={(e) => {
  setPinnedTop(e.pinnedTopRows);
  setPinnedBottom(e.pinnedBottomRows);
}} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowReorder?


</td>
<td type class="table-cell-type">


<code>


(event: [GridRowReorderEvent]({% slug api_grid_gridrowreorderevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user reorders a row.

```jsx
<Grid onRowReorder={(event) => console.log('Row reordered:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onScroll?


</td>
<td type class="table-cell-type">


<code>


(event: [GridEvent]({% slug api_grid_gridevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when Grid is scrolled. Only fired when the Grid is run as a client component.

```jsx
<Grid onScroll={(event) => console.log('Grid scrolled:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSearchChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSearchChangeEvent]({% slug api_grid_gridsearchchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the search value of the GridSearchBox is changed.

```jsx
<Grid onSearchChange={(event) => console.log('Search changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSelectionChangeEvent]({% slug api_grid_gridselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user tries to select or deselect a row or cell.

```jsx
<Grid onSelectionChange={(event) => console.log('Selection changed:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GridSortChangeEvent]({% slug api_grid_gridsortchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the sorting of the Grid is changed. You must handle the event and sort the data.
([see example](https://www.telerik.com/kendo-react-ui/components/grid/sorting))

```jsx
<Grid
  sortable={true}
  onSortChange={(event) => console.log('Sort changed:', event.sort)}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridPagerSettings]({% slug api_grid_gridpagersettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the pager of the Grid. Accepts `GridPagerSettings` or a boolean value.([see example](https://www.telerik.com/kendo-react-ui/components/grid/paging))

The available options are:
- `buttonCount: Number`&mdash;Sets the maximum numeric buttons count before the buttons are collapsed.
- `info: Boolean`&mdash;Toggles the information about the current page and the total number of records.
- `type: PagerType`&mdash;Accepts the `numeric` (buttons with numbers) and `input` (input for typing the page number) values.
- `pageSizes: Boolean` or `Array<number>`&mdash;Shows a menu for selecting the page size.
- `pageSizeValue: String or Number`&mdash;Sets the selected value of the page size Dropdownlist. It is useful when the selected value could also be a string not only a number.
- `previousNext: Boolean`&mdash;Toggles the **Previous** and **Next** buttons.
- `navigatable: Boolean`&mdash;Defines if the pager will be navigatable.
- `responsive: Boolean`&mdash;Defines if the pager will be responsive. If true, hides the tools that do not fit to the available space.
- `adaptive: Boolean`&mdash;Providing different rendering of the page sizes select element based on the screen dimensions.
- `adaptiveTitle: String`&mdash;Specifies the text that is rendered as title in the adaptive page sizes select element.

```jsx
<Grid pageable={{ pageSizes: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pager?


</td>
<td type class="table-cell-type">


<code>


"null" | ComponentType&lt;PagerProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The pager component that the Grid will render instead of the built-in pager.
 It takes values of type null and ComponentType&lt;[PagerProps](https://www.telerik.com/kendo-react-ui/components/datatools/api/pagerprops)&gt

```jsx
<Grid pager={() => <div>Custom Pager</div>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the page size used by the Grid pager. Required for paging functionality.

```jsx
<Grid pageSize={10} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pdf?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridProps]({% slug api_grid_gridprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When set to true the Grid pdf export will be enabled.
If set to an object, the Grid will use the provided settings to export the PDF.

```jsx
<Grid pdf={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the row pinning feature.
When `false` or omitted, the row pinning feature is inactive.

```tsx
<Grid pinnable={true} pinnedTopRows={pinnedTop} onRowPinChange={handlePinChange} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedBottomRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of data items pinned to the bottom of the Grid.
Pinned rows remain visible while the body scrolls and are immune to filtering and pagination.
Requires `pinnable={true}`.

```tsx
<Grid pinnable={true} pinnedBottomRows={[products[9]]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedTopRows?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of data items pinned to the top of the Grid.
Pinned rows remain visible while the body scrolls and are immune to filtering and pagination.
Requires `pinnable={true}`.

```tsx
<Grid pinnable={true} pinnedTopRows={[products[0], products[1]]} />
```



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


If set to `true`, the user can reorder columns by dragging their header cells ([see example](https://www.telerik.com/kendo-react-ui/components/grid/columns/reordering)).

```jsx
<Grid reorderable={true} />
```



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


If set to `true`, the user can resize columns by dragging the edges (resize handles) of their header cells ([see example](https://www.telerik.com/kendo-react-ui/components/grid/columns/resizing)).

```jsx
<Grid resizable={true} />
```



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


Defines the row height and forces an equal height to all rows ([see example](https://www.telerik.com/kendo-react-ui/components/grid/scroll-modes)).

```jsx
<Grid rowHeight={50} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowReorderable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridRowReorderSettings]({% slug api_grid_gridrowreordersettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the row reorder settings.

```jsx
<Grid rowReorderable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


[GridRowsSettings]({% slug api_grid_gridrowssettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">




```jsx
import { GridCustomRowProps } from '@progress/kendo-react-grid';

const CustomRow = (props: GridCustomRowProps) => (
  <tr {...props.trProps} style={{ backgroundColor: props.dataItem?.highlight ? 'yellow' : 'white' }}>
    {props.children}
  </tr>
);

<Grid
  rows={{
    data: CustomRow
  }}
/>
```



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


Enables the built-in row span feature of the Grid.

```jsx
<Grid rowSpannable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollable?


</td>
<td type class="table-cell-type">


<code>


[ScrollMode]({% slug api_grid_scrollmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the scroll mode that is used by the Grid ([see example](https://www.telerik.com/kendo-react-ui/components/grid/scroll-modes)).

 The available options are:
 - `none`&mdash;Renders no scrollbar.
 - `scrollable`&mdash;This is the default scroll mode. It requires the setting of the `height` option.
 - `virtual`&mdash;Displays no pager and renders a portion of the data (optimized rendering) while the user is scrolling the content.

```jsx
<Grid scrollable="virtual" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### search?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptor by which the data is searched. Its first FilterDescriptor populates the GridSearchBox.

```jsx
<Grid search={{ logic: 'and', filters: [{ field: 'name', operator: 'contains', value: 'test' }] }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### searchFields?


</td>
<td type class="table-cell-type">


<code>


string | SearchField[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the fields of the data that are filtered by the GridSearchBox.

```jsx
<Grid searchFields={['name', 'category']} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


SelectDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The [descriptor](https://www.telerik.com/kendo-react-ui/components/datatools/api/selectdescriptor) by which the selected state of an item is defined.
Passing a boolean value will select the whole row, while passing an array of strings will select individual.

```jsx
<Grid select={{ ['item-data-key-id']: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridSelectableSettings]({% slug api_grid_gridselectablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Grid selectable settings.

```jsx
<Grid selectable={{ enabled: true, mode: 'single' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### showLoader?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the loader of the Grid will be displayed.

```jsx
<Grid
  showLoader={true}
  loader={<div>Loading...</div>}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Grid.

The available options are:
- small
- medium




```jsx
<Grid size="small" />
```



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


Defines the number of records that will be skipped by the pager ([see example](https://www.telerik.com/kendo-react-ui/components/grid/paging)). Required by the paging functionality.

```jsx
<Grid skip={10} />
```



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


The ([descriptors](https://www.telerik.com/kendo-react-ui/components/datatools/api/sortdescriptor)) by which the data is sorted. Applies the sorting styles and buttons to the affected columns.

```jsx
<Grid sort={[{ field: 'name', dir: 'asc' }]} />
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


Enables sorting for the columns with their `field` option set.
([see example](https://www.telerik.com/kendo-react-ui/components/grid/sorting))

```jsx
<Grid sortable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### stackedLayoutSettings?


</td>
<td type class="table-cell-type">


<code>


[GridStackedLayoutSettings]({% slug api_grid_gridstackedlayoutsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configuration for the stacked layout mode.
Only applicable when `dataLayoutMode="stacked"`.

The `cols` property defines how stacked cells are arranged:
- As a number: Creates that many equal-width columns
- As an array: The length defines column count, values define widths

```tsx
// Two-column stacked layout with equal widths
<Grid
  dataLayoutMode="stacked"
  stackedLayoutSettings={{ cols: 2 }}
  data={data}
>
  <GridColumn field="name" title="Name" />
  <GridColumn field="email" title="Email" />
</Grid>

// Three columns with custom widths using fr units
<Grid
  dataLayoutMode="stacked"
  stackedLayoutSettings={{ cols: ['1fr', '2fr', '1fr'] }}
  data={data}
>
  ...
</Grid>

// Custom widths with pixel and fraction units
<Grid
  dataLayoutMode="stacked"
  stackedLayoutSettings={{ cols: [{ width: 200 }, { width: '1fr' }] }}
  data={data}
>
  ...
</Grid>
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

```jsx
<Grid style={{ backgroundColor: 'lightblue' }} />
```



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


Alias for the `pageSize` property. If `take` is set, `pageSize` will be ignored.

```jsx
<Grid take={20} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### total?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the total number of data items in all pages. Required for paging functionality.

```jsx
<Grid total={100} />
```



</td>
</tr>
</tbody>
</table>



