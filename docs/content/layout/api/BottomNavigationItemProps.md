---
title: BottomNavigationItemProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the BottomNavigationItemProps."
api_reference: true
type: inner_api
slug: api_layout_bottomnavigationitemprops
---

# BottomNavigationItemProps
The interface for describing items that can be passed to the `items` prop of the BottomNavigation component.


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


Sets additional CSS classes to the BottomNavigation item.

```jsx
<BottomNavigationItem className="custom-class" />
```



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


Disables the BottomNavigationItem.




```jsx
<BottomNavigationItem disabled={true} />
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
The icon is rendered inside the BottomNavigationItem by a `span.k-icon` element.

```jsx
<BottomNavigationItem icon="home" />
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


Specifies if the BottomNavigationItem is selected.




```jsx
<BottomNavigationItem selected={true} />
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


Sets additional CSS styles to the BottomNavigation item.

```jsx
<BottomNavigationItem style={{ color: 'red' }} />
```



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


Defines an SVG icon.
The icon is rendered inside the BottomNavigationItem.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<BottomNavigationItem svgIcon={gearIcon} />
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


Sets the `tabIndex` prop of the BottomNavigationItem.




```jsx
<BottomNavigationItem tabIndex={-1} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text content of the BottomNavigationItem.

```jsx
<BottomNavigationItem text="Home" />
```



</td>
</tr>
</tbody>
</table>



