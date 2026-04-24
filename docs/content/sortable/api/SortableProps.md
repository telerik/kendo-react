---
title: SortableProps
description: "Learn how to build custom functionality when working with the React Sortable by Kendo UI with the help of the SortableProps."
api_reference: true
type: inner_api
slug: api_sortable_sortableprops
---

# SortableProps
Represents the props of the [KendoReact Sortable component](https://www.telerik.com/kendo-react-ui/components/sortable).


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


#### animation?


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


Enables or disables the reorder animation of the Sortable items.
defaults to `true`.





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


Defines the CSS class which is applied to the Sortable element.

```jsx
<Sortable className="custom-sortable" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data


</td>
<td type class="table-cell-type">


<code>


object[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


(Required) The data items of the Sortable.

```jsx
<Sortable data={[{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabledField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field which enables or disables an item.

```jsx
<Sortable disabledField="isDisabled" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### emptyItemUI?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SortableEmptyItemUIProps]({% slug api_sortable_sortableemptyitemuiprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component that is rendered when no data is available.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### idField


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


(Required) The field which uniquely identifies the Sortable items.

```jsx
<Sortable idField="id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemUI


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SortableItemUIProps]({% slug api_sortable_sortableitemuiprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


(Required) The Sortable items UI.

```jsx
const ItemUI = (props) => <div>{props.dataItem.text}</div>;
<Sortable itemUI={ItemUI} />
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


If set to `true`, the user can use dedicated shortcuts to interact with the Sortable.
By default, navigation is disabled.

```jsx
<Sortable navigatable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigation?


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


Enables or disables the [keyboard navigation](https://www.telerik.com/kendo-react-ui/components/sortable/keyboard-navigation).
Defaults to `true`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [SortableOnDragEndEvent]({% slug api_sortable_sortableondragendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user stops dragging an item.

```jsx
<Sortable onDragEnd={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragOver?


</td>
<td type class="table-cell-type">


<code>


(event: [SortableOnDragOverEvent]({% slug api_sortable_sortableondragoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user is dragging an item over another Sortable item.

```jsx
<Sortable onDragOver={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragStart?


</td>
<td type class="table-cell-type">


<code>


(event: [SortableOnDragStartEvent]({% slug api_sortable_sortableondragstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user starts dragging an item. This event is preventable.

```jsx
<Sortable onDragStart={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNavigate?


</td>
<td type class="table-cell-type">


<code>


(event: [SortableOnNavigateEvent]({% slug api_sortable_sortableonnavigateevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user navigates within the Sortable by using the keyboard.

```jsx
<Sortable onNavigate={(event) => console.log(event)} />
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


Defines the CSS styles which are applied to the Sortable element.

```jsx
<Sortable style={{ border: '1px solid black' }} />
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


Specifies the tab index of the Sortable items.


</td>
</tr>
</tbody>
</table>



