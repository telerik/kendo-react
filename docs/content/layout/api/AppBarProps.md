---
title: AppBarProps
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the AppBarProps."
api_reference: true
type: inner_api
slug: api_layout_appbarprops
---

# AppBarProps
Represents the props of the [KendoReact AppBar component](https://www.telerik.com/kendo-react-ui/components/layout/appbar).
Used to display information, actions, branding titles and additional navigation on the current screen.


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


Represents the child elements that are passed to the AppBar.

```jsx
<AppBar>
  <div>Custom Content</div>
</AppBar>
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


Sets additional CSS classes to the AppBar.

```jsx
<AppBar className="custom-class" />
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


Sets the `id` property of the root AppBar element.

```jsx
<AppBar id="appbar1" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


[AppBarPosition]({% slug api_layout_appbarposition %})


</code>


</td>
<td class="table-cell-default">


<code>


top


</code>


</td>
<td class="table-cell-comment">


Specifies the AppBar position ([see example](https://www.telerik.com/kendo-react-ui/components/layout/appbar/positioning#toc-position)).

* The possible values are:
* 'top' (Default)
* 'bottom'




```jsx
<AppBar position="bottom" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### positionMode?


</td>
<td type class="table-cell-type">


<code>


[AppBarPositionMode]({% slug api_layout_appbarpositionmode %})


</code>


</td>
<td class="table-cell-default">


<code>


static


</code>


</td>
<td class="table-cell-comment">


Specifies the AppBar position mode ([see example](https://www.telerik.com/kendo-react-ui/components/layout/appbar/positioning#toc-position-mode)).

* The possible values are:
* 'static' (Default)
* 'sticky'
* 'fixed'




```jsx
<AppBar positionMode="sticky" />
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


Sets additional CSS styles to the AppBar.

```jsx
<AppBar style={{ backgroundColor: 'blue' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


[AppBarThemeColor]({% slug api_layout_appbarthemecolor %})


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Specifies the AppBar theme color ([see example](https://www.telerik.com/kendo-react-ui/components/layout/appbar/appearance)).

* The possible values are:
* 'light'
* 'primary'
* 'secondary'
* 'tertiary'
* 'info'
* 'success'
* 'warning'
* 'error'
* 'dark'
* 'inherit'
* 'inverse'




```jsx
<AppBar themeColor="primary" />
```



</td>
</tr>
</tbody>
</table>



