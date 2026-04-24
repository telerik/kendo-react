---
title: ListBoxProps
description: "Learn how to build custom functionality when working with the React ListBox by Kendo UI with the help of the ListBoxProps."
api_reference: true
type: inner_api
slug: api_listbox_listboxprops
---

# ListBoxProps
Represents the props of the [KendoReact ListBox component](https://www.telerik.com/kendo-react-ui/components/listbox).


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


Sets a `class` of the ListBox container.

```jsx
<ListBox className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the ListBox.

```jsx
<ListBox data={[{ text: 'Item 1' }, { text: 'Item 2' }]} />
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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Makes the items of the ListBox draggable.




```jsx
<ListBox draggable={false} />
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


Sets an `id` of the ListBox container.

```jsx
<ListBox id="listbox-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered for each item of the data collection.

```jsx
const CustomItem = (props) => <div>{props.text}</div>;

<ListBox item={CustomItem} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragLeave?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragLeaveEvent]({% slug api_listbox_listboxdragleaveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a dragged element or text selection leaves the ListBox element.

```jsx
<ListBox onDragLeave={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragOver?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragEvent]({% slug api_listbox_listboxdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user drags over an item from the ListBox. The event contains information about the item that is dragged over.

```jsx
<ListBox onDragOver={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragStart?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragEvent]({% slug api_listbox_listboxdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user starts to drag an item from the ListBox. The event contains information about the item that is being dragged.

```jsx
<ListBox onDragStart={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrop?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxDragEvent]({% slug api_listbox_listboxdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user drops an item. The event contains information about the drop target item.

```jsx
<ListBox onDrop={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemClick?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxItemClickEvent]({% slug api_listbox_listboxitemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an item from the ListBox is clicked. Contains the clicked item.

```jsx
<ListBox onItemClick={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxItemSelectEvent]({% slug api_listbox_listboxitemselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an item from the ListBox is selected. Contains the selected item.

```jsx
<ListBox onItemSelect={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyboardNavigate?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxItemNavigateEvent]({% slug api_listbox_listboxitemnavigateevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a keyboard navigation action is triggered.

```jsx
<ListBox onKeyboardNavigate={(event) => console.log(event.item)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [ListBoxKeyDownEvent]({% slug api_listbox_listboxkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on keydown over the ListBox list items. You can use it to add extra keyboard navigation options.

```jsx
<ListBox onKeyDown={(event) => console.log(event.keyCode)} />
```



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


Sets the selected field of the ListBox. Based on the value of this field, an item is selected or not.

```jsx
<ListBox selectedField="isSelected" />
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


Configures the `size` of the ListBox.

The available options are:
- small
- medium
- large




```jsx
<ListBox size="large" />
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


Specifies the styles which are set to the ListBox container.

```jsx
<ListBox style={{ width: '300px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data item field that represents the item text. If the data contains only primitive values, do not define it.

```jsx
<ListBox textField="name" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbar?


</td>
<td type class="table-cell-type">


<code>


"null" | ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders a toolbar component next to the ListBox.

```jsx
<ListBox toolbar={CustomToolbar} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbarPosition?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'right'


</code>


</td>
<td class="table-cell-comment">


Sets the position of the toolbar of the ListBox if one is set. The ListBox may have no toolbar.

The possible values are:
- `top`
- `bottom`
- `left`
- `right` (Default)
- `none`




```jsx
<ListBox toolbarPosition="top" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field that is used during form submission. Defaults to the `textField` if not set.

```jsx
<ListBox valueField="id" />
```



</td>
</tr>
</tbody>
</table>



