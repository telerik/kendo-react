---
title: ContextMenuProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the ContextMenuProps."
api_reference: true
type: inner_api
slug: api_layout_contextmenuprops
---

# ContextMenuProps
The props of the [KendoReact ContextMenu component](https://www.telerik.com/kendo-react-ui/components/layout/contextmenu).


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


boolean | PopupAnimation


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Controls the Popup animation.

```jsx
<Menu animate={{ openDuration: 200, closeDuration: 200 }} />
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


Sets the Menu items declaratively.

```jsx
<Menu>
  <MenuItem text="Item 1" />
  <MenuItem text="Item 2" />
</Menu>
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


Adds a custom className to the Menu top element.

```jsx
<Menu className="custom-menu" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### customCloseItemIds?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the ids of the Menu items that will not be closed on mouse-leave. The ids are hierarchical and zero-based.
The first root item has a `0` id. If the first root item has children,
the first child item acquires a `0_0` id and the second acquires a `0_1` id.

```jsx
<Menu customCloseItemIds={['0', '0_1']} />
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


Sets the direction of the Menu.

```jsx
<Menu dir="rtl" />
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


Sets the ID of the Menu.

```jsx
<Menu id="custom-menu" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React functional or class component which is used for rendering the innermost part of
the Menu item ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/rendering#toc-items)).
By default, the innermost item part includes only the text for the item.

```jsx
const CustomItem = (props) => <div>{props.text}</div>;
<Menu itemRender={CustomItem} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[MenuItemModel]({% slug api_layout_menuitemmodel %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Menu items.

```jsx
const items = [{ text: 'Item 1' }, { text: 'Item 2' }];
<Menu items={items} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### linkRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React functional or class component which is used for rendering the link of the item
([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/rendering#toc-links)).
The item link is a part of the visual representation of the item which, by default, includes an arrow, icon, and text.

```jsx
const CustomLink = (props) => <a href={props.href}>{props.text}</a>;
<Menu linkRender={CustomLink} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset


</td>
<td type class="table-cell-type">


<code>


Offset


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the absolute position of the ContextMenu. The Popover opens next to that point.

Example:
```jsx
<ContextMenu offset={{ left: 100, top: 200 }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose


</td>
<td type class="table-cell-type">


<code>


(event: [MenuCloseEvent]({% slug api_layout_menucloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers when the ContextMenu needs to hide.

Example:
```jsx
<ContextMenu onClose={(e) => setShow(false)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [MenuSelectEvent]({% slug api_layout_menuselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a Menu item is selected.

```jsx
<Menu onSelect={(event) => console.log(event.item.text)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### show


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the Popup visibility of the ContextMenu.

Example:
```jsx
<ContextMenu show={true} />
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


Sets additional CSS styles to the Menu.

```jsx
<Menu style={{ backgroundColor: 'lightblue' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### vertical?


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


Specifies whether the Menu will be vertical
([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/vertical)).

```jsx
<Menu vertical />
```






</td>
</tr>
</tbody>
</table>



