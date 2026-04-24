---
title: DrawerItemProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the DrawerItemProps."
api_reference: true
type: inner_api
slug: api_layout_draweritemprops
---

# DrawerItemProps
An interface for the Drawer items.


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


#### children?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the children that are passed to the DrawerItem.

Example:
```jsx
<DrawerItem>Item Content</DrawerItem>
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


Specifies a list of CSS classes that will be added to the DrawerItem element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


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


Specifies if the Drawer item is disabled.

Example:
```jsx
<DrawerItem disabled={true} />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the name for an existing icon in a KendoReact theme.

Example:
```jsx
<DrawerItem icon="home" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the index of the DrawerItem that is used to identify it.

Example:
```jsx
<DrawerItem index={0} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### level?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


This property is used in scenarios with hierarchical drawer. The rendering of the component requires each node to have a "`k-level-` + the level of nesting" className.

Example:
```jsx
<DrawerItem level={1} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


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


Specifies if the Drawer item is initially selected.

Example:
```jsx
<DrawerItem selected={true} />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### separator?


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


Specifies if this is a separator item.

Example:
```jsx
<DrawerItem separator={true} />
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


Sets additional CSS styles to the Drawer item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the SVG icon of the item.

Example:
```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<DrawerItem svgIcon={gearIcon} />
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


<code>


0


</code>


</td>
<td class="table-cell-comment">


Sets the `tabIndex` property of the DrawerItem.

Example:
```jsx
<DrawerItem tabIndex={1} />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text content of the Drawer item.

Example:
```jsx
<DrawerItem text="Dashboard" />
```


</td>
</tr>
</tbody>
</table>



