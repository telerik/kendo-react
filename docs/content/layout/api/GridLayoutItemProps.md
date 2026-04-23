---
title: GridLayoutItemProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the GridLayoutItemProps."
api_reference: true
type: inner_api
slug: api_layout_gridlayoutitemprops
---

# GridLayoutItemProps
Represents the props of the [KendoReact GridLayoutItem component](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout).


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


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The React elements that will be rendered inside the GridLayoutItem ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).

Example:
```jsx
<GridLayoutItem>Content</GridLayoutItem>
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


Sets additional CSS classes to the GridLayoutItem ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).

Example:
```jsx
<GridLayoutItem className="custom-class" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### col?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the column line from which the element will start ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).

Example:
```jsx
<GridLayoutItem col={1} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the number of columns over which the element will span ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).
Defaults to `1`.

Example:
```jsx
<GridLayoutItem colSpan={2} />
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


Sets the `id` property of the root GridLayoutItem element ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).

Example:
```jsx
<GridLayoutItem id="item-1" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### row?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the row line from which the element will start ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).

Example:
```jsx
<GridLayoutItem row={1} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the number of rows over which the element will span ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).
Defaults to `1`.

Example:
```jsx
<GridLayoutItem rowSpan={2} />
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


Sets additional CSS styles to the GridLayoutItem ([see example](https://www.telerik.com/kendo-react-ui/components/layout/gridlayout/items#toc-items)).

Example:
```jsx
<GridLayoutItem style={{ backgroundColor: 'red' }} />
```


</td>
</tr>
</tbody>
</table>



