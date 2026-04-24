---
title: TreeViewProps
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the TreeViewProps."
api_reference: true
type: inner_api
slug: api_treeview_treeviewprops
---

# TreeViewProps
Represents the props of the [KendoReact TreeView component](https://www.telerik.com/kendo-react-ui/components/treeview).


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


#### animate?


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


Enables or disables the expand and collapse animations.




```jsx
<TreeView animate={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### aria-label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a string value that labels the TreeView ([more on accessibility by the TreeView](https://www.telerik.com/kendo-react-ui/components/treeview/accessibility/wai-aria-support)).

Example:
```jsx
<TreeView aria-label="TreeView Label" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### aria-labelledby?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element or elements which will label the TreeView ([more on accessibility by the TreeView](https://www.telerik.com/kendo-react-ui/components/treeview/accessibility/wai-aria-support)).

Example:
```jsx
<TreeView aria-labelledby="treeview-label" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### aria-multiselectable?


</td>
<td type class="table-cell-type">


<code>


boolean | "false" | "true"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates that the user can select more than one TreeView items.
If the TreeView is in a multiple selection mode, set the `aria-multiselectable`
prop to `true` ([more on accessibility by the TreeView](https://www.telerik.com/kendo-react-ui/components/treeview/accessibility/wai-aria-support)).

Example:
```jsx
<TreeView aria-multiselectable={true} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkboxes?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the rendering of checkboxes. By default, the checkboxes are not rendered.

Example:
```jsx
<TreeView checkboxes={true} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"checked"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the checked state of the item.




```jsx
<TreeView checkField="isChecked" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkIndeterminateField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"checkIndeterminate"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the check indeterminate state of the item.




```jsx
<TreeView checkIndeterminateField="isPartiallyChecked" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### childrenField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"items"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide an array representation of the item children.




```jsx
<TreeView childrenField="subItems" />
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


Adds a custom CSS class to the TreeView container element.

Example:
```jsx
<TreeView className="custom-treeview-class" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


"null" | any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the hierarchical data to be displayed in the TreeView.

Example:
```jsx
<TreeView data={[{ text: 'Item 1', items: [{ text: 'Sub-item 1' }] }]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the direction of the component.

Example:
```jsx
<TreeView dir="rtl" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disableField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"disabled"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the disabled state of the item.




```jsx
<TreeView disableField="isDisabled" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### draggable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the dispatching of the `drag` events. By default, the `drag` events are not dispatched ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/drag-drop)).


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


<code>


"expanded"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the expanded state of the item.




```jsx
<TreeView expandField="isExpanded" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandIcons?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the rendering of the expand (collapse) icons. By default, the icons are not rendered ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/expansion/update-expanded-items)).

Example:
```jsx
<TreeView expandIcons={true} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusIdField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The TreeView has a built-in implementation of focusing and keyboard navigation. By default, the component uses
hierarchical indices to uniquely match the focused item. You can use the `focusIdField` prop for specifying the
 name of the field which will uniquely describe an
 item as an alternative to its hierarchical index ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/data-reload#toc-using-item-ids)).

Example:
```jsx
<TreeView focusIdField="id" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### getFocusHierarchicalIndex?


</td>
<td type class="table-cell-type">


<code>


(itemId: any) => undefined | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When `focusIdField` is set, the TreeView executes a depth-first search on the data to find the currently focused item.
 The `getFocusHierarchicalIndex` prop specifies the function that will be used as an alternative to the default search algorithm.

Example:
```jsx
<TreeView getFocusHierarchicalIndex={(id) => `custom-index-${id}`} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hasChildrenField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"hasChildren"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which indicates to the TreeView that an item has children even if the children are not initially passed. Used for implementing the load-on-demand feature ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/data-binding#toc-loading-data-on-demand)).




```jsx
<TreeView hasChildrenField="hasSubItems" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"svgIcon"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide an icon for the specific TreeView item.




```jsx
<TreeView iconField="icon" />
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


Specifies the `id` attribute of the TreeView container element.

Example:
```jsx
<TreeView id="treeview-component" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ItemRenderProps]({% slug api_treeview_itemrenderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be used for rendering each of the TreeView items ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/custom-rendering)).

Example:
```jsx
<TreeView item={(props) => <CustomTreeViewItem {...props} />} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCheckChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewCheckChangeEvent]({% slug api_treeview_treeviewcheckchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a checkbox is clicked or when `Space` is pressed on a focused item.

Example:
```jsx
<TreeView onCheckChange={(event) => console.log(event.item)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextMenu?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewContextMenuEvent]({% slug api_treeview_treeviewcontextmenuevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the ContextMenu is activated.

Example:
```jsx
<TreeView onContextMenu={(event) => console.log(event.item)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewExpandChangeEvent]({% slug api_treeview_treeviewexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when an item is expanded or collapsed.

Example:
```jsx
<TreeView onExpandChange={(event) => console.log(event.item)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemClick?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemClickEvent]({% slug api_treeview_treeviewitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an item is clicked or when `Enter` is pressed on a focused item ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/selection/update-selected-items)).

Example:
```jsx
<TreeView onItemClick={(event) => console.log(event.item)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemDragEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemDragEndEvent]({% slug api_treeview_treeviewitemdragendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a dragged item is dropped ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/drag-drop)).

Example:
```jsx
<TreeView onItemDragEnd={(event) => console.log(event.item)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemDragOver?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemDragOverEvent]({% slug api_treeview_treeviewitemdragoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a dragged item changes its position ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/drag-drop)).

Example:
```jsx
<TreeView onItemDragOver={(event) => console.log(event.item)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemDragStart?


</td>
<td type class="table-cell-type">


<code>


(event: [TreeViewItemDragStartEvent]({% slug api_treeview_treeviewitemdragstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the dragging of an item has started.

Example:
```jsx
<TreeView onItemDragStart={(event) => console.log(event.item)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"selected"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a Boolean representation for the selected state of the item.




```jsx
<TreeView selectField="isSelected" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the TreeView.

The available options are:
- small
- medium
- large




```jsx
<TreeView size="large" />
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


Sets the inline styles for the TreeView container element.

Example:
```jsx
<TreeView style={{ width: '300px', height: '400px' }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `tabIndex` attribute of the TreeView container element.

Example:
```jsx
<TreeView tabIndex={0} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"text"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the field which will provide a text representation for the item.




```jsx
<TreeView textField="label" />
```



</td>
</tr>
</tbody>
</table>



